import { defineCollection, z } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    description: z.string(),
    isPublish: z.boolean(),
    isDraft: z.boolean().default(false),
  }),
});

export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
  posts: postsCollection
};
