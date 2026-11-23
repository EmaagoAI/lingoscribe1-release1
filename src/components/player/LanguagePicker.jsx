"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { Check, ChevronDown, Play, Search } from "lucide-react";
import { VARIETIES, liveVarieties } from "@/data/languages";
import { cx, fill } from "@/lib/format";
import { nativeName, varietyLabel } from "@/lib/languages";
import { usePlayer } from "./PlayerProvider";

// "Language" button and its searchable list, grouped: languages with a
// sample to play, all the others, and those coming next.
//   t   content.common.player
//   tl  content.languages
export default function LanguagePicker({ t, tl }) {
    const { state, togglePicker, closePicker, selectVariety } = usePlayer();
    const [query, setQuery] = useState("");
    const boxRef = useRef(null);
    const searchRef = useRef(null);
    const selected = VARIETIES.find((v) => v.id === state.varietyId);
    const count = fill(t.languageCount, { count: liveVarieties().length });

    // Close on a click outside or on Escape, like any dropdown.
    useEffect(() => {
        if (!state.pickerOpen) { setQuery(""); return; }
        const onDown = (e) => { if (!boxRef.current?.contains(e.target)) closePicker(); };
        const onKey = (e) => { if (e.key === "Escape") closePicker(); };
        document.addEventListener("pointerdown", onDown);
        document.addEventListener("keydown", onKey);
        return () => { document.removeEventListener("pointerdown", onDown); document.removeEventListener("keydown", onKey); };
    }, [state.pickerOpen, closePicker]);

    // Jump straight into the search with a mouse; on touch screens don't, or the
    // keyboard would pop up and cover the list.
    useEffect(() => {
        if (state.pickerOpen && window.matchMedia("(pointer: fine)").matches) searchRef.current?.focus();
    }, [state.pickerOpen]);

    const groups = useMemo(() => {
        const q = query.trim().toLowerCase();
        const matches = (v) => !q || [varietyLabel(v, tl), nativeName(v)].join(" ").toLowerCase().includes(q);
        const shown = VARIETIES.filter(matches);
        return [
            { id: "sample", items: shown.filter((v) => v.recording) },
            { id: "all", items: shown.filter((v) => !v.recording && v.status === "live") },
            { id: "next", items: shown.filter((v) => v.status === "next") },
        ].filter((g) => g.items.length);
    }, [query, tl]);

    return (
        <div ref={boxRef} className="relative flex min-w-0 flex-wrap items-center gap-3.5">
            <button type="button" onClick={togglePicker} aria-expanded={state.pickerOpen} aria-haspopup="dialog"
                className="inline-flex min-h-11 min-w-0 items-center gap-2.5 rounded-xl border border-rule bg-panel pl-3.5 pr-3 text-fg sm:pl-4 sm:pr-3.5 transition hover:-translate-y-px hover:border-primary">
                <span className="text-[13px] text-fg-muted max-sm:sr-only">{t.language}</span>
                {nativeName(selected) && <span dir="rtl" className="font-naskh text-[17px] text-primary">{nativeName(selected)}</span>}
                <span className="truncate text-[15px] font-semibold">{varietyLabel(selected, tl)}</span>
                <ChevronDown size={14} className="text-fg-muted" aria-hidden="true" />
            </button>
            <span className="hidden text-[13.5px] text-fg-muted md:inline">{fill(t.moreComing, { count })}</span>

            {state.pickerOpen && (
                <div role="dialog" aria-label={t.chooseLanguage}
                    className="absolute left-0 top-[calc(100%+10px)] z-20 w-[400px] max-w-[calc(100vw-40px)] animate-fade rounded-2xl border border-rule bg-panel shadow-lift [animation-duration:220ms]">
                    <label className="m-2 flex h-[42px] items-center gap-2 rounded-[10px] border border-rule px-3 text-fg-muted">
                        <Search size={16} aria-hidden="true" />
                        <input ref={searchRef} type="search" value={query} onChange={(e) => setQuery(e.target.value)}
                            placeholder={fill(t.search, { count })} aria-label={t.searchLabel}
                            className="h-10 min-w-0 flex-1 border-0 bg-transparent text-[15px] text-fg outline-none" />
                    </label>
                    <div role="listbox" className="max-h-[340px] overflow-y-auto px-1.5 pb-2">
                        {groups.length === 0 && <p className="mx-3 my-3.5 text-[14.5px] text-fg-muted">{t.noMatch}</p>}
                        {groups.map((g) => (
                            <div key={g.id}>
                                <p className="mx-3 mb-1 mt-2.5 text-[12.5px] font-semibold text-fg-muted">{t.groups[g.id]}</p>
                                {g.items.map((v) => (
                                    <Option key={v.id} variety={v} on={v.id === state.varietyId} t={t} tl={tl} onPick={() => selectVariety(v)} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

function Option({ variety, on, t, tl, onPick }) {
    const soon = variety.status === "next";
    return (
        <button type="button" role="option" aria-selected={on} disabled={soon} onClick={onPick}
            className={cx(
                "flex min-h-10 w-full items-center justify-between gap-3 rounded-[9px] px-3 text-left text-[14.5px] transition-colors",
                on ? "bg-chip-on" : "hover:bg-soft",
                soon ? "cursor-default text-fg-muted" : "text-fg",
            )}>
            <span className="flex min-w-0 items-baseline gap-2.5">
                {/* always present (empty for English) so every name lines up in the same column */}
                <span dir="rtl" className="min-w-[58px] shrink-0 font-naskh text-base text-primary">{nativeName(variety)}</span>
                {varietyLabel(variety, tl)}
            </span>
            <span className="flex shrink-0 items-center gap-2">
                {variety.recording && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-chip-on px-2 py-0.5 text-xs font-semibold text-link">
                        <Play size={12} fill="currentColor" strokeWidth={0} aria-hidden="true" />{t.sampleBadge}
                    </span>
                )}
                {soon && <span className="text-[12.5px] text-fg-muted">{t.comingSoon}</span>}
                {on && <Check size={18} strokeWidth={2.4} className="text-tide" aria-hidden="true" />}
            </span>
        </button>
    );
}
