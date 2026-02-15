import Link from 'next/link'

export function ServiceGrid() {
    const services = [
        {
            title: 'Company Incorporation',
            desc: 'Register your business with complete documentation, compliance, and startup support.',
            imageColor: 'bg-amber-100', // Placeholder for image
            href: '/services/company-incorporation'
        },
        {
            title: 'GST Registration & Filing',
            desc: 'End-to-end registration, timely filing, reconciliation, and dispute handling.',
            imageColor: 'bg-blue-100',
        },
        {
            title: 'Income Tax Advisory',
            desc: 'Professional tax planning, return filing, and compliance management.',
            imageColor: 'bg-green-100',
        },
        {
            title: 'Accounting & Bookkeeping',
            desc: 'Monthly bookkeeping, financial reporting, and accurate ledger management.',
            imageColor: 'bg-purple-100',
        },
        {
            title: 'Audit & Assurance',
            desc: 'Internal, statutory, and compliance audits with actionable insights and transparency.',
            imageColor: 'bg-rose-100',
        },
        {
            title: 'Business Compliance Management',
            desc: 'ROC, MCA, and statutory compliance management to keep your business protected.',
            imageColor: 'bg-indigo-100',
        },
    ]

    return (
        <section className="py-16 md:py-24 bg-slate-50">
            <div className="container-prose">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Services</h2>
                    <p className="text-slate-600">Expert CA services to support individuals, startups, and enterprises.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((s) => (
                        <div key={s.title} className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-[#0f283d] flex flex-col"> {/* Dark blue card background */}
                            {/* Image Placeholder Area */}
                            <div className={`h-48 w-full ${s.imageColor} relative overflow-hidden`}>
                                <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium bg-slate-200">
                                    Image: {s.title}
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                                    {s.title}
                                </h3>
                                <p className="text-white/70 text-sm mb-6 flex-grow leading-relaxed">
                                    {s.desc}
                                </p>
                                <Link href={s.href || '#'} className="inline-flex items-center text-orange-400 text-sm font-semibold hover:text-orange-300 transition-colors uppercase tracking-wide">
                                    Learn More
                                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
