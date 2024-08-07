import { Twitter } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ComponentPropsWithoutRef } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/components/ui/core";
import { Icon } from "@/components/ui/icon";

export interface FooterProps extends ComponentPropsWithoutRef<"footer"> {}

export const Footer = ({ className, ...others }: FooterProps) => {
  const t = useTranslations("Common");

  const nav = [
    {
      title: t("footer.links.title"),
      links: [
        {
          text: t("footer.links.blog"),
          href: "/blog",
        },
        {
          text: t("footer.links.tools"),
          href: "/tools",
        },
        {
          text: t("footer.links.reviews"),
          href: "/reviews",
        },
      ],
    },
    {
      title: t("footer.about.title"),
      links: [
        {
          text: t("footer.about.about-us"),
          href: "/nosotros",
        },
        {
          text: t("footer.about.contact-us"),
          href: "mailto:mail@perf.reviews",
        },
      ],
    },
  ];

  return (
    <footer className={cn("relative bg-muted py-12", className)} {...others}>
      <Container className="space-y-6">
        <div className="grid grid-cols-1 text-center md:text-left md:grid-cols-4 gap-6">
          {nav.map(({ title, links }, index) => (
            <div key={index} className="space-y-4">
              <p className="font-semibold text-slate-900 dark:text-slate-100">
                {title}
              </p>

              <ul className="space-y-2">
                {links.map(({ text, href }, index) => (
                  <li key={index}>
                    {href.startsWith("https") ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        {text}
                      </a>
                    ) : (
                      <Link href={href}>{text}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm">{t("footer.copyright")}</div>

          <div className="space-x-2">
            <Button
              aria-label={t("footer.twitter-button")}
              variant="outline"
              size="icon"
              asChild
            >
              <a
                href="https://twitter.com/x"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                <Icon>
                  <Twitter />
                </Icon>
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </footer>
  );
};
