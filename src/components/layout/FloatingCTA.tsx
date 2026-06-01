'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, X } from 'lucide-react'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600 && !dismissed) {
        setVisible(true)
      } else if (window.scrollY <= 600) {
        setVisible(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [dismissed])

  const handleClick = () => {
    const el = document.querySelector('#contact')
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="hidden md:flex fixed bottom-8 right-8 z-50 items-center gap-2"
        >
          {/* Dismiss button */}
          <button
            onClick={() => setDismissed(true)}
            className="w-7 h-7 rounded-full glass glass-hover flex items-center justify-center text-white/40 hover:text-white/70 transition-colors"
            aria-label="Fermer"
          >
            <X size={12} />
          </button>

          {/* Main CTA */}
          <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="relative flex items-center gap-3 px-5 py-3.5 rounded-2xl text-white font-semibold text-sm shadow-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #3B82F6 0%, #7C3AED 100%)',
              boxShadow: '0 8px 32px rgba(59, 130, 246, 0.4)',
            }}
          >
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-2xl">
              <span
                className="absolute inset-0 rounded-2xl animate-pulse-slow"
                style={{
                  background: 'linear-gradient(135deg, rgba(59,130,246,0.4) 0%, rgba(124,58,237,0.4) 100%)',
                }}
              />
            </span>

            <Calendar size={16} className="relative z-10 shrink-0" />
            <span className="relative z-10">Réserver une démo</span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
