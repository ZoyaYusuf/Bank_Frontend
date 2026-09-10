import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  const [scrolled, setScrolled] = useState(false)
  useEffect(()=>{
    const onScroll = ()=> setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${scrolled ? 'bg-[#071A2B]/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 text-white font-semibold tracking-[0.2em] text-sm no-underline hover:no-underline">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#1677FF] to-[#20C997] shadow-[0_0_18px_rgba(22,119,255,0.9)]" />
            ARRA
          </Link>
          <nav className="hidden lg:flex items-center gap-6 text-sm !text-slate-300">
            <a href="#platform" className="transition hover:text-white !text-white">Platform</a>
            <a href="#how" className="transition hover:text-white !text-white">How It Works</a>
            <a href="#features" className="transition hover:text-white !text-white">Features</a>
            <a href="#about" className="transition hover:text-white !text-white">About</a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/calculator" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#1677FF] to-[#1a8cff] px-4 py-2.5 text-sm font-medium text-white shadow-[0_16px_30px_rgba(22,119,255,0.25)] transition hover:brightness-110 no-underline hover:no-underline">
            Interest Calculator
          </Link>
        </div>
      </div>
    </header>
  )
}
