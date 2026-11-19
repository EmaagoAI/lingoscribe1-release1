import { ROUTES } from "@/config/routes";
import { SPEECH_DATA } from "@/data/home";
import Container from "@/components/ui/Container";
import { SectionLead, SectionTitle } from "@/components/ui/SectionHeading";
import TextLink from "@/components/ui/TextLink";

// "Built with the people who speak it": how the data was made, and how much
// there is so far, as bars that fill as they scroll into view.
// `t` is content.home.built.
export default function BuiltSection({ t }) {
    const max = Math.max(...SPEECH_DATA.map((d) => d.hours));
    return (
        <section id="built" aria-labelledby="built-title" className="bg-bg py-20 md:py-30">
            <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-18">
                <div className="flex flex-col gap-6">
                    <SectionTitle id="built-title">{t.title}</SectionTitle>
                    <SectionLead className="max-w-[30em]">{t.body}</SectionLead>
                    <div className="flex flex-wrap items-center gap-x-7 gap-y-3.5">
                        <TextLink href={ROUTES.build} className="text-[15.5px]">{t.links.build}</TextLink>
                        <TextLink href={ROUTES.buildAnywhere} className="text-[15.5px]">{t.links.anywhere}</TextLink>
                    </div>
                </div>

                <div className="scroll-settle flex flex-col gap-7 rounded-[22px] border border-rule bg-panel p-6 shadow-card md:p-9">
                    <ol aria-label={t.statsLabel} className="m-0 flex list-none flex-col gap-[26px] p-0">
                        {SPEECH_DATA.map((d) => (
                            <li key={d.id} className="flex flex-col gap-2.5">
                                <div className="flex items-baseline justify-between gap-4">
                                    <span className="text-base font-medium text-fg">{t.stats[d.id]}</span>
                                    <span className="text-[30px] font-semibold leading-none tracking-[-0.03em] tabular-nums text-fg">
                                        {d.hours.toLocaleString("en")}
                                        <span className="text-[15px] font-medium tracking-normal text-fg-muted"> {t.unit}</span>
                                    </span>
                                </div>
                                <div className="h-3 overflow-hidden rounded-full bg-chip">
                                    <div className="scroll-grow-x h-full rounded-full bg-linear-to-r from-primary to-tide" style={{ width: `${(100 * d.hours) / max}%` }} />
                                </div>
                            </li>
                        ))}
                    </ol>
                    <p className="m-0 border-t border-rule pt-5 text-[15px] leading-[1.55] text-fg-muted">{t.note}</p>
                </div>
            </Container>
        </section>
    );
}
