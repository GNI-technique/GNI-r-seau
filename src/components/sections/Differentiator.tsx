export default function Differentiator() {
  return (
    <section id="differenciateur" className="section-py section-px bg-[#F5F1EA]">
      <div className="container-max">

        {/* Section header — left-aligned */}
        <div className="mb-16">
          <span className="label-tag text-[#4A7099]">Le différenciateur</span>
          <h2
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,5vw,56px)' }}
            className="font-bold text-[#1C3A5C] mt-3 leading-tight"
          >
            Ce que ça change<br />pour votre agence
          </h2>
        </div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-1">
          {/* Left: classic % model */}
          <div className="bg-white p-8 md:p-12 border border-[#1C3A5C]/10">
            <div className="label-tag text-[#4A7099] mb-6">Modèle classique</div>
            <div
              className="font-bold text-[#1C3A5C]/30 text-3xl mb-8"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              4–7 % du prix de vente
            </div>
            <ul className="space-y-4">
              {[
                'Chaque vente déclenche une négociation sur les honoraires',
                'Les clients comparent, marchandent, font jouer la concurrence',
                'Vos vendeurs perdent du temps à justifier leur commission',
                'Le mandat est signé, mais à quel prix ?',
              ].map((point, i) => (
                <li key={i} className="flex gap-3 text-[#1C3A5C]/60 text-sm leading-relaxed">
                  <span className="w-1 h-1 rounded-full bg-[#1C3A5C]/30 mt-2 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: GNI fixed fee */}
          <div className="bg-[#1C3A5C] p-8 md:p-12">
            <div className="label-tag text-[#4A7099] mb-6">Modèle GNI</div>
            <div
              className="font-bold text-[#EDE8DC] text-3xl mb-8"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Forfait fixe par vente
            </div>
            <ul className="space-y-4">
              {[
                "Le montant est connu à l'avance — aucune surprise, aucune négociation",
                'Vos clients font confiance à un tarif transparent et clair',
                'Vos vendeurs se concentrent sur la vente, pas sur la défense de leur commission',
                'Plus de mandats signés, plus vite.',
              ].map((point, i) => (
                <li key={i} className="flex gap-3 text-[#EDE8DC]/80 text-sm leading-relaxed">
                  <span className="w-1 h-1 rounded-full bg-[#EDE8DC]/40 mt-2 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Concrete example */}
        <div className="mt-1 bg-[#1C3A5C] p-8 md:p-12">
          <div className="label-tag text-[#4A7099] mb-8">Exemple concret — bien à 350 000 €</div>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div>
              <div className="label-tag text-[#4A7099]/60 mb-2">Honoraires classiques (5%)</div>
              <div
                className="font-bold text-[#EDE8DC]/40 text-5xl leading-none"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                17 500 €
              </div>
              <div className="text-[#EDE8DC]/30 text-xs mt-2">sujet à négociation</div>
            </div>
            <div className="text-center">
              <div
                className="text-[#EDE8DC]/20 text-6xl font-bold"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                vs
              </div>
            </div>
            <div>
              <div className="label-tag text-[#4A7099] mb-2">Forfait fixe GNI</div>
              <div
                className="font-bold text-[#EDE8DC] text-5xl leading-none"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Fixe
              </div>
              <div className="text-[#EDE8DC]/60 text-xs mt-2">
                identique pour tous les biens, toutes les agences
              </div>
            </div>
          </div>
        </div>

        {/* Subtle CTA */}
        <div className="mt-8 text-right">
          <a
            href="#rejoindre"
            className="text-sm text-[#4A7099] hover:text-[#1C3A5C] transition-colors underline underline-offset-4"
          >
            Voir comment ça marche en pratique →
          </a>
        </div>

      </div>
    </section>
  )
}
