import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { cleanMarkdown } from '@/lib/markdown'

interface ServiceOverviewSectionProps {
  service: any
}

export function ServiceOverviewSection({ service }: ServiceOverviewSectionProps) {
  if (!service.introDescription && !service.introQuote) return null

  return (
    <section className="bg-[#f8f9fa] pt-16 pb-16 md:pt-24 md:pb-4 flex flex-col border-b border-slate-100">
      <div className="container-prose px-4 md:px-8 mx-auto max-w-6xl">
        {/* Intro description */}
        <div className="bg-white p-8 md:p-12 shadow-sm rounded-[8px] border border-slate-100 mb-16">
          {service.introQuote && (
            <div className="border-l-4 border-[#f28e2b] pl-4 italic text-[18px] text-[#0b293d] mb-6 font-medium">
              &quot;{service.introQuote}&quot;
            </div>
          )}
          {service.introDescription && (
            <div
              className="prose max-w-none text-slate-700 leading-relaxed text-[15px] md:text-[16px] space-y-6
                         [&_p]:mb-4 [&_p]:font-light
                         [&_strong]:text-[#0b293d] [&_strong]:font-semibold
                         [&_em]:italic
                         [&_u]:underline
                         [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1
                         [&_h1]:text-2xl [&_h2]:text-xl [&_h3]:text-lg [&_h1]:font-bold [&_h2]:font-bold [&_h3]:font-bold
                         [&_h1]:text-[#0b293d] [&_h2]:text-[#0b293d] [&_h3]:text-[#0b293d] [&_h1]:mt-6 [&_h2]:mt-6 [&_h3]:mt-6
                         [&_img]:rounded-[8px] [&_img]:max-w-full [&_img]:my-6 [&_img]:shadow-sm
                         [&_a]:text-[#f28e2b] [&_a]:underline hover:[&_a]:text-[#d87f1c] transition-colors
                         [&_blockquote]:border-l-4 [&_blockquote]:border-[#f28e2b] [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-6 [&_blockquote]:text-[#0b293d]"
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                {cleanMarkdown(service.introDescription)}
              </ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
