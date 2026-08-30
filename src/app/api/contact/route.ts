import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.email().max(254),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  service: z.string().trim().max(60).optional().or(z.literal("")),
  message: z.string().trim().min(1).max(5000),
  // honeypot: a real person never sees this field, so anything in it is a bot.
  // Accepted by the schema on purpose, and dealt with below.
  website: z.string().max(200).optional(),
});

const escapeHTML = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function POST(request: NextRequest) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const result = contactSchema.safeParse(payload);

  if (!result.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { name, email, company, service, message, website } = result.data;

  // Answer the bot as if it had worked, so it has nothing to learn from the response.
  if (website) {
    return NextResponse.json({ success: true });
  }

  try {
    // The SDK reports API failures in the result rather than throwing, so a bare
    // try/catch would report success for a message that never left.
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev",
      to: "mail@perf.reviews",
      replyTo: email,
      subject: `[PerfReviews]${service ? ` [${service}]` : ""} ${name}`,
      html: `
        <h2>New contact from perf.reviews</h2>
        <p><strong>Name:</strong> ${escapeHTML(name)}</p>
        <p><strong>Email:</strong> ${escapeHTML(email)}</p>
        ${company ? `<p><strong>Company:</strong> ${escapeHTML(company)}</p>` : ""}
        ${service ? `<p><strong>Service:</strong> ${escapeHTML(service)}</p>` : ""}
        <hr />
        <p>${escapeHTML(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
