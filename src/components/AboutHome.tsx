import Link from 'next/link'
import { Button } from './Button'

export function AboutHome() {
    return (
        <section className="bg-brand-dark py-20 md:py-28 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:32px_32px] opacity-20" />

            <div className="container-prose relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold">About Ritesh Arora & Associates</h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Text */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-white/90">
                            Your Trusted Chartered Accounting Partner for Growth & Compliance
                        </h3>
                        <p className="text-white/70 text-lg leading-relaxed mb-6">
                            We bring measurable results through expert tax planning, accurate compliance, and strategic financial advisory. With 10+ years of trust, we ensure your business grows on solid foundations.
                        </p>
                        <p className="text-white/70 text-lg leading-relaxed mb-8">
                            Expertise that counts, responsiveness you can rely on.
                        </p>
                        <Link href="/about">
                            <Button variant="primary" className="bg-brand-orange hover:bg-orange-600 text-white font-bold px-8 h-12">
                                Read Our Story →
                            </Button>
                        </Link>
                    </div>

                    {/* Right Column: Why Choose Us Card */}
                    <div className="bg-white text-slate-900 rounded-xl p-8 md:p-10 shadow-2xl">
                        <h3 className="text-2xl font-bold mb-6 text-brand-dark">Why Choose Us?</h3>
                        <ul className="space-y-4">
                            {[
                                '10+ Years of CA Expertise',
                                '2000+ Satisfied Clients & Businesses',
                                '99% Time-bound Compliance Delivery',
                                'Expert Team of 45+ Professionals',
                                'Truly digital, always visible status of work'
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className="shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-brand-orange mt-0.5">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    <span className="font-medium text-slate-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
