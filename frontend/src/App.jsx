import React, { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import LegalPage from './pages/LegalPage'

const origin='https://www.swisshomedesign.ch'
const seoPages={
 '/fr':['Swiss Home Design Sàrl | Construction à Neuchâtel','Découvrez Swiss Home Design Sàrl à Marin-Epagnier : conception, construction et projets de maisons dans la région de Neuchâtel.','/de'],
 '/de':['Swiss Home Design Sàrl | Hausbau in Neuenburg','Swiss Home Design Sàrl in Marin-Epagnier: Einblicke in Planung, Hausbau und laufende Bauprojekte in der Region Neuenburg.','/fr'],
 '/fr/a-propos':['À propos | Swiss Home Design Sàrl','En savoir plus sur Swiss Home Design Sàrl, son approche et son activité dans la région de Neuchâtel.','/de/uber-uns'],
 '/de/uber-uns':['Über uns | Swiss Home Design Sàrl','Erfahren Sie mehr über Swiss Home Design Sàrl und die Arbeitsweise des Unternehmens in der Region Neuenburg.','/fr/a-propos'],
 '/fr/services':['Nos services | Swiss Home Design Sàrl','Découvrez les prestations et l’accompagnement proposés par Swiss Home Design Sàrl pour votre projet de construction.','/de/dienstleistungen'],
 '/de/dienstleistungen':['Leistungen | Swiss Home Design Sàrl','Entdecken Sie die Leistungen und die Projektbegleitung von Swiss Home Design Sàrl rund um das Bauen.','/fr/services'],
 '/fr/realisations':['Chantiers en cours | Swiss Home Design Sàrl','Découvrez en images les travaux en cours et les différentes étapes de chantier de Swiss Home Design Sàrl.','/de/projekte'],
 '/de/projekte':['Laufende Bauprojekte | Swiss Home Design Sàrl','Entdecken Sie echte Baustellenbilder und Einblicke in die laufenden Bauarbeiten von Swiss Home Design Sàrl.','/fr/realisations'],
 '/fr/contact':['Contact | Swiss Home Design Sàrl','Contactez Swiss Home Design Sàrl à Marin-Epagnier et envoyez votre demande de projet directement en ligne.','/de/kontakt'],
 '/de/kontakt':['Kontakt | Swiss Home Design Sàrl','Kontaktieren Sie Swiss Home Design Sàrl in Marin-Epagnier und senden Sie Ihre Projektanfrage über das Kontaktformular.','/fr/contact'],
 '/fr/mentions-legales':['Mentions légales | Swiss Home Design Sàrl','Informations légales et coordonnées de Swiss Home Design Sàrl.','/de/impressum'],
 '/de/impressum':['Impressum | Swiss Home Design Sàrl','Rechtliche Informationen und Kontaktdaten von Swiss Home Design Sàrl.','/fr/mentions-legales']
}
function SiteMetadata(){
 const {pathname}=useLocation()
 useEffect(()=>{
  const [title,description,alternate]=seoPages[pathname]||seoPages['/fr']
  const current=seoPages[pathname]?pathname:'/fr'
  document.title=title
  document.documentElement.lang=current.startsWith('/de')?'de':'fr'
  const ensure=(selector,create)=>document.querySelector(selector)||document.head.appendChild(create())
  const meta=ensure('meta[name="description"]',()=>{const el=document.createElement('meta');el.name='description';return el})
  meta.content=description
  const canonical=ensure('link[rel="canonical"]',()=>{const el=document.createElement('link');el.rel='canonical';return el})
  canonical.href=origin+current
  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el=>el.remove())
  const french=current.startsWith('/fr')?current:alternate
  const german=current.startsWith('/de')?current:alternate
  for(const [lang,path] of [['fr-CH',french],['de-CH',german],['x-default',french]]){
   const el=document.createElement('link')
   el.rel='alternate';el.hreflang=lang;el.href=origin+path
   document.head.appendChild(el)
  }
 },[pathname])
 return null
}

export default function App() {
  return <div className="min-h-screen bg-gray-50 text-gray-900">
    <SiteMetadata />
    <Header />
    <main><Routes>
      <Route path="/" element={<Navigate to="/fr" replace />} />
      <Route path="/fr" element={<HomePage lang="fr" />} />
      <Route path="/fr/a-propos" element={<AboutPage lang="fr" />} />
      <Route path="/fr/services" element={<ServicesPage lang="fr" />} />
      <Route path="/fr/realisations" element={<ProjectsPage lang="fr" />} />
      <Route path="/fr/contact" element={<ContactPage lang="fr" />} />
      <Route path="/fr/mentions-legales" element={<LegalPage lang="fr" />} />
      <Route path="/de" element={<HomePage lang="de" />} />
      <Route path="/de/uber-uns" element={<AboutPage lang="de" />} />
      <Route path="/de/dienstleistungen" element={<ServicesPage lang="de" />} />
      <Route path="/de/projekte" element={<ProjectsPage lang="de" />} />
      <Route path="/de/kontakt" element={<ContactPage lang="de" />} />
      <Route path="/de/impressum" element={<LegalPage lang="de" />} />
      <Route path="*" element={<Navigate to="/fr" replace />} />
    </Routes></main><Footer />
  </div>
}
