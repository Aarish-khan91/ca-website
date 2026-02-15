'use client'
import { useState } from 'react'
import clsx from 'clsx'

export function IncorporationFAQ() {
    const faqs = [
        { q: 'Is it necessary to have an office space?', a: 'Yes, a registered office address is mandatory. It can be a commercial or residential space. We can assist with virtual office solutions if needed.' },
        { q: 'What is the minimum capital required?', a: 'There is no minimum paid-up capital requirement for a Private Limited Company anymore. You can start with any amount.' },
        { q: 'Can a Foreign National be a director?', a: 'Yes, a foreign national can be a director, provided at least one director is an Indian resident.' },
        { q: 'How long does the process take?', a: 'Typically, it takes 10-15 days subject to document availability and government processing time.' },
        { q: 'Do I need to be physically present?', a: 'No, the entire process is online. Documents can be scanned and sent via email.' },
        { q: 'What about GST Registration?', a: 'GST Registration is separate but can be applied for simultaneously or after incorporation based on your needs.' },
    ]

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container-prose max-w-4xl">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 text-center uppercase tracking-wide">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqs.map((item, idx) => (
                        <div key={idx} className="border-b border-slate-100 pb-4">
                            <h4 className="font-semibold text-slate-800 mb-2 cursor-pointer hover:text-orange-500 transition-colors">
                                {item.q}
                            </h4>
                            <p className="text-slate-600 text-sm">{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
