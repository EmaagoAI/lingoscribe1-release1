"use client";
import { useState } from "react";
import { Check } from "lucide-react";
import { CONTACT_EMAIL, ROUTES } from "@/config/routes";
import { EMAIL_PATTERN, SALES_ENDPOINT } from "@/data/sales";
import { SPEAKER_HELP, SPEAKER_LANGUAGES } from "@/data/speakers";
import { fill } from "@/lib/format";
import Button from "@/components/ui/Button";
import Rich from "@/components/ui/Rich";
import { ChipGroup, Field, fieldProps } from "@/components/forms/FormParts";

// The native-speaker application. Checks the required fields when sent, posts
// to the contact endpoint (kind "speaker"), then thanks the applicant.
//   t   content.speakers (form + sent)
//   tl  content.languages
const EMPTY = { name: "", email: "", phone: "", city: "", message: "", help: [], languages: [] };

export default function SpeakerForm({ t, tl }) {
    const [values, setValues] = useState(EMPTY);
    const [tried, setTried] = useState(false);
    const [status, setStatus] = useState("idle"); // idle | sending | failed | sent

    const helpOptions = SPEAKER_HELP.map((id) => ({ id, label: t.form.help.options[id] }));
    const languageOptions = [...SPEAKER_LANGUAGES.map((id) => ({ id, label: tl.names[id] })), { id: "other", label: t.form.languages.other }];
    const labelsOf = (options, ids) => options.filter((o) => ids.includes(o.id)).map((o) => o.label);

    const errors = {
        name: !values.name.trim(),
        email: !EMAIL_PATTERN.test(values.email.trim()),
        city: !values.city.trim(),
        languages: values.languages.length === 0,
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
                    kind: "speaker",
                    ...values,
                    help: labelsOf(helpOptions, values.help),
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
                        languages: listOr(labelsOf(languageOptions, values.languages)),
                        help: listOr(labelsOf(helpOptions, values.help)),
                    })}
                </p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-1">
                    <Button href={ROUTES.home} variant="secondary">{t.sent.home}</Button>
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

            <div className="flex flex-col gap-1.5">
                <ChipGroup required label={t.form.languages.label} options={languageOptions} selected={values.languages} onToggle={(id) => toggle("languages", id)} />
                {showError("languages") && <span className="text-sm text-danger">{t.form.languages.error}</span>}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                <Field id="s-name" required label={t.form.name.label} error={showError("name") && t.form.name.error}>
                    <input id="s-name" type="text" autoComplete="name" value={values.name} onChange={set("name")} {...fieldProps(showError("name"), "s-name")} />
                </Field>
                <Field id="s-email" required label={t.form.email.label} error={showError("email") && t.form.email.error}>
                    <input id="s-email" type="email" autoComplete="email" value={values.email} onChange={set("email")} {...fieldProps(showError("email"), "s-email")} />
                </Field>
                <Field id="s-city" required label={t.form.city.label} error={showError("city") && t.form.city.error}>
                    <input id="s-city" type="text" autoComplete="address-level2" value={values.city} onChange={set("city")} {...fieldProps(showError("city"), "s-city")} />
                </Field>
                <Field id="s-phone" label={t.form.phone.label} hint={t.form.phone.optional}>
                    <input id="s-phone" type="tel" autoComplete="tel" value={values.phone} onChange={set("phone")} {...fieldProps(false, "s-phone", false)} />
                </Field>
            </div>

            <ChipGroup label={t.form.help.label} options={helpOptions} selected={values.help} onToggle={(id) => toggle("help", id)} />

            <Field id="s-msg" label={t.form.message.label} hint={t.form.message.optional}>
                <textarea id="s-msg" rows={4} value={values.message} onChange={set("message")}
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
