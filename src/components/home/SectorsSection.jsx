import { ROUTES } from "@/config/routes";
import { SECTORS } from "@/data/home";
import Container from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionHeading";
import TextLink from "@/components/ui/TextLink";

// "Who uses it": four sectors in columns. `t` is content.home.sectors.
export default function SectorsSection({ t }) {
    return (
        <section id="sectors" aria-labelledby="sec-title" className="bg-bg py-20 md:py-24">
            <Container className="flex flex-col gap-9">
                <SectionTitle id="sec-title" size="sm">{t.title}</SectionTitle>
                <ul className="m-0 grid list-none gap-8 p-0 sm:grid-cols-2 lg:grid-cols-4">
                    {SECTORS.map((id) => (
                        <li key={id} className="flex flex-col gap-2.5 border-t-2 border-rule pt-[22px] transition-colors duration-300 hover:border-primary">
                            <h3 className="m-0 text-xl font-semibold leading-tight tracking-[-0.015em] text-fg">{t.items[id].title}</h3>
                            <p className="m-0 text-pretty text-[15.5px] leading-relaxed text-fg-muted">{t.items[id].body}</p>
                            <div className="mt-auto pt-1"><TextLink href={ROUTES.solutions} className="text-[15px]">{t.link}</TextLink></div>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}
