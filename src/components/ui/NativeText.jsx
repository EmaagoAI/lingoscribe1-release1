import { cx } from "@/lib/format";
import { isRtl } from "@/lib/languages";

// Text in the language it was spoken in, tagged with that language for screen
// readers and search. Arabic-script languages (Urdu, Pashto, Balochi…) are set
// right to left in Noto Naskh; English stays left to right in the page font.
export default function NativeText({ lang, as: Tag = "span", className, children, ...rest }) {
    const rtl = isRtl(lang);
    return (
        <Tag lang={lang} dir={rtl ? "rtl" : "ltr"} className={cx(rtl && "font-naskh", className)} {...rest}>
            {children}
        </Tag>
    );
}
