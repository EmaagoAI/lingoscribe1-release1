import { getContent } from "@/content";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { PlayerProvider } from "@/components/player/PlayerProvider";
import LensHero from "@/components/home/LensHero";
import ToolsTour from "@/components/home/ToolsTour";
import LanguagesSection from "@/components/home/LanguagesSection";
import BuiltSection from "@/components/home/BuiltSection";
import SectorsSection from "@/components/home/SectorsSection";
import CtaSection from "@/components/sections/CtaSection";

// Home page. Each section gets its own slice of the content, so all the
// text stays in content/<locale>/ and the sections only lay it out.
export default function Home() {
    const { common, home, languages } = getContent();
    return (
        <>
            <SiteHeader t={common} />
            {/* one player for the page: the hero shows it, the language list can load clips into it */}
            <PlayerProvider>
                <main>
                    <LensHero t={home.hero} player={common.player} tl={languages} />
                    <ToolsTour t={home.tools} tl={languages} />
                    <LanguagesSection t={home.languages} tl={languages} />
                    <BuiltSection t={home.built} />
                    <SectorsSection t={home.sectors} />
                    <CtaSection t={home.cta} trust={common.trust} />
                </main>
            </PlayerProvider>
            <SiteFooter t={common} />
        </>
    );
}
