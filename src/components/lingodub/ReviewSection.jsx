import { EDITOR_IMAGE, REVIEW_ITEMS } from "@/data/lingodub";
import Container from "@/components/ui/Container";
import Screenshot from "@/components/ui/Screenshot";
import { SectionTitle } from "@/components/ui/SectionHeading";

// The review step: what you can change, beside the editor screenshot.
// `t` is content.lingodub.review.
export default function ReviewSection({ t }) {
    return (
        <section id="review" aria-labelledby="review-title" className="scroll-mt-20 bg-bg py-14 md:py-[104px]">
            <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                <div className="flex flex-col gap-5">
                    <SectionTitle id="review-title" size="md">{t.title}</SectionTitle>
                    <p className="m-0 max-w-[32em] text-pretty text-[17px] leading-relaxed text-fg-muted md:text-lg">{t.body}</p>
                    <ul className="m-0 grid list-none gap-x-7 gap-y-2.5 p-0 sm:grid-cols-2">
                        {REVIEW_ITEMS.map((id) => (
                            <li key={id} className="text-[15.5px] leading-normal text-fg-muted">
                                <span className="font-semibold text-fg">{t.items[id].title}</span> {t.items[id].body}
                            </li>
                        ))}
                    </ul>
                    <p className="m-0 border-t border-rule pt-[18px] text-[15.5px] leading-relaxed text-fg-muted">{t.footer}</p>
                </div>
                <Screenshot image={EDITOR_IMAGE} alt={t.imageAlt} sizes="(min-width: 1024px) 592px, 100vw" />
            </Container>
        </section>
    );
}
