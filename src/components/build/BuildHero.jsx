import Container from "@/components/ui/Container";

// How we build opening: the claim and why. `t` is content.build.hero.
export default function BuildHero({ t }) {
    return (
        <section aria-labelledby="page-title" className="bg-bg pb-10 pt-11 md:pb-[72px] md:pt-20">
            <Container className="grid items-end gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
                <h1 id="page-title"
                    className="m-0 max-w-[12ch] animate-rise text-balance text-[46px] font-semibold leading-[.98] tracking-[-0.045em] text-fg [font-variation-settings:'wdth'_90] md:text-[68px] lg:text-[84px]">
                    {t.title}
                </h1>
                <p className="m-0 max-w-[32em] animate-rise text-pretty text-[17px] leading-relaxed text-fg-muted [animation-delay:120ms] md:text-[19px]">{t.body}</p>
            </Container>
        </section>
    );
}
