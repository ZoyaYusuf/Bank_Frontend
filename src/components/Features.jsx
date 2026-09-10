import { FileText, Users, Layers, CreditCard, BarChart2, Percent, List, Layers2, BookOpen, Shield } from 'lucide-react'

const items = [
  {title:'Corporate Loan Management', text:'End-to-end facility tracking and lifecycle management.', icon:FileText, accent:'from-sky-500/15 to-sky-500/5'},
  {title:'Syndication & Bank Participation', text:'Manage lenders, allocations and exposures.', icon:Users, accent:'from-indigo-500/15 to-indigo-500/5'},
  {title:'Facility & Tranche Management', text:'Define tranches, limits and contractual terms.', icon:Layers, accent:'from-violet-500/15 to-violet-500/5'},
  {title:'Drawdown Management', text:'Track drawdown events and outstanding balances.', icon:CreditCard, accent:'from-cyan-500/15 to-cyan-500/5'},
  {title:'SOFR & SONIA Reference Rates', text:'Built-in reference rate inputs for calculations.', icon:Percent, accent:'from-emerald-500/15 to-emerald-500/5'},
  {title:'Interest & Accrual Engine', text:'Accurate accruals and posting mechanics.', icon:BarChart2, accent:'from-blue-500/15 to-blue-500/5'},
  {title:'Repayment Management', text:'Allocate repayments across participants.', icon:List, accent:'from-amber-500/15 to-amber-500/5'},
  {title:'Payment Allocation', text:'Automated allocation rules and tracking.', icon:Layers2, accent:'from-fuchsia-500/15 to-fuchsia-500/5'},
  {title:'Ledger & Transaction History', text:'Immutable transaction ledger and exports.', icon:BookOpen, accent:'from-slate-500/15 to-slate-500/5'},
  {title:'Reconciliation & Reporting', text:'Tools for reconciliation and audit-ready reports.', icon:Shield, accent:'from-rose-500/15 to-rose-500/5'}
]

export default function Features(){
  return (
    <section id="features" className="py-6">
      <div className="mb-6">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-600">Core platform features</div>
        <h2 className="mt-3 text-4xl tracking-tight text-slate-900">Built for the mechanics of modern corporate lending.</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map(({title,text,icon:Icon,accent}, index)=> (
          <div key={title} className={`group rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_16px_30px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_22px_38px_rgba(15,23,42,0.08)] ${index % 3 === 0 ? 'xl:col-span-1' : ''}`}>
            <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-[#1677FF]`}>
              <Icon size={20} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
