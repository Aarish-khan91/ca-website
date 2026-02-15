export function TrustedBy() {
  const logos = [
    { name: 'Agency One' },
    { name: 'GovDept' },
    { name: 'Industry Board' },
  ]
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 items-center">
      {logos.map((l) => (
        <div
          key={l.name}
          className="h-20 rounded-lg border border-slate-200 bg-white grid place-items-center text-slate-400 grayscale hover:grayscale-0 transition-all shadow-sm"
        >
          <div className="w-24 h-8 bg-slate-200 rounded" />
        </div>
      ))}
    </div>
  )
}
