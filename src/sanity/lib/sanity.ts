// lib/sanity.ts
import { createClient } from 'next-sanity';
import { Service } from '../schemaTypes/service';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-05-03',
  useCdn: false,
});

export async function getServices(): Promise<Service[]> {
  return await client.fetch(`
    *[_type == "service"] {
      _id,
      _createdAt,
      title,
      slug,
      shortDescription,
      "hero": {
        "image": hero.image,
        overlayText
      },
      content,
      details,
      process,
      seo
    }
  `);
}

export async function getServiceBySlug(slug: string): Promise<Service> {
  return await client.fetch(
    `
    *[_type == "service" && slug.current == $slug][0] {
      _id,
      _createdAt,
      title,
      slug,
      shortDescription,
      "hero": {
        "image": hero.image,
        overlayText
      },
      content,
      details,
      process,
      seo
    }
  `,
    { slug }
  );
}