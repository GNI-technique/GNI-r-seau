import Navigation from '@/components/layout/Navigation'
import Hero from '@/components/sections/Hero'
import Differentiator from '@/components/sections/Differentiator'
import Benefits from '@/components/sections/Benefits'
import Calculator from '@/components/sections/Calculator'
import NetworkStats from '@/components/sections/NetworkStats'
import Testimonials from '@/components/sections/Testimonials'
import Transparency from '@/components/sections/Transparency'
import FAQ from '@/components/sections/FAQ'
import CTAFinal from '@/components/sections/CTAFinal'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Differentiator />
      <Benefits />
      <Calculator />
      <NetworkStats />
      <Testimonials />
      <Transparency />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  )
}
