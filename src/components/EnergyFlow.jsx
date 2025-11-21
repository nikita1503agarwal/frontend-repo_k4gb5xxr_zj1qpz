import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function EnergyFlow() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.flow-title', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: '+=600',
          scrub: 1
        }
      })

      tl.to('.pv-line', { strokeDashoffset: 0, duration: 2, ease: 'none' }, 0)
        .to('.ion-glow', { opacity: 1, duration: 1 }, 0.5)
        .to('.heat-line', { strokeDashoffset: 0, duration: 2, ease: 'none' }, 0.6)
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="technology" className="py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="flow-title text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">How ionization heat flows</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">From sunlight to warmth. A visual story of clean energy conversion without combustion.</p>
        </div>

        <div className="relative rounded-3xl bg-white border border-slate-200 shadow-sm p-8">
          <svg viewBox="0 0 1200 500" className="w-full h-auto">
            <defs>
              <linearGradient id="pvGrad" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
              <linearGradient id="heatGrad" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>

            <rect x="40" y="200" width="200" height="120" rx="16" fill="#f1f5f9" stroke="#cbd5e1" />
            <text x="140" y="270" textAnchor="middle" className="fill-slate-600" fontSize="16">PV Panels</text>

            <rect x="500" y="140" width="200" height="220" rx="24" fill="#eef2ff" stroke="#c7d2fe" />
            <text x="600" y="210" textAnchor="middle" className="fill-slate-700" fontSize="18">Ionization Boiler</text>
            <circle cx="600" cy="260" r="46" fill="#dbeafe" className="ion-glow" style={{ opacity: 0 }} />
            <circle cx="600" cy="260" r="26" fill="#93c5fd" />

            <rect x="960" y="200" width="200" height="120" rx="16" fill="#f1f5f9" stroke="#cbd5e1" />
            <text x="1060" y="270" textAnchor="middle" className="fill-slate-600" fontSize="16">Home Heating</text>

            <path d="M240 260 C 340 260, 460 260, 520 230" stroke="url(#pvGrad)" strokeWidth="6" fill="none" strokeLinecap="round" className="pv-line" style={{ strokeDasharray: 400, strokeDashoffset: 400 }} />
            <path d="M700 230 C 820 260, 940 260, 960 260" stroke="url(#heatGrad)" strokeWidth="6" fill="none" strokeLinecap="round" className="heat-line" style={{ strokeDasharray: 400, strokeDashoffset: 400 }} />
          </svg>
        </div>
      </div>
    </section>
  )
}
