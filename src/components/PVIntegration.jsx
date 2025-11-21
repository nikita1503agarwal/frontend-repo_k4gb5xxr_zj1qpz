import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function PVIntegration() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.pv-title', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } })
      gsap.utils.toArray('.pv-card').forEach((el, i) => {
        gsap.fromTo(el, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: i * 0.1, scrollTrigger: { trigger: el, start: 'top 85%' } })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="pv" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h3 className="pv-title text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">Maximize your PV investment</h3>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Seamless integration prioritizes solar generation, intelligently balancing grid input only when needed.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="pv-card rounded-2xl p-6 bg-white border border-slate-200 shadow-sm">
            <p className="text-sm uppercase tracking-widest text-slate-500">Priority</p>
            <p className="mt-2 text-xl font-semibold text-slate-900">Solar-first logic</p>
            <p className="mt-2 text-slate-600">Consumption automatically favors photovoltaic energy when available.</p>
          </div>
          <div className="pv-card rounded-2xl p-6 bg-white border border-slate-200 shadow-sm">
            <p className="text-sm uppercase tracking-widest text-slate-500">Efficiency</p>
            <p className="mt-2 text-xl font-semibold text-slate-900">Adaptive output</p>
            <p className="mt-2 text-slate-600">Smart modulation ensures just-right heating across seasons and demand.</p>
          </div>
          <div className="pv-card rounded-2xl p-6 bg-white border border-slate-200 shadow-sm">
            <p className="text-sm uppercase tracking-widest text-slate-500">Insight</p>
            <p className="mt-2 text-xl font-semibold text-slate-900">Live monitoring</p>
            <p className="mt-2 text-slate-600">Track energy flow and savings in real time with precise telemetry.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
