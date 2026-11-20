import Link from "next/link";
import { cx } from "@/lib/format";
import { newTab } from "@/lib/links";

// The site's buttons. A link when given href, otherwise a <button>.
//   variant  primary | secondary | light (white, on dark) | outline-light (on dark)
//   size     md | lg | xl
const BASE =
    "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-xl border font-semibold no-underline " +
    "transition duration-200 ease-soft hover:-translate-y-0.5 active:translate-y-0 active:scale-[.98]";

const VARIANTS = {
    primary: "border-transparent bg-primary text-on-primary hover:bg-primary-hover hover:shadow-[0_14px_32px_var(--glow)]",
    secondary: "border-rule bg-panel text-fg hover:border-primary",
    light: "border-transparent bg-white text-[#0b1233]",
    "outline-light": "border-inv-border text-white",
};

const SIZES = {
    md: "min-h-11 px-5 text-[15px]",
    lg: "min-h-13 px-[26px] text-base",
    xl: "min-h-[54px] px-7 text-base",
};

export default function Button({ href, variant = "primary", size = "md", className, children, ...rest }) {
    const classes = cx(BASE, VARIANTS[variant], SIZES[size], className);
    if (href) return <Link href={href} className={classes} {...newTab(href)} {...rest}>{children}</Link>;
    return <button type="button" className={classes} {...rest}>{children}</button>;
}
