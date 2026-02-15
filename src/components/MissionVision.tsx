export function MissionVision() {
    return (
        <section className="py-16 md:py-24 bg-white text-slate-900">
            <div className="container-prose">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-12">Our Mission & Vision</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Mission Card */}
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Mission</h3>
                        <p className="text-slate-600 leading-relaxed">
                            To provide businesses with precise financial guidance, accurate compliance, and strategic insights
                            that drive sustainable growth. We strive to be the most trusted partner in your financial journey.
                        </p>
                    </div>

                    {/* Vision Card */}
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Vision</h3>
                        <p className="text-slate-600 leading-relaxed">
                            To empower organizations with financial clarity and trust, leveraging modern technology and
                            deep industry expertise to be the leading advisory firm for forward-thinking businesses.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
