import { Button } from './Button'

export function ContactBanner() {
  return (
    <section className="relative py-8 md:py-20 bg-brand-dark overflow-hidden">
      {/* Background Pattern: Sunburst */}
      <div 
        className="absolute inset-0 opacity-80" 
        style={{ 
          backgroundImage: "repeating-conic-gradient(from 0deg at 50% 10%, rgba(255,255,255,0.03) 0deg 2deg, transparent 2deg 4deg)" 
        }} 
      />

      <div className="relative z-10 container-prose text-center px-4">
        <h2 className="text-[28px] md:text-[36px] font-bold tracking-wide text-white mb-4">
          Need Expert Financial or Compliance Guidance?
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto text-[15px] md:text-[16px] font-light">
          Our CA team is here to support individuals, startups, and businesses of all sizes.
        </p>
        <div className="mt-8">
          <Button variant="primary" className="bg-[#f28e2b] hover:bg-[#e07b1a] text-white px-8 py-2.5 rounded-[8px] text-[15px] font-medium border-none shadow-sm transition-colors">
            Book free consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
