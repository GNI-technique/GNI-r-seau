'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    initials: 'JD',
    name: '[Prénom Nom]',
    agency: '[Nom de l\'agence] — [Ville]',
    role: 'Directeur d\'agence',
    quote:
      'Depuis que nous avons rejoint GNI, notre rentabilité a considérablement augmenté. Le principe est simple : on ne paie que quand on vend. C\'est le modèle qu\'on attendait depuis des années.',
    rating: 5,
    color: '#3B82F6',
  },
  {
    initials: 'SM',
    name: '[Prénom Nom]',
    agency: '[Nom de l\'agence] — [Ville]',
    role: 'Directrice d\'agence',
    quote:
      'L\'outil technologique est vraiment au niveau. Tout est centralisé, les relances se font automatiquement, et le support GNI répond toujours rapidement. On se concentre sur la vente, le reste est géré.',
    rating: 5,
    color: '#7C3AED',
  },
  {
    initials: 'PB',
    name: '[Prénom Nom]',
    agency: '[Nom de l\'agence] — [Ville]',
    role: 'Directeur réseau',
    quote:
      'J\'avais des doutes sur le modèle à 150€ par vente. Après 12 mois, j\'ai économisé plus de 28 000€ par rapport à mon ancienne franchise. Les chiffres parlent d\'eux-mêmes.',
    rating: 5,
    color: '#10B981',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={14}
          fill={i <= rating ? '#F59E0B' : 'transparent'}
          stroke={i <= rating ? '#F59E0B' : '#4B5563'}
          strokeWidth={1.5}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [autoPlay, next])

  return (
    <section id="temoignages" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.06), transparent)' }}
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
            style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)', color: '#FCD34D' }}
          >
            Témoignages
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Ils ont choisi
            <span className="gradient-text"> GNI</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Des directeurs d&apos;agence comme vous témoignent de leur expérience avec le réseau GNI.
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="rounded-2xl p-8 relative overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: `1px solid ${testimonials[current].color}25`,
                boxShadow: `0 20px 60px ${testimonials[current].color}10`,
              }}
            >
              {/* Background quote */}
              <Quote
                size={100}
                className="absolute top-4 right-4 opacity-5"
                style={{ color: testimonials[current].color }}
              />

              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                {/* Avatar */}
                <div className="shrink-0">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-black text-white"
                    style={{
                      background: `linear-gradient(135deg, ${testimonials[current].color}, ${testimonials[current].color}80)`,
                    }}
                  >
                    {testimonials[current].initials}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <StarRating rating={testimonials[current].rating} />

                  <blockquote className="text-lg text-white/80 leading-relaxed mt-4 mb-6 font-medium italic">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </blockquote>

                  <div>
                    <div className="font-bold text-white">{testimonials[current].name}</div>
                    <div className="text-sm text-white/50">{testimonials[current].role}</div>
                    <div className="text-sm" style={{ color: testimonials[current].color }}>
                      {testimonials[current].agency}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="transition-all duration-300"
                  aria-label={`Témoignage ${i + 1}`}
                >
                  <div
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === current ? 24 : 8,
                      height: 8,
                      background: i === current
                        ? testimonials[current].color
                        : 'rgba(255,255,255,0.15)',
                    }}
                  />
                </button>
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-xl glass glass-hover flex items-center justify-center text-white/60 hover:text-white transition-colors"
                aria-label="Précédent"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-xl glass glass-hover flex items-center justify-center text-white/60 hover:text-white transition-colors"
                aria-label="Suivant"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Trust note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8 text-xs text-white/25"
        >
          * Les témoignages seront remplacés par des avis réels de membres GNI accompagnés de photos.
        </motion.div>
      </div>
    </section>
  )
}
