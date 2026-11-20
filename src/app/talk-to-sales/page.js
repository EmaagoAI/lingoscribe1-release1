import { getContent } from "@/content";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Container from "@/components/ui/Container";
import SalesIntro, { SalesNext } from "@/components/sales/SalesIntro";
import SalesForm from "@/components/sales/SalesForm";

const { sales } = getContent();

export const metadata = {
    title: sales.meta.title,
    description: sales.meta.description,
    alternates: { canonical: "/talk-to-sales" },
};

// Talk to sales: the offer and what happens next on the left, the enquiry form
// on the right. On small screens the form comes straight after the offer.
export default function SalesPage() {
    const { common, languages } = getContent();
    return (
        <>
            <SiteHeader t={common} />
            <main>
                <section aria-labelledby="page-title" className="bg-bg pb-14 pt-11 md:pb-24 md:pt-20">
                    <Container className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.3fr] lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-6">
                        <SalesIntro t={sales.intro} />
                        <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1"><SalesForm t={sales} tl={languages} /></div>
                        <SalesNext t={sales.intro} />
                    </Container>
                </section>
            </main>
            <SiteFooter t={common} />
        </>
    );
}
