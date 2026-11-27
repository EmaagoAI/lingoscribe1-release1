import { STORY_VIDEO } from "@/data/build";
import { SPEECH_DATA } from "@/data/home";
import { fill } from "@/lib/format";
import Container from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionHeading";

// The story video beside the story in six short lines, the list stretched to
// the video's height on wide screens. `t` is content.build.story.
export default function StorySection({ t }) {
    const hours = SPEECH_DATA.find((d) => d.id === "recorded").hours.toLocaleString("en");
    return (
        <section id="story" aria-labelledby="story-title" className="scroll-mt-20 bg-bg pb-14 md:pb-24">
            <Container className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-14">
                <figure className="m-0 flex flex-col gap-2.5">
                    <div className="overflow-hidden rounded-[14px] bg-black">
                        {/* plays only when asked, so it never moves on its own */}
                        <video controls preload="none" playsInline poster={STORY_VIDEO.poster}
                            width={STORY_VIDEO.width} height={STORY_VIDEO.height} className="block aspect-video h-auto w-full bg-black">
                            <source src={STORY_VIDEO.src} type="video/mp4" />
                            {t.video.fallback}
                        </video>
                    </div>
                    <figcaption className="text-sm leading-[1.45] text-fg-muted">
                        {t.video.caption} <span className="rounded bg-chip px-1">{t.video.captionFlag}</span>
                    </figcaption>
                </figure>
                <div className="flex flex-col gap-4">
                    <SectionTitle id="story-title" size="xs">{t.title}</SectionTitle>
                    <ol className="m-0 flex flex-1 list-none flex-col border-t border-rule p-0">
                        {t.steps.map((step) => (
                            <li key={step.title} className="flex flex-1 flex-col justify-center gap-0.5 border-b border-rule py-2">
                                <span className="text-[17px] font-semibold text-fg md:text-[19px]">{step.title}</span>
                                <span className="text-[15px] leading-[1.45] text-fg-muted md:text-base">{fill(step.note, { hours })}</span>
                            </li>
                        ))}
                    </ol>
                </div>
            </Container>
        </section>
    );
}
