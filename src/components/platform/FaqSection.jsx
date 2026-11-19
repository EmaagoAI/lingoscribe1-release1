import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionHeading";

// Common questions, each opening in place (native <details>, so it works
// without JavaScript and with the keyboard). `t` is content.platform.faq.
export default function FaqSection({ t }) {
    return (
        <section id="faq" aria-labelledby="faq-title" className="bg-soft py-14 md:py-[104px]">
            <Container className="grid items-start gap-6 lg:grid-cols-[0.6fr_1.4fr] lg:gap-14">
                <SectionTitle id="faq-title" size="sm">{t.title}</SectionTitle>
                <div className="border-t border-rule">
                    {t.items.map((item) => (
                        <details key={item.q} className="group border-b border-rule">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[17px] font-semibold text-fg md:py-[22px] md:text-[19px] [&::-webkit-details-marker]:hidden">
                                {item.q}
                                <ChevronDown size={20} className="shrink-0 text-fg-muted transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
                            </summary>
                            <p className="m-0 pb-[22px] text-pretty text-base leading-relaxed text-fg-muted md:text-[16.5px]">{item.a}</p>
                        </details>
                    ))}
                </div>
            </Container>
        </section>
    );
}
