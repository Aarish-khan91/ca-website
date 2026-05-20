import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { IncorporationHero } from '@/components/incorporation/IncorporationHero'
import { IncorporationOverview } from '@/components/incorporation/IncorporationOverview'
import { HowWeHelp } from '@/components/incorporation/HowWeHelp'
import { IncorporationSteps } from '@/components/incorporation/IncorporationSteps'
import { WhoShouldOpt } from '@/components/incorporation/WhoShouldOpt'
import { IncorporationFAQ } from '@/components/incorporation/IncorporationFAQ'
import { FloatingChat } from '@/components/FloatingChat'

export const metadata = {
    title: 'Company Incorporation Services | Register Pvt Ltd, LLP in India',
    description: 'Expert assistance for Company Incorporation, LLP Registration, and compliance in India. Compare entities and get started.'
}

export default function CompanyIncorporationPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen flex flex-col bg-[#f8f9fa]">
                <IncorporationHero />
                <IncorporationOverview />
                <HowWeHelp />
                <IncorporationSteps />
                <WhoShouldOpt />
                <IncorporationFAQ />
            </main>
        </>
    )
}
