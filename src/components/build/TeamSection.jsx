import Image from "next/image";
import { Linkedin } from "lucide-react";
import { fill } from "@/lib/format";
import { newTab } from "@/lib/links";
import { TEAM } from "@/data/build";
import Container from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionHeading";

// The team in a row of cards (photo, name, role, LinkedIn). `t` is
// content.build.team.
export default function TeamSection({ t }) {
    return (
        <section id="team" aria-labelledby="team-title" className="bg-soft py-14 md:py-[104px]">
            <Container className="flex flex-col gap-8 md:gap-10">
                <SectionTitle id="team-title" size="sm">{t.title}</SectionTitle>
                <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 md:gap-4 xl:grid-cols-6">
                    {TEAM.map((person) => (
                        <li key={person.name}
                            className="relative flex flex-col items-start gap-4 rounded-2xl border border-rule bg-panel p-4 md:p-5">
                            <Photo person={person} />
                            {/* LinkedIn sits on the photo's corner, so the name gets the card's full width */}
                            {person.linkedin && (
                                <a href={person.linkedin} {...newTab(person.linkedin)} aria-label={fill(t.linkedin, { name: person.name })}
                                    className="absolute right-6 top-6 grid size-9 place-items-center rounded-full border border-rule bg-panel text-fg-muted shadow-card transition-colors hover:border-primary hover:text-primary md:right-7 md:top-7">
                                    <Linkedin size={16} aria-hidden="true" />
                                </a>
                            )}
                            <span className="flex flex-col">
                                <span className="text-base font-semibold leading-snug text-fg xl:whitespace-nowrap">{person.name}</span>
                                {person.role && <span className="text-[14px] leading-[1.45] text-fg-muted">{t.roles[person.role]}</span>}
                            </span>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}

// A square photo (black and white so the row matches; tall photos are cropped
// from the top so heads stay in), or the
// initials when there is none.
function Photo({ person }) {
    const box = "aspect-square w-full overflow-hidden rounded-xl bg-chip";
    if (!person.photo) {
        return (
            <span aria-hidden="true" className={`${box} grid place-items-center text-[28px] font-semibold text-fg-muted`}>{person.initials}</span>
        );
    }
    return (
        <span className={box}>
            <Image src={person.photo} alt="" width={400} height={400} sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                className="block size-full object-cover object-top grayscale" />
        </span>
    );
}
