'use client'

import { useState } from 'react'

interface ProcessSectionProps {
  block: any
}

export function ProcessSection({ block }: ProcessSectionProps) {
  const [activeTabIdx, setActiveTabIdx] = useState(0)
  const tabs = block.tabs || []

  if (tabs.length === 0) return null

  return (
    <section className="relative py-16 md:py-24 bg-[#0b293d] overflow-hidden text-white border-b border-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
        <div className="w-[150%] h-[150%] opacity-20" style={{ backgroundImage: 'repeating-conic-gradient(from 0deg, transparent 0deg 10deg, rgba(255,255,255,0.1) 10deg 20deg)' }}></div>
      </div>

      <div className="relative container-prose px-4 md:px-8 mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-4">
            {block.title}
          </h2>
          {block.subtitle && (
            <p className="text-slate-300 text-[14px] md:text-[15px] font-light max-w-2xl mx-auto">
              {block.subtitle}
            </p>
          )}
        </div>

        {/* Tab Switcher (Blue/Orange Pills) */}
        {tabs.length > 1 && (
          <div className="flex justify-center border-b border-slate-700 pb-5 mb-10 gap-3">
            {tabs.map((tab: any, idx: number) => {
              const isActive = activeTabIdx === idx
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTabIdx(idx)}
                  className={`px-6 py-2.5 rounded-full text-[14px] font-semibold border transition-all duration-300 ${
                    isActive
                      ? 'bg-[#f28e2b] text-white border-[#f28e2b] shadow-md'
                      : 'bg-slate-800/50 text-slate-300 border-slate-700 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {tab.tab_name || tab.tabName}
                </button>
              )
            })}
          </div>
        )}

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          
          {/* Left Column: Timeline Steps */}
          <div className="lg:col-span-3 space-y-6 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-[2px] before:bg-slate-700/50">
            {(tabs[activeTabIdx]?.steps || []).map((step: any, idx: number) => (
              <div key={idx} className="relative pl-12 flex gap-4 transition-all duration-300 group">
                {/* Step Circle Indicator */}
                <div className="absolute left-3 -translate-x-1/2 bg-[#f28e2b] text-white font-bold text-[14px] w-8 h-8 rounded-full flex items-center justify-center shadow-md border-2 border-[#0b293d] group-hover:scale-110 transition-transform duration-300">
                  {idx + 1}
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-[8px] flex-1 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <h3 className="text-white text-[16px] md:text-[18px] font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-slate-300 text-[13px] md:text-[14px] font-light mt-1.5 leading-relaxed">
                    We manage the complete compilation, verification, and filing processes for this stage.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: CTA & Documents Sidecard */}
          <div className="lg:col-span-2">
            <div className="bg-white text-slate-800 p-6 md:p-8 rounded-[8px] shadow-2xl border border-slate-100 flex flex-col">
              <h3 className="text-[#0b293d] text-[18px] md:text-[20px] font-bold mb-3">
                Get Started Today
              </h3>
              <p className="text-slate-600 text-[13px] md:text-[14px] leading-relaxed mb-6 font-light">
                Complete your registration journey efficiently with our dedicated CA assistance.
              </p>

              <div className="flex flex-col gap-3 mb-6">
                <button 
                  onClick={() => {
                    const el = document.getElementById('contact-form-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-3 bg-[#0b293d] text-white font-semibold text-[14px] rounded-[4px] hover:bg-[#f28e2b] transition-all duration-300 text-center shadow-sm"
                >
                  Start Registration
                </button>
                <a 
                  href="#contact-form-section"
                  className="w-full py-3 border border-[#0b293d] text-[#0b293d] font-semibold text-[14px] rounded-[4px] hover:bg-slate-50 transition-all duration-300 text-center"
                >
                  Download Info Guide
                </a>
              </div>

              <div className="border-t border-slate-100 pt-6">
                <h4 className="text-[#0b293d] text-[14px] font-bold mb-4 uppercase tracking-wider">
                  Required Documents Checklist
                </h4>
                <ul className="space-y-3">
                  {[
                    'PAN cards of all proposed directors/partners',
                    'Aadhaar cards / Passport / Voter ID proof',
                    'Electricity bill or utility statement of registered office',
                    'NOC from the property owner'
                  ].map((doc, i) => (
                    <li key={i} className="flex gap-3 items-start text-slate-600 text-[13px] leading-relaxed font-light">
                      <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
