import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ProblemSolution() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.ps-card').forEach((el, i) => {
        gsap.fromTo(el, { y: 40, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%'
          }
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">The problem. The solution.</h2>
          <p className="mt-4 text-slate-600">From gas dependency and rising costs to clean, electrical independence.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="ps-card rounded-2xl p-8 bg-gradient-to-b from-slate-50 to-white border border-slate-200">
            <h3 className="text-2xl font-semibold text-slate-900">The Problem</h3>
            <ul className="mt-6 space-y-4 text-slate-700">
              <li className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-rose-500"></span> Volatile gas prices and supply uncertainty</li>
              <li className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-rose-500"></span> Combustion emissions and maintenance burden</li>
              <li className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-rose-500"></span> Inefficient legacy hardware</li>
            </ul>
          </div>

          <div className="ps-card rounded-2xl p-8 bg-gradient-to-b from-emerald-50 to-white border border-emerald-200/70">
            <h3 className="text-2xl font-semibold text-slate-900">The Solution</h3>
            <ul className="mt-6 space-y-4 text-slate-700">
              <li className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-emerald-500"></span> Ionization heat—no flame, no smoke, no CO2</li>
              <li className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-emerald-500"></span> Designed to pair perfectly with photovoltaics</li>
              <li className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-emerald-500"></span> Quiet, efficient and built for modern homes</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
