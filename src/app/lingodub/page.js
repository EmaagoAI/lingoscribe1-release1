import { getContent } from "@/content";
import { LINKS } from "@/data/lingodub";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import LingoDubHero from "@/components/lingodub/LingoDubHero";
import HowSection from "@/components/lingodub/HowSection";
import FeaturesSection from "@/components/lingodub/FeaturesSection";
import UsesSection from "@/components/lingodub/UsesSection";
import CtaSection from "@/components/sections/CtaSection";

const { lingodub } = getContent();

export const metadata = {
    title: lingodub.meta.title,
    description: lingodub.meta.description,
    alternates: { canonical: "/lingodub" },
};

// LingoDub page: the editor, how it works, what it does and who it's for.
// Each section gets its own slice of content/<locale>/lingodub.js.
export default function LingoDubPage() {
    const { common } = getContent();
    return (
        <>
            <SiteHeader t={common} />
            <main>
                <LingoDubHero t={lingodub.hero} />
                <HowSection t={lingodub.how} />
                <FeaturesSection t={lingodub.features} />
                <UsesSection t={lingodub.uses} />
                <CtaSection t={lingodub.cta} trust={common.trust} links={LINKS.cta} />
            </main>
            <SiteFooter t={common} />
        </>
    );
}
