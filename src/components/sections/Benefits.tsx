import { TrendingUp, Cpu, MapPin } from 'lucide-react'

const benefits = [
  {
    number: '01',
    title: 'Leads entrants qualifiés',
    text: "Le réseau GNI génère du trafic national via le SEO, les portails immobiliers et la notoriété de marque — un flux de prospects qu'une agence indépendante ne peut pas atteindre seule.",
    label: 'Flux de prospects',
    icon: TrendingUp,
  },
  {
    number: '02',
    title: 'Outils & back-office inclus',
    text: 'CRM de gestion, logiciel de transaction, outils marketing, templates, formation continue — tout est inclus dans la franchise. Zéro charge logicielle supplémentaire.',
    label: 'Technologie incluse',
    icon: Cpu,
  },
  {
    number: '03',
    title: 'Territoire exclusif protégé',
    text: 'Votre zone de chalandise est contractuellement exclusive. Aucune agence GNI ne peut opérer sur votre secteur. Vous êtes seul à porter la marque sur votre territoire.',
    label: 'Exclusivité garantie',
    icon: MapPin,
  },
]

export default function Benefits() {
  return (
    <section id="reseau" className="section-py section-px bg-white">
      <div className="container-max">
        {/* Section header */}
        <div className="mb-16">
          <span className="label-tag text-[#4A7099]">Ce que le réseau apporte</span>
          <h2
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,5vw,56px)' }}
            className="font-bold text-[#1C3A5C] mt-3 leading-tight"
          >
            Trois avantages<br />que vous ne pouvez pas construire seul
          </h2>
        </div>

        {/* Benefits rows */}
        <div className="space-y-px">
          {benefits.map((b, i) => {
            const Icon = b.icon
            const isEven = i % 2 === 1
            return (
              <div
                key={b.number}
                className={`grid md:grid-cols-2 gap-1 ${isEven ? '' : ''}`}
              >
                {/* Number side */}
                <div
                  className={`${isEven ? 'md:order-2' : 'md:order-1'} bg-[#F5F1EA] p-8 md:p-16 flex flex-col justify-center`}
                >
                  <div
                    className="font-bold text-[#1C3A5C]/10 leading-none select-none mb-4"
                    style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(80px,12vw,140px)' }}
                    aria-hidden="true"
                  >
                    {b.number}
                  </div>
                  <div className="label-tag text-[#4A7099]">{b.label}</div>
                </div>

                {/* Text side */}
                <div
                  className={`${isEven ? 'md:order-1' : 'md:order-2'} bg-white p-8 md:p-16 border border-[#1C3A5C]/8 flex flex-col justify-center`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={20} className="text-[#4A7099]" strokeWidth={1.5} />
                    <h3
                      className="font-bold text-[#1C3A5C] text-2xl md:text-3xl"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {b.title}
                    </h3>
                  </div>
                  <p className="text-[#1C3A5C]/60 text-base leading-relaxed">{b.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
