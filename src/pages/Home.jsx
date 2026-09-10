import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import RoleCards from '../components/RoleCards'
import Lifecycle from '../components/Lifecycle'
import Features from '../components/Features'
import ReferenceRate from '../components/ReferenceRate'
import AISection from '../components/AISection'
import Benefits from '../components/Benefits'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">
      <Navbar />
      <main className="pt-6">
        <Hero />

        <section className="max-w-6xl mx-auto px-4 pb-8">
          <div className="rounded-[28px] border border-slate-200/80 bg-white/80 px-5 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-sm">
            <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              <span className="text-slate-400">Trusted across</span>
              {['Loan Origination','Syndication','Drawdowns','Interest Accrual','Repayments','Reconciliation'].map((t)=> (
                <span key={t} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] tracking-[0.16em] text-slate-600">{t}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-8">
          <div className="mb-6">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">What is ARRA</div>
            <h2 className="mt-3 text-4xl tracking-tight text-slate-900">One platform. Every stage of corporate lending.</h2>
          </div>
          <RoleCards />
        </section>

        <section className="max-w-6xl mx-auto px-4 py-8">
          <Lifecycle />
        </section>

        <section className="max-w-6xl mx-auto px-4 py-8">
          <Features />
        </section>

        <section className="max-w-6xl mx-auto px-4 py-8">
          <ReferenceRate />
        </section>

        <section className="max-w-6xl mx-auto px-4 py-8">
          <AISection />
        </section>

        <section className="max-w-6xl mx-auto px-4 py-8">
          <Benefits />
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  )
}
