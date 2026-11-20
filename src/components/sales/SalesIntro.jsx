import Link from "next/link";
import { CONTACT_EMAIL, ROUTES } from "@/config/routes";
import { cx } from "@/lib/format";
import { newTab } from "@/lib/links";
import Rich from "@/components/ui/Rich";

// Left side of the sales page, in two parts so small screens can put the form
// between them: the offer (SalesIntro) and what happens next (SalesNext).
// `t` is content.sales.intro.
export default function SalesIntro({ t, className }) {
    return (
        <div className={cx("flex animate-rise flex-col gap-6", className)}>
            <h1 id="page-title"
                className="m-0 max-w-[10ch] text-balance text-[44px] font-semibold leading-[.98] tracking-[-0.045em] text-fg [font-variation-settings:'wdth'_90] md:text-[64px] lg:text-[80px]">
                {t.title}
            </h1>
            <p className="m-0 max-w-[24em] text-pretty text-[17px] leading-relaxed text-fg-muted md:text-[19px]">{t.subtitle}</p>
        </div>
    );
}

// What happens after sending, and a way out for people who only want to try it.
export function SalesNext({ t, className }) {
    const steps = t.steps.map((step, i) => ({ step, n: i + 1 }));
    return (
        <div className={cx("flex animate-rise flex-col gap-6 [animation-delay:80ms]", className)}>
            <ol className="m-0 list-none border-t border-rule p-0">
                {steps.map(({ step, n }) => (
                    <li key={n} className="flex items-baseline gap-3.5 border-b border-rule py-3.5">
                        <span className="text-sm font-semibold tabular-nums text-primary">{n}</span>
                        <span className="text-base leading-normal text-fg md:text-[16.5px]">{step}</span>
                    </li>
                ))}
            </ol>
            <p className="m-0 text-pretty text-[15.5px] leading-relaxed text-fg-muted">
                <Rich text={t.aside} values={{
                    start: <Link href={ROUTES.signup} {...newTab(ROUTES.signup)} className="font-semibold text-inherit hover:text-primary">{t.start}</Link>,
                    email: <a href={`mailto:${CONTACT_EMAIL}`} className="text-inherit hover:text-primary">{CONTACT_EMAIL}</a>,
                }} />
            </p>
        </div>
    );
}
