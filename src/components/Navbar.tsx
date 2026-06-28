'use client'
import Link from 'next/link'
import { useState } from 'react'

import { StrapiService, StrapiMainModule } from '@/lib/strapi'

export function Navbar({ services = [], mainModules = [] }: { services?: StrapiService[], mainModules?: StrapiMainModule[] }) {
  const [open, setOpen] = useState(false)
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null)
  const [activeSubcategoryId, setActiveSubcategoryId] = useState<number | null>(null)
  const [activeServiceId, setActiveServiceId] = useState<number | null>(null)

  // Resolve active items hierarchically
  const module = mainModules && mainModules.length > 0 ? mainModules[0] : null;
  const categories = module?.categories || [];
  
  const activeCategory = categories.find(c => c.id === activeCategoryId) || categories[0] || null;
  const subcategories = activeCategory?.subcategories || [];
  
  const activeSubcategory = subcategories.find(s => s.id === activeSubcategoryId) || subcategories[0] || null;
  const servicesList = activeSubcategory?.services || [];
  
  const activeService = servicesList.find(s => s.id === activeServiceId) || servicesList[0] || null;

  const displayServices = services && services.length > 0 ? services.map(s => ({
    title: s.title,
    href: `/services/${s.slug}`,
    subServices: s.subServices?.map(sub => ({
      title: sub.title,
      href: `/services/${s.slug}/${sub.slug}`,
      childServices: sub.childServices?.map(child => ({
        title: child.title,
        href: `/services/${s.slug}/${sub.slug}/${child.slug}`
      }))
    }))
  })) : []
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

            <div className="absolute left-1/2 -translate-x-1/2 top-full w-[900px] max-w-[95vw] bg-white border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
              {categories.length > 0 ? (
                <div className="flex h-[450px]">
                  {/* Column 1: Categories */}
                  <div className="w-1/3 bg-white border-r border-gray-100 flex flex-col pt-6">
                    <div className="px-6 mb-4 text-[13px] font-bold text-gray-400 tracking-wider uppercase bg-gray-100 mx-4 py-2 rounded">
                      CATEGORIES
                    </div>
                    <div className="flex-1 overflow-y-auto pb-4">
                      {categories.map((cat, cIdx) => {
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
                    </div>
                  </div>

                  {/* Column 2: Subcategories */}
                  <div className="w-1/3 bg-white border-r border-gray-100 flex flex-col pt-6">
                    <div className="px-6 mb-4 text-[13px] font-bold text-gray-400 tracking-wider uppercase bg-gray-100 mx-4 py-2 rounded">
                      SUBCATEGORIES
                    </div>
                    <div className="flex-1 overflow-y-auto pb-4">
                      {subcategories.map((sub, sIdx) => {
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
                      {subcategories.length === 0 && (
                        <div className="px-8 text-gray-400 text-sm italic">No subcategories</div>
                      )}
                    </div>
                  </div>

                  {/* Column 3: Services */}
                  <div className="w-1/3 bg-white flex flex-col pt-6">
                    <div className="px-6 mb-4 text-[13px] font-bold text-gray-400 tracking-wider uppercase bg-gray-100 mx-4 py-2 rounded">
                      SERVICES
                    </div>
                    <div className="flex-1 overflow-y-auto pb-4">
                      {servicesList.map((srv, sIdx) => {
                        const isActive = activeService?.id === srv.id;
                        return (
                          <div 
                            key={srv.id || sIdx}
                            onMouseEnter={() => setActiveServiceId(srv.id)}
                            className={`mx-4 px-4 py-2.5 mb-1 cursor-pointer flex justify-between items-center rounded transition-colors duration-200 ${isActive ? 'bg-[#f68b1e] text-white font-medium shadow-sm' : 'text-gray-700 hover:bg-gray-50'}`}
                          >
                            <Link href={`/services/${srv.slug}`} className="w-full text-[14px] truncate">
                              {srv.title}
                            </Link>
                          </div>
                        )
                      })}
                      {servicesList.length === 0 && (
                        <div className="px-8 text-gray-400 text-sm italic">No services</div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col py-2">
                  {displayServices.map((service, idx) => (
                    <Link key={idx} href={service.href} className="block px-4 py-2.5 hover:bg-slate-50 text-[15px] font-medium text-brand-dark hover:text-[#F19020] transition-colors">
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
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
