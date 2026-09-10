export default function ReferenceRate(){
  return (
    <section className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-900 via-[#0b1f39] to-[#0b2440] p-6 text-white shadow-[0_25px_60px_rgba(9,17,30,0.35)] sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">Reference rate engine</div>
          <h2 className="mt-3 text-4xl tracking-tight text-white">
            <span className="text-white">
              Reference rates, built into the lifecycle.
            </span>{" "}
            </h2>
          <p className="mt-4 max-w-xl text-slate-300">ARRA tracks reference-rate changes and uses them as inputs for interest accrual calculations.</p>

          <div className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <div className="flex items-center justify-between text-sm text-slate-300">
              <span>SOFR</span>
              <span className="font-medium text-white">4.50%</span>
            </div>
            <div className="mt-3 flex items-center justify-between text-sm text-slate-300">
              <span>Spread</span>
              <span className="font-medium text-white">2.00%</span>
            </div>
            <div className="my-4 h-px bg-white/10" />
            <div className="flex items-center justify-between text-base font-semibold text-white">
              <span>Rate</span>
              <span className="text-emerald-300">6.50%</span>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-slate-950/30 p-5">
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-300">Rate calculation</div>
            <div className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-emerald-300">Live</div>
          </div>

          <div className="mt-6 space-y-4 text-sm text-slate-300">
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
              <span>SOFR</span>
              <span className="font-medium text-white">4.50%</span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
              <span>+ Contractual spread</span>
              <span className="font-medium text-white">2.00%</span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2">
              <span className="text-emerald-200">Effective rate</span>
              <span className="font-medium text-emerald-300">6.50%</span>
            </div>
          </div>

          <p className="mt-6 text-sm leading-6 text-slate-300">ARRA does not make credit decisions; it provides reliable inputs and calculations for accrual and repayment workflows.</p>
        </div>
      </div>
    </section>
  )
}
