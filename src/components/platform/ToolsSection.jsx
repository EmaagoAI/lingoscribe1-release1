import { ROUTES } from "@/config/routes";
import { SCREENSHOTS, TTS_LANGUAGES, TTS_VOICES } from "@/data/platform";
import { cx } from "@/lib/format";
import Container from "@/components/ui/Container";
import Pill from "@/components/ui/Pill";
import Screenshot from "@/components/ui/Screenshot";
import { SectionLead, SectionTitle } from "@/components/ui/SectionHeading";
import StepList from "@/components/ui/StepList";
import TextLink from "@/components/ui/TextLink";

// The three tools, one after another, each with its words on the left and a
// picture of it on the right (stacked on small screens).
//   t   content.platform.tools
//   tl  content.languages
export default function ToolsSection({ t, tl }) {
    const { speechToText: stt, textToSpeech: tts, speechToSpeech: s2s } = t;
    return (
        <section id="tools" aria-labelledby="stt-title" className="bg-soft py-14 md:py-[104px]">
            <Container className="flex flex-col gap-12 md:gap-[72px]">
                <Tool id="stt-title" copy={stt} columns="lg:grid-cols-[0.8fr_1.2fr]">
                    <Screenshot image={SCREENSHOTS.speechToText} alt={stt.imageAlt} sizes="(min-width: 1024px) 680px, 100vw" />
                </Tool>

                <hr className="m-0 border-0 border-t border-rule" />

                <Tool id="tts-title" copy={tts}>
                    <div className="flex flex-col gap-6">
                        <PillGroup label={tts.languagesLabel} items={TTS_LANGUAGES.map((id) => ({ id, text: tl.names[id] }))} />
                        <PillGroup label={tts.voicesLabel} items={TTS_VOICES.map((id) => ({ id, text: tts.voices[id] }))} />
                        <p className="m-0 text-pretty text-[14.5px] leading-relaxed text-fg-muted">{tts.note}</p>
                    </div>
                </Tool>

                <hr className="m-0 border-0 border-t border-rule" />

                <Tool id="s2s-title" copy={s2s}>
                    <StepList steps={s2s.steps} />
                </Tool>
            </Container>
        </section>
    );
}

// One tool: title, a line about it and a link, beside whatever shows it off.
function Tool({ id, copy, columns = "lg:grid-cols-[0.9fr_1.1fr]", children }) {
    return (
        <div className={cx("grid items-start gap-8 lg:gap-14", columns)}>
            <div className="flex flex-col gap-4 md:gap-[18px]">
                <SectionTitle id={id} size="sm">{copy.title}</SectionTitle>
                <SectionLead className="max-w-[30em] md:text-[17.5px]">{copy.body}</SectionLead>
                <TextLink href={ROUTES.signup} className="text-[15.5px]">{copy.link}</TextLink>
            </div>
            {children}
        </div>
    );
}

function PillGroup({ label, items }) {
    return (
        <div className="flex flex-col gap-2.5">
            <span className="text-sm leading-[1.45] text-fg-muted">{label}</span>
            <div className="flex flex-wrap gap-2">
                {items.map((item) => <Pill key={item.id} on={item.on}>{item.text}</Pill>)}
            </div>
        </div>
    );
}
