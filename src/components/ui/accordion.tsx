import * as React from "react";

import { cn } from "@/components/ui/core";

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single";
  collapsible?: boolean;
}

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, children, type, collapsible, ...props }, ref) => {
    // type and collapsible are consumed here and not passed to DOM
    return (
      <div ref={ref} className={cn("space-y-2", className)} {...props}>
        {children}
      </div>
    );
  }
);
Accordion.displayName = "Accordion";

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDetailsElement> {
  value: string;
}

export const AccordionItem = React.forwardRef<HTMLDetailsElement, AccordionItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <details ref={ref} className={cn("group border-b", className)} {...props}>
        {children}
      </details>
    );
  }
);
AccordionItem.displayName = "AccordionItem";

export interface AccordionTriggerProps extends React.HTMLAttributes<HTMLElement> {}

export const AccordionTrigger = React.forwardRef<HTMLElement, AccordionTriggerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <summary
        className={cn(
          "flex cursor-pointer items-center justify-between py-4 font-medium transition-all hover:underline [&::-webkit-details-marker]:hidden",
          className
        )}
        {...props}
      >
        {children}
        <svg
          className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
    );
  }
);
AccordionTrigger.displayName = "AccordionTrigger";

export interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  forceMount?: boolean;
}

export const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, forceMount, ...props }, ref) => {
    // forceMount is consumed here and not passed to DOM
    return (
      <div ref={ref} className={cn("pb-4 pt-0", className)} {...props}>
        {children}
      </div>
    );
  }
);
AccordionContent.displayName = "AccordionContent";
