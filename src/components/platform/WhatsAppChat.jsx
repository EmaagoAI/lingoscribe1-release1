"use client";
import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { WHATSAPP } from "@/config/routes";
import { WHATSAPP_DEMO } from "@/data/platform";
import { getRecording } from "@/data/recordings";
import { clock, cx } from "@/lib/format";
import { varietyForRecording, varietyLabel } from "@/lib/languages";
import NativeText from "@/components/ui/NativeText";

// A phone showing a conversation with the WhatsApp bot, built from a real
// recording (data/recordings.js). When it scrolls into view the messages
// arrive one by one, pushing earlier ones up like a real chat.
//   t   content.platform.whatsapp.chat
//   tl  content.languages
export default function WhatsAppChat({ t, tl }) {
    const recording = getRecording(WHATSAPP_DEMO.recording);
    const variety = varietyForRecording(recording.id);
    const transcript = recording.segments.slice(0, WHATSAPP_DEMO.lines).map((s) => s.text).join("، ");
    const english = recording.segments.map((s) => s.translation).join(" ");
    const time = clock(Math.round(recording.duration));
    const phase = useChatPhase();

    // The conversation, in order. `out` is the visitor, `in` is the bot.
    const messages = [
        { side: "out", body: <VoiceNote time={time} /> },
        { side: "in", body: <Line>{t.askLanguage}</Line> },
        { side: "out", body: <Line>{tl.names[variety.language]}</Line> },
        { side: "in", body: <Line>{t.askTools}</Line> },
        { side: "out", body: <Line>{t.allTools}</Line> },
        { side: "in", label: varietyLabel(variety, tl), body: <NativeText as="p" lang={variety.language} className="m-0 text-[15px] leading-[1.8] text-fg">{transcript}</NativeText> },
        { side: "in", label: t.english, body: <Line>{english}</Line> },
        { side: "in", label: t.summary, body: <Line>{recording.summary}</Line> },
        { side: "in", label: t.voiceReply, body: <VoiceNote time={time} /> },
    ];

    return (
        <div ref={phase.ref} role="img" aria-label={t.label}
            className="mx-auto flex h-[600px] w-full max-w-[330px] flex-col overflow-hidden rounded-[40px] border-[10px] border-[#1b1f33] bg-chat shadow-card">
            <div className="flex shrink-0 items-center gap-2.5 border-b border-rule bg-panel px-4 py-3.5">
                <span className="size-8 rounded-full bg-primary" />
                <span className="flex flex-col">
                    <span className="text-[14.5px] font-semibold text-fg">{t.contact}</span>
                    <span className="text-xs tabular-nums text-fg-muted">{WHATSAPP.display}</span>
                </span>
            </div>
            {/* newest at the bottom; older messages slide up and out of view */}
            <div className="flex min-h-0 flex-1 flex-col justify-end overflow-hidden px-3 pb-4 [mask-image:linear-gradient(to_bottom,transparent,#000_56px)]">
                {messages.map((m, i) => (
                    <Arrival key={i} phase={phase.state} delay={i * WHATSAPP_DEMO.stepMs}>
                        <Bubble side={m.side} label={m.label}>{m.body}</Bubble>
                    </Arrival>
                ))}
            </div>
        </div>
    );
}

// "shown" until we know where the phone is (so it reads fine without JS),
// "waiting" while it's below the fold, "playing" once it's in view.
function useChatPhase() {
    const ref = useRef(null);
    const [state, setState] = useState("shown");
    useEffect(() => {
        const el = ref.current;
        if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const io = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) { setState("playing"); io.disconnect(); }
            else setState("waiting");
        }, { threshold: 0.35 });
        io.observe(el);
        return () => io.disconnect();
    }, []);
    return { ref, state };
}

// Wraps a message so it can open up from nothing when its turn comes.
function Arrival({ phase, delay, children }) {
    return (
        <div className={cx("grid", phase === "waiting" ? "grid-rows-[0fr] opacity-0" : "grid-rows-[1fr]", phase === "playing" && "animate-reveal")}
            style={phase === "playing" ? { animationDelay: `${delay}ms` } : undefined}>
            <div className="flex min-h-0 flex-col overflow-hidden pt-2.5">{children}</div>
        </div>
    );
}

function Bubble({ side, label, children }) {
    const out = side === "out";
    return (
        <div className={cx(
            "flex max-w-[86%] flex-col gap-1.5 rounded-[14px] border border-rule px-3 py-2.5",
            out ? "self-end rounded-br-[4px] bg-bubble-out" : "self-start rounded-bl-[4px] bg-bubble-in",
        )}>
            {label && <span className="text-[12.5px] leading-[1.45] text-fg-muted">{label}</span>}
            {children}
        </div>
    );
}

function Line({ children }) {
    return <p className="m-0 text-sm leading-normal text-fg">{children}</p>;
}

function VoiceNote({ time }) {
    return (
        <span className="flex flex-col gap-1">
            <span className="flex items-center gap-2.5 text-fg-muted">
                <span className="grid size-7 place-items-center rounded-full bg-primary text-white">
                    <Play size={14} fill="currentColor" strokeWidth={0} className="ml-px" aria-hidden="true" />
                </span>
                <span className="flex items-center gap-0.5">
                    {WHATSAPP_DEMO.bars.map((h, i) => <span key={i} className="w-[3px] rounded-xs bg-current" style={{ height: h }} />)}
                </span>
            </span>
            <span className="text-[11.5px] tabular-nums text-fg-muted">{time}</span>
        </span>
    );
}
