"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { cx } from "@/lib/format";
import { usePlayer } from "./PlayerProvider";
import { progressOf } from "./playerState";

// The clip's waveform, drawn from its loudness envelope. Played bars blend
// from the primary colour to the tide colour; a line marks the playhead.
// Clicking jumps there. `height` is the tallest bar in px.
// It draws as many bars as fit (about one per 3px), so it stays readable on
// narrow screens.
const PX_PER_BAR = 3;

// Shrink the envelope to `count` bars, keeping the loudest point of each stretch.
function resample(envelope, count) {
    if (count >= envelope.length) return envelope;
    const step = envelope.length / count;
    return Array.from({ length: count }, (_, i) => Math.max(...envelope.slice(Math.floor(i * step), Math.floor((i + 1) * step))));
}

export default function Waveform({ label, height = 46, grow = false, onPointerMove, onPointerLeave, className }) {
    const { state, recording, seek } = usePlayer();
    const p = progressOf(state, recording);
    const live = state.started || state.finished;

    const ref = useRef(null);
    const [fit, setFit] = useState(Infinity); // how many bars fit; all of them until measured
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const ro = new ResizeObserver(([entry]) => setFit(Math.max(24, Math.floor(entry.contentRect.width / PX_PER_BAR))));
        ro.observe(el);
        return () => ro.disconnect();
    }, []);
    const bars = useMemo(() => resample(recording.envelope, fit), [recording.envelope, fit]);
    const n = bars.length;

    const jump = (e) => {
        const r = e.currentTarget.getBoundingClientRect();
        seek(Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)) * recording.duration);
    };

    return (
        <button ref={ref} type="button" onClick={jump} aria-label={label} onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}
            className={cx("group relative min-w-0 flex-1 cursor-pointer p-0", className)}>
            <span aria-hidden="true" className="flex items-center justify-between gap-px overflow-hidden" style={{ height: height + 2 }}>
                {bars.map((v, i) => {
                    const pos = (i + 0.5) / n;
                    const played = live && pos <= p;
                    const atHead = state.playing && Math.abs(pos - p) < 0.012;
                    return (
                        <span key={`${recording.id}-${i}`}
                            className={cx(
                                "min-w-0 max-w-[3px] flex-1 rounded-xs bg-bar-off transition-[background-color,transform] duration-150 group-hover:opacity-80",
                                grow && "animate-grow",
                            )}
                            style={{
                                height: Math.min(height, Math.max(3, Math.round(v * 66))),
                                background: played ? `color-mix(in oklab, var(--primary), var(--tide) ${Math.round(pos * 100)}%)` : undefined,
                                transform: atHead ? "scaleY(1.22)" : undefined,
                                animationDelay: grow ? `${Math.round((i * 720) / n)}ms` : undefined,
                            }} />
                    );
                })}
            </span>
            <span aria-hidden="true" className="absolute -inset-y-1 w-0.5 rounded-xs bg-fg transition-[left] duration-200 ease-linear" style={{ left: `${(p * 100).toFixed(2)}%` }} />
        </button>
    );
}
