import { CHANNELS } from "@/data/platform";
import Container from "@/components/ui/Container";
import SectionHeading, { SectionLead } from "@/components/ui/SectionHeading";
import TextLink from "@/components/ui/TextLink";

// "One account, four ways in": a card per channel. `t` is content.platform.channels.
export default function ChannelsSection({ t }) {
    return (
        <section id="channels" aria-labelledby="ch-title" className="bg-bg py-14 md:py-[104px]">
            <Container className="flex flex-col gap-8 md:gap-11">
                <SectionHeading id="ch-title" size="md" title={t.title}>
                    <SectionLead className="max-w-[30em]">{t.subtitle}</SectionLead>
                </SectionHeading>
                <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
                    {CHANNELS.map((channel) => {
                        const copy = t.items[channel.id];
                        return (
                            <li key={channel.id}
                                className="flex flex-col gap-3 rounded-2xl border border-rule bg-panel px-6 py-[26px] transition duration-300 ease-soft hover:-translate-y-1 hover:border-primary hover:shadow-lift">
                                <h3 className="m-0 text-xl font-semibold leading-tight tracking-[-0.015em] text-fg">{copy.title}</h3>
                                <p className="m-0 text-pretty text-[15px] leading-relaxed text-fg-muted">{copy.body}</p>
                                <div className="mt-auto pt-1.5">
                                    {channel.href
                                        ? <TextLink href={channel.href} className="text-[15.5px]">{copy.link}</TextLink>
                                        : <span className="inline-block rounded-full bg-chip px-3 py-1 text-[13.5px] font-semibold text-fg-muted">{copy.link}</span>}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </Container>
        </section>
    );
}
