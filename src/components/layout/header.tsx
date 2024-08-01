import { Github } from "lucide-react";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

import { Logo } from "@/components/shared/logo";
import { ModeToggleButton } from "@/components/shared/mode-toggle-button";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/components/ui/core";
import { Icon } from "@/components/ui/icon";

import { LogoExtended } from "../shared/logo-extended";

export interface HeaderProps extends ComponentPropsWithoutRef<"header"> {}

export const Header = ({ className, ...others }: HeaderProps) => {
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

            <Icon className="text-4xl block md:hidden" size="current">
              <Logo />
            </Icon>
          </Link>
        </div>

        <div className="flex gap-2">
          <Button size="icon" variant="outline" aria-label="GitHub" asChild>
            <a href="https://github.com/PerfReviews" target="_blank">
              <Icon>
                <Github />
              </Icon>
            </a>
          </Button>

          <ModeToggleButton />
        </div>
      </Container>
    </header>
  );
};
