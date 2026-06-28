'use client'

import { useState } from 'react'
import { getStrapiMedia } from '@/lib/strapi'

interface ProcessSectionProps {
  block: any
}

export function ProcessSection({ block }: ProcessSectionProps) {
  const [activeTabIdx, setActiveTabIdx] = useState(0)
  const tabs = block.tabs || []

  if (tabs.length === 0) return null

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden border-b border-slate-100">
      <div className="relative container-prose px-4 md:px-8 mx-auto max-w-6xl">
        <div className="mb-10 text-left">
          <h2 className="text-[24px] md:text-[28px] font-bold text-[#0b293d] mb-3">
            {block.title}
          </h2>
          {block.subtitle && (
            <p className="text-slate-500 text-[14px] md:text-[15px] max-w-3xl leading-relaxed">
              {block.subtitle}
            </p>
          )}
        </div>

        {/* Tab Switcher */}
        {tabs.length > 1 && (
          <div className="flex gap-4 mb-12 w-full">
            {tabs.map((tab: any, idx: number) => {
              const isActive = activeTabIdx === idx
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTabIdx(idx)}
                  className={`flex-1 py-3.5 rounded-[8px] text-[15px] font-medium border transition-all duration-300 ${isActive
                      ? 'bg-[#0b293d] text-white border-[#0b293d] shadow-md'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                >
                  {tab.tab_name || tab.tabName}
                </button>
              )
            })}
          </div>
        )}

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Illustration */}
          <div className="flex justify-center lg:justify-start">
             {tabs[activeTabIdx]?.tab_image ? (
               <img 
                 src={getStrapiMedia(tabs[activeTabIdx].tab_image.url) || ''} 
                 alt={tabs[activeTabIdx].tabName || 'Process Illustration'} 
                 className="w-full max-w-md object-contain"
               />
             ) : (
               <div className="w-full max-w-md aspect-video bg-slate-100 rounded-xl flex items-center justify-center border border-slate-200 shadow-sm relative overflow-hidden">
                  {/* Simulated Illustration Layout */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="w-full h-full border-4 border-dashed border-slate-300 rounded flex flex-col items-center justify-center text-slate-400">
                      <svg className="w-16 h-16 mb-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="text-sm font-medium">Illustration Placeholder</span>
                    </div>
                  </div>
               </div>
             )}
          </div>

          {/* Right Column: Timeline Steps (Orange Line) */}
          <div className="relative border-l-4 border-[#f28e2b] pl-8 py-2 space-y-6">
            {(tabs[activeTabIdx]?.steps || []).map((step: any, idx: number) => (
              <div key={idx} className="relative group">
                {/* Small indicator dot on the line (optional, but good for UX) */}
                <div className="absolute -left-[38px] top-1.5 w-3 h-3 bg-white border-2 border-[#f28e2b] rounded-full group-hover:bg-[#f28e2b] transition-colors"></div>
                
                <h3 className="text-slate-700 text-[15px] md:text-[16px] font-medium leading-relaxed">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
