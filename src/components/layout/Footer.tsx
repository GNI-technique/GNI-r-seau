import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#122845] border-t border-[#EDE8DC]/8 py-12 section-px">
      <div className="container-max flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <Image
            src="/logo-gni-transparent.png"
            alt="GNI"
            width={100}
            height={50}
            className="h-10 w-auto brightness-0 invert opacity-60 mb-3"
          />
          <p className="label-tag text-[#4A7099]">Groupe National Immobilier</p>
        </div>
        <div className="flex flex-wrap gap-6 text-xs text-[#4A7099]">
          <a href="/mentions-legales" className="hover:text-[#EDE8DC] transition-colors">
            Mentions légales
          </a>
          <a href="/politique-confidentialite" className="hover:text-[#EDE8DC] transition-colors">
            Politique de confidentialité
          </a>
          <a href="/loi-hoguet" className="hover:text-[#EDE8DC] transition-colors">
            Loi Hoguet
          </a>
        </div>
        <p className="text-xs text-[#4A7099]">© 2025 GNI — Groupe National Immobilier</p>
      </div>
    </footer>
  )
}
