import Link from 'next/link'
import { Button } from './Button'

export function AboutHome() {
    return (
        <section className="bg-brand-dark py-16 md:py-24 text-white relative overflow-hidden">
            {/* Background Pattern: Sunburst */}
            <div 
                className="absolute inset-0 opacity-80" 
                style={{ 
                    backgroundImage: "repeating-conic-gradient(from 0deg at 50% 10%, rgba(255,255,255,0.03) 0deg 2deg, transparent 2deg 4deg)" 
                }} 
            />

            <div className="container-prose relative z-10 max-w-6xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-wide">About Ritesh Arora & Associates</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 items-stretch">
                    {/* Left Card */}
                    <div className="bg-white rounded-xl p-8 md:p-10 shadow-xl flex flex-col h-full border-t-[6px] border-transparent">
                        <h3 className="text-[22px] md:text-[26px] font-bold mb-4 text-brand-dark leading-tight">
                            Your Trusted Chartered Accounting Partner for Growth & Compliance
                        </h3>
                        <p className="text-slate-600 text-[15px] leading-relaxed mb-8 flex-1">
                            We bring structured financial guidance, regulatory accuracy, and decades of combined expertise to help individuals, startups, and established businesses stay compliant, grow sustainably, and make informed financial decisions.
                        </p>
                        <div>
                            <Link href="/about">
                                <Button variant="primary" className="bg-brand-orange hover:bg-orange-600 text-white font-medium px-6 py-2.5 rounded text-sm shadow-sm transition-colors border-none">
                                    Learn More About Us →
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Card: Why Choose Us */}
                    <div className="bg-white rounded-xl p-8 md:p-10 shadow-xl flex flex-col h-full border-t-[6px] border-transparent">
                        <h3 className="text-[22px] md:text-[26px] font-bold mb-6 text-brand-dark leading-tight">
                            Why Choose Us?
                        </h3>
                        <ul className="space-y-4">
                            {[
                                '10+ years of CA experience',
                                '1000+ compliance filings completed',
                                '30+ business services delivered',
                                'Expert team with multi-domain specialization',
                                'Industry-specific advisory for startups & SMEs'
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className="shrink-0 flex items-center justify-center text-brand-orange mt-1">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    <span className="font-medium text-slate-600 text-[15px]">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
