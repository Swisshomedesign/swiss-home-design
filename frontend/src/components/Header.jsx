import React from 'react'
import { Link, useLocation } from 'react-router-dom'
export default function Header(){
  const de = useLocation().pathname.startsWith('/de')
  const base = de ? '/de' : '/fr'
  const paths = de ? ['','/uber-uns','/dienstleistungen','/projekte','/kontakt'] : ['','/a-propos','/services','/realisations','/contact']
  const labels = de ? ['Startseite','Über uns','Leistungen','Projekte','Kontakt'] : ['Accueil','À propos','Nos services','Réalisations','Contact']
  return <header className="bg-white shadow-sm"><div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4 flex-wrap">
    <Link to={base} className="text-xl font-semibold">Swiss Home Design Sàrl</Link>
    <nav className="flex flex-wrap gap-4 text-sm">{labels.map((label,i)=><Link key={label} to={base+paths[i]} className="hover:underline">{label}</Link>)}</nav>
    <div className="flex gap-3 text-sm"><Link to="/fr">FR</Link><Link to="/de">DE</Link></div>
  </div></header>
}
