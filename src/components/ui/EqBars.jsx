import { cx } from "@/lib/format";

// A row of bars moving like a voice level meter. Decorative.
// The heights follow one fixed speech-like pattern, scaled to `height`.
const PATTERN = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0.73, 0.48, 0.69, 0.44, 0, 0.73, 0.46, 0.6, 0.35, 0.31, 0.1, 0, 0, 0, 0.33, 0.38, 0.08, 0.35, 0.33, 0, 0, 0.33, 0, 0.17, 0.29, 0.44, 0.46, 0.29, 0, 0, 0, 0, 0, 0, 0.44,
];
const DURATIONS = [0.8, 0.98, 1.16, 1.34];
const MIN = 6;

export default function EqBars({ height = 54, count = PATTERN.length, color = "bg-primary", className }) {
    return (
        <div aria-hidden="true" className={cx("flex items-center gap-[3px]", className)} style={{ height }}>
            {PATTERN.slice(0, count).map((p, i) => (
                <span key={i} className={cx("max-w-1 flex-1 animate-eq rounded-sm", color)}
                    style={{
                        height: Math.max(MIN, Math.round(MIN + p * (height - MIN))),
                        animationDuration: `${DURATIONS[i % DURATIONS.length]}s`,
                        animationDelay: `${((i * 0.93) % 1).toFixed(2)}s`,
                    }} />
            ))}
        </div>
    );
}
