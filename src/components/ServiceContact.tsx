'use client'
import React, { useState } from 'react'
import { Button } from './Button'

export interface ServiceContactProps {
    title?: string
}

export function ServiceContact({
    title = "Need Professional Tax or Compliance Help?"
}: ServiceContactProps) {
    const [fullName, setFullName] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [phoneInput, setPhoneInput] = useState('')
    const [serviceInterest, setServiceInterest] = useState('')
    const [message, setMessage] = useState('')

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [successMessage, setSuccessMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setErrorMessage('')
        setSuccessMessage('')

        if (!fullName.trim() || !emailInput.trim() || !phoneInput.trim() || !message.trim()) {
            setErrorMessage('Please fill in all required fields.')
            return
        }

        setIsSubmitting(true)

        try {
            const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL

            const payload = {
                data: {
                    fullName,
                    email: emailInput,
                    phone: phoneInput,
                    serviceInterest: serviceInterest,
                    message
                }
            }

            const response = await fetch(`${STRAPI_URL}/api/contact-requests`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })

            if (!response.ok) {
                const errJson = await response.json()
                console.error('Submit error:', errJson)
                throw new Error(errJson?.error?.message || 'Failed to submit contact request')
            }

            setSuccessMessage('Thank you! Your consultation request has been submitted successfully.')

            // Reset fields
            setFullName('')
            setEmailInput('')
            setPhoneInput('')
            setServiceInterest('')
            setMessage('')
        } catch (err: any) {
            console.error(err)
            setErrorMessage(err.message || 'Something went wrong. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="relative py-20 md:py-24 bg-brand-dark overflow-hidden">
            {/* Background Pattern: Sunburst */}
            <div
                className="absolute inset-0 opacity-80"
                style={{
                    backgroundImage: "repeating-conic-gradient(from 0deg at 50% 10%, rgba(255,255,255,0.03) 0deg 2deg, transparent 2deg 4deg)"
                }}
            />

            <div className="container-prose relative z-10 max-w-4xl flex flex-col justify-center items-center mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-[28px] md:text-[36px] font-bold text-white tracking-wide">
                        {title}
                    </h2>
                </div>

                <div className="bg-white max-w-3xl w-full rounded-[20px] p-8 md:p-10 shadow-2xl">
                    {successMessage && (
                        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm font-medium">
                            {successMessage}
                        </div>
                    )}
                    {errorMessage && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm font-medium">
                            {errorMessage}
                        </div>
                    )}
                    <form className="grid md:grid-cols-2 gap-x-8 gap-y-6 " onSubmit={handleSubmit}>
                        {/* Row 1 */}
                        <div>
                            <label className="block text-[15px] text-slate-600 mb-2 font-medium">Full Name <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                placeholder="Enter your Name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                                disabled={isSubmitting}
                                className="w-full h-[46px] rounded-lg border border-slate-200 px-4 text-[14px] text-slate-700 placeholder-slate-400 focus:ring-1 focus:ring-brand-orange focus:border-brand-orange outline-none transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-[15px] text-slate-600 mb-2 font-medium">Email <span className="text-red-500">*</span></label>
                            <input
                                type="email"
                                placeholder="Enter your Email"
                                value={emailInput}
                                onChange={(e) => setEmailInput(e.target.value)}
                                required
                                disabled={isSubmitting}
                                className="w-full h-[46px] rounded-lg border border-slate-200 px-4 text-[14px] text-slate-700 placeholder-slate-400 focus:ring-1 focus:ring-brand-orange focus:border-brand-orange outline-none transition-colors"
                            />
                        </div>

                        {/* Row 2 */}
                        <div>
                            <label className="block text-[15px] text-slate-600 mb-2 font-medium">Phone <span className="text-red-500">*</span></label>
                            <input
                                type="tel"
                                placeholder="Enter your Phone"
                                value={phoneInput}
                                onChange={(e) => setPhoneInput(e.target.value)}
                                required
                                disabled={isSubmitting}
                                className="w-full h-[46px] rounded-lg border border-slate-200 px-4 text-[14px] text-slate-700 placeholder-slate-400 focus:ring-1 focus:ring-brand-orange focus:border-brand-orange outline-none transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-[15px] text-slate-600 mb-2 font-medium">Service Interest</label>
                            <div className="relative">
                                <select
                                    className="w-full h-[46px] rounded-lg border border-slate-200 pl-4 pr-10 text-[14px] text-slate-700 bg-white focus:ring-1 focus:ring-brand-orange focus:border-brand-orange outline-none transition-colors appearance-none cursor-pointer"
                                    value={serviceInterest}
                                    onChange={(e) => setServiceInterest(e.target.value)}
                                    disabled={isSubmitting}
                                >
                                    <option value="" disabled>Select a Service</option>
                                    <option value="Company Incorporation">Company Incorporation</option>
                                    <option value="GST Registration">GST Registration</option>
                                    <option value="Tax Advisory">Tax Advisory</option>
                                    <option value="Audit & Assurance">Audit & Assurance</option>
                                    <option value="Other">Other</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-slate-500">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div className="md:col-span-2">
                            <label className="block text-[15px] text-slate-600 mb-2 font-medium">Message <span className="text-red-500">*</span></label>
                            <textarea
                                rows={4}
                                placeholder="Tell us briefly about your requirement..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                disabled={isSubmitting}
                                className="w-full rounded-lg border border-slate-200 p-4 text-[14px] text-slate-700 placeholder-slate-400 focus:ring-1 focus:ring-brand-orange focus:border-brand-orange outline-none resize-none transition-colors"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="md:col-span-2 mt-2">
                            <Button type="submit" disabled={isSubmitting} variant="primary" className="w-full h-[46px] text-[16px] font-medium bg-[#f28e2b] hover:bg-[#e07b1a] border-none text-white rounded-lg shadow-sm transition-colors disabled:opacity-70 disabled:cursor-not-allowed">
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
