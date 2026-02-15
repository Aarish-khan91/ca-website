import { Button } from './Button'

export function NewsletterCTA() {
    return (
        <section className="py-16 bg-[#0f283d] relative overflow-hidden"> {/* Using specific dark blue from screenshot */}
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:24px_24px] opacity-20" />

            <div className="container-prose relative z-10 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                    Stay Ahead. Subscribe For Expert Insights.
                </h2>

                <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-grow h-12 px-4 rounded-md bg-white text-slate-900 border-none focus:ring-2 focus:ring-primary placeholder-slate-400"
                        required
                    />
                    <Button variant="primary" size="lg" className="h-12 px-8 font-semibold w-full sm:w-auto">
                        Subscribe
                    </Button>
                </form>

                <p className="mt-4 text-xs text-white/60 max-w-lg mx-auto">
                    You can unsubscribe at any time using the link in the footer of our emails. View our Privacy Policy.
                </p>
            </div>

            {/* Floating Icons for decoration */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce duration-[3000ms]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                </div>
            </div>
        </section>
    )
}
