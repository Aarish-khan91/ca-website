import { CareersHero } from '@/components/CareersHero'
import { JobOpenings } from '@/components/JobOpenings'
import { ContactBanner } from '@/components/ContactBanner'

export const metadata = {
  title: 'Careers | Ritesh Arora & Associates',
  description: 'Join our growing team of finance, audit, and compliance professionals.'
}

export default function CareersPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <CareersHero />
      <JobOpenings />
    </main>
  )
}
