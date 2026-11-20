import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Forms on the site, emailed to the team through Gmail SMTP (EMAIL_USER /
// EMAIL_PASSWORD in the server's environment):
//   sales enquiries from /talk-to-sales (the default kind)
//   native-speaker applications from /native-speakers (kind "speaker")
const TO = "khubaib.khalid@emaago.com";
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Everything the visitor typed goes into the email as text, never as HTML.
const escape = (value) => String(value ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const clip = (value, max) => String(value ?? "").trim().slice(0, max);
const list = (value) => (Array.isArray(value) ? value.map((v) => clip(v, 60)).filter(Boolean).slice(0, 20) : []);
const joined = (items) => items.join(", ") || "—";

// Each kind: what it reads from the body, whether that is complete, and how
// it is titled and laid out in the email.
const KINDS = {
    sales: {
        heading: "Sales enquiry",
        read: (b) => ({
            name: clip(b.name, 120), email: clip(b.email, 200), org: clip(b.org, 200),
            interests: list(b.interests), languages: list(b.languages), message: clip(b.message, 5000),
        }),
        valid: (f) => f.name && f.org && EMAIL.test(f.email),
        subject: (f) => `Sales enquiry: ${f.name}, ${f.org}`,
        rows: (f) => [
            ["Name", f.name],
            ["Email", f.email],
            ["Organisation", f.org],
            ["Interested in", joined(f.interests)],
            ["Languages", joined(f.languages)],
        ],
    },
    speaker: {
        heading: "Native speaker application",
        read: (b) => ({
            name: clip(b.name, 120), email: clip(b.email, 200), phone: clip(b.phone, 40), city: clip(b.city, 200),
            help: list(b.help), languages: list(b.languages), message: clip(b.message, 5000),
        }),
        valid: (f) => f.name && f.city && f.languages.length > 0 && EMAIL.test(f.email),
        subject: (f) => `Native speaker: ${f.name}, ${f.languages.join(", ")}`,
        rows: (f) => [
            ["Name", f.name],
            ["Email", f.email],
            ["Phone", f.phone || "—"],
            ["City or region", f.city],
            ["Languages", joined(f.languages)],
            ["Can help with", joined(f.help)],
        ],
    },
};

export async function POST(request) {
    let body;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const kind = KINDS[body.kind] ?? KINDS.sales;
    const form = kind.read(body);
    if (!kind.valid(form)) {
        return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
    }
    const rows = kind.rows(form);

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASSWORD },
        });
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: TO,
            replyTo: form.email,
            subject: kind.subject(form).replace(/[\r\n]+/g, " "),
            text: [...rows.map(([k, v]) => `${k}: ${v}`), "", form.message].join("\n"),
            html: `<h2>${kind.heading}</h2>${rows.map(([k, v]) => `<p><strong>${k}:</strong> ${escape(v)}</p>`).join("")}`
                + (form.message ? `<p><strong>Message:</strong></p><p style="white-space:pre-wrap">${escape(form.message)}</p>` : ""),
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(`${kind.heading} failed to send:`, error.message);
        return NextResponse.json({ error: "Failed to send" }, { status: 502 });
    }
}
