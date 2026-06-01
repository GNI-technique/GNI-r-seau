'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, ChevronDown, Play } from 'lucide-react'

const trustBadges = [
  '0 % sur votre chiffre d\'affaires',
  '150 € par vente réalisée',
  'Compatible avec vos logiciels',
  'Accompagnement depuis 2007',
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 1.11, 0.81, 0.99] } },
}

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 px-4"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-overlay opacity-40" />

      {/* Gradient orbs */}
      <div
        className="orb orb-blue absolute"
        style={{ width: 600, height: 600, top: '-10%', left: '20%', opacity: 0.12 }}
      />
      <div
        className="orb orb-purple absolute"
        style={{ width: 500, height: 500, bottom: '10%', right: '10%', opacity: 0.1 }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)' }}
      />

      {/* Hero content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-6">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-brand-blue"
            style={{
              background: 'rgba(59,130,246,0.08)',
              border: '1px solid rgba(59,130,246,0.25)',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse-slow" />
            Le réseau immobilier qui révolutionne le modèle économique
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6"
        >
          Gardez{' '}
          <span
            className="relative inline-block"
            style={{
              background: 'linear-gradient(135deg, #3B82F6 0%, #7C3AED 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            100 %
          </span>
          <br />
          de votre chiffre
          <br />
          d&apos;affaires.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Le premier réseau immobilier qui remplace les commissions sur votre CA par une{' '}
          <span className="text-white/90 font-medium">contribution fixe de 150 €</span>{' '}
          uniquement lorsqu&apos;une vente est réalisée.
        </motion.p>

        {/* Trust badges */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {trustBadges.map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 text-sm text-white/70"
            >
              <CheckCircle2 size={15} className="text-brand-blue shrink-0" />
              <span>{badge}</span>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('#contact')}
            className="btn-primary text-base px-7 py-4 w-full sm:w-auto"
          >
            Réserver une démonstration
            <ArrowRight size={18} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('#demo')}
            className="btn-ghost text-base px-7 py-4 w-full sm:w-auto"
          >
            <Play size={16} className="text-brand-blue" />
            Voir l&apos;outil en action
          </motion.button>
        </motion.div>

        {/* Trust bar */}
        <motion.p
          variants={itemVariants}
          className="text-sm text-white/35 font-medium tracking-wide"
        >
          Depuis 2007 au service des professionnels de l&apos;immobilier
        </motion.p>
      </motion.div>

      {/* Dashboard mockup */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: [0.21, 1.11, 0.81, 0.99] }}
        className="relative z-10 mt-16 w-full max-w-4xl mx-auto px-4"
      >
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)',
          }}
        >
          {/* Window chrome */}
          <div
            className="flex items-center gap-2 px-4 py-3"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}
          >
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <div className="flex-1 mx-4">
              <div
                className="h-5 rounded-md max-w-xs mx-auto flex items-center justify-center text-xs text-white/30"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                gni.fr/dashboard
              </div>
            </div>
          </div>

          {/* Dashboard content */}
          <div className="p-6 grid grid-cols-12 gap-4">
            {/* Sidebar */}
            <div className="col-span-2 space-y-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-7 rounded-lg"
                  style={{
                    background: i === 1 ? 'rgba(59,130,246,0.3)' : 'rgba(255,255,255,0.04)',
                    width: `${60 + i * 5}%`,
                  }}
                />
              ))}
            </div>

            {/* Main area */}
            <div className="col-span-10 space-y-4">
              {/* Stats row */}
              <div className="grid grid-cols-4 gap-3">
                {[
                  { label: 'Ventes ce mois', value: '12', color: '#3B82F6' },
                  { label: 'CA réalisé', value: '184 000 €', color: '#10B981' },
                  { label: 'Contribution GNI', value: '1 800 €', color: '#7C3AED' },
                  { label: 'Économies', value: '7 400 €', color: '#F59E0B' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-3 rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <div className="text-xs text-white/40 mb-1">{stat.label}</div>
                    <div className="text-base font-bold" style={{ color: stat.color }}>{stat.value}</div>
                  </div>
                ))}
              </div>

              {/* Chart area */}
              <div
                className="rounded-xl p-4 h-24 flex items-end gap-1.5"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
              >
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 1.2 + i * 0.05, duration: 0.4 }}
                    className="flex-1 rounded-sm"
                    style={{
                      background: i === 11
                        ? 'linear-gradient(to top, #3B82F6, #7C3AED)'
                        : 'rgba(59,130,246,0.3)',
                    }}
                  />
                ))}
              </div>

              {/* Table rows */}
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-8 rounded-lg flex items-center px-3 gap-3"
                    style={{ background: 'rgba(255,255,255,0.02)' }}
                  >
                    <div className="w-5 h-5 rounded-full" style={{ background: `rgba(59,130,246,${0.3 + i * 0.1})` }} />
                    <div className="h-2 rounded-full flex-1" style={{ background: 'rgba(255,255,255,0.06)', maxWidth: `${50 + i * 15}%` }} />
                    <div className="h-2 rounded-full w-16" style={{ background: 'rgba(16,185,129,0.3)' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Glow under card */}
        <div
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 blur-3xl"
          style={{ background: 'rgba(59,130,246,0.15)' }}
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo('#probleme')}
      >
        <span className="text-xs text-white/30 tracking-widest uppercase">Défiler</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={18} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}
