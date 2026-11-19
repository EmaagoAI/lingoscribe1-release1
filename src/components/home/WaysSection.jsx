import Link from "next/link";
import { AppWindow, Clapperboard, Code, MessageCircle, Youtube } from "lucide-react";
import { WAYS } from "@/data/home";
import { newTab } from "@/lib/links";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

// "Use it where you already work": one card per way in.
// `t` is content.home.ways.
const ICONS = { AppWindow, Clapperboard, Code, MessageCircle, Youtube };

export default function WaysSection({ t }) {
    return (
        <section id="ways" aria-labelledby="ways-title" className="bg-soft py-20 md:py-[104px]">
            <Container className="flex flex-col gap-11">
                <SectionHeading id="ways-title" size="md" title={t.title} />
                <ul className="m-0 grid list-none gap-3.5 p-0 sm:grid-cols-2 lg:grid-cols-5">
                    {WAYS.map((way) => {
                        const Icon = ICONS[way.icon];
                        const copy = t.items[way.id];
                        return (
                            <li key={way.id}>
                                <Link href={way.href} {...newTab(way.href)}
                                    className="group flex h-full flex-col gap-3.5 rounded-[18px] border border-rule bg-panel p-6 no-underline transition duration-300 ease-soft hover:-translate-y-1 hover:border-primary hover:shadow-lift">
                                    <span className="grid size-[46px] place-items-center rounded-[13px] bg-chip-on text-primary transition duration-300 ease-soft group-hover:-rotate-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                                        <Icon size={22} aria-hidden="true" />
                                    </span>
                                    <span className="flex flex-col gap-1">
                                        <span className="text-lg font-semibold text-fg">{copy.title}</span>
                                        <span className="text-[15px] leading-normal text-fg-muted">{copy.body}</span>
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </Container>
        </section>
    );
}
