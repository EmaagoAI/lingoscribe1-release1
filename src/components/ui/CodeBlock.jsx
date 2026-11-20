import { cx } from "@/lib/format";

// A dark code panel with a short italic caption on top. Long lines scroll
// sideways inside it rather than widening the page.
export default function CodeBlock({ caption, className, children }) {
    return (
        <figure className={cx("m-0 min-w-0 overflow-hidden rounded-[14px] bg-code", className)}>
            <figcaption className="border-b border-white/10 px-[18px] py-3 font-serif text-sm italic text-[#b8bfd3]">{caption}</figcaption>
            <pre className="m-0 overflow-x-auto p-[18px] font-mono text-[12.5px] leading-[1.7] whitespace-pre text-[#e3e7f2] md:text-[13.5px]">{children}</pre>
        </figure>
    );
}
