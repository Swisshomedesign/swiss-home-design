import React, { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const de = location.pathname.startsWith('/de')
  const base = de ? '/de' : '/fr'
  const paths = de
    ? ['', '/uber-uns', '/dienstleistungen', '/projekte', '/kontakt']
    : ['', '/a-propos', '/services', '/realisations', '/contact']
  const labels = de
    ? ['Startseite', 'Über uns', 'Leistungen', 'Projekte', 'Kontakt']
    : ['Accueil', 'À propos', 'Services', 'Réalisations', 'Contact']
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => setMenuOpen(false), [location.pathname])
  const translations = {
    '/': '/', '/a-propos': '/uber-uns', '/services': '/dienstleistungen',
    '/realisations': '/projekte', '/contact': '/kontakt', '/mentions-legales': '/impressum'
  }
  const currentSuffix = location.pathname.replace(/^\/(fr|de)/, '') || '/'
  const deSuffix = de ? currentSuffix : translations[currentSuffix] || '/'
  const frSuffix = de ? Object.keys(translations).find(key => translations[key] === currentSuffix) || '/' : currentSuffix
  return <header className="shd-site-header">
    <div className="shd-header-inner">
      <Link to={base} className="shd-logo-link" aria-label="Swiss Home Design — Home">
        <img src="/images/logo.jpg" alt="Swiss Home Design Sàrl" className="shd-header-logo" />
      </Link>
      <nav className={menuOpen ? 'shd-nav shd-nav-open' : 'shd-nav'} id="shd-main-nav" aria-label={de ? 'Hauptnavigation' : 'Navigation principale'}>
        {labels.map((label, i) =>
          <NavLink key={paths[i]} end={i === 0} to={base + paths[i]} className={({ isActive }) => isActive ? 'shd-nav-link active' : 'shd-nav-link'}>{label}</NavLink>
        )}
      </nav>
      <div className="shd-header-tools">
        <div className="shd-lang" aria-label={de ? 'Sprache wählen' : 'Choisir la langue'}>
          <Link to={'/fr' + (frSuffix === '/' ? '' : frSuffix)} lang="fr" aria-current={!de ? 'true' : undefined} className={!de ? 'selected' : ''}>FR</Link>
          <span aria-hidden="true">/</span>
          <Link to={'/de' + (deSuffix === '/' ? '' : deSuffix)} lang="de" aria-current={de ? 'true' : undefined} className={de ? 'selected' : ''}>DE</Link>
        </div>
        <button type="button" className="shd-menu-toggle" aria-controls="shd-main-nav" aria-expanded={menuOpen} aria-label={de ? (menuOpen ? 'Menü schliessen' : 'Menü öffnen') : (menuOpen ? 'Fermer le menu' : 'Ouvrir le menu')} onClick={() => setMenuOpen(value => !value)}>
          <span /><span /><span />
        </button>
      </div>
    </div>
  </header>
}
