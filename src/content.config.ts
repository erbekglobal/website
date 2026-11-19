import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    location: z.string().optional().nullable().transform((val) => val || undefined),
    year: z
      .union([z.number(), z.string()])
      .optional()
      .nullable()
      .transform((val) => {
        if (val === null || val === undefined || val === '') return undefined;
        const num = Number(val);
        return isNaN(num) ? undefined : num;
      }),
    draft: z.boolean().default(false),
    gallery: z.array(z.object({ image: z.string(), alt: z.string() })).default([]),
  }),
});

export const collections = { projects };
