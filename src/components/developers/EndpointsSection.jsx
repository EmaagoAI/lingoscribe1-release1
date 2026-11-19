import { EXTERNAL } from "@/config/routes";
import { ENDPOINTS } from "@/data/developers";
import Container from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionHeading";
import TextLink from "@/components/ui/TextLink";

// Every public endpoint: method, path and what it does. `t` is content.developers.endpoints.
export default function EndpointsSection({ t }) {
    return (
        <section id="endpoints" aria-labelledby="ep-title" className="bg-soft py-14 md:py-[104px]">
            <Container className="flex flex-col gap-7">
                <div className="flex flex-wrap items-end justify-between gap-x-14 gap-y-3">
                    <SectionTitle id="ep-title" size="md">{t.title}</SectionTitle>
                    <TextLink href={EXTERNAL.apiDocs} className="text-[15.5px]">{t.link}</TextLink>
                </div>
                <ul className="m-0 list-none border-t border-rule p-0">
                    {ENDPOINTS.map((ep) => (
                        <li key={ep.id} className="grid items-baseline gap-x-5 gap-y-1.5 border-b border-rule py-4 grid-cols-[auto_1fr] md:grid-cols-[70px_260px_1fr] md:py-[18px]">
                            <span className="font-mono text-[13px] text-tide">{ep.method}</span>
                            <code className="font-mono text-[15px] text-fg">{ep.path}</code>
                            <p className="col-span-2 m-0 text-pretty text-[15px] leading-relaxed text-fg-muted md:col-span-1 md:text-[15.5px]">{t.items[ep.id]}</p>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}
