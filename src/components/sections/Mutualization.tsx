'use client'

import { motion } from 'framer-motion'
import { Megaphone, Target, Cpu, HandshakeIcon, Lightbulb } from 'lucide-react'

const items = [
  {
    icon: Megaphone,
    title: 'Communication',
    tagline: 'Voix amplifiée',
    description:
      'Bénéficiez d\'une communication collective puissante. Campagnes médias, relations presse, visibilité nationale — des ressources que vous ne pourriez pas financer seul.',
    examples: ['Campagnes nationales', 'Relations presse', 'Visibilité digitale'],
    color: '#3B82F6',
  },
  {
    icon: Target,
    title: 'Marketing',
    tagline: 'Outils partagés',
    description:
      'Des outils marketing professionnels mutualisés : templates, supports de vente, vidéos, brochures. Profitez d\'une identité forte sans le coût d\'une agence.',
    examples: ['Templates prêts à l\'emploi', 'Supports de vente', 'Identité visuelle forte'],
    color: '#7C3AED',
  },
  {
    icon: Cpu,
    title: 'Technologie',
    tagline: 'Stack premium',
    description:
      'Accédez à une stack technologique de haut niveau : CRM, automatisations, IA, intégrations — des investissements tech répartis entre tous les membres.',
    examples: ['CRM intelligent', 'IA intégrée', 'API & intégrations'],
    color: '#6366F1',
  },
  {
    icon: HandshakeIcon,
    title: 'Accompagnement',
    tagline: 'Jamais seul',
    description:
      'Une équipe dédiée à votre réussite. Formation, coaching, support opérationnel — vous bénéficiez d\'une expertise collective accessible à tout moment.',
    examples: ['Formations régulières', 'Coaching terrain', 'Support prioritaire'],
    color: '#10B981',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    tagline: 'Toujours en avance',
    description:
      'Soyez le premier à bénéficier des nouvelles fonctionnalités, outils et méthodes. L\'innovation est mutualisée, vous en profitez dès le premier jour.',
    examples: ['Nouvelles fonctionnalités', 'R&D continue', 'Avantage concurrentiel'],
    color: '#F59E0B',
  },
]

export default function Mutualization() {
  return (
    <section id="mutualisation" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent)' }}
        />
        <div
          className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.1), transparent)' }}
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
            Mutualisation
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Pourquoi payer seul ce que
            <br />
            <span className="gradient-text">nous pouvons mutualiser ?</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            En rejoignant GNI, vous accédez à des ressources et outils que seuls les grands groupes
            peuvent se permettre — à une fraction du coût grâce à la mutualisation.
          </p>
        </motion.div>

        {/* Cards grid — slightly offset for visual interest */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={`group rounded-2xl p-6 glass glass-hover cursor-default transition-all duration-300 ${
                  i === 2 ? 'lg:mt-8' : i === 4 ? 'lg:mt-4' : ''
                }`}
                style={{ '--card-color': item.color } as React.CSSProperties}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${item.color}15`,
                    border: `1px solid ${item.color}25`,
                  }}
                >
                  <Icon size={22} style={{ color: item.color }} />
                </div>

                {/* Content */}
                <div className="mb-3">
                  <div
                    className="text-xs font-semibold uppercase tracking-widest mb-1.5"
                    style={{ color: `${item.color}80` }}
                  >
                    {item.tagline}
                  </div>
                  <h3 className="text-lg font-black text-white">{item.title}</h3>
                </div>

                <p className="text-sm text-white/55 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Examples */}
                <div className="space-y-1.5">
                  {item.examples.map((ex) => (
                    <div key={ex} className="flex items-center gap-2 text-xs">
                      <div
                        className="w-1 h-1 rounded-full shrink-0"
                        style={{ background: item.color }}
                      />
                      <span className="text-white/40">{ex}</span>
                    </div>
                  ))}
                </div>

                {/* Hover glow border */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}08 0%, transparent 100%)`,
                    border: `1px solid ${item.color}30`,
                    borderRadius: 'inherit',
                  }}
                />
              </motion.div>
            )
          })}

          {/* Summary card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: items.length * 0.08, duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-3 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left"
            style={{
              background: 'linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(124,58,237,0.08) 100%)',
              border: '1px solid rgba(59,130,246,0.2)',
            }}
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 mx-auto sm:mx-0"
              style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(124,58,237,0.2))' }}
            >
              <span className="text-2xl font-black text-transparent" style={{
                background: 'linear-gradient(135deg, #3B82F6, #7C3AED)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                5×
              </span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-black text-white mb-2">
                L&apos;union fait la force — et la rentabilité
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">
                En mutualisant 5 ressources stratégiques, GNI vous permet d&apos;accéder à des outils
                et services qui coûteraient 10× plus cher en solo — sans sacrifier votre indépendance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
