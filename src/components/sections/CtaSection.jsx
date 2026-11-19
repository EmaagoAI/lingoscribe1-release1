import { Check } from "lucide-react";
import { ROUTES } from "@/config/routes";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import TextLink from "@/components/ui/TextLink";

// Closing band at the foot of a page: start free or talk to sales, and the
// data promises.
//   t      the page's own lines: { title, body, primary, secondary }
//   trust  content.common.trust
//   links  optional { primary, secondary } hrefs (default: sign-up and sales)

// Bars along the bottom, breathing slowly like a quiet voice. Heights are a
// fixed pattern so server and browser draw the same thing.
const AMBIENT = Array.from({ length: 118 }, (_, i) => {
    const h = Math.abs(Math.sin(i * 12.9898) * 43758.5453) % 1; // stable pseudo-random 0..1
    return { height: Math.round(10 + h * h * 108), duration: 2.6 + (i % 5) * 0.4, delay: -((i * 0.17) % 3) };
});

export default function CtaSection({ t, trust, links }) {
    return (
        <section aria-labelledby="cta-title" className="relative overflow-hidden bg-inv pb-30 pt-28">
            <div aria-hidden="true" className="fade-edges pointer-events-none absolute inset-x-0 bottom-0 flex h-40 items-end justify-between gap-[5px] px-8">
                {AMBIENT.map((b, i) => (
                    <span key={i} className="max-w-[5px] flex-1 origin-bottom animate-breath rounded-[3px] bg-inv-bar"
                        style={{ height: b.height, animationDuration: `${b.duration}s`, animationDelay: `${b.delay.toFixed(2)}s` }} />
                ))}
            </div>

            <Container className="relative grid items-end gap-14 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
                <div className="flex flex-col gap-[26px]">
                    <div className="flex flex-col gap-3">
                        <h2 id="cta-title" className="scroll-reveal m-0 max-w-[15ch] text-balance text-[40px] font-semibold leading-[1.02] tracking-[-0.04em] text-white [font-variation-settings:'wdth'_92] md:text-[60px]">{t.title}</h2>
                        <p className="m-0 text-lg leading-[1.55] text-inv-sub">{t.body}</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Button href={links?.primary ?? ROUTES.signup} variant="light" size="xl">{t.primary}</Button>
                        <Button href={links?.secondary ?? ROUTES.sales} variant="outline-light" size="xl">{t.secondary}</Button>
                    </div>
                </div>
                <div className="flex flex-col gap-3.5 pb-1.5">
                    <span className="text-[15px] font-semibold text-white">{trust.title}</span>
                    <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                        {trust.items.map((line) => (
                            <li key={line} className="flex items-center gap-2.5 text-[15px] text-inv-sub">
                                <Check size={16} strokeWidth={2.4} className="shrink-0 text-[#7fe0d6]" aria-hidden="true" />{line}
                            </li>
                        ))}
                    </ul>
                    <TextLink href={ROUTES.trust} tone="light" className="text-[15px]">{trust.link}</TextLink>
                </div>
            </Container>
        </section>
    );
}
