"use client";
import { useState } from "react";
import { Pause, Play } from "lucide-react";
import { LANGUAGES, SCRIPT_BAND, VARIETIES, liveVarieties } from "@/data/languages";
import { cx, fill } from "@/lib/format";
import { varietyLabel } from "@/lib/languages";
import Container from "@/components/ui/Container";
import NativeText from "@/components/ui/NativeText";
import SectionHeading from "@/components/ui/SectionHeading";
import useClipPlayer from "@/components/player/useClipPlayer";

// Every supported language: their names drifting by in their own scripts,
// then the full list. The ones with a recording play it right here, on their
// own, without changing the hero player. On phones the list starts short, with
// a "more" pill that shows the rest.
//   t   content.home.languages
//   tl  content.languages
export default function LanguagesSection({ t, tl }) {
    const clips = useClipPlayer();
    const [all, setAll] = useState(false);
    return (
        <section id="languages" aria-labelledby="lang-title" className="bg-bg py-20 md:py-28">
            <Container>
                <SectionHeading id="lang-title" size="md" title={fill(t.title, { count: liveVarieties().length })} />
            </Container>

            <div aria-hidden="true" className="group/band fade-edges mb-7 mt-10 flex flex-col gap-1.5 overflow-hidden py-2">
                <ScriptRow ids={SCRIPT_BAND} tl={tl} className="animate-marquee" size="text-[40px] md:text-[52px]" />
                <ScriptRow ids={[...SCRIPT_BAND].reverse()} tl={tl} className="animate-marquee-reverse opacity-70" size="text-[32px] md:text-[40px]" />
            </div>

            <Container className="flex flex-col gap-4">
                <ul aria-label={t.listLabel} className="m-0 flex list-none flex-wrap gap-2 p-0">
                    {VARIETIES.map((v, i) => (
                        <LanguageChip key={v.id} variety={v} clips={clips} t={t} tl={tl} className={!all && i >= PHONE_LIMIT && "max-md:hidden"} />
                    ))}
                    {!all && (
                        <li className="md:hidden">
                            <button type="button" onClick={() => setAll(true)} className={cx(CHIP, "border-primary px-4 font-semibold text-primary")}>
                                {fill(t.more, { count: VARIETIES.length - PHONE_LIMIT })}
                            </button>
                        </li>
                    )}
                </ul>
                <span className="text-[14.5px] leading-[1.45] text-fg-muted">{t.note}</span>
            </Container>
        </section>
    );
}

// One scrolling row. The names are drawn twice so the loop has no gap.
function ScriptRow({ ids, tl, className, size }) {
    return (
        <div className={cx("flex w-max group-hover/band:[animation-play-state:paused]", className)}>
            {[...ids, ...ids].map((id, i) => (
                <span key={i} className="inline-flex items-baseline gap-4 whitespace-nowrap px-9">
                    <NativeText lang={id} className={cx("leading-normal text-fg", size)}>{LANGUAGES[id].native}</NativeText>
                    <span className="text-[17px] font-medium text-fg-muted">{tl.names[id]}</span>
                </span>
            ))}
        </div>
    );
}

// How many chips phones show before the "more" pill.
const PHONE_LIMIT = 8;

const CHIP = "inline-flex min-h-10 items-center rounded-full border text-[15px]";

function LanguageChip({ variety, clips, t, tl, className }) {
    const label = varietyLabel(variety, tl);

    if (variety.status === "next") {
        return <li className={cx(CHIP, "border-dashed border-bar-off px-4 text-fg-muted", className)}>{fill(t.next, { language: label })}</li>;
    }
    if (variety.recording) {
        const playing = clips.playingId === variety.recording;
        const Icon = playing ? Pause : Play;
        return (
            <li className={className || undefined}>
                <button type="button" onClick={() => clips.toggle(variety.recording)} aria-pressed={playing} title={fill(t.hear, { language: label })}
                    className={cx(CHIP, "gap-2 border-primary pl-1.5 pr-4 font-medium transition hover:-translate-y-px", playing ? "bg-primary text-white" : "bg-chip-on text-fg")}>
                    <span className={cx("grid size-7 place-items-center rounded-full", playing ? "bg-white text-primary" : "bg-primary text-white")}>
                        <Icon size={12} fill="currentColor" strokeWidth={0} className={playing ? "" : "ml-px"} aria-hidden="true" />
                    </span>
                    {label}
                </button>
            </li>
        );
    }
    return <li className={cx(CHIP, "border-rule bg-panel px-4 font-medium text-fg", className)}>{label}</li>;
}
