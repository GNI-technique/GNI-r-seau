'use client'

import { motion } from 'framer-motion'
import { Users, Bell, Zap, BarChart2, TrendingUp, CheckSquare } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Gestion des prospects',
    description: 'Centralisez et qualifiez tous vos contacts entrants en temps réel depuis un seul tableau de bord.',
  },
  {
    icon: Bell,
    title: 'Relances automatiques',
    description: 'Programmez des séquences de relance automatisées pour ne jamais laisser un prospect sans réponse.',
  },
  {
    icon: Zap,
    title: 'Automatisations',
    description: 'Gagnez des heures chaque semaine grâce à des workflows intelligents qui travaillent à votre place.',
  },
  {
    icon: BarChart2,
    title: 'Organisation commerciale',
    description: 'Visualisez votre pipeline de vente et pilotez votre activité avec des indicateurs clés en temps réel.',
  },
  {
    icon: TrendingUp,
    title: 'Reporting avancé',
    description: 'Des rapports détaillés sur votre performance pour prendre les bonnes décisions au bon moment.',
  },
  {
    icon: CheckSquare,
    title: 'Suivi des actions',
    description: 'Chaque étape de chaque dossier est tracée, planifiée et assignée pour une exécution sans faille.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 1.11, 0.81, 0.99] } },
}

export default function Copilot() {
  return (
    <section id="copilote" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent)' }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'rgba(124,58,237,0.04)' }}
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
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5"
            style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.25)', color: '#A78BFA' }}
          >
            Technologie
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            La technologie qui accompagne
            <br />
            <span className="gradient-text">chaque vente.</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Le copilote intelligent de votre agence. Toutes les fonctionnalités dont vous avez besoin,
            sans la complexité que vous ne voulez pas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Feature cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  variants={cardVariants}
                  className="group rounded-2xl p-5 glass glass-hover cursor-default"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-200 group-hover:scale-110"
                    style={{
                      background: 'rgba(59,130,246,0.12)',
                      border: '1px solid rgba(59,130,246,0.2)',
                    }}
                  >
                    <Icon size={20} className="text-brand-blue" />
                  </div>
                  <h3 className="font-bold text-white mb-2 text-sm">{feature.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Animated dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
              }}
            >
              {/* Header bar */}
              <div
                className="px-5 py-3.5 flex items-center justify-between"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-brand-blue to-brand-purple" />
                  <span className="text-sm font-semibold text-white/80">Copilote GNI</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-green-400/80">Actif</span>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-0" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                {['Tableau de bord', 'Prospects', 'Pipeline', 'Rapports'].map((tab, i) => (
                  <div
                    key={tab}
                    className="px-4 py-2.5 text-xs font-medium"
                    style={{
                      color: i === 0 ? '#3B82F6' : 'rgba(255,255,255,0.4)',
                      borderBottom: i === 0 ? '2px solid #3B82F6' : 'none',
                    }}
                  >
                    {tab}
                  </div>
                ))}
              </div>

              {/* Dashboard body */}
              <div className="p-5 space-y-4">
                {/* KPI row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Prospects actifs', value: '47', trend: '+12%', color: '#3B82F6' },
                    { label: 'Ventes en cours', value: '8', trend: '+3', color: '#7C3AED' },
                    { label: 'Taux conversion', value: '24%', trend: '+2pt', color: '#10B981' },
                  ].map((kpi) => (
                    <div
                      key={kpi.label}
                      className="p-3 rounded-xl"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}
                    >
                      <div className="text-xs text-white/40 mb-1">{kpi.label}</div>
                      <div className="text-lg font-black" style={{ color: kpi.color }}>{kpi.value}</div>
                      <div className="text-xs mt-0.5" style={{ color: 'rgba(16,185,129,0.8)' }}>{kpi.trend}</div>
                    </div>
                  ))}
                </div>

                {/* Activity feed */}
                <div className="space-y-2">
                  <div className="text-xs text-white/40 font-medium mb-2">Activité récente</div>
                  {[
                    { type: 'Relance', contact: 'M. Dubois', time: 'Il y a 2min', color: '#3B82F6' },
                    { type: 'Offre reçue', contact: 'Mme Martin', time: 'Il y a 15min', color: '#10B981' },
                    { type: 'Visite planifiée', contact: 'M. Bernard', time: 'Il y a 1h', color: '#7C3AED' },
                    { type: 'Mandat signé', contact: 'M. Leroy', time: 'Il y a 2h', color: '#F59E0B' },
                  ].map((item, i) => (
                    <motion.div
                      key={item.contact}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-center gap-3 p-2.5 rounded-xl"
                      style={{ background: 'rgba(255,255,255,0.02)' }}
                    >
                      <div
                        className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-xs font-bold text-white"
                        style={{ background: item.color }}
                      >
                        {item.contact[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-white/70 truncate">
                          <span style={{ color: item.color }}>{item.type}</span>
                          {' — '}{item.contact}
                        </div>
                      </div>
                      <div className="text-xs text-white/30 shrink-0">{item.time}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Progress bars */}
                <div className="space-y-2">
                  <div className="text-xs text-white/40 font-medium mb-2">Objectifs du mois</div>
                  {[
                    { label: 'Ventes', current: 8, target: 12, color: '#3B82F6' },
                    { label: 'CA', current: 65, target: 100, color: '#7C3AED' },
                    { label: 'Mandats', current: 14, target: 20, color: '#10B981' },
                  ].map((bar) => (
                    <div key={bar.label} className="space-y-1">
                      <div className="flex justify-between text-xs text-white/40">
                        <span>{bar.label}</span>
                        <span>{bar.current}/{bar.target}</span>
                      </div>
                      <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(bar.current / bar.target) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="h-full rounded-full"
                          style={{ background: bar.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Notification popup */}
            <motion.div
              initial={{ opacity: 0, y: 10, x: 10 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.4 }}
              className="absolute -bottom-4 -right-4 rounded-xl p-3 flex items-center gap-3"
              style={{
                background: 'rgba(16,185,129,0.15)',
                border: '1px solid rgba(16,185,129,0.3)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(16,185,129,0.2)' }}
              >
                <CheckSquare size={14} className="text-green-400" />
              </div>
              <div>
                <div className="text-xs font-semibold text-green-400">Vente conclue !</div>
                <div className="text-xs text-white/50">150€ — contribution GNI</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
