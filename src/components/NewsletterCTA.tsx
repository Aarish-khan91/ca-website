import { getBlogSubscribe } from '@/lib/strapi'
import Link from 'next/link'
import { NewsletterForm } from './NewsletterForm'

export async function NewsletterCTA() {
    const subscribeData = await getBlogSubscribe()

    const title = subscribeData?.subscribeTitle
    const placeholder = subscribeData?.subscribePlaceholder
    const buttonText = subscribeData?.subscribeButtonText
    const disclaimer = subscribeData?.subscribeDisclaimer
    const privacyText = subscribeData?.privacyPolicyLinkText
    const privacyUrl = subscribeData?.privacyPolicyLinkUrl

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
                    {title}
                </h2>

                {/* Form and Disclaimer Horizontal Layout */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 max-w-5xl mx-auto">
                    <NewsletterForm placeholder={placeholder} buttonText={buttonText} />

                    {/* Disclaimer Text */}
                    <p className="text-[13px] text-white/80 max-w-sm leading-relaxed text-center lg:text-left">
                        {disclaimer}{" "}
                        {privacyUrl ? (
                            <Link href={privacyUrl} className="underline cursor-pointer hover:text-white transition-colors">
                                {privacyText}
                            </Link>
                        ) : (
                            <span className="underline cursor-pointer hover:text-white transition-colors">{privacyText}</span>
                        )}
                    </p>
                </div>
            </div>
        </section>
    )
}
