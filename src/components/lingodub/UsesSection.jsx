import { Check } from "lucide-react";
import { USES } from "@/data/lingodub";
import Container from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionHeading";

// Who dubs with it, as a checked list beside the title. `t` is content.lingodub.uses.
export default function UsesSection({ t }) {
    return (
        <section id="uses" aria-labelledby="use-title" className="bg-bg py-14 md:py-[104px]">
            <Container className="grid items-start gap-7 lg:grid-cols-2 lg:gap-14">
                <div className="flex flex-col gap-[18px]">
                    <SectionTitle id="use-title" size="md">{t.title}</SectionTitle>
                    <p className="m-0 max-w-[30em] text-pretty text-[17px] leading-relaxed text-fg-muted md:text-lg">
                        {t.body} <span className="rounded bg-chip px-1">{t.bodyFlag}</span>.
                    </p>
                </div>
                <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                    {USES.map((id) => (
                        <li key={id} className="flex items-start gap-2.5 text-base leading-normal text-fg-muted md:text-[16.5px]">
                            <Check size={18} strokeWidth={2.4} className="mt-0.5 shrink-0 text-tide" aria-hidden="true" />{t.items[id]}
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}
