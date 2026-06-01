'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, TrendingUp } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format,
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  onChange: (v: number) => void
  format: (v: number) => string
}) {
  const pct = ((value - min) / (max - min)) * 100

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-white/70">{label}</label>
        <div
          className="px-3 py-1 rounded-lg text-sm font-bold text-white"
          style={{ background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.3)' }}
        >
          {format(value)}
        </div>
      </div>
      <div className="relative h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
        <div
          className="absolute left-0 top-0 h-full rounded-full"
          style={{
            width: `${pct}%`,
            background: 'linear-gradient(90deg, #3B82F6, #7C3AED)',
          }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          style={{ margin: 0 }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white shadow-lg pointer-events-none"
          style={{
            left: `calc(${pct}% - 8px)`,
            boxShadow: '0 0 0 3px rgba(59,130,246,0.4)',
          }}
        />
      </div>
      <div className="flex justify-between text-xs text-white/30">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  )
}

function AnimatedNumber({ value }: { value: number }) {
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={value}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
      >
        {formatCurrency(value)}
      </motion.span>
    </AnimatePresence>
  )
}

export default function Calculator() {
  const [ventes, setVentes] = useState(20)
  const [ca, setCa] = useState(500000)
  const [redevance, setRedevance] = useState(5)

  const coutActuel = Math.round(ca * (redevance / 100))
  const coutGNI = ventes * 150
  const economie = Math.max(0, coutActuel - coutGNI)
  const economie5ans = economie * 5

  const handleDemo = useCallback(() => {
    const el = document.querySelector('#contact')
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }, [])

  return (
    <section id="calculateur" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)' }}
      />

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
            Calculateur d&apos;économies
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Combien économisez-vous
            <br />
            <span className="gradient-text">avec GNI ?</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Ajustez les paramètres ci-dessous et découvrez en temps réel vos économies potentielles.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Sliders */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-6 space-y-7"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <Slider
              label="Nombre de ventes annuelles"
              value={ventes}
              min={1}
              max={100}
              step={1}
              onChange={setVentes}
              format={(v) => `${v} vente${v > 1 ? 's' : ''}`}
            />
            <Slider
              label="Chiffre d'affaires annuel"
              value={ca}
              min={100000}
              max={5000000}
              step={10000}
              onChange={setCa}
              format={(v) => formatCurrency(v)}
            />
            <Slider
              label="Redevance actuelle (% du CA)"
              value={redevance}
              min={1}
              max={10}
              step={0.1}
              onChange={setRedevance}
              format={(v) => `${v.toFixed(1)} %`}
            />

            {/* Quick presets */}
            <div>
              <div className="text-xs text-white/30 mb-2 font-medium">Profils types :</div>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'Petite agence', ventes: 10, ca: 200000, redevance: 5 },
                  { label: 'Agence moyenne', ventes: 20, ca: 500000, redevance: 7 },
                  { label: 'Grande agence', ventes: 50, ca: 1500000, redevance: 8 },
                ].map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() => {
                      setVentes(preset.ventes)
                      setCa(preset.ca)
                      setRedevance(preset.redevance)
                    }}
                    className="text-xs px-3 py-1.5 rounded-lg transition-all duration-150"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'rgba(248,248,248,0.6)',
                    }}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {/* Comparison cards */}
            <div className="grid grid-cols-2 gap-3">
              <div
                className="rounded-xl p-4"
                style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)' }}
              >
                <div className="text-xs text-red-400/70 font-semibold uppercase tracking-wider mb-1">Coût actuel</div>
                <div className="text-xl font-black text-red-400">
                  <AnimatedNumber value={coutActuel} />
                </div>
                <div className="text-xs text-white/30 mt-1">{redevance.toFixed(1)}% de votre CA</div>
              </div>

              <div
                className="rounded-xl p-4"
                style={{ background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.2)' }}
              >
                <div className="text-xs text-brand-blue/80 font-semibold uppercase tracking-wider mb-1">Avec GNI</div>
                <div className="text-xl font-black text-brand-blue">
                  <AnimatedNumber value={coutGNI} />
                </div>
                <div className="text-xs text-white/30 mt-1">{ventes} vente{ventes > 1 ? 's' : ''} × 150 €</div>
              </div>
            </div>

            {/* Main savings card */}
            <motion.div
              className="rounded-2xl p-6 text-center relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(124,58,237,0.1) 100%)',
                border: '1px solid rgba(59,130,246,0.3)',
              }}
              animate={{ boxShadow: economie > 0 ? '0 0 40px rgba(59,130,246,0.2)' : 'none' }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.6), transparent)' }}
              />

              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp size={18} className="text-brand-blue" />
                <span className="text-sm font-semibold text-white/60 uppercase tracking-wider">Économie réalisée</span>
              </div>

              <div
                className="text-5xl md:text-6xl font-black mb-1"
                style={{
                  background: economie > 0
                    ? 'linear-gradient(135deg, #3B82F6 0%, #7C3AED 100%)'
                    : 'rgba(255,255,255,0.3)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                <AnimatedNumber value={economie} />
              </div>

              {economie > 0 ? (
                <div className="text-sm text-white/50">
                  En 5 ans, c&apos;est{' '}
                  <span className="text-brand-blue font-bold">
                    <AnimatedNumber value={economie5ans} />
                  </span>{' '}
                  économisés
                </div>
              ) : (
                <div className="text-sm text-white/40">
                  Ajustez les paramètres pour voir vos économies
                </div>
              )}

              {economie > 0 && (
                <div className="mt-2 text-xs text-white/30">
                  soit {Math.round((economie / coutActuel) * 100)}% de réduction de vos redevances
                </div>
              )}
            </motion.div>

            {/* 5-year projection */}
            {economie > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl p-4"
                style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)' }}
              >
                <div className="flex gap-3">
                  <div className="space-y-0.5">
                    {[1, 2, 3, 4, 5].map((yr) => (
                      <div key={yr} className="flex items-center gap-2 text-xs">
                        <span className="text-white/30 w-12">An {yr}</span>
                        <div
                          className="h-1.5 rounded-full"
                          style={{
                            width: `${yr * 20}%`,
                            background: `rgba(16,185,129,${0.3 + yr * 0.1})`,
                          }}
                        />
                        <span className="text-green-400 font-medium">+{formatCurrency(economie * yr)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleDemo}
              className="btn-primary w-full text-base py-4 justify-center"
            >
              {economie > 0
                ? `Je veux économiser ${formatCurrency(economie)} → Réserver une démo`
                : 'Réserver une démonstration'}
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
