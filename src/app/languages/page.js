import { getContent } from "@/content";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { PlayerProvider } from "@/components/player/PlayerProvider";
import LanguagesHero from "@/components/languages/LanguagesHero";
import SupportSection from "@/components/languages/SupportSection";
import MoreSection from "@/components/languages/MoreSection";
import CtaSection from "@/components/sections/CtaSection";

const { languagesPage: page } = getContent();

export const metadata = {
    title: page.meta.title,
    description: page.meta.description,
    alternates: { canonical: "/languages" },
};

// Languages page: real recordings to play, what each language supports, and
// how to ask for a new one. Text is content/<locale>/languagesPage.js.
export default function LanguagesPage() {
    const { common, languages } = getContent();
    return (
        <>
            <SiteHeader t={common} />
            <main>
                <PlayerProvider>
                    <LanguagesHero t={page} tp={common.player} tl={languages} />
                </PlayerProvider>
                <SupportSection t={page.support} tl={languages} />
                <MoreSection t={page.more} />
                <CtaSection t={page.cta} trust={common.trust} />
            </main>
            <SiteFooter t={common} />
        </>
    );
}
