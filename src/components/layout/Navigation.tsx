'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Le concept', href: '#concept' },
  { label: 'Le réseau', href: '#reseau' },
  { label: 'Rejoindre', href: '#rejoindre' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      const offset = 70
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`bg-white sticky top-0 z-50 h-[60px] transition-all duration-200 ${
          scrolled ? 'border-b border-[#1C3A5C]/10 shadow-sm' : 'border-b border-transparent'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 h-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="#concept"
            onClick={(e) => { e.preventDefault(); handleNav('#concept') }}
            className="flex items-center"
          >
            <Image
              src="/logo-gni-transparent.png"
              alt="GNI – Groupe National Immobilier"
              width={100}
              height={48}
              className="h-9 w-auto"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="px-4 py-2 text-sm text-[#1C3A5C]/70 hover:text-[#1C3A5C] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex">
            <button
              onClick={() => handleNav('#contact')}
              className="btn-cta-blue text-sm px-5 py-2.5"
            >
              Prendre rendez-vous
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#1C3A5C]/70 hover:text-[#1C3A5C]"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed top-[60px] left-0 right-0 z-40 bg-white border-b border-[#1C3A5C]/10 shadow-lg md:hidden">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="w-full text-left px-4 py-3 text-sm text-[#1C3A5C]/80 hover:text-[#1C3A5C] hover:bg-[#F5F1EA] rounded transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-[#1C3A5C]/10 mt-2">
              <button
                onClick={() => handleNav('#contact')}
                className="btn-cta-blue w-full justify-center text-sm"
              >
                Prendre rendez-vous
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
