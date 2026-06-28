'use client'
import Link from 'next/link'
import { useState } from 'react'

import { StrapiService, StrapiServiceCategory, StrapiMainModule, StrapiServiceSubcategory } from '@/lib/strapi'

export function Navbar({ 
  mainModules = [],
  categories = [],
  subcategories = [],
  services = []
}: { 
  mainModules?: StrapiMainModule[],
  categories?: StrapiServiceCategory[],
  subcategories?: StrapiServiceSubcategory[],
  services?: StrapiService[] 
}) {
  const [open, setOpen] = useState(false)
  const [activeMainModuleId, setActiveMainModuleId] = useState<number | null>(null)
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null)
  const [activeSubcategoryId, setActiveSubcategoryId] = useState<number | null>(null)
  const [activeServiceId, setActiveServiceId] = useState<number | null>(null)

  // Fallback mock data if the Strapi database is empty (or blocked by 401 error)
  const safeMainModules = mainModules.length > 0 ? mainModules : [{ id: 1, title: 'Mock Module' } as any];
  const safeCategories = categories.length > 0 ? categories : [{ id: 1, mainModule: { id: 1 }, title: '1.2 Direct Tax Services' } as any];
  const safeSubcategories = subcategories.length > 0 ? subcategories : [{ id: 1, category: { id: 1 }, title: '1.1.1 GST Services' } as any];
  const safeServices = services.length > 0 ? services : [
    { id: 1, subcategory: { id: 1 }, title: 'GST Registration & Filing', slug: 'gst-registration' } as any,
    { id: 2, subcategory: { id: 1 }, title: 'Company Incorporation', slug: 'company-incorporation' } as any
  ];

  // 1. Resolve Active Main Module
  const activeMainModule = safeMainModules.find(m => m.id === activeMainModuleId) || safeMainModules[0] || null;

  // 2. Dynamically filter Categories that belong to the Active Main Module
  const activeCategories = safeCategories.filter(c => c.mainModule?.id === activeMainModule?.id);
  const activeCategory = activeCategories.find(c => c.id === activeCategoryId) || activeCategories[0] || null;

  // 3. Dynamically filter Subcategories that belong to the Active Category
  const activeSubcategories = safeSubcategories.filter(s => s.category?.id === activeCategory?.id);
  const activeSubcategory = activeSubcategories.find(s => s.id === activeSubcategoryId) || activeSubcategories[0] || null;

  // 4. Dynamically filter Services that belong to the Active Subcategory
  const activeServices = safeServices.filter(s => s.subcategory?.id === activeSubcategory?.id);
  const activeService = activeServices.find(s => s.id === activeServiceId) || activeServices[0] || null;

  return (
    <header className="fixed w-full top-0 z-50 bg-[#f8f9fa] border-b border-gray-200 shadow-sm">
      <div className="max-w-[1400px] mx-auto py-3 flex items-center justify-between px-4 lg:px-8">

        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex flex-col items-center">
            <div className="text-brand-dark text-xl lg:text-[22px] font-serif leading-none tracking-wide flex items-center">
              <span>RITESH</span>
              <span className="relative flex items-center justify-center w-[20px] h-[24px] mx-[3px] -mt-[2px]">
                <svg viewBox="0 0 24 24" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                  <path d="M12 2 L3 22" stroke="#F19020" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 2 L21 22" stroke="#003B49" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>RORA &</span>
            </div>
            <div className="text-brand-dark text-xl lg:text-[22px] font-serif leading-none tracking-wide mt-1.5">
              ASSOCIATES
            </div>
            <div className="w-full h-[1px] bg-[#F19020] mt-2 mb-1.5 opacity-60"></div>
            <div className="text-[#F19020] text-[9px] lg:text-[10px] tracking-[0.15em] uppercase font-medium">
              Chartered Accountants
            </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-brand-dark p-2 hover:bg-gray-200 rounded-md transition-colors ml-auto"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        </button>

        {/* Middle: Search Bar (Desktop) */}
        <div className="hidden lg:flex items-center flex-1 max-w-[400px] ml-12 xl:ml-20">
          <div className="relative w-full">
            <svg
              width="18" height="18" viewBox="0 0 24 24"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            >
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Pages..."
              className="w-full h-[42px] pl-12 pr-4 bg-transparent border border-gray-400 rounded-full text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-shadow"
            />
          </div>
        </div>

        {/* Right: Nav Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-8 ml-auto">
          <Link href="/" className="text-slate-600 hover:text-brand-dark transition-colors text-[15px]">Home</Link>
          <Link href="/about" className="text-slate-600 hover:text-brand-dark transition-colors text-[15px]">About</Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <Link href="/services" className="text-slate-600 group-hover:text-brand-dark transition-colors text-[15px] flex items-center gap-1 py-4">
              Services
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:rotate-180"><path d="M6 9l6 6 6-6" /></svg>
            </Link>

            <div className="absolute left-1/2 -translate-x-1/2 top-full w-[1100px] max-w-[95vw] bg-white border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
              <div className="flex h-[450px]">
                {/* Column 1: Main Modules */}
                <div className="w-1/4 bg-white border-r border-gray-100 flex flex-col pt-6">
                  <div className="px-6 mb-4 text-[13px] font-bold text-gray-400 tracking-wider uppercase bg-gray-100 mx-4 py-2 rounded">
                    MAIN MODULES
                  </div>
                  <div className="flex-1 overflow-y-auto pb-4">
                    {safeMainModules.map((module, mIdx) => {
                      const isActive = activeMainModule?.id === module.id;
                      return (
                        <div
                          key={module.id || mIdx}
                          onMouseEnter={() => {
                            setActiveMainModuleId(module.id);
                            setActiveCategoryId(null);
                            setActiveSubcategoryId(null);
                            setActiveServiceId(null);
                          }}
                          className={`mx-4 px-4 py-2.5 mb-1 cursor-pointer flex justify-between items-center rounded transition-colors duration-200 ${isActive ? 'bg-gray-800 text-white font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                        >
                          <span className="text-[14px] truncate pr-2">{module.title}</span>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`flex-shrink-0 transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`}><path d="M9 18l6-6-6-6" /></svg>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Column 2: Categories */}
                <div className="w-1/4 bg-white border-r border-gray-100 flex flex-col pt-6">
                  <div className="px-6 mb-4 text-[13px] font-bold text-gray-400 tracking-wider uppercase bg-gray-100 mx-4 py-2 rounded">
                    CATEGORIES
                  </div>
                  <div className="flex-1 overflow-y-auto pb-4">
                    {activeCategories.map((cat, cIdx) => {
                      const isActive = activeCategory?.id === cat.id;
                      return (
                        <div
                          key={cat.id || cIdx}
                          onMouseEnter={() => {
                            setActiveCategoryId(cat.id);
                            setActiveSubcategoryId(null);
                            setActiveServiceId(null);
                          }}
                          className={`mx-4 px-4 py-2.5 mb-1 cursor-pointer flex justify-between items-center rounded transition-colors duration-200 ${isActive ? 'bg-[#e53e3e] text-white font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                        >
                          <span className="text-[14px] truncate pr-2">{cat.title}</span>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`flex-shrink-0 transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`}><path d="M9 18l6-6-6-6" /></svg>
                        </div>
                      )
                    })}
                    {activeCategories.length === 0 && (
                      <div className="px-8 text-gray-400 text-sm italic">No categories</div>
                    )}
                  </div>
                </div>

                {/* Column 3: Subcategories */}
                <div className="w-1/4 bg-white border-r border-gray-100 flex flex-col pt-6">
                  <div className="px-6 mb-4 text-[13px] font-bold text-gray-400 tracking-wider uppercase bg-gray-100 mx-4 py-2 rounded">
                    SUBCATEGORIES
                  </div>
                  <div className="flex-1 overflow-y-auto pb-4">
                    {activeSubcategories.map((sub, sIdx) => {
                      const isActive = activeSubcategory?.id === sub.id;
                      return (
                        <div
                          key={sub.id || sIdx}
                          onMouseEnter={() => {
                            setActiveSubcategoryId(sub.id);
                            setActiveServiceId(null);
                          }}
                          className={`mx-4 px-4 py-2.5 mb-1 cursor-pointer flex justify-between items-center rounded transition-colors duration-200 ${isActive ? 'bg-[#e53e3e] text-white font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                        >
                          <span className="text-[14px] truncate pr-2">{sub.title}</span>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`flex-shrink-0 transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`}><path d="M9 18l6-6-6-6" /></svg>
                        </div>
                      )
                    })}
                    {activeSubcategories.length === 0 && (
                      <div className="px-8 text-gray-400 text-sm italic">No subcategories</div>
                    )}
                  </div>
                </div>

                {/* Column 4: Services */}
                <div className="w-1/4 bg-white flex flex-col pt-6">
                  <div className="px-6 mb-4 text-[13px] font-bold text-gray-400 tracking-wider uppercase bg-gray-100 mx-4 py-2 rounded">
                    SERVICES
                  </div>
                  <div className="flex-1 overflow-y-auto pb-4">
                    {activeServices.map((srv, sIdx) => {
                      const isActive = activeService?.id === srv.id;
                      return (
                        <div
                          key={srv.id || sIdx}
                          onMouseEnter={() => setActiveServiceId(srv.id)}
                          className={`mx-4 px-4 py-2.5 mb-1 cursor-pointer flex justify-between items-center rounded transition-all duration-200 ${isActive ? 'bg-[#f28e2b] text-white font-medium border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]' : 'text-gray-700 hover:bg-gray-50'}`}
                        >
                          <Link href={`/services/${srv.slug}`} className="w-full text-[14px] truncate block">
                            {srv.title}
                          </Link>
                        </div>
                      )
                    })}
                    {activeServices.length === 0 && (
                      <div className="px-8 text-gray-400 text-sm italic">No services</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

      <Link href="/blog" className="text-slate-600 hover:text-brand-dark transition-colors text-[15px]">Blog</Link>
          <Link href="/pricing" className="text-slate-600 hover:text-brand-dark transition-colors text-[15px]">Pricing</Link>
          <Link href="/careers" className="text-slate-600 hover:text-brand-dark transition-colors text-[15px]">Careers</Link>
          <Link href="/contact" className="text-slate-600 hover:text-brand-dark transition-colors text-[15px]">Contact</Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#f8f9fa] border-t border-gray-200 py-4 px-4 flex flex-col gap-4 shadow-lg absolute w-full left-0">
          <div className="relative w-full">
            <svg
              width="18" height="18" viewBox="0 0 24 24"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Pages..."
              className="w-full h-10 pl-12 pr-4 bg-transparent border border-gray-400 rounded-full text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
            />
          </div>
          <Link href="/" className="text-slate-600 hover:text-brand-dark transition-colors px-2 py-1 font-medium" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" className="text-slate-600 hover:text-brand-dark transition-colors px-2 py-1 font-medium" onClick={() => setOpen(false)}>About</Link>

          <div className="flex flex-col">
            <Link href="/services" className="text-slate-600 hover:text-brand-dark transition-colors px-2 py-1 font-medium" onClick={() => setOpen(false)}>Services</Link>
            <div className="pl-4 flex flex-col gap-2 mt-2 border-l-2 border-gray-200 ml-3">
              {displayServices.map((service, idx) => (
                <Link
                  key={idx}
                  href={service.href}
                  className="text-slate-500 hover:text-[#F19020] transition-colors text-[14px] py-1"
                  onClick={() => setOpen(false)}
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/blog" className="text-slate-600 hover:text-brand-dark transition-colors px-2 py-1 font-medium" onClick={() => setOpen(false)}>Blog</Link>
          <Link href="/pricing" className="text-slate-600 hover:text-brand-dark transition-colors px-2 py-1 font-medium" onClick={() => setOpen(false)}>Pricing</Link>
          <Link href="/careers" className="text-slate-600 hover:text-brand-dark transition-colors px-2 py-1 font-medium" onClick={() => setOpen(false)}>Careers</Link>
          <Link href="/contact" className="text-slate-600 hover:text-brand-dark transition-colors px-2 py-1 font-medium" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  )
}
