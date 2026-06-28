import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import '../styles/globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { FloatingChat } from '@/components/FloatingChat'
import { getServices, getServicesPage, getMainModules, getServiceCategories, getServiceSubcategories } from '@/lib/strapi'

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

export const viewport: Viewport = {
  themeColor: '#F19020'
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const servicePageData = await getServicesPage()
  const mainModules = await getMainModules()
  const categories = await getServiceCategories()
  const subcategories = await getServiceSubcategories()
  const services = await getServices()

  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans bg-slate-950 text-white antialiased">
        <div className="mb-28">
          <Navbar 
            mainModules={mainModules} 
            categories={categories} 
            subcategories={subcategories} 
            services={services} 
          />
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
