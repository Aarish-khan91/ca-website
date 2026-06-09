'use client'

interface ContactCtaSectionProps {
  block: any
}

export function ContactCtaSection({ block }: ContactCtaSectionProps) {
  return (
    <section id="contact-form-section" className="bg-[#0b293d] py-20 text-white border-b border-slate-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(242,142,43,0.1)_0%,_transparent_40%)] pointer-events-none"></div>

      <div className="relative container-prose px-4 md:px-8 mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side: Call to Action text */}
          <div className="max-w-xl text-left">
            <h2 className="text-[32px] md:text-[42px] font-bold mb-4 leading-tight">
              {block.title}
            </h2>
            {block.subtitle && (
              <p className="text-slate-300 text-[15px] md:text-[17px] mb-8 font-light leading-relaxed">
                {block.subtitle}
              </p>
            )}

            <div className="space-y-4">
              {block.phone && (
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#f28e2b]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[12px] uppercase text-slate-400 block tracking-wider font-semibold">Call Us Direct</span>
                    <a href={`tel:${block.phone}`} className="text-white hover:text-[#f28e2b] transition-colors font-semibold text-[16px] md:text-[18px]">
                      {block.phone}
                    </a>
                  </div>
                </div>
              )}
              {block.email && (
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#f28e2b]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[12px] uppercase text-slate-400 block tracking-wider font-semibold">Email Us Direct</span>
                    <a href={`mailto:${block.email}`} className="text-white hover:text-[#f28e2b] transition-colors font-semibold text-[16px] md:text-[18px]">
                      {block.email}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side: Consultation Form (Orange box) */}
          <div className="bg-[#f28e2b] p-6 md:p-8 rounded-[8px] shadow-2xl text-slate-800">
            <h3 className="text-[#0b293d] font-bold text-[20px] mb-4 text-center">
              Request a Free Consultation
            </h3>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 bg-white rounded border border-orange-400 text-slate-800 text-[14px] outline-none focus:border-[#0b293d] placeholder:text-slate-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 bg-white rounded border border-orange-400 text-slate-800 text-[14px] outline-none focus:border-[#0b293d] placeholder:text-slate-400"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-3 bg-white rounded border border-orange-400 text-slate-800 text-[14px] outline-none focus:border-[#0b293d] placeholder:text-slate-400"
              />
              <select
                className="w-full p-3 bg-white rounded border border-orange-400 text-slate-800 text-[14px] outline-none focus:border-[#0b293d]"
              >
                <option value="">Select Service Needed</option>
                <option value="incorporation">Company Incorporation</option>
                <option value="gst">GST Filing & Advisory</option>
                <option value="tax">Income Tax Advisory</option>
                <option value="audit">Audit & Compliance</option>
              </select>
              <textarea
                placeholder="Briefly describe your requirements..."
                className="w-full p-3 bg-white rounded border border-orange-400 text-slate-800 text-[14px] h-20 outline-none focus:border-[#0b293d] placeholder:text-slate-400 resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 bg-[#0b293d] text-white font-bold text-[14px] rounded hover:bg-slate-900 transition-all duration-300 uppercase tracking-wider shadow-md"
              >
                Submit Request
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
