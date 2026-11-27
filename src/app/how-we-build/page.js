import { getContent } from "@/content";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import BuildHero from "@/components/build/BuildHero";
import StorySection from "@/components/build/StorySection";
import StagesSection from "@/components/build/StagesSection";
import AnywhereSection from "@/components/build/AnywhereSection";
import TeamSection from "@/components/build/TeamSection";
import CtaSection from "@/components/sections/CtaSection";

const { build } = getContent();

export const metadata = {
    title: build.meta.title,
    description: build.meta.description,
    alternates: { canonical: "/how-we-build" },
};

// How we build: the story, the five stages, any language, and the team.
// Numbers come from data (hours, languages, regions), never from the text.
export default function BuildPage() {
    const { common } = getContent();
    return (
        <>
            <SiteHeader t={common} />
            <main>
                <BuildHero t={build.hero} />
                <StorySection t={build.story} />
                <StagesSection t={build} />
                <AnywhereSection t={build.anywhere} />
                <TeamSection t={build.team} />
                <CtaSection t={build.cta} trust={common.trust} />
            </main>
            <SiteFooter t={common} />
        </>
    );
}
