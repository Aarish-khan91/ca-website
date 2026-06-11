import Link from 'next/link'

export function RelatedBlogsSection() {
  const blogs = [
    { category: { name: "Taxation" }, slug: "tax-planning-2026", title: "Tax Planning Strategies for 2026", excerpt: "Learn how to optimize your taxes effectively this year with our comprehensive guide.", coverImage: { url: "/images/services/Gemini_Generated_Image_f9dqq0f9dqq0f9dq 2 (1).png" } },
    { category: { name: "Compliance" }, slug: "mca-updates", title: "Recent MCA Updates", excerpt: "Stay compliant with the latest changes from MCA and ensure your business operates smoothly.", coverImage: { url: "/images/services/Gemini_Generated_Image_f9dqq0f9dqq0f9dq 2 (2).png" } },
    { category: { name: "Business" }, slug: "startup-guide", title: "Startup Incorporation Guide", excerpt: "Everything you need to know before registering your startup in India.", coverImage: { url: "/images/services/Gemini_Generated_Image_f9dqq0f9dqq0f9dq 2 (3).png" } }
  ]

  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="container-prose px-4 md:px-8 mx-auto max-w-6xl">

        <div className="text-center mb-12">
          <span className="text-[12px] uppercase text-[#f28e2b] font-bold tracking-widest block mb-2">Blogs</span>
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#0b293d]">
            Our Latest Blogs
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs?.map((blog: any, idx: number) => {
            const coverUrl = blog.coverImage?.url ? blog.coverImage.url : blog.image
            return (
              <article key={idx} className="flex flex-col h-full bg-white rounded-[8px] border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-[200px] w-full overflow-hidden bg-slate-200 shrink-0">
                  <img
                    src={coverUrl || ''}
                    alt={blog.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-[12px] uppercase text-[#f28e2b] font-semibold tracking-wider block mb-2">
                    {blog.category.name}
                  </span>

                  <h3 className="text-[#0b293d] font-bold text-[16px] md:text-[18px] leading-tight mb-3 hover:text-[#f28e2b] transition-colors">
                    <Link href={`/blog/${blog.slug || '#'}`}>
                      {blog.title}
                    </Link>
                  </h3>

                  <p className="text-slate-500 font-light text-[13px] md:text-[14px] leading-relaxed mb-6 flex-1">
                    {blog.excerpt}
                  </p>

                  <Link href={`/blog/${blog.slug || '#'}`} className="inline-flex items-center text-[#f28e2b] text-[13px] md:text-[14px] font-semibold hover:underline mt-auto">
                    Read More <span className="ml-1.5">→</span>
                  </Link>
                </div>
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}
