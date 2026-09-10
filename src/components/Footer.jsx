export default function Footer(){
  return (
    <footer className="border-t border-slate-200 bg-white/70 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-2 text-lg font-semibold text-slate-900">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#1677FF] to-[#20C997] shadow-[0_0_15px_rgba(22,119,255,0.75)]" />
              ARRA
            </div>
            <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">Corporate Loan Lifecycle &amp; Accrual Management Platform</p>
          </div>

          <div className="flex flex-wrap gap-10 text-sm text-slate-600">
            <div>
              <div className="font-semibold text-slate-900">Platform</div>
              <ul className="mt-3 space-y-2">
                <li><a href="#">Platform</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#how">How It Works</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-slate-900">About</div>
              <ul className="mt-3 space-y-2">
                <li><a href="#about">About</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-4 text-sm text-slate-500">© 2026 ARRA. Academic Project Prototype.</div>
      </div>
    </footer>
  )
}
