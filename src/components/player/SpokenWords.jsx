import { cx } from "@/lib/format";

// Words of a transcript or translation, lit up as they're spoken: the word
// being said gets a marker, words not yet said are grey.
const STYLES = {
    plain: "text-fg",
    said: "text-fg",
    now: "bg-marker text-marker-ink",
    ahead: "text-fg-muted",
};

export default function SpokenWords({ words }) {
    return words.map((w, i) => (
        <span key={i} className={cx("-mx-px rounded-[5px] px-[3px] py-px transition-colors duration-200", STYLES[w.state])}>{w.word} </span>
    ));
}
