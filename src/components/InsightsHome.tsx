import Link from 'next/link'

export function InsightsHome() {
    const updates = [
        {
            title: 'Complete GST guide for Small Businesses in 2025',
            category: 'Expert Advice, Industry insights.',
            date: 'Nov 25, 2025',
            excerpt: 'Stay ahead of the curve with emerging trends that are reshaping industries and customer expectations.',
            imageSrc: '/images/home/1.png',
            href: '/blog/gst-guide-2025'
        },
        {
            title: 'How We Helped a Retail Brand Increase Sales by 45%',
            category: 'Success Story',
            date: 'November 19, 2025',
            excerpt: 'AI, automation, and shifting consumer behavior are shaping industries. Stay ahead with these key trends for 2024.',
            imageSrc: '/images/home/2.png',
            href: '/blog/retail-brand-sales'
        },
        {
            title: "From Startup to Scale: A Tech Company's Growth Journey",
            category: 'Success Story',
            date: 'November 03, 2025',
            excerpt: 'Discover how one company navigated rapid growth, scaled operations, and stayed true to its vision.',
            imageSrc: '/images/home/3.png',
            href: '/blog/tech-company-growth'
        }
    ]

    return (
        <section className="py-20 md:py-24 bg-[#f8f9fa]">
            <div className="container-prose max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-[40px] font-bold text-brand-dark tracking-wide">Latest Insights & Updates</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {updates.map((post, idx) => (
                        <div key={idx} className="flex flex-col group">
                            {/* Image */}
                            <Link href={post.href} className="block w-full aspect-[4/5] relative overflow-hidden rounded-[24px] mb-6 shadow-sm">
                                <img
                                    src={post.imageSrc}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </Link>

                            {/* Content */}
                            <div className="flex flex-col px-1">
                                <Link href={post.href}>
                                    <h3 className="text-[22px] font-semibold text-brand-dark mb-4 leading-snug hover:text-brand-orange transition-colors">
                                        {post.title}
                                    </h3>
                                </Link>
                                
                                <div className="space-y-4 mt-1">
                                    <p className="text-slate-700 text-[15px]">
                                        {post.category}
                                    </p>
                                    <p className="text-slate-500 text-[14.5px]">
                                        {post.date}
                                    </p>
                                    <p className="text-slate-500 text-[14.5px] leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
