import { EDITOR_IMAGE, LINKS } from "@/data/lingodub";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Screenshot from "@/components/ui/Screenshot";

// LingoDub opening: the pitch, two buttons and the editor screenshot.
// `t` is content.lingodub.hero.
export default function LingoDubHero({ t }) {
    return (
        <section aria-labelledby="page-title" className="bg-bg pb-10 pt-11 md:pb-[72px] md:pt-20">
            <Container className="flex flex-col gap-9 md:gap-12">
                <div className="grid items-end gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
                    <h1 id="page-title"
                        className="m-0 max-w-[10ch] animate-rise self-start text-balance text-[50px] font-semibold leading-[.98] tracking-[-0.045em] text-fg [font-variation-settings:'wdth'_90] md:text-[72px] lg:text-[92px]">
                        {t.title}
                    </h1>
                    <div className="flex animate-rise flex-col gap-5 [animation-delay:120ms]">
                        <p className="m-0 max-w-[30em] text-pretty text-[17px] leading-relaxed text-fg-muted md:text-[19px]">{t.subtitle}</p>
                        <div className="flex flex-wrap items-center gap-3">
                            <Button href={LINKS.invite} size="lg">{t.primary}</Button>
                            <Button href={LINKS.how} variant="secondary" size="lg">{t.secondary}</Button>
                        </div>
                        <span className="text-[14.5px] leading-[1.45] text-fg-muted">{t.note}</span>
                    </div>
                </div>
                <Screenshot image={EDITOR_IMAGE} alt={t.imageAlt} sizes="(min-width: 1280px) 1184px, 100vw" priority />
            </Container>
        </section>
    );
}
