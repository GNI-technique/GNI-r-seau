import Navigation from '@/components/layout/Navigation'
import StickyBanner from '@/components/layout/StickyBanner'
import FloatingCTA from '@/components/layout/FloatingCTA'
import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import Calculator from '@/components/sections/Calculator'
import Copilot from '@/components/sections/Copilot'
import Demo from '@/components/sections/Demo'
import Compatibility from '@/components/sections/Compatibility'
import Mutualization from '@/components/sections/Mutualization'
import Comparison from '@/components/sections/Comparison'
import Expertise from '@/components/sections/Expertise'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import CTAFinal from '@/components/sections/CTAFinal'

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark">
      {/* Layout components */}
      <Navigation />
      <StickyBanner />
      <FloatingCTA />

      {/* Sections */}
      <Hero />
      <Problem />
      <Calculator />
      <Copilot />
      <Demo />
      <Compatibility />
      <Mutualization />
      <Comparison />
      <Expertise />
      <Testimonials />
      <FAQ />
      <CTAFinal />
    </main>
  )
}
