import { Linkedin } from "lucide-react";
import { CONTACT_EMAIL } from "@/config/routes";
import { fill } from "@/lib/format";
import { newTab } from "@/lib/links";
import { TEAM } from "@/data/build";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { SectionLead, SectionTitle } from "@/components/ui/SectionHeading";

// The team, each with a LinkedIn link where there is one, and an invitation to native speakers. `t` is content.build.team.
export default function TeamSection({ t }) {
    const mail = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t.join.subject)}`;
    return (
        <section id="team" aria-labelledby="team-title" className="bg-soft py-14 md:py-[104px]">
            <Container className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
                <div className="flex flex-col gap-[18px]">
                    <SectionTitle id="team-title" size="sm">{t.title}</SectionTitle>
                    <ul className="m-0 list-none border-t border-rule p-0">
                        {TEAM.map((person) => (
                            <li key={person.name} className="flex items-center gap-4 border-b border-rule py-[22px]">
                                <span aria-hidden="true" className="grid size-14 shrink-0 place-items-center rounded-full bg-chip text-[17px] font-semibold text-fg">{person.initials}</span>
                                <span className="flex flex-1 flex-col">
                                    <span className="text-lg font-semibold text-fg">{person.name}</span>
                                    <span className="text-[15px] leading-[1.45] text-fg-muted">{t.roles[person.role]}</span>
                                </span>
                                {person.linkedin && (
                                    <a href={person.linkedin} {...newTab(person.linkedin)} aria-label={fill(t.linkedin, { name: person.name })}
                                        className="grid size-10 shrink-0 place-items-center rounded-full border border-rule text-fg-muted transition-colors hover:border-primary hover:text-primary">
                                        <Linkedin size={18} aria-hidden="true" />
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col gap-[18px]">
                    <SectionTitle id="join-title" size="sm">{t.join.title}</SectionTitle>
                    <SectionLead className="max-w-[28em]">{t.join.body}</SectionLead>
                    <div><Button href={mail} variant="secondary" size="lg">{t.join.cta}</Button></div>
                </div>
            </Container>
        </section>
    );
}
