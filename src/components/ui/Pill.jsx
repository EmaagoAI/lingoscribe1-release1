import { cx } from "@/lib/format";

// A small rounded label, e.g. a language or a voice. `on` marks the chosen one.
export default function Pill({ on = false, className, children }) {
    return (
        <span className={cx(
            "inline-flex items-center rounded-full border px-[13px] py-1.5 text-sm text-fg",
            on ? "border-primary bg-chip-on" : "border-rule bg-panel",
            className,
        )}>
            {children}
        </span>
    );
}
