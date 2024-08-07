"use client";

import { Globe } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

import { Button, ButtonProps } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon } from "@/components/ui/icon";
import { locales } from "@/i18n.config";

import { useRouter } from "./navigation";

export interface CopyButtonProps extends ButtonProps {}

export const LangButton = (props: CopyButtonProps) => {
  const t = useTranslations("Common");
  const router = useRouter();

  const handleClick = (locale: string) => {
    router.replace("/", { locale });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer" asChild>
        <Button size="icon" aria-label={t("lang.button")} {...props}>
          <Icon>
            <Globe />
          </Icon>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel className="text-md">
          {t("lang.menu.title")}
        </DropdownMenuLabel>

        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            className="w-full text-md cursor-pointer"
            asChild
          >
            <button onClick={() => handleClick(locale)}>
              {t(`lang.menu.${locale}`)}
            </button>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
