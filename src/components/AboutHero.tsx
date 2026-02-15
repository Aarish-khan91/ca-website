import { Button } from './Button'

export function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_top,rgba(241,144,32,0.15),transparent_60%)]" />
        {/* Placeholder for the office background image */}
        <div className="h-full w-full bg-slate-900" /> 
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
      </div>
      <div className="relative container-prose py-20 md:py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            About Ritesh Arora & Associates
          </h1>
          <p className="mt-6 text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl">
            Authorized Accounting firm committed to accuracy, compliance, and strategic financial guidance.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="primary" size="lg">Read Our Mandate</Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">Work With Us</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
