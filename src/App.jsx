import { Suspense, lazy } from 'react'
import Hero from './components/Hero'


// Lazy load components below the fold to improve initial load time
const Brands = lazy(() => import('./components/Brands'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Benefits = lazy(() => import('./components/Benefits'))
const CTA = lazy(() => import('./components/CTA'))
const Footer = lazy(() => import('./components/Footer'))
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'))

// Simple loading placeholder
const SectionLoader = () => (
  <div className="w-full h-96 flex items-center justify-center bg-slate-50">
    <div className="w-8 h-8 border-4 border-[#1E3A5F] border-t-transparent rounded-full animate-spin"></div>
  </div>
)

function App() {
  return (
    <div className="min-h-screen">
      {/* Eager load critical components */}
      <Hero />

      {/* Lazy load non-critical components */}
      <Suspense fallback={<SectionLoader />}>
        <Brands />
        <Testimonials />
        <Benefits />
        <CTA />
        <Footer />
        <WhatsAppButton />
      </Suspense>
    </div>
  )
}

export default App
