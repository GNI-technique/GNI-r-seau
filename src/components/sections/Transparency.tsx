const items = [
  {
    label: "Droit d'entrée",
    value: 'Sur devis',
    detail: "Selon le territoire et la taille de l'agence",
  },
  {
    label: 'Redevance mensuelle',
    value: 'Forfait fixe',
    detail: "Pas indexée sur votre chiffre d'affaires",
  },
  {
    label: 'Ce qui est inclus',
    value: 'Tout',
    detail: 'CRM, outils, formation, marketing réseau, support',
  },
]

export default function Transparency() {
  return (
    <section id="rejoindre" className="section-py section-px bg-white">
      <div className="container-narrow">
        <span className="label-tag text-[#4A7099]">Transparence financière</span>
        <h2
          style={{ fontFamily: 'var(--font-display)' }}
          className="font-bold text-[#1C3A5C] text-4xl md:text-5xl mt-3 mb-12 leading-tight"
        >
          Ce à quoi vous vous engagez
        </h2>

        <div className="grid md:grid-cols-3 gap-px bg-[#1C3A5C]/10">
          {items.map((item, i) => (
            <div key={i} className="bg-white p-8">
              <div className="label-tag text-[#4A7099] mb-3">{item.label}</div>
              <div
                style={{ fontFamily: 'var(--font-display)' }}
                className="font-bold text-[#1C3A5C] text-3xl mb-2"
              >
                {item.value}
              </div>
              <p className="text-sm text-[#1C3A5C]/50 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-[#4A7099] italic">
          Les détails complets lors de votre rendez-vous de découverte. Pas d&apos;engagement à l&apos;issue de cet échange.
        </p>
      </div>
    </section>
  )
}
