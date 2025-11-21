import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Comparison() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', end: '+=500', scrub: 1 }
      })
      tl.to('.co2-bar', { width: '10%', duration: 1 })
        .to('.cost-bar', { width: '75%', duration: 1 }, 0)
        .to('.smoke', { opacity: 0, duration: 1 }, 0.2)
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Zero emissions. Real savings.</h3>
            <p className="mt-4 text-slate-600">Compared to combustion boilers, ionization eliminates CO2 output at the source and shifts costs to clean electricity—especially compelling with PV.</p>

            <div className="mt-8 space-y-6">
              <div>
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>CO2 Emissions</span>
                  <span>Ionization vs Gas/Wood</span>
                </div>
                <div className="mt-2 h-3 rounded-full bg-slate-100 relative overflow-hidden">
                  <div className="absolute left-0 top-0 h-full bg-emerald-500 co2-bar" style={{ width: '60%' }} />
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"12\"><circle cx=\"8\" cy=\"6\" r=\"4\" fill=\"%23cbd5e1\"/></svg>')] opacity-60" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>Operating Cost</span>
                  <span>With PV</span>
                </div>
                <div className="mt-2 h-3 rounded-full bg-slate-100 relative overflow-hidden">
                  <div className="absolute left-0 top-0 h-full bg-blue-500 cost-bar" style={{ width: '30%' }} />
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="h-64 rounded-2xl bg-gradient-to-b from-slate-50 to-white border border-slate-200 flex items-center justify-center overflow-hidden">
              <div className="smoke absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(2,6,23,0.15),transparent_40%)] transition-opacity" />
              <div className="relative z-10 text-center">
                <p className="text-sm uppercase tracking-widest text-slate-500">Combustion</p>
                <p className="text-2xl font-semibold text-slate-900">Replaced by ionization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
