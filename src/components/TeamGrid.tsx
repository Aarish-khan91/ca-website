type Member = {
  name: string
  role: string
  image: string
}

const team: Member[] = [
  { 
    name: 'Ritesh Arora', 
    role: 'Taxation, Corporate Compliance & Audit — 15+ years experience',
    image: '/images/team/ritesh.png'
  },
  { 
    name: 'Anita Sharma', 
    role: 'GST advisory & income tax planning for SMEs',
    image: '/images/team/anita.png'
  },
  { 
    name: 'Vikram Patel', 
    role: 'GST advisory & income tax planning for SMEs',
    image: '/images/team/vikram.png'
  },
]

export function TeamGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {team.map((m) => (
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
              <a href="#" aria-label="LinkedIn" className="hover:opacity-75 transition-opacity">
                <img src="/images/social/linkedin.png" alt="LinkedIn" className="w-5 h-5 object-contain" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:opacity-75 transition-opacity">
                <img src="/images/social/instagram.png" alt="Instagram" className="w-5 h-5 object-contain" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
