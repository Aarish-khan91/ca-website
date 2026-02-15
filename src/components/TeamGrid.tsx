type Member = {
  name: string
  role: string
}

const team: Member[] = [
  { name: 'Ritesh Arora', role: 'Leading Corporate Taxation and Audit' },
  { name: 'Anita Sharma', role: 'Full service financial compliance & Tax' },
  { name: 'Varun Patel', role: 'VAT & Global Taxation Head' },
]

export function TeamGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {team.map((m) => (
        <div key={m.name} className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-xl transition duration-300">
          <div className="h-64 rounded-xl bg-slate-200 w-full object-cover mb-6 relative overflow-hidden">
            {/* Placeholder for the person image */}
            <div className="absolute inset-0 flex items-center justify-center text-slate-400">
              Image Placeholder
            </div>
          </div>
          <div className="font-bold text-xl text-slate-900">{m.name}</div>
          <div className="text-primary font-medium mt-1">{m.role}</div>

          <div className="mt-6 flex gap-3 text-slate-400">
            <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 grid place-items-center hover:bg-primary hover:text-white hover:border-primary transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24"><path d="M6 9h3v10H6zM7.5 5.5A1.5 1.5 0 1 0 7.5 8.5 1.5 1.5 0 1 0 7.5 5.5zm4.5 3.5h2.8v1.4h.04a3.07 3.07 0 0 1 2.76-1.52c2.95 0 3.5 1.94 3.5 4.46V19H18v-3.9c0-.93-.02-2.12-1.29-2.12-1.29 0-1.49 1.01-1.49 2.05V19h-3V9z" fill="currentColor" /></svg>
            </a>
            <a href="#" aria-label="Mail" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 grid place-items-center hover:bg-primary hover:text-white hover:border-primary transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24"><path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M4 8l8 5 8-5" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
