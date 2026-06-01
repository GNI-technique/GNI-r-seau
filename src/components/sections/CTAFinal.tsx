'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Clock, Phone, CheckCircle2 } from 'lucide-react'

const benefits = [
  '0% de commission sur votre CA',
  '150€ par vente réalisée',
  'Technologie incluse',
  'Accompagnement dédié',
]

const trustSignals = [
  { icon: Shield, label: 'Données sécurisées', sublabel: 'Hébergement France' },
  { icon: Clock, label: 'Réponse sous 24h', sublabel: 'Jours ouvrés' },
  { icon: Phone, label: 'Sans engagement', sublabel: 'Démo gratuite' },
]

export default function CTAFinal() {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    agence: '',
    telephone: '',
    email: '',
    collaborateurs: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Connect to Zoho Forms or backend
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 30% 50%, rgba(59,130,246,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(124,58,237,0.08) 0%, transparent 60%)',
          }}
        />
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.4), rgba(124,58,237,0.4), transparent)' }}
        />
      </div>

      {/* Animated orbs */}
      <div
        className="orb orb-blue absolute"
        style={{ width: 400, height: 400, top: '10%', left: '5%', opacity: 0.1 }}
      />
      <div
        className="orb orb-purple absolute"
        style={{ width: 350, height: 350, bottom: '10%', right: '5%', opacity: 0.1 }}
      />

      <div className="container-narrow mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-5">
            Prêt à développer votre agence
            <br />
            <span className="gradient-text">sans céder votre CA ?</span>
          </h2>
          <p className="text-white/55 max-w-2xl mx-auto text-lg mb-6">
            Rejoignez GNI et bénéficiez d&apos;un modèle économique conçu pour votre réussite.
            Une démonstration personnalisée, sans engagement.
          </p>

          {/* Benefits recap */}
          <div className="flex flex-wrap justify-center gap-3">
            {benefits.map((b) => (
              <div
                key={b}
                className="flex items-center gap-1.5 text-sm text-white/70 px-3 py-1.5 rounded-full"
                style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)' }}
              >
                <CheckCircle2 size={13} className="text-brand-blue" />
                {b}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form + Trust */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* ZOHO FORMS INTEGRATION ZONE */}
          {/*
            ZOHO FORMS INTEGRATION
            Pour intégrer votre formulaire Zoho Forms, remplacez ce formulaire par :

            <div className="zoho-form-wrapper col-span-3 rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(59,130,246,0.2)' }}>
              <iframe
                src="VOTRE_URL_ZOHO_FORMS"
                style={{ border: 'none', width: '100%', height: '700px' }}
                aria-label="Formulaire de demande de démonstration GNI"
                title="Demander une démonstration GNI"
              />
            </div>

            Pour le thème sombre : utilisez la fonctionnalité CSS personnalisé de Zoho Forms
            en ciblant les variables CSS :root de la page pour adapter les couleurs.

            CSS override Zoho (à ajouter dans Zoho Forms → Apparence → CSS personnalisé) :
            body { background: transparent !important; }
            .zf-templateWrapper { background: transparent !important; }
            input, select, textarea { background: rgba(255,255,255,0.05) !important; color: #F8F8F8 !important; border: 1px solid rgba(255,255,255,0.1) !important; }
          */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl p-10 text-center"
                style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.3)' }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'rgba(16,185,129,0.2)' }}
                >
                  <CheckCircle2 size={32} className="text-green-400" />
                </div>
                <h3 className="text-2xl font-black text-white mb-3">Demande envoyée !</h3>
                <p className="text-white/60">
                  Nous vous contacterons dans les 24 heures pour organiser votre démonstration personnalisée.
                  À très bientôt !
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-7 space-y-4"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div className="text-center mb-2">
                  <h3 className="text-xl font-black text-white mb-1">Demander une démonstration</h3>
                  <p className="text-sm text-white/40">Gratuit · Sans engagement · Réponse sous 24h</p>
                </div>

                {/* Name row */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium text-white/50 mb-1 block">Prénom *</label>
                    <input
                      type="text"
                      name="prenom"
                      required
                      value={formData.prenom}
                      onChange={handleChange}
                      placeholder="Jean"
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 outline-none transition-all duration-200"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(59,130,246,0.5)'
                        e.target.style.background = 'rgba(59,130,246,0.06)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255,255,255,0.1)'
                        e.target.style.background = 'rgba(255,255,255,0.05)'
                      }}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-white/50 mb-1 block">Nom *</label>
                    <input
                      type="text"
                      name="nom"
                      required
                      value={formData.nom}
                      onChange={handleChange}
                      placeholder="Dupont"
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 outline-none transition-all duration-200"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(59,130,246,0.5)'
                        e.target.style.background = 'rgba(59,130,246,0.06)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255,255,255,0.1)'
                        e.target.style.background = 'rgba(255,255,255,0.05)'
                      }}
                    />
                  </div>
                </div>

                {/* Agency */}
                <div>
                  <label className="text-xs font-medium text-white/50 mb-1 block">Nom de votre agence *</label>
                  <input
                    type="text"
                    name="agence"
                    required
                    value={formData.agence}
                    onChange={handleChange}
                    placeholder="Agence Immobilière Dupont"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 outline-none transition-all duration-200"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(59,130,246,0.5)'
                      e.target.style.background = 'rgba(59,130,246,0.06)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255,255,255,0.1)'
                      e.target.style.background = 'rgba(255,255,255,0.05)'
                    }}
                  />
                </div>

                {/* Contact row */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium text-white/50 mb-1 block">Téléphone *</label>
                    <input
                      type="tel"
                      name="telephone"
                      required
                      value={formData.telephone}
                      onChange={handleChange}
                      placeholder="06 12 34 56 78"
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 outline-none transition-all duration-200"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(59,130,246,0.5)'
                        e.target.style.background = 'rgba(59,130,246,0.06)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255,255,255,0.1)'
                        e.target.style.background = 'rgba(255,255,255,0.05)'
                      }}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-white/50 mb-1 block">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jean@agence.fr"
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 outline-none transition-all duration-200"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(59,130,246,0.5)'
                        e.target.style.background = 'rgba(59,130,246,0.06)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255,255,255,0.1)'
                        e.target.style.background = 'rgba(255,255,255,0.05)'
                      }}
                    />
                  </div>
                </div>

                {/* Collaborators */}
                <div>
                  <label className="text-xs font-medium text-white/50 mb-1 block">Nombre de collaborateurs</label>
                  <select
                    name="collaborateurs"
                    value={formData.collaborateurs}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: formData.collaborateurs ? '#F8F8F8' : 'rgba(248,248,248,0.25)',
                    }}
                  >
                    <option value="">Sélectionner...</option>
                    <option value="1">1 (individuel)</option>
                    <option value="2-5">2 à 5</option>
                    <option value="6-10">6 à 10</option>
                    <option value="11-20">11 à 20</option>
                    <option value="20+">Plus de 20</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs font-medium text-white/50 mb-1 block">Message (optionnel)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Votre réseau actuel, vos objectifs, vos questions..."
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 outline-none resize-none transition-all duration-200"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(59,130,246,0.5)'
                      e.target.style.background = 'rgba(59,130,246,0.06)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255,255,255,0.1)'
                      e.target.style.background = 'rgba(255,255,255,0.05)'
                    }}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full text-base py-4 justify-center"
                >
                  Demander ma démonstration gratuite
                  <ArrowRight size={18} />
                </motion.button>

                <p className="text-xs text-white/30 text-center">
                  En soumettant ce formulaire, vous acceptez d&apos;être contacté par l&apos;équipe GNI.
                  Aucun démarchage commercial agressif.
                </p>
              </form>
            )}
          </motion.div>

          {/* Trust signals sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* What you get */}
            <div
              className="rounded-2xl p-5"
              style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <h4 className="text-sm font-bold text-white/80 mb-4">Ce que vous obtenez :</h4>
              <ul className="space-y-3">
                {[
                  'Démonstration personnalisée de la plateforme',
                  'Simulation de vos économies potentielles',
                  'Réponses à toutes vos questions',
                  'Présentation du modèle GNI adapté à votre profil',
                  'Sans engagement, sans pression commerciale',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/60">
                    <CheckCircle2 size={14} className="text-brand-blue shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust signals */}
            <div className="space-y-3">
              {trustSignals.map((signal) => {
                const Icon = signal.icon
                return (
                  <div
                    key={signal.label}
                    className="rounded-xl p-4 flex items-center gap-3"
                    style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(59,130,246,0.1)' }}
                    >
                      <Icon size={16} className="text-brand-blue" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white/80">{signal.label}</div>
                      <div className="text-xs text-white/35">{signal.sublabel}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Since 2007 badge */}
            <div
              className="rounded-xl p-4 text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(124,58,237,0.08))',
                border: '1px solid rgba(59,130,246,0.2)',
              }}
            >
              <div className="text-2xl font-black gradient-text mb-1">2007</div>
              <div className="text-xs text-white/50">Fondé en 2007</div>
              <div className="text-xs text-white/35">Plus de 17 ans d&apos;expertise immobilière</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-10 border-t border-white/5">
        <div className="container-wide mx-auto px-4 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/25">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center">
                <span className="text-white font-black text-xs">GNI</span>
              </div>
              <span>GNI – Réseau Immobilier · Depuis 2007</span>
            </div>
            <div className="flex items-center gap-4">
              <span>© 2025 GNI. Tous droits réservés.</span>
              <span>·</span>
              <a href="#" className="hover:text-white/50 transition-colors">Mentions légales</a>
              <span>·</span>
              <a href="#" className="hover:text-white/50 transition-colors">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
