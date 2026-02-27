import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";

const posts = defineCollection({
  name: "posts",
  directory: "src/posts/archived",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.string(),
    featuredImage: z.string(),
    archived: z.boolean().optional().default(true),
  }),
  transform: (post) => {
    const [locale, slug] = post._meta.path.split("/");
    return { ...post, locale, slug, archived: true };
  },
});

const reviews = defineCollection({
  name: "reviews",
  directory: "src/reviews/archived",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.string(),
    featuredImage: z.string(),
    archived: z.boolean().optional().default(true),
  }),
  transform: (post) => {
    const [locale, slug] = post._meta.path.split("/");
    return { ...post, locale, slug, archived: true };
  },
});

export default defineConfig({
  collections: [posts, reviews],
});
