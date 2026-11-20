import { Check } from "lucide-react";
import { PRODUCT_LINKS } from "@/data/solutions";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { SectionLead, SectionTitle } from "@/components/ui/SectionHeading";

// One sector's story: the problem, how Lingoscribe handles it, and what the
// team ends up with.
//   id            sector id (for heading ids)
//   copy          content.solutions.sectors[id]
//   labels        content.solutions.labels
//   products      product ids (data/solutions.js), named by productNames
export default function SectorPanel({ id, copy, labels, products, productNames }) {
    return (
        <>
            <section aria-labelledby={`t-${id}`} className="bg-soft py-14 md:py-[104px]">
                <Container className="grid items-start gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
                    <div className="flex flex-col gap-[18px]">
                        <SectionTitle id={`t-${id}`} size="md">{copy.title}</SectionTitle>
                        <SectionLead className="max-w-[32em] md:text-[18px]">{copy.body}</SectionLead>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-[15px] leading-[1.45] text-fg-muted">{labels.problem}</span>
                        <CheckList items={copy.problems} />
                    </div>
                </Container>
            </section>

            <section aria-labelledby={`w-${id}`} className="bg-bg py-14 md:py-[104px]">
                <Container className="flex flex-col gap-8 md:gap-11">
                    <SectionTitle id={`w-${id}`} size="sm">{labels.how}</SectionTitle>
                    <ol className="m-0 grid list-none gap-7 p-0 md:grid-cols-3">
                        {copy.steps.map((step, i) => (
                            <li key={step.title} className="flex flex-col gap-2.5 border-t border-rule pt-5">
                                <span className="text-sm font-semibold tabular-nums text-primary">{i + 1}</span>
                                <h3 className="m-0 text-xl font-semibold leading-tight tracking-[-0.015em] text-fg">{step.title}</h3>
                                <p className="m-0 text-pretty text-[15.5px] leading-relaxed text-fg-muted">{step.body}</p>
                            </li>
                        ))}
                    </ol>
                </Container>
            </section>

            <section aria-labelledby={`o-${id}`} className="bg-soft py-14 md:py-[104px]">
                <Container className="grid items-start gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
                    <div className="flex flex-col gap-[18px]">
                        <SectionTitle id={`o-${id}`} size="sm">{labels.gets}</SectionTitle>
                        <CheckList items={copy.gets} className="text-[16.5px]" />
                    </div>
                    <div className="flex flex-col gap-3.5">
                        <span className="text-[15px] leading-[1.45] text-fg-muted">{labels.products}</span>
                        <div className="flex flex-wrap items-center gap-2.5">
                            {products.map((p) => <Button key={p} href={PRODUCT_LINKS[p]} variant="secondary">{productNames[p]}</Button>)}
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}

function CheckList({ items, className = "text-base" }) {
    return (
        <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
            {items.map((item) => (
                <li key={item} className={`flex items-start gap-2.5 leading-normal text-fg-muted ${className}`}>
                    <Check size={18} strokeWidth={2.4} className="mt-0.5 shrink-0 text-tide" aria-hidden="true" />{item}
                </li>
            ))}
        </ul>
    );
}
