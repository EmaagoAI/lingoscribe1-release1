"use client";
import { ROUTES } from "@/config/routes";
import { VARIETIES } from "@/data/languages";
import { fill } from "@/lib/format";
import { nativeName, varietyLabel } from "@/lib/languages";
import Button from "@/components/ui/Button";
import { usePlayer } from "./PlayerProvider";

// Shown in the open player when the picked language has no public clip:
// what it can do, a way to try it, and the clips that can be played.
export default function NoSample({ t, tl }) {
    const { state, selectVariety } = usePlayer();
    const variety = VARIETIES.find((v) => v.id === state.varietyId);
    const withClips = VARIETIES.filter((v) => v.recording);

    return (
        <div className="flex animate-fade flex-col items-center gap-3.5 px-7 pb-10 pt-11 text-center [animation-duration:320ms]">
            <p className="m-0 text-[22px] font-semibold tracking-[-0.015em] text-fg">{fill(t.noSample.title, { language: tl.names[variety.language] })}</p>
            <p className="m-0 max-w-[34em] text-base leading-normal text-fg-muted">{fill(t.noSample.body, { variety: varietyLabel(variety, tl) })}</p>
            <Button href={ROUTES.signup}>{t.noSample.cta}</Button>
            <p className="m-0 mt-2 text-[13.5px] text-fg-muted">{t.noSample.orHear}</p>
            <div className="flex flex-wrap justify-center gap-2">
                {withClips.map((v) => (
                    <button key={v.id} type="button" onClick={() => selectVariety(v)}
                        className="inline-flex min-h-9 items-baseline gap-2 rounded-full border border-rule bg-panel px-3.5 pt-1.5 text-sm text-fg transition hover:-translate-y-px hover:border-primary">
                        <span dir="rtl" className="font-naskh text-[15px] text-primary">{nativeName(v)}</span>
                        {varietyLabel(v, tl)}
                    </button>
                ))}
            </div>
        </div>
    );
}
