import { LINKS } from "@/data/lingodub";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

// LingoDub opening: the title rising word by word, the pitch and the invite button.
// `t` is content.lingodub.hero.
export default function LingoDubHero({ t }) {
    const words = t.title.split(" ");
    return (
        <section aria-labelledby="page-title" className="bg-bg pb-14 pt-11 md:pb-24 md:pt-20">
            <Container className="grid items-end gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
                <h1 id="page-title"
                    className="m-0 max-w-[14ch] text-balance text-[48px] font-semibold leading-[.98] tracking-[-0.045em] text-fg [font-variation-settings:'wdth'_90] md:text-[68px] lg:text-[80px]">
                    {words.map((w, i) => (
                        <span key={i}>
                            <span className="inline-block animate-[rise_760ms_var(--ease-soft)_both]" style={{ animationDelay: `${i * 70}ms` }}>{w}</span>
                            {i < words.length - 1 && " "}
                        </span>
                    ))}
                </h1>
                <div className="flex flex-col gap-[22px]">
                    <p className="m-0 max-w-[30em] text-pretty text-[17px] leading-relaxed text-fg-muted md:text-[19px]">{t.subtitle}</p>
                    <div className="flex flex-wrap items-center gap-3">
                        <Button href={LINKS.invite} size="lg">{t.primary}</Button>
                    </div>
                    <span className="text-[15.5px] leading-[1.45] text-fg-muted">{t.note}</span>
                </div>
            </Container>
        </section>
    );
}
