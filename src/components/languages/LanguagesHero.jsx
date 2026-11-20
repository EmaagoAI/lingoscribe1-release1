import { ROUTES } from "@/config/routes";
import { liveVarieties } from "@/data/languages";
import { fill } from "@/lib/format";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import TextLink from "@/components/ui/TextLink";
import RecordingStudio from "./RecordingStudio";

// Languages page opening: how many we cover, and a player with every real recording.
//   t   content.languagesPage
//   tp  content.common.player
//   tl  content.languages
export default function LanguagesHero({ t, tp, tl }) {
    return (
        <section aria-labelledby="page-title" className="bg-bg pb-14 pt-11 md:pb-24 md:pt-20">
            <Container className="flex flex-col gap-9 md:gap-12">
                <div className="grid items-end gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
                    <h1 id="page-title"
                        className="m-0 max-w-[14ch] animate-rise text-balance text-[44px] font-semibold leading-[.98] tracking-[-0.045em] text-fg [font-variation-settings:'wdth'_90] md:text-[68px] lg:text-[80px]">
                        {fill(t.hero.title, { count: liveVarieties().length })}
                    </h1>
                    <div className="flex animate-rise flex-col gap-[22px] [animation-delay:120ms]">
                        <p className="m-0 max-w-[30em] text-pretty text-[17px] leading-relaxed text-fg-muted md:text-[19px]">{t.hero.subtitle}</p>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                            <Button href={ROUTES.signup} size="lg">{t.hero.primary}</Button>
                            <TextLink href={ROUTES.buildAnywhere} className="text-[15.5px]">{t.hero.link}</TextLink>
                        </div>
                    </div>
                </div>
                <RecordingStudio t={t.player} tp={tp} tl={tl} />
            </Container>
        </section>
    );
}
