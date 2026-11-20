import { getContent } from "@/content";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import SectorExplorer from "@/components/solutions/SectorExplorer";
import CtaSection from "@/components/sections/CtaSection";

const { solutions } = getContent();

export const metadata = {
    title: solutions.meta.title,
    description: solutions.meta.description,
    alternates: { canonical: "/solutions" },
};

// Solutions: pick a sector to see its problem, how it works and what you get.
export default function SolutionsPage() {
    const { common } = getContent();
    return (
        <>
            <SiteHeader t={common} />
            <main>
                <SectorExplorer t={solutions} />
                <CtaSection t={solutions.cta} trust={common.trust} />
            </main>
            <SiteFooter t={common} />
        </>
    );
}
