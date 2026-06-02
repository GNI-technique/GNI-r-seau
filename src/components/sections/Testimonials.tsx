const testimonials = [
  {
    quote:
      "On perdait des mandats à cause des honoraires. Les clients négociaient systématiquement. Depuis qu'on est sur le forfait fixe GNI, c'est terminé. La question ne se pose même plus.",
    name: 'Marc Dubois',
    detail: 'Directeur — Agence Dubois Immobilier, Lyon · 4 ans chez GNI',
    initials: 'MD',
  },
  {
    quote:
      "J'avais peur de perdre en liberté en rejoignant un réseau. En réalité, j'ai gardé mon identité locale et j'ai gagné des outils et un flux de leads que je n'aurais jamais pu financer seul.",
    name: 'Sophie Renard',
    detail: 'Dirigeante — SR Transactions, Bordeaux · 3 ans chez GNI',
    initials: 'SR',
  },
  {
    quote:
      'Le retour sur investissement a été visible dès le premier trimestre. Le forfait fixe, ça simplifie tout — la formation des négociateurs, la relation client, la signature.',
    name: 'Thomas Vallet',
    detail: 'Fondateur — Vallet Immobilier, Nantes · 6 ans chez GNI',
    initials: 'TV',
  },
]

export default function Testimonials() {
  return (
    <section id="temoignages" className="section-py section-px bg-[#F5F1EA]">
      <div className="container-max">
        {/* Header */}
        <div className="mb-16">
          <span className="label-tag text-[#4A7099]">Témoignages</span>
          <h2
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,5vw,56px)' }}
            className="font-bold text-[#1C3A5C] mt-3 leading-tight"
          >
            Ce qu&apos;en disent<br />nos franchisés
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-[#1C3A5C]/8 rounded-lg p-8 shadow-sm flex flex-col"
            >
              <p className="text-[#1C3A5C] text-lg italic leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-8 pt-6 border-t border-[#1C3A5C]/8">
                <div className="w-10 h-10 rounded-full bg-[#1C3A5C] flex items-center justify-center flex-shrink-0">
                  <span
                    className="text-[#EDE8DC] text-xs font-bold"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {t.initials}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#1C3A5C]">{t.name}</div>
                  <div className="label-tag text-[#4A7099] mt-0.5">{t.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
