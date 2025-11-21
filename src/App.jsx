import Header from './components/Header'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import EnergyFlow from './components/EnergyFlow'
import Comparison from './components/Comparison'
import PVIntegration from './components/PVIntegration'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <EnergyFlow />
        <Comparison />
        <PVIntegration />
        <Testimonials />
      </main>
      <footer id="contact" className="py-16 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm text-slate-500">© {new Date().getFullYear()} Ellasystems. All rights reserved.</p>
          </div>
          <a href="#" className="px-5 py-3 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors">Contact sales</a>
        </div>
      </footer>
    </div>
  )
}

export default App
