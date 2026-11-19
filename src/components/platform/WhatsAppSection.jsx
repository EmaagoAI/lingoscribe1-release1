import { WHATSAPP } from "@/config/routes";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { SectionLead, SectionTitle } from "@/components/ui/SectionHeading";
import StepList from "@/components/ui/StepList";
import WhatsAppChat from "./WhatsAppChat";

// WhatsApp: how the bot works, beside a phone that plays a real conversation with it.
//   t   content.platform.whatsapp
//   tl  content.languages
export default function WhatsAppSection({ t, tl }) {
    return (
        <section id="whatsapp" aria-labelledby="wa-title" className="bg-soft py-14 md:py-[104px]">
            <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
                <div className="flex flex-col gap-6 md:gap-7">
                    <div className="flex flex-col gap-4 md:gap-5">
                        <SectionTitle id="wa-title" size="sm">{t.title}</SectionTitle>
                        <SectionLead className="max-w-[30em] md:text-[17.5px]">{t.body}</SectionLead>
                    </div>
                    <StepList steps={t.steps} />

                    <div className="flex flex-col items-start gap-2.5">
                        <Button href={WHATSAPP.url} size="lg">{t.primary}</Button>
                        <span className="text-[14.5px] text-fg-muted">{t.note}</span>
                    </div>
                </div>
                <WhatsAppChat t={t.chat} tl={tl} />
            </Container>
        </section>
    );
}
