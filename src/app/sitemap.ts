import { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

const staticRoutes = [
  '',
  'about',
  'admin',
  'admin/login',
  'dashboard',
  'community',
  'community/feed',
  'community/groups',
  'community/messages',
  'contact',
  'creator',
  'economics-education-realestate',
  'entertainment',
  'knowledge',
  'languages',
  'marketplace',
  'politics-history',
  'sports-entertainment-health',
  'stories',
  'technology-science',
  'tourism',
  'tourism/flights',
  'tourism/hotels',
  'tourism/tours',
  'tourism/visa'
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map(route => ({
    url: `${SITE_URL}/${route}`.replace(/\/\/+$/, ''),
    lastModified: new Date().toISOString()
  }));
}
