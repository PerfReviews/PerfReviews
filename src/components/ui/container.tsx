import { Slot } from "@radix-ui/react-slot";
import { ComponentPropsWithoutRef } from "react";

import { cn } from "@/components/ui/core";

export interface ContainerProps extends ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
}

export const Container = ({
  className,
  asChild,
  ...others
}: ContainerProps) => {
  const Component = asChild ? Slot : "div";

  return (
    <Component className={cn("m-auto max-w-6xl px-3", className)} {...others} />
  );
};
