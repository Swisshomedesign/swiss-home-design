import React from 'react'
import { Link, useLocation } from 'react-router-dom'
export default function Header(){
 const de=useLocation().pathname.startsWith('/de')
 const base=de?'/de':'/fr'
 const paths=de?['','/uber-uns','/dienstleistungen','/projekte','/kontakt']:['','/a-propos','/services','/realisations','/contact']
 const labels=de?['Startseite','Über uns','Leistungen','Projekte','Kontakt']:['Accueil','À propos','Nos services','Réalisations','Contact']
 return <header className="shd-site-header"><div className="shd-header-inner">
   <Link to={base} className="shd-logo-link"><img src="/images/logo.jpg" alt="" className="shd-header-logo" onError={e=>{e.currentTarget.style.display='none'}}/><span>SWISS HOME<br/>DESIGN</span></Link>
   <nav aria-label={de?'Hauptnavigation':'Navigation principale'}>{labels.map((label,i)=><Link key={label} to={base+paths[i]}>{label}</Link>)}</nav>
   <div className="shd-lang"><Link to="/fr" aria-label="Français">FR</Link><span>/</span><Link to="/de" aria-label="Deutsch">DE</Link></div>
 </div></header>
}