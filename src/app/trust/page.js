import { getContent } from "@/content";
import { TRUST_CTA_LINKS } from "@/data/trust";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TrustHero from "@/components/trust/TrustHero";
import PromisesSection from "@/components/trust/PromisesSection";
import ConsentSection from "@/components/trust/ConsentSection";
import CtaSection from "@/components/sections/CtaSection";

const { trust } = getContent();

export const metadata = {
    title: trust.meta.title,
    description: trust.meta.description,
    alternates: { canonical: "/trust" },
};

// Trust and data: our promises (each tied to the privacy policy), and consent
// for training data and cloned voices.
export default function TrustPage() {
    const { common } = getContent();
    return (
        <>
            <SiteHeader t={common} />
            <main>
                <TrustHero t={trust.hero} />
                <PromisesSection t={trust.promises} />
                <ConsentSection t={trust} />
                <CtaSection t={trust.cta} trust={common.trust} links={TRUST_CTA_LINKS} />
            </main>
            <SiteFooter t={common} />
        </>
    );
}
