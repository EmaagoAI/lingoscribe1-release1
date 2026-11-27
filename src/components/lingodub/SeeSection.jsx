"use client";

import { useState } from "react";
import { DUB_DEFAULT, DUB_LANGS, DUB_SOURCE } from "@/data/lingodub";
import { cx, fill } from "@/lib/format";
import Container from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionHeading";

// A placeholder player: pick a dub language and a subtitle track and the
// frame shows that version's line. `t` is content.lingodub.see.
const PlayIcon = ({ size }) => (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M8 5l12 7-12 7z" /></svg>
);

const Native = ({ children }) => (
    <span dir="rtl" className="font-naskh text-[15px] font-normal opacity-70">{children}</span>
);

const Flag = ({ children }) => <span className="rounded bg-chip px-1">{children}</span>;

export default function SeeSection({ t }) {
    const [version, setVersion] = useState(DUB_DEFAULT);
    const [subs, setSubs] = useState("dub");
    const src = DUB_LANGS[DUB_SOURCE];
    const dub = DUB_LANGS[version];
    const shown = subs === "source" ? src : dub;

    return (
        <section id="see" aria-labelledby="see-title" className="scroll-mt-20 bg-soft py-14 md:py-[104px]">
            <Container className="flex flex-col gap-10">
                <div className="flex flex-col gap-3.5">
                    <SectionTitle id="see-title" size="md">{t.title}</SectionTitle>
                    <p className="m-0 max-w-[36em] text-pretty text-[17px] leading-relaxed text-fg-muted md:text-lg">{t.body}</p>
                </div>

                <div className="flex flex-col gap-4 rounded-[22px] border border-rule bg-panel p-3 shadow-card transition duration-300 ease-soft hover:-translate-y-1 hover:border-primary hover:shadow-lift md:p-[18px]">
                    <div className="flex flex-wrap items-center gap-[18px] px-2 pb-0.5 pt-1.5">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="mr-0.5 text-sm font-semibold text-fg">{t.source}</span>
                            <span className="inline-flex min-h-11 items-center gap-[9px] rounded-full border border-rule bg-soft px-4 text-[14.5px] font-medium text-fg">
                                {src.name}<Native>{src.native}</Native>
                            </span>
                        </div>
                        <span aria-hidden="true" className="hidden h-[26px] w-px bg-rule sm:block" />
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="mr-0.5 text-sm font-semibold text-fg">{t.dubInto}</span>
                            {DUB_LANGS.map((l, i) => i === DUB_SOURCE ? null : (
                                <button key={l.id} type="button" onClick={() => setVersion(i)} aria-pressed={i === version}
                                    className={cx(
                                        "inline-flex min-h-11 items-center gap-[9px] rounded-full border px-4 font-[inherit] text-[14.5px] font-medium text-fg transition-colors duration-200 hover:border-primary",
                                        i === version ? "border-primary bg-accent-soft" : "border-rule bg-panel",
                                    )}>
                                    {l.name}<Native>{l.native}</Native>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="relative aspect-video overflow-hidden rounded-2xl bg-[#0b1233]">
                        <span className="absolute left-3 top-3 rounded-full bg-white/16 px-[13px] py-[7px] text-[13px] font-medium text-white md:left-[22px] md:top-[22px]">{t.clip}</span>
                        <span className="absolute right-3 top-3 rounded-full bg-[#7fe0d6] px-[13px] py-[7px] text-[13px] font-semibold text-[#0b1233] md:right-[22px] md:top-[22px]">{fill(t.dubbed, { lang: dub.name })}</span>
                        <div className="absolute inset-x-0 top-[30%] flex flex-col items-center gap-4 md:top-[40%]">
                            <button type="button" aria-label={t.play}
                                className="flex size-14 items-center justify-center rounded-full bg-white text-[#0b1233] transition duration-200 ease-soft hover:-translate-y-0.5 active:scale-[.98] md:size-[76px]">
                                <PlayIcon size={26} />
                            </button>
                            <span className="hidden text-[13px] tracking-[0.02em] text-[#aeb7d6] sm:block">{t.placeholder}</span>
                        </div>
                        {subs !== "off" && (
                            <div className="absolute inset-x-0 bottom-3 flex flex-col items-center gap-2 px-4 md:bottom-[42px] md:px-16">
                                <span dir="rtl" lang={shown.id}
                                    className="max-w-full rounded-xl bg-[rgba(11,18,51,0.74)] px-3 py-1 text-center font-naskh text-base font-medium leading-[1.75] text-white md:px-5 md:py-2 md:text-[27px]">
                                    {shown.line}
                                </span>
                                {subs === "dub" && (
                                    <span className="hidden max-w-full rounded-[9px] bg-[rgba(11,18,51,0.64)] px-4 py-[5px] text-center font-serif text-lg leading-[1.4] text-[#dde3f5] sm:block">{t.bridge}</span>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 px-2 pb-1.5 pt-0.5">
                        <button type="button" aria-label={t.play}
                            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-transparent bg-primary text-on-primary transition duration-200 ease-soft hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_14px_32px_var(--glow)]">
                            <PlayIcon size={16} />
                        </button>
                        <div className="flex min-w-0 flex-[999_1_240px] items-center gap-3">
                            <span className="text-[13px] font-semibold text-fg-muted">0:00</span>
                            <span aria-hidden="true" className="h-1 min-w-0 flex-[999_1_80px] overflow-hidden rounded-sm bg-bar-off">
                                <span className="block h-full w-[38%] rounded-sm bg-primary" />
                            </span>
                            <span className="text-[13px] font-semibold text-fg-muted">{t.duration}</span>
                        </div>
                        <div role="group" aria-label={t.subsLabel} className="flex gap-1 rounded-full border border-rule bg-chip p-1">
                            {Object.entries(t.subs).map(([id, label]) => (
                                <button key={id} type="button" onClick={() => setSubs(id)} aria-pressed={subs === id}
                                    className={cx(
                                        "min-h-11 rounded-full border-0 px-4 font-[inherit] text-[14.5px] font-medium",
                                        subs === id ? "bg-accent-soft text-link" : "bg-transparent text-fg-muted",
                                    )}>
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <p className="m-0 text-[14.5px] leading-relaxed text-fg-muted">{t.note} <Flag>{t.noteFlag}</Flag>.</p>
            </Container>
        </section>
    );
}
