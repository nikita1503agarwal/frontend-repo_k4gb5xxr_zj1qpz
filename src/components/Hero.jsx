import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const boilerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out' })
      gsap.fromTo(boilerRef.current, { y: 40, opacity: 0, scale: 0.96 }, { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out', delay: 0.2 })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden min-h-[92vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center pt-24">
        <div>
          <h1 ref={titleRef} className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.05]">
            Heating reimagined:
            <br />
            Ionization. Zero emissions. Zero compromise.
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            A new class of ecological boiler engineered for modern homes—with or without photovoltaics. Quiet, clean and stunningly efficient.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#technology" className="px-6 py-3 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors">Discover the boiler</a>
            <a href="#contact" className="px-6 py-3 rounded-full border border-slate-300 text-slate-900 hover:border-slate-400 transition-colors">Get a quote</a>
          </div>
        </div>

        <div className="relative">
          <div ref={boilerRef} className="aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-slate-100 to-slate-200 shadow-2xl border border-white overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_20%_10%,rgba(59,130,246,0.25),transparent)]" />
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
              alt="Ellasystems Boiler"
              className="w-full h-full object-cover mix-blend-multiply opacity-80"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-blue-500 to-emerald-400 rounded-3xl blur-2xl opacity-30" />
          <div className="absolute -top-6 -right-10 w-56 h-56 bg-gradient-to-br from-blue-500 to-slate-400 rounded-full blur-3xl opacity-20" />
        </div>
      </div>
    </section>
  )
}
