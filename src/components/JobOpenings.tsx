'use client'

import { useState } from 'react'

const MOCK_JOBS = [
    {
        id: 1,
        title: 'Assistant Manager - Audit',
        department: 'Audit & Assurance',
        type: 'Full Time',
        location: 'New Delhi',
        experience: '2-4 Years',
        postedDate: '19-07-2026',
        description: 'Lead audit engagements and ensure compliance with regulatory standards.',
        fullDescription: 'We are looking for an experienced Assistant Manager to join our Audit & Assurance team. You will be responsible for leading audit engagements, managing client relationships, and mentoring junior staff.',
        responsibilities: [
            'Plan and execute audit engagements',
            'Review financial statements and audit files',
            'Ensure compliance with auditing standards',
            'Manage and mentor a team of auditors',
            'Communicate effectively with clients'
        ]
    },
    {
        id: 2,
        title: 'Senior Executive, GST',
        department: 'Tax',
        type: 'Full Time',
        location: 'New Delhi',
        experience: '2-4 Years',
        postedDate: '19-07-2026',
        description: 'Handle end-to-end GST compliance and return preparation for clients.',
        fullDescription: 'We are looking for a Senior Executive for our GST compliance team.',
        responsibilities: [
            'Prepare and file GST returns',
            'Handle GST audits and notices',
            'Advise clients on GST implications',
        ]
    },
    {
        id: 3,
        title: 'Tax Consultant',
        department: 'Tax',
        type: 'Full Time',
        location: 'New Delhi',
        experience: '2-4 Years',
        postedDate: '19-07-2026',
        description: 'Lead audit engagements and ensure compliance with regulatory standards.',
        fullDescription: 'We are seeking a proactive Tax Consultant to provide comprehensive tax planning.',
        responsibilities: [
            'Direct tax compliance and advisory',
            'Represent clients before tax authorities',
            'Keep abreast of tax law changes'
        ]
    },
    {
        id: 4,
        title: 'Tax Consultant',
        department: 'Tax',
        type: 'Full Time',
        location: 'New Delhi',
        experience: '2-4 Years',
        postedDate: '19-07-2026',
        description: 'Lead audit engagements and ensure compliance with regulatory standards.',
        fullDescription: 'We are seeking a proactive Tax Consultant to provide comprehensive tax planning.',
        responsibilities: [
            'Direct tax compliance and advisory',
            'Represent clients before tax authorities',
            'Keep abreast of tax law changes'
        ]
    },
    {
        id: 5,
        title: 'Senior Executive, GST',
        department: 'Tax',
        type: 'Full Time',
        location: 'New Delhi',
        experience: '2-4 Years',
        postedDate: '19-07-2026',
        description: 'Handle end-to-end GST compliance and return preparation for clients.',
        fullDescription: 'We are looking for a Senior Executive for our GST compliance team.',
        responsibilities: [
            'Prepare and file GST returns',
            'Handle GST audits and notices',
            'Advise clients on GST implications',
        ]
    },
    {
        id: 6,
        title: 'Assistant Manager - Audit',
        department: 'Audit & Assurance',
        type: 'Full Time',
        location: 'New Delhi',
        experience: '2-4 Years',
        postedDate: '19-07-2026',
        description: 'Lead audit engagements and ensure compliance with regulatory standards.',
        fullDescription: 'We are looking for an experienced Assistant Manager to join our Audit & Assurance team. You will be responsible for leading audit engagements, managing client relationships, and mentoring junior staff.',
        responsibilities: [
            'Plan and execute audit engagements',
            'Review financial statements and audit files',
            'Ensure compliance with auditing standards',
            'Manage and mentor a team of auditors',
            'Communicate effectively with clients'
        ]
    },
]

const MapPinIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>
)

const ClockIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
)

export function JobOpenings() {
    const [selectedJob, setSelectedJob] = useState<typeof MOCK_JOBS[0] | null>(null)

    return (
        <section className="py-16 md:py-24 bg-[#f8f9fa] min-h-screen">
            <div className="container-prose max-w-6xl mx-auto px-4">
                
                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                    <select className="border border-slate-200 rounded-[8px] px-4 py-2.5 text-[14px] text-slate-500 w-full sm:w-64 bg-white outline-none focus:border-[#f28e2b]">
                        <option value="">Department</option>
                        <option value="audit">Audit & Assurance</option>
                        <option value="tax">Tax</option>
                    </select>
                    <select className="border border-slate-200 rounded-[8px] px-4 py-2.5 text-[14px] text-slate-500 w-full sm:w-64 bg-white outline-none focus:border-[#f28e2b]">
                        <option value="">Location</option>
                        <option value="delhi">New Delhi</option>
                        <option value="mumbai">Mumbai</option>
                    </select>
                </div>

                {/* Job Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {MOCK_JOBS.map((job) => (
                        <div key={job.id} className="bg-[#0b293d] rounded-[12px] p-6 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
                            <h3 className="text-[18px] md:text-[20px] font-medium text-white mb-3">
                                {job.title}
                            </h3>
                            <p className="text-[14px] text-slate-300 leading-relaxed mb-6 font-light">
                                {job.description}
                            </p>
                            
                            <div className="mt-auto">
                                <div className="flex items-center justify-between text-slate-400 text-[13px] mb-8">
                                    <div className="flex items-center">
                                        <MapPinIcon />
                                        {job.location}
                                    </div>
                                    <div className="flex items-center">
                                        <ClockIcon />
                                        {job.experience}
                                    </div>
                                </div>
                                <button 
                                    onClick={() => setSelectedJob(job)}
                                    className="text-[#f28e2b] text-[14px] font-medium hover:text-[#e07b1a] transition-colors flex items-center"
                                >
                                    View Details <span className="ml-1">→</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Job Details Modal */}
            {selectedJob && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
                    <div className="bg-white rounded-[16px] w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
                        {/* Close button */}
                        <button 
                            onClick={() => setSelectedJob(null)}
                            className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        <div className="p-8 md:p-10">
                            {/* Badges */}
                            <div className="flex flex-wrap gap-3 mb-6">
                                <span className="px-4 py-1.5 bg-[#ffecd1] text-[#f28e2b] text-[13px] font-medium rounded-full">
                                    {selectedJob.department}
                                </span>
                                <span className="px-4 py-1.5 bg-[#ffecd1] text-[#f28e2b] text-[13px] font-medium rounded-full">
                                    {selectedJob.type}
                                </span>
                            </div>

                            <h2 className="text-[28px] md:text-[32px] font-bold text-[#0b293d] mb-4">
                                {selectedJob.title}
                            </h2>

                            <div className="flex flex-wrap items-center gap-6 text-[14px] text-slate-500 mb-10 border-b border-slate-100 pb-8">
                                <div className="flex items-center">
                                    <MapPinIcon />
                                    {selectedJob.location}
                                </div>
                                <div className="flex items-center">
                                    <ClockIcon />
                                    Posted {selectedJob.postedDate}
                                </div>
                            </div>

                            <div className="prose prose-slate max-w-none">
                                <h3 className="text-[20px] font-medium text-[#0b293d] mb-3">Job Description</h3>
                                <p className="text-slate-600 font-light leading-relaxed mb-8 text-[15px]">
                                    {selectedJob.fullDescription}
                                </p>

                                <h3 className="text-[20px] font-medium text-[#0b293d] mb-4">Key Responsibilities</h3>
                                <ul className="space-y-3">
                                    {selectedJob.responsibilities.map((resp, i) => (
                                        <li key={i} className="flex items-start text-slate-600 font-light text-[15px]">
                                            <span className="text-slate-400 mr-3 mt-1">•</span>
                                            {resp}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="mt-12 pt-8 border-t border-slate-100">
                                <button className="w-full sm:w-auto px-8 py-3 bg-[#f28e2b] hover:bg-[#e07b1a] text-white font-medium rounded-[8px] transition-colors">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
