export function Testimonials() {
  const items = [
    {
      quote:
        'The team handles our filings and compliance with accuracy and on-time delivery. We feel confident and supported.',
      author: 'Customer A',
      role: 'Founder',
    },
    {
      quote:
        'From registering our company to setting up compliance, the advisory was clear and helped us avoid early mistakes.',
      author: 'Customer B',
      role: 'Startup Owner',
    },
    {
      quote:
        'Tax planning and filing have been smooth for years. The proactive approach helped me save significantly.',
      author: 'Customer C',
      role: 'Senior Engineer',
    },
  ]
  return (
    <div className="relative overflow-hidden w-full">
      {/* Gradient Masks for smooth fade out at edges - White based */}
      <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

      <div className="flex gap-6 w-max animate-marquee pause-on-hover py-4">
        {[...items, ...items, ...items].map((t, idx) => (
          <div key={`${t.author}-${idx}`} className="w-[300px] md:w-[400px] flex-shrink-0 rounded-xl border border-slate-100 bg-white p-8 shadow-md hover:shadow-xl transition-shadow">
            <div className="flex text-brand-orange mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24">
                  <path d="M12 17.27l5.18 3.04-1.64-5.81L20 10.9l-6-.52L12 5l-2 5.38-6 .52 4.46 3.6-1.64 5.81z" fill="currentColor" />
                </svg>
              ))}
            </div>
            <p className="text-slate-700 leading-relaxed text-base italic">“{t.quote}”</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-400 font-bold text-xs">
                {t.author.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">{t.author}</div>
                <div className="text-xs text-slate-500">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
