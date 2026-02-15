import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ContactHero } from '@/components/ContactHero'
import { ContactContent } from '@/components/ContactContent'
import { FloatingChat } from '@/components/FloatingChat'

export const metadata = {
  title: 'Contact Us | Ritesh Arora & Associates',
  description: 'Get in touch for enquiries, service requests, or to book a consultation.'
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-50 min-h-screen flex flex-col">
        <ContactHero />
        <ContactContent />
        <Footer className="mt-0" />
      </main>
      <FloatingChat />
    </>
  )
}
