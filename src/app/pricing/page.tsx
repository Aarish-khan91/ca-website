import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { PricingHero } from '@/components/PricingHero'
import { PricingCards } from '@/components/PricingCards'
import { ServicePricing } from '@/components/ServicePricing'
import { ComparisonTable } from '@/components/ComparisonTable'
import { FAQ } from '@/components/FAQ'
import { ReadyToStart } from '@/components/ReadyToStart'
import { FloatingChat } from '@/components/FloatingChat'

export const metadata = {
    title: 'Pricing | Ritesh Arora & Associates',
    description: 'Transparent pricing for GST, Income Tax, and Compliance services.'
}

export default function PricingPage() {
    return (
        <>
            <Navbar />
            <main className="bg-slate-50 min-h-screen flex flex-col">
                <PricingHero />
                <PricingCards />
                <ServicePricing />
                <ComparisonTable />
                <FAQ />
                <ReadyToStart />
                <Footer className="mt-0" />
            </main>
            <FloatingChat />
        </>
    )
}
