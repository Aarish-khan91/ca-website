import React from 'react'

interface TableSectionProps {
  block: any
}

export function TableSection({ block }: TableSectionProps) {
  if (!block.headers && !block.rows) return null

  return (
    <section className="bg-white">
      <div className="container-prose px-4 md:px-8 mx-auto max-w-5xl">
        {block.title && (
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#0b293d] mb-4 text-center">
            {block.title}
          </h2>
        )}
        {block.description && (
          <p className="text-slate-600 text-[15px] md:text-[16px] max-w-3xl mx-auto text-center mb-8">
            {block.description}
          </p>
        )}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse my-6 block md:table rounded-[8px] border border-slate-200">
            <thead>
              <tr>
                {block.headers?.map((header: any, idx: number) => (
                  <th key={idx} className="bg-[#f28e2b] text-white p-3 border border-slate-200 text-center text-[14px] font-semibold">
                    {header.text}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows?.map((row: any, rIdx: number) => (
                <tr key={rIdx} className="transition-colors even:bg-[#f8f9fa] hover:bg-orange-50/30">
                  {row.cells?.map((cell: any, cIdx: number) => (
                    <td key={cIdx} className="p-3 border border-slate-200 text-black text-[14px] text-center font-light">
                      {cell.text}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
