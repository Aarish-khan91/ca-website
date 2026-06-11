export function FeatureGridSection() {
  const cards = [
    { title: "Expert Team", description: "Experienced professionals handling your case." },
    { title: "Fast Turnaround", description: "Quick and efficient processing." },
    { title: "Affordable Pricing", description: "Transparent and competitive rates." },
    { title: "24/7 Support", description: "We are here whenever you need us." },
    { title: "Compliance First", description: "Strict adherence to all regulations." }
  ]
  const title = "Why Choose Us"
  const subtitle = "Top tier services for your business"

  const positions = [
    'left-[8%] top-[8%]',       // Node 1 (Top Left)
    'right-[8%] top-[8%]',      // Node 2 (Top Right)
    'left-[0%] top-[45%]',      // Node 3 (Middle Left)
    'right-[0%] top-[45%]',     // Node 4 (Middle Right)
    'right-[20%] bottom-[4%]'   // Node 5 (Bottom Right)
  ]

  return (
    <section className="bg-[#f8f9fa] py-16 md:py-24 border-b border-slate-100">
      <div className="container-prose px-4 md:px-8 mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-[24px] md:text-[32px] font-bold text-[#0b293d] uppercase tracking-wide">
            {title}
          </h2>
          {subtitle && (
            <p className="text-slate-500 text-[14px] md:text-[15px] font-semibold mt-1">
              {subtitle}
            </p>
          )}
        </div>

        {/* Desktop Connected Diagram */}
        <div className="relative w-full max-w-4xl mx-auto h-[480px] hidden md:block mt-16">

          {/* Center Circle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-44 h-44 rounded-full border-4 border-orange-200 bg-white flex flex-col items-center justify-center text-center p-4 shadow-xl">
            <span className="text-[12px] font-bold text-[#f28e2b] uppercase tracking-wider mb-1">Entities</span>
            <span className="text-[#0b293d] font-extrabold text-[15px] leading-tight uppercase">Types of Business Entities</span>
          </div>

          {/* SVG Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {/* Top Left Line */}
            <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#f28e2b" strokeWidth="1.5" strokeDasharray="5,5" />
            {/* Top Right Line */}
            <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#f28e2b" strokeWidth="1.5" strokeDasharray="5,5" />
            {/* Middle Left Line */}
            <line x1="50%" y1="50%" x2="15%" y2="52%" stroke="#f28e2b" strokeWidth="1.5" strokeDasharray="5,5" />
            {/* Middle Right Line */}
            <line x1="50%" y1="50%" x2="85%" y2="52%" stroke="#f28e2b" strokeWidth="1.5" strokeDasharray="5,5" />
            {/* Bottom Right Line */}
            <line x1="50%" y1="50%" x2="68%" y2="82%" stroke="#f28e2b" strokeWidth="1.5" strokeDasharray="5,5" />
          </svg>

          {/* Render Nodes by mapping over cards directly */}
          {cards.slice(0, 5).map((card: any, idx: number) => (
            <div
              key={idx}
              className={`absolute ${positions[idx]} w-56 bg-white p-5 rounded-[8px] border border-slate-100 shadow-md text-center hover:-translate-y-1 transition-all duration-300 z-10`}
            >
              <h4 className="text-[#0b293d] font-bold text-[16px] mb-1.5">{card.title}</h4>
              <p className="text-slate-500 text-[12px] font-light leading-relaxed whitespace-pre-line">
                {card.description}
              </p>
            </div>
          ))}

        </div>

        {/* Mobile Stacking List (Degrades gracefully from diagram) */}
        <div className="grid sm:grid-cols-2 gap-4 md:hidden mt-8">
          {cards.map((card: any, idx: number) => (
            <div key={idx} className="bg-white p-6 rounded-[8px] border border-slate-200 shadow-sm">
              <h4 className="text-[#0b293d] font-bold text-[16px] mb-2">{card.title}</h4>
              <p className="text-slate-600 text-[13px] font-light leading-relaxed whitespace-pre-line">{card.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )

}
