import { getContent } from "@/content";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import DevelopersHero from "@/components/developers/DevelopersHero";
import EndpointsSection from "@/components/developers/EndpointsSection";
import LanguageCodesSection from "@/components/developers/LanguageCodesSection";
import BasicsSection from "@/components/developers/BasicsSection";
import CtaSection from "@/components/sections/CtaSection";

const { developers } = getContent();

export const metadata = {
    title: developers.meta.title,
    description: developers.meta.description,
    alternates: { canonical: "/developers" },
};

// Developers page: a sample call, the endpoints, language codes and the basics.
// Every value comes from data/developers.js, which mirrors the live API.
export default function DevelopersPage() {
    const { common, languages } = getContent();
    return (
        <>
            <SiteHeader t={common} />
            <main>
                <DevelopersHero t={developers.hero} tl={languages} />
                <EndpointsSection t={developers.endpoints} />
                <LanguageCodesSection t={developers.codes} tl={languages} />
                <BasicsSection t={developers.basics} />
                <CtaSection t={developers.cta} trust={common.trust} />
            </main>
            <SiteFooter t={common} />
        </>
    );
}
