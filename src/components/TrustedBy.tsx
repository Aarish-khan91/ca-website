export interface LogoItem {
  name: string
  url: string
}

export interface TrustedByProps {
  logos?: LogoItem[]
}

export function TrustedBy({ logos }: TrustedByProps) {
  const items = logos && logos.length > 0 ? logos : []
  const logoData = [...items, ...items]

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
