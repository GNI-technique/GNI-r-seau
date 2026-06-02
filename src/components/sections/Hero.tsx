'use client'

import { ArrowDown } from 'lucide-react'

const proofStats = [
  { value: '180+', label: 'Agences franchisées' },
  { value: '17 ans', label: "D'expérience réseau" },
  { value: '94%', label: 'Taux de renouvellement' },
  { value: '-12 jours', label: 'vs délai marché national' },
]

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) {
      const offset = 70
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section id="concept" className="relative min-h-screen bg-[#122845] flex flex-col">
      {/* Architectural grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(74,112,153,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74,112,153,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center relative z-10">
        {/* Label */}
        <p
          className="label-tag text-[#4A7099] mb-8"
          style={{ letterSpacing: '0.3em' }}
        >
          Réseau national d&apos;agences franchisées
        </p>

        {/* Headline */}
        <h1
          className="font-bold text-[#EDE8DC] leading-[0.95]"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(52px, 8vw, 88px)',
          }}
        >
          Vos clients ne négocient<br />plus les honoraires.<br />
          <span style={{ color: 'var(--gni-cream)' }}>Jamais.</span>
        </h1>

        {/* Rule */}
        <div className="w-12 h-px bg-[#EDE8DC]/20 my-8" />

        {/* Subhead */}
        <p className="text-[#EDE8DC]/65 text-lg max-w-xl leading-relaxed">
          GNI est un réseau national de franchises immobilières fondé en 2007.
          Un modèle unique&nbsp;: commission fixe par vente, pas un pourcentage.
        </p>

        {/* CTA */}
        <button
          onClick={() => scrollTo('#differenciateur')}
          className="btn-cta mt-10 text-base"
        >
          Découvrir le modèle GNI
          <ArrowDown size={16} />
        </button>
      </div>

      {/* Proof bar */}
      <div className="border-t border-[#EDE8DC]/10 py-8 px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {proofStats.map((stat, i) => (
            <div key={i} className="text-center md:text-left relative">
              {i > 0 && (
                <div className="hidden md:block absolute left-0 top-0 h-full w-px bg-[#EDE8DC]/10" />
              )}
              <div
                className="font-bold text-[#EDE8DC] text-4xl md:text-5xl leading-none"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {stat.value}
              </div>
              <div className="label-tag text-[#4A7099] mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
