import { Button } from './Button'

export function ContactContent() {
    return (
        <section className="py-16 md:py-24 bg-slate-50">
            <div className="container-prose">
                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Left Column: Info & Map */}
                    <div className="space-y-8">
                        {/* Map Placeholder */}
                        <div className="w-full h-80 bg-slate-200 rounded-xl overflow-hidden shadow-sm relative border border-slate-300">
                            <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                                {/* Simulating a map view */}
                                <div className="text-center">
                                    <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                    </svg>
                                    Map Preview (Delhi / Noida)
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Office Address</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Ritesh Arora & Associates<br />
                                    XYZ Tower, 2nd Floor<br />
                                    Sector - 20, New Delhi, 110001<br />
                                    India
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Contact Details</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    <a href="mailto:info@ritesharoraassociates.com" className="hover:text-primary transition-colors">info@ritesharoraassociates.com</a><br />
                                    <a href="tel:+919876512345" className="hover:text-primary transition-colors">+91 98765 12345</a>
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Office Hours</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Mon–Sat: 10:00 AM – 7:00 PM<br />
                                    Sunday: Closed
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Consultation Form */}
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Request a Consultation</h2>
                        <p className="text-slate-500 mb-8">We'll get back to you within 24 hours.</p>

                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                <input type="text" placeholder="Full Name" className="w-full h-12 rounded-lg border border-slate-300 px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Email <span className="text-red-500">*</span></label>
                                <input type="email" placeholder="Email" className="w-full h-12 rounded-lg border border-slate-300 px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow" required />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Phone <span className="text-red-500">*</span></label>
                                <input type="tel" placeholder="Phone" className="w-full h-12 rounded-lg border border-slate-300 px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow" required />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Service Interest</label>
                                <select className="w-full h-12 rounded-lg border border-slate-300 px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow bg-white">
                                    <option>Select a Service</option>
                                    <option>GST Registration & Filing</option>
                                    <option>Income Tax Filing</option>
                                    <option>Company Incorporation</option>
                                    <option>Audit & Assurance</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                <textarea rows={4} placeholder="Tell us briefly about your requirement..." className="w-full rounded-lg border border-slate-300 p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow resize-none" />
                            </div>

                            {/* File Upload Placeholder - styling it to match screenshot */}
                            <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center cursor-pointer hover:bg-slate-50 transition-colors group">
                                <div className="text-sm text-slate-500 group-hover:text-slate-700">
                                    Upload a file (PDF, JPG, PNG upto 5MB)
                                </div>
                            </div>

                            <Button variant="primary" className="w-full h-12 text-lg font-semibold shadow-md bg-orange-400 hover:bg-orange-500 border-none text-white">
                                Submit
                            </Button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}
