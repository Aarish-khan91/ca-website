import { Metadata } from 'next'
import { AboutHero } from '@/components/AboutHero'
import { OurStory } from '@/components/OurStory'
import { MissionVision } from '@/components/MissionVision'
import { OurJourney } from '@/components/OurJourney'
import { TeamGrid } from '@/components/TeamGrid'
import { ContactBanner } from '@/components/ContactBanner'
import { fetchAboutPageData, getStrapiUrl } from '@/data/strapi'

// Dynamically generate SEO Metadata using the CMS SEO fields
export async function generateMetadata(): Promise<Metadata> {
  const cmsData = await fetchAboutPageData();
  const seo = cmsData?.seo;

  if (!seo) {
    return {
      title: 'About | Ritesh Arora & Associates',
      description: 'Authorized Accounting firm committed to accuracy, compliance, and strategic financial guidance.'
    };
  }

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
    alternates: {
      canonical: seo.canonicalURL || undefined
    },
    robots: seo.metaRobots || undefined
  };
}

export default async function AboutPage() {
  const cmsData = await fetchAboutPageData();

  if (!cmsData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-slate-800">
        <p className="text-lg font-medium">Please set up and publish About Page content in Strapi.</p>
      </div>
    );
  }

  // Bind properties directly to the CMS response without hardcoded fallback values in || condition
  const heroProps = {
    title: cmsData.heroTitle,
    description: cmsData.heroDescription,
    backgroundImageUrl: cmsData.heroBackgroundImage ? getStrapiUrl(cmsData.heroBackgroundImage.url) : undefined,
    primaryButtonText: cmsData.heroPrimaryButtonText,
    primaryButtonLink: cmsData.heroPrimaryButtonLink,
    secondaryButtonText: cmsData.heroSecondaryButtonText,
    secondaryButtonLink: cmsData.heroSecondaryButtonLink
  };

  const storyProps = {
    title: cmsData.storyTitle,
    content: cmsData.storyContent,
    imageUrl: cmsData.storyImage ? getStrapiUrl(cmsData.storyImage.url) : undefined
  };

  const missionVisionProps = {
    title: cmsData.missionVisionTitle,
    cards: cmsData.missionVisionCards ? cmsData.missionVisionCards.map((card: any) => ({
      title: card.title,
      description: card.description,
      iconImage: card.iconImage ? getStrapiUrl(card.iconImage.url) : undefined
    })) : []
  };

  const journeyProps = {
    title: cmsData.journeyTitle,
    subtitle: cmsData.journeySubtitle,
    milestones: cmsData.milestones ? cmsData.milestones.map((m: any) => ({
      id: m.id,
      yearTitle: m.yearTitle,
      description: m.description
    })) : []
  };

  const teamMembersData = cmsData.teamMembers ? cmsData.teamMembers.map((m: any) => ({
    name: m.name,
    role: m.role,
    image: m.image ? getStrapiUrl(m.image.url) : '/images/team/placeholder.png',
    linkedInUrl: m.linkedInUrl,
    twitterUrl: m.twitterUrl
  })) : [];

  const ctaProps = {
    title: cmsData.ctaTitle,
    subtitle: cmsData.ctaSubtitle,
    buttonText: cmsData.ctaButtonText,
    buttonLink: cmsData.ctaButtonLink
  };

  return (
    <>
      <main className="bg-white">
        <AboutHero {...heroProps} />

        <OurStory {...storyProps} />

        <MissionVision {...missionVisionProps} />

        <OurJourney {...journeyProps} />

        <section className="py-16 md:py-24 bg-white text-slate-900">
          <div className="container-prose">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                {cmsData.leadershipTitle}
              </h2>
              <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
                {cmsData.leadershipSubtitle}
              </p>
            </div>
            <TeamGrid members={teamMembersData} />
          </div>
        </section>

        <div className=" ">
          <ContactBanner {...ctaProps} />
        </div>
      </main>
    </>
  );
}
