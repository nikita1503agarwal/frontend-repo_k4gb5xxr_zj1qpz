import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    quote: "Quiet, instant heat and no gas contract. It's the future.",
    name: 'Mara S.',
    meta: 'Homeowner, Vienna'
  },
  {
    quote: 'Paired with our rooftop PV, our winter bills dropped dramatically.',
    name: 'Clément D.',
    meta: 'Architect, Lyon'
  },
  {
    quote: 'Installation was straightforward. The interface is beautifully simple.',
    name: 'Radu I.',
    meta: 'Installer, Cluj'
  }
]

export default function Testimonials() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.t-card').forEach((el, i) => {
        gsap.fromTo(el, { y: 30, opacity: 0, filter: 'blur(6px)' }, { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%' } })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">Trusted in modern homes</h3>
          <p className="mt-4 text-slate-600">Real experiences from installations across Europe.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure key={i} className="t-card rounded-2xl p-6 bg-gradient-to-b from-slate-50 to-white border border-slate-200 shadow-sm">
              <blockquote className="text-slate-800 text-lg">“{t.quote}”</blockquote>
              <figcaption className="mt-6 text-sm text-slate-600">{t.name} • {t.meta}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
