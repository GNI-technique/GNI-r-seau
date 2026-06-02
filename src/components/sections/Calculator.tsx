'use client'

import { useState, useCallback } from 'react'
import { TrendingUp } from 'lucide-react'
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
        <label className="text-sm font-medium text-[#1C3A5C]/70">{label}</label>
        <div className="px-3 py-1 rounded text-sm font-bold text-[#1C3A5C] bg-[#EDE8DC] border border-[#1C3A5C]/15">
          {format(value)}
        </div>
      </div>
      <div className="relative h-2 rounded-full bg-[#1C3A5C]/10">
        <div
          className="absolute left-0 top-0 h-full rounded-full bg-[#1C3A5C]"
          style={{ width: `${pct}%` }}
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
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#1C3A5C] pointer-events-none shadow-sm"
          style={{ left: `calc(${pct}% - 8px)` }}
        />
      </div>
      <div className="flex justify-between text-xs text-[#1C3A5C]/30">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
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

  const handleCTA = useCallback(() => {
    const el = document.querySelector('#contact')
    if (el) {
      const offset = 70
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }, [])

  return (
    <section id="calculateur" className="section-py section-px bg-[#EDE8DC]">
      <div className="container-max">
        {/* Header */}
        <div className="mb-12">
          <span className="label-tag text-[#4A7099]">Calculateur d&apos;économies</span>
          <h2
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,5vw,56px)' }}
            className="font-bold text-[#1C3A5C] mt-3 leading-tight"
          >
            Combien économisez-vous<br />avec GNI&nbsp;?
          </h2>
          <p className="text-[#1C3A5C]/50 mt-4 max-w-xl">
            Ajustez les paramètres et découvrez en temps réel vos économies potentielles.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Sliders */}
          <div className="bg-white rounded-md p-6 md:p-8 space-y-7 border border-[#1C3A5C]/10">
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
              <div className="label-tag text-[#4A7099] mb-3">Profils types</div>
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
                    className="text-xs px-3 py-1.5 rounded border border-[#1C3A5C]/20 text-[#1C3A5C]/60 hover:border-[#1C3A5C]/40 hover:text-[#1C3A5C] transition-colors"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            {/* Comparison cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-md p-5 border border-[#1C3A5C]/10">
                <div className="label-tag text-[#4A7099] mb-2">Coût actuel</div>
                <div className="text-2xl font-bold text-[#1C3A5C]/40" style={{ fontFamily: 'var(--font-display)' }}>
                  {formatCurrency(coutActuel)}
                </div>
                <div className="text-xs text-[#1C3A5C]/30 mt-1">{redevance.toFixed(1)}% de votre CA</div>
              </div>

              <div className="bg-[#1C3A5C] rounded-md p-5">
                <div className="label-tag text-[#4A7099] mb-2">Avec GNI</div>
                <div className="text-2xl font-bold text-[#EDE8DC]" style={{ fontFamily: 'var(--font-display)' }}>
                  {formatCurrency(coutGNI)}
                </div>
                <div className="text-xs text-[#EDE8DC]/40 mt-1">
                  {ventes} vente{ventes > 1 ? 's' : ''} × 150 €
                </div>
              </div>
            </div>

            {/* Main savings */}
            <div className="bg-[#1C3A5C] rounded-md p-6 text-center border border-[#1C3A5C]">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp size={18} className="text-[#4A7099]" strokeWidth={1.5} />
                <span className="label-tag text-[#4A7099]">Économie réalisée</span>
              </div>
              <div
                className="text-[#EDE8DC] font-bold leading-none mb-2"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px,8vw,72px)' }}
              >
                {formatCurrency(economie)}
              </div>
              {economie > 0 ? (
                <div className="text-sm text-[#EDE8DC]/50">
                  En 5 ans&nbsp;:{' '}
                  <span className="text-[#EDE8DC] font-semibold">{formatCurrency(economie5ans)}</span>
                </div>
              ) : (
                <div className="text-sm text-[#EDE8DC]/40">
                  Ajustez les paramètres pour voir vos économies
                </div>
              )}
              {economie > 0 && (
                <div className="mt-1 text-xs text-[#4A7099]">
                  soit {Math.round((economie / coutActuel) * 100)}% de réduction
                </div>
              )}
            </div>

            {/* CTA */}
            <button
              onClick={handleCTA}
              className="btn-cta-blue w-full justify-center py-4 text-base"
            >
              {economie > 0
                ? `Je veux économiser ${formatCurrency(economie)} → Prendre rendez-vous`
                : 'Prendre rendez-vous'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
