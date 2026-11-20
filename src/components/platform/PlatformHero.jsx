import { ROUTES } from "@/config/routes";
import { SCREENSHOTS } from "@/data/platform";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Screenshot from "@/components/ui/Screenshot";

// Platform page opening: the offer, two buttons, and the playground screenshot.
// `t` is content.platform.hero.
export default function PlatformHero({ t }) {
    return (
        <section aria-labelledby="page-title" className="bg-bg pb-10 pt-11 md:pb-[72px] md:pt-20">
            <Container className="flex flex-col gap-9 md:gap-12">
                <div className="grid items-end gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
                    <h1 id="page-title"
                        className="m-0 max-w-[13ch] animate-rise text-balance text-[46px] font-semibold leading-[.98] tracking-[-0.045em] text-fg [font-variation-settings:'wdth'_90] md:text-[68px] lg:text-[84px]">
                        {t.title}
                    </h1>
                    <div className="flex animate-rise flex-col gap-5 [animation-delay:120ms]">
                        <p className="m-0 max-w-[30em] text-pretty text-[17px] leading-relaxed text-fg-muted md:text-[19px]">{t.subtitle}</p>
                        <div className="flex flex-wrap items-center gap-3">
                            <Button href={ROUTES.signup} size="lg">{t.primary}</Button>
                            <Button href={ROUTES.sales} variant="secondary" size="lg">{t.secondary}</Button>
                        </div>
                        <span className="text-[14.5px] leading-[1.45] text-fg-muted">{t.note}</span>
                    </div>
                </div>
                <Screenshot image={SCREENSHOTS.playground} alt={t.imageAlt} sizes="(min-width: 1280px) 1184px, 100vw" priority />
            </Container>
        </section>
    );
}
