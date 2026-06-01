'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Circle, ArrowRight } from 'lucide-react'

const steps = [
  {
    id: 1,
    label: 'Prospect reçu',
    description: 'Un nouveau contact arrive dans votre base : appel entrant, formulaire web, ou contact direct.',
    detail: 'Le copilote GNI capture automatiquement les informations du prospect (source, critères, budget) et l\'intègre dans votre CRM en temps réel.',
    color: '#3B82F6',
  },
  {
    id: 2,
    label: 'Création automatique',
    description: 'Un dossier est automatiquement créé et qualifié dans le système.',
    detail: 'Les données sont enrichies, le prospect est scoré selon vos critères, et une fiche complète est générée sans aucune saisie manuelle de votre part.',
    color: '#6366F1',
  },
  {
    id: 3,
    label: 'Synchronisation logiciel',
    description: 'Synchronisation bidirectionnelle avec votre logiciel immobilier (AC3 et autres).',
    detail: 'Toutes les données se synchronisent avec votre logiciel métier existant. Pas de double saisie, pas d\'erreur, une vue unifiée de votre activité.',
    color: '#7C3AED',
  },
  {
    id: 4,
    label: 'Relance programmée',
    description: 'Des relances automatiques sont planifiées selon votre stratégie commerciale.',
    detail: 'Le système programme des rappels, emails et notifications selon des scénarios prédéfinis ou personnalisés. Vous n\'oubliez plus jamais de relancer.',
    color: '#9333EA',
  },
  {
    id: 5,
    label: 'Mandat signé',
    description: 'Le mandat est signé et enregistré dans le système.',
    detail: 'La signature du mandat déclenche automatiquement un nouveau workflow : publication des annonces, planning des visites, et alertes acheteurs.',
    color: '#A855F7',
  },
  {
    id: 6,
    label: 'Visites organisées',
    description: 'Planning des visites géré automatiquement avec notifications.',
    detail: 'Le calendrier de visites est optimisé, les confirmations sont envoyées automatiquement aux parties, et les comptes-rendus sont générés après chaque visite.',
    color: '#EC4899',
  },
  {
    id: 7,
    label: 'Offre reçue',
    description: 'Une offre d\'achat est enregistrée et traitée.',
    detail: 'L\'offre est formalisée numériquement, le vendeur est notifié immédiatement, et la négociation est tracée pour une transparence totale.',
    color: '#F59E0B',
  },
  {
    id: 8,
    label: 'Compromis signé',
    description: 'Le compromis de vente est signé et le dossier est sécurisé.',
    detail: 'Toutes les pièces du dossier sont collectées et vérifiées. Les délais légaux (SRU, financement) sont automatiquement suivis avec alertes.',
    color: '#10B981',
  },
  {
    id: 9,
    label: 'Vente réalisée ✓',
    description: 'La vente est finalisée. Contribution GNI : 150 €.',
    detail: 'Félicitations ! La vente est conclue. Une contribution fixe de 150 € est débitée. Votre CA est à 100 % pour vous. Le dossier est archivé et les stats mises à jour.',
    color: '#22C55E',
  },
]

export default function Demo() {
  const [activeStep, setActiveStep] = useState(0)
  const progress = ((activeStep + 1) / steps.length) * 100

  return (
    <section id="demo" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent)' }}
        />
      </div>

      <div className="container-wide mx-auto relative z-10">
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
            style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.25)', color: '#3B82F6' }}
          >
            Votre agence en action
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            De la prise de contact
            <br />
            <span className="gradient-text">à la vente réalisée.</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Découvrez comment GNI accompagne chaque étape de votre cycle de vente,
            de l&apos;acquisition du prospect jusqu&apos;à la conclusion.
          </p>
        </motion.div>

        {/* Interactive tool placeholder */}
        {/*
          ZONE DE DÉMONSTRATION INTERACTIVE
          id="interactive-tool-placeholder"

          Ce composant sera remplacé par l'outil HTML interactif fourni par le client.
          // TODO: Replace this component with the HTML tool provided by client

          Pour intégrer l'outil :
          1. Récupérez le fichier HTML de l'outil
          2. Convertissez-le en composant React ou utilisez un iframe
          3. Remplacez le contenu de cette section
        */}

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Steps timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            {/* Progress bar */}
            <div className="mb-6">
              <div className="flex justify-between text-xs text-white/40 mb-2">
                <span>Progression du cycle de vente</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <motion.div
                  className="h-full rounded-full"
                  animate={{ width: `${progress}%` }}
                  style={{ background: 'linear-gradient(90deg, #3B82F6, #22C55E)' }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {steps.map((step, i) => {
              const isActive = i === activeStep
              const isDone = i < activeStep

              return (
                <motion.button
                  key={step.id}
                  onClick={() => setActiveStep(i)}
                  whileHover={{ x: 4 }}
                  className="w-full text-left flex items-start gap-3 p-3 rounded-xl transition-all duration-200"
                  style={{
                    background: isActive
                      ? `rgba(${step.color === '#3B82F6' ? '59,130,246' : '124,58,237'},0.1)`
                      : 'transparent',
                    border: `1px solid ${isActive ? step.color + '40' : 'transparent'}`,
                  }}
                >
                  <div className="shrink-0 mt-0.5">
                    {isDone ? (
                      <CheckCircle2 size={18} style={{ color: '#22C55E' }} />
                    ) : isActive ? (
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <CheckCircle2 size={18} style={{ color: step.color }} />
                      </motion.div>
                    ) : (
                      <Circle size={18} className="text-white/20" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className="text-sm font-semibold"
                      style={{ color: isActive ? step.color : isDone ? 'rgba(34,197,94,0.8)' : 'rgba(255,255,255,0.5)' }}
                    >
                      Étape {step.id} — {step.label}
                    </div>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-xs text-white/50 mt-1 leading-relaxed"
                      >
                        {step.description}
                      </motion.div>
                    )}
                  </div>
                </motion.button>
              )
            })}

            {/* Navigation buttons */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                className="flex-1 py-2.5 rounded-xl text-sm font-medium transition-all duration-150"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: activeStep === 0 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.6)',
                  cursor: activeStep === 0 ? 'not-allowed' : 'pointer',
                }}
              >
                ← Précédent
              </button>
              <button
                onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                disabled={activeStep === steps.length - 1}
                className="flex-1 py-2.5 rounded-xl text-sm font-medium transition-all duration-150"
                style={{
                  background: activeStep === steps.length - 1 ? 'rgba(255,255,255,0.03)' : 'rgba(59,130,246,0.15)',
                  border: `1px solid ${activeStep === steps.length - 1 ? 'rgba(255,255,255,0.08)' : 'rgba(59,130,246,0.3)'}`,
                  color: activeStep === steps.length - 1 ? 'rgba(255,255,255,0.2)' : '#3B82F6',
                  cursor: activeStep === steps.length - 1 ? 'not-allowed' : 'pointer',
                }}
              >
                Suivant →
              </button>
            </div>
          </motion.div>

          {/* Detail panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="sticky top-24"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: `1px solid ${steps[activeStep].color}30`,
                  boxShadow: `0 20px 60px ${steps[activeStep].color}15`,
                }}
              >
                {/* Step header */}
                <div
                  className="px-6 py-5"
                  style={{
                    background: `${steps[activeStep].color}10`,
                    borderBottom: `1px solid ${steps[activeStep].color}20`,
                  }}
                >
                  <div className="flex items-center gap-3 mb-1">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-black text-white"
                      style={{ background: steps[activeStep].color }}
                    >
                      {steps[activeStep].id}
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: steps[activeStep].color }}>
                      Étape {steps[activeStep].id} / {steps.length}
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-white">{steps[activeStep].label}</h3>
                </div>

                {/* Step detail */}
                <div className="p-6">
                  <p className="text-white/70 leading-relaxed mb-6">
                    {steps[activeStep].detail}
                  </p>

                  {/* Visual indicator for last step */}
                  {activeStep === steps.length - 1 && (
                    <div
                      className="rounded-xl p-4 flex items-center gap-4"
                      style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)' }}
                    >
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(34,197,94,0.2)' }}
                      >
                        <CheckCircle2 size={24} className="text-green-400" />
                      </div>
                      <div>
                        <div className="font-bold text-green-400 text-lg">Vente conclue !</div>
                        <div className="text-sm text-white/60">
                          Contribution GNI : <span className="font-bold text-white">150 €</span>
                          {' '}— Votre CA : <span className="font-bold text-green-400">100 % pour vous</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Mock step illustration */}
                  <div
                    className="mt-4 rounded-xl p-4 space-y-3"
                    style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
                  >
                    {[40, 70, 55].map((w, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div
                          className="w-6 h-6 rounded-md shrink-0"
                          style={{ background: `${steps[activeStep].color}30` }}
                        />
                        <div className="flex-1 h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.05)', maxWidth: `${w}%` }}>
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                            className="h-full rounded-full"
                            style={{ background: `${steps[activeStep].color}60` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next step teaser */}
                {activeStep < steps.length - 1 && (
                  <div
                    className="px-6 py-3 flex items-center gap-2"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <ArrowRight size={14} className="text-white/30" />
                    <span className="text-xs text-white/30">
                      Prochaine étape : <span className="text-white/50">{steps[activeStep + 1].label}</span>
                    </span>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
