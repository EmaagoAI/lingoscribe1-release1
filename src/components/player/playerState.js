import { getRecording, RECORDINGS } from "@/data/recordings";
import { getVariety } from "@/data/languages";
import { varietyForRecording } from "@/lib/languages";

// State of the hero player, and everything derived from it. Pure functions
// only: the audio element and React live in PlayerProvider.
//
//   recordingId  the clip loaded in the player
//   varietyId    the language picked in the picker (may have no clip: then the
//                player shows "no public sample" instead of the waveform)
//   time         seconds into the clip
//   playing      audio is playing now
//   started      has been played (or sought) since it was loaded
//   finished     reached the end
//   expanded     the full player is open (it opens on first play)
//   picked       the visitor chose a clip, so the slim bar stops cycling through them
//   pickerOpen   the language picker is open
//   hover        0..1 position of the pointer over the waveform, or null

const first = RECORDINGS[0];

export const initialState = {
    recordingId: first.id,
    varietyId: varietyForRecording(first.id).id,
    time: 0,
    playing: false,
    started: false,
    finished: false,
    expanded: false,
    picked: false,
    pickerOpen: false,
    hover: null,
};

const fresh = { time: 0, playing: false, started: false, finished: false, hover: null };

export function playerReducer(state, action) {
    switch (action.type) {
        case "play":
            return { ...state, playing: true, started: true, finished: false, expanded: true, picked: true };
        case "pause":
            return { ...state, playing: false };
        case "time":
            return { ...state, time: action.time };
        case "ended":
            return { ...state, playing: false, started: false, finished: true, time: getRecording(state.recordingId).duration };
        case "seek":
            return { ...state, started: true, finished: false };
        case "selectRecording":
            return {
                ...state, ...fresh,
                recordingId: action.id,
                varietyId: varietyForRecording(action.id).id,
                picked: state.picked || !action.auto,
                pickerOpen: false,
            };
        case "selectVariety":
            // a language with no public clip: keep the clip loaded, show the message
            return { ...state, playing: false, hover: null, varietyId: action.id, pickerOpen: false };
        case "togglePicker":
            return { ...state, pickerOpen: !state.pickerOpen };
        case "closePicker":
            return { ...state, pickerOpen: false };
        case "collapse":
            return { ...state, expanded: false, pickerOpen: false, varietyId: varietyForRecording(state.recordingId).id };
        case "hover":
            return { ...state, hover: action.at };
        default:
            return state;
    }
}

// ---- derived values ----

// Steps the player walks through while a clip plays, and when each starts (0..1 of the clip).
export const STEPS = [
    { id: "transcribe", at: 0.12 },
    { id: "translate", at: 0.3 },
    { id: "summarise", at: 0.55 },
    { id: "keywords", at: 0.78 },
];

export const progressOf = (state, recording) => Math.min(1, state.time / recording.duration);

export const hasSample = (state) => Boolean(getVariety(state.varietyId)?.recording);

export function segmentAt(recording, time) {
    let index = 0;
    recording.segments.forEach((s, i) => { if (time >= s.start) index = i; });
    return index;
}

export function stepStates(state, recording) {
    const p = progressOf(state, recording);
    const done = (i) => state.finished || (state.started && p >= STEPS[i].at);
    return STEPS.map((step, i) => {
        const isDone = done(i);
        const prevDone = i === 0 ? state.started : done(i - 1);
        return { id: step.id, done: isDone, busy: !isDone && state.started && prevDone };
    });
}

// Words of one segment, each marked: "said" (already spoken), "now" (being
// spoken), "ahead" (not yet), or "plain" (nothing has played).
export function wordStates(text, segmentIndex, state, recording) {
    const words = text.split(" ").filter(Boolean);
    if (!state.started) return words.map((word) => ({ word, state: "plain" }));
    const current = segmentAt(recording, state.time);
    const seg = recording.segments[segmentIndex];
    const now = segmentIndex === current
        ? Math.min(words.length - 1, Math.floor(((state.time - seg.start) / (seg.end - seg.start)) * words.length))
        : -1;
    return words.map((word, j) => {
        if (segmentIndex < current || (segmentIndex === current && j < now)) return { word, state: "said" };
        if (segmentIndex === current && j === now) return { word, state: "now" };
        return { word, state: "ahead" };
    });
}

// Where each keyword is said in the clip (as % of the waveform), and whether
// the playback has reached it yet.
export function keywordPins(state, recording) {
    const bare = (w) => w.toLowerCase().replace(/[^a-z0-9]/g, "");
    const live = state.started || state.finished;
    return recording.keywords.flatMap((keyword) => {
        for (const seg of recording.segments) {
            const words = seg.translation.split(" ");
            const j = words.findIndex((w) => bare(w) === bare(keyword));
            if (j < 0) continue;
            const at = seg.start + ((seg.end - seg.start) * (j + 0.5)) / words.length;
            return [{
                keyword,
                left: Math.min(93, Math.max(7, (100 * at) / recording.duration)),
                shown: state.finished || (live && state.time >= at),
            }];
        }
        return [];
    });
}

// Which status line to show: a key into content.common.player.status / .steps.
export function statusKey(state, recording, { detailed }) {
    if (state.finished) return detailed ? "status.done" : "status.finished";
    if (state.playing) {
        const busy = detailed && stepStates(state, recording).find((s) => s.busy);
        return busy ? `steps.${busy.id}` : "status.listening";
    }
    return state.started ? "status.paused" : "status.idle";
}
