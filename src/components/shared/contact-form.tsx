"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

type FormStatus = "idle" | "loading" | "success" | "error";

export const ContactForm = () => {
  const t = useTranslations("ContactPage");
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 p-6 text-center space-y-2">
        <p className="font-semibold text-green-800 dark:text-green-200">{t("form.success.title")}</p>
        <p className="text-sm text-green-700 dark:text-green-300">{t("form.success.description")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-sm font-medium">
            {t("form.name.label")} <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder={t("form.name.placeholder")}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm font-medium">
            {t("form.email.label")} <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder={t("form.email.placeholder")}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="company" className="text-sm font-medium">
            {t("form.company.label")}
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder={t("form.company.placeholder")}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="service" className="text-sm font-medium">
            {t("form.service.label")}
          </label>
          <select
            id="service"
            name="service"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="">{t("form.service.placeholder")}</option>
            <option value="Audit">{t("form.service.audit")}</option>
            <option value="Business">{t("form.service.business")}</option>
            <option value="Enterprise">{t("form.service.enterprise")}</option>
            <option value="Workshop">{t("form.service.workshop")}</option>
            <option value="Other">{t("form.service.other")}</option>
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-sm font-medium">
          {t("form.message.label")} <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={t("form.message.placeholder")}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600 dark:text-red-400">{t("form.error")}</p>
      )}

      <Button type="submit" size="lg" disabled={status === "loading"}>
        {status === "loading" ? t("form.sending") : t("form.submit")}
      </Button>
    </form>
  );
};
