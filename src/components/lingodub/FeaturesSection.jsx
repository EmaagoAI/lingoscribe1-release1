import { FEATURES } from "@/data/lingodub";
import Container from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionHeading";

// What the editor lets you do, one card each. `t` is content.lingodub.features.
export default function FeaturesSection({ t }) {
    return (
        <section id="features" aria-labelledby="feat-title" className="bg-bg py-14 md:py-[104px]">
            <Container className="flex flex-col gap-8 md:gap-11">
                <SectionTitle id="feat-title" size="md" className="max-w-[18ch]">{t.title}</SectionTitle>
                <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
                    {FEATURES.map((id) => (
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
