import React from 'react'
import {Link} from 'react-router-dom'
const photos=[
 ['projekt-dachmontage.jpg','Montage de toiture','Dachmontage'],
 ['projekt-elementmontage.jpg',"Pose d'éléments préfabriqués",'Montage von Bauelementen'],
 ['projekt-kran-vogelperspektive.jpg','Montage vue du dessus','Montage aus der Vogelperspektive'],
 ['projekt-kran-winter.jpg','Chantier en hiver','Baustelle im Winter'],
 ['projekt-baufortschritt.jpg','Étapes de construction','Baufortschritt'],
 ['projekt-nachtmontage.jpg','Intervention en soirée','Montage am Abend'],
 ['projekt-baustellen-collage.jpg','Suivi de chantier','Baustelleneinblicke']
]
export default function ProjectsPage({lang='fr'}) {
 const de=lang==='de'
 return <div className="shd-inner">
  <section className="shd-page-hero"><span className="shd-eyebrow">{de?'EINBLICKE IN UNSERE ARBEIT':'NOS CHANTIERS EN COURS'}</span>
  <h1>{de?'Unsere Projekte. Echte Einblicke.':'Nos projets prennent forme.'}</h1>
  <p>{de?'Einblicke in laufende Bauarbeiten, von der Montage bis zur Umsetzung vor Ort.':'Découvrez quelques étapes de nos chantiers en cours, de la livraison à la mise en œuvre sur place.'}</p></section>
  <section className="shd-work-grid">{photos.map(([img,frTitle,deTitle],i)=><article className="shd-work-card" key={img}>
   <div className="shd-work-frame"><img src={'/images/'+img} alt={de?deTitle:frTitle} loading="lazy" onError={e=>{e.currentTarget.style.display='none'}} /></div>
   <span>{String(i+1).padStart(2,'0')} — {de?'LAUFENDES PROJEKT':'CHANTIER EN COURS'}</span><h2>{de?deTitle:frTitle}</h2>
   </article>)}</section>
   <p className="shd-disclaimer">{de?'Fotos von laufenden Arbeiten. Weitere Projektinformationen werden ergänzt.':'Photographies de travaux en cours. D’autres informations sur les projets seront ajoutées.'}</p>
   <section className="shd-inspo-section"><span className="shd-eyebrow">INSPIRATION</span><h2>{de?'Ideen für modernes Wohnen.':'Inspirations pour demain.'}</h2><p>{de?'Die folgenden Architekturaufnahmen dienen ausschliesslich als Inspiration und zeigen keine abgeschlossenen Arbeiten des Unternehmens.':'Ces images d’architecture sont présentées à titre d’inspiration et ne représentent pas des réalisations achevées par notre entreprise.'}</p><div className="shd-inspo-grid"><img src="/images/inspiration-haus-beige.jpg" alt={de?'Inspiration modernes Haus':'Inspiration maison contemporaine'} loading="lazy" onError={e=>{e.currentTarget.style.display='none'}}/><img src="/images/inspiration-haus-abend.jpg" alt={de?'Inspiration Haus bei Abendlicht':'Inspiration maison au crépuscule'} loading="lazy" onError={e=>{e.currentTarget.style.display='none'}}/></div></section>
   <section className="shd-bottom-cta"><h2>{de?'Ihr Projekt beginnt mit einem Gespräch.':'Et si votre projet commençait ici ?'}</h2><Link className="shd-button shd-button-light" to={de?'/de/kontakt':'/fr/contact'}>{de?'Kontakt':'Prendre contact'} ↗</Link></section>
 </div>
}