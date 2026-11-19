"use client";
import { Check } from "lucide-react";
import { ROUTES } from "@/config/routes";
import { RECORDINGS } from "@/data/recordings";
import { clock, cx, fill } from "@/lib/format";
import { isRtl, isTranslated, varietyForRecording, varietyLabel } from "@/lib/languages";
import Button from "@/components/ui/Button";
import NativeText from "@/components/ui/NativeText";
import PlayButton from "@/components/player/PlayButton";
import { usePlayer } from "@/components/player/PlayerProvider";
import { segmentAt, stepStates, wordStates } from "@/components/player/playerState";
import SpokenWords from "@/components/player/SpokenWords";
import Waveform from "@/components/player/Waveform";

// The languages page's player: every real recording as a tab, the waveform,
// the transcript and English line by line (click one to play from there), and
// what Lingoscribe returns, step by step, as it listens.
// Runs on the shared PlayerProvider, so it plays one clip at a time.
//   t   content.languagesPage.player
//   tp  content.common.player (play, pause, seek labels)
//   tl  content.languages
export default function RecordingStudio({ t, tp, tl }) {
    const { state, recording, toggle } = usePlayer();
    return (
        <figure className="relative m-0 animate-rise rounded-[20px] border border-rule bg-panel shadow-card [animation-delay:420ms]">
            {state.playing && (
                <span aria-hidden="true"
                    className="border-mask pointer-events-none absolute inset-0 animate-orbit rounded-[20px] p-0.5 bg-[conic-gradient(from_var(--orbit-angle),var(--primary),var(--tide),transparent_45%,transparent_60%,var(--primary))]" />
            )}
            <ClipTabs t={t} tl={tl} />

            <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-4 gap-y-3 px-4 pb-1.5 pt-4 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:gap-x-[22px] sm:px-[26px] sm:pt-[18px]">
                <PlayButton playing={state.playing} onClick={toggle} label={state.playing ? tp.pause : tp.play} size={64}
                    invite={!state.started && !state.finished} />
                <Waveform key={recording.id} label={tp.seek} height={64} grow />
                <span className="col-span-2 flex items-center justify-end gap-2.5 sm:col-span-1 sm:min-w-28">
                    {state.playing && <Eq />}
                    <span className="text-[15px] font-semibold tabular-nums text-fg">
                        {clock(state.time)}<span className="font-normal text-fg-muted"> / {clock(Math.round(recording.duration))}</span>
                    </span>
                </span>
            </div>

            <Lines t={t} />
            <Returns t={t} />

            <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 pb-[22px] pt-[18px] sm:px-[26px]">
                <span className="text-[14.5px] text-fg-muted">{t.footer}</span>
                <Button href={ROUTES.signup}>{t.cta}</Button>
            </div>
        </figure>
    );
}

// One tab per real recording.
function ClipTabs({ t, tl }) {
    const { recording, selectRecording } = usePlayer();
    return (
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 pb-1 pt-4 sm:px-[26px] sm:pt-5">
            <div role="group" aria-label={t.choose} className="-mx-4 flex gap-2 overflow-x-auto px-4 py-0.5 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
                {RECORDINGS.map((r) => {
                    const on = r.id === recording.id;
                    return (
                        <button key={r.id} type="button" aria-pressed={on} onClick={() => !on && selectRecording(r.id)}
                            className={cx(
                                "min-h-10 shrink-0 cursor-pointer whitespace-nowrap rounded-full border px-4 text-[14.5px] font-medium text-fg transition hover:border-primary",
                                on ? "border-primary bg-chip-on" : "border-rule bg-panel",
                            )}>
                            {varietyLabel(varietyForRecording(r.id), tl)}
                        </button>
                    );
                })}
            </div>
            <span className="text-sm text-fg-muted">{t.real}</span>
        </div>
    );
}

// The transcript (in its own script) above the English, segment by segment.
// On wide screens each segment is as wide as it is long in the clip.
function Lines({ t }) {
    const { state, recording, seek } = usePlayer();
    const variety = varietyForRecording(recording.id);
    const current = state.started ? segmentAt(recording, state.time) : -1;
    const columns = { "--cols": recording.segments.map((s) => `${(s.end - s.start).toFixed(1)}fr`).join(" ") };

    const row = (field, render, align) => (
        <div className="grid gap-1.5 md:grid-cols-(--cols)" style={columns}>
            {recording.segments.map((s, i) => (
                <button key={i} type="button" onClick={() => seek(s.start + 0.01)} aria-label={fill(t.playFrom, { time: clock(s.start) })}
                    className={cx(
                        "block cursor-pointer rounded-[10px] px-3.5 py-2 transition-colors hover:bg-soft",
                        align,
                        i === current ? "bg-chip-on shadow-[inset_0_0_0_1px_var(--primary)]" : "shadow-[inset_0_0_0_1px_var(--rule)]",
                    )}>
                    {render(wordStates(s[field], i, state, recording))}
                </button>
            ))}
        </div>
    );

    return (
        <div key={recording.id} className="flex animate-fade flex-col gap-1 px-4 pb-1 pt-2.5 sm:px-[26px]">
            {row("text", (words) => (
                <NativeText lang={variety.language} className="block text-xl leading-[1.8] md:text-2xl"><SpokenWords words={words} /></NativeText>
            ), isRtl(variety.language) ? "text-right" : "text-left")}
            {isTranslated(variety.language) && row("translation", (words) => (
                <span className="block font-serif text-[17px] italic leading-normal md:text-[19.5px]"><SpokenWords words={words} /></span>
            ), "text-left")}
        </div>
    );
}

// The four steps, then the summary and keywords once they're "found".
function Returns({ t }) {
    const { state, recording } = usePlayer();
    // An English recording has nothing to translate, so it skips that step.
    const english = !isTranslated(varietyForRecording(recording.id).language);
    const steps = stepStates(state, recording).filter((s) => !(english && s.id === "translate"));
    const done = (id) => steps.find((s) => s.id === id).done;
    return (
        <div className="mx-4 mt-3.5 flex flex-col gap-3.5 rounded-[14px] bg-soft px-[18px] py-4 sm:mx-[26px]">
            <ol aria-label={t.returns} className="m-0 flex list-none flex-wrap gap-2 p-0">
                {steps.map((s) => (
                    <li key={s.id}
                        className={cx(
                            "inline-flex min-h-[34px] items-center gap-1.5 rounded-full border py-0 pl-2 pr-3.5 text-sm font-medium transition-colors",
                            s.done ? "border-primary bg-chip-on text-fg" : s.busy ? "border-primary bg-panel text-fg" : "border-rule text-fg-muted",
                        )}>
                        {s.done
                            ? <Check size={16} strokeWidth={2.6} className="animate-pop text-primary" aria-hidden="true" />
                            : <span aria-hidden="true" className={cx("m-1 size-[9px] rounded-full", s.busy ? "animate-blink bg-primary" : "border-[1.5px] border-bar-off")} />}
                        {t.steps[s.id]}
                    </li>
                ))}
            </ol>
            {!state.started && !state.finished && <p className="m-0 text-[15px] leading-[1.55] text-fg-muted">{t.hint}</p>}
            {done("summarise") && (
                <p className="m-0 animate-fade text-base leading-[1.55] text-fg"><span className="font-semibold">{t.summary}</span> {recording.summary}</p>
            )}
            {done("keywords") && (
                <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[15px] font-semibold text-fg">{t.keywords}</span>
                    {recording.keywords.map((k, i) => (
                        <span key={k} className="animate-pop rounded-full bg-marker px-3 py-1 text-sm font-medium text-marker-ink" style={{ animationDelay: `${i * 120}ms` }}>{k}</span>
                    ))}
                </div>
            )}
        </div>
    );
}

// Four small bars bouncing while the clip plays.
function Eq() {
    return (
        <span aria-hidden="true" className="inline-flex h-4 items-center gap-0.5">
            {[0, 1, 2, 3].map((i) => (
                <span key={i} className="h-4 w-[3px] animate-eq rounded-xs bg-tide"
                    style={{ animationDuration: `${0.7 + i * 0.13}s`, animationDelay: `${i * 0.11}s` }} />
            ))}
        </span>
    );
}
