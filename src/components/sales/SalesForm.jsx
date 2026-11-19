"use client";
import { useState } from "react";
import { Check } from "lucide-react";
import { CONTACT_EMAIL, ROUTES } from "@/config/routes";
import { EMAIL_PATTERN, SALES_ENDPOINT, SALES_INTERESTS, SALES_LANGUAGES } from "@/data/sales";
import { cx, fill } from "@/lib/format";
import Button from "@/components/ui/Button";
import Rich from "@/components/ui/Rich";

// The sales enquiry form. Checks the required fields when sent, posts to the
// contact endpoint, then thanks the visitor with a summary of what they asked.
//   t   content.sales (form + sent)
//   tl  content.languages
const EMPTY = { name: "", email: "", org: "", message: "", interests: [], languages: [] };

export default function SalesForm({ t, tl }) {
    const [values, setValues] = useState(EMPTY);
    const [tried, setTried] = useState(false);
    const [status, setStatus] = useState("idle"); // idle | sending | failed | sent

    const interestOptions = SALES_INTERESTS.map((id) => ({ id, label: t.form.interests.options[id] }));
    const languageOptions = [...SALES_LANGUAGES.map((id) => ({ id, label: tl.names[id] })), { id: "other", label: t.form.languages.other }];
    const labelsOf = (options, ids) => options.filter((o) => ids.includes(o.id)).map((o) => o.label);

    const errors = {
        name: !values.name.trim(),
        email: !EMAIL_PATTERN.test(values.email.trim()),
        org: !values.org.trim(),
    };
    const invalid = Object.values(errors).some(Boolean);
    const set = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }));
    const toggle = (key, id) => setValues((v) => ({ ...v, [key]: v[key].includes(id) ? v[key].filter((x) => x !== id) : [...v[key], id] }));

    async function submit(e) {
        e.preventDefault();
        if (invalid) { setTried(true); return; }
        setStatus("sending");
        try {
            const res = await fetch(SALES_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...values,
                    interests: labelsOf(interestOptions, values.interests),
                    languages: labelsOf(languageOptions, values.languages),
                }),
            });
            setStatus(res.ok ? "sent" : "failed");
        } catch {
            setStatus("failed");
        }
    }

    function reset() {
        setValues(EMPTY); setTried(false); setStatus("idle");
    }

    if (status === "sent") {
        const listOr = (labels) => labels.join(", ") || t.sent.none;
        return (
            <div role="status" className="flex animate-fade flex-col gap-3.5 rounded-[14px] border border-rule bg-panel px-5 py-6 md:px-9 md:py-8">
                <Check size={18} strokeWidth={2.4} className="text-tide" aria-hidden="true" />
                <h2 className="m-0 text-2xl font-semibold tracking-[-0.02em] text-fg md:text-[30px]">
                    {fill(t.sent.title, { name: values.name.trim().split(/\s+/)[0] || t.sent.fallbackName })}
                </h2>
                <p className="m-0 text-pretty text-base leading-relaxed text-fg-muted">
                    {fill(t.sent.summary, {
                        interests: listOr(labelsOf(interestOptions, values.interests)),
                        languages: listOr(labelsOf(languageOptions, values.languages)),
                    })}
                </p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-1">
                    <Button href={ROUTES.signup} variant="secondary">{t.sent.start}</Button>
                    <button type="button" onClick={reset}
                        className="cursor-pointer border-0 bg-transparent p-0 text-[15px] font-semibold text-link underline underline-offset-4 hover:text-primary">
                        {t.sent.again}
                    </button>
                </div>
            </div>
        );
    }

    const showError = (key) => tried && errors[key];
    return (
        <form onSubmit={submit} noValidate
            className="flex animate-rise flex-col gap-5 rounded-[14px] border border-rule bg-panel px-5 py-6 [animation-delay:120ms] md:px-9 md:py-8">
            {tried && invalid && (
                <div role="alert" className="rounded-[10px] border border-danger px-3.5 py-3 text-[15px] text-danger">{t.form.invalid}</div>
            )}

            <ChipGroup label={t.form.interests.label} options={interestOptions} selected={values.interests} onToggle={(id) => toggle("interests", id)} />

            <div className="grid gap-4 sm:grid-cols-2">
                <Field id="f-name" label={t.form.name.label} error={showError("name") && t.form.name.error}>
                    <input id="f-name" type="text" autoComplete="name" value={values.name} onChange={set("name")} {...fieldProps(showError("name"), "f-name")} />
                </Field>
                <Field id="f-email" label={t.form.email.label} error={showError("email") && t.form.email.error}>
                    <input id="f-email" type="email" autoComplete="email" value={values.email} onChange={set("email")} {...fieldProps(showError("email"), "f-email")} />
                </Field>
                <Field id="f-org" label={t.form.org.label} error={showError("org") && t.form.org.error}>
                    <input id="f-org" type="text" autoComplete="organization" value={values.org} onChange={set("org")} {...fieldProps(showError("org"), "f-org")} />
                </Field>
            </div>

            <ChipGroup label={t.form.languages.label} options={languageOptions} selected={values.languages} onToggle={(id) => toggle("languages", id)} />

            <Field id="f-msg" label={t.form.message.label} hint={t.form.message.optional}>
                <textarea id="f-msg" rows={4} value={values.message} onChange={set("message")}
                    className="resize-y rounded-[10px] border border-rule bg-bg px-3.5 py-3 font-sans text-base text-fg outline-none focus:border-primary" />
            </Field>

            {status === "failed" && (
                <p role="alert" className="m-0 text-[15px] text-danger">
                    <Rich text={t.form.failed} values={{ email: <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-inherit">{CONTACT_EMAIL}</a> }} />
                </p>
            )}

            <button type="submit" disabled={status === "sending"}
                className="min-h-[52px] cursor-pointer self-start rounded-[10px] border-0 bg-primary px-7 font-sans text-base font-semibold text-white transition duration-200 ease-soft hover:-translate-y-0.5 hover:bg-primary-hover disabled:cursor-wait disabled:opacity-70">
                {status === "sending" ? t.form.sending : t.form.submit}
            </button>
        </form>
    );
}

// Shared props for a text input: look, and its error wiring for screen readers.
function fieldProps(hasError, id) {
    return {
        "aria-required": true,
        "aria-invalid": hasError || undefined,
        "aria-describedby": hasError ? `${id}-err` : undefined,
        className: cx("min-h-12 rounded-[10px] border bg-bg px-3.5 font-sans text-base text-fg outline-none focus:border-primary",
            hasError ? "border-danger" : "border-rule"),
    };
}

function Field({ id, label, hint, error, children }) {
    return (
        <div className="flex flex-col gap-1.5">
            <label htmlFor={id} className="flex items-baseline gap-2 text-[15px] font-semibold text-fg">
                {label}
                {hint && <span className="text-sm font-normal text-fg-muted">{hint}</span>}
            </label>
            {children}
            {error && <span id={`${id}-err`} className="text-sm text-danger">{error}</span>}
        </div>
    );
}

// A set of on/off chips (several can be on), announced as toggle buttons.
function ChipGroup({ label, options, selected, onToggle }) {
    return (
        <fieldset className="m-0 border-0 p-0">
            <legend className="mb-2.5 p-0 text-[15px] font-semibold text-fg">{label}</legend>
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
