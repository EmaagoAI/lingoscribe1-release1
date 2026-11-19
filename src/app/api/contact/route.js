import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Sales enquiries from /talk-to-sales, emailed to the team through Gmail SMTP
// (EMAIL_USER / EMAIL_PASSWORD in the server's environment).
const TO = "khubaib.khalid@emaago.com";
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Everything the visitor typed goes into the email as text, never as HTML.
const escape = (value) => String(value ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const clip = (value, max) => String(value ?? "").trim().slice(0, max);
const list = (value) => (Array.isArray(value) ? value.map((v) => clip(v, 60)).filter(Boolean).slice(0, 20) : []);

export async function POST(request) {
    let body;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const enquiry = {
        name: clip(body.name, 120),
        email: clip(body.email, 200),
        org: clip(body.org, 200),
        interests: list(body.interests),
        languages: list(body.languages),
        message: clip(body.message, 5000),
    };
    if (!enquiry.name || !enquiry.org || !EMAIL.test(enquiry.email)) {
        return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
    }

    const rows = [
        ["Name", enquiry.name],
        ["Email", enquiry.email],
        ["Organisation", enquiry.org],
        ["Interested in", enquiry.interests.join(", ") || "—"],
        ["Languages", enquiry.languages.join(", ") || "—"],
    ];

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASSWORD },
        });
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: TO,
            replyTo: enquiry.email,
            subject: `Sales enquiry: ${enquiry.name}, ${enquiry.org}`.replace(/[\r\n]+/g, " "),
            text: [...rows.map(([k, v]) => `${k}: ${v}`), "", enquiry.message].join("\n"),
            html: `<h2>Sales enquiry</h2>${rows.map(([k, v]) => `<p><strong>${k}:</strong> ${escape(v)}</p>`).join("")}`
                + (enquiry.message ? `<p><strong>Message:</strong></p><p style="white-space:pre-wrap">${escape(enquiry.message)}</p>` : ""),
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Sales enquiry failed to send:", error.message);
        return NextResponse.json({ error: "Failed to send" }, { status: 502 });
    }
}
