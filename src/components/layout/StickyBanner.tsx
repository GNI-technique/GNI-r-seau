'use client'

import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

export default function StickyBanner() {
  const handleScroll = () => {
    const el = document.querySelector('#calculateur')
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Desktop: top bar below nav */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="hidden md:flex fixed top-16 left-0 right-0 z-40 items-center justify-center gap-4 py-2.5 px-4"
        style={{
          background: 'linear-gradient(90deg, rgba(59,130,246,0.08) 0%, rgba(124,58,237,0.08) 100%)',
          borderBottom: '1px solid rgba(59,130,246,0.2)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <div className="flex items-center gap-2 text-sm text-white/80">
          <Zap size={14} className="text-brand-blue" />
          <span>
            <span className="font-semibold text-brand-blue">0 %</span> sur votre CA
            <span className="mx-2 opacity-30">•</span>
            <span className="font-semibold text-brand-blue">150 €</span> par vente réalisée
          </span>
        </div>
        <button
          onClick={handleScroll}
          className="text-xs font-semibold text-brand-blue hover:text-white bg-brand-blue/10 hover:bg-brand-blue/20 border border-brand-blue/30 px-3 py-1 rounded-full transition-all duration-150"
        >
          Calculer mes économies →
        </button>
      </motion.div>

      {/* Mobile: fixed bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3"
        style={{ background: 'rgba(5,5,5,0.9)', backdropFilter: 'blur(12px)' }}
      >
        <div
          className="rounded-2xl p-3 flex items-center justify-between gap-3"
          style={{
            background: 'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(124,58,237,0.1) 100%)',
            border: '1px solid rgba(59,130,246,0.3)',
          }}
        >
          <div className="flex flex-col">
            <span className="text-xs text-white/60">Réseau immobilier</span>
            <span className="text-sm font-semibold text-white">
              <span className="text-brand-blue">0%</span> sur votre CA •{' '}
              <span className="text-brand-blue">150€</span> / vente
            </span>
          </div>
          <button
            onClick={handleScroll}
            className="btn-primary text-xs px-4 py-2 shrink-0"
          >
            Calculer
          </button>
        </div>
      </motion.div>
    </>
  )
}
