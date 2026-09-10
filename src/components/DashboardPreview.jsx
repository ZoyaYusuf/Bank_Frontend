import { ArrowUpRight, Users } from 'lucide-react'

export default function DashboardPreview(){
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1a2c]/90 p-5 shadow-[0_40px_80px_rgba(5,10,20,0.5)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(22,119,255,0.25),transparent_30%)]" />
      <div className="absolute -bottom-6 right-0 h-32 w-32 rounded-full bg-[#20C997]/10 blur-3xl" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Facility</div>
            <div className="mt-2 text-3xl font-semibold text-white">₹100 Cr</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-right">
            <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Rate</div>
            <div className="mt-1 text-sm font-medium text-sky-200">SOFR + 2.00%</div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <div className="text-[10px] uppercase tracking-[0.16em] text-slate-400">Outstanding</div>
            <div className="mt-2 text-lg font-semibold text-white">₹30 Cr</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <div className="text-[10px] uppercase tracking-[0.16em] text-slate-400">Available</div>
            <div className="mt-2 text-lg font-semibold text-white">₹70 Cr</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1677FF]/20 text-sky-200"><Users size={15} /></div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.16em] text-slate-400">Lenders</div>
                <div className="mt-1 text-sm font-medium text-white">3 banks</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-slate-400">
            <span>Lifecycle flow</span>
            <span className="inline-flex items-center gap-1 text-emerald-300"><ArrowUpRight size={12} /> Healthy</span>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <div className="h-12 w-1/5 rounded-t-xl bg-gradient-to-t from-[#1677FF] to-[#84b6ff]" />
            <div className="h-16 w-1/5 rounded-t-xl bg-gradient-to-t from-[#1f5fff] to-[#bcd4ff]" />
            <div className="h-9 w-1/5 rounded-t-xl bg-gradient-to-t from-[#20C997] to-[#8de4cc]" />
            <div className="h-18 w-1/5 rounded-t-xl bg-gradient-to-t from-[#9db6ff] to-white/80" />
            <div className="h-14 w-1/5 rounded-t-xl bg-gradient-to-t from-[#6ea7ff] to-[#cbd9ff]" />
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-slate-200">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#20C997] shadow-[0_0_12px_rgba(32,201,151,0.8)]" />
            <span>Drawdown ₹30 Cr</span>
          </div>
          <span className="text-xs text-slate-400">Updated 2h ago</span>
        </div>
      </div>
    </div>
  )
}
