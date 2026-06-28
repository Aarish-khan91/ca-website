// 'use client'
// import Link from 'next/link'
// import { useState } from 'react'

// import { StrapiService, StrapiServiceCategory, StrapiMainModule, StrapiServiceSubcategory } from '@/lib/strapi'

// export function Navbar({ 
//   mainModules = [],
//   categories = [],
//   subcategories = [],
//   services = []
// }: { 
//   mainModules?: StrapiMainModule[],
//   categories?: StrapiServiceCategory[],
//   subcategories?: StrapiServiceSubcategory[],
//   services?: StrapiService[] 
// }) {
//   const [open, setOpen] = useState(false)
//   const [activeMainModuleId, setActiveMainModuleId] = useState<number | null>(null)
//   const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null)
//   const [activeSubcategoryId, setActiveSubcategoryId] = useState<number | null>(null)
//   const [activeServiceId, setActiveServiceId] = useState<number | null>(null)

//   // Fallback mock data if the Strapi database is empty (or blocked by 401 error)
//   const safeMainModules = mainModules.length > 0 ? mainModules : [{ id: 1, title: 'Mock Module' } as any];
//   const safeCategories = categories.length > 0 ? categories : [{ id: 1, mainModule: { id: 1 }, title: '1.2 Direct Tax Services' } as any];
//   const safeSubcategories = subcategories.length > 0 ? subcategories : [{ id: 1, category: { id: 1 }, title: '1.1.1 GST Services' } as any];
//   const safeServices = services.length > 0 ? services : [
//     { id: 1, subcategory: { id: 1 }, title: 'GST Registration & Filing', slug: 'gst-registration' } as any,
//     { id: 2, subcategory: { id: 1 }, title: 'Company Incorporation', slug: 'company-incorporation' } as any
//   ];

//   // 1. Resolve Active Main Module
//   const activeMainModule = safeMainModules.find(m => m.id === activeMainModuleId) || safeMainModules[0] || null;

//   // 2. Dynamically filter Categories that belong to the Active Main Module
//   const activeCategories = safeCategories.filter(c => c.mainModule?.id === activeMainModule?.id);
//   const activeCategory = activeCategories.find(c => c.id === activeCategoryId) || activeCategories[0] || null;

//   // 3. Dynamically filter Subcategories that belong to the Active Category
//   const activeSubcategories = safeSubcategories.filter(s => s.category?.id === activeCategory?.id);
//   const activeSubcategory = activeSubcategories.find(s => s.id === activeSubcategoryId) || activeSubcategories[0] || null;

//   // 4. Dynamically filter Services that belong to the Active Subcategory
//   const activeServices = safeServices.filter(s => s.subcategory?.id === activeSubcategory?.id);
//   const activeService = activeServices.find(s => s.id === activeServiceId) || activeServices[0] || null;

//   return (
//     <header className="fixed w-full top-0 z-50 bg-[#f8f9fa] border-b border-gray-200 shadow-sm">
//       <div className="max-w-[1400px] mx-auto py-3 flex items-center justify-between px-4 lg:px-8">

//         {/* Left: Logo */}
//         <div className="flex items-center">
//           <Link href="/" className="flex flex-col items-center">
//             <div className="text-brand-dark text-xl lg:text-[22px] font-serif leading-none tracking-wide flex items-center">
//               <span>RITESH</span>
//               <span className="relative flex items-center justify-center w-[20px] h-[24px] mx-[3px] -mt-[2px]">
//                 <svg viewBox="0 0 24 24" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
//                   <path d="M12 2 L3 22" stroke="#F19020" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
//                   <path d="M12 2 L21 22" stroke="#003B49" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               </span>
//               <span>RORA &</span>
//             </div>
//             <div className="text-brand-dark text-xl lg:text-[22px] font-serif leading-none tracking-wide mt-1.5">
//               ASSOCIATES
//             </div>
//             <div className="w-full h-[1px] bg-[#F19020] mt-2 mb-1.5 opacity-60"></div>
//             <div className="text-[#F19020] text-[9px] lg:text-[10px] tracking-[0.15em] uppercase font-medium">
//               Chartered Accountants
//             </div>
//           </Link>
//         </div>

//         {/* Mobile menu button */}
//         <button
//           className="lg:hidden text-brand-dark p-2 hover:bg-gray-200 rounded-md transition-colors ml-auto"
//           onClick={() => setOpen(!open)}
//           aria-label="Toggle menu"
//         >
//           <svg width="24" height="24" viewBox="0 0 24 24">
//             <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
//           </svg>
//         </button>

//         {/* Middle: Search Bar (Desktop) */}
//         <div className="hidden lg:flex items-center flex-1 max-w-[400px] ml-12 xl:ml-20">
//           <div className="relative w-full">
//             <svg
//               width="18" height="18" viewBox="0 0 24 24"
//               className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
//             >
//               <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" fill="none" />
//               <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//             </svg>
//             <input
//               type="text"
//               placeholder="Pages..."
//               className="w-full h-[42px] pl-12 pr-4 bg-transparent border border-gray-400 rounded-full text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-shadow"
//             />
//           </div>
//         </div>

//         {/* Right: Nav Links (Desktop) */}
//         <nav className="hidden lg:flex items-center gap-5 xl:gap-8 ml-auto">
//           <Link href="/" className="text-slate-600 hover:text-brand-dark transition-colors text-[15px]">Home</Link>
//           <Link href="/about" className="text-slate-600 hover:text-brand-dark transition-colors text-[15px]">About</Link>

//           {/* Services Dropdown */}
//           <div className="relative group">
//             <Link href="/services" className="text-slate-600 group-hover:text-brand-dark transition-colors text-[15px] flex items-center gap-1 py-4">
//               Services
//               <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:rotate-180"><path d="M6 9l6 6 6-6" /></svg>
//             </Link>

//             <div className="absolute left-1/2 -translate-x-1/2 top-full w-[1100px] max-w-[95vw] bg-white border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
//               <div className="flex h-[450px]">
//                 {/* Column 1: Main Modules */}
//                 <div className="w-1/4 bg-white border-r border-gray-100 flex flex-col pt-6">
//                   <div className="px-6 mb-4 text-[13px] font-bold text-gray-400 tracking-wider uppercase bg-gray-100 mx-4 py-2 rounded">
//                     MAIN MODULES
//                   </div>
//                   <div className="flex-1 overflow-y-auto pb-4">
//                     {safeMainModules.map((module, mIdx) => {
//                       const isActive = activeMainModule?.id === module.id;
//                       return (
//                         <div
//                           key={module.id || mIdx}
//                           onMouseEnter={() => {
//                             setActiveMainModuleId(module.id);
//                             setActiveCategoryId(null);
//                             setActiveSubcategoryId(null);
//                             setActiveServiceId(null);
//                           }}
//                           className={`mx-4 px-4 py-2.5 mb-1 cursor-pointer flex justify-between items-center rounded transition-colors duration-200 ${isActive ? 'bg-gray-800 text-white font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
//                         >
//                           <span className="text-[14px] truncate pr-2">{module.title}</span>
//                           <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`flex-shrink-0 transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`}><path d="M9 18l6-6-6-6" /></svg>
//                         </div>
//                       )
//                     })}
//                   </div>
//                 </div>

//                 {/* Column 2: Categories */}
//                 <div className="w-1/4 bg-white border-r border-gray-100 flex flex-col pt-6">
//                   <div className="px-6 mb-4 text-[13px] font-bold text-gray-400 tracking-wider uppercase bg-gray-100 mx-4 py-2 rounded">
//                     CATEGORIES
//                   </div>
//                   <div className="flex-1 overflow-y-auto pb-4">
//                     {activeCategories.map((cat, cIdx) => {
//                       const isActive = activeCategory?.id === cat.id;
//                       return (
//                         <div
//                           key={cat.id || cIdx}
//                           onMouseEnter={() => {
//                             setActiveCategoryId(cat.id);
//                             setActiveSubcategoryId(null);
//                             setActiveServiceId(null);
//                           }}
//                           className={`mx-4 px-4 py-2.5 mb-1 cursor-pointer flex justify-between items-center rounded transition-colors duration-200 ${isActive ? 'bg-[#e53e3e] text-white font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
//                         >
//                           <span className="text-[14px] truncate pr-2">{cat.title}</span>
//                           <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`flex-shrink-0 transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`}><path d="M9 18l6-6-6-6" /></svg>
//                         </div>
//                       )
//                     })}
//                     {activeCategories.length === 0 && (
//                       <div className="px-8 text-gray-400 text-sm italic">No categories</div>
//                     )}
//                   </div>
//                 </div>

//                 {/* Column 3: Subcategories */}
//                 <div className="w-1/4 bg-white border-r border-gray-100 flex flex-col pt-6">
//                   <div className="px-6 mb-4 text-[13px] font-bold text-gray-400 tracking-wider uppercase bg-gray-100 mx-4 py-2 rounded">
//                     SUBCATEGORIES
//                   </div>
//                   <div className="flex-1 overflow-y-auto pb-4">
//                     {activeSubcategories.map((sub, sIdx) => {
//                       const isActive = activeSubcategory?.id === sub.id;
//                       return (
//                         <div
//                           key={sub.id || sIdx}
//                           onMouseEnter={() => {
//                             setActiveSubcategoryId(sub.id);
//                             setActiveServiceId(null);
//                           }}
//                           className={`mx-4 px-4 py-2.5 mb-1 cursor-pointer flex justify-between items-center rounded transition-colors duration-200 ${isActive ? 'bg-[#e53e3e] text-white font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
//                         >
//                           <span className="text-[14px] truncate pr-2">{sub.title}</span>
//                           <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`flex-shrink-0 transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`}><path d="M9 18l6-6-6-6" /></svg>
//                         </div>
//                       )
//                     })}
//                     {activeSubcategories.length === 0 && (
//                       <div className="px-8 text-gray-400 text-sm italic">No subcategories</div>
//                     )}
//                   </div>
//                 </div>

//                 {/* Column 4: Services */}
//                 <div className="w-1/4 bg-white flex flex-col pt-6">
//                   <div className="px-6 mb-4 text-[13px] font-bold text-gray-400 tracking-wider uppercase bg-gray-100 mx-4 py-2 rounded">
//                     SERVICES
//                   </div>
//                   <div className="flex-1 overflow-y-auto pb-4">
//                     {activeServices.map((srv, sIdx) => {
//                       const isActive = activeService?.id === srv.id;
//                       return (
//                         <div
//                           key={srv.id || sIdx}
//                           onMouseEnter={() => setActiveServiceId(srv.id)}
//                           className={`mx-4 px-4 py-2.5 mb-1 cursor-pointer flex justify-between items-center rounded transition-all duration-200 ${isActive ? 'bg-[#f28e2b] text-white font-medium border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]' : 'text-gray-700 hover:bg-gray-50'}`}
//                         >
//                           <Link href={`/services/${srv.slug}`} className="w-full text-[14px] truncate block">
//                             {srv.title}
//                           </Link>
//                         </div>
//                       )
//                     })}
//                     {activeServices.length === 0 && (
//                       <div className="px-8 text-gray-400 text-sm italic">No services</div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//       <Link href="/blog" className="text-slate-600 hover:text-brand-dark transition-colors text-[15px]">Blog</Link>
//           <Link href="/pricing" className="text-slate-600 hover:text-brand-dark transition-colors text-[15px]">Pricing</Link>
//           <Link href="/careers" className="text-slate-600 hover:text-brand-dark transition-colors text-[15px]">Careers</Link>
//           <Link href="/contact" className="text-slate-600 hover:text-brand-dark transition-colors text-[15px]">Contact</Link>
//         </nav>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="lg:hidden bg-[#f8f9fa] border-t border-gray-200 py-4 px-4 flex flex-col gap-4 shadow-lg absolute w-full left-0">
//           <div className="relative w-full">
//             <svg
//               width="18" height="18" viewBox="0 0 24 24"
//               className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
//             >
//               <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" fill="none" />
//               <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//             </svg>
//             <input
//               type="text"
//               placeholder="Pages..."
//               className="w-full h-10 pl-12 pr-4 bg-transparent border border-gray-400 rounded-full text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
//             />
//           </div>
//           <Link href="/" className="text-slate-600 hover:text-brand-dark transition-colors px-2 py-1 font-medium" onClick={() => setOpen(false)}>Home</Link>
//           <Link href="/about" className="text-slate-600 hover:text-brand-dark transition-colors px-2 py-1 font-medium" onClick={() => setOpen(false)}>About</Link>

//           <div className="flex flex-col">
//             <Link href="/services" className="text-slate-600 hover:text-brand-dark transition-colors px-2 py-1 font-medium" onClick={() => setOpen(false)}>Services</Link>
//             <div className="pl-4 flex flex-col gap-2 mt-2 border-l-2 border-gray-200 ml-3">
//               {displayServices.map((service, idx) => (
//                 <Link
//                   key={idx}
//                   href={service.href}
//                   className="text-slate-500 hover:text-[#F19020] transition-colors text-[14px] py-1"
//                   onClick={() => setOpen(false)}
//                 >
//                   {service.title}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           <Link href="/blog" className="text-slate-600 hover:text-brand-dark transition-colors px-2 py-1 font-medium" onClick={() => setOpen(false)}>Blog</Link>
//           <Link href="/pricing" className="text-slate-600 hover:text-brand-dark transition-colors px-2 py-1 font-medium" onClick={() => setOpen(false)}>Pricing</Link>
//           <Link href="/careers" className="text-slate-600 hover:text-brand-dark transition-colors px-2 py-1 font-medium" onClick={() => setOpen(false)}>Careers</Link>
//           <Link href="/contact" className="text-slate-600 hover:text-brand-dark transition-colors px-2 py-1 font-medium" onClick={() => setOpen(false)}>Contact</Link>
//         </div>
//       )}
//     </header>
//   )
// }
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

  // ── Mobile accordion state ────────────────────────────────────────────────
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileActiveModuleId, setMobileActiveModuleId] = useState<number | null>(null)
  const [mobileActiveCategoryId, setMobileActiveCategoryId] = useState<number | null>(null)
  const [mobileActiveSubcategoryId, setMobileActiveSubcategoryId] = useState<number | null>(null)

  // ── Fallback mock data ────────────────────────────────────────────────────
  const safeMainModules = mainModules.length > 0 ? mainModules : [{ id: 1, title: 'Mock Module' } as any]
  const safeCategories = categories.length > 0 ? categories : [{ id: 1, mainModule: { id: 1 }, title: '1.2 Direct Tax Services' } as any]
  const safeSubcategories = subcategories.length > 0 ? subcategories : [{ id: 1, category: { id: 1 }, title: '1.1.1 GST Services' } as any]
  const safeServices = services.length > 0 ? services : [
    { id: 1, subcategory: { id: 1 }, title: 'GST Registration & Filing', slug: 'gst-registration' } as any,
    { id: 2, subcategory: { id: 1 }, title: 'Company Incorporation', slug: 'company-incorporation' } as any
  ]

  // ── Desktop: resolve active items ─────────────────────────────────────────
  const activeMainModule = safeMainModules.find(m => m.id === activeMainModuleId) || safeMainModules[0] || null
  const activeCategories = safeCategories.filter(c => c.mainModule?.id === activeMainModule?.id)
  const activeCategory = activeCategories.find(c => c.id === activeCategoryId) || activeCategories[0] || null
  const activeSubcategories = safeSubcategories.filter(s => s.category?.id === activeCategory?.id)
  const activeSubcategory = activeSubcategories.find(s => s.id === activeSubcategoryId) || activeSubcategories[0] || null
  const activeServices = safeServices.filter(s => s.subcategory?.id === activeSubcategory?.id)
  const activeService = activeServices.find(s => s.id === activeServiceId) || activeServices[0] || null

  // ── Mobile: resolve active items ──────────────────────────────────────────
  const mobileActiveModule = safeMainModules.find(m => m.id === mobileActiveModuleId) || null
  const mobileCategoriesForModule = mobileActiveModule
    ? safeCategories.filter(c => c.mainModule?.id === mobileActiveModule.id)
    : []
  const mobileActiveCategory = mobileCategoriesForModule.find(c => c.id === mobileActiveCategoryId) || null
  const mobileSubcategoriesForCategory = mobileActiveCategory
    ? safeSubcategories.filter(s => s.category?.id === mobileActiveCategory.id)
    : []
  const mobileActiveSubcategory = mobileSubcategoriesForCategory.find(s => s.id === mobileActiveSubcategoryId) || null
  const mobileServicesForSubcategory = mobileActiveSubcategory
    ? safeServices.filter(s => s.subcategory?.id === mobileActiveSubcategory.id)
    : []

  const toggleMobileModule = (id: number) => {
    setMobileActiveModuleId(prev => prev === id ? null : id)
    setMobileActiveCategoryId(null)
    setMobileActiveSubcategoryId(null)
  }
  const toggleMobileCategory = (id: number) => {
    setMobileActiveCategoryId(prev => prev === id ? null : id)
    setMobileActiveSubcategoryId(null)
  }
  const toggleMobileSubcategory = (id: number) => {
    setMobileActiveSubcategoryId(prev => prev === id ? null : id)
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-[#f8f9fa] border-b border-gray-200 shadow-sm">
      <div className="relative max-w-[1400px] mx-auto py-3 flex items-center justify-between px-4 lg:px-8">

        {/* Logo */}
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
            <div className="text-brand-dark text-xl lg:text-[22px] font-serif leading-none tracking-wide mt-1.5">ASSOCIATES</div>
            <div className="w-full h-[1px] bg-[#F19020] mt-2 mb-1.5 opacity-60"></div>
            <div className="text-[#F19020] text-[9px] lg:text-[10px] tracking-[0.15em] uppercase font-medium">Chartered Accountants</div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-brand-dark p-2 hover:bg-gray-200 rounded-md transition-colors ml-auto"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          )}
        </button>

        {/* Desktop: Search */}
        <div className="hidden lg:flex items-center flex-1 max-w-[180px] xl:max-w-[300px] 2xl:max-w-[400px] ml-6 xl:ml-12">
          <div className="relative w-full">
            <svg width="18" height="18" viewBox="0 0 24 24" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
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

        {/* Desktop: Nav links */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-6 2xl:gap-8 ml-auto mr-6 xl:mr-12">
          <Link href="/" className="text-slate-600 hover:text-brand-dark transition-colors text-[14px] xl:text-[15px]">Home</Link>
          <Link href="/about" className="text-slate-600 hover:text-brand-dark transition-colors text-[14px] xl:text-[15px]">About</Link>

          {/* Desktop: Services mega-menu */}
          <div className="group">
            <Link href="/services" className="text-slate-600 group-hover:text-brand-dark transition-colors text-[14px] xl:text-[15px] flex items-center gap-1 py-4">
              Services
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:rotate-180"><path d="M6 9l6 6 6-6" /></svg>
            </Link>

            <div className="absolute left-0 right-0 mx-auto w-[1100px] max-w-[calc(100%-2rem)] lg:max-w-[calc(100%-4rem)] top-full bg-white border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
              <div className="flex h-[450px]">

                {/* Col 1: Main Modules */}
                <div className="w-1/4 bg-white border-r border-gray-100 flex flex-col pt-6">
                  <div className="px-6 mb-4 text-[13px] font-bold text-gray-400 tracking-wider uppercase bg-gray-100 mx-4 py-2 rounded">MAIN MODULES</div>
                  <div className="flex-1 overflow-y-auto pb-4">
                    {safeMainModules.map((module, mIdx) => {
                      const isActive = activeMainModule?.id === module.id
                      return (
                        <div
                          key={module.id || mIdx}
                          onMouseEnter={() => { setActiveMainModuleId(module.id); setActiveCategoryId(null); setActiveSubcategoryId(null); setActiveServiceId(null) }}
                          className={`mx-4 px-4 py-2.5 mb-1 cursor-pointer flex justify-between items-center rounded transition-colors duration-200 min-w-0 ${isActive ? 'bg-gray-800 text-white font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                        >
                          <span className="text-[14px] truncate pr-2 min-w-0">{module.title}</span>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`flex-shrink-0 transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`}><path d="M9 18l6-6-6-6" /></svg>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Col 2: Categories */}
                <div className="w-1/4 bg-white border-r border-gray-100 flex flex-col pt-6">
                  <div className="px-6 mb-4 text-[13px] font-bold text-gray-400 tracking-wider uppercase bg-gray-100 mx-4 py-2 rounded">CATEGORIES</div>
                  <div className="flex-1 overflow-y-auto pb-4">
                    {activeCategories.map((cat, cIdx) => {
                      const isActive = activeCategory?.id === cat.id
                      return (
                        <div
                          key={cat.id || cIdx}
                          onMouseEnter={() => { setActiveCategoryId(cat.id); setActiveSubcategoryId(null); setActiveServiceId(null) }}
                          className={`mx-4 px-4 py-2.5 mb-1 cursor-pointer flex justify-between items-center rounded transition-colors duration-200 min-w-0 ${isActive ? 'bg-[#e53e3e] text-white font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                        >
                          <span className="text-[14px] truncate pr-2 min-w-0">{cat.title}</span>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`flex-shrink-0 transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`}><path d="M9 18l6-6-6-6" /></svg>
                        </div>
                      )
                    })}
                    {activeCategories.length === 0 && <div className="px-8 text-gray-400 text-sm italic">No categories</div>}
                  </div>
                </div>

                {/* Col 3: Subcategories */}
                <div className="w-1/4 bg-white border-r border-gray-100 flex flex-col pt-6">
                  <div className="px-6 mb-4 text-[13px] font-bold text-gray-400 tracking-wider uppercase bg-gray-100 mx-4 py-2 rounded">SUBCATEGORIES</div>
                  <div className="flex-1 overflow-y-auto pb-4">
                    {activeSubcategories.map((sub, sIdx) => {
                      const isActive = activeSubcategory?.id === sub.id
                      return (
                        <div
                          key={sub.id || sIdx}
                          onMouseEnter={() => { setActiveSubcategoryId(sub.id); setActiveServiceId(null) }}
                          className={`mx-4 px-4 py-2.5 mb-1 cursor-pointer flex justify-between items-center rounded transition-colors duration-200 min-w-0 ${isActive ? 'bg-[#e53e3e] text-white font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                        >
                          <span className="text-[14px] truncate pr-2 min-w-0">{sub.title}</span>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`flex-shrink-0 transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`}><path d="M9 18l6-6-6-6" /></svg>
                        </div>
                      )
                    })}
                    {activeSubcategories.length === 0 && <div className="px-8 text-gray-400 text-sm italic">No subcategories</div>}
                  </div>
                </div>

                {/* Col 4: Services */}
                <div className="w-1/4 bg-white flex flex-col pt-6">
                  <div className="px-6 mb-4 text-[13px] font-bold text-gray-400 tracking-wider uppercase bg-gray-100 mx-4 py-2 rounded">SERVICES</div>
                  <div className="flex-1 overflow-y-auto pb-4">
                    {activeServices.map((srv, sIdx) => {
                      const isActive = activeService?.id === srv.id
                      return (
                        <div
                          key={srv.id || sIdx}
                          onMouseEnter={() => setActiveServiceId(srv.id)}
                          className={`mx-4 px-4 py-2.5 mb-1 cursor-pointer flex items-center rounded transition-all duration-200 min-w-0 ${isActive ? 'bg-[#f28e2b] text-white font-medium border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]' : 'text-gray-700 hover:bg-gray-50'}`}
                        >
                          <Link href={`/services/${srv.slug}`} className="w-full text-[14px] truncate block min-w-0">{srv.title}</Link>
                        </div>
                      )
                    })}
                    {activeServices.length === 0 && <div className="px-8 text-gray-400 text-sm italic">No services</div>}
                  </div>
                </div>

              </div>
            </div>
          </div>

          <Link href="/blog" className="text-slate-600 hover:text-brand-dark transition-colors text-[14px] xl:text-[15px]">Blog</Link>
          <Link href="/pricing" className="text-slate-600 hover:text-brand-dark transition-colors text-[14px] xl:text-[15px]">Pricing</Link>
          <Link href="/careers" className="text-slate-600 hover:text-brand-dark transition-colors text-[14px] xl:text-[15px]">Careers</Link>
          <Link href="/contact" className="text-slate-600 hover:text-brand-dark transition-colors text-[14px] xl:text-[15px]">Contact</Link>
        </nav>
      </div>

      {/* ── Mobile menu ──────────────────────────────────────────────────────── */}
      {open && (
        <div className="lg:hidden bg-[#f8f9fa] border-t border-gray-200 shadow-lg absolute w-full left-0 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 flex flex-col gap-1">

            {/* Mobile search */}
            <div className="relative w-full mb-3">
              <svg width="18" height="18" viewBox="0 0 24 24" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                placeholder="Pages..."
                className="w-full h-10 pl-12 pr-4 bg-transparent border border-gray-400 rounded-full text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
              />
            </div>

            <MobileNavLink href="/" label="Home" onClick={() => setOpen(false)} />
            <MobileNavLink href="/about" label="About" onClick={() => setOpen(false)} />

            {/* ── Mobile: Services accordion ── */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => setMobileServicesOpen(v => !v)}
                className="w-full flex items-center justify-between px-2 py-3 text-[15px] font-medium text-slate-600 hover:text-brand-dark"
              >
                <Link href="/services" onClick={e => e.stopPropagation()} className="hover:text-[#F19020]">Services</Link>
                <svg
                  width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round"
                  className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {mobileServicesOpen && (
                <div className="pb-2">
                  {/* Level 1: Main Modules */}
                  {safeMainModules.map(module => {
                    const isModuleOpen = mobileActiveModuleId === module.id
                    const moduleCats = safeCategories.filter(c => c.mainModule?.id === module.id)

                    return (
                      <div key={module.id} className="ml-2 border-l-2 border-gray-200">
                        <button
                          onClick={() => toggleMobileModule(module.id)}
                          className={`w-full flex items-center justify-between pl-4 pr-2 py-2.5 text-[14px] font-medium transition-colors ${isModuleOpen ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
                        >
                          <span>{module.title}</span>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 flex-shrink-0 ${isModuleOpen ? 'rotate-180' : ''}`}><path d="M6 9l6 6 6-6" /></svg>
                        </button>

                        {/* Level 2: Categories */}
                        {isModuleOpen && (
                          <div className="ml-3 border-l-2 border-gray-100">
                            {moduleCats.length === 0 && <p className="pl-4 py-2 text-[13px] text-gray-400 italic">No categories</p>}
                            {moduleCats.map(cat => {
                              const isCatOpen = mobileActiveCategoryId === cat.id
                              const catSubs = safeSubcategories.filter(s => s.category?.id === cat.id)

                              return (
                                <div key={cat.id}>
                                  <button
                                    onClick={() => toggleMobileCategory(cat.id)}
                                    className={`w-full flex items-center justify-between pl-4 pr-2 py-2.5 text-[13px] font-medium transition-colors ${isCatOpen ? 'text-[#e53e3e]' : 'text-gray-500 hover:text-gray-800'}`}
                                  >
                                    <span className="text-left">{cat.title}</span>
                                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 flex-shrink-0 ml-2 ${isCatOpen ? 'rotate-180' : ''}`}><path d="M6 9l6 6 6-6" /></svg>
                                  </button>

                                  {/* Level 3: Subcategories */}
                                  {isCatOpen && (
                                    <div className="ml-3 border-l-2 border-gray-100">
                                      {catSubs.length === 0 && <p className="pl-4 py-2 text-[13px] text-gray-400 italic">No subcategories</p>}
                                      {catSubs.map(sub => {
                                        const isSubOpen = mobileActiveSubcategoryId === sub.id
                                        const subServices = safeServices.filter(s => s.subcategory?.id === sub.id)

                                        return (
                                          <div key={sub.id}>
                                            <button
                                              onClick={() => toggleMobileSubcategory(sub.id)}
                                              className={`w-full flex items-center justify-between pl-4 pr-2 py-2 text-[13px] transition-colors ${isSubOpen ? 'text-[#e53e3e] font-medium' : 'text-gray-500 hover:text-gray-800'}`}
                                            >
                                              <span className="text-left">{sub.title}</span>
                                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 flex-shrink-0 ml-2 ${isSubOpen ? 'rotate-180' : ''}`}><path d="M6 9l6 6 6-6" /></svg>
                                            </button>

                                            {/* Level 4: Services */}
                                            {isSubOpen && (
                                              <div className="ml-3 border-l-2 border-[#F19020]/30 pb-1">
                                                {subServices.length === 0 && <p className="pl-4 py-2 text-[12px] text-gray-400 italic">No services</p>}
                                                {subServices.map(srv => (
                                                  <Link
                                                    key={srv.id}
                                                    href={`/services/${srv.slug}`}
                                                    onClick={() => setOpen(false)}
                                                    className="flex items-center pl-4 pr-2 py-2 text-[13px] text-gray-500 hover:text-[#F19020] hover:bg-orange-50 rounded transition-colors"
                                                  >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#F19020] mr-2.5 flex-shrink-0" />
                                                    {srv.title}
                                                  </Link>
                                                ))}
                                              </div>
                                            )}
                                          </div>
                                        )
                                      })}
                                    </div>
                                  )}
                                </div>
                              )
                            })}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            <MobileNavLink href="/blog" label="Blog" onClick={() => setOpen(false)} />
            <MobileNavLink href="/pricing" label="Pricing" onClick={() => setOpen(false)} />
            <MobileNavLink href="/careers" label="Careers" onClick={() => setOpen(false)} />
            <MobileNavLink href="/contact" label="Contact" onClick={() => setOpen(false)} />
          </div>
        </div>
      )}
    </header>
  )
}

function MobileNavLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-2 py-3 text-[15px] font-medium text-slate-600 hover:text-brand-dark border-b border-gray-100 transition-colors"
    >
      {label}
    </Link>
  )
}
