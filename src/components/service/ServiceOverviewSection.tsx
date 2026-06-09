interface ServiceOverviewSectionProps {
  service: any
}

export function ServiceOverviewSection({ service }: ServiceOverviewSectionProps) {
  if (!service.introDescription && !service.introQuote) return null

  return (
    <section className="bg-[#f8f9fa] pt-16 pb-16 md:pt-24 md:pb-4 flex flex-col border-b border-slate-100">
      <div className="container-prose px-4 md:px-8 mx-auto max-w-6xl">
        {/* Intro description */}
        <div className="bg-white p-8 md:p-12 shadow-sm rounded-[8px] border border-slate-100 mb-16">
          {service.introQuote && (
            <div className="border-l-4 border-[#f28e2b] pl-4 italic text-[18px] text-[#0b293d] mb-6 font-medium">
              "{service.introQuote}"
            </div>
          )}
          {service.introDescription && (
            <div
              className="prose max-w-none text-slate-700 leading-relaxed text-[15px] md:text-[16px] space-y-6
                         [&_p]:mb-4 [&_strong]:text-[#0b293d] [&_strong]:font-semibold [&_p]:font-light"
              dangerouslySetInnerHTML={{ __html: service.introDescription }}
            />
          )}
        </div>
      </div>
    </section>
  )
}
