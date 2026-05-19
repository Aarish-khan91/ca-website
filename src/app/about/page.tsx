import { Navbar } from '@/components/Navbar'
import { AboutHero } from '@/components/AboutHero'
import { OurStory } from '@/components/OurStory'
import { MissionVision } from '@/components/MissionVision'
import { OurJourney } from '@/components/OurJourney'
import { TeamGrid } from '@/components/TeamGrid'
import { ContactBanner } from '@/components/ContactBanner'
import { FloatingChat } from '@/components/FloatingChat'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'About | Ritesh Arora & Associates',
  description: 'Authorized Accounting firm committed to accuracy, compliance, and strategic financial guidance.'
}

export default function AboutPage() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="bg-white">
        <AboutHero />

        <OurStory />

        <MissionVision />

        <OurJourney />

        <section className="py-16 md:py-24 bg-white text-slate-900">
          <div className="container-prose">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Meet Our Leadership</h2>
              <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
                Experienced professionals guiding every engagement.
              </p>
            </div>
            <TeamGrid />
          </div>
        </section>

<div className=' '>
        <ContactBanner />
        </div>
      </main>
    </>
  )
}
