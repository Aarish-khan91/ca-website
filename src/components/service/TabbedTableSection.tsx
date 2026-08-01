'use client'

import { useState } from 'react'

interface TabbedTableSectionProps {
  block: any
}

export function TabbedTableSection({ block }: TabbedTableSectionProps) {
  const [activeTabIdx, setActiveTabIdx] = useState(0)
  const tabs = block.tabs || []

  if (tabs.length === 0) return null

  const activeTab = tabs[activeTabIdx]

  return (
    <section className="bg-white">
      <div className="container-prose px-4 md:px-8 mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#0b293d] mb-4">
            {block.title}
          </h2>
          {block.description && (
            <p className="text-slate-600 text-[15px] md:text-[16px] max-w-3xl mx-auto">
              {block.description}
            </p>
          )}
        </div>

        {/* Tab Buttons (Blue Pills) */}
        <div className="flex flex-wrap justify-center pb-2 gap-3">
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
                {tab.tabName}
              </button>
            )
          })}
        </div>

        {/* Tab Content Box */}
        <div className="bg-white rounded-[8px] shadow-sm transition-all duration-300 overflow-x-auto">
          <div className="p-2">
            <table className="block overflow-x-auto w-full max-w-full border-collapse my-6 min-w-[600px]">
              <thead>
                <tr>
                  {activeTab?.headers?.map((header: any, idx: number) => (
                    <th key={idx} className="bg-[#f28e2b] text-white p-3 border border-slate-200 text-left text-[14px] font-semibold">
                      {header.text}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {activeTab?.rows?.map((row: any, rIdx: number) => (
                  <tr key={rIdx} className="transition-colors even:bg-[#f8f9fa] hover:bg-orange-50/40">
                    {row.cells?.map((cell: any, cIdx: number) => (
                      <td key={cIdx} className="p-3 border border-slate-200 text-black text-[14px]">
                        {cell.text}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
