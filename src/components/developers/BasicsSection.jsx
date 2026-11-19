import { ROUTES } from "@/config/routes";
import { API_RULES } from "@/data/developers";
import Container from "@/components/ui/Container";
import Rich from "@/components/ui/Rich";
import { SectionTitle } from "@/components/ui/SectionHeading";
import TextLink from "@/components/ui/TextLink";

// What to know before the first call: auth, audio, minutes and limits.
// `t` is content.developers.basics.
const Code = ({ children }) => <code className="font-mono text-[14px] text-fg">{children}</code>;

export default function BasicsSection({ t }) {
    const values = {
        header: <Code>{API_RULES.keyHeader}</Code>,
        quota: <Code>{API_RULES.quotaError}</Code>,
        limited: <Code>{API_RULES.rateError}</Code>,
        rate: API_RULES.requestsPerMinute,
    };
    const cards = ["auth", "audio", "minutes", "more"];

    return (
        <section id="basics" aria-labelledby="basics-title" className="bg-soft py-14 md:py-[104px]">
            <Container className="flex flex-col gap-8 md:gap-11">
                <SectionTitle id="basics-title" size="md">{t.title}</SectionTitle>
                <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
                    {cards.map((id) => {
                        const card = t.items[id];
                        return (
                            <li key={id}
                                className="flex flex-col gap-3 rounded-2xl border border-rule bg-panel px-6 py-[26px] transition duration-300 ease-soft hover:-translate-y-1 hover:border-primary hover:shadow-lift">
                                <h3 className="m-0 text-[19px] font-semibold leading-tight tracking-[-0.015em] text-fg">{card.title}</h3>
                                <p className="m-0 text-pretty text-[15.5px] leading-relaxed text-fg-muted"><Rich text={card.body} values={values} /></p>
                                {card.link && <div className="mt-auto"><TextLink href={ROUTES.sales} className="text-[15.5px]">{card.link}</TextLink></div>}
                            </li>
                        );
                    })}
                </ul>
            </Container>
        </section>
    );
}
