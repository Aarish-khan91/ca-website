interface FeatureGridSectionProps {
  block: any;
  gridIndex?: number;
}

export function FeatureGridSection({ block, gridIndex = 0 }: FeatureGridSectionProps) {
  const cards = block.cards || []
  const title = block.section_title || block.sectionTitle || ''
  const subtitle = block.section_subtitle || block.sectionSubtitle || ''

  const positions = [
    'left-[8%] top-[8%]',       // Node 1 (Top Left)
    'right-[8%] top-[8%]',      // Node 2 (Top Right)
    'left-[0%] top-[45%]',      // Node 3 (Middle Left)
    'right-[0%] top-[45%]',     // Node 4 (Middle Right)
    'right-[20%] bottom-[4%]'   // Node 5 (Bottom Right)
  ]

  const iconColors = [
    'bg-[#f5a623]', // 0: Yellow/Orange
    'bg-[#e04f5f]', // 1: Red/Pink
    'bg-[#8d7c71]', // 2: Brown/Grey
    'bg-[#3b4b5b]', // 3: Dark Slate
    'bg-[#2d88ff]', // 4: Blue
    'bg-[#4aa554]', // 5: Green
    'bg-[#f88f24]'  // 6: Orange
  ]

  const defaultIcons = [
    // 0: Hourglass
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v2H4V4zm2 2v4.5c0 1.5 1 2.5 2.5 4L12 16l3.5-1.5c1.5-1.5 2.5-2.5 2.5-4V6H6zm2 14h8v-2H8v2zm0-2v-4.5c0-1.5 1-2.5 2.5-4L12 8l3.5 1.5c1.5 1.5 2.5 2.5 2.5 4V18H8z" /></svg>,
    // 1: Briefcase
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    // 2: Wallet / Money
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>,
    // 3: X / Close
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>,
    // 4: Shield
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    // 5: User
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
    // 6: Document
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
  ]

  // Helper to render dynamic icons based on Strapi data or index fallback
  const renderIcon = (card: any, idx: number) => {
    // If an image was uploaded to Strapi
    const imgUrl = card.icon?.data?.attributes?.url || card.icon?.url;
    if (imgUrl) {
      return <img src={imgUrl} alt={card.title} className="w-5 h-5 object-contain filter brightness-0 invert" />;
    }
    
    // Return the mapped default icon based on its order matching the design
    return defaultIcons[idx % defaultIcons.length];
  }

  // Branch configurations for the curved diagram (gridIndex === 0)
  const branches = [
    { // 0: Top Left
      d: "M 500 250 C 350 250, 350 150, 250 150",
      cx: 250, cy: 150,
      color: "#8B5A2B", // Brown
      htmlClass: "right-[77%] top-[30%] -translate-y-1/2 text-right items-end",
      titleColor: "text-[#8B5A2B]"
    },
    { // 1: Bottom Left (Swapped so cards[1] goes here)
      d: "M 500 250 C 350 250, 350 350, 250 350",
      cx: 250, cy: 350,
      color: "#1E3A8A", // Blue
      htmlClass: "right-[77%] top-[70%] -translate-y-1/2 text-right items-end",
      titleColor: "text-[#1E3A8A]"
    },
    { // 2: Top Right (Swapped so cards[2] goes here)
      d: "M 500 250 C 650 250, 650 150, 750 150",
      cx: 750, cy: 150,
      color: "#15803D", // Green
      htmlClass: "left-[77%] top-[30%] -translate-y-1/2 text-left items-start",
      titleColor: "text-[#15803D]"
    },
    { // 3: Middle Right
      d: "M 500 250 L 750 250",
      cx: 750, cy: 250,
      color: "#EA580C", // Orange
      htmlClass: "left-[77%] top-[50%] -translate-y-1/2 text-left items-start",
      titleColor: "text-[#EA580C]"
    },
    { // 4: Bottom Right
      d: "M 500 250 C 650 250, 650 350, 750 350",
      cx: 750, cy: 350,
      color: "#EAB308", // Yellow
      htmlClass: "left-[77%] top-[70%] -translate-y-1/2 text-left items-start",
      titleColor: "text-[#EAB308]"
    },
    { // 5: Middle Left
      d: "M 500 250 L 250 250",
      cx: 250, cy: 250,
      color: "#8B5CF6", // Purple
      htmlClass: "right-[77%] top-[50%] -translate-y-1/2 text-right items-end",
      titleColor: "text-[#8B5CF6]"
    },
    { // 6: Far Top Right
      d: "M 500 250 C 650 250, 650 50, 750 50",
      cx: 750, cy: 50,
      color: "#F43F5E", // Rose
      htmlClass: "left-[77%] top-[10%] -translate-y-1/2 text-left items-start",
      titleColor: "text-[#F43F5E]"
    },
    { // 7: Far Top Left
      d: "M 500 250 C 350 250, 350 50, 250 50",
      cx: 250, cy: 50,
      color: "#64748B", // Slate
      htmlClass: "right-[77%] top-[10%] -translate-y-1/2 text-right items-end",
      titleColor: "text-[#64748B]"
    },
    { // 8: Far Bottom Right
      d: "M 500 250 C 650 250, 650 450, 750 450",
      cx: 750, cy: 450,
      color: "#EC4899", // Pink
      htmlClass: "left-[77%] top-[90%] -translate-y-1/2 text-left items-start",
      titleColor: "text-[#EC4899]"
    },
    { // 9: Far Bottom Left
      d: "M 500 250 C 350 250, 350 450, 250 450",
      cx: 250, cy: 450,
      color: "#14B8A6", // Teal
      htmlClass: "right-[77%] top-[90%] -translate-y-1/2 text-right items-end",
      titleColor: "text-[#14B8A6]"
    }
  ]

  return (
    <section className="bg-[#f8f9fa] py-16 md:py-24 border-b border-slate-100">
      <div className="container-prose px-4 md:px-8 mx-auto max-w-6xl">
        <div className="text-left mb-12 max-w-3xl">
          <h2 className="text-[24px] md:text-[32px] font-bold text-[#0b293d] tracking-wide">
            {title}
          </h2>
          {subtitle && (
            <p className="text-slate-500 text-[14px] md:text-[15px] font-medium mt-3">
              {subtitle}
            </p>
          )}
        </div>

        {gridIndex > 0 ? (
          /* Second Design: Card Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {cards.map((card: any, idx: number) => (
              <div key={idx} className="bg-white p-6 rounded-[8px] border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white mb-5 ${iconColors[idx % iconColors.length]}`}>
                   {renderIcon(card, idx)}
                </div>
                <h4 className="text-[#0b293d] font-bold text-[16px] mb-2">{card.title}</h4>
                <p className="text-slate-500 text-[13px] font-light leading-relaxed whitespace-pre-line">{card.description}</p>
              </div>
            ))}
          </div>
        ) : (
          /* First Design: Curved Diagram (Global Business Presence) */
          <>
            {/* Desktop Connected Diagram */}
            <div className="relative w-full max-w-5xl mx-auto h-[600px] hidden md:block mt-8">

              {/* Center Circle */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-44 h-44 rounded-full border-[8px] border-[#f59e0b] bg-[#fefce8] flex flex-col items-center justify-center text-center p-4 shadow-sm">
                <span className="text-[14px] font-bold text-[#ea580c] uppercase tracking-wider mb-1">Global</span>
                <span className="text-[#ea580c] font-medium text-[12px] leading-tight uppercase">Business Presence</span>
              </div>

              {/* SVG Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 500" preserveAspectRatio="none">
                {cards.map((_: any, i: number) => {
                  if (i >= branches.length) return null;
                  const b = branches[i];
                  return (
                    <g key={i}>
                      <path d={b.d} fill="none" stroke={b.color} strokeWidth="2.5" />
                      <circle cx={b.cx} cy={b.cy} r="5" fill="white" stroke={b.color} strokeWidth="2.5" />
                    </g>
                  );
                })}
              </svg>

              {/* Render Nodes by mapping over cards directly */}
              {cards.map((card: any, idx: number) => {
                if (idx >= branches.length) return null; // Avoid overlapping if > 10
                const b = branches[idx];
                return (
                  <div
                    key={idx}
                    className={`absolute ${b.htmlClass} w-52 flex flex-col z-10 transition-transform hover:-translate-y-1`}
                  >
                    <h4 className={`${b.titleColor} font-bold text-[15px] mb-1 leading-tight`}>{card.title}</h4>
                    <p className="text-slate-500 text-[12px] font-medium leading-tight whitespace-pre-line">
                      {card.description}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Mobile Stacking List (Degrades gracefully from diagram) */}
            <div className="grid sm:grid-cols-2 gap-4 md:hidden mt-8">
              {cards.map((card: any, idx: number) => (
                <div key={idx} className="bg-white p-6 rounded-[8px] border border-slate-200 shadow-sm border-l-4" style={{borderLeftColor: branches[idx % branches.length].color}}>
                  <h4 className="font-bold text-[16px] mb-2" style={{color: branches[idx % branches.length].color}}>{card.title}</h4>
                  <p className="text-slate-600 text-[13px] font-medium leading-relaxed whitespace-pre-line">{card.description}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
