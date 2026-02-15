import { Button } from './Button'
import Link from 'next/link'

export function ServiceHero() {
    return (
        <section className="relative overflow-hidden h-[500px] flex items-center">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 bg-slate-900">
                {/* In a real app, this would be an <Image> component */}
                <div className="absolute inset-0 bg-[url('/_placeholder_meeting.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
            </div>

            <div className="relative container-prose">
                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                        Our Professional CA Services
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                        Expert guidance along with accuracy, transparency, and long-term value.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/contact">
                            <Button variant="primary" size="lg" className="bg-orange-500 hover:bg-orange-600 text-white border-none">
                                Book free consultation
                            </Button>
                        </Link>
                        <Link href="/services">
                            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                                View Core Services
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
