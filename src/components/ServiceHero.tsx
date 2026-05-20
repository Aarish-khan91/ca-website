import { Button } from './Button'
import Link from 'next/link'

export function ServiceHero() {
    return (
        <section className="relative overflow-hidden h-[600px] flex items-center bg-[#173e56]">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img 
                    src="/images/services/services-hero.png" 
                    alt="Professionals in a meeting" 
                    className="w-full h-full object-cover object-center opacity-60 mix-blend-overlay"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-r from-[#0b293d]/90 via-[#0b293d]/70 to-transparent" /> */}
            </div>

            <div className="relative px-4 md:px-8">
                <div className="max-w-2xl">
                    <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold tracking-tight text-white mb-4 leading-tight">
                        Our Professional CA Services
                    </h1>
                    <p className="text-[16px] md:text-[20px] text-white/95 mb-8 leading-relaxed font-normal">
                        Expert guidance delivered with accuracy, transparency, and<br className="hidden md:block" /> long-term value.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/contact">
                            <button className="px-8 py-3 bg-[#f28e2b] hover:bg-[#e07b1a] text-white font-medium rounded-[6px] transition-colors shadow-sm">
                                Book free consultation
                            </button>
                        </Link>
                        <Link href="/services">
                            <button className="px-8 py-3 bg-transparent hover:bg-white/10 text-white font-medium rounded-[6px] transition-colors border border-white">
                                Download Brochure
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
