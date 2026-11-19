"use client";
import { PLAYER_ANCHOR } from "@/config/routes";
import { clock } from "@/lib/format";
import { varietyForRecording, varietyLabel } from "@/lib/languages";
import { usePlayer } from "./PlayerProvider";
import PlayButton from "./PlayButton";

// A small bar pinned to the bottom of the screen while a clip plays and the
// hero player has scrolled out of view, with a link back to it.
const LEVELS = [0.7, 0.83, 0.96, 1.09];

export default function MiniPlayer({ t, tl }) {
    const { state, recording, toggle } = usePlayer();
    if (!state.playing) return null;

    return (
        <div className="show-after-hero fixed bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3.5 rounded-full bg-inv py-2 pl-2 pr-5 text-white shadow-[0_18px_50px_rgba(7,11,25,0.35)]">
            <PlayButton playing onClick={toggle} label={t.pause} size={44} />
            <span aria-hidden="true" className="inline-flex h-4 items-center gap-0.5">
                {LEVELS.map((d, i) => (
                    <span key={i} className="h-4 w-[3px] animate-eq rounded-sm bg-[#7fe0d6]" style={{ animationDuration: `${d}s`, animationDelay: `${i * 0.11}s` }} />
                ))}
            </span>
            <span className="text-[14.5px] font-semibold">{varietyLabel(varietyForRecording(recording.id), tl)}</span>
            <span className="hidden text-sm tabular-nums text-inv-sub sm:inline">{clock(state.time)} / {clock(Math.round(recording.duration))}</span>
            <a href={`#${PLAYER_ANCHOR}`} className="hidden text-sm font-semibold text-white underline underline-offset-4 sm:inline">{t.backToTranscript}</a>
        </div>
    );
}
