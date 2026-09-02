"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { ComponentProps } from "react";

import { Link } from "@/components/shared/navigation";

export interface TrackedLinkProps extends ComponentProps<typeof Link> {
  /** Where on the page the click came from, so the events can be told apart. */
  location: string;
}

export const TrackedLink = ({
  location,
  onClick,
  ...others
}: TrackedLinkProps) => {
  return (
    <Link
      onClick={(event) => {
        sendGAEvent("event", "cta_click", { location });
        onClick?.(event);
      }}
      {...others}
    />
  );
};
