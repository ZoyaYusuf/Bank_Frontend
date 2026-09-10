const items = [
  {title:'Centralized Data', text:'One source of truth for every facility.'},
  {title:'Financial Accuracy', text:'Structured calculations for rates, accruals and repayments.'},
  {title:'Transparency', text:'Clear visibility across companies, banks and agents.'},
  {title:'Auditability', text:'Track transactions, changes and activities.'}
]

export default function Benefits(){
  return (
    <section className="py-6">
      <div className="mb-6">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-600">Platform benefits</div>
        <h2 className="mt-3 text-4xl tracking-tight text-slate-900">Financial clarity for every stakeholder.</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {items.map((i, index)=> (
          <div key={i.title} className={`rounded-[28px] border p-5 shadow-[0_18px_36px_rgba(15,23,42,0.05)] ${index % 2 === 0 ? 'border-sky-100 bg-gradient-to-br from-sky-50 to-white' : 'border-emerald-100 bg-gradient-to-br from-emerald-50 to-white'}`}>
            <div className="mb-4 h-10 w-10 rounded-xl bg-slate-900 text-sm font-semibold text-white flex items-center justify-center">0{index + 1}</div>
            <div className="text-xl font-semibold text-slate-900">{i.title}</div>
            <div className="mt-3 text-sm leading-6 text-slate-600">{i.text}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
