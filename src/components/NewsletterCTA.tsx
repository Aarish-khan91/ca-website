import { Button } from './Button'

export function NewsletterCTA() {
    return (
        <section className="relative py-12 md:py-16 bg-[#0a2e3b] overflow-hidden border-t border-slate-800">
            {/* Background Pattern: Sunburst radiating from the bottom center */}
            <div
                className="absolute inset-0 opacity-90"
                style={{
                    backgroundImage: "repeating-conic-gradient(from 270deg at 50% 130%, rgba(255,255,255,0.04) 0deg 1.5deg, transparent 1.5deg 3deg)"
                }}
            />

            <div className="relative z-10 max-w-6xl mx-auto px-4">
                {/* Heading */}
                <h2 className="text-[24px] md:text-[32px] font-bold text-white mb-6 md:mb-8 tracking-tight text-center">
                    Stay Ahead. Subscribe For Expert Insights.
                </h2>

                {/* Form and Disclaimer Horizontal Layout */}
                <form className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 max-w-5xl mx-auto">
                    {/* Input & Button Container */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full sm:w-[285px] md:w-[320px] h-[48px] px-5 rounded-[8px] bg-white text-slate-800 placeholder-slate-400 focus:outline-none text-[15px] shadow-inner"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full sm:w-auto h-[48px] px-8 bg-[#F19020] hover:bg-[#D87F1C] text-white font-medium rounded-[8px] transition-colors whitespace-nowrap text-[15px] shadow-sm focus:outline-none"
                        >
                            Subscribe
                        </button>
                    </div>

                    {/* Disclaimer Text */}
                    <p className="text-[13px] text-white/80 max-w-sm leading-relaxed text-center lg:text-left">
                        You can unsubscribe at any time using the link in the footer of our emails. <span className="underline cursor-pointer hover:text-white transition-colors">View our Privacy Policy</span>.
                    </p>
                </form>
            </div>
        </section>
    )
}
