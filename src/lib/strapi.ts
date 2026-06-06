const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';

export interface StrapiBlogPost {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: any[];
  coverImage?: {
    url: string;
  } | null;
  category?: {
    name: string;
    slug: string;
  } | null;
  tags?: any[];
  comments?: any[];
}

export async function getBlogPosts(): Promise<StrapiBlogPost[]> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/blog-posts?populate=*`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });
    
    if (!res.ok) {
      console.error('Failed to fetch blog posts from Strapi:', res.status, res.statusText);
      return [];
    }

    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<StrapiBlogPost | null> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/blog-posts?filters[slug][$eq]=${slug}&populate=*`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error(`Failed to fetch blog post by slug (${slug}):`, res.status, res.statusText);
      return null;
    }

    const json = await res.json();
    const data = json.data;
    
    if (data && data.length > 0) {
      return data[0];
    }
    
    return null;
  } catch (error) {
    console.error(`Error fetching blog post by slug (${slug}):`, error);
    return null;
  }
}

// Utility to get the full URL for Strapi media
export function getStrapiMedia(url?: string | null) {
  if (!url) return null;
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
}

export interface StrapiBlogSubscribe {
  id: number;
  documentId: string;
  subscribeTitle: string;
  subscribePlaceholder: string;
  subscribeButtonText: string;
  subscribeDisclaimer: string;
  privacyPolicyLinkText?: string;
  privacyPolicyLinkUrl?: string;
}

export async function getBlogSubscribe(): Promise<StrapiBlogSubscribe | null> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/blog-subscribe?populate=*`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error('Failed to fetch blog-subscribe from Strapi:', res.status, res.statusText);
      return null;
    }

    const json = await res.json();
    return json.data || null;
  } catch (error) {
    console.error('Error fetching blog-subscribe:', error);
    return null;
  }
}

export interface StrapiService {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  shortDescription: string;
  coverImage?: {
    url: string;
  } | null;
  contentBlocks?: any[];
}

export async function getServices(): Promise<StrapiService[]> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/services?populate=*`, {
      next: { revalidate: 60 },
    });
    
    if (!res.ok) {
      console.error('Failed to fetch services from Strapi:', res.status, res.statusText);
      return [];
    }

    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

export async function getServiceBySlug(slug: string): Promise<StrapiService | null> {
  try {
    // Populate the dynamic zone using populate[contentBlocks][populate]=*
    const res = await fetch(`${STRAPI_URL}/api/services?filters[slug][$eq]=${slug}&populate[contentBlocks][populate]=*&populate[coverImage]=true`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error(`Failed to fetch service by slug (${slug}):`, res.status, res.statusText);
      return null;
    }

    const json = await res.json();
    const data = json.data;
    
    if (data && data.length > 0) {
      return data[0];
    }
    
    return null;
  } catch (error) {
    console.error(`Error fetching service by slug (${slug}):`, error);
    return null;
  }
}
