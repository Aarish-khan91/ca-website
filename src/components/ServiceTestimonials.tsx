export function ServiceTestimonials() {
    const testimonials = [
        {
            quote: "The team handles our filings and compliance with accuracy and on-time delivery. We feel confident and supported.",
            author: "Rahul Mehta",
            role: "Founder, TechStart"
        },
        {
            quote: "From registering our company to setting up compliance, the advisory was clear and helped us avoid early mistakes.",
            author: "Shivangi Verma",
            role: "Startup Owner"
        },
        {
            quote: "Tax planning and filing have been smooth for years. The proactive approach helped me save significantly.",
            author: "Aditya Singh",
            role: "Senior Project Engineer"
        }
    ]

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container-prose text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Client Testimonials</h2>
                <p className="text-slate-600">Real experiences from clients who rely on us for tax compliance and financial advice.</p>
            </div>

            <div className="container-prose grid md:grid-cols-3 gap-8">
                {testimonials.map((t, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow text-left flex flex-col">
                        <div className="flex text-amber-400 mb-4">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <svg key={s} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27l5.18 3.04-1.64-5.81L20 10.9l-6-.52L12 5l-2 5.38-6 .52 4.46 3.6-1.64 5.81z" /></svg>
                            ))}
                        </div>
                        <blockquote className="text-slate-700 italic flex-grow mb-6">
                            "{t.quote}"
                        </blockquote>
                        <div className="mt-auto pt-4 border-t border-slate-100">
                            <div className="font-bold text-slate-900">{t.author}</div>
                            <div className="text-sm text-slate-500">{t.role}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
