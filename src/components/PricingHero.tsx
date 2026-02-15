export function PricingHero() {
    return (
        <section className="relative overflow-hidden bg-slate-900 py-20 md:py-28">
            {/* Abstract Background - mimicking the wavy lines with gradients */}
            <div className="absolute inset-0 opacity-50">
                <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-bl from-orange-500/30 via-blue-600/20 to-transparent blur-3xl rounded-full transform translate-x-1/4 -translate-y-1/4" />
                <div className="absolute bottom-0 left-0 w-3/4 h-full bg-gradient-to-tr from-blue-600/30 via-orange-500/20 to-transparent blur-3xl rounded-full transform -translate-x-1/4 translate-y-1/4" />
            </div>

            <div className="relative container-prose text-center md:text-left">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                        Pricing
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
                        Flexible pricing designed around your business needs transparent, fair, and fully compliant.
                    </p>
                </div>
            </div>
        </section>
    )
}
