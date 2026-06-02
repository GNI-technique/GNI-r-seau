'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function CountUp({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 2000
    const start = performance.now()
    const animate = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [inView, target])

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString('fr-FR')}{suffix}
    </span>
  )
}

const stats = [
  {
    value: 17,
    suffix: '+',
    label: 'ans d\'expérience',
    sublabel: 'Fondé en 2007',
    color: '#3B82F6',
  },
  {
    value: 0,
    suffix: '',
    displayValue: '[X]',
    label: 'agences accompagnées',
    sublabel: 'En France',
    color: '#6B9AC4',
    placeholder: true,
  },
  {
    value: 0,
    suffix: '',
    displayValue: '[X]',
    label: 'professionnels accompagnés',
    sublabel: 'Directeurs & agents',
    color: '#10B981',
    placeholder: true,
  },
]

const timeline = [
  { year: '2007', event: 'Fondation de GNI', desc: 'Création du réseau avec la vision d\'un modèle immobilier équitable.' },
  { year: '2010', event: 'Premiers outils digitaux', desc: 'Développement des premières solutions technologiques pour les membres.' },
  { year: '2015', event: 'Expansion nationale', desc: 'Déploiement du réseau dans les principales régions françaises.' },
  { year: '2020', event: 'Copilote 2.0', desc: 'Lancement de la plateforme technologique de nouvelle génération.' },
  { year: '2024', event: 'Intégration IA', desc: 'Automatisations avancées et intelligence artificielle au service des membres.' },
  { year: '2025+', event: 'L\'avenir de l\'immobilier', desc: 'Expansion continue et innovation permanente pour rester leader.', active: true },
]

export default function Expertise() {
  return (
    <section id="expertise" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent)' }}
        />
        <div
          className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{ background: 'rgba(59,130,246,0.04)' }}
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
          <div className="section-label-block mb-6">
            <span className="section-label-line" />
            <span
              className="text-[11px] font-semibold uppercase text-[#6B9AC4]"
              style={{ letterSpacing: '0.4em' }}
            >
              Notre expertise
            </span>
            <span className="section-label-line" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Une expertise immobilière
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #3B82F6 0%, #6B9AC4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              construite depuis 2007.
            </span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            17 ans d&apos;expérience au service des professionnels de l&apos;immobilier.
            Une connaissance profonde du secteur et de ses enjeux.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl p-8 text-center glass"
              style={{ border: `1px solid ${stat.color}20` }}
            >
              <div
                className="text-5xl md:text-6xl font-black mb-2"
                style={{
                  background: `linear-gradient(135deg, ${stat.color} 0%, ${stat.color}90 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {stat.placeholder ? (
                  stat.displayValue
                ) : (
                  <CountUp target={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <div className="font-bold text-white/80 mb-1">{stat.label}</div>
              <div className="text-xs text-white/35">{stat.sublabel}</div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <h3 className="text-xl font-bold text-white/80 text-center mb-10">
            Notre parcours depuis 2007
          </h3>
          <div className="relative">
            {/* Timeline line — logo DNA horizontal rule */}
            <div
              className="absolute top-5 left-0 right-0 h-px hidden md:block"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(45,74,107,0.5), rgba(59,130,246,0.3), transparent)' }}
            />

            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Dot */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black mb-3 relative z-10 shrink-0"
                    style={{
                      background: item.active
                        ? 'linear-gradient(135deg, #2D4A6B, #3B82F6)'
                        : 'rgba(255,255,255,0.06)',
                      border: item.active
                        ? '2px solid rgba(45,74,107,0.7)'
                        : '1px solid rgba(255,255,255,0.1)',
                      color: item.active ? 'white' : 'rgba(255,255,255,0.4)',
                      boxShadow: item.active ? '0 0 20px rgba(45,74,107,0.4)' : 'none',
                    }}
                  >
                    {item.year.slice(2)}
                  </div>
                  <div
                    className="text-sm font-bold mb-1"
                    style={{ color: item.active ? '#6B9AC4' : 'rgba(255,255,255,0.7)' }}
                  >
                    {item.year}
                  </div>
                  <div
                    className="text-xs font-semibold mb-1"
                    style={{ color: item.active ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.5)' }}
                  >
                    {item.event}
                  </div>
                  <div className="text-xs text-white/30 leading-tight hidden md:block">
                    {item.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
