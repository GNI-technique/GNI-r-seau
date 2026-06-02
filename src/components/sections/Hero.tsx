'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react'
import Image from 'next/image'

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

// Simple France network SVG — dots connected by lines, evokes a property network spreading nationally
function FranceNetworkMap() {
  // Approximate city positions as % of a 400×460 viewBox
  const cities = [
    { id: 'paris',     x: 200, y: 110, size: 5, label: 'Paris' },
    { id: 'lyon',      x: 225, y: 250, size: 4 },
    { id: 'marseille', x: 230, y: 340, size: 4 },
    { id: 'bordeaux',  x: 120, y: 290, size: 3 },
    { id: 'toulouse',  x: 165, y: 320, size: 3 },
    { id: 'nantes',    x: 105, y: 200, size: 3 },
    { id: 'rennes',    x: 90,  y: 155, size: 3 },
    { id: 'strasbourg',x: 295, y: 140, size: 3 },
    { id: 'nice',      x: 280, y: 330, size: 3 },
    { id: 'lille',     x: 195, y: 65,  size: 3 },
  ]

  const connections = [
    ['paris', 'lyon'],
    ['paris', 'nantes'],
    ['paris', 'rennes'],
    ['paris', 'strasbourg'],
    ['paris', 'lille'],
    ['lyon', 'marseille'],
    ['lyon', 'toulouse'],
    ['lyon', 'nice'],
    ['bordeaux', 'toulouse'],
    ['bordeaux', 'nantes'],
    ['marseille', 'nice'],
    ['nantes', 'rennes'],
  ]

  const cityMap = Object.fromEntries(cities.map(c => [c.id, c]))

  return (
    <svg
      viewBox="60 40 220 340"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Connection lines */}
      {connections.map(([a, b]) => {
        const ca = cityMap[a]
        const cb = cityMap[b]
        return (
          <motion.line
            key={`${a}-${b}`}
            x1={ca.x} y1={ca.y}
            x2={cb.x} y2={cb.y}
            stroke="#2D4A6B"
            strokeWidth="0.6"
            strokeOpacity="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.4, ease: 'easeInOut' }}
          />
        )
      })}
      {/* City dots */}
      {cities.map((c, i) => (
        <g key={c.id}>
          <motion.circle
            cx={c.x}
            cy={c.y}
            r={c.size + 2}
            fill="#2D4A6B"
            fillOpacity="0.15"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.6 + i * 0.07, duration: 0.4 }}
          />
          <motion.circle
            cx={c.x}
            cy={c.y}
            r={c.size}
            fill="#3D5A7B"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.6 + i * 0.07, duration: 0.4 }}
          />
          {c.label && (
            <motion.text
              x={c.x + 8}
              y={c.y + 4}
              fontSize="8"
              fill="rgba(255,255,255,0.5)"
              fontFamily="system-ui"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.0 }}
            >
              {c.label}
            </motion.text>
          )}
        </g>
      ))}
      {/* Pulse on Paris */}
      <motion.circle
        cx={200}
        cy={110}
        r={10}
        fill="none"
        stroke="#3B82F6"
        strokeWidth="0.8"
        strokeOpacity="0.5"
        animate={{ r: [8, 18], opacity: [0.6, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, delay: 2.2 }}
      />
    </svg>
  )
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
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 px-4"
    >
      {/* Blueprint grid — architectural feel */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(45,74,107,0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(45,74,107,0.35) 1px, transparent 1px),
            linear-gradient(rgba(45,74,107,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(45,74,107,0.12) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px, 120px 120px, 30px 30px, 30px 30px',
        }}
      />

      {/* Gradient orbs — navy + blue */}
      <div
        className="orb orb-navy absolute"
        style={{ width: 700, height: 700, top: '-15%', left: '10%', opacity: 0.1 }}
      />
      <div
        className="orb orb-blue absolute"
        style={{ width: 400, height: 400, bottom: '5%', right: '15%', opacity: 0.1 }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(45,74,107,0.6), rgba(59,130,246,0.3), transparent)' }}
      />

      {/* Huge GNI watermark background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <span
          className="font-black text-white/[0.018] tracking-[0.4em]"
          style={{ fontSize: 'clamp(6rem, 18vw, 20rem)', lineHeight: 1 }}
          aria-hidden="true"
        >
          G|N|I
        </span>
      </div>

      {/* France network map — right side, desktop only */}
      <div
        className="absolute right-[4%] top-1/2 -translate-y-1/2 w-56 h-72 opacity-50 pointer-events-none hidden lg:block"
        aria-hidden="true"
      >
        <FranceNetworkMap />
      </div>

      {/* Hero content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Logo + horizontal rules */}
        <motion.div variants={itemVariants} className="flex flex-col items-center mb-10">
          <div className="w-20 h-px bg-[#2D4A6B]/60 mb-7" />
          <Image
            src="/logo-gni-transparent.png"
            alt="GNI – Groupe National Immobilier"
            width={180}
            height={88}
            className="h-16 w-auto filter brightness-0 invert mb-7"
            priority
          />
          <div className="w-20 h-px bg-[#2D4A6B]/60" />
        </motion.div>

        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-7">
          <div
            className="inline-flex items-center gap-2.5 px-4 py-2 text-xs font-semibold uppercase"
            style={{
              background: 'rgba(45,74,107,0.12)',
              border: '1px solid rgba(45,74,107,0.35)',
              color: '#6B9AC4',
              letterSpacing: '0.25em',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
            Le réseau immobilier qui révolutionne le modèle économique
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black tracking-tight leading-[1.05] mb-6"
        >
          Gardez{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #3B82F6 0%, #6B9AC4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            100&nbsp;%
          </span>
          <br />
          de votre chiffre
          <br />
          d&apos;affaires.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-white/55 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Le premier réseau immobilier qui remplace les commissions sur votre CA par une{' '}
          <span className="text-white/90 font-medium">contribution fixe de 150&nbsp;€</span>{' '}
          uniquement lorsqu&apos;une vente est réalisée.
        </motion.p>

        {/* Trust badges */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {trustBadges.map((badge, i) => (
            <div key={badge} className="flex items-center gap-2 text-sm text-white/65">
              {i > 0 && <span className="w-px h-3.5 bg-[#2D4A6B]/50 hidden sm:block" />}
              <CheckCircle2 size={14} className="text-[#3B82F6] shrink-0" />
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
            onClick={() => scrollTo('#calculateur')}
            className="btn-ghost text-base px-7 py-4 w-full sm:w-auto"
            style={{ borderColor: 'rgba(45,74,107,0.5)' }}
          >
            Calculer mes économies
          </motion.button>
        </motion.div>

        {/* Trust bar */}
        <motion.p
          variants={itemVariants}
          className="text-[11px] text-white/30 font-medium uppercase"
          style={{ letterSpacing: '0.35em' }}
        >
          Depuis 2007 au service des professionnels de l&apos;immobilier
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo('#probleme')}
      >
        <span className="text-[10px] text-white/25 uppercase" style={{ letterSpacing: '0.4em' }}>Défiler</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={16} className="text-white/25" />
        </motion.div>
      </motion.div>
    </section>
  )
}
