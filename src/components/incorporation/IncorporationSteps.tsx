'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/Button'
import clsx from 'clsx'

export function IncorporationSteps() {
    const [activeTab, setActiveTab] = useState(0)

    const steps = [
        {
            id: 'Step 01',
            title: 'Digital Signature Certificate (DSC)',
            content: 'The first step is to obtain the Digital Signature Certificate (DSC) for the proposed Directors. DSC is required for signing the incorporation forms electronically.'
        },
        {
            id: 'Step 02',
            title: 'Director Identification Number (DIN)',
            content: 'DIN is a unique identification number issued by the Ministry of Corporate Affairs to an individual who intends to be a Director of a company.'
        },
        {
            id: 'Step 03',
            title: 'Name Approval',
            content: 'Application for name reservation is made through the RUN (Reserve Unique Name) service. The name should be unique and not similar to existing companies.'
        },
        {
            id: 'Step 04',
            title: 'Incorporation',
            content: 'Filing of SPICe+ form for incorporation along with MOA (Memorandum of Association) and AOA (Articles of Association). Upon approval, CIN is issued.'
        }
    ]

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container-prose">

                {/* Documents Required */}
                <div className="mb-24">
                    <h3 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-blue-600 pl-4">
                        Documents Required for Incorporation
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 shadow-sm">
                            <h4 className="font-bold text-slate-800 mb-6 flex items-center gap-3 text-lg">
                                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 grid place-items-center text-sm font-bold">1</span>
                                For Indian Nationals
                            </h4>
                            <ul className="space-y-4 text-slate-600">
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span>PAN Card (Mandatory)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span>Address Proof (Voter ID / DL / Passport / Aadhar)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span>Latest Bank Statement (Not older than 2 months)</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 shadow-sm">
                            <h4 className="font-bold text-slate-800 mb-6 flex items-center gap-3 text-lg">
                                <span className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 grid place-items-center text-sm font-bold">2</span>
                                For Foreign Nationals
                            </h4>
                            <ul className="space-y-4 text-slate-600">
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span>Passport (Mandatory & Notarized)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span>Address Proof (DL / Bank Statement), Apostilled</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span>Business Visa (If visiting India)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Detailed Procedure (Tabs) */}
                <div className="mb-24">
                    <h3 className="text-2xl font-bold text-slate-900 mb-10 border-l-4 border-blue-600 pl-4">
                        Detailed procedure to Online Application Company Incorporation
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200">
                        {steps.map((step, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                className={clsx(
                                    "px-6 py-3 font-bold text-sm tracking-wide transition-colors rounded-t-lg",
                                    activeTab === idx
                                        ? "bg-slate-900 text-white"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                )}
                            >
                                {step.id}
                            </button>
                        ))}
                    </div>

                    <div className="bg-slate-50 p-8 rounded-b-xl rounded-tr-xl border border-slate-200 min-h-[200px]">
                        <h4 className="text-xl font-bold text-slate-800 mb-4">
                            {steps[activeTab].title}
                        </h4>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            {steps[activeTab].content}
                        </p>
                    </div>
                </div>

                {/* CTA Banner with Illustration */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                            Starting a Business? <br />
                            <span className="text-orange-500">Register Clean & Simple</span>
                        </h3>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            We handle the heavy lifting of bureaucracy so you can focus on building your empire. From name reservation to final incorporation, we are with you at every step.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact">
                                <Button variant="primary">Get a Quote</Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline">Contact Us</Button>
                            </Link>
                        </div>
                    </div>

                    {/* Illustration Placeholder */}
                    <div className="relative h-64 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 grid place-items-center bg-[url('https://placehold.co/600x400/f1f5f9/e2e8f0?text=Business+Meeting')] bg-cover bg-center">
                        <div className="absolute inset-0 bg-slate-900/5"></div>
                    </div>
                </div>

            </div>
        </section>
    )
}
