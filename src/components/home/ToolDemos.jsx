import Image from "next/image";
import { Check } from "lucide-react";
import { TOOL_DEMO } from "@/data/home";
import { getRecording } from "@/data/recordings";
import { clock, cx, fill } from "@/lib/format";
import { varietyForRecording } from "@/lib/languages";
import EqBars from "@/components/ui/EqBars";
import NativeText from "@/components/ui/NativeText";

// The little live picture beside each tool in the tools tour, keyed by tool id.
// Each one animates in when its tab opens. Text comes in as `t`
// (content.home.tools.demos) and `tl` (content.languages).
const recording = getRecording(TOOL_DEMO.recording);
const recordingLang = varietyForRecording(recording.id).language;

function Transcribe() {
    let n = 0; // running word count, so words appear one after another across lines
    return (
        <ol className="m-0 list-none border-t border-rule p-0">
            {recording.segments.map((seg) => (
                <li key={seg.start} className="grid grid-cols-[44px_1fr] items-baseline gap-3 border-b border-rule py-2 md:grid-cols-[52px_1fr] md:gap-3.5 md:py-3">
                    <span className="text-[13px] tabular-nums text-fg-muted">{clock(seg.start)}</span>
                    <NativeText as="p" lang={recordingLang} className="m-0 text-[19px] leading-[1.8] text-fg md:text-[23px]">
                        {seg.text.split(" ").map((w, i) => (
                            <span key={i} className="inline-block animate-fade [animation-duration:360ms]" style={{ animationDelay: `${150 + 80 * n++}ms` }}>{w}&nbsp;</span>
                        ))}
                    </NativeText>
                </li>
            ))}
        </ol>
    );
}

function Translate() {
    return (
        <ul className="m-0 list-none border-t border-rule p-0">
            {recording.segments.map((seg, i) => (
                <li key={seg.start} className="grid items-baseline gap-0.5 border-b border-rule py-2 md:grid-cols-2 md:gap-7 md:py-3.5">
                    <NativeText as="p" lang={recordingLang} className="m-0 text-[17px] leading-[1.7] text-fg-muted md:text-[21px] md:leading-[1.8]">{seg.text}</NativeText>
                    <p className="m-0 animate-slide font-serif text-base italic leading-normal text-fg md:text-[19.5px]" style={{ animationDelay: `${250 + 300 * i}ms` }}>{seg.translation}</p>
                </li>
            ))}
        </ul>
    );
}

function Analyse({ t }) {
    return (
        <div className="flex flex-col gap-4 md:gap-[22px]">
            <div className="flex animate-fade flex-col gap-1.5">
                <span className="text-[13.5px] font-semibold text-fg-muted">{t.summary}</span>
                <p className="m-0 text-lg leading-normal text-fg md:text-[21px]">{recording.summary}</p>
            </div>
            <div className="flex flex-col gap-2.5">
                <span className="text-[13.5px] font-semibold text-fg-muted">{t.keywords}</span>
                <div className="flex flex-wrap gap-2">
                    {TOOL_DEMO.analyse.keywords.map((k, i) => (
                        <span key={k} className="animate-pop rounded-full bg-marker px-[15px] py-1.5 text-[15px] font-medium text-marker-ink" style={{ animationDelay: `${700 + 140 * i}ms` }}>{k}</span>
                    ))}
                </div>
            </div>
            <div className="flex animate-fade flex-col gap-1.5 [animation-delay:1100ms]">
                <span className="text-[13.5px] font-semibold text-fg-muted">{t.search}</span>
                <p className="m-0 text-[15px] leading-normal text-fg md:text-base">{t.searchBody}</p>
            </div>
        </div>
    );
}

function Speak({ t, tl }) {
    const s = TOOL_DEMO.speak;
    return (
        <div className="flex flex-col gap-4 md:gap-5">
            <div className="flex animate-fade flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-[14px] border border-rule bg-soft px-4 py-3 md:gap-4 md:px-[22px] md:py-[18px]">
                <NativeText lang={s.language} className="text-2xl text-fg md:text-[28px]">{s.text}</NativeText>
                <span className="text-[15px] leading-[1.45] text-fg-muted">{fill(t.inLanguage, { text: s.english, language: tl.names[s.language] })}</span>
            </div>
            <div className="flex flex-wrap gap-2">
                {["male", "female", "own"].map((v, i) => (
                    <span key={v} className={cx("rounded-full border px-[15px] py-[7px] text-sm text-fg", i === 0 ? "border-primary bg-chip-on" : "border-rule bg-panel")}>{t.voices[v]}</span>
                ))}
            </div>
            <EqBars height={54} />
        </div>
    );
}

function SpeechToSpeech({ t, tl }) {
    const s = TOOL_DEMO.speechToSpeech;
    const rows = [
        { label: t.speechSteps.say, body: <NativeText lang={s.from.language} className="text-[23px] text-fg">{s.from.text}</NativeText> },
        { label: t.speechSteps.english, body: <span className="font-serif text-[19.5px] italic text-fg">{s.english}</span> },
        { label: fill(t.speechSteps.target, { language: tl.names[s.to.language] }), body: <NativeText lang={s.to.language} className="text-[23px] text-fg">{s.to.text}</NativeText> },
        { label: t.speechSteps.spoken, body: <EqBars height={38} color="bg-tide" /> },
    ];
    return (
        <ol className="m-0 list-none border-t border-rule p-0">
            {rows.map((r, i) => (
                <li key={i} className="grid animate-fade grid-cols-[22px_96px_1fr] items-center gap-2.5 border-b border-rule py-2.5 md:grid-cols-[26px_120px_1fr] md:gap-3.5 md:py-3.5" style={{ animationDelay: `${420 * i}ms` }}>
                    <span className="inline-flex animate-pop [animation-duration:300ms]" style={{ animationDelay: `${260 + 420 * i}ms` }}>
                        <Check size={18} strokeWidth={2.4} className="text-tide" aria-hidden="true" />
                    </span>
                    <span className="text-[15px] font-semibold text-fg">{r.label}</span>
                    {r.body}
                </li>
            ))}
        </ol>
    );
}

function Dub({ t }) {
    return (
        <div className="relative aspect-[16/8.6] overflow-hidden rounded-[14px] border border-rule">
            <Image src={TOOL_DEMO.dubImage} alt={t.dubImageAlt} fill sizes="(min-width: 1024px) 700px, 100vw" className="animate-zoom object-cover object-left-top" />
        </div>
    );
}

function VoiceAgents({ t }) {
    const b = TOOL_DEMO.voiceAgent;
    return (
        <div className="flex flex-col gap-2.5 md:gap-3.5">
            <Bubble who={t.caller} line={b.caller} lang={b.language} side="left" />
            <div aria-hidden="true" className="flex animate-typing gap-[5px] self-end rounded-[14px] bg-soft px-3.5 py-2.5">
                {[0, 150, 300].map((d) => <span key={d} className="size-[7px] animate-blink rounded-full bg-primary" style={{ animationDelay: `${d}ms` }} />)}
            </div>
            <Bubble who={t.agent} line={b.agent} lang={b.language} side="right" />
            <span className="animate-fade text-sm text-fg-muted [animation-delay:2300ms] [animation-duration:500ms] max-md:hidden">{t.agentNote}</span>
        </div>
    );
}

function Bubble({ who, line, lang, side }) {
    const left = side === "left";
    return (
        <div className={cx(
            "flex max-w-[92%] animate-pop flex-col gap-1 rounded-[18px] border px-3.5 py-2.5 md:max-w-[78%] md:gap-1.5 md:px-[18px] md:py-3.5 [animation-duration:460ms]",
            left ? "origin-bottom-left self-start rounded-bl-md border-rule bg-soft" : "origin-bottom-right self-end rounded-br-md border-primary bg-chip-on [animation-delay:1700ms]",
        )}>
            <span className="flex items-center gap-2.5 text-[13px] font-semibold text-fg-muted">
                {who}
                <EqBars height={20} count={16} color={left ? "bg-fg-muted" : "bg-primary"} className="w-16" />
            </span>
            <NativeText lang={lang} className="text-lg leading-[1.6] text-fg md:text-[22px] md:leading-[1.7]">{line.text}</NativeText>
            <span className="font-serif text-[14.5px] italic leading-[1.4] text-fg-muted md:text-[16.5px]">{line.english}</span>
        </div>
    );
}

export const TOOL_DEMOS = {
    transcribe: Transcribe,
    translate: Translate,
    analyse: Analyse,
    speak: Speak,
    speechToSpeech: SpeechToSpeech,
    dub: Dub,
    voiceAgents: VoiceAgents,
};
