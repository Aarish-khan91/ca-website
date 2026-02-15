import clsx from 'clsx'

export function ComparisonTable() {
    const features = [
        { name: 'GST Registration', basic: 'Included', standard: 'Included', premium: 'Included' },
        { name: 'GST Filing', basic: 'Not Included', standard: 'Included', premium: 'Included' },
        { name: 'Income Tax Filing', basic: 'Basic', standard: 'Comprehensive', premium: 'Advanced' },
        { name: 'Accounting & Bookkeeping', basic: 'Not Included', standard: 'Basic', premium: 'Full' },
        { name: 'Payroll & HR Compliance', basic: 'Not Included', standard: 'Not Included', premium: 'Included' },
        { name: 'Audit & Assurance', basic: 'Not Included', standard: 'Not Included', premium: 'Included' },
    ]

    return (
        <section className="py-16 md:py-24 bg-slate-50">
            <div className="container-prose">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10">Plan Comparison</h2>

                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                    <table className="w-full text-left bg-white text-sm">
                        <thead className="bg-[#0f283d] text-white">
                            <tr>
                                <th className="px-6 py-4 font-semibold">Features</th>
                                <th className="px-6 py-4 font-semibold w-1/4">Basic</th>
                                <th className="px-6 py-4 font-semibold w-1/4">Standard</th>
                                <th className="px-6 py-4 font-semibold w-1/4">Premium</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {features.map((f) => (
                                <tr key={f.name} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-slate-900">{f.name}</td>
                                    <td className="px-6 py-4 text-slate-600 font-medium">
                                        <span className={clsx(
                                            f.basic === 'Included' && 'text-emerald-600',
                                            f.basic === 'Not Included' && 'text-slate-400'
                                        )}>{f.basic}</span>
                                    </td>
                                    <td className="px-6 py-4 text-slate-600 font-medium">
                                        <span className={clsx(
                                            f.standard === 'Included' && 'text-emerald-600 md:font-bold',
                                            f.standard === 'Not Included' && 'text-slate-400'
                                        )}>{f.standard}</span>
                                    </td>
                                    <td className="px-6 py-4 text-slate-600 font-medium">
                                        <span className={clsx(
                                            f.premium === 'Included' && 'text-emerald-600 md:font-bold',
                                            f.premium === 'Not Included' && 'text-slate-400'
                                        )}>{f.premium}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
