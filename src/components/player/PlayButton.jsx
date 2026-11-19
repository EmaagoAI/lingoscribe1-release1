import { Pause, Play } from "lucide-react";
import { cx } from "@/lib/format";

// Round play/pause button. `invite` adds a soft pulse until the clip is first played.
export default function PlayButton({ playing, onClick, label, size = 60, invite = false, className }) {
    return (
        <button type="button" onClick={onClick} aria-label={label}
            className={cx(
                "grid shrink-0 place-items-center rounded-full bg-primary text-white transition duration-200 ease-soft",
                "hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_14px_32px_var(--glow)] active:scale-[.98]",
                invite && "animate-ping-soft",
                className,
            )}
            style={{ width: size, height: size }}>
            {playing
                ? <Pause size={16} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                : <Play size={16} fill="currentColor" strokeWidth={0} className="ml-0.5" aria-hidden="true" />}
        </button>
    );
}
