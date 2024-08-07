import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

import { cn } from "@/components/ui/core";

export interface LinkBoxProps extends React.ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
}

const LinkBox = React.forwardRef<HTMLDivElement, LinkBoxProps>(
  ({ className, asChild, ...props }, ref) => {
    const Component = asChild ? Slot : "div";
    return (
      <Component ref={ref} className={cn("relative", className)} {...props} />
    );
  }
);

LinkBox.displayName = "LinkBox";

export interface LinkOverlayProps extends React.ComponentPropsWithoutRef<"a"> {
  asChild?: boolean;
}

const LinkOverlay = React.forwardRef<HTMLAnchorElement, LinkOverlayProps>(
  ({ className, asChild, ...props }, ref) => {
    const Component = asChild ? Slot : "a";

    return (
      <Component
        ref={ref}
        className={cn(
          "static before:content-[''] before:absolute before:block before:top-0 before:left-0 before:w-full before:h-full before:z-0",
          className
        )}
        {...props}
      />
    );
  }
);

LinkOverlay.displayName = "LinkOverlay";

export { LinkBox, LinkOverlay };
