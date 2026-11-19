import { Check } from "lucide-react";
import { ROUTES } from "@/config/routes";
import { LANGUAGES } from "@/data/languages";
import { SUPPORT } from "@/data/support";
import { cx, fill } from "@/lib/format";
import Container from "@/components/ui/Container";
import SectionHeading, { SectionLead } from "@/components/ui/SectionHeading";
import TextLink from "@/components/ui/TextLink";

// A table of what each language supports (data/support.js). It scrolls
// sideways inside its card on narrow screens.
//   t   content.languagesPage.support
//   tl  content.languages
const CELL = "border-b border-rule p-4 text-left";

export default function SupportSection({ t, tl }) {
    const cols = t.columns;
    return (
        <section id="support" aria-labelledby="sup-title" className="bg-soft py-14 md:py-[104px]">
            <Container className="flex flex-col gap-8 md:gap-11">
                <SectionHeading id="sup-title" size="md" title={t.title}>
                    <SectionLead className="max-w-[32em]">{t.body}</SectionLead>
                </SectionHeading>
                <div className="relative overflow-x-auto rounded-[18px] border border-rule bg-panel px-2.5 py-1.5">
                    <table className="w-full min-w-[720px] border-collapse">
                        <thead>
                            <tr>
                                {[cols.language, cols.dialects, cols.stt, cols.tts, cols.s2s].map((label) => (
                                    <th key={label} scope="col" className="border-b border-rule px-4 py-3.5 text-left text-sm font-semibold text-fg-muted">{label}</th>
                                ))}
                                <th scope="col" className="border-b border-rule"><span className="sr-only">{t.tryIt}</span></th>
                            </tr>
                        </thead>
                        <tbody className="[&>tr:last-child>*]:border-b-0">
                            {SUPPORT.map((row) => <Row key={row.id} row={row} t={t} tl={tl} />)}
                        </tbody>
                    </table>
                </div>
            </Container>
        </section>
    );
}

function Row({ row, t, tl }) {
    const name = tl.names[row.id];
    const { native, rtl } = LANGUAGES[row.id];
    const td = cx(CELL, "align-middle text-[15px] leading-normal text-fg-muted");

    if (!row.live) {
        return (
            <tr>
                <th scope="row" className={cx(CELL, "text-[17px] font-semibold text-fg-muted")}>{name}</th>
                <td className={td} colSpan={5}><span className="text-fg-muted">{t.soon}</span></td>
            </tr>
        );
    }

    return (
        <tr>
            <th scope="row" className={CELL}>
                <span className="flex items-baseline gap-3 whitespace-nowrap">
                    <span className="text-[17px] font-semibold text-fg">{name}</span>
                    <span lang={row.id} dir={rtl ? "rtl" : "ltr"} className={cx("text-[19px] font-normal text-fg-muted", rtl && "font-naskh")}>{native || name}</span>
                </span>
            </th>
            <td className={td}>{row.dialects.length ? row.dialects.map((d) => tl.dialects[d]).join(", ") : t.none}</td>
            <td className={td}><Yes on={row.stt} t={t} /></td>
            <td className={td}><Yes on={row.tts} t={t} /></td>
            <td className={td}>{row.s2s ? t.s2s[row.s2s] : t.none}</td>
            <td className={td}>
                <TextLink href={ROUTES.signup} className="text-[15px]" aria-label={fill(t.tryItLabel, { language: name })}>{t.tryIt}</TextLink>
            </td>
        </tr>
    );
}

function Yes({ on, t }) {
    if (!on) return <span>{t.notYet}</span>;
    return (
        <span className="inline-flex items-center gap-1.5 text-fg">
            <Check size={16} strokeWidth={2.4} className="text-tide" aria-hidden="true" />{t.yes}
        </span>
    );
}
