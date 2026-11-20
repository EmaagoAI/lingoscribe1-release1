import { cx } from "@/lib/format";

// Pieces shared by the site's forms (talk to sales, join as a native speaker):
// a labelled field with its error, the input look, and a set of on/off chips.

// Shared props for a text input: look, and its error wiring for screen readers.
export function fieldProps(hasError, id, required = true) {
    return {
        "aria-required": required || undefined,
        "aria-invalid": hasError || undefined,
        "aria-describedby": hasError ? `${id}-err` : undefined,
        className: cx("min-h-12 rounded-[10px] border bg-bg px-3.5 font-sans text-base text-fg outline-none focus:border-primary",
            hasError ? "border-danger" : "border-rule"),
    };
}

// The red star after a required field's label (screen readers get aria-required).
const Star = () => <span aria-hidden="true" className="-ml-1.5 text-danger">*</span>;

export function Field({ id, label, hint, error, required, children }) {
    return (
        <div className="flex flex-col gap-1.5">
            <label htmlFor={id} className="flex items-baseline gap-2 text-[15px] font-semibold text-fg">
                {label}
                {required && <Star />}
                {hint && <span className="text-sm font-normal text-fg-muted">{hint}</span>}
            </label>
            {children}
            {error && <span id={`${id}-err`} className="text-sm text-danger">{error}</span>}
        </div>
    );
}

// A set of on/off chips (several can be on), announced as toggle buttons.
export function ChipGroup({ label, options, selected, onToggle, required }) {
    return (
        <fieldset className="m-0 border-0 p-0">
            <legend className="mb-2.5 flex items-baseline gap-2 p-0 text-[15px] font-semibold text-fg">{label}{required && <Star />}</legend>
            <div className="flex flex-wrap gap-2">
                {options.map((o) => {
                    const on = selected.includes(o.id);
                    return (
                        <button key={o.id} type="button" aria-pressed={on} onClick={() => onToggle(o.id)}
                            className={cx("min-h-10 cursor-pointer rounded-full border px-3.5 font-sans text-[14.5px] text-fg transition-colors duration-200",
                                on ? "border-primary bg-chip-on" : "border-rule bg-panel hover:border-primary/50")}>
                            {o.label}
                        </button>
                    );
                })}
            </div>
        </fieldset>
    );
}
