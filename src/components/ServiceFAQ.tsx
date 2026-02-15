'use client'
import { useState } from 'react'
import clsx from 'clsx'

export function ServiceFAQ() {
    const faqs = [
        {
            q: 'What documents are required for GST filing?',
            a: 'You generally need your sales and purchase invoices, bank statements, and details of input tax credit. Specific requirements may vary based on your business type.'
        },
        {
            q: 'How does tax residency work?',
            a: 'Tax residency depends on the number of days you reside in India during a financial year. We can help you determine your status and applicable tax liabilities.'
        },
        {
            q: 'When should I file my returns?',
            a: 'Due dates vary for different returns (GST, Income Tax, TDS). Missing deadlines can lead to penalties. We monitor these dates and ensure timely compliance for you.'
        },
        {
            q: 'Do you handle notices?',
            a: 'Yes, we provide end-to-end support for handling tax notices, drafting responses, and representing you before tax authorities.'
        },
        {
            q: 'Can you manage my payroll needs?',
            a: 'Absolutely. We offer comprehensive payroll services including salary processing, TDS deduction, and issuing Form 16 to employees.'
        },
    ]

    return (
        <section className="py-16 md:py-24 bg-slate-50">
            <div className="container-prose max-w-4xl">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>

                <div className="space-y-4">
                    {faqs.map((item, idx) => (
                        <Accordion key={idx} question={item.q} answer={item.a} isOpen={idx === 0} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function Accordion({ question, answer, isOpen: initialOpen }: { question: string, answer: string, isOpen?: boolean }) {
    const [isOpen, setIsOpen] = useState(initialOpen || false)

    return (
        <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-6 py-4 hover:bg-slate-50 text-left transition-colors"
            >
                <span className="font-semibold text-slate-800">{question}</span>
                <svg
                    className={clsx("w-5 h-5 text-slate-400 transition-transform duration-200", isOpen ? "transform rotate-180" : "")}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div
                className={clsx(
                    "px-6 text-slate-600 bg-white transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-48 pb-6 opacity-100" : "max-h-0 py-0 opacity-0 overflow-hidden"
                )}
            >
                {answer}
            </div>
        </div>
    )
}
