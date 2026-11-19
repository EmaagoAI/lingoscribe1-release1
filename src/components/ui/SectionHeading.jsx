import { cx } from "@/lib/format";

// A section title, with an optional line (and anything else) beside it on
// wide screens and under it on narrow ones.
//   size  lg (52px) | md (46px) | sm (40px) at full width
const SIZES = {
    lg: "text-4xl md:text-[52px]",
    md: "text-[34px] md:text-[46px]",
    sm: "text-[30px] md:text-[40px]",
};

export function SectionTitle({ id, size = "lg", className, children }) {
    return (
        <h2 id={id}
            className={cx("scroll-reveal m-0 text-balance font-semibold leading-[1.05] tracking-[-0.035em] text-fg [font-variation-settings:'wdth'_94]", SIZES[size], className)}>
            {children}
        </h2>
    );
}

export default function SectionHeading({ id, title, size, children }) {
    return (
        <div className="grid items-end gap-4 md:grid-cols-[1fr_auto] md:gap-14">
            <SectionTitle id={id} size={size}>{title}</SectionTitle>
            {children && <div className="flex flex-col gap-3">{children}</div>}
        </div>
    );
}

// The grey line that sits beside a section title.
export function SectionLead({ className, children }) {
    return <p className={cx("m-0 max-w-[24em] text-pretty text-[17px] leading-relaxed text-fg-muted md:text-[18.5px]", className)}>{children}</p>;
}
