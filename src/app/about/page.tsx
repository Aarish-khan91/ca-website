import { getServiceBySlug } from '@/lib/strapi'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

// Import modular UI components
import { ServiceHeroSection } from '@/components/service/ServiceHeroSection'
import { ServiceOverviewSection } from '@/components/service/ServiceOverviewSection'
import { RichTextSection } from '@/components/service/RichTextSection'
import { FeatureGridSection } from '@/components/service/FeatureGridSection'
import { TabbedRichText } from '@/components/service/TabbedRichText'
import { ProcessSection } from '@/components/service/ProcessSection'
import { ContactCtaSection } from '@/components/service/ContactCtaSection'
import { ServiceFaqAccordion } from '@/components/service/ServiceFaqAccordion'
import { RelatedBlogsSection } from '@/components/service/RelatedBlogsSection'
interface PageProps {
  params: {
    slug: string
  }
}

// Dynamic Metadata Generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = await getServiceBySlug(params.slug)

  if (!service) {
    if (params.slug === 'company-incorporation') {
      return {
        title: 'Company Incorporation Services | Register Pvt Ltd, LLP in India',
        description: 'Expert assistance for Company Incorporation, LLP Registration, and compliance in India. Compare entities and get started.'
      }
    }
    return {
      title: 'Service Not Found | Ritesh Arora & Associates',
      description: 'The requested service could not be found.'
    }
  }

  const seo = service.seo || {}
  return {
    title: seo.metaTitle || `${service.title}`,
    description: seo.metaDescription || service.heroSubtitle,
    keywords: seo.keywords || '',
    robots: seo.metaRobots || 'index, follow',
    alternates: seo.canonicalUrl ? { canonical: seo.canonicalUrl } : undefined
  }
}

// Main Dynamic Service Page Component
export default async function ServicePage({ params }: PageProps) {
  const service = await getServiceBySlug(params.slug)
  console.log("service-->", service)
  // If no service is found in Strapi, return a clean 404
  if (!service) {
    notFound()
  }

  const blocks = service.contentBlocks || []

  return (
    <main className="min-h-screen flex flex-col bg-[#f8f9fa]">
      {/* 1. Service Hero */}
      <ServiceHeroSection service={service} />

      {/* 2. Overview Section */}
      <ServiceOverviewSection service={service} />

      {/* 3. Render Dynamic Zone Blocks */}
      {blocks.map((block: any, idx: number) => {
        const componentType = block.__component

        switch (componentType) {
          case 'service.rich-text-section':
            return <RichTextSection key={idx} block={block} />

          case 'service.feature-grid':
            return <FeatureGridSection key={idx} block={block} />

          case 'service.tabbed-rich-text':
            return <TabbedRichText key={idx} block={block} />

          case 'service.process-section':
            return <ProcessSection key={idx} block={block} />

          case 'service.contact-cta':
            return <ContactCtaSection key={idx} block={block} />

          default:
            console.warn(`Unhandled dynamic block component: ${componentType}`)
            return null
        }
      })}

      {/* 4. Service Relational FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <ServiceFaqAccordion faqs={service.faqs} />
      )}

      {/* 5. Related Blogs */}
      <RelatedBlogsSection blogs={service.relatedBlogs} />
    </main>
  )
}
