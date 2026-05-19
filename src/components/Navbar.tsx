'use client'
import Link from 'next/link'
import { useState } from 'react'

export function Navbar() {
  const [open, setOpen] = useState(false)

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
          <Link href="/services" className="text-slate-600 hover:text-brand-dark transition-colors text-[15px]">Service</Link>
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
          <Link href="/" className="text-slate-600 hover:text-brand-dark transition-colors px-2 py-1 font-medium">Home</Link>
          <Link href="/about" className="text-slate-600 hover:text-brand-dark transition-colors px-2 py-1 font-medium">About</Link>
          <Link href="/services" className="text-slate-600 hover:text-brand-dark transition-colors px-2 py-1 font-medium">Service</Link>
          <Link href="/blog" className="text-slate-600 hover:text-brand-dark transition-colors px-2 py-1 font-medium">Blog</Link>
          <Link href="/pricing" className="text-slate-600 hover:text-brand-dark transition-colors px-2 py-1 font-medium">Pricing</Link>
          <Link href="/careers" className="text-slate-600 hover:text-brand-dark transition-colors px-2 py-1 font-medium">Careers</Link>
          <Link href="/contact" className="text-slate-600 hover:text-brand-dark transition-colors px-2 py-1 font-medium">Contact</Link>
        </div>
      )}
    </header>
  )
}
