import { defineCollection, defineConfig } from "@content-collections/core";

const posts = defineCollection({
  name: "posts",
  directory: "src/posts",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
    date: z.string(),
    featuredImage: z.string(),
  }),
  transform: (post) => {
    const [locale, slug] = post._meta.path.split("/");
    return { ...post, locale, slug };
  },
});

const reviews = defineCollection({
  name: "reviews",
  directory: "src/reviews",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
    date: z.string(),
    featuredImage: z.string(),
  }),
  transform: (post) => {
    const [locale, slug] = post._meta.path.split("/");
    return { ...post, locale, slug };
  },
});

export default defineConfig({
  collections: [posts, reviews],
});
