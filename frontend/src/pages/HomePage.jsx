import React from 'react'
import { Link } from 'react-router-dom'

const content = {
  fr: {
    eyebrow: 'ARCHITECTURE • HABITAT • DESIGN',
    title: 'Des espaces pensés pour votre façon de vivre.',
    intro: 'Une vision contemporaine de l’habitat, où l’esthétique rencontre la fonctionnalité.',
    primary: 'Découvrir nos services', secondary: 'Parlons de votre projet',
    aboutLabel: 'NOTRE PHILOSOPHIE', aboutTitle: 'Un lieu à votre image.',
    about: 'Chaque projet commence par une idée et une conversation. Nous croyons aux espaces lumineux, aux lignes épurées et aux détails qui font toute la différence.',
    serviceLabel: 'CE QUE NOUS FAISONS', serviceTitle: 'Des idées aux espaces.',
    cards: [['01','Conception','Imaginer des espaces harmonieux, adaptés à vos envies.'],['02','Construction','Donner forme à un projet avec précision et attention.'],['03','Rénovation','Réinventer des lieux et révéler leur potentiel.']],
    visionLabel: 'PRENONS CONTACT', visionTitle: 'Votre prochain chapitre commence ici.',
    visionText: 'Vous avez un projet en tête ? Échangeons sur vos idées.', visionAction: 'Nous contacter',
    disclaimer: 'Visuels d’ambiance — non représentatifs de réalisations de l’entreprise.'
  },
  de: {
    eyebrow: 'ARCHITEKTUR • WOHNEN • DESIGN',
    title: 'Räume, die zu Ihrem Leben passen.',
    intro: 'Eine zeitgemässe Vorstellung vom Wohnen, bei der Ästhetik und Funktion zusammenfinden.',
    primary: 'Unsere Leistungen', secondary: 'Projekt besprechen',
    aboutLabel: 'UNSERE PHILOSOPHIE', aboutTitle: 'Ein Ort, der zu Ihnen passt.',
    about: 'Jedes Projekt beginnt mit einer Idee und einem Gespräch. Wir glauben an lichtdurchflutete Räume, klare Linien und Details, die den Unterschied machen.',
    serviceLabel: 'UNSERE TÄTIGKEITEN', serviceTitle: 'Von der Idee zum Raum.',
    cards: [['01','Konzeption','Harmonische Räume nach Ihren Vorstellungen gestalten.'],['02','Bauen','Projekte mit Präzision und Sorgfalt umsetzen.'],['03','Renovation','Bestehende Räume neu denken und Potenzial entfalten.']],
    visionLabel: 'KONTAKT', visionTitle: 'Ihr nächstes Kapitel beginnt hier.',
    visionText: 'Sie haben ein Projekt im Kopf? Erzählen Sie uns davon.', visionAction: 'Kontakt aufnehmen',
    disclaimer: 'Symbolbilder — keine Referenzprojekte des Unternehmens.'
  }
}

export default function HomePage({ lang = 'fr' }) {
  const c = content[lang] || content.fr
  const base = lang === 'de' ? '/de' : '/fr'
  const services = base + (lang === 'de' ? '/dienstleistungen' : '/services')
  const contact = base + (lang === 'de' ? '/kontakt' : '/contact')
  return <div className="shd-home">
    <section className="shd-hero">
      <div className="shd-hero-image" aria-hidden="true"/>
      <div className="shd-hero-shade" aria-hidden="true"/>
      <div className="shd-hero-content">
        <span className="shd-eyebrow shd-light">{c.eyebrow}</span>
        <h1>{c.title}</h1>
        <p>{c.intro}</p>
        <div className="shd-actions">
          <Link className="shd-button shd-button-light" to={services}>{c.primary} <span aria-hidden="true">↗</span></Link>
          <Link className="shd-text-link" to={contact}>{c.secondary} <span aria-hidden="true">→</span></Link>
        </div>
      </div>
      <div className="shd-hero-index">SWISS HOME DESIGN <span>—</span> NEUCHÂTEL, SUISSE</div>
    </section>

    <section className="shd-intro-section">
      <div><span className="shd-eyebrow">{c.aboutLabel}</span><h2>{c.aboutTitle}</h2></div>
      <div className="shd-intro-right"><p>{c.about}</p><div className="shd-line"/></div>
    </section>

    <section className="shd-image-band" aria-label="Architecture contemporaine">
      <div className="shd-image-band-photo"/>
      <span>FORME. LUMIÈRE. MATIÈRE.</span>
    </section>

    <section className="shd-services">
      <span className="shd-eyebrow">{c.serviceLabel}</span>
      <h2>{c.serviceTitle}</h2>
      <div className="shd-service-grid">{c.cards.map(([n,title,desc])=><article className="shd-service-card" key={n}><span>{n} / 03</span><h3>{title}</h3><p>{desc}</p><Link to={services} aria-label={title}>↗</Link></article>)}</div>
    </section>

    <section className="shd-contact-cta">
      <span className="shd-eyebrow shd-light">{c.visionLabel}</span>
      <h2>{c.visionTitle}</h2><p>{c.visionText}</p>
      <Link className="shd-button shd-button-light" to={contact}>{c.visionAction} <span>↗</span></Link>
    </section>
    <p className="shd-image-note">{c.disclaimer}</p>
  </div>
}
