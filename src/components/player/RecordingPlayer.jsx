"use client";
import { useEffect, useRef } from "react";
import { ChevronUp } from "lucide-react";
import { PLAYER_ANCHOR } from "@/config/routes";
import { RECORDINGS } from "@/data/recordings";
import { clock, cx } from "@/lib/format";
import { nativeName, varietyForRecording, varietyLabel } from "@/lib/languages";
import NativeText from "@/components/ui/NativeText";
import Caption from "./Caption";
import LanguagePicker from "./LanguagePicker";
import MiniPlayer from "./MiniPlayer";
import NoSample from "./NoSample";
import PlayButton from "./PlayButton";
import { usePlayer } from "./PlayerProvider";
import { hasSample, keywordPins, statusKey, stepStates } from "./playerState";
import Waveform from "./Waveform";

// The hero's real-recording player. It starts as a slim bar that cycles
// through the clips; pressing play opens it wide, with the transcript and
// English above the waveform, the keywords on it, and the summary below.
//   t   content.common.player
//   tl  content.languages
const TUNE_MS = 3600; // how long the slim bar shows each clip before moving on

// Reads "status.idle" or "steps.translate" out of the player's content.
const lookup = (t, key) => key.split(".").reduce((o, k) => o[k], t);

export default function RecordingPlayer({ t, tl, className }) {
    const { state } = usePlayer();
    const figureRef = useRef(null);

    // When the player opens it grows taller, so bring the whole of it into view,
    // but only if the visitor is looking at it (not when a clip is played from
    // the language list further down).
    useEffect(() => {
        if (!state.expanded) return;
        const frame = requestAnimationFrame(() => {
            const box = figureRef.current?.getBoundingClientRect();
            if (!box || box.top >= window.innerHeight || box.bottom <= 0) return;
            const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            figureRef.current.scrollIntoView({ block: "nearest", behavior: calm ? "auto" : "smooth" });
        });
        return () => cancelAnimationFrame(frame);
    }, [state.expanded]);

    return (
        <>
            <figure id={PLAYER_ANCHOR} ref={figureRef}
                className={cx(
                    "relative mx-auto my-0 scroll-mt-28 scroll-mb-6 rounded-[26px] border border-rule bg-panel transition-[max-width,box-shadow] duration-700 ease-soft",
                    state.expanded ? "max-w-[1184px] shadow-lift" : "max-w-[860px] shadow-card",
                    className,
                )}>
                {state.playing && (
                    <span aria-hidden="true"
                        className="border-mask pointer-events-none absolute inset-0 animate-orbit rounded-[26px] p-0.5 bg-[conic-gradient(from_var(--orbit-angle),var(--primary),var(--tide),transparent_45%,transparent_60%,var(--primary))]" />
                )}
                {state.expanded ? <OpenPlayer t={t} tl={tl} /> : <SlimBar t={t} tl={tl} />}
            </figure>
            {/* outside the figure: its entry animation leaves a transform, which would pin this to the figure instead of the screen */}
            <MiniPlayer t={t} tl={tl} />
        </>
    );
}

// ---- the two layouts ----

function SlimBar({ t, tl }) {
    const { state, recording, toggle } = usePlayer();
    const tuning = !state.started && !state.finished && !state.picked && !state.playing;
    return (
        <div className="flex flex-wrap items-center gap-x-[18px] gap-y-3 py-3.5 pl-3.5 pr-[22px] sm:flex-nowrap">
            <PlayButton playing={state.playing} onClick={toggle} label={state.playing ? t.pause : t.play} invite={!state.started && !state.finished} />
            <div className="relative h-[54px] min-w-0 flex-1 text-left sm:w-[236px] sm:flex-none">
                <ClipLabel key={recording.id} tl={tl} status={lookup(t, statusKey(state, recording, { detailed: false }))} />
                {tuning && <TuneTimer key={`tune-${recording.id}`} />}
            </div>
            <Waveform label={t.seek} grow className="order-last basis-full sm:order-none sm:basis-auto" />
            <Time />
        </div>
    );
}

function OpenPlayer({ t, tl }) {
    const { state } = usePlayer();
    return (
        <div className="animate-fade [animation-duration:520ms]">
            <div className="flex items-center justify-between gap-x-6 gap-y-3 px-4 pt-4 sm:flex-wrap sm:px-5">
                <LanguagePicker t={t} tl={tl} />
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2.5">
                    <span className="hidden items-center gap-2 text-sm text-fg-muted sm:inline-flex">
                        {t.translateInto}
                        <span className="rounded-full border border-rule px-3 py-1.5 font-medium text-fg">{t.targetLanguage}</span>
                    </span>
                    <CollapseButton t={t} />
                </div>
            </div>
            {hasSample(state) ? <Listening t={t} /> : <NoSample t={t} tl={tl} />}
        </div>
    );
}

function Listening({ t }) {
    const { state, recording, toggle, hover } = usePlayer();
    const summarised = stepStates(state, recording).find((s) => s.id === "summarise").done;
    const moveOver = (e) => {
        const r = e.currentTarget.getBoundingClientRect();
        hover(Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)));
    };
    return (
        <>
            <div className="relative mx-4 mt-2 flex min-h-[132px] items-end sm:mx-5 sm:mt-0 sm:block sm:h-[150px] sm:min-h-0"><Caption t={t} /></div>
            <div className="flex items-end gap-3 px-4 pb-4 sm:gap-4 sm:px-5">
                <PlayButton playing={state.playing} onClick={toggle} label={state.playing ? t.pause : t.play} size={52} invite={!state.started && !state.finished} />
                <div className="relative flex min-w-0 flex-1 pt-5">
                    <Waveform label={t.seek} height={54} onPointerMove={moveOver} onPointerLeave={() => hover(null)} />
                    <KeywordPins />
                </div>
                <Time className="pb-4" />
            </div>
            <div className="flex min-h-[52px] flex-wrap items-center gap-x-5 gap-y-2.5 border-t border-rule px-4 py-3 sm:px-5">
                <span aria-live="polite" className="text-sm text-fg-muted">{lookup(t, statusKey(state, recording, { detailed: true }))}</span>
                {summarised && (
                    <p className="m-0 animate-fade text-[15.5px] text-fg"><span className="font-semibold">{t.inShort}</span> {recording.summary}</p>
                )}
            </div>
        </>
    );
}

// ---- small parts ----

function ClipLabel({ tl, status }) {
    const { recording } = usePlayer();
    const variety = varietyForRecording(recording.id);
    return (
        <div className="absolute inset-0 flex animate-tune flex-col justify-center gap-px">
            <span className="flex min-w-0 items-baseline gap-2.5 whitespace-nowrap">
                <NativeText lang={variety.language} className="shrink-0 text-[21px] leading-[1.3] text-primary">{nativeName(variety)}</NativeText>
                <span className="truncate text-base font-semibold text-fg">{varietyLabel(variety, tl)}</span>
            </span>
            <span aria-live="polite" className="truncate text-[13.5px] text-fg-muted">{status}</span>
        </div>
    );
}

// A thin line under the label that fills while the slim bar shows a clip,
// then moves on to the next one.
function TuneTimer() {
    const { recording, selectRecording } = usePlayer();
    const next = () => {
        const i = RECORDINGS.findIndex((r) => r.id === recording.id);
        selectRecording(RECORDINGS[(i + 1) % RECORDINGS.length].id, { auto: true });
    };
    return (
        <span aria-hidden="true" onAnimationEnd={next}
            className="absolute -bottom-1 left-0 right-7 h-0.5 animate-progress rounded-xs bg-primary opacity-45"
            style={{ animationDuration: `${TUNE_MS}ms` }} />
    );
}

function KeywordPins() {
    const { state, recording } = usePlayer();
    return (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            {keywordPins(state, recording).map((pin) => (
                <span key={pin.keyword} className="absolute -top-0.5 flex -translate-x-1/2 flex-col items-center gap-0.5 transition-opacity duration-500"
                    style={{ left: `${pin.left}%`, opacity: pin.shown ? 1 : 0 }}>
                    <span className="whitespace-nowrap rounded-full bg-marker px-[7px] py-px text-[11.5px] font-semibold text-marker-ink">{pin.keyword}</span>
                    <span className="h-[52px] w-px bg-marker-ink opacity-35" />
                </span>
            ))}
        </div>
    );
}

function CollapseButton({ t }) {
    const { collapse } = usePlayer();
    return (
        <button type="button" onClick={collapse} aria-label={t.showLessLabel}
            className="inline-flex min-h-9 shrink-0 items-center gap-1.5 rounded-full border border-rule px-3 text-sm sm:px-3.5 font-medium text-fg-muted transition hover:-translate-y-px hover:border-primary">
            <ChevronUp size={14} aria-hidden="true" /><span className="max-sm:sr-only">{t.showLess}</span>
        </button>
    );
}

function Time({ className }) {
    const { state, recording } = usePlayer();
    return (
        <span className={cx("shrink-0 text-[14.5px] font-semibold tabular-nums text-fg", className)}>
            {clock(state.time)}<span className="font-normal text-fg-muted"> / {clock(Math.round(recording.duration))}</span>
        </span>
    );
}
