import Link from 'next/link'
import { Button } from '@/components/Button'

export function IncorporationHero() {
    return (
        <section className="relative overflow-hidden bg-slate-900 py-20 md:py-32">
            {/* Abstract Background - Consistent Wave Pattern */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-bl from-orange-500/30 via-blue-600/20 to-transparent blur-3xl rounded-full transform translate-x-1/4 -translate-y-1/4" />
                <div className="absolute bottom-0 left-0 w-3/4 h-full bg-gradient-to-tr from-blue-600/30 via-orange-500/20 to-transparent blur-3xl rounded-full transform -translate-x-1/4 translate-y-1/4" />
                {/* Additional geometric accent */}
                <div className="absolute top-10 left-10 w-24 h-24 border border-white/10 rounded-full" />
                <div className="absolute bottom-10 right-10 w-32 h-32 border border-white/5 rounded-full" />
            </div>

            <div className="relative container-prose text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                        Company Incorporation
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                        Company registration is the primary process by which business owners establish or incorporate their company.
                    </p>
                    <div className="mt-8">
                        <Link href="/contact">
                            <Button variant="primary" size="lg" className="bg-orange-500 hover:bg-orange-600 border-none text-white">
                                Book free consultation
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
