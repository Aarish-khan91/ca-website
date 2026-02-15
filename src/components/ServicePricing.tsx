import { Section } from './Section'

export function ServicePricing() {
    const services = [
        { name: 'GST Services', price: 'Starting from $50', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
        { name: 'Company Incorporation', price: 'Starting from $100', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
        { name: 'Income Tax Filing', price: 'Starting from $50', icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
        { name: 'Accounting & Bookkeeping', price: 'Starting from $100', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' },
        { name: 'Audit & Assurance', price: 'Starting from $150', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' }, // Check Icon
        { name: 'Management Advisory', price: 'Starting from $200', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' }, // Sheild Check
    ]

    const addons = [
        { name: 'Advanced Tax Planning', description: 'Tailored strategies to minimize your tax liabilities.' },
        { name: 'Financial Forecasting', description: 'Projections and analysis to guide your financial decisions.' },
        { name: 'Business Valuation', description: 'Determine the fair market value of your business.' },
    ]

    return (
        <div className="bg-slate-50 pb-16 md:pb-24">
            {/* Service-Specific Pricing */}
            <section className="container-prose mb-16 md:mb-24">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Service-Specific Pricing</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {services.map((s) => (
                        <div key={s.name} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-8 h-8 text-slate-600 mb-4">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                                </svg>
                            </div>
                            <div className="font-semibold text-slate-900 text-sm leading-tight">{s.name}</div>
                            <div className="text-xs text-slate-500 mt-1">{s.price}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Add-On Services */}
            <section className="container-prose">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Add-On Services</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {addons.map((a) => (
                        <div key={a.name} className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm flex flex-col hover:shadow-md transition-shadow">
                            <div className="w-8 h-8 text-primary mb-4">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-slate-900 text-lg mb-2">{a.name}</h3>
                            <p className="text-slate-600 text-sm">{a.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
