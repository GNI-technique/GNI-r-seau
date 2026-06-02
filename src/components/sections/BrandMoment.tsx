'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function BrandMoment() {
  return (
    <section className="relative overflow-hidden py-28 px-4">
      {/* Very subtle navy gradient backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(45,74,107,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Top horizontal rule — logo DNA */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(45,74,107,0.5), transparent)' }}
      />
      {/* Bottom horizontal rule — logo DNA */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(45,74,107,0.5), transparent)' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto"
      >
        {/* Top rule */}
        <div className="w-16 h-px bg-[#2D4A6B]/60 mb-8" />

        {/* Logo */}
        <Image
          src="/logo-gni-transparent.png"
          alt="GNI – Groupe National Immobilier"
          width={200}
          height={98}
          className="h-20 w-auto filter brightness-0 invert mb-8 opacity-90"
        />

        {/* Tagline */}
        <p
          className="text-xl md:text-2xl font-light text-white/80 mb-3"
          style={{ letterSpacing: '0.04em' }}
        >
          Le réseau qui gagne quand vous gagnez.
        </p>

        {/* G | N | I decorative */}
        <div
          className="flex items-center gap-0 text-[#6B9AC4]/60 font-black mt-4 mb-8"
          style={{ fontSize: '1.1rem', letterSpacing: '0.1em' }}
          aria-hidden="true"
        >
          <span>G</span>
          <span className="w-px h-5 bg-[#2D4A6B] mx-3" />
          <span>N</span>
          <span className="w-px h-5 bg-[#2D4A6B] mx-3" />
          <span>I</span>
        </div>

        {/* Bottom rule */}
        <div className="w-16 h-px bg-[#2D4A6B]/60" />

        {/* Subtext */}
        <p
          className="text-[10px] text-white/25 font-medium uppercase mt-6"
          style={{ letterSpacing: '0.45em' }}
        >
          Groupe National Immobilier — Depuis 2007
        </p>
      </motion.div>
    </section>
  )
}
