'use client'

export function NewsletterHero() {
    return (
        <section className="bg-[#f8f9fa] pt-24 pb-16 md:pt-32 md:pb-24 text-center px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-[32px] md:text-[46px] lg:text-[52px] font-bold text-[#0b293d] leading-tight mb-6">
                    Subscribe to Our Tax & Compliance<br className="hidden md:block" /> Updates
                </h1>
                <p className="text-[16px] md:text-[20px] text-slate-700 max-w-3xl mx-auto mb-12 font-medium">
                    Stay informed about GST changes, tax deadlines, compliance alerts, and<br className="hidden md:block" /> financial insights, delivered directly to your inbox.
                </p>

                <form className="flex flex-col sm:flex-row items-center justify-center max-w-2xl mx-auto gap-4" onSubmit={(e) => e.preventDefault()}>
                    <input 
                        type="email" 
                        placeholder="Your Email Address" 
                        className="w-full sm:w-[400px] px-6 py-3.5 rounded-[6px] border border-slate-200 outline-none focus:border-[#f28e2b] text-[15px] shadow-sm"
                        required
                    />
                    <button 
                        type="submit" 
                        className="w-full sm:w-auto px-10 py-3.5 bg-[#f28e2b] hover:bg-[#e07b1a] text-white font-medium rounded-[6px] transition-colors shadow-sm whitespace-nowrap"
                    >
                        Subscribe Now
                    </button>
                </form>
            </div>
        </section>
    )
}
