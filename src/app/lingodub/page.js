import { getContent } from "@/content";
import { LINKS } from "@/data/lingodub";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import LingoDubHero from "@/components/lingodub/LingoDubHero";
// import SeeSection from "@/components/lingodub/SeeSection";
import HowSection from "@/components/lingodub/HowSection";
import ReviewSection from "@/components/lingodub/ReviewSection";
import FeaturesSection from "@/components/lingodub/FeaturesSection";
import UsesSection from "@/components/lingodub/UsesSection";
import CtaSection from "@/components/sections/CtaSection";

const { lingodub } = getContent();

export const metadata = {
    title: lingodub.meta.title,
    description: lingodub.meta.description,
    alternates: { canonical: "/lingodub" },
};

// LingoDub page: a dubbed clip, the five pipeline stages, the review step,
// what it does and who it's for. Each section gets its own slice of
// content/<locale>/lingodub.js.
export default function LingoDubPage() {
    const { common } = getContent();
    return (
        <>
            <SiteHeader t={common} />
            <main>
                <LingoDubHero t={lingodub.hero} />
                {/* <SeeSection t={lingodub.see} /> — hidden for now, until real dubbed clips are ready */}
                <HowSection t={lingodub.how} />
                <ReviewSection t={lingodub.review} />
                <FeaturesSection t={lingodub.features} />
                <UsesSection t={lingodub.uses} />
                <CtaSection t={lingodub.cta} trust={lingodub.trust} links={LINKS.cta} />
            </main>
            <SiteFooter t={common} />
        </>
    );
}
