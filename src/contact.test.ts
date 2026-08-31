import { describe, expect, it } from "vitest";

import { contactSchema, escapeHTML, toService } from "@/contact";

const valid = {
  name: "Joan",
  email: "joan@example.com",
  message: "Quiero mejorar el LCP de mi tienda",
};

describe("contactSchema", () => {
  it("accepts a submission with only the required fields", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });

  it("rejects a malformed email", () => {
    expect(contactSchema.safeParse({ ...valid, email: "joan@" }).success).toBe(false);
  });

  it("rejects a name that is only whitespace", () => {
    expect(contactSchema.safeParse({ ...valid, name: "   " }).success).toBe(false);
  });

  it("rejects a message beyond the length limit", () => {
    const message = "x".repeat(5001);

    expect(contactSchema.safeParse({ ...valid, message }).success).toBe(false);
  });

  it("drops fields the form does not offer", () => {
    const result = contactSchema.safeParse({ ...valid, admin: true });

    expect(result.success).toBe(true);
    expect(result.data).not.toHaveProperty("admin");
  });

  it("accepts the honeypot so the route can answer the bot itself", () => {
    const result = contactSchema.safeParse({ ...valid, website: "http://spam" });

    expect(result.success).toBe(true);
    expect(result.data?.website).toBe("http://spam");
  });
});

describe("toService", () => {
  it("resolves a service the form offers, whatever the casing", () => {
    expect(toService("workshop")).toBe("Workshop");
    expect(toService("BUSINESS")).toBe("Business");
  });

  it("ignores surrounding whitespace", () => {
    expect(toService("  audit  ")).toBe("Audit");
  });

  it("resolves nothing for a value the form does not offer", () => {
    expect(toService("<script>")).toBeUndefined();
    expect(toService("")).toBeUndefined();
    expect(toService(undefined)).toBeUndefined();
  });
});

describe("escapeHTML", () => {
  it("neutralises markup so a message cannot inject into the notification", () => {
    expect(escapeHTML('<img src="x" onerror="alert(1)">')).toBe(
      "&lt;img src=&quot;x&quot; onerror=&quot;alert(1)&quot;&gt;"
    );
  });

  it("escapes the ampersand before the entities it introduces", () => {
    expect(escapeHTML("Tom & <Jerry>")).toBe("Tom &amp; &lt;Jerry&gt;");
  });

  it("leaves ordinary prose untouched", () => {
    expect(escapeHTML("El LCP está en 4,2 s")).toBe("El LCP está en 4,2 s");
  });
});
