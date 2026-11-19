import { Check } from "lucide-react";
import { PLANS } from "@/data/platform";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionHeading";

// Pricing: one card per plan. `t` is content.platform.pricing.
export default function PricingSection({ t }) {
    return (
        <section id="pricing" aria-labelledby="price-title" className="bg-bg py-14 md:py-[104px]">
            <Container className="flex flex-col gap-8 md:gap-11">
                <SectionTitle id="price-title" size="md">{t.title}</SectionTitle>
                <ul className="m-0 grid list-none gap-4 p-0 md:grid-cols-2">
                    {PLANS.map((plan) => {
                        const copy = t.plans[plan.id];
                        return (
                            <li key={plan.id}
                                className="flex flex-col gap-3 rounded-2xl border border-rule bg-panel px-6 py-7 transition duration-300 ease-soft hover:-translate-y-1 hover:border-primary hover:shadow-lift md:px-9 md:py-[34px]">
                                <span className="text-sm leading-[1.45] text-fg-muted">{copy.label}</span>
                                <span className="text-[36px] font-semibold leading-none tracking-[-0.03em] text-fg md:text-[48px]">{copy.price}</span>
                                <p className="m-0 text-pretty text-base leading-relaxed text-fg-muted">{copy.body}</p>
                                <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                                    {copy.features.map((line) => (
                                        <li key={line} className="flex items-start gap-2.5 text-[15.5px] leading-normal text-fg-muted">
                                            <Check size={18} strokeWidth={2.4} className="mt-0.5 shrink-0 text-tide" aria-hidden="true" />{line}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-auto pt-2">
                                    <Button href={plan.href} variant={plan.variant} size="lg">{copy.cta}</Button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </Container>
        </section>
    );
}
