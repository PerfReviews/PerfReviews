import { Review } from "content-collections";
import Image from "next/image";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

import { cn } from "@/components/ui/core";
import { LinkBox, LinkOverlay } from "@/components/ui/link-overlay";

export interface ReviewCardProps extends ComponentPropsWithoutRef<"article"> {
  review: Review;
}

export const ReviewCard = ({
  className,
  review,
  ...others
}: ReviewCardProps) => {
  return (
    <LinkBox asChild>
      <article className={cn("space-y-4", className)} {...others}>
        <div className="relative aspect-video shadow-md rounded-lg overflow-hidden">
          <Image
            className="object-cover"
            src={review.featuredImage}
            alt={review.title}
            fill
          />
        </div>

        <div className="space-y-1 overflow-hidden max-w-full">
          <h3 className="text-primary text-md font-semibold line-clamp-2">
            <LinkOverlay asChild>
              <Link
                className="hover:underline-offset-4 hover:underline"
                href={`/reviews/${review.slug}`}
              >
                {review.title}
              </Link>
            </LinkOverlay>
          </h3>

          <p className="text-sm line-clamp-2">{review.summary}</p>

          <p className="text-muted-foreground text-xs">
            {new Date(review.date).toLocaleDateString()}
          </p>
        </div>
      </article>
    </LinkBox>
  );
};
