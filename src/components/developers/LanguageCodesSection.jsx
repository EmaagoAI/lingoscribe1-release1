import { API_LANGUAGES } from "@/data/developers";
import { getVariety } from "@/data/languages";
import { varietyLabel } from "@/lib/languages";
import Container from "@/components/ui/Container";
import Rich from "@/components/ui/Rich";
import { SectionTitle } from "@/components/ui/SectionHeading";

// The `language` codes the API takes, with the name of each.
//   t   content.developers.codes
//   tl  content.languages
export default function LanguageCodesSection({ t, tl }) {
    return (
        <section id="codes" aria-labelledby="codes-title" className="bg-bg py-14 md:py-[104px]">
            <Container className="grid items-start gap-7 lg:grid-cols-[0.7fr_1.6fr] lg:gap-14">
                <div className="flex flex-col gap-[18px]">
                    <SectionTitle id="codes-title" size="md">{t.title}</SectionTitle>
                    <p className="m-0 text-pretty text-[16px] leading-relaxed text-fg-muted md:text-[17px]">
                        <Rich text={t.body} values={{ field: <code className="font-mono">language</code> }} />
                    </p>
                </div>
                <ul className="m-0 grid list-none gap-x-8 border-t border-rule p-0 sm:grid-cols-2 xl:grid-cols-3">
                    {API_LANGUAGES.map((l) => (
                        <li key={l.code} className="flex items-baseline gap-3.5 border-b border-rule py-3">
                            <code className="min-w-12 font-mono text-sm text-fg">{l.code}</code>
                            <span className="text-[15px] leading-[1.45] text-fg-muted">{varietyLabel(getVariety(l.variety), tl)}</span>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}
