import { CONTACT_EMAIL } from "@/config/routes";
import { SPEECH_DATA } from "@/data/home";
import Container from "@/components/ui/Container";
import Rich from "@/components/ui/Rich";
import { SectionTitle } from "@/components/ui/SectionHeading";

// Consent, side by side: who recorded our training data, and the rule for
// cloning voices.
//   t  content.trust (data + voices)
const recordedHours = SPEECH_DATA.find((d) => d.id === "recorded").hours;

export default function ConsentSection({ t }) {
    return (
        <section id="training" aria-labelledby="tr-title" className="bg-bg py-14 md:py-[104px]">
            <Container className="grid items-start gap-10 md:grid-cols-2 md:gap-14">
                <Block id="tr-title" title={t.data.title}>
                    <Rich text={t.data.body} values={{ hours: recordedHours.toLocaleString("en-US") }} />
                </Block>
                <Block id="vc-title" title={t.voices.title}>
                    <Rich text={t.voices.body} values={{
                        email: <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-link underline underline-offset-4 hover:text-primary">{CONTACT_EMAIL}</a>,
                    }} />
                </Block>
            </Container>
        </section>
    );
}

function Block({ id, title, children }) {
    return (
        <div className="flex flex-col gap-4 md:gap-[18px]">
            <SectionTitle id={id} size="sm">{title}</SectionTitle>
            <p className="m-0 max-w-[30em] text-pretty text-base leading-relaxed text-fg-muted md:text-[17.5px]">{children}</p>
        </div>
    );
}
