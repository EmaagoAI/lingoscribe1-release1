import { getContent } from "@/content";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Container from "@/components/ui/Container";
import SalesIntro, { SalesNext } from "@/components/sales/SalesIntro";
import SpeakerForm from "@/components/speakers/SpeakerForm";

const { speakers } = getContent();

export const metadata = {
    title: speakers.meta.title,
    description: speakers.meta.description,
    alternates: { canonical: "/native-speakers" },
};

// Join as a native speaker: the same layout as talk-to-sales (intro and what
// happens next on the left, the form on the right).
export default function SpeakersPage() {
    const { common, languages } = getContent();
    return (
        <>
            <SiteHeader t={common} />
            <main>
                <section aria-labelledby="page-title" className="bg-bg pb-14 pt-11 md:pb-24 md:pt-20">
                    <Container className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.3fr] lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-6">
                        <SalesIntro t={speakers.intro} />
                        <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1"><SpeakerForm t={speakers} tl={languages} /></div>
                        <SalesNext t={speakers.intro} />
                    </Container>
                </section>
            </main>
            <SiteFooter t={common} />
        </>
    );
}
