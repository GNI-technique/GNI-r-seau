export default function CTAFinal() {
  return (
    <section id="contact" className="section-py section-px bg-[#1C3A5C]">
      <div className="container-narrow text-center">
        <span className="label-tag text-[#4A7099]">Prendre rendez-vous</span>
        <h2
          style={{ fontFamily: 'var(--font-display)' }}
          className="font-bold text-[#EDE8DC] text-5xl md:text-6xl mt-4 mb-6 leading-tight"
        >
          30 minutes pour voir si GNI<br />correspond à votre agence.
        </h2>
        <p className="text-[#EDE8DC]/60 text-lg mb-10 max-w-lg mx-auto">
          Sans engagement. Juste une conversation avec un responsable réseau GNI pour répondre à vos questions.
        </p>

        {/* Form placeholder */}
        <div className="bg-[#122845] border border-[#EDE8DC]/10 rounded-lg p-8 md:p-12 text-left max-w-2xl mx-auto">
          {/*
            ZOHO FORMS INTEGRATION — replace this entire div with your Zoho iframe:
            <iframe
              src="YOUR_ZOHO_FORMS_URL"
              style={{ border: 'none', width: '100%', minHeight: '500px' }}
              aria-label="Formulaire de prise de rendez-vous GNI"
            />
          */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="label-tag text-[#4A7099] block mb-2">Prénom</label>
                <input
                  className="w-full bg-[#1C3A5C] border border-[#EDE8DC]/15 rounded px-4 py-3 text-[#EDE8DC] text-sm placeholder-[#4A7099] focus:outline-none focus:border-[#EDE8DC]/30"
                  placeholder="Votre prénom"
                />
              </div>
              <div>
                <label className="label-tag text-[#4A7099] block mb-2">Nom</label>
                <input
                  className="w-full bg-[#1C3A5C] border border-[#EDE8DC]/15 rounded px-4 py-3 text-[#EDE8DC] text-sm placeholder-[#4A7099] focus:outline-none focus:border-[#EDE8DC]/30"
                  placeholder="Votre nom"
                />
              </div>
            </div>
            <div>
              <label className="label-tag text-[#4A7099] block mb-2">Agence</label>
              <input
                className="w-full bg-[#1C3A5C] border border-[#EDE8DC]/15 rounded px-4 py-3 text-[#EDE8DC] text-sm placeholder-[#4A7099] focus:outline-none focus:border-[#EDE8DC]/30"
                placeholder="Nom de votre agence"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="label-tag text-[#4A7099] block mb-2">Téléphone</label>
                <input
                  className="w-full bg-[#1C3A5C] border border-[#EDE8DC]/15 rounded px-4 py-3 text-[#EDE8DC] text-sm placeholder-[#4A7099] focus:outline-none focus:border-[#EDE8DC]/30"
                  placeholder="06 XX XX XX XX"
                />
              </div>
              <div>
                <label className="label-tag text-[#4A7099] block mb-2">Email</label>
                <input
                  className="w-full bg-[#1C3A5C] border border-[#EDE8DC]/15 rounded px-4 py-3 text-[#EDE8DC] text-sm placeholder-[#4A7099] focus:outline-none focus:border-[#EDE8DC]/30"
                  placeholder="vous@agence.fr"
                />
              </div>
            </div>
            <button className="btn-cta w-full justify-center mt-4 py-4 text-base font-bold">
              Réserver un créneau →
            </button>
          </div>
        </div>

        <p className="mt-6 text-[#4A7099] text-sm">
          Ou appelez directement&nbsp;:{' '}
          <span className="text-[#EDE8DC]">01 XX XX XX XX</span>
        </p>
      </div>
    </section>
  )
}
