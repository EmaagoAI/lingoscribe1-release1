"use client";

import { useEffect, useState } from "react";
import { Check, Mic, Music } from "lucide-react";
import { DUB_DEFAULT, DUB_LANGS, DUB_SOURCE, STAGES, STAGE_MS } from "@/data/lingodub";
import { cx, fill } from "@/lib/format";
import Container from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionHeading";

// The five pipeline stages as tabs. They step through on their own until the
// visitor picks one; each shows a small picture of what that stage does.
// `t` is content.lingodub.how.
const Tag = ({ on = false, muted = true, children }) => (
    <span className={cx(
        "inline-flex min-h-8 items-center rounded-full border px-[13px] text-sm font-medium",
        on ? "border-primary bg-accent-soft text-fg" : "border-rule bg-panel",
        !on && (muted ? "text-fg-muted" : "text-fg"),
    )}>
        {children}
    </span>
);

const Flag = ({ children }) => <span className="rounded bg-chip px-1">{children}</span>;

export default function HowSection({ t }) {
    const [stage, setStage] = useState(0);
    const [auto, setAuto] = useState(true);

    useEffect(() => {
        if (!auto) return;
        const id = setInterval(() => setStage((s) => (s + 1) % STAGES.length), STAGE_MS);
        return () => clearInterval(id);
    }, [auto]);

    const step = t.steps[STAGES[stage]];

    return (
        <section id="how" aria-labelledby="how-title" className="scroll-mt-20 bg-soft py-14 md:py-[104px]">
            <Container className="flex flex-col gap-8 md:gap-11">
                <div className="flex flex-col gap-3.5">
                    <SectionTitle id="how-title" size="md">{t.title}</SectionTitle>
                    <p className="m-0 max-w-[36em] text-pretty text-[17px] leading-relaxed text-fg-muted md:text-lg">{t.body}</p>
                </div>

                <div className="flex flex-col overflow-hidden rounded-[18px] border border-rule bg-panel shadow-card transition duration-300 ease-soft hover:-translate-y-1 hover:border-primary hover:shadow-lift">
                    <div role="group" aria-label={t.stagesLabel} className="flex flex-wrap border-b border-rule">
                        {STAGES.map((id, i) => {
                            const on = i === stage;
                            return (
                                <button key={id} type="button" aria-pressed={on} onClick={() => { setStage(i); setAuto(false); }}
                                    className={cx(
                                        "relative flex min-w-0 flex-[1_1_170px] flex-col gap-[3px] border-0 border-r border-solid border-rule px-[18px] pb-[18px] pt-4 text-left font-[inherit]",
                                        on ? "bg-accent-soft" : "bg-transparent",
                                    )}>
                                    <span className="text-[13px] font-medium text-fg-muted">{t.steps[id].n}</span>
                                    <span className="text-[17px] font-semibold tracking-[-0.01em] text-fg">{t.steps[id].name}</span>
                                    <span aria-hidden="true"
                                        className={cx("absolute bottom-0 left-0 h-[3px] origin-left bg-primary", on ? "w-full" : "w-0")}
                                        style={on && auto ? { animation: `progress ${STAGE_MS}ms linear` } : undefined}
                                        key={on ? `on-${stage}` : "off"} />
                                </button>
                            );
                        })}
                    </div>

                    <div className="flex flex-wrap gap-7 px-4 py-5 md:px-6 md:py-[22px]">
                        <div className="box-border flex min-h-[212px] min-w-0 flex-[999_1_440px] flex-col justify-center gap-[18px] rounded-[14px] bg-soft p-5 md:p-6">
                            <StageDemo stage={STAGES[stage]} d={t.demo} />
                        </div>
                        <div className="flex min-w-0 flex-[1_1_345px] flex-col gap-[18px]">
                            <p className="m-0 text-pretty text-base leading-relaxed text-fg-muted">{step.text}</p>
                            <div className="flex flex-col gap-2.5 border-t border-rule pt-4">
                                <span className="text-sm font-semibold text-fg">{t.termsLabel}</span>
                                <div className="flex flex-wrap gap-2">
                                    {step.terms.map((term) => (
                                        <span key={term} className="inline-flex min-h-8 items-center rounded-lg bg-chip px-3 text-sm font-medium text-fg">{term}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 border-t border-rule bg-soft px-5 py-5 md:px-7">
                        <span className="inline-flex items-center gap-2.5 text-base font-semibold text-fg">
                            <Check size={18} strokeWidth={2.6} className="text-tide" aria-hidden="true" />{t.doneTitle}
                        </span>
                        <span className="min-w-0 flex-[999_1_240px] text-[15px] leading-[1.55] text-fg-muted">{t.doneBody} <Flag>{t.doneFlag}</Flag>.</span>
                    </div>
                </div>
            </Container>
        </section>
    );
}

// What each stage looks like, drawn with the demo line from data/lingodub.js.
function StageDemo({ stage, d }) {
    const src = DUB_LANGS[DUB_SOURCE];
    const dub = DUB_LANGS[DUB_DEFAULT];
    const bridge = "The flood water is going down.";

    if (stage === "separate") return (
        <div className="flex flex-wrap gap-3">
            {[{ icon: Mic, on: true, ...d.speech }, { icon: Music, on: false, ...d.music }].map(({ icon: Icon, on, title, body }) => (
                <div key={title} className={cx("flex min-w-0 flex-[1_1_210px] items-center gap-3.5 rounded-[14px] border p-5", on ? "border-primary bg-accent-soft" : "border-rule bg-panel")}>
                    <Icon size={22} strokeWidth={2} className={cx("shrink-0", on ? "text-link" : "text-tide")} aria-hidden="true" />
                    <span className="min-w-0">
                        <span className="block text-[15.5px] font-semibold text-fg">{title}</span>
                        <span className="block text-sm leading-[1.45] text-fg-muted">{body}</span>
                    </span>
                </div>
            ))}
        </div>
    );

    if (stage === "understand") return (
        <div className="flex flex-col gap-3.5">
            <div aria-hidden="true" className="flex h-[52px] gap-[5px]">
                {[2, 3, 2, 4].map((grow, i) => (
                    <span key={i} className={cx("rounded-[9px] border", i === 1 ? "border-primary bg-accent-soft" : "border-rule bg-panel")} style={{ flex: `${grow} 1 0` }} />
                ))}
            </div>
            <div className="flex flex-wrap gap-2">
                <Tag on>{d.span}</Tag><Tag on>{d.speaker}</Tag><Tag>{d.others}</Tag>
            </div>
        </div>
    );

    if (stage === "translate") return (
        <div className="flex max-w-[560px] flex-col gap-4">
            <div className="border-l-2 border-rule pl-4">
                <span className="mb-1.5 block text-sm font-semibold text-fg-muted">{fill(d.sourceTag, { lang: src.name })}</span>
                <span dir="rtl" lang={src.id} className="inline-block font-naskh text-[21px] leading-[1.8] text-fg">{src.line}</span>
            </div>
            <div className="border-l-2 border-rule pl-4">
                <span className="mb-1.5 block text-sm font-semibold text-fg-muted">{d.bridgeTag}</span>
                <span className="block font-serif text-[19px] leading-normal text-fg-muted">{bridge}</span>
            </div>
        </div>
    );

    if (stage === "voice") return (
        <div className="flex max-w-[560px] flex-col gap-4">
            <div className="border-l-2 border-primary pl-4">
                <span className="mb-1.5 block text-sm font-semibold text-link">{fill(d.dubTag, { lang: dub.name })}</span>
                <span dir="rtl" lang={dub.id} className="inline-block font-naskh text-[21px] font-medium leading-[1.8] text-fg">{dub.line}</span>
            </div>
            <div className="flex flex-wrap gap-2">{d.voice.map((v) => <Tag key={v}>{v}</Tag>)}</div>
        </div>
    );

    return (
        <div className="flex flex-col gap-3.5">
            <div className="relative h-[118px] overflow-hidden rounded-[14px] bg-[#0b1233]">
                <span dir="rtl" lang={dub.id} className="absolute inset-x-0 bottom-11 px-7 text-center font-naskh text-xl font-medium text-white">{dub.line}</span>
                <span className="absolute inset-x-0 bottom-[22px] text-center font-serif text-[15px] text-[#c9d0e8]">{bridge}</span>
                <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 bg-white/18" />
                <span aria-hidden="true" className="absolute bottom-0 left-0 h-1 w-[62%] bg-primary" />
            </div>
            <div className="flex flex-wrap gap-2">{d.outputs.map((o) => <Tag key={o}>{o}</Tag>)}</div>
        </div>
    );
}
