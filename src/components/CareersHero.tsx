export function CareersHero() {
    return (
        <section className="relative overflow-hidden min-h-[350px] md:min-h-[450px] flex items-center bg-[#0b293d]">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img 
                    src="/images/careers/careers-hero.png" 
                    alt="Careers Background" 
                    className="w-full h-full object-cover object-center"
                />
            </div>

            <div className="container-prose relative z-10 px-4 md:px-8 w-full text-left">
                <div className="max-w-2xl text-left w-full">
                    <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold tracking-tight text-white mb-4">
                        Careers at Ritesh Arora & Associates
                    </h1>
                    <p className="text-[16px] md:text-[20px] text-white/95 max-w-xl leading-relaxed font-normal">
                        Join our growing team of finance, audit, and compliance professionals.
                    </p>
                </div>
            </div>
        </section>
    )
}
