import { getContent } from "@/content";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import PlatformHero from "@/components/platform/PlatformHero";
import ToolsSection from "@/components/platform/ToolsSection";
import ChannelsSection from "@/components/platform/ChannelsSection";
import WhatsAppSection from "@/components/platform/WhatsAppSection";
import PricingSection from "@/components/platform/PricingSection";
import FaqSection from "@/components/platform/FaqSection";
import CtaSection from "@/components/sections/CtaSection";

const { platform } = getContent();

export const metadata = {
    title: platform.meta.title,
    description: platform.meta.description,
    alternates: { canonical: "/platform" },
};

// Platform page: the tools, the ways to use them, WhatsApp, pricing and questions.
// Each section gets its own slice of content/<locale>/platform.js.
export default function PlatformPage() {
    const { common, languages } = getContent();
    return (
        <>
            <SiteHeader t={common} />
            <main>
                <PlatformHero t={platform.hero} />
                <ToolsSection t={platform.tools} tl={languages} />
                <ChannelsSection t={platform.channels} />
                <WhatsAppSection t={platform.whatsapp} tl={languages} />
                <PricingSection t={platform.pricing} />
                <FaqSection t={platform.faq} />
                <CtaSection t={platform.cta} trust={common.trust} />
            </main>
            <SiteFooter t={common} />
        </>
    );
}
