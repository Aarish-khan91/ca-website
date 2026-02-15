export function InsightsHero() {
    return (
        <section className="relative overflow-hidden bg-slate-900 py-24 md:py-32 lg:py-40">
            {/* Abstract Background - mimicking the wavy lines with gradients */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-bl from-orange-500/30 via-blue-600/20 to-transparent blur-3xl rounded-full transform translate-x-1/4 -translate-y-1/4" />
                <div className="absolute bottom-0 left-0 w-3/4 h-full bg-gradient-to-tr from-blue-600/30 via-orange-500/20 to-transparent blur-3xl rounded-full transform -translate-x-1/4 translate-y-1/4" />
                <div className="absolute inset-0 bg-[url('/_placeholder_waves.png')] mix-blend-overlay opacity-30" />
            </div>

            <div className="relative container-prose">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                        Blog & Success Stories
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
                        Explore expert advice, real-world case studies, and actionable strategies to drive growth and innovation in your business.
                    </p>
                </div>
            </div>
        </section>
    )
}
