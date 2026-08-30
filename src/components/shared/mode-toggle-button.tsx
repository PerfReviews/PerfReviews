"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import { Button, ButtonProps } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { useTheme } from "@/components/ui/theme";

export type ModeToggleButtonProps = ButtonProps;

export const ModeToggleButton = ({
  variant = "outline",
  size = "icon",
  ...others
}: ModeToggleButtonProps) => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const isLightMode = theme === "light";

  const handleClick = () => {
    setTheme(isLightMode ? "dark" : "light");
  };

  // The hydration guard next-themes documents: the theme is only known on the
  // client, so the first client render has to match the server output.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <Button
        size={size}
        variant={variant}
        aria-label="Cargando"
        isLoading
        {...others}
      />
    );
  }

  return (
    <Button
      variant={variant}
      size={size}
      aria-label={isLightMode ? "Cambiar a modo oscuro" : "Cambiar a modo luz"}
      onClick={handleClick}
      {...others}
    >
      <Icon>{isLightMode ? <Moon /> : <Sun />}</Icon>
    </Button>
  );
};
