import Link from 'next/link'

export function InsightsHome() {
    const updates = [
        {
            title: 'Complete GST guide for Small Businesses in 2025',
            category: 'Taxation | May 15, 2025',
            imageSrc: '/images/home/Gemini_Generated_Image_jmnkmfjmnkmfjmnk.png',
            href: '/blog/gst-guide-2025'
        },
        {
            title: 'Maximize Your Business Growth: Financial Strategies',
            category: 'Consulting | May 10, 2025',
            imageSrc: '/images/home/Gemini_Generated_Image_ogwk7gogwk7gogwk.png',
            href: '/blog/financial-strategies'
        },
        {
            title: 'Understanding the New Corporate Tax Regime',
            category: 'Accounting | May 02, 2025',
            imageSrc: '/images/home/Gemini_Generated_Image_x34l1ax34l1ax34l.png',
            href: '/blog/corporate-tax-regime'
        }
    ]

    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="container-prose">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-dark">Latest Insights & Updates</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {updates.map((post, idx) => (
                        <div key={idx} className="group rounded-xl overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow bg-white flex flex-col">
                            {/* Image */}
                            <div className="h-56 w-full relative overflow-hidden group-hover:opacity-95 transition-opacity">
                                <img
                                    src={post.imageSrc}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <div className="text-sm text-brand-orange font-semibold mb-3 tracking-wide uppercase">
                                    {post.category}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-brand-orange transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">
                                    Stay updated with the latest trends and regulatory changes impacting your business...
                                </p>
                                <Link href="/blog" className="inline-flex items-center text-brand-dark font-bold hover:text-brand-orange transition-colors uppercase tracking-wide text-sm">
                                    Read More
                                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
