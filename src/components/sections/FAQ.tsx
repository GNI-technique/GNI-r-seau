'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: "Qu'est-ce que GNI ?",
    a: "GNI (Groupe National Immobilier) est un réseau de franchises immobilières français fondé en 2007, spécialisé dans l'accompagnement des directeurs d'agences indépendantes. GNI propose un modèle économique unique : une commission fixe par vente réalisée, pas un pourcentage du prix ou du chiffre d'affaires.",
  },
  {
    q: "Comment fonctionne le modèle à forfait fixe ?",
    a: "Le forfait est fixe et connu à l'avance, quel que soit le prix du bien vendu. Pas de négociation avec le client, pas de surprise pour l'agence. Ce montant est communiqué lors du rendez-vous de découverte.",
  },
  {
    q: "Quelle est la différence entre GNI et une franchise immobilière classique ?",
    a: "Une franchise traditionnelle prélève un pourcentage (entre 5% et 10%) de votre chiffre d'affaires chaque mois. GNI remplace cette logique par une contribution fixe à la vente uniquement. Résultat : votre développement ne vous pénalise plus, et vos revenus augmentent proportionnellement à votre activité.",
  },
  {
    q: "GNI est-il un réseau immobilier ou une franchise ?",
    a: "GNI est un réseau de franchises immobilières indépendantes. Vous rejoignez une communauté d'agences qui partagent des ressources, des outils et une vision commune, tout en conservant votre liberté commerciale. Votre zone de chalandise est contractuellement exclusive.",
  },
  {
    q: "Est-ce que je dois payer des redevances sur mon chiffre d'affaires ?",
    a: "Non. C'est le principe fondateur de GNI : la redevance est fixe, pas indexée sur votre CA. Vous ne payez que lorsqu'une vente est conclue.",
  },
  {
    q: "Quels logiciels immobiliers sont compatibles avec GNI ?",
    a: "GNI est actuellement intégré avec AC3, l'un des logiciels immobiliers les plus utilisés en France. D'autres intégrations (Hektor, Apimo, Netty, Adapt Immo, Périclès) sont en cours. Si vous utilisez un logiciel non encore listé, contactez-nous pour une intégration personnalisée.",
  },
  {
    q: "Comment se déroule l'intégration de mon agence dans GNI ?",
    a: "L'intégration se fait en plusieurs étapes : (1) Rendez-vous de découverte. (2) Signature de la convention de franchise. (3) Paramétrage et synchronisation avec votre logiciel métier. (4) Formation de votre équipe aux outils GNI. (5) Accompagnement au démarrage par un référent dédié. L'ensemble du processus prend généralement 1 à 2 semaines.",
  },
  {
    q: "GNI propose-t-il un accompagnement aux nouveaux franchisés ?",
    a: "Oui, l'accompagnement est au cœur de l'offre GNI. Vous bénéficiez d'un référent dédié, de formations régulières (en présentiel et distanciel), d'un support technique prioritaire, et d'accès à une communauté de directeurs d'agence.",
  },
  {
    q: "Puis-je rejoindre GNI si je crée une agence immobilière ?",
    a: "Absolument. GNI est particulièrement adapté aux créateurs d'agence, car le modèle à forfait fixe permet de maîtriser ses coûts dès le départ. Vous ne payez que quand vous vendez, ce qui est idéal pendant la phase de lancement.",
  },
  {
    q: "Est-ce que GNI est adapté aux petits réseaux indépendants ?",
    a: "Oui, GNI est conçu pour tous les profils : agence individuelle, petit réseau de 2-3 agences, ou structure plus importante. La mutualisation des ressources et des outils est particulièrement avantageuse pour les structures de taille intermédiaire.",
  },
  {
    q: "Qu'est-ce qu'un réseau immobilier indépendant ?",
    a: "Un réseau immobilier indépendant est une association d'agences qui mutualisent certaines ressources (technologie, marketing, communication, formation) tout en conservant leur indépendance juridique et commerciale.",
  },
  {
    q: "GNI offre-t-il des outils marketing mutualisés ?",
    a: "Oui. Les franchisés GNI accèdent à une bibliothèque de ressources marketing complète : templates de communications, supports de vente, vidéos professionnelles, outils de création de contenu, et campagnes médias mutualisées.",
  },
  {
    q: "Comment fonctionne le logiciel de gestion GNI ?",
    a: "La plateforme GNI est un CRM immobilier qui centralise la gestion de vos prospects, le suivi de vos dossiers, l'organisation de vos visites, et le reporting de votre activité. Il se synchronise avec votre logiciel métier existant.",
  },
  {
    q: "Puis-je garder ma marque en rejoignant GNI ?",
    a: "Oui, totalement. Vous conservez votre enseigne, votre identité visuelle, votre marque locale. GNI n'impose pas de changement d'enseigne. Vous pouvez utiliser le label GNI en complément si vous le souhaitez.",
  },
  {
    q: "Quelles sont les conditions pour rejoindre GNI ?",
    a: "Pour rejoindre GNI, vous devez être titulaire de la carte professionnelle T (transaction) ou G (gestion), diriger une agence immobilière indépendante ou être en cours de création. Un entretien de qualification est organisé pour s'assurer que GNI correspond à votre profil.",
  },
  {
    q: "GNI est-il adapté aux agents immobiliers indépendants ?",
    a: "GNI s'adresse en priorité aux directeurs d'agences immobilières qui ont déjà une structure établie. Si vous êtes agent indépendant avec votre propre structure juridique et votre carte professionnelle, nous pouvons étudier votre candidature.",
  },
  {
    q: "Comment GNI génère-t-il ses revenus avec ce modèle ?",
    a: "GNI génère ses revenus uniquement grâce aux forfaits fixes par vente réalisée par les franchisés. Ce modèle aligne parfaitement les intérêts : GNI ne gagne que si vous vendez.",
  },
  {
    q: "Y a-t-il des frais d'entrée chez GNI ?",
    a: "Il peut y avoir des frais d'adhésion initiaux pour couvrir le paramétrage, la formation et l'intégration. Ces frais sont communiqués de manière transparente lors du rendez-vous de découverte.",
  },
  {
    q: "Qu'est-ce qu'un territoire exclusif dans le cadre de GNI ?",
    a: "Votre zone de chalandise est contractuellement exclusive. Aucune autre agence GNI ne peut opérer sur votre secteur. Vous êtes seul à porter la marque sur votre territoire — sans concurrence interne réseau.",
  },
  {
    q: "Comment réserver un rendez-vous de découverte GNI ?",
    a: "Vous pouvez réserver votre rendez-vous directement via le formulaire de contact présent sur cette page. Un membre de l'équipe GNI vous contactera dans les 24 heures. Le rendez-vous est gratuit et sans engagement.",
  },
]

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`border-b border-[#1C3A5C]/10 overflow-hidden transition-colors duration-200 ${
        open ? 'bg-[#F5F1EA]' : 'bg-white'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-sm font-semibold text-[#1C3A5C] leading-relaxed">
          {faq.q}
        </span>
        <div className="shrink-0 w-6 h-6 flex items-center justify-center mt-0.5 text-[#1C3A5C]">
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>

      {open && (
        <div className="px-6 pb-5 text-sm text-[#1C3A5C]/60 leading-relaxed border-t border-[#1C3A5C]/8">
          <div className="pt-4">{faq.a}</div>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="section-py section-px bg-white">
      <div className="container-narrow">
        {/* Header */}
        <div className="mb-12">
          <span className="label-tag text-[#4A7099]">Questions fréquentes</span>
          <h2
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,5vw,56px)' }}
            className="font-bold text-[#1C3A5C] mt-3 leading-tight"
          >
            Toutes vos questions<br />ont une réponse.
          </h2>
        </div>

        {/* FAQ list */}
        <div className="border border-[#1C3A5C]/10 rounded-lg overflow-hidden">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 p-6 bg-[#F5F1EA] rounded-md border border-[#1C3A5C]/8">
          <p className="text-[#1C3A5C]/60 mb-4 text-sm">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <button
            onClick={() => {
              const el = document.querySelector('#contact')
              if (el) {
                const offset = 70
                const top = el.getBoundingClientRect().top + window.scrollY - offset
                window.scrollTo({ top, behavior: 'smooth' })
              }
            }}
            className="btn-cta-blue text-sm px-5 py-2.5"
          >
            Posez-nous votre question
          </button>
        </div>
      </div>
    </section>
  )
}
