import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ServiceHero } from '@/components/ServiceHero'
import { ServiceGrid } from '@/components/ServiceGrid'
import { ServiceTestimonials } from '@/components/ServiceTestimonials'
import { ServiceFAQ } from '@/components/ServiceFAQ'
import { ServiceContact } from '@/components/ServiceContact'
import { FloatingChat } from '@/components/FloatingChat'

export const metadata = {
  title: 'Services | Ritesh Arora & Associates',
  description: 'Expert CA services including Incorporation, GST, Tax Advisory, and Audits.'
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-50 min-h-screen flex flex-col">
        <ServiceHero />
        <ServiceGrid />
        <ServiceTestimonials />
        <ServiceFAQ />
        <ServiceContact />
        <Footer className="mt-0" />
      </main>
      <FloatingChat />
    </>
  )
}
