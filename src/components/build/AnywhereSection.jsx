import { ROUTES } from "@/config/routes";
import { ANYWHERE } from "@/data/build";
import { liveVarieties } from "@/data/languages";
import { WORLD_MAP } from "@/data/worldMap";
import { fill } from "@/lib/format";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { SectionLead, SectionTitle } from "@/components/ui/SectionHeading";

// "Any language, around the world": a dot map with Pakistan lit, and what we
// can do for a new language. `t` is content.build.anywhere.
export default function AnywhereSection({ t }) {
    const label = fill(t.mapLabel, { count: liveVarieties().length });
    return (
        <section id="anywhere" aria-labelledby="any-title" className="scroll-mt-20 bg-bg py-14 md:py-[104px]">
            <Container className="flex flex-col gap-10 md:gap-11">
                <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
                    <div className="flex flex-col gap-[18px]">
                        <SectionTitle id="any-title">{t.title}</SectionTitle>
                        <SectionLead className="max-w-[30em]">{t.body}</SectionLead>
                        <div><Button href={ROUTES.sales} size="lg">{t.cta}</Button></div>
                    </div>
                    <figure className="relative m-0 flex flex-col gap-3">
                        <svg viewBox={WORLD_MAP.viewBox} aria-hidden="true" className="block h-auto w-full">
                            <path d={WORLD_MAP.land} fill="none" strokeLinecap="round" strokeWidth={3.36} className="stroke-map-dot opacity-80" />
                            <path d={WORLD_MAP.home} fill="none" strokeLinecap="round" strokeWidth={2.44} className="stroke-primary" />
                        </svg>
                        {/* beside Pakistan where the page is wide enough for it, under the map otherwise */}
                        <figcaption className="text-sm leading-[1.45] text-fg-muted min-[1400px]:absolute min-[1400px]:-translate-y-1/2 min-[1400px]:translate-x-[26px] min-[1400px]:whitespace-nowrap"
                            style={{ left: `${WORLD_MAP.label.x}%`, top: `${WORLD_MAP.label.y}%` }}>
                            {label}
                        </figcaption>
                    </figure>
                </div>
                <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
                    {ANYWHERE.map((id) => (
                        <li key={id}
                            className="flex flex-col gap-3 rounded-2xl border border-rule bg-panel px-6 py-[26px] transition duration-300 ease-soft hover:-translate-y-1 hover:border-primary hover:shadow-lift">
                            <h3 className="m-0 text-[19px] font-semibold leading-tight tracking-[-0.015em] text-fg">{t.items[id].title}</h3>
                            <p className="m-0 text-pretty text-[15.5px] leading-relaxed text-fg-muted">{t.items[id].body}</p>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}
