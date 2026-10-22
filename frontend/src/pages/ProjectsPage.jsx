import React from 'react'
import { Link } from 'react-router-dom'

const photos = [
  { file:'projekt-dachmontage.jpg', fr:'Montage de toiture', de:'Dachmontage', position:'center 48%' },
  { file:'projekt-elementmontage.jpg', fr:'Mise en place d’éléments', de:'Montage von Bauelementen', position:'center 46%' },
  { file:'projekt-kran-vogelperspektive.jpg', fr:'Vue aérienne du chantier', de:'Baustelle aus der Vogelperspektive', position:'center 50%' },
  { file:'projekt-kran-winter.jpg', fr:'Travaux en hiver', de:'Bauarbeiten im Winter', position:'center 55%' },
  { file:'projekt-baufortschritt.jpg', fr:'Progression du chantier', de:'Baufortschritt', position:'center 50%' },
  { file:'projekt-nachtmontage.jpg', fr:'Intervention en soirée', de:'Montage am Abend', position:'center 55%' },
  { file:'projekt-baustellen-collage.jpg', fr:'Moments de chantier', de:'Einblicke in die Bauarbeiten', position:'center 50%' }
]

export default function ProjectsPage({lang='fr'}) {
 const de=lang==='de'
 const [selected,setSelected]=React.useState(null)
 React.useEffect(()=>{
  if(selected===null)return
  const onKey=e=>{if(e.key==='Escape')setSelected(null);if(e.key==='ArrowRight')setSelected(i=>(i+1)%photos.length);if(e.key==='ArrowLeft')setSelected(i=>(i+photos.length-1)%photos.length)}
  document.addEventListener('keydown',onKey)
  return ()=>document.removeEventListener('keydown',onKey)
 },[selected])
 return <div className="shd-inner shd-gallery">
  <section className="shd-page-hero">
   <span className="shd-eyebrow">{de?'EINBLICKE IN UNSERE ARBEIT':'NOS CHANTIERS EN COURS'}</span>
   <h1>{de?'Unsere Projekte. Echte Einblicke.':'Nos projets prennent forme.'}</h1>
   <p>{de?'Einblicke in laufende Bauarbeiten, von der Montage bis zur Umsetzung vor Ort.':'Découvrez quelques étapes de nos chantiers en cours, de la livraison à la mise en œuvre sur place.'}</p>
  </section>
  <section className="shd-work-section" aria-label={de?'Bilder laufender Bauarbeiten':'Photos des chantiers en cours'}>
   <div className="shd-work-topline"><span>{de?'LAUFENDE ARBEITEN':'TRAVAUX EN COURS'}</span><span>01 — 07</span></div>
   <div className="shd-work-grid">
    {photos.map((photo,i)=><article className="shd-work-card" key={photo.file}>
      <button type="button" className="shd-work-frame" onClick={()=>setSelected(i)} aria-label={(de?'Foto vergrössern: ':'Agrandir la photo : ')+(de?photo.de:photo.fr)}>
       <img src={'/images/'+photo.file} alt={de?photo.de:photo.fr} style={{objectPosition:photo.position}} loading={i===0?'eager':'lazy'}/>
       <span className="shd-zoom-mark" aria-hidden="true">↗</span>
      </button>
      <div className="shd-work-caption"><span>{String(i+1).padStart(2,'0')} / 07 · {de?'IM BAU':'EN COURS'}</span><h2>{de?photo.de:photo.fr}</h2></div>
    </article>)}
   </div>
   <p className="shd-disclaimer">{de?'Die Aufnahmen zeigen laufende Bauarbeiten; weitere Projektangaben können später ergänzt werden.':'Ces photos montrent des travaux en cours. Des informations complémentaires pourront être ajoutées ultérieurement.'}</p>
  </section>
  <section className="shd-inspo-section">
   <span className="shd-eyebrow">INSPIRATION</span>
   <h2>{de?'Ideen für modernes Wohnen.':'Inspirations pour demain.'}</h2>
   <p>{de?'Diese Architekturaufnahmen sind reine Inspirationsbilder und zeigen keine abgeschlossenen Projekte unseres Unternehmens.':'Ces photographies servent uniquement d’inspiration et ne représentent pas des projets achevés par notre entreprise.'}</p>
   <div className="shd-inspo-grid"><figure><img src="/images/inspiration-haus-beige.jpg" alt={de?'Modernes Haus als Inspiration':'Maison contemporaine, image d’inspiration'} loading="lazy"/><figcaption>01 — INSPIRATION</figcaption></figure><figure><img src="/images/inspiration-haus-abend.jpg" alt={de?'Haus in Abendstimmung als Inspiration':'Maison au crépuscule, image d’inspiration'} loading="lazy"/><figcaption>02 — INSPIRATION</figcaption></figure></div>
  </section>
  <section className="shd-bottom-cta"><h2>{de?'Ihr Projekt beginnt mit einem Gespräch.':'Et si votre projet commençait ici ?'}</h2><Link className="shd-button shd-button-light" to={de?'/de/kontakt':'/fr/contact'}>{de?'Kontakt':'Prendre contact'} ↗</Link></section>
  {selected!==null&&<div className="shd-lightbox" role="dialog" aria-modal="true" aria-label={de?'Projektfoto':'Photo de chantier'} onClick={()=>setSelected(null)}>
   <button type="button" className="shd-lightbox-close" onClick={()=>setSelected(null)} aria-label={de?'Schliessen':'Fermer'}>×</button>
   <button type="button" className="shd-lightbox-prev" onClick={e=>{e.stopPropagation();setSelected(i=>(i+photos.length-1)%photos.length)}} aria-label={de?'Vorheriges Bild':'Image précédente'}>‹</button>
   <figure onClick={e=>e.stopPropagation()}><img src={'/images/'+photos[selected].file} alt={de?photos[selected].de:photos[selected].fr}/><figcaption>{String(selected+1).padStart(2,'0')} / 07 — {de?photos[selected].de:photos[selected].fr}</figcaption></figure>
   <button type="button" className="shd-lightbox-next" onClick={e=>{e.stopPropagation();setSelected(i=>(i+1)%photos.length)}} aria-label={de?'Nächstes Bild':'Image suivante'}>›</button>
  </div>}
 </div>
}
