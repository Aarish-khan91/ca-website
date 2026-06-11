export function RichTextSection() {
  const title = "Comprehensive Service Features"
  const content = "<p>We offer end-to-end support for all your compliance and regulatory needs. Our experts will guide you through the entire process, ensuring every detail is perfectly managed.</p>"

  return (
    <section className="bg-white py-16 md:py-24 border-b border-slate-100">
      <div className="container-prose px-4 md:px-8 mx-auto max-w-5xl">
        <h2 className="text-[28px] md:text-[36px] font-bold text-[#0b293d] mb-8 text-center">
          {title}
        </h2>
        <div
          className="prose max-w-none text-slate-700 leading-relaxed text-[14px] md:text-[15px]
                     [&_table]:w-full [&_table]:border-collapse [&_table]:my-6 [&_table]:overflow-x-auto [&_table]:block [&_table]:md:table [&_table]:rounded-[8px] [&_table]:border [&_table]:border-slate-200
                     [&_th]:bg-[#f28e2b] [&_th]:text-white [&_th]:p-3 [&_th]:border [&_th]:border-slate-200 [&_th]:text-center [&_th]:text-[14px] [&_th]:font-semibold
                     [&_td]:p-3 [&_td]:border [&_td]:border-slate-200 [&_td]:text-[14px] [&_td]:text-center [&_td]:font-light [&_tr:nth-child(even)]:bg-[#f8f9fa] [&_tr:hover]:bg-orange-50/30 [&_tr]:transition-colors [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </section>
  )
}
