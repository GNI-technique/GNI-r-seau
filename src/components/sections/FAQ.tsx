'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: "Qu'est-ce que GNI ?",
    a: "GNI (Groupement National Immobilier) est un réseau immobilier français fondé en 2007, spécialisé dans l'accompagnement des directeurs d'agences indépendantes. Contrairement aux franchises traditionnelles, GNI propose un modèle économique unique : aucune commission sur votre chiffre d'affaires, mais une contribution fixe de seulement 150 € par vente réalisée.",
  },
  {
    q: "Comment fonctionne le modèle à 150 € par vente ?",
    a: "Le modèle est simple et transparent : vous ne payez rien tant que vous ne vendez pas. Dès qu'une vente est conclue, une contribution fixe de 150 € est prélevée, quelle que soit la valeur du bien ou le montant de votre commission. Ainsi, si vous réalisez 20 ventes dans l'année, votre contribution totale à GNI est de 3 000 €, contre 35 000 € avec une franchise classique à 7% sur un CA de 500 000 €.",
  },
  {
    q: "Quelle est la différence entre GNI et une franchise immobilière classique ?",
    a: "La différence fondamentale est le modèle économique. Une franchise traditionnelle prélève un pourcentage (entre 5% et 10%) de votre chiffre d'affaires chaque mois, qu'il y ait des ventes ou non. GNI remplace cette logique par une contribution fixe à la performance : 150 € uniquement par vente réalisée. Résultat : votre développement ne vous pénalise plus, et vos revenus augmentent proportionnellement à votre activité.",
  },
  {
    q: "GNI est-il un réseau immobilier ou une franchise ?",
    a: "GNI est un réseau immobilier indépendant, pas une franchise au sens juridique. Vous rejoignez une communauté d'agences qui partagent des ressources, des outils et une vision commune, tout en conservant votre liberté commerciale totale. Pas de territoire exclusif à acheter, pas de royalties sur votre CA, pas de contraintes de communication imposées.",
  },
  {
    q: "Dois-je payer des redevances sur mon chiffre d'affaires ?",
    a: "Non. C'est le principe fondateur de GNI : 0% de commission sur votre chiffre d'affaires. Vous gardez 100% de ce que vous gagnez. La seule contribution est de 150 € par vente réalisée, payée uniquement lorsqu'une transaction est conclue. Il n'y a aucune redevance mensuelle, aucun forfait fixe obligatoire lié à votre CA.",
  },
  {
    q: "Quels logiciels immobiliers sont compatibles avec GNI ?",
    a: "GNI est actuellement intégré avec AC3, l'un des logiciels immobiliers les plus utilisés en France. Notre architecture ouverte est conçue pour s'intégrer avec tous les logiciels du marché : Hektor, Apimo, Netty, Adapt Immo, Périclès, et bien d'autres sont en cours d'intégration. Si vous utilisez un logiciel non encore listé, contactez-nous pour une intégration personnalisée.",
  },
  {
    q: "Comment se déroule l'intégration de mon agence dans GNI ?",
    a: "L'intégration se fait en plusieurs étapes : (1) Démonstration personnalisée de la plateforme et du modèle GNI. (2) Signature de la convention d'adhésion. (3) Paramétrage de votre espace et synchronisation avec votre logiciel métier. (4) Formation de votre équipe aux outils GNI. (5) Accompagnement au démarrage par un référent dédié. L'ensemble du processus prend généralement 1 à 2 semaines.",
  },
  {
    q: "GNI propose-t-il un accompagnement aux nouveaux membres ?",
    a: "Oui, l'accompagnement est au cœur de l'offre GNI. Vous bénéficiez d'un référent dédié, de formations régulières (en présentiel et distanciel), d'un support technique prioritaire, et d'accès à une communauté de directeurs d'agence pour partager les bonnes pratiques. Cet accompagnement est inclus dans votre adhésion.",
  },
  {
    q: "Puis-je rejoindre GNI si je crée une agence immobilière ?",
    a: "Absolument. GNI est particulièrement adapté aux créateurs d'agence, car le modèle à contribution fixe permet de maîtriser ses coûts dès le départ. Vous ne payez que quand vous vendez, ce qui est idéal pendant la phase de lancement. Nous proposons également un accompagnement spécifique pour les créateurs.",
  },
  {
    q: "Est-ce que GNI est adapté aux petits réseaux indépendants ?",
    a: "Oui, GNI est conçu pour tous les profils : qu'il s'agisse d'une agence individuelle, d'un petit réseau de 2-3 agences, ou d'une structure plus importante. La mutualisation des ressources et des outils est particulièrement avantageuse pour les structures de taille intermédiaire qui veulent bénéficier de moyens de grand groupe sans en supporter le coût.",
  },
  {
    q: "Qu'est-ce qu'un réseau immobilier indépendant ?",
    a: "Un réseau immobilier indépendant est une association d'agences qui choisissent de mutualiser certaines ressources (technologie, marketing, communication, formation) tout en conservant leur indépendance juridique et commerciale. Contrairement aux franchises, les membres ne versent pas de royalties sur leur CA et conservent leur marque propre. GNI est le premier réseau immobilier indépendant à proposer un modèle de contribution fixe à la performance.",
  },
  {
    q: "Quels avantages par rapport à une franchise immobilière sans commission ?",
    a: "GNI va plus loin que la simple absence de commission. Vous bénéficiez : d'un modèle à contribution fixe et prévisible, d'outils technologiques mutualisés de haut niveau, d'un accompagnement expert depuis 2007, d'une liberté commerciale totale, et d'une communauté active. C'est une approche globale, pas uniquement un avantage tarifaire.",
  },
  {
    q: "GNI offre-t-il des outils marketing mutualisés ?",
    a: "Oui. Les membres GNI accèdent à une bibliothèque de ressources marketing complète : templates de communications, supports de vente, vidéos professionnelles, outils de création de contenu, et campagnes médias mutualisées. Ces ressources sont régulièrement mises à jour et adaptées aux évolutions du marché immobilier.",
  },
  {
    q: "Comment fonctionne le logiciel de gestion GNI ?",
    a: "La plateforme GNI (le Copilote) est un CRM immobilier intelligent qui centralise la gestion de vos prospects, le suivi de vos dossiers, l'organisation de vos visites, et le reporting de votre activité. Il se synchronise avec votre logiciel métier existant et propose des automatisations pour les relances, les rappels et les workflows commerciaux.",
  },
  {
    q: "Puis-je garder ma marque en rejoignant GNI ?",
    a: "Oui, totalement. Vous conservez votre enseigne, votre identité visuelle, votre marque locale. GNI n'impose pas de changement d'enseigne. Vous êtes membre du réseau GNI, mais votre agence reste la vôtre. Vous pouvez utiliser le label GNI en complément de votre marque si vous le souhaitez.",
  },
  {
    q: "Quelles sont les conditions pour rejoindre GNI ?",
    a: "Pour rejoindre GNI, vous devez être titulaire de la carte professionnelle T (transaction) ou G (gestion), diriger une agence immobilière indépendante ou être en cours de création. Une démonstration et un entretien de qualification sont organisés pour s'assurer que GNI correspond bien à votre profil et à vos objectifs. Contactez-nous pour en savoir plus.",
  },
  {
    q: "GNI est-il adapté aux agents immobiliers indépendants ?",
    a: "GNI s'adresse en priorité aux directeurs d'agences immobilières qui ont déjà une structure établie et souhaitent optimiser leur rentabilité. Si vous êtes agent indépendant avec votre propre structure juridique et votre carte professionnelle, nous pouvons étudier votre candidature ensemble lors d'une démonstration.",
  },
  {
    q: "Comment GNI génère-t-il ses revenus avec ce modèle ?",
    a: "GNI génère ses revenus uniquement grâce aux contributions fixe de 150 € par vente réalisée par les membres du réseau. Ce modèle aligne parfaitement les intérêts : GNI ne gagne que si vous vendez. Cela nous incite à tout mettre en œuvre pour que vous réalisiez le plus de ventes possible, avec les meilleurs outils et le meilleur accompagnement.",
  },
  {
    q: "Y a-t-il des frais d'entrée chez GNI ?",
    a: "Il peut y avoir des frais d'adhésion initiaux pour couvrir le paramétrage, la formation et l'intégration. Ces frais sont communiqués de manière transparente lors de la démonstration. Il n'y a pas de droit d'entrée prohibitif comme dans les franchises traditionnelles, et pas de territoire exclusif à acquérir.",
  },
  {
    q: "Comment réserver une démonstration GNI ?",
    a: "Vous pouvez réserver votre démonstration directement via le formulaire de contact présent sur cette page. Un membre de l'équipe GNI vous contactera dans les 24 heures pour organiser une session personnalisée en visioconférence ou en présentiel selon vos préférences. La démonstration est gratuite et sans engagement.",
  },
]

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03, duration: 0.4 }}
      className="rounded-xl overflow-hidden"
      style={{
        border: open ? '1px solid rgba(59,130,246,0.3)' : '1px solid rgba(255,255,255,0.07)',
        background: open ? 'rgba(59,130,246,0.04)' : 'rgba(255,255,255,0.02)',
        transition: 'border-color 0.2s, background 0.2s',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-sm font-semibold text-white/85 leading-relaxed">
          {faq.q}
        </span>
        <div
          className="shrink-0 w-6 h-6 rounded-lg flex items-center justify-center mt-0.5 transition-all duration-200"
          style={{
            background: open ? 'rgba(59,130,246,0.2)' : 'rgba(255,255,255,0.06)',
          }}
        >
          {open ? (
            <Minus size={12} className="text-brand-blue" />
          ) : (
            <Plus size={12} className="text-white/40" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div
              className="px-5 pb-5 text-sm text-white/55 leading-relaxed"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="pt-4">{faq.a}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent)' }}
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
            style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.25)', color: '#3B82F6' }}
          >
            Questions fréquentes
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Toutes vos questions
            <br />
            <span className="gradient-text">ont une réponse.</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Vous avez des questions sur GNI, notre modèle ou notre offre ?
            Retrouvez toutes les réponses ici.
          </p>
        </motion.div>

        {/* FAQ list */}
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10 p-6 rounded-2xl"
          style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <p className="text-white/60 mb-4">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <button
            onClick={() => {
              const el = document.querySelector('#contact')
              if (el) {
                const offset = 80
                const top = el.getBoundingClientRect().top + window.scrollY - offset
                window.scrollTo({ top, behavior: 'smooth' })
              }
            }}
            className="btn-primary text-sm px-6 py-3"
          >
            Posez-nous votre question
          </button>
        </motion.div>
      </div>
    </section>
  )
}
