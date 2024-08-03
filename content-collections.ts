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
  onSuccess: (docs) => {
    console.log(`generated collection with ${docs.length}`);
  },
});

export default defineConfig({
  collections: [posts],
});
