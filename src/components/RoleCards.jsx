import { Users, Landmark, FileText } from 'lucide-react'

const cards = [
  { title: 'COMPANY', text: 'Track facilities, utilization, repayments and financial obligations.', icon: Users },
  { title: 'BANK', text: 'Monitor participation, outstanding exposure, reference rates and accrued interest.', icon: Landmark },
  { title: 'AGENT', text: 'Coordinate facilities, lender allocations, payments, reconciliation and reporting.', icon: FileText }
]

export default function RoleCards(){
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {cards.map(({title,text,icon:Icon}, index)=> (
        <div key={title} className={`rounded-[28px] border p-5 shadow-[0_20px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_50px_rgba(15,23,42,0.12)] ${index === 1 ? 'bg-slate-900 text-white border-slate-900' : 'bg-white border-slate-200 text-slate-900'}`}>
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1677FF]/15 to-[#20C997]/15 text-[#1677FF]">
            <Icon size={22} />
          </div>
          <div className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${index === 1 ? 'text-slate-400' : 'text-slate-500'}`}>{title}</div>
          <p className={`mt-3 text-base leading-7 ${index === 1 ? 'text-slate-200' : 'text-slate-600'}`}>{text}</p>
        </div>
      ))}
    </div>
  )
}
