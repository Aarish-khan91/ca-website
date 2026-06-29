import { Button } from './Button'
import Link from 'next/link'

export interface AboutHeroProps {
  title: string
  description: string
  backgroundImageUrl?: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
}

export function AboutHero({
  title,
  description,
  backgroundImageUrl,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink
}: AboutHeroProps) {
  return (
    <section className="relative overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center">
      <div className="absolute inset-0">
        {backgroundImageUrl && (
          <img
            src={backgroundImageUrl}
            alt={title}
            className="w-full h-full object-cover object-center"
          />
        )}
      </div>

      <div className="relative container-prose w-full px-4 md:px-8">
        <div className="max-w-5xl">
          <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold tracking-tight text-white leading-tight">
            {title}
          </h1>
          <p className="mt-4 md:mt-6 text-white/95 text-[18px] md:text-[24px] leading-relaxed max-w-5xl">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {primaryButtonText && primaryButtonLink && (
              <Link href={primaryButtonLink}>
                <Button variant="primary" className="bg-[#f28e2b] hover:bg-[#e07b1a] text-white px-6 py-2.5 rounded-[8px] text-[16px] font-medium border-none shadow-sm transition-colors">
                  {primaryButtonText}
                </Button>
              </Link>
            )}
            {secondaryButtonText && secondaryButtonLink && (
              <Link href={secondaryButtonLink}>
                <Button variant="outline" className="border border-white text-white hover:bg-white hover:text-slate-900 px-6 py-2.5 rounded-[8px] text-[16px] font-medium transition-colors bg-transparent">
                  {secondaryButtonText}
                </Button>


              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
