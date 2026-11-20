import { getContent } from "@/content";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Container from "@/components/ui/Container";
import PolicyBody from "@/components/privacy/PolicyBody";
import PolicyContents from "@/components/privacy/PolicyContents";

const { privacy } = getContent();

export const metadata = {
    title: privacy.meta.title,
    description: privacy.meta.description,
    alternates: { canonical: "https://lingoscribe.ai/privacy-policy" },
};

// Privacy policy: the title and date, then the policy beside a contents list.
// The words are in content/<locale>/privacy.js, unchanged from the policy.
export default function PrivacyPolicyPage() {
    const { common } = getContent();
    return (
        <>
            <SiteHeader t={common} />
            <main>
                <section aria-labelledby="page-title" className="bg-bg pb-16 pt-11 md:pb-28 md:pt-20">
                    <Container className="flex flex-col gap-10 md:gap-14">
                        <header className="flex animate-rise flex-col gap-4">
                            <h1 id="page-title"
                                className="m-0 text-balance text-[44px] font-semibold leading-[.98] tracking-[-0.045em] text-fg [font-variation-settings:'wdth'_90] md:text-[64px] lg:text-[76px]">
                                {privacy.title}
                            </h1>
                            <p className="m-0 text-[15px] text-fg-muted">{privacy.updated}</p>
                        </header>
                        <div className="grid items-start gap-10 lg:grid-cols-[260px_minmax(0,720px)] lg:gap-16 xl:gap-24">
                            <PolicyContents title={privacy.contents} sections={privacy.sections} />
                            <PolicyBody sections={privacy.sections} />
                        </div>
                    </Container>
                </section>
            </main>
            <SiteFooter t={common} />
        </>
    );
}
