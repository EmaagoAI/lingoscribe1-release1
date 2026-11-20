import { cx } from "@/lib/format";

// A numbered list of steps between hairlines: number, title, and a short note.
//   steps  [{ title, note }]
export default function StepList({ steps, className }) {
    return (
        <ol className={cx("m-0 list-none border-t border-rule p-0", className)}>
            {steps.map((step, i) => (
                <li key={step.title} className="flex items-baseline gap-3.5 border-b border-rule py-3.5">
                    <span className="text-sm font-semibold tabular-nums text-primary">{i + 1}</span>
                    <span className="flex flex-col gap-0.5">
                        <span className="text-[17px] font-semibold text-fg">{step.title}</span>
                        <span className="text-sm leading-[1.45] text-fg-muted">{step.note}</span>
                    </span>
                </li>
            ))}
        </ol>
    );
}
