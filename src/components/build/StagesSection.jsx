import Image from "next/image";
import { REGIONS, STAGES } from "@/data/build";
import { SPEECH_DATA, WAYS } from "@/data/home";
import { getVariety, liveVarieties } from "@/data/languages";
import { getRecording } from "@/data/recordings";
import { fill } from "@/lib/format";
import { varietyLabel } from "@/lib/languages";
import Container from "@/components/ui/Container";
import SectionHeading, { SectionLead } from "@/components/ui/SectionHeading";

// The five stages from voices to products, each with its number so far and,
// where there is one, a photo or real recordings beside it.
//   t   content.build (stages and regions)
//   tl  content.languages
export default function StagesSection({ t, tl }) {
    const s = t.stages;
    const values = stageValues(t);
    return (
        <section id="stages" aria-labelledby="stg-title" className="bg-soft py-14 md:py-[104px]">
            <Container className="flex flex-col gap-6 md:gap-8">
                <SectionHeading id="stg-title" size="md" title={s.title}>
                    <SectionLead className="max-w-[28em]">{s.body}</SectionLead>
                </SectionHeading>
                <ol className="m-0 list-none border-t border-rule p-0">
                    {STAGES.map((stage, i) => {
                        const copy = s.items[stage.id];
                        return (
                            <li key={stage.id} className="grid items-start gap-x-8 gap-y-5 border-b border-rule py-7 md:grid-cols-[60px_1fr_1fr] md:py-8">
                                <span className="text-[15px] font-semibold tabular-nums text-primary">{i + 1}</span>
                                <div className="flex flex-col gap-3">
                                    <h3 className="m-0 text-2xl font-semibold leading-tight tracking-[-0.015em] text-fg md:text-[28px]">{copy.title}</h3>
                                    <span className="text-4xl font-semibold leading-none tracking-[-0.03em] tabular-nums text-fg md:text-[44px]">{fill(copy.stat, values[stage.id])}</span>
                                    <p className="m-0 max-w-[30em] text-pretty text-base leading-relaxed text-fg-muted md:text-[16.5px]">{fill(copy.body, values[stage.id])}</p>
                                </div>
                                {stage.image && (
                                    <div className="scroll-settle overflow-hidden rounded-2xl">
                                        <Image src={stage.image.src} width={stage.image.width} height={stage.image.height} alt={s.imageAlt}
                                            sizes="(min-width: 768px) 560px, 100vw" className="block aspect-[16/10] h-auto w-full object-cover" />
                                    </div>
                                )}
                                {stage.samples && <Samples ids={stage.samples} label={copy.samplesLabel} tl={tl} />}
                            </li>
                        );
                    })}
                </ol>
            </Container>
        </section>
    );
}

// Real recordings from data/recordings.js: who is speaking, and the opening line.
function Samples({ ids, label, tl }) {
    return (
        <ul aria-label={label} className="m-0 list-none border-t border-rule p-0">
            {ids.map((id) => {
                const rec = getRecording(id);
                return (
                    <li key={id} className="flex flex-col gap-0.5 border-b border-rule py-2.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                        <span className="shrink-0 text-[15px] font-semibold text-fg">{varietyLabel(getVariety(rec.variety), tl)}</span>
                        <span className="text-[15px] leading-[1.45] text-fg-muted sm:text-right">“{rec.segments[0].translation}”</span>
                    </li>
                );
            })}
        </ul>
    );
}

// The numbers each stage's text needs, all from data.
function stageValues(t) {
    const hours = (id) => SPEECH_DATA.find((d) => d.id === id).hours.toLocaleString("en");
    const names = REGIONS.map((r) => t.regions[r]);
    const regions = `${names.slice(0, -1).join(", ")} ${t.stages.and} ${names.at(-1)}`;
    return {
        voices: { count: REGIONS.length, regions },
        recordings: { hours: hours("recorded") },
        text: { hours: hours("transcribed"), translated: hours("translated") },
        models: { count: liveVarieties().length },
        products: { count: WAYS.length },
    };
}
