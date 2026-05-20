import { NewsletterHero } from '@/components/NewsletterHero'
import { NewsletterFeatures } from '@/components/NewsletterFeatures'

export const metadata = {
  title: 'Newsletter | Ritesh Arora & Associates',
  description: 'Subscribe to stay informed about GST changes, tax deadlines, and compliance alerts.'
}

export default function NewsletterPage() {
  return (
    <main className="bg-[#f8f9fa] min-h-screen flex flex-col">
      <NewsletterHero />
      <NewsletterFeatures />
    </main>
  )
}
