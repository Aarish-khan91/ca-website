'use client'
import { useState } from 'react'
import clsx from 'clsx'

export function FAQ() {
    const faqs = [
        {
            q: 'What factors influence the cost of your services?',
            a: 'The cost of our services depends on the complexity of your financial situation, the scope of work required, and the specific services you choose. We offer transparent pricing and will provide a detailed quote tailored to your needs.'
        },
        {
            q: 'Do you offer customized pricing for specific needs?',
            a: 'Yes, we understand every business is unique. We are happy to discuss a custom package that aligns perfectly with your requirements and budget.'
        },
        {
            q: 'How do I get a detailed quote for my requirements?',
            a: 'Simply click the "Book free consultation" button below or contact us directly. Our experts will assess your needs and provide a comprehensive quote.'
        },
    ]

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container-prose">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10">Frequently Asked Questions</h2>

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
        <div className="border border-slate-200 rounded-lg overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-slate-50 text-left transition-colors"
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
                    "px-6 text-slate-600 bg-slate-50 transition-all duration-300 ease-in-out border-t border-slate-100",
                    isOpen ? "max-h-48 py-4 opacity-100" : "max-h-0 py-0 opacity-0 overflow-hidden border-none"
                )}
            >
                {answer}
            </div>
        </div>
    )
}
