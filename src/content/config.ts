// Content collection for /resources — pillar articles + supporting articles.
// Each cluster maps to one of the 5 topic clusters in the SEO/AEO doc.

import { defineCollection, z } from 'astro:content';

const CLUSTERS = [
  'revenue-operations',
  'business-systems',
  'fractional-leadership',
  'operator-mindset',
  'scaling-frameworks',
] as const;

const resources = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),                    // also used as meta description (under 160 chars)
    cluster: z.enum(CLUSTERS),
    pillar: z.boolean().default(false),         // pillar articles get top placement in cluster
    keywords: z.array(z.string()).default([]),
    publishedAt: z.string(),                    // ISO date
    updatedAt: z.string().optional(),
    readingTime: z.number().optional(),         // minutes
    // Top-of-article 1-2 sentence answer that AEO crawlers can extract:
    aeoAnswer: z.string(),
    // FAQ entries inline at end of article — also rendered as JSON-LD FAQPage schema:
    faq: z.array(z.object({
      q: z.string(),
      a: z.string(),
    })).default([]),
    // Related slugs for cross-linking (in same cluster or otherwise)
    related: z.array(z.string()).default([]),
  }),
});

export const collections = { resources };
