'use client'

import { motion } from 'framer-motion'
import { X, Check, ArrowRight } from 'lucide-react'

const rows = [
  {
    feature: 'Commission sur CA',
    traditional: '5–10% de votre CA',
    gni: '0%',
    traditionalBad: true,
  },
  {
    feature: 'Contribution réseau',
    traditional: 'Élevée et variable',
    gni: '150 € / vente',
    traditionalBad: true,
  },
  {
    feature: 'Liberté commerciale',
    traditional: 'Limitée',
    gni: 'Totale',
    traditionalBad: true,
  },
  {
    feature: 'Technologie',
    traditional: 'Basique',
    gni: 'Copilote IA',
    traditionalBad: true,
  },
  {
    feature: 'Mutualisation',
    traditional: 'Partielle',
    gni: 'Complète',
    traditionalBad: true,
  },
  {
    feature: 'Support',
    traditional: 'Standard',
    gni: 'Dédié',
    traditionalBad: true,
  },
  {
    feature: 'Rentabilité',
    traditional: 'Faible',
    gni: 'Maximale',
    traditionalBad: true,
  },
  {
    feature: 'Compatibilité logiciels',
    traditional: 'Propriétaire',
    gni: 'Ouverte & universelle',
    traditionalBad: true,
  },
]

export default function Comparison() {
  const scrollToContact = () => {
    const el = document.querySelector('#contact')
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section id="comparatif" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent)' }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'rgba(59,130,246,0.04)' }}
        />
      </div>

      <div className="container-narrow mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5"
            style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.25)', color: '#3B82F6' }}
          >
            Comparatif
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            GNI vs les réseaux
            <br />
            <span className="gradient-text">traditionnels</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Un comparatif transparent pour vous aider à faire le meilleur choix pour votre agence.
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(255,255,255,0.08)' }}
        >
          {/* Table header */}
          <div
            className="grid grid-cols-3"
            style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="px-5 py-4 text-sm font-semibold text-white/50">Critère</div>
            <div className="px-5 py-4 text-sm font-semibold text-red-400/80 flex items-center gap-2 border-l border-white/5">
              <X size={14} />
              Franchise Traditionnelle
            </div>
            <div
              className="px-5 py-4 text-sm font-bold text-brand-blue flex items-center gap-2 border-l"
              style={{
                borderLeft: '1px solid rgba(59,130,246,0.3)',
                background: 'rgba(59,130,246,0.06)',
              }}
            >
              <Check size={14} />
              GNI
              <div
                className="ml-auto px-1.5 py-0.5 rounded text-xs font-semibold"
                style={{ background: 'rgba(59,130,246,0.2)', color: '#93C5FD' }}
              >
                ✓ Recommandé
              </div>
            </div>
          </div>

          {/* Table rows */}
          {rows.map((row, i) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="grid grid-cols-3 group"
              style={{
                borderBottom: i < rows.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              }}
            >
              <div className="px-5 py-3.5 text-sm text-white/60 group-hover:text-white/80 transition-colors font-medium">
                {row.feature}
              </div>

              {/* Traditional */}
              <div
                className="px-5 py-3.5 flex items-center gap-2 border-l border-white/5"
                style={{ background: i % 2 === 0 ? 'rgba(239,68,68,0.02)' : 'transparent' }}
              >
                <X size={13} className="text-red-400/60 shrink-0" />
                <span className="text-sm text-red-400/70">{row.traditional}</span>
              </div>

              {/* GNI */}
              <div
                className="px-5 py-3.5 flex items-center gap-2"
                style={{
                  borderLeft: '1px solid rgba(59,130,246,0.15)',
                  background: i % 2 === 0 ? 'rgba(59,130,246,0.04)' : 'rgba(59,130,246,0.02)',
                }}
              >
                <Check size={13} className="text-green-400 shrink-0" />
                <span className="text-sm text-white/90 font-semibold">{row.gni}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <p className="text-white/40 text-sm mb-5">
            Le choix est clair. Rejoignez GNI et gardez 100% de votre CA.
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToContact}
            className="btn-primary text-base px-8 py-4"
          >
            Rejoindre GNI
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
