import Link from 'next/link'
import { Button } from './Button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-dark">
      {/* Background Image */}
      <div className="absolute inset-0 ">
        <img
          src="/images/home/hero-bg.png"
          alt="Office Background"
          className="w-full h-full object-cover"
        />
        
      </div>

      <div className="container-prose py-20 md:py-32 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-wider text-white leading-wider">
            Your Trusted Chartered Accountants for Tax, Compliance & Business Growth
          </h1>
          <p className="mt-6 text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl">
            Financial clarity, accurate compliance, and expert advisory for individuals, startups, and enterprises.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="bg-brand-orange hover:bg-orange-600 text-white font-bold px-8">
                Book Free Consultation
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-dark font-semibold px-8">
                View Core Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
