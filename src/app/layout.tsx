import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '../styles/globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: {
    default: 'AcmeCMS — Modern Consulting',
    template: '%s — AcmeCMS'
  },
  description: 'Consulting and advisory services. Built with Next.js and Tailwind CSS.',
  metadataBase: new URL('https://example.com'),
  themeColor: '#F19020',
  alternates: {
    canonical: 'https://example.com'
  },
  openGraph: {
    title: 'AcmeCMS — Modern Consulting',
    description: 'Consulting and advisory services. Built with Next.js and Tailwind CSS.',
    type: 'website',
    url: 'https://example.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AcmeCMS'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AcmeCMS — Modern Consulting',
    description: 'Consulting and advisory services. Built with Next.js and Tailwind CSS.'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans bg-slate-950 text-white antialiased">
        {children}
      </body>
    </html>
  )
}
