import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

export const iconStyles = cva([], {
  variants: {
    size: {
      current: ["w-[1em] h-[1em]"],
      sm: ["size-4"],
      md: ["size-8"],
      lg: ["size-16"],
      xl: ["size-32"],
    },
  },
});

export type IconVariantsProps = VariantProps<typeof iconStyles>;

export interface IconProps
  extends IconVariantsProps,
    React.ComponentPropsWithoutRef<"svg"> {
  children: React.ReactNode;
  label?: string;
}

export const Icon = ({
  label,
  className,
  size = "current",
  children,
  ...others
}: IconProps) => {
  const child = React.Children.only(children);

  return (
    <>
      {React.cloneElement(child as React.ReactElement, {
        className: iconStyles({ className, size }),
        "aria-hidden": "true",
        focusable: "false",
        ...others,
      })}

      {label && <span className="sr-only">{label}</span>}
    </>
  );
};

Icon.displayName = "Icon";
