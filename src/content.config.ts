import { glob } from "astro/loaders"
import { defineCollection, z } from "astro:content"

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  ogImage: z.string().optional(),
  tags: z.array(z.string()).optional(),
})

const itPostsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/posts/it" }),
  schema: postSchema,
})

const itEventsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/events/it" }),
  schema: postSchema
})

export const collections = {
  itPosts: itPostsCollection,
  itEvents: itEventsCollection
}
