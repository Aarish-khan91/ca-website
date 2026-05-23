export interface TeamMember {
  name: string
  role: string
  image: string
  linkedInUrl?: string
  twitterUrl?: string
}

export interface TeamGridProps {
  members: TeamMember[]
}

export function TeamGrid({ members }: TeamGridProps) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {members.map((m) => (
        <div key={m.name} className="group rounded-[20px] bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden border border-slate-100">
          
          {/* Image taking full width at the top */}
          <div className="h-[320px] w-full bg-slate-100 relative overflow-hidden">
            <img 
              src={m.image} 
              alt={m.name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
          </div>
          
          {/* Content padding below image */}
          <div className="p-6 md:p-8 flex-1 flex flex-col">
            <h3 className="font-semibold text-[22px] text-brand-dark">{m.name}</h3>
            <p className="text-slate-500 text-[14px] mt-2 leading-relaxed flex-1">
              {m.role}
            </p>
            
            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-4">
              {m.linkedInUrl && (
                <a href={m.linkedInUrl} aria-label="LinkedIn" className="hover:opacity-75 transition-opacity">
                  <img src="/images/social/linkedin.png" alt="LinkedIn" className="w-5 h-5 object-contain" />
                </a>
              )}
              {m.twitterUrl && (
                <a href={m.twitterUrl} aria-label="Twitter" className="hover:opacity-75 transition-opacity">
                  <img src="/images/social/instagram.png" alt="Twitter" className="w-5 h-5 object-contain" />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
