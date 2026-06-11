'use client'

import { useState } from 'react'

export function ServiceFaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const faqs = [
    { question: "How long does the process take?", answer: "The timeline depends on the specific service, but typically takes 7-15 business days." },
    { question: "What documents are required?", answer: "Basic KYC documents along with service-specific forms. We will provide you with a comprehensive checklist before we start." },
    { question: "Are there any hidden charges?", answer: "No, our pricing is transparent and completely upfront." }
  ]

  if (!faqs || faqs.length === 0) return null

  return (
    <section className="py-16 md:py-24 bg-[#f8f9fa] border-t border-slate-100">
      <div className="container-prose px-4 md:px-8 mx-auto max-w-4xl">
        <h2 className="text-[28px] md:text-[36px] font-bold text-[#0b293d] mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div key={idx} className="bg-white rounded-[8px] shadow-sm border border-slate-100 overflow-hidden transition-all duration-300">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-[#0b293d] font-semibold text-[15px] md:text-[16px]">
                    {faq.question}
                  </span>
                  <span className={`text-[#f28e2b] text-[20px] font-bold transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[500px]' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 pt-0 border-t border-slate-50 text-slate-600 text-[14px] md:text-[15px] leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
