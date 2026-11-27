import { SPEECH_DATA } from "@/data/home";
import { liveVarieties } from "@/data/languages";
import { fill } from "@/lib/format";
import Container from "@/components/ui/Container";

// How we build opening: the claim, why, and the two headline numbers.
// `t` is content.build.hero.
export default function BuildHero({ t }) {
    const values = {
        hours: SPEECH_DATA.find((d) => d.id === "recorded").hours.toLocaleString("en"),
        count: liveVarieties().length,
    };
    return (
        <section aria-labelledby="page-title" className="bg-bg pb-10 pt-11 md:pb-[72px] md:pt-20">
            <Container className="grid items-end gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
                <h1 id="page-title"
                    className="m-0 max-w-[15ch] animate-rise text-balance text-[46px] font-semibold leading-[.98] tracking-[-0.045em] text-fg [font-variation-settings:'wdth'_90] md:text-[68px] lg:text-[80px]">
                    {t.title}
                </h1>
                <div className="flex animate-rise flex-col gap-[22px] [animation-delay:120ms]">
                    <p className="m-0 max-w-[32em] text-pretty text-[17px] leading-relaxed text-fg-muted md:text-[19px]">{t.body}</p>
                    <div className="flex flex-wrap gap-x-8 gap-y-2.5 border-t border-rule pt-5">
                        {t.stats.map((s) => (
                            <span key={s.label} className="text-[15.5px] leading-[1.45] text-fg-muted">
                                <span className="font-semibold text-fg">{fill(s.value, values)}</span> {s.label}
                            </span>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
