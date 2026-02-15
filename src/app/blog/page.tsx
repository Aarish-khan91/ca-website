import { Navbar } from '@/components/Navbar'
import { InsightsHero } from '@/components/InsightsHero'
import { SearchFilters } from '@/components/SearchFilters'
import { NewsletterCTA } from '@/components/NewsletterCTA'
import { Footer } from '@/components/Footer'
import { FloatingChat } from '@/components/FloatingChat'

export const metadata = {
  title: 'Blog | Ritesh Arora & Associates',
  description: 'Expert advice, real-world case studies, and actionable strategies.'
}

const posts = [
  {
    title: 'Complete GST guide for Small Businesses in 2025',
    category: 'Expert Advice',
    date: 'Nov 25, 2025',
    author: 'Ritesh Arora',
    excerpt: 'A comprehensive breakdown of the new GST regulations affecting MSMEs and how to stay compliant while maximizing benefits.'
  },
  {
    title: 'How We Helped a Retail Brand Increase Sales by 45%',
    category: 'Success Story',
    date: 'Nov 19, 2025',
    author: 'Anita Sharma',
    excerpt: 'Discover the strategic financial planning and inventory management techniques that transformed a local retailer.'
  },
  {
    title: 'From Startup to Scale: A Tech Company’s Growth Journey',
    category: 'Success Story',
    date: 'Nov 03, 2025',
    author: 'Varun Patel',
    excerpt: 'Navigating the complex landscape of fundraising, equity management, and international expansion.'
  },
  {
    title: 'Understanding the New Income Tax Regime',
    category: 'Expert Advice',
    date: 'Oct 28, 2025',
    author: 'Ritesh Arora',
    excerpt: 'Key differences between the old and new tax regimes and which one is right for your financial goals.'
  },
  {
    title: 'Audit Readiness: A Checklist for Corporate Compliance',
    category: 'Expert Advice',
    date: 'Oct 15, 2025',
    author: 'Vikram D.',
    excerpt: 'Essential steps to ensure your company is always audit-ready and compliant with statutory requirements.'
  }
]

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen flex flex-col">
        <InsightsHero />
        <SearchFilters />

        <section className="py-16 md:py-24 bg-white flex-grow">
          <div className="container-prose">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((p) => (
                <article key={p.title} className="group flex flex-col h-full bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  {/* Image Placeholder */}
                  <div className="h-48 w-full bg-slate-100 relative overflow-hidden group-hover:opacity-90 transition-opacity">
                    <div className="absolute inset-0 flex items-center justify-center text-slate-300 text-sm font-medium">
                      <span className="sr-only">Article Image</span>
                      Image Placeholder
                    </div>
                  </div>

                  <div className="flex-1 p-6 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wide">
                        {p.category}
                      </span>
                      <span className="text-slate-400 text-sm">{p.date}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      <a href="#" className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        {p.title}
                      </a>
                    </h3>

                    <p className="text-slate-600 mb-4 line-clamp-3 text-sm flex-grow">
                      {p.excerpt}
                    </p>

                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-slate-200" /> {/* Avatar placeholder */}
                      <span className="text-sm font-medium text-slate-700">{p.author}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <NewsletterCTA />
        <Footer className="mt-0" />
      </main>
      <FloatingChat />
    </>
  )
}
