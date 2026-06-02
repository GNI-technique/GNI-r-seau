const stats = [
  { value: '180+', label: 'Agences actives', size: 'large' },
  { value: '17', label: 'Ans de réseau', size: 'medium' },
  { value: '94%', label: 'Taux de renouvellement', size: 'large' },
  { value: '43 j', label: 'Délai moyen de vente', size: 'medium' },
  { value: '62', label: 'Départements couverts', size: 'small' },
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
          <span className="label-tag text-[#4A7099]">Le réseau en chiffres</span>
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
