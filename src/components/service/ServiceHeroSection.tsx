
export function ServiceHeroSection() {
  const title = "Professional Services"
  const subtitle = "Expert guidance and comprehensive solutions for your business."
  const bgUrl = "/images/services/Gemini_Generated_Image_f9dqq0f9dqq0f9dq 2 (1).png"

  return (
    <section className="relative overflow-hidden h-[400px] md:h-[450px] flex items-center bg-[#0b293d]">
      {/* Wave Background Pattern */}
      <div className="absolute inset-0">
        <img
          src={bgUrl}
          alt={title}
          className="w-full h-full object-cover object-center mix-blend-overlay opacity-30"
        />
        {/* Abstract blue/orange light mesh overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b293d]/90 via-[#0b293d]/50 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(242,142,43,0.15)_0%,_transparent_50%)]"></div>
      </div>

      <div className="relative container-prose px-4 md:px-8 mx-auto max-w-6xl w-full">
        <div className="max-w-3xl">
          <h1 className="text-[36px] md:text-[48px] lg:text-[54px] font-bold tracking-tight text-white mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-[15px] md:text-[18px] text-slate-200 leading-relaxed font-light max-w-2xl">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}
