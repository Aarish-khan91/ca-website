'use client'

import { useState } from 'react'

export function TabbedRichText() {
  const [activeTabIdx, setActiveTabIdx] = useState(0)
  const title = "Service Details"
  const subtitle = "Explore the different aspects of our service"
  const tabs = [
    { tabName: "Overview", content: "<p>General overview of the service scope.</p>" },
    { tabName: "Requirements", content: "<p>Documents and prerequisites needed.</p>" },
    { tabName: "Deliverables", content: "<p>What you will receive at the end of the process.</p>" }
  ]

  if (tabs.length === 0) return null

  return (
    <section className="bg-white py-16 md:py-24 border-b border-slate-100">
      <div className="container-prose px-4 md:px-8 mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#0b293d] mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-slate-600 text-[15px] md:text-[16px] max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Tab Buttons (Blue Pills) */}
        <div className="flex flex-wrap justify-center border-b border-slate-200 pb-5 mb-8 gap-3">
          {tabs.map((tab: any, idx: number) => {
            const isActive = activeTabIdx === idx
            return (
              <button
                key={idx}
                onClick={() => setActiveTabIdx(idx)}
                className={`px-6 py-2.5 rounded-full text-[14px] font-semibold transition-all duration-300 border ${isActive
                  ? 'bg-[#0b293d] text-white border-[#0b293d] shadow-sm'
                  : 'bg-slate-50 text-[#0b293d] border-slate-200 hover:bg-slate-100'
                  }`}
              >
                {tab.tab_name || tab.tabName}
              </button>
            )
          })}
        </div>

        {/* Tab Content Box */}
        <div className="bg-white p-2 rounded-[8px] border border-slate-100 shadow-sm transition-all duration-300 overflow-x-auto">
          <div
            className="prose max-w-none text-slate-700 leading-relaxed text-[14px] md:text-[15px] p-2 md:p-6
                       [&_table]:w-full [&_table]:border-collapse [&_table]:my-6 [&_table]:min-w-[600px]
                       [&_th]:bg-[#f28e2b] [&_th]:text-white [&_th]:p-3 [&_th]:border [&_th]:border-slate-200 [&_th]:text-left [&_th]:text-[14px] [&_th]:font-semibold
                       [&_td]:p-3 [&_td]:border [&_td]:border-slate-200 [&_td]:text-[14px] [&_tr:nth-child(even)]:bg-[#f8f9fa] [&_tr:hover]:bg-orange-50/40 [&_tr]:transition-colors"
            dangerouslySetInnerHTML={{ __html: tabs[activeTabIdx]?.content || '' }}
          />
        </div>
      </div>
    </section>
  )
}
