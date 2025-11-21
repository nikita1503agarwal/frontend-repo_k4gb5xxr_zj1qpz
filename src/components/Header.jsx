import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${scrolled ? 'backdrop-blur-md bg-white/60 border-b border-slate-200/60' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-400 shadow-lg shadow-blue-500/30" />
          <span className="font-semibold tracking-tight text-slate-900">Ellasystems</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <NavLink to="/technology" className={({isActive}) => `hover:text-slate-900 transition-colors ${isActive? 'text-slate-900' : 'text-slate-600'}`}>Technology</NavLink>
          <NavLink to="/products" className={({isActive}) => `hover:text-slate-900 transition-colors ${isActive? 'text-slate-900' : 'text-slate-600'}`}>Products</NavLink>
          <a href="#pv" className="text-slate-600 hover:text-slate-900 transition-colors">PV Solutions</a>
          <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors">
          Get a quote
        </a>
      </div>
    </header>
  )
}
