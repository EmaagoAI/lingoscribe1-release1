import Link from "next/link";
import { cx } from "@/lib/format";
import { newTab } from "@/lib/links";

// An underlined text link whose underline thickens on hover.
//   tone  link (blue) | light (white, on dark backgrounds)
export default function TextLink({ href, tone = "link", className, children, ...rest }) {
    return (
        <Link href={href} {...newTab(href)} {...rest}
            className={cx(
                "w-fit font-semibold underline decoration-1 underline-offset-4 transition-all duration-200 hover:decoration-2 hover:underline-offset-[6px]",
                tone === "light" ? "text-white" : "text-link hover:text-primary",
                className,
            )}>
            {children}
        </Link>
    );
}
