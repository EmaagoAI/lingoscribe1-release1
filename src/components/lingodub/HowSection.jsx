import { STEPS } from "@/data/lingodub";
import Container from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionHeading";

// The four steps from upload to export, side by side on wide screens.
// `t` is content.lingodub.how.
export default function HowSection({ t }) {
    return (
        <section id="how" aria-labelledby="how-title" className="scroll-mt-20 bg-soft py-14 md:py-[104px]">
            <Container className="flex flex-col gap-8 md:gap-11">
                <SectionTitle id="how-title" size="md">{t.title}</SectionTitle>
                <ol className="m-0 grid list-none gap-7 p-0 sm:grid-cols-2 lg:grid-cols-4">
                    {STEPS.map((id, i) => (
                        <li key={id} className="flex flex-col gap-2.5 border-t border-rule pt-5">
                            <span className="text-sm font-semibold tabular-nums text-primary">{i + 1}</span>
                            <h3 className="m-0 text-xl font-semibold leading-tight tracking-[-0.015em] text-fg">{t.steps[id].title}</h3>
                            <p className="m-0 text-pretty text-[15.5px] leading-relaxed text-fg-muted">{t.steps[id].body}</p>
                        </li>
                    ))}
                </ol>
            </Container>
        </section>
    );
}
