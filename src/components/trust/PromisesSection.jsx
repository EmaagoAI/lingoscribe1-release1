import { PROMISES } from "@/data/trust";
import { fill } from "@/lib/format";
import Container from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionHeading";

// One card per promise, each naming the policy section it comes from.
// `t` is content.trust.promises.
export default function PromisesSection({ t }) {
    return (
        <section id="promises" aria-labelledby="prom-title" className="bg-soft py-14 md:py-[104px]">
            <Container className="flex flex-col gap-8 md:gap-11">
                <SectionTitle id="prom-title" size="md">{t.title}</SectionTitle>
                <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
                    {PROMISES.map((p) => {
                        const copy = t.items[p.id];
                        return (
                            <li key={p.id}
                                className="flex flex-col gap-3 rounded-2xl border border-rule bg-panel px-5 py-[22px] transition duration-300 ease-soft hover:-translate-y-1 hover:border-primary hover:shadow-lift md:p-7">
                                <span className="text-sm leading-[1.45] text-fg-muted">{fill(t.source, { section: p.section })}</span>
                                <h3 className="m-0 text-lg font-semibold leading-tight tracking-[-0.015em] text-fg md:text-xl">{copy.title}</h3>
                                <p className="m-0 text-pretty text-[15.5px] leading-relaxed text-fg-muted">{copy.body}</p>
                            </li>
                        );
                    })}
                </ul>
            </Container>
        </section>
    );
}
