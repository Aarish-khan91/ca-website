export function NewsletterFeatures() {
    const features = [
        {
            title: 'Expert Analysis',
            description: 'Deep dives into the latest financial regulations and their impact on your business.',
            icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
        },
        {
            title: 'Timely Updates',
            description: 'Be the first to know about important deadlines, legislative changes, and industry news.',
            icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
        },
        {
            title: 'Compliance Alerts',
            description: 'Receive critical notifications to ensure your business remains fully compliant.',
            icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
        }
    ]

    return (
        <section className="bg-[#f8f9fa] pb-24 px-4">
            <div className="container-prose max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-[28px] md:text-[36px] font-bold text-[#0b293d] mb-4">
                        Why Subscribe to Our Newsletter?
                    </h2>
                    <p className="text-slate-600 text-[15px] md:text-[16px]">
                        We provide concise, actionable information to help you stay compliant and informed.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-20">
                    {features.map((feature, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-[12px] shadow-sm flex flex-col hover:shadow-md transition-shadow">
                            <div className="w-8 h-8 text-[#0b293d] mb-6">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                                </svg>
                            </div>
                            <h3 className="text-[18px] font-medium text-[#0b293d] mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-slate-500 text-[14px] leading-relaxed mb-8 flex-1 font-light">
                                {feature.description}
                            </p>
                            <a href="#" className="text-[#f28e2b] text-[14px] font-medium hover:text-[#e07b1a] transition-colors flex items-center mt-auto">
                                Learn More <span className="ml-1">→</span>
                            </a>
                        </div>
                    ))}
                </div>

                <div className="max-w-3xl mx-auto text-center border-t border-slate-200 pt-10">
                    <p className="text-[13px] text-slate-500 mb-2 font-light">
                        We respect your privacy and will never share your email. Unsubscribe at any time.
                    </p>
                    <p className="text-[13px] text-slate-500 font-light">
                        Please check your inbox to confirm your subscription. This ensures we have the correct email for you.
                    </p>
                </div>
            </div>
        </section>
    )
}
