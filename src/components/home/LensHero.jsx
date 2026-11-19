"use client";
import { Fragment } from "react";
import { ROUTES } from "@/config/routes";
import { LENS_WORDS } from "@/data/lensWords";
import { cx } from "@/lib/format";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import NativeText from "@/components/ui/NativeText";
import RecordingPlayer from "@/components/player/RecordingPlayer";
import useLensDrift from "./useLensDrift";

// Home hero. Words from the region's languages float behind the headline;
// a lens drifts over them, and wherever it passes they turn into English.
// While a mouse is over the hero the lens follows it; when it leaves, the lens
// drifts on by itself (see useLensDrift).
//   t       content.home.hero
//   player  content.common.player
//   tl      content.languages

// How a word looks at each depth: further words are smaller, fainter and blurred.
// `phone: false` hides that depth on small screens, so the hero isn't crowded.
// A word marked `edge` sits beside the heading on phones; small phones (the
// `compact` variant) leave it out, since there the text fills the width.
// A word marked `wide` fills the gap beside the heading on large screens only.
const DEPTH = {
    far: { word: "text-[22px] opacity-40 blur-[0.6px]", meaning: "text-[14px]", phone: false },
    mid: { word: "text-[32px] opacity-50 blur-[0.3px]", meaning: "text-[23px]", phone: false },
    near: { word: "text-[30px] opacity-55 md:text-[48px]", meaning: "text-[22px] md:text-[35px]", phone: true },
};

export default function LensHero({ t, player, tl }) {
    const lens = useLensDrift();

    return (
        <section aria-labelledby="page-title" onPointerMove={lens.follow} onPointerLeave={lens.release} className="relative overflow-hidden bg-bg">
            {/* the lens covers the whole hero, player included, so it never gets cut off */}
            {/* --lens-r is the lens radius: smaller on phones, in step with the smaller words */}
            <div ref={lens.ref} className="absolute inset-0 [--lens-r:64px] md:[--lens-r:92px]">
                <WordLayer className="lens-outside" render={(w) => (
                    <NativeText lang={w.lang} className={cx("whitespace-nowrap leading-[1.4] text-fg", DEPTH[w.depth].word)}>{w.word}</NativeText>
                )} />
                <WordLayer className="lens-inside bg-soft" render={(w) => (
                    <span className="flex flex-col items-center whitespace-nowrap">
                        <span className={cx("font-semibold leading-[1.2] tracking-[-0.02em] text-primary", DEPTH[w.depth].meaning)}>{w.meaning}</span>
                        <span className="text-[11.5px] font-semibold text-fg-muted">{tl.names[w.lang]}</span>
                    </span>
                )} />
                {/* the lens ring */}
                <div aria-hidden="true"
                    className="pointer-events-none absolute left-(--mx) top-(--my) size-[calc(var(--lens-r)*2)] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-primary shadow-[0_0_0_10px_var(--chip-on),0_30px_70px_var(--glow)]">
                    <span className="absolute -bottom-[15px] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-[13px] py-[5px] text-[12.5px] font-semibold text-white">{t.lensBadge}</span>
                </div>
            </div>

            {/* fills the screen on every size: the header (72px), this, then the slim player and a gap; never shorter than the content needs */}
            <div className="relative h-[max(480px,calc(100svh-248px))] md:h-[max(520px,calc(100svh-188px))]">
                {/* keeps the headline area calm so it reads over the words; centred on the headline, so the gap above the player still shows words */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_36%_at_50%_40%,var(--bg)_58%,transparent_100%)] max-md:bg-[radial-gradient(ellipse_70%_34%_at_50%_34%,var(--bg)_58%,transparent_100%)]" />

                <div className="pointer-events-none relative z-[2] flex h-full flex-col items-center justify-center gap-6 px-5 text-center">
                    <h1 id="page-title" className="m-0 text-[min(56px,calc((100vw-40px)/7.6))] font-semibold leading-[.95] tracking-[-0.048em] text-fg [font-variation-settings:'wdth'_88] sm:text-[80px] lg:text-[100px] 2xl:text-[124px]">
                        {/* The title runs on two lines, split at its middle word */}
                        {t.title.map((word, i) => (
                            <Fragment key={i}>
                                {i === Math.ceil(t.title.length / 2) && <br />}
                                {i > 0 && " "}
                                <span className="inline-block animate-word" style={{ animationDelay: `${i * 110}ms` }}>{word}</span>
                            </Fragment>
                        ))}
                    </h1>
                    <p className="m-0 max-w-[26em] animate-rise text-[17px] leading-[1.55] text-fg-muted [animation-delay:380ms] md:text-[19.5px] 2xl:text-[22px]">{t.subtitle}</p>
                    <div className="pointer-events-auto flex animate-rise flex-wrap justify-center gap-3 [animation-delay:460ms]">
                        <Button href={ROUTES.signup} size="lg">{t.primary}</Button>
                        <Button href={ROUTES.sales} variant="secondary" size="lg">{t.secondary}</Button>
                    </div>
                </div>
            </div>

            <Container className="relative -mt-2 pb-8">
                <RecordingPlayer t={player} tl={tl} className="animate-rise [animation-delay:560ms]" />
            </Container>
        </section>
    );
}

// One layer of floating words, positioned from data/lensWords.js.
function WordLayer({ className, render }) {
    return (
        <div aria-hidden="true" className={cx("absolute inset-0", className)}>
            {LENS_WORDS.map((w, i) => (
                <span key={i} className={cx("absolute -translate-x-1/2 -translate-y-1/2", !DEPTH[w.depth].phone && "max-md:hidden", w.edge && "compact:hidden", w.wide && "max-2xl:hidden")} style={{ left: `${w.x}%`, top: `${w.y}%` }}>
                    <span className="block animate-bob" style={{ animationDuration: `${w.bob}s`, animationDelay: `${w.delay}s` }}>{render(w)}</span>
                </span>
            ))}
        </div>
    );
}
