'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { TrendingDown, TrendingUp, X, Check } from 'lucide-react'

function CountUp({ target, duration = 2 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = target / (duration * 60)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [inView, target, duration])

  return <span ref={ref}>{count.toLocaleString('fr-FR')}</span>
}

export default function Problem() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="probleme" className="section-padding relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container-wide mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5"
            style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', color: '#F87171' }}
          >
            Le problème
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Le modèle des franchises immobilières
            <br />
            <span className="gradient-text">est-il encore adapté ?</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-lg">
            Plus vous vendez, plus vous payez. Un modèle qui pénalise votre réussite.
          </p>
        </motion.div>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {/* Traditional - bad */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-7 relative overflow-hidden"
            style={{
              background: 'rgba(239,68,68,0.05)',
              border: '1px solid rgba(239,68,68,0.2)',
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(239,68,68,0.15)' }}>
                <TrendingDown size={20} className="text-red-400" />
              </div>
              <div>
                <div className="text-xs text-red-400/70 font-semibold uppercase tracking-wider">Réseau traditionnel</div>
                <div className="font-bold text-white/80">Vous payez davantage</div>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {[
                '5 à 10% de votre CA part en redevance',
                'Plus vous vendez, plus vous payez',
                'Vos efforts profitent au réseau',
                'Croissance pénalisée',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/60">
                  <X size={14} className="text-red-400 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Animated bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-white/40 mb-1">
                <span>Votre CA</span>
                <span className="text-red-400">−7% en redevance</span>
              </div>
              <div className="h-8 rounded-lg overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '93%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="h-full rounded-lg relative"
                  style={{ background: 'rgba(59,130,246,0.3)' }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '7.5%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="absolute right-0 top-0 h-full rounded-r-lg"
                    style={{ background: 'rgba(239,68,68,0.7)' }}
                  />
                </motion.div>
              </div>
              <div className="flex justify-between text-xs">
                <span style={{ color: 'rgba(59,130,246,0.7)' }}>93% pour vous</span>
                <span className="text-red-400">7% au réseau</span>
              </div>
            </div>

            {/* Example */}
            <div className="mt-5 p-3 rounded-xl text-sm" style={{ background: 'rgba(239,68,68,0.08)' }}>
              <span className="text-white/50">500 000 € CA → </span>
              <span className="text-red-400 font-bold">35 000 € de redevances</span>
            </div>
          </motion.div>

          {/* GNI - good */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl p-7 relative overflow-hidden"
            style={{
              background: 'rgba(59,130,246,0.05)',
              border: '1px solid rgba(59,130,246,0.25)',
            }}
          >
            {/* Glow */}
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl"
              style={{ background: 'rgba(59,130,246,0.1)' }}
            />

            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(59,130,246,0.2)' }}>
                <TrendingUp size={20} className="text-brand-blue" />
              </div>
              <div>
                <div className="text-xs text-brand-blue/80 font-semibold uppercase tracking-wider">GNI</div>
                <div className="font-bold text-white">Vous gagnez davantage</div>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {[
                '0% de commission sur votre CA',
                'Seulement 150€ par vente réalisée',
                'Vos efforts vous profitent à vous',
                'Croissance maximisée',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                  <Check size={14} className="text-brand-blue shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Animated bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-white/40 mb-1">
                <span>Votre CA</span>
                <span className="text-brand-blue">Fixe : 150€ / vente</span>
              </div>
              <div className="h-8 rounded-lg overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '99.7%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="h-full rounded-lg"
                  style={{ background: 'linear-gradient(90deg, rgba(59,130,246,0.5), rgba(124,58,237,0.5))' }}
                />
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-brand-blue font-semibold">99.7% pour vous</span>
                <span className="text-white/40">0.3% fixe</span>
              </div>
            </div>

            {/* Example */}
            <div className="mt-5 p-3 rounded-xl text-sm" style={{ background: 'rgba(59,130,246,0.1)' }}>
              <span className="text-white/50">500 000 € CA × 20 ventes → </span>
              <span className="text-brand-blue font-bold">3 000 € avec GNI</span>
            </div>
          </motion.div>
        </div>

        {/* Big numbers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-6 max-w-2xl mx-auto text-center"
        >
          {[
            { value: 32000, suffix: '€', label: 'économisés en moyenne / an', color: '#10B981' },
            { value: 0, suffix: '%', label: 'de commission sur votre CA', color: '#3B82F6' },
            { value: 150, suffix: '€', label: 'seulement par vente réalisée', color: '#7C3AED' },
          ].map((stat, i) => (
            <div key={i} className="space-y-1">
              <div className="text-3xl md:text-4xl font-black" style={{ color: stat.color }}>
                <CountUp target={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-xs text-white/40 leading-tight">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
