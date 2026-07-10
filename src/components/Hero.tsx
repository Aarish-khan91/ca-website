import Image from 'next/image'
import Link from 'next/link'
import { Button } from './Button'

export interface HeroProps {
  title?: string
  description?: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  backgroundImage?: string
}

export function Hero({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundImage
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-dark min-h-[420px] sm:min-h-[520px] md:min-h-[620px]">
      {/* Background Image */}
      {backgroundImage && (
        <>
          <div className="absolute inset-0">
            <Image
              src={backgroundImage}
              alt="Office Background"
              fill
              sizes="100vw"
              className="object-cover object-[80%_50%] md:object-[right_center]"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-slate-950/50" />
        </>
      )}

      <div className="container-prose py-20 md:py-32 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-wider text-white leading-wider">
            {title}
          </h1>
          <p className="mt-6 text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl">
            {description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            {primaryButtonText && primaryButtonLink && (
              <Link href={primaryButtonLink}>
                <Button variant="primary" size="lg" className="bg-brand-orange hover:bg-orange-600 text-white font-bold px-8">
                  {primaryButtonText}
                </Button>
              </Link>
            )}
            {secondaryButtonText && secondaryButtonLink && (
              <Link href={secondaryButtonLink}>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-dark font-semibold px-8">
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
