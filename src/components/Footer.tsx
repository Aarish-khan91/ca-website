import Link from 'next/link'
import clsx from 'clsx'

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={clsx('mt-12 bg-slate-950', className)}>
      <div className="h-2 bg-white/10" />
      <div className="container-prose py-10 md:py-12">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="text-white font-semibold">AcmeCMS</div>
            <p className="mt-2 text-white/70">
              Financial clarity, accurate compliance, and expert advisory for individuals, startups, and enterprises.
            </p>
          </div>
          <div>
            <div className="text-white font-semibold">Quick Links</div>
            <ul className="mt-3 space-y-2">
              <li><Link className="link" href="/services">Services</Link></li>
              <li><Link className="link" href="/blog">Blog</Link></li>
              <li><Link className="link" href="/about">About</Link></li>
              <li><Link className="link" href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold">Services</div>
            <ul className="mt-3 space-y-2 text-white/80">
              <li>Company Incorporation</li>
              <li>GST Registration</li>
              <li>Income Tax Advisory</li>
              <li>Accounting & Bookkeeping</li>
              <li>Audit & Assurance</li>
              <li>Compliance Management</li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold">Contact</div>
            <ul className="mt-3 space-y-2 text-white/80">
              <li>Email: hello@acmecms.co</li>
              <li>Phone: +91 00000 00000</li>
              <li>Address: Your City</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-white/50 text-sm">
          © {new Date().getFullYear()} AcmeCMS. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
