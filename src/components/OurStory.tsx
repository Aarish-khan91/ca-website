import { Section } from './Section'

export function OurStory() {
    return (
        <section className="py-16 md:py-24 bg-white text-slate-900">
            <div className="container-prose">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-12">Our Story</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="prose prose-lg text-slate-600">
                        <p>
                            Driven by excellence and a steadfast commitment to our clients, we began our journey over a decade ago.
                            What started as a small team dedicated to simplifying tax compliance has grown into a comprehensive
                            advisory firm.
                        </p>
                        <p>
                            Our focus has always been on building long-term relationships based on trust, transparency, and
                            results. We understand that every business is unique, and we tailor our approach to meet the specific
                            challenges and opportunities our clients face.
                        </p>
                    </div>
                    <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden bg-slate-100 shadow-xl">
                        {/* Placeholder for the team image */}
                        <div className="absolute inset-0 bg-slate-200 w-full h-full flex items-center justify-center text-slate-400">
                            Team Image Placeholder
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
