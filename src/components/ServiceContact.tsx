import { Button } from './Button'

export interface ServiceContactProps {
  title?: string
}

export function ServiceContact({
  title = "Need Professional Tax or Compliance Help?"
}: ServiceContactProps) {
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
                    <form className="grid md:grid-cols-2 gap-x-8 gap-y-6 ">
                        {/* Row 1 */}
                        <div>
                            <label className="block text-[15px] text-slate-600 mb-2 font-medium">Full Name</label>
                            <input 
                                type="text" 
                                placeholder="Enter your Name" 
                                className="w-full h-[46px] rounded-lg border border-slate-200 px-4 text-[14px] text-slate-700 placeholder-slate-400 focus:ring-1 focus:ring-brand-orange focus:border-brand-orange outline-none transition-colors" 
                            />
                        </div>
                        <div>
                            <label className="block text-[15px] text-slate-600 mb-2 font-medium">Email</label>
                            <input 
                                type="email" 
                                placeholder="Enter your Email" 
                                className="w-full h-[46px] rounded-lg border border-slate-200 px-4 text-[14px] text-slate-700 placeholder-slate-400 focus:ring-1 focus:ring-brand-orange focus:border-brand-orange outline-none transition-colors" 
                            />
                        </div>
                        
                        {/* Row 2 */}
                        <div>
                            <label className="block text-[15px] text-slate-600 mb-2 font-medium">Phone</label>
                            <input 
                                type="tel" 
                                placeholder="Enter your Phone" 
                                className="w-full h-[46px] rounded-lg border border-slate-200 px-4 text-[14px] text-slate-700 placeholder-slate-400 focus:ring-1 focus:ring-brand-orange focus:border-brand-orange outline-none transition-colors" 
                            />
                        </div>
                        <div>
                            <label className="block text-[15px] text-slate-600 mb-2 font-medium">Service Interest</label>
                            <div className="relative">
                                <select 
                                    className="w-full h-[46px] rounded-lg border border-slate-200 pl-4 pr-10 text-[14px] text-slate-500 bg-white focus:ring-1 focus:ring-brand-orange focus:border-brand-orange outline-none transition-colors appearance-none cursor-pointer"
                                    defaultValue=""
                                >
                                    <option value="" disabled>Select a Service</option>
                                    <option value="incorporation" className="text-slate-700">Company Incorporation</option>
                                    <option value="gst" className="text-slate-700">GST Registration</option>
                                    <option value="tax" className="text-slate-700">Tax Advisory</option>
                                    <option value="audit" className="text-slate-700">Audit & Assurance</option>
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
                            <label className="block text-[15px] text-slate-600 mb-2 font-medium">Message</label>
                            <textarea 
                                rows={4} 
                                placeholder="Tell us briefly about your requirement..." 
                                className="w-full rounded-lg border border-slate-200 p-4 text-[14px] text-slate-700 placeholder-slate-400 focus:ring-1 focus:ring-brand-orange focus:border-brand-orange outline-none resize-none transition-colors" 
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="md:col-span-2 mt-2">
                            <Button variant="primary" className="w-full h-[46px] text-[16px] font-medium bg-[#f28e2b] hover:bg-[#e07b1a] border-none text-white rounded-lg shadow-sm transition-colors">
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
