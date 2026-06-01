'use client'

import { motion } from 'framer-motion'
import { Plus, CheckCircle2, Clock } from 'lucide-react'

const softwares = [
  {
    name: 'AC3',
    logo: 'AC3',
    description: 'Logiciel immobilier de référence',
    available: true,
    highlight: true,
  },
  {
    name: 'Hektor',
    logo: 'HKT',
    description: 'CRM immobilier',
    available: false,
  },
  {
    name: 'Apimo',
    logo: 'APM',
    description: 'Solution digitale',
    available: false,
  },
  {
    name: 'Netty',
    logo: 'NTY',
    description: 'Logiciel de transaction',
    available: false,
  },
  {
    name: 'Adapt Immo',
    logo: 'ADP',
    description: 'Gestion immobilière',
    available: false,
  },
  {
    name: 'Périclès',
    logo: 'PRC',
    description: 'Solution métier',
    available: false,
  },
]

export default function Compatibility() {
  return (
    <section id="compatibilite" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent)' }}
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
            style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', color: '#34D399' }}
          >
            Compatibilité
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Compatible avec votre
            <br />
            <span className="gradient-text">environnement actuel.</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Notre architecture ouverte permet l&apos;intégration de tous les logiciels
            immobiliers du marché. Continuez à travailler avec vos outils habituels.
          </p>
        </motion.div>

        {/* Software grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          {softwares.map((sw, i) => (
            <motion.div
              key={sw.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="relative rounded-2xl p-5 group"
              style={{
                background: sw.highlight
                  ? 'rgba(59,130,246,0.08)'
                  : 'rgba(255,255,255,0.025)',
                border: sw.highlight
                  ? '1px solid rgba(59,130,246,0.35)'
                  : '1px solid rgba(255,255,255,0.07)',
                boxShadow: sw.highlight ? '0 8px 30px rgba(59,130,246,0.12)' : 'none',
              }}
            >
              {/* Highlight badge */}
              {sw.highlight && (
                <div
                  className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-xs font-semibold whitespace-nowrap"
                  style={{ background: 'linear-gradient(135deg, #3B82F6, #7C3AED)', color: 'white' }}
                >
                  Disponible maintenant
                </div>
              )}

              {/* Logo */}
              <div className="flex flex-col items-center text-center gap-3">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-sm font-black"
                  style={{
                    background: sw.highlight
                      ? 'linear-gradient(135deg, rgba(59,130,246,0.25), rgba(124,58,237,0.25))'
                      : 'rgba(255,255,255,0.05)',
                    border: sw.highlight
                      ? '1px solid rgba(59,130,246,0.4)'
                      : '1px solid rgba(255,255,255,0.08)',
                    color: sw.highlight ? '#3B82F6' : 'rgba(255,255,255,0.4)',
                  }}
                >
                  {sw.logo}
                </div>

                <div>
                  <div
                    className="font-bold text-sm"
                    style={{ color: sw.highlight ? '#F8F8F8' : 'rgba(255,255,255,0.5)' }}
                  >
                    {sw.name}
                  </div>
                  <div className="text-xs text-white/30 mt-0.5">{sw.description}</div>
                </div>

                {/* Status */}
                <div
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: sw.available ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.04)',
                    border: sw.available ? '1px solid rgba(34,197,94,0.25)' : '1px solid rgba(255,255,255,0.08)',
                    color: sw.available ? '#4ADE80' : 'rgba(255,255,255,0.3)',
                  }}
                >
                  {sw.available ? (
                    <>
                      <CheckCircle2 size={11} />
                      Connecté
                    </>
                  ) : (
                    <>
                      <Clock size={11} />
                      Bientôt
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* More card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: softwares.length * 0.07, duration: 0.4 }}
            className="rounded-2xl p-5 flex flex-col items-center justify-center gap-3"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px dashed rgba(255,255,255,0.1)',
            }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.04)' }}
            >
              <Plus size={24} className="text-white/30" />
            </div>
            <div className="text-center">
              <div className="font-bold text-sm text-white/40">Et bien d&apos;autres</div>
              <div className="text-xs text-white/25 mt-0.5">à venir</div>
            </div>
          </motion.div>
        </div>

        {/* Info banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          style={{
            background: 'rgba(59,130,246,0.06)',
            border: '1px solid rgba(59,130,246,0.2)',
          }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: 'rgba(59,130,246,0.15)' }}
          >
            <CheckCircle2 size={20} className="text-brand-blue" />
          </div>
          <div className="flex-1">
            <div className="font-bold text-white/90 mb-1">Architecture ouverte et évolutive</div>
            <div className="text-sm text-white/50">
              Notre API ouverte permet l&apos;intégration de n&apos;importe quel logiciel immobilier.
              Vous utilisez un outil non listé ? Contactez-nous pour une intégration personnalisée.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
