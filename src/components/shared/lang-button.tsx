"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { cn } from "@/components/ui/core";
import { locales } from "@/i18n.config";

const localeLabels: Record<string, string> = {
  es: "ES",
  en: "EN",
};

export const LangButton = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (newLocale: string) => {
    if (newLocale === locale) return;

    const segments = pathname.split("/").filter(Boolean);

    // Remove current locale if present
    if (locales.includes(segments[0])) {
      segments.shift();
    }

    // Build new path with new locale
    const newPath = `/${newLocale}${segments.length > 0 ? `/${segments.join("/")}` : ""}`;
    router.push(newPath);
  };

  return (
    <div className="flex gap-1 items-center">
      {locales.map((loc) => (
        <Button
          key={loc}
          size="sm"
          variant="ghost"
          aria-label={`Change language to ${localeLabels[loc]}`}
          onClick={() => handleClick(loc)}
          className={cn(
            "font-semibold",
            locale === loc && "text-primary underline underline-offset-4"
          )}
        >
          {localeLabels[loc]}
        </Button>
      ))}
    </div>
  );
};
