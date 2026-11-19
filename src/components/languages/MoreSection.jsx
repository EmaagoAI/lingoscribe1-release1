import { ROUTES } from "@/config/routes";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionHeading";

// "Need a language we don't cover yet?" `t` is content.languagesPage.more.
export default function MoreSection({ t }) {
    return (
        <section id="more" aria-labelledby="more-title" className="bg-bg py-14 md:py-[104px]">
            <Container className="grid items-center gap-7 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
                <div className="flex flex-col gap-[18px]">
                    <SectionTitle id="more-title" size="md">{t.title}</SectionTitle>
                    <p className="m-0 max-w-[30em] text-pretty text-[17px] leading-relaxed text-fg-muted md:text-lg">{t.body}</p>
                </div>
                <div className="flex flex-wrap items-center gap-3 lg:justify-end">
                    <Button href={ROUTES.buildAnywhere} size="lg">{t.primary}</Button>
                    <Button href={ROUTES.sales} variant="secondary" size="lg">{t.secondary}</Button>
                </div>
            </Container>
        </section>
    );
}
