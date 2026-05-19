import { Button } from './Button'

export function AboutHero() {
  return (
    <section className="relative overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center">
      <div className="absolute inset-0">
        <img 
          src="/images/about/about-hero.png" 
          alt="About Ritesh Arora & Associates" 
          className="w-full h-full object-cover object-center"
        />
        {/* <div className="absolute inset-0 bg-slate-900/50" /> 
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/30 to-transparent" /> */}
      </div>
      
      <div className="relative container-prose w-full px-4 md:px-8">
        <div className="max-w-5xl">
          <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold tracking-tight text-white leading-tight">
            About Ritesh Arora & Associates
          </h1>
          <p className="mt-4 md:mt-6 text-white/95 text-[18px] md:text-[24px] leading-relaxed max-w-5xl">
            A Chartered Accountancy firm committed to accuracy, compliance, and strategic financial guidance.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="primary" className="bg-[#f28e2b] hover:bg-[#e07b1a] text-white px-6 py-2.5 rounded-[8px] text-[16px] font-medium border-none shadow-sm transition-colors">
              Book free consultation
            </Button>
            <Button variant="outline" className="border border-white text-white hover:bg-white hover:text-slate-900 px-6 py-2.5 rounded-[8px] text-[16px] font-medium transition-colors bg-transparent">
              View All Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
