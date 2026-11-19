"use client";
import { clock } from "@/lib/format";
import { isTranslated, varietyForRecording } from "@/lib/languages";
import NativeText from "@/components/ui/NativeText";
import { usePlayer } from "./PlayerProvider";
import { progressOf, segmentAt, wordStates } from "./playerState";
import SpokenWords from "./SpokenWords";

// Above the waveform in the open player: the line at the pointer (or at the
// playhead), in its own script and in English. Before anything happens, a hint.
// `t` is content.common.player.
export default function Caption({ t }) {
    const { state, recording } = usePlayer();
    const hovering = state.hover !== null;
    const live = state.started || state.finished;

    if (!hovering && !live) {
        return <p className="m-0 pb-2 text-center text-[15px] text-fg-muted sm:absolute sm:inset-x-0 sm:bottom-4 sm:pb-0">{t.hint}</p>;
    }

    const at = hovering ? state.hover : progressOf(state, recording);
    const index = segmentAt(recording, at * recording.duration);
    const seg = recording.segments[index];
    const lang = varietyForRecording(recording.id).language;

    return (
        <div className="w-full animate-fade [animation-duration:260ms] sm:absolute sm:inset-x-0 sm:bottom-3 sm:mx-auto sm:w-[min(640px,96%)]">
            <div className="relative rounded-2xl border border-rule bg-panel px-4 py-3 text-center shadow-lift">
                <NativeText as="p" lang={lang} className="m-0 text-[17px] leading-[1.7] text-fg sm:text-[19px]">
                    <SpokenWords words={wordStates(seg.text, index, state, recording)} />
                </NativeText>
                {isTranslated(lang) && (
                    <p className="m-0 mt-0.5 font-serif text-[15px] italic leading-[1.45] text-fg sm:text-base">
                        <SpokenWords words={wordStates(seg.translation, index, state, recording)} />
                    </p>
                )}
                {hovering && (
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-fg px-2 py-0.5 text-[11.5px] font-semibold tabular-nums text-bg">
                        {clock(at * recording.duration)}
                    </span>
                )}
            </div>
        </div>
    );
}
