export function MissionVision() {
    const cards = [
        {
            title: 'Mission',
            iconBg: 'bg-blue-100',
            imageSrc: '/images/about/about-mission.png',
            content: `To provide accurate, transparent, and reliable financial, tax, and compliance services that empower individuals, startups, and businesses to operate with confidence.\nWe aim to simplify complex regulatory processes, deliver structured guidance, and ensure every client meets their statutory obligations on time—every time.\nOur mission is rooted in integrity, professional ethics, and a client-first approach, ensuring that every engagement is handled with precision, clarity, and long-term value creation.`
        },
        {
            title: 'Vision',
            iconBg: 'bg-orange-100',
            imageSrc: '/images/about/about-vision.png',
            content: `To provide accurate, transparent, and reliable financial, tax, and compliance services that empower individuals, startups, and businesses to operate with confidence.\nWe aim to simplify complex regulatory processes, deliver structured guidance, and ensure every client meets their statutory obligations on time—every time.\nOur mission is rooted in integrity, professional ethics, and a client-first approach, ensuring that every engagement is handled with precision, clarity, and long-term value creation.`
        }
    ]

    return (
        <section className="py-16 md:py-24 bg-white text-slate-900">
            <div className="container-prose">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-12">Our Mission & Vision</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {cards.map((card, idx) => (
                        <div key={idx} className="p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className={`w-12 h-12 ${card.iconBg} rounded-xl flex items-center justify-center mb-6 overflow-hidden`}>
                                <img 
                                    src={card.imageSrc} 
                                    alt={`About Ritesh Arora & Associates - ${card.title}`} 
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                            <p className="text-slate-600 leading-relaxed whitespace-pre-wrap">
                                {card.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
