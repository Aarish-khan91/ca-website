import { getStrapiMedia } from '@/lib/strapi'

interface ServiceHeroSectionProps {
  service: any
}

export function ServiceHeroSection({ service }: ServiceHeroSectionProps) {
  const bgUrl = service.image?.url
    && getStrapiMedia(service.image.url)

  return (
    <section className="relative overflow-hidden h-[400px] md:h-[450px] flex items-center bg-[#0b293d]">
      {/* Wave Background Pattern */}
      <div className="absolute inset-0">
        <img
          src={bgUrl || ''}
          alt={service.title}
          className="w-full h-full object-cover object-center mix-blend-overlay opacity-30"
        />
        {/* Abstract blue/orange light mesh overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b293d]/90 via-[#0b293d]/50 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(242,142,43,0.15)_0%,_transparent_50%)]"></div>
      </div>

      <div className="relative container-prose px-4 md:px-8 mx-auto max-w-6xl w-full">
        <div className="max-w-3xl">
          <h1 className="text-[36px] md:text-[48px] lg:text-[54px] font-bold tracking-tight text-white mb-4 leading-tight">
            {service.heroTitle || service.title}
          </h1>
          {service.heroSubtitle && (
            <p className="text-[15px] md:text-[18px] text-slate-200 leading-relaxed font-light max-w-2xl">
              {service.heroSubtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
