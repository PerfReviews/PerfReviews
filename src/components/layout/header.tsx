import Link from "next/link";
import { useTranslations } from "next-intl";
import { ComponentPropsWithoutRef } from "react";

import { Logo } from "@/components/shared/logo";
import { LogoExtended } from "@/components/shared/logo-extended";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/components/ui/core";
import { Icon } from "@/components/ui/icon";

export interface HeaderProps extends ComponentPropsWithoutRef<"header"> {}

export const Header = ({ className, ...others }: HeaderProps) => {
  const t = useTranslations("Common");

  return (
    <header
      className={cn(
        "sticky top-0 z-20 backdrop-blur-md print:hidden",
        className
      )}
      {...others}
    >
      <Container className={cn("flex h-16 items-center justify-between")}>
        <div className="flex gap-2">
          <Link aria-label="Home" href="/">
            <Icon className="text-3xl w-auto hidden md:block">
              <LogoExtended />
            </Icon>

            <Icon className="text-5xl block md:hidden" size="current">
              <Logo />
            </Icon>
          </Link>
        </div>

        <div className="flex gap-0.5">
          <Button variant="link" asChild>
            <Link href="/blog">{t("header.blog-button")}</Link>
          </Button>

          <Button variant="link" asChild>
            <Link href="/reviews">{t("header.reviews-button")}</Link>
          </Button>

          <Button>{t("header.contact-button")}</Button>
        </div>
      </Container>
    </header>
  );
};
