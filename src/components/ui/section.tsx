import React from "react";

import { cn } from "@/components/ui/core";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Section({ className, ...props }: BadgeProps) {
  return (
    <section
      className={cn("flex min-h-0 flex-col gap-y-3", className)}
      {...props}
    />
  );
}
