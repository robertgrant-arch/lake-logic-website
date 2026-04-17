import type { MetadataRoute } from 'next';
import { SERVICES } from '@/lib/content/services';
import { INDUSTRIES } from '@/lib/content/industries';
import { ARTICLES } from '@/lib/content/articles';

const BASE = 'https://lake-logic-website.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticUrls: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/industries`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/resources`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
  ];

  const serviceUrls: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const industryUrls: MetadataRoute.Sitemap = INDUSTRIES.map((i) => ({
    url: `${BASE}/industries/${i.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const articleUrls: MetadataRoute.Sitemap = ARTICLES.map((a) => ({
    url: `${BASE}/resources/${a.slug}`,
    lastModified: new Date(a.publishedISO + 'T00:00:00'),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticUrls, ...serviceUrls, ...industryUrls, ...articleUrls];
}
