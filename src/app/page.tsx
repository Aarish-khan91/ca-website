import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Section } from '@/components/Section'
import { ServiceCard } from '@/components/ServiceCard'
import { Stats } from '@/components/Stats'
import { Testimonials } from '@/components/Testimonials'
import { TrustedBy } from '@/components/TrustedBy'
import { Footer } from '@/components/Footer'
import { AboutHome } from '@/components/AboutHome'
import { InsightsHome } from '@/components/InsightsHome'
import { ServiceContact } from '@/components/ServiceContact'
import Link from 'next/link'
import { Button } from '@/components/Button'

const coreServices = [
  {
    title: "Company Incorporation",
    description: "Register your business with complete documentation, compliance, and startup support.",
    href: "/services/company-incorporation",
    image: "/images/home/1.png"
  },
  {
    title: "GST Registration & Filing",
    description: "End-to-end registration, timely filing, reconciliation, and dispute handling.",
    image: "/images/home/2.png"
  },
  {
    title: "Income Tax Advisory",
    description: "Professional tax planning, return filing, and compliance management.",
    image: "/images/home/3.png"
  },
  {
    title: "Accounting & Bookkeeping",
    description: "Monthly bookkeeping, financial reporting, and accurate ledger management.",
    image: "/images/home/4.png"
  },
  {
    title: "Audit & Assurance",
    description: "Internal, statutory, and compliance audits with actionable insights.",
    image: "/images/home/1.png"
  },
  {
    title: "Business Compliance Management",
    description: "ROC, MCA, and statutory compliance management to keep your business protected.",
    image: "/images/home/2.png"
  }
];

export default function Page() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="bg-white">
        <Hero />

        {/* Core Services Section */}
        <Section
          title="Our Core Services"
          subtitle="Expert services to support individuals, startups, and enterprises."
          className="bg-white py-20"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                href={service.href}
                image={service.image}
              />
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link href="/services">
              <Button variant="primary" className="bg-brand-orange hover:bg-orange-600 text-white font-bold px-10 h-12 shadow-md">
                View All Services
              </Button>
            </Link>
          </div>
        </Section>

        {/* Stats Strip - Full Width */}
        <Stats />

        {/* Trusted By Section */}
        <section className="py-16 bg-slate-50">
          <div className="container-prose text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Trusted By</h2>
            <p className="text-slate-600 mt-2">Businesses and professionals who rely on our expertise.</p>
          </div>
          <TrustedBy />
        </section>

        {/* About Section - Dark Blue */}
        <AboutHome />

        {/* Insights Section */}
        <InsightsHome />

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-50">
          <div className="container-prose text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Client Testimonials</h2>
            <p className="text-slate-600 mt-3">See what our partners have to say about our work.</p>
          </div>
          <Testimonials />
        </section>

        {/* Contact Form Section - Deep Blue */}
        <ServiceContact />

        <Footer />
      </main>
    </>
  )
}
