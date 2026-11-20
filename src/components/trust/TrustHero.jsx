import { ROUTES } from "@/config/routes";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

// Trust page opening: the promise, and the way to the full policy.
// `t` is content.trust.hero.
export default function TrustHero({ t }) {
    return (
        <section aria-labelledby="page-title" className="bg-bg pb-10 pt-11 md:pb-[72px] md:pt-20">
            <Container className="grid items-end gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
                <h1 id="page-title"
                    className="m-0 max-w-[11ch] animate-rise self-start text-balance text-[50px] font-semibold leading-[.98] tracking-[-0.045em] text-fg [font-variation-settings:'wdth'_90] md:text-[72px] lg:text-[92px]">
                    {t.title}
                </h1>
                <div className="flex animate-rise flex-col gap-5 [animation-delay:120ms]">
                    <p className="m-0 max-w-[30em] text-pretty text-[17px] leading-relaxed text-fg-muted md:text-[19px]">{t.subtitle}</p>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                        <Button href={ROUTES.privacy} variant="secondary" size="lg">{t.policy}</Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
