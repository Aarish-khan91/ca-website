export function Stats() {
  const stats = [
    { label: 'Years of Experience', value: '10+' },
    { label: 'Clients Served', value: '2000+' },
    { label: 'Qualified Professionals', value: '44+' },
    { label: 'Industries Served', value: '25+' },
  ]
  return (
    <div className="bg-brand-orange py-12">
      <div className="container-prose">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-lg p-6 text-center shadow-lg transform hover:-translate-y-1 transition-transform">
              <div className="text-4xl font-bold text-brand-orange">{s.value}</div>
              <div className="mt-1 text-slate-800 font-medium text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
