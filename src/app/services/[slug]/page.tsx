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

export default async function ServicePage({ params }: PageProps) {
  return (
    <main className="min-h-screen flex flex-col bg-[#f8f9fa]">
      <ServiceHeroSection />
      <ServiceOverviewSection />
      <RichTextSection />
      <FeatureGridSection />
      <TabbedRichText />
      <ProcessSection />
      <ContactCtaSection />
      <ServiceFaqAccordion />
      <RelatedBlogsSection />
    </main>
  )
}
