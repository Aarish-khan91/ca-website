import { Button } from './Button'
import Link from 'next/link'

interface ServiceHeroProps {
    title?: string;
    subtitle?: string;
    backgroundImage?: string | null;
    primaryButtonText?: string;
    primaryButtonLink?: string;
    secondaryButtonText?: string;
    secondaryButtonLink?: string;
}

export function ServiceHero({
    title,
    subtitle,
    backgroundImage,
    primaryButtonText,
    primaryButtonLink,
    secondaryButtonText,
    secondaryButtonLink
}: ServiceHeroProps) {
    return (
        <section className="relative overflow-hidden h-[600px] flex items-center bg-[#173e56]">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={backgroundImage || ""}
                    alt="Professionals in a meeting"
                    className="w-full h-full object-cover object-center opacity-60 mix-blend-overlay"
                />
            </div>

            <div className="relative px-4 md:px-8">
                <div className="max-w-2xl">
                    <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold tracking-tight text-white mb-4 leading-tight">
                        {title}
                    </h1>
                    <p className="text-[16px] md:text-[20px] text-white/95 mb-8 leading-relaxed font-normal whitespace-pre-line">
                        {subtitle}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href={primaryButtonLink || ""}>
                            <button className="px-8 py-3 bg-[#f28e2b] hover:bg-[#e07b1a] text-white font-medium rounded-[6px] transition-colors shadow-sm">
                                {primaryButtonText}
                            </button>
                        </Link>
                        <Link href={secondaryButtonLink || ""}>
                            <button className="px-8 py-3 bg-transparent hover:bg-white/10 text-white font-medium rounded-[6px] transition-colors border border-white">
                                {secondaryButtonText}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

