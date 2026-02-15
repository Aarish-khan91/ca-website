import { Button } from './Button'

export function PricingCards() {
    return (
        <section className="py-16 md:py-24 bg-slate-50">
            <div className="container-prose">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 text-center md:text-left">Compliance Packages</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Basic Plan */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold text-slate-700">Basic</h3>
                        <div className="mt-4 flex items-baseline">
                            <span className="text-4xl font-extrabold text-slate-900">$499</span>
                            <span className="ml-1 text-slate-500">/ year</span>
                        </div>

                        <Button variant="secondary" className="mt-8 w-full bg-slate-200 text-slate-900 hover:bg-slate-300">
                            Choose Basic
                        </Button>

                        <ul className="mt-8 space-y-4 flex-1">
                            <li className="flex items-center text-slate-600">
                                <svg className="w-5 h-5 text-slate-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                GST Registration
                            </li>
                            <li className="flex items-center text-slate-600">
                                <svg className="w-5 h-5 text-slate-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                Basic Income Tax Filing
                            </li>
                            <li className="flex items-center text-slate-600">
                                <svg className="w-5 h-5 text-slate-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                Limited Support
                            </li>
                        </ul>
                    </div>

                    {/* Standard Plan */}
                    <div className="bg-white rounded-2xl p-8 shadow-md border border-slate-100 flex flex-col relative transform md:-translate-y-4 hover:shadow-xl transition-shadow">
                        <div className="absolute top-0 right-0 -mt-3 mr-3 px-3 py-1 bg-orange-100 text-orange-600 text-xs font-bold uppercase rounded-full">
                            Recommended
                        </div>
                        <h3 className="text-xl font-bold text-slate-700">Standard</h3>
                        <div className="mt-4 flex items-baseline">
                            <span className="text-4xl font-extrabold text-slate-900">$999</span>
                            <span className="ml-1 text-slate-500">/ year</span>
                        </div>

                        <Button variant="secondary" className="mt-8 w-full bg-slate-200 text-slate-900 hover:bg-slate-300">
                            Choose Standard
                        </Button>

                        <ul className="mt-8 space-y-4 flex-1">
                            <li className="flex items-center text-slate-600">
                                <svg className="w-5 h-5 text-slate-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                GST Registration & Filing
                            </li>
                            <li className="flex items-center text-slate-600">
                                <svg className="w-5 h-5 text-slate-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                Income Tax Filing
                            </li>
                            <li className="flex items-center text-slate-600">
                                <svg className="w-5 h-5 text-slate-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                Priority Support
                            </li>
                            <li className="flex items-center text-slate-600">
                                <svg className="w-5 h-5 text-slate-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                Basic Accounting
                            </li>
                        </ul>
                    </div>

                    {/* Premium Plan */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col hover:shadow-lg transition-shadow">
                        <div className="absolute top-0 right-0 -mt-3 mr-3 px-3 py-1 bg-orange-100 text-orange-600 text-xs font-bold uppercase rounded-full">
                            Best Value
                        </div>
                        <h3 className="text-xl font-bold text-slate-700">Premium</h3>
                        <div className="mt-4 flex items-baseline">
                            <span className="text-4xl font-extrabold text-slate-900">$1999</span>
                            <span className="ml-1 text-slate-500">/ year</span>
                        </div>

                        <Button variant="secondary" className="mt-8 w-full bg-slate-200 text-slate-900 hover:bg-slate-300">
                            Choose Premium
                        </Button>

                        <ul className="mt-8 space-y-4 flex-1">
                            <li className="flex items-center text-slate-600">
                                <svg className="w-5 h-5 text-slate-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                GST Registration & Filing
                            </li>
                            <li className="flex items-center text-slate-600">
                                <svg className="w-5 h-5 text-slate-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                Advanced Tax Filing
                            </li>
                            <li className="flex items-center text-slate-600">
                                <svg className="w-5 h-5 text-slate-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                Dedicated Support
                            </li>
                            <li className="flex items-center text-slate-600">
                                <svg className="w-5 h-5 text-slate-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                Accounting & Payroll
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
