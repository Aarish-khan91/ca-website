import { Button } from './Button'

export function ContactBanner() {
  return (
    <section className="py-16 md:py-24 bg-slate-900">
      <div className="container-prose text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
          Need Expert Financial or Compliance Guidance?
        </h2>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto text-lg">
          Our team is here to support. We bring accurate guidance and strategic insights to help your business grow.
        </p>
        <div className="mt-8">
          <Button variant="primary" size="lg" className="min-w-48 font-bold">
            Book Free Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
