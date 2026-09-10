const steps = ['Loan Request','Facility Structuring','Bank Participation','Drawdown','Interest Accrual','Repayment','Allocation','Reconciliation']

export default function Lifecycle(){
  return (
    <section id="how" className="rounded-[32px] border border-slate-200 bg-white/80 p-6 shadow-[0_20px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-8">
      <div className="mb-8">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-600">How ARRA works</div>
        <h2 className="mt-3 text-4xl tracking-tight text-slate-900">From request to reconciliation, in one connected flow.</h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-sky-200 via-slate-300 to-emerald-200 md:block" />
        <div className="grid gap-5 md:grid-cols-8">
          {steps.map((s, i)=> (
            <div key={s} className="relative z-10 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white text-sm font-semibold text-slate-900 shadow-[0_8px_18px_rgba(15,23,42,0.08)]">
                {String(i+1).padStart(2,'0')}
              </div>
              <div className="mt-3 text-sm leading-5 text-slate-600">{s}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-[28px] border border-sky-100 bg-gradient-to-r from-sky-50 via-white to-emerald-50 p-5 sm:p-6">
        <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Example</div>
        <p className="mt-3 max-w-4xl text-lg text-slate-700">
          A ₹100 Cr facility can be distributed across multiple participating banks. When the company draws ₹30 Cr, ARRA tracks utilization, lender participation, applicable reference rates, accrued interest and repayment allocation.
        </p>
      </div>
    </section>
  )
}
