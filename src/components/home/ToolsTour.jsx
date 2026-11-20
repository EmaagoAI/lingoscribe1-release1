"use client";
import { useEffect, useRef, useState } from "react";
import { TOOL_TOUR_MS, TOOLS } from "@/data/home";
import { cx, fill } from "@/lib/format";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { TOOL_DEMOS } from "./ToolDemos";

// "What you can do with it": one tab per tool, each with a short line, a
// button, and a live demo. Until the visitor picks a tab, the tour moves on
// by itself (the active tab's border fills up); hovering pauses it.
// On phones the tabs sit in one row that scrolls sideways.
//   t   content.home.tools
//   tl  content.languages
export default function ToolsTour({ t, tl }) {
    const [index, setIndex] = useState(0);
    const [auto, setAuto] = useState(true);
    const tool = TOOLS[index];
    const copy = t.items[tool.id];
    const Demo = TOOL_DEMOS[tool.id];

    const tabsRef = useRef(null);

    // Keep the active tab in view when the tab row scrolls sideways (phones).
    useEffect(() => {
        const row = tabsRef.current;
        const tab = row?.children[index];
        if (!tab || row.scrollWidth <= row.clientWidth) return;
        row.scrollTo({ left: tab.offsetLeft - (row.clientWidth - tab.offsetWidth) / 2, behavior: "smooth" });
    }, [index]);

    const pick = (i) => { setAuto(false); setIndex(i); };
    const next = () => setIndex((i) => (i + 1) % TOOLS.length);

    return (
        <section id="tools" aria-labelledby="tools-title" className="bg-soft py-10 md:py-28">
            <Container className="flex flex-col gap-6 md:gap-10">
                <SectionHeading id="tools-title" title={t.title} />

                <div className="group/tour flex flex-col gap-5 md:gap-10">
                    <div ref={tabsRef} role="tablist" aria-label={t.tablistLabel}
                        className="-mx-5 flex gap-2 overflow-x-auto px-5 py-2 [scrollbar-width:none] md:mx-0 md:flex-wrap md:overflow-visible md:p-0">
                        {TOOLS.map((item, i) => {
                            const on = i === index;
                            return (
                                <button key={item.id} type="button" role="tab" aria-selected={on} aria-controls="tool-panel" onClick={() => pick(i)}
                                    className={cx(
                                        "relative min-h-[42px] shrink-0 whitespace-nowrap rounded-full border px-4 text-[15px] md:min-h-[46px] md:px-5 md:text-[15.5px] font-semibold transition duration-200 ease-soft hover:-translate-y-px hover:border-primary",
                                        on ? "bg-panel text-fg shadow-[0_6px_18px_var(--glow)]" : "border-rule text-fg-muted",
                                        on && (auto ? "border-primary/25" : "border-primary"),
                                    )}>
                                    {t.items[item.id].name}
                                    {item.soon && <span className="ml-2 rounded-full bg-chip-on px-2 py-0.5 text-xs font-semibold text-link">{t.soon}</span>}
                                    {/* while touring, the border fills right to left around the pill until it moves on */}
                                    {on && auto && (
                                        <span aria-hidden="true" onAnimationEnd={next}
                                            className="border-mask pointer-events-none absolute -inset-px animate-sweep rounded-full p-[1.5px] bg-[conic-gradient(transparent_calc(360deg-var(--sweep)),var(--primary)_0)] group-hover/tour:[animation-play-state:paused]"
                                            style={{ animationDuration: `${TOOL_TOUR_MS}ms` }} />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                    <p aria-live="polite" className="sr-only">{auto ? t.touring : fill(t.showing, { tool: copy.name })}</p>

                    <div key={tool.id} id="tool-panel" role="tabpanel" aria-label={copy.name}
                        className="grid items-center gap-5 md:gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-14">
                        <div className="flex animate-slide flex-col gap-3 md:gap-[18px]">
                            <h3 className="m-0 text-[26px] font-semibold md:text-[34px] leading-[1.1] tracking-[-0.03em] text-fg">{copy.name}</h3>
                            <p className="m-0 text-pretty text-base leading-relaxed text-fg-muted md:text-[17.5px]">{copy.body}</p>
                            <div className="md:pt-1.5"><Button href={tool.cta}>{copy.cta}</Button></div>
                        </div>
                        <div className="flex animate-slide flex-col justify-center rounded-[20px] border border-rule bg-panel px-4 py-4 shadow-card min-h-[282px] md:min-h-[330px] [animation-delay:80ms] [animation-duration:600ms] md:px-[34px] md:py-[30px]">
                            <Demo t={t.demos} tl={tl} />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
