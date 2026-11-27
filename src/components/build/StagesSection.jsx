import Image from "next/image";
import { REGIONS, STAGES, STAGE_PHOTOS } from "@/data/build";
import { SPEECH_DATA, WAYS } from "@/data/home";
import { liveVarieties } from "@/data/languages";
import { cx, fill } from "@/lib/format";
import Container from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionHeading";

// The five stages from voices to products along a dotted line, two photos
// from the offices, and what a recording actually is.
//   t   content.build (stages)
export default function StagesSection({ t }) {
    const s = t.stages;
    const values = stageValues();
    return (
        <section id="stages" aria-labelledby="stg-title" className="bg-soft py-14 md:py-[104px]">
            <Container className="flex flex-col gap-10 md:gap-11">
                <div className="flex flex-col gap-3.5">
                    <SectionTitle id="stg-title" size="md">{s.title}</SectionTitle>
                    <p className="m-0 max-w-[34em] text-pretty text-[17px] leading-relaxed text-fg-muted md:text-lg">{s.body}</p>
                </div>

                <div>
                    {/* the line and its five dots, one over each column (wide screens only) */}
                    <div aria-hidden="true" className="relative hidden h-[11px] lg:block">
                        <span className="absolute inset-x-[10%] top-1 h-0.5 bg-rule" />
                        {STAGES.map((id, i) => (
                            <span key={id} className="absolute top-0 -ml-[5px] size-2.5 rounded-full bg-primary" style={{ left: `${10 + i * 20}%` }} />
                        ))}
                    </div>
                    <ol className="m-0 grid list-none gap-y-8 p-0 sm:grid-cols-2 lg:grid-cols-5 lg:gap-y-0">
                        {STAGES.map((id, i) => {
                            const copy = s.items[id];
                            return (
                                <li key={id}
                                    className={cx(
                                        "flex flex-col gap-2.5 border-t border-rule pt-6 lg:border-t-0 lg:pb-0",
                                        i === 0 ? "lg:pr-6" : i === STAGES.length - 1 ? "lg:border-l lg:pl-6" : "lg:border-l lg:px-6",
                                    )}>
                                    <span className="text-sm font-semibold text-link">{fill(s.stage, { n: i + 1 })}</span>
                                    <h3 className="m-0 text-xl font-semibold leading-tight tracking-[-0.015em] text-fg">{copy.title}</h3>
                                    <span className="text-4xl font-semibold leading-none tracking-[-0.035em] text-fg md:text-[40px]">{fill(copy.stat, values[id])}</span>
                                    <p className="m-0 text-pretty text-[15px] leading-normal text-fg-muted">{fill(copy.body, values[id])}</p>
                                </li>
                            );
                        })}
                    </ol>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                    {STAGE_PHOTOS.map((photo) => (
                        <figure key={photo.id} className="group m-0 flex flex-col gap-3">
                            <div className="overflow-hidden rounded-2xl">
                                <Image src={photo.src} width={photo.width} height={photo.height} alt={s.photos[photo.id].alt}
                                    sizes="(min-width: 768px) 592px, 100vw"
                                    className="block aspect-video h-auto w-full object-cover transition-transform duration-700 ease-soft group-hover:scale-[1.012]" />
                            </div>
                            <figcaption className="text-[15px] leading-normal text-fg-muted">{s.photos[photo.id].caption}</figcaption>
                        </figure>
                    ))}
                </div>

                <div className="flex flex-wrap items-baseline gap-x-9 gap-y-3.5 border-t border-rule pt-7">
                    <span className="flex-none text-base font-semibold text-fg">{s.recordingTitle}</span>
                    <p className="m-0 min-w-0 flex-[999_1_420px] text-pretty text-base leading-[1.75] text-fg-muted">{s.recordingBody}</p>
                </div>
            </Container>
        </section>
    );
}

// The numbers each stage's text needs, all from data.
function stageValues() {
    const hours = (id) => SPEECH_DATA.find((d) => d.id === id).hours.toLocaleString("en");
    return {
        voices: { count: REGIONS.length },
        recordings: { hours: hours("recorded") },
        text: { hours: hours("transcribed"), translated: hours("translated") },
        models: { count: liveVarieties().length },
        products: { count: WAYS.length },
    };
}
