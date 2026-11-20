import { API_BASE_URL, EXTERNAL, ROUTES } from "@/config/routes";
import { API_LANGUAGES, API_RULES, API_SAMPLE } from "@/data/developers";
import { getRecording } from "@/data/recordings";
import { getVariety } from "@/data/languages";
import { fill } from "@/lib/format";
import { varietyLabel } from "@/lib/languages";
import Button from "@/components/ui/Button";
import CodeBlock from "@/components/ui/CodeBlock";
import Container from "@/components/ui/Container";

// Developers page opening: the pitch, and a real call to /v1/transcribe with
// the response it gives for one of our recordings.
//   t   content.developers.hero
//   tl  content.languages
export default function DevelopersHero({ t, tl }) {
    const recording = getRecording(API_SAMPLE.recording);
    const code = API_LANGUAGES.find((l) => l.variety === recording.variety).code;
    const language = varietyLabel(getVariety(recording.variety), tl);

    const request = [
        `curl -X POST ${API_BASE_URL}/v1/transcribe \\`,
        `  -H "${API_RULES.keyHeader}: YOUR_API_KEY" \\`,
        `  -F "file=@${API_SAMPLE.file}" \\`,
        `  -F "language=${code}"`,
    ].join("\n");

    const response = JSON.stringify({
        language: code,
        segments: recording.segments.slice(0, API_SAMPLE.lines).map((s) => ({ speaker: "A", start: s.start, end: s.end, transcription: s.text })),
    }, null, 2);

    return (
        <section aria-labelledby="page-title" className="bg-bg pb-14 pt-11 md:pb-24 md:pt-20">
            <Container className="grid items-start gap-7 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
                <div className="flex animate-rise flex-col gap-6">
                    <h1 id="page-title"
                        className="m-0 max-w-[12ch] text-balance text-[42px] font-semibold leading-[.98] tracking-[-0.045em] text-fg [font-variation-settings:'wdth'_90] md:text-[64px] lg:text-[76px]">
                        {t.title}
                    </h1>
                    <p className="m-0 max-w-[30em] text-pretty text-[17px] leading-relaxed text-fg-muted md:text-[19px]">{t.subtitle}</p>
                    <div className="flex flex-wrap items-center gap-3">
                        <Button href={ROUTES.signup} size="lg">{t.primary}</Button>
                        <Button href={EXTERNAL.apiDocs} variant="secondary" size="lg">{t.secondary}</Button>
                    </div>
                    <span className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[14.5px] leading-[1.45] text-fg-muted">
                        {t.note}
                        <code className="rounded bg-chip px-1.5 font-mono text-[13px]">{API_BASE_URL}</code>
                    </span>
                </div>
                <div className="flex min-w-0 animate-rise flex-col gap-3.5 [animation-delay:200ms]">
                    <CodeBlock caption={fill(t.request, { language })}>{request}</CodeBlock>
                    <CodeBlock caption={t.response} className="animate-rise [animation-delay:900ms]">
                        <span dir="ltr">{response}</span>
                    </CodeBlock>
                </div>
            </Container>
        </section>
    );
}
