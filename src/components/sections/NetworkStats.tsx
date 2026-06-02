const stats = [
  { value: '0 %', label: 'Sur votre chiffre d\'affaires', size: 'large' },
  { value: '150 €', label: 'Par vente réalisée, c\'est tout', size: 'large' },
  { value: '100 %', label: 'De vos honoraires vous reviennent', size: 'medium' },
  { value: '1 prix', label: 'Identique pour tous les biens', size: 'medium' },
  { value: '0 €', label: 'De négociation possible', size: 'small' },
]

const sizeClass: Record<string, string> = {
  large: 'text-[80px]',
  medium: 'text-[60px]',
  small: 'text-[48px]',
}

export default function NetworkStats() {
  return (
    <section id="reseau-chiffres" className="section-py section-px bg-[#122845]">
      <div className="container-max">
        <div className="mb-12">
          <span className="label-tag text-[#4A7099]">Le modèle en chiffres</span>
        </div>
        <div className="flex flex-wrap items-end gap-0">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-stretch">
              {i > 0 && (
                <div className="w-px self-stretch bg-[#EDE8DC]/10 mx-8 md:mx-12" />
              )}
              <div>
                <div
                  className={`font-bold text-[#EDE8DC] leading-none ${sizeClass[stat.size]}`}
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {stat.value}
                </div>
                <div className="label-tag text-[#4A7099] mt-2">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
