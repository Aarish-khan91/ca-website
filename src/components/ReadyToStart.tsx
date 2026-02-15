import { Button } from './Button'

export function ReadyToStart() {
    return (
        <section className="relative overflow-hidden bg-[#0f283d] py-20 text-center">
            {/* Radial background effect */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-[#0f283d] to-[#0f283d]" />

            <div className="relative container-prose">
                <h2 className="text-3xl md:text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
                <p className="text-white/70 max-w-2xl mx-auto mb-8">
                    Contact us today for a personalized quote or to schedule a consultation with one of our experts.
                </p>
                <Button variant="primary" size="lg" className="px-8 font-semibold bg-orange-400 hover:bg-orange-500 text-black border-none">
                    Book free consultation
                </Button>
            </div>
        </section>
    )
}
