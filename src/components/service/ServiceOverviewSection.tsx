export function ServiceOverviewSection() {
  const introQuote = "Expert advice, seamless execution."
  const introDescription = "<p>Our dedicated team of professionals ensures that your business requirements are met with the highest standards. We are committed to transparency and delivering results on time, helping you focus on what you do best: growing your business.</p>"

  return (
    <section className="bg-[#f8f9fa] pt-16 pb-16 md:pt-24 md:pb-4 flex flex-col border-b border-slate-100">
      <div className="container-prose px-4 md:px-8 mx-auto max-w-6xl">
        {/* Intro description */}
        <div className="bg-white p-8 md:p-12 shadow-sm rounded-[8px] border border-slate-100 mb-16">
          <div className="border-l-4 border-[#f28e2b] pl-4 italic text-[18px] text-[#0b293d] mb-6 font-medium">
            &quot;{introQuote}&quot;
          </div>
          <div
            className="prose max-w-none text-slate-700 leading-relaxed text-[15px] md:text-[16px] space-y-6
                       [&_p]:mb-4 [&_strong]:text-[#0b293d] [&_strong]:font-semibold [&_p]:font-light"
            dangerouslySetInnerHTML={{ __html: introDescription }}
          />
        </div>
      </div>
    </section>
  )
}
