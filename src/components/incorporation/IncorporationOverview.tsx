export function IncorporationOverview() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container-prose">

                {/* Intro Text */}
                <div className="max-w-4xl mx-auto mb-16 text-slate-600 leading-relaxed text-lg">
                    <p className="mb-6">
                        The initial step in building a business is Company Incorporation. New businesses are booming like never before. With the start-up culture booming in the country, more and more people are entering the business world.
                    </p>
                    <p className="mb-6">
                        In India, several types of companies can be incorporated, including Private Limited Company, One Person Company, Limited Liability Partnership, etc.
                    </p>
                    <p>
                        Deciding on the business structure is one of the most crucial decisions a business owner makes. We initiate the process by understanding your business needs and suggesting the best suitable structure.
                    </p>
                </div>

                {/* Process Cards */}
                <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center uppercase tracking-wide">
                    Company Registration Process in India involves 3 Main Steps:
                </h3>
                <div className="grid md:grid-cols-3 gap-6 mb-20">
                    {[
                        { title: 'Select Company', desc: 'Choose the appropriate business entity structure for your needs.', color: 'border-orange-400' },
                        { title: 'Name Approval', desc: 'Apply for name reservation ensuring it is unique and available.', color: 'border-blue-400' },
                        { title: 'Registration', desc: 'File incorporation forms with documents to get the Certificate.', color: 'border-green-400' },
                    ].map((step, idx) => (
                        <div key={idx} className={`bg-white p-6 rounded-lg shadow-sm border-t-4 ${step.color} hover:shadow-md transition-shadow`}>
                            <h4 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                            <ul className="mt-4 space-y-2 text-sm text-slate-500">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                                    Review details
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                                    Consult experts
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Business Entities Chart Placeholder */}
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-10 uppercase tracking-wide">Business Entities in India</h3>

                    {/* Visual representation using CSS shapes to mimic the chart */}
                    <div className="relative w-64 h-64 mx-auto grid place-items-center">
                        {/* Center Circle */}
                        <div className="w-40 h-40 rounded-full border-4 border-orange-300 grid place-items-center bg-white z-10 shadow-lg">
                            <span className="text-orange-500 font-bold text-lg">Business<br />Entities</span>
                        </div>
                        {/* Decorative Orbit */}
                        <div className="absolute inset-0 border-2 border-slate-200 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }}></div>

                        {/* Nodes */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 bg-white px-3 py-1 rounded-full border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm">Pvt Ltd</div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 bg-white px-3 py-1 rounded-full border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm">LLP</div>
                        <div className="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 bg-white px-3 py-1 rounded-full border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm">OPC</div>
                        <div className="absolute right-0 top-1/2 translate-x-4 -translate-y-1/2 bg-white px-3 py-1 rounded-full border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm">Partnership</div>
                    </div>
                </div>

            </div>
        </section>
    )
}
