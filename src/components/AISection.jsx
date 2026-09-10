export default function AISection(){
  return (
    <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_20px_40px_rgba(15,23,42,0.06)] sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-600">AI assisted intelligence</div>
          <h2 className="mt-3 text-4xl tracking-tight text-slate-900">Intelligence where it matters.</h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">Future ARRA capabilities can assist with risk analysis, financial document extraction, credit assessment support, covenant monitoring, and natural-language Q&amp;A. AI is an assistive layer, not an autonomous decision maker.</p>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-slate-950 p-5 text-white shadow-[0_30px_60px_rgba(2,6,23,0.18)]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Risk assessment</div>
              <div className="mt-2 text-sm text-slate-200">Company repayment capacity</div>
            </div>
            <div className="text-xl font-semibold text-sky-300">82%</div>
          </div>

          <div className="mt-5 h-3 w-full overflow-hidden rounded-full bg-slate-800">
            <div className="h-full rounded-full bg-gradient-to-r from-[#1677FF] to-[#20C997]" style={{width:'82%'}} />
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-300">AI insight</div>
            <p className="mt-3 text-sm leading-6 text-slate-200">Based on the provided financial indicators, repayment capacity appears strong. This insight should be used as an assistive signal within the broader credit and operational review process.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
