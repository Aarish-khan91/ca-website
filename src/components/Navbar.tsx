'use client'
import Link from 'next/link'
import { useState } from 'react'

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="28" height="28" viewBox="0 0 24 24" className="text-primary">
        <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15" />
        <path d="M6 12l4 4 8-8" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
      <span className="text-white font-semibold tracking-tight">AcmeCMS</span>
    </div>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-white/10">
      <div className="container-prose h-16 flex items-center gap-4">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-white/80 hover:text-white transition-colors"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
          <Logo />
        </div>

        <nav className="hidden md:flex items-center gap-6 ml-4">
          <Link href="/" className="link">Home</Link>
          <div className="relative group">
            <Link href="/services" className="link flex items-center gap-1">
              Services
              <svg width="12" height="12" viewBox="0 0 12 12" className="opacity-70 group-hover:rotate-180 transition-transform"><path d="M2 4L6 8L10 4" stroke="currentColor" fill="none" /></svg>
            </Link>
            <div className="absolute top-full left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0">
              <div className="bg-slate-900 border border-white/10 rounded-lg p-2 shadow-xl flex flex-col gap-1">
                <Link href="/services/company-incorporation" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors">
                  Company Incorporation
                </Link>
                <Link href="/services" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors">
                  View All Services
                </Link>
              </div>
            </div>
          </div>
          <Link href="/blog" className="link">Blog</Link>
          <Link href="/pricing" className="link">Pricing</Link>
          <Link href="/about" className="link">About</Link>
          <Link href="/contact" className="link">Contact</Link>
        </nav>

        <div className="ml-auto flex items-center gap-3 w-full md:w-auto">
          <div className="flex-1 md:flex-none">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full md:w-64 rounded-md bg-white/5 border border-white/10 text-white placeholder-white/50 h-10 pl-9 pr-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
              />
              <svg
                width="18" height="18" viewBox="0 0 24 24"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60"
              >
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <Link href="#" className="hidden md:inline-flex text-white/80 hover:text-white transition-colors">Login</Link>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-950">
          <div className="container-prose py-3 flex flex-col gap-2">
            <Link href="/" className="link">Home</Link>
            <Link href="/services/company-incorporation" className="link text-orange-400">Company Incorporation</Link>
            <Link href="/services" className="link">Services</Link>
            <Link href="/blog" className="link">Blog</Link>
            <Link href="/pricing" className="link">Pricing</Link>
            <Link href="/about" className="link">About</Link>
            <Link href="/contact" className="link">Contact</Link>
          </div>
        </div>
      )}
    </header>
  )
}
