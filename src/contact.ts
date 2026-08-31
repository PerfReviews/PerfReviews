import { z } from "zod";

/** The services the contact form offers, in the casing the notification uses. */
export const services = [
  "Audit",
  "Business",
  "Enterprise",
  "Workshop",
  "Other",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.email().max(254),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  service: z.string().trim().max(60).optional().or(z.literal("")),
  message: z.string().trim().min(1).max(5000),
  // Honeypot: a real person never sees this field, so anything in it is a bot.
  // Accepted by the schema on purpose, and dealt with by the route.
  website: z.string().max(200).optional(),
});

export type ContactSubmission = z.infer<typeof contactSchema>;

/**
 * Resolves the service named in a query string, so that only a value the form
 * actually offers can preselect the field.
 */
export const toService = (value?: string) =>
  services.find((service) => service.toLowerCase() === value?.trim().toLowerCase());

export const escapeHTML = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
