import { Button } from './Button'

export function ServiceContact() {
    return (
        <section className="relative py-20 md:py-28 bg-[#003B49] overflow-hidden"> {/* Dark Teal color from screenshot */}
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:32px_32px] opacity-20" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#004d60] to-transparent opacity-50 blur-3xl" />

            <div className="container-prose relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Get In Touch</h2>
                    <p className="text-white/70">Need expert CA Support?</p>
                </div>

                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto">
                    <form className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                            <input type="text" placeholder="Full Name" className="w-full h-12 rounded-md border border-slate-300 px-4 focus:ring-2 focus:ring-[#003B49] outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                            <input type="email" placeholder="Email Address" className="w-full h-12 rounded-md border border-slate-300 px-4 focus:ring-2 focus:ring-[#003B49] outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Phone</label>
                            <input type="tel" placeholder="Phone Number" className="w-full h-12 rounded-md border border-slate-300 px-4 focus:ring-2 focus:ring-[#003B49] outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Service Interest</label>
                            <select className="w-full h-12 rounded-md border border-slate-300 px-4 focus:ring-2 focus:ring-[#003B49] outline-none bg-white">
                                <option>Registration</option>
                                <option>Taxation</option>
                                <option>Advisory</option>
                            </select>
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                            <textarea rows={4} placeholder="Your Message" className="w-full rounded-md border border-slate-300 p-4 focus:ring-2 focus:ring-[#003B49] outline-none resize-none" />
                        </div>

                        <div className="md:col-span-2 mt-4">
                            <Button variant="primary" className="w-full h-12 text-lg font-bold bg-orange-500 hover:bg-orange-600 border-none text-white shadow-md">
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
