import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { IncorporationHero } from '@/components/incorporation/IncorporationHero'
import { IncorporationOverview } from '@/components/incorporation/IncorporationOverview'
import { EntityComparison } from '@/components/incorporation/EntityComparison'
import { IncorporationSteps } from '@/components/incorporation/IncorporationSteps'
import { IncorporationForm } from '@/components/incorporation/IncorporationForm'
import { IncorporationClosure } from '@/components/incorporation/IncorporationClosure'
import { IncorporationFAQ } from '@/components/incorporation/IncorporationFAQ'
import { RelatedBlogs } from '@/components/incorporation/RelatedBlogs'
import { FloatingChat } from '@/components/FloatingChat'

export const metadata = {
    title: 'Company Incorporation Services | Register Pvt Ltd, LLP in India',
    description: 'Expert assistance for Company Incorporation, LLP Registration, and compliance in India. Compare entities and get started.'
}

export default function CompanyIncorporationPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen flex flex-col">
                <IncorporationHero />
                <IncorporationOverview />
                <EntityComparison />
                <IncorporationSteps />
                <IncorporationClosure />
                <IncorporationForm />
                <IncorporationFAQ />
                <RelatedBlogs />
                <Footer className="mt-0" />
            </main>
            <FloatingChat />
        </>
    )
}
