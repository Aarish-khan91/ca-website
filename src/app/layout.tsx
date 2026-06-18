import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '../styles/globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { FloatingChat } from '@/components/FloatingChat'
import { getServices, getServicesPage } from '@/lib/strapi'

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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const servicePageData = await getServicesPage()

  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans bg-slate-950 text-white antialiased">
        <div className="mb-28">
          <Navbar services={servicePageData?.services} />
        </div>
        {children}
        <div className="">
          <Footer />
        </div>
        <FloatingChat />
      </body>
    </html>
  )
}
