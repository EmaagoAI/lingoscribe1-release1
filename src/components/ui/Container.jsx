import { cx } from "@/lib/format";

// The page's content width: 1280px with side padding.
export default function Container({ className, children }) {
    return <div className={cx("mx-auto w-full max-w-7xl px-5 md:px-12", className)}>{children}</div>;
}
