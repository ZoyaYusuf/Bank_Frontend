import { ArrowRight, Play } from 'lucide-react'
import DashboardPreview from './DashboardPreview'

export default function Hero(){
  return (
    <section className="overflow-hidden pt-28 pb-12 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(22,119,255,0.22),transparent_30%),linear-gradient(180deg,#071A2B_0%,#0A1E34_100%)]" />
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 gap-10 px-4 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <div className="mb-5 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.26em] text-sky-200">
            Corporate lending • reimagined
          </div>

          <h1 className="max-w-xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-[5rem]">
            <span className="text-white">
              The operating system for
            </span>{" "}
            <span className="bg-gradient-to-r from-[#62A8FF] via-[#1677FF] to-[#7FE6C7] bg-clip-text text-transparent">
              corporate lending.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-slate-300 sm:text-lg">
            ARRA connects companies, banks and agents on a single operating layer to manage syndicated loan lifecycles, reference rates, accruals, repayments and reconciliation.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#1677FF] to-[#3b82f6] px-5 py-3 text-sm font-semibold !text-white shadow-[0_20px_35px_rgba(22,119,255,0.28)] transition hover:brightness-110"
            >
              Get Started <ArrowRight size={16} />
            </a>

            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium !text-white transition hover:bg-white/10"
            >
              <Play size={14} className="fill-current" />
              Explore How It Works
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-300">
            <div><span className="block text-2xl font-semibold text-white">₹100 Cr</span><span className="text-slate-400">Facility size</span></div>
            <div><span className="block text-2xl font-semibold text-white">3 banks</span><span className="text-slate-400">Participating lenders</span></div>
            <div><span className="block text-2xl font-semibold text-white">SOFR + 2.00%</span><span className="text-slate-400">Current rate</span></div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <DashboardPreview />
        </div>
      </div>
    </section>
  )
}
