import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

export const spinnerVariants = cva(
  [
    "inline-block",
    "border-solid",
    "rounded-full",
    "border-2",
    "animate-spin",
    "border-b-transparent",
    "border-l-transparent",
  ],
  {
    variants: {
      size: {
        current: ["w-[1em] h-[1em]"],
        sm: ["w-20", "h-20"],
        md: ["w-28", "h-28"],
        full: ["w-full", "h-full"],
      },
      intent: {
        current: ["border-current"],
        primary: ["border-primary"],
        secondary: ["border-secondary"],
      },
    },
    defaultVariants: {
      intent: "current",
      size: "current",
    },
  }
);

export interface SpinnerProps
  extends React.ComponentPropsWithoutRef<"div">,
    VariantProps<typeof spinnerVariants> {
  label?: string;
}

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size, intent, label, ...others }, ref) => {
    return (
      <div
        role="status"
        data-spark-component="spinner"
        ref={ref}
        className={spinnerVariants({
          className,
          size,
          intent,
        })}
        {...others}
      >
        {label && <span className="sr-only">{label}</span>}
      </div>
    );
  }
);

Spinner.displayName = "Spinner";
