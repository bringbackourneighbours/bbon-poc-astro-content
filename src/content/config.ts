import { z, defineCollection,reference } from "astro:content";

const flyersCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    blocks: z.array(reference('blocks')
    )
  })
});

const blocksCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string()
  })
});

export const collections = {
  flyers: flyersCollection,
  blocks: blocksCollection
};