'use client'

import { motion } from 'framer-motion'
import {
  BrainCircuit,
  MessageSquareText,
  LineChart,
  CalendarClock,
  FileSearch,
  Zap,
} from 'lucide-react'

const capabilities = [
  {
    icon: MessageSquareText,
    title: 'Qualification automatique',
    text: "L'assistant analyse chaque nouveau contact entrant, qualifie le projet, détecte le niveau de maturité et priorise les relances — sans intervention manuelle.",
  },
  {
    icon: CalendarClock,
    title: 'Suivi de pipeline proactif',
    text: 'Chaque mandat, chaque offre, chaque étape de transaction est suivie en temps réel. L\'assistant anticipe les blocages avant qu\'ils n\'arrivent.',
  },
  {
    icon: LineChart,
    title: 'Analyse de marché contextuelle',
    text: "Prix au m², tension du marché local, délais de vente secteur — l'assistant fournit l'analyse au moment où l'agent en a besoin, pas après.",
  },
  {
    icon: FileSearch,
    title: 'Rédaction et conformité',
    text: 'Mandats, compromis, comptes-rendus de visite — l\'assistant rédige, vérifie la conformité réglementaire et adapte les documents au contexte de chaque transaction.',
  },
  {
    icon: BrainCircuit,
    title: 'Mémoire de l\'agence',
    text: "Historique client, préférences, interactions passées — l'assistant construit une mémoire structurée de l'agence et la rend exploitable par toute l'équipe.",
  },
  {
    icon: Zap,
    title: 'Automatisations sur mesure',
    text: "Relances, alertes, notifications, reporting hebdomadaire — chaque workflow est paramétrable. L'agent décide ce que l'assistant prend en charge.",
  },
]

export default function AIAssistant() {
  return (
    <section id="outil" className="section-py section-px bg-[#122845]">
      <div className="container-max">

        {/* Header — left aligned */}
        <div className="max-w-2xl mb-20">
          <span className="label-tag text-[#4A7099]">L'outil GNI</span>
          <h2
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(38px, 5.5vw, 64px)' }}
            className="font-bold text-[#EDE8DC] mt-3 leading-tight"
          >
            L'assistant de l'agent<br />
            <span className="text-[#EDE8DC]/40">immobilier de demain.</span>
          </h2>
          <div className="w-10 h-px bg-[#EDE8DC]/15 mt-8 mb-6" />
          <p className="text-[#EDE8DC]/55 text-base leading-relaxed">
            Le marché immobilier se complexifie. Les exigences réglementaires augmentent.
            Les clients sont mieux informés. GNI intègre dans sa franchise un assistant intelligent
            conçu pour que l'agent se concentre sur ce que seul un humain peut faire —
            la relation, la négociation, la confiance.
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#EDE8DC]/8">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-[#122845] p-8 group hover:bg-[#1C3A5C] transition-colors duration-300"
              >
                <Icon
                  size={20}
                  strokeWidth={1.5}
                  className="text-[#4A7099] group-hover:text-[#EDE8DC]/60 transition-colors duration-300 mb-5"
                />
                <h3
                  style={{ fontFamily: 'var(--font-display)' }}
                  className="font-bold text-[#EDE8DC] text-xl mb-3"
                >
                  {cap.title}
                </h3>
                <p className="text-[#EDE8DC]/45 text-sm leading-relaxed group-hover:text-[#EDE8DC]/60 transition-colors duration-300">
                  {cap.text}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-1 bg-[#EDE8DC] p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 32px)' }}
              className="font-bold text-[#1C3A5C] leading-tight"
            >
              Rejoindre GNI, c'est accéder à cet outil<br />dès le premier jour.
            </p>
            <p className="text-[#1C3A5C]/50 text-sm mt-2">
              Inclus dans la franchise. Aucun coût logiciel supplémentaire.
            </p>
          </div>
          <a
            href="#contact"
            className="btn-cta-blue whitespace-nowrap flex-shrink-0"
          >
            Voir une démonstration →
          </a>
        </div>

      </div>
    </section>
  )
}
