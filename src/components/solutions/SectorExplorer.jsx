"use client";
import { useRef, useState } from "react";
import { SOLUTION_SECTORS } from "@/data/solutions";
import { cx } from "@/lib/format";
import Container from "@/components/ui/Container";
import SectorPanel from "./SectorPanel";

// The page opening with a tab per sector, and the chosen sector's sections
// below it. Arrow keys move between tabs. `t` is content.solutions.
export default function SectorExplorer({ t }) {
    const [active, setActive] = useState(SOLUTION_SECTORS[0].id);
    const tabs = useRef({});
    const sector = SOLUTION_SECTORS.find((s) => s.id === active);

    function onKeyDown(e) {
        const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
        if (!step) return;
        const i = SOLUTION_SECTORS.findIndex((s) => s.id === active);
        const next = SOLUTION_SECTORS[(i + step + SOLUTION_SECTORS.length) % SOLUTION_SECTORS.length].id;
        setActive(next);
        tabs.current[next]?.focus();
    }

    return (
        <>
            <section aria-labelledby="page-title" className="bg-bg pb-10 pt-11 md:pb-14 md:pt-20">
                <Container className="flex animate-rise flex-col gap-7">
                    <h1 id="page-title"
                        className="m-0 max-w-[15ch] text-balance text-[44px] font-semibold leading-[.98] tracking-[-0.045em] text-fg [font-variation-settings:'wdth'_90] md:text-[64px] lg:text-[80px]">
                        {t.hero.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
                        <div role="tablist" aria-label={t.hero.tabsLabel} onKeyDown={onKeyDown} className="flex flex-wrap gap-2.5">
                            {SOLUTION_SECTORS.map(({ id }) => {
                                const on = id === active;
                                return (
                                    <button key={id} ref={(el) => { tabs.current[id] = el; }} type="button" role="tab"
                                        id={`tab-${id}`} aria-selected={on} aria-controls={`panel-${id}`} tabIndex={on ? 0 : -1}
                                        onClick={() => setActive(id)}
                                        className={cx("min-h-11 cursor-pointer rounded-full border px-[18px] font-sans text-[15px] font-semibold text-fg transition-colors duration-200",
                                            on ? "border-primary bg-chip-on" : "border-rule bg-panel hover:border-primary/50")}>
                                        {t.sectors[id].tab}
                                    </button>
                                );
                            })}
                        </div>
                        <span className="text-[15px] leading-[1.45] text-fg-muted">{t.hero.later}</span>
                    </div>
                </Container>
            </section>

            <div key={active} role="tabpanel" id={`panel-${active}`} aria-labelledby={`tab-${active}`} className="animate-fade">
                <SectorPanel id={active} products={sector.products} copy={t.sectors[active]} labels={t.labels} productNames={t.products} />
            </div>
        </>
    );
}
