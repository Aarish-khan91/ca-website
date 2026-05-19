export function TrustedBy() {
  const logos = [
    { name: 'Agency One', url: '/images/trusted/DC-1.png' },
    { name: 'GovDept', url: '/images/trusted/DC-2.png' },
    { name: 'Industry Board 1', url: '/images/trusted/DC-3.png' },
    { name: 'Industry Board 2', url: '/images/trusted/DC-4.png' },
  ]

  const logoData = [...logos, ...logos]

  return (
    <div className="w-full overflow-hidden flex flex-nowrap relative">
      <div className="max-w-7xl flex animate-marquee pause-on-hover shrink-0  justify-around items-center">
        {logoData.map((l, idx) => (
          <div
            key={`first-${idx}`}
            className="h-34 w-48 mx-4 sm:mx-8 rounded-lg flex items-center justify-center transition-all duration-300 shrink-0"
          >
            <img src={l.url} alt={l.name} className="max-h-30 max-w-[80%] object-contain" />
          </div>
        ))}
      </div>
    </div>
  )
}
