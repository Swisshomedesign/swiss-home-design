import React, { useState } from 'react'
export default function ContactPage({lang='fr'}) {
 const de=lang==='de'
 const [form,setForm]=useState({name:'',email:'',type:'',message:''})
 const [consent,setConsent]=useState(false)
 const update=(key,value)=>setForm(prev=>({...prev,[key]:value}))
 const types=de?['Neubau','Renovation / Umbau','Planung / Beratung','Andere Anfrage']:['Nouvelle construction','Rénovation / transformation','Conception / conseil','Autre demande']
 function submit(e){
  e.preventDefault()
  if(!consent)return
  const subject=de?'Projektanfrage über Website':'Demande de projet via le site'
  const body=[(de?'Name: ':'Nom : ')+form.name,'Email: '+form.email,(de?'Projektart: ':'Type de projet : ')+form.type,'',form.message].join('\n')
  window.location.href='mailto:info@swisshomedesign.ch?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body)
 }
 return <div className="shd-inner shd-contact-page">
  <section className="shd-page-hero"><span className="shd-eyebrow">{de?'KONTAKT':'CONTACT'}</span><h1>{de?'Ihre Idee. Unser Gespräch.':'Votre projet commence ici.'}</h1><p>{de?'Ein Neubau, ein Umbau oder eine erste Idee? Erzählen Sie uns davon.':'Une construction, une rénovation ou une première idée ? Parlons-en.'}</p></section>
  <section className="shd-contact-layout shd-contact-layout-form">
   <div className="shd-contact-info">
    <span className="shd-eyebrow">{de?'WIR SIND FÜR SIE DA':'RESTONS EN CONTACT'}</span>
    <h2>{de?'Gemeinsam den nächsten Schritt planen.':'Imaginons la suite ensemble.'}</h2>
    <p className="shd-contact-lead">{de?'Schreiben Sie uns Ihr Anliegen. Wir freuen uns auf Ihre Nachricht.':'Écrivez-nous pour nous parler de votre projet. Nous serons ravis de vous lire.'}</p>
    <div className="shd-contact-detail"><span>EMAIL</span><a href="mailto:info@swisshomedesign.ch">info@swisshomedesign.ch</a></div>
    <div className="shd-contact-detail"><span>{de?'ADRESSE':'ADRESSE'}</span><p>Swiss Home Design Sàrl<br/>Rue des Couviers 20<br/>CH-2074 Marin-Epagnier<br/>Suisse</p></div>
   </div>
   <div className="shd-contact-panel shd-form-panel">
    <span className="shd-eyebrow">{de?'IHRE ANFRAGE':'VOTRE DEMANDE'}</span>
    <h2>{de?'Erzählen Sie uns mehr.':'Parlez-nous de votre idée.'}</h2>
    <p>{de?'Füllen Sie die Felder aus. Beim Absenden öffnet sich Ihr E-Mail-Programm mit einer vorbereiteten Nachricht.':'Remplissez les champs. Le bouton ouvre votre messagerie avec un e-mail prérempli.'}</p>
    <form onSubmit={submit}>
     <div className="shd-form-fields">
      <label>{de?'Name *':'Nom *'}<input required maxLength={120} autoComplete="name" value={form.name} onChange={e=>update('name',e.target.value)} placeholder={de?'Ihr Name':'Votre nom'}/></label>
      <label>{de?'E-Mail *':'E-mail *'}<input required type="email" maxLength={200} autoComplete="email" value={form.email} onChange={e=>update('email',e.target.value)} placeholder="name@example.com"/></label>
      <label className="shd-field-wide">{de?'Art des Projekts *':'Type de projet *'}<select required value={form.type} onChange={e=>update('type',e.target.value)}><option value="">{de?'Bitte auswählen':'Choisir une option'}</option>{types.map(t=><option key={t} value={t}>{t}</option>)}</select></label>
      <label className="shd-field-wide">{de?'Ihre Nachricht *':'Votre message *'}<textarea required rows={6} maxLength={3500} value={form.message} onChange={e=>update('message',e.target.value)} placeholder={de?'Beschreiben Sie kurz Ihre Idee oder Ihr Vorhaben.':'Décrivez brièvement votre idée ou votre projet.'}/></label>
     </div>
     <label className="shd-consent"><input type="checkbox" required checked={consent} onChange={e=>setConsent(e.target.checked)}/><span>{de?'Ich bin damit einverstanden, dass meine Angaben zur Bearbeitung der Anfrage per E-Mail übermittelt werden.':'J’accepte que mes informations soient transmises par e-mail pour le traitement de ma demande.'}</span></label>
     <button className="shd-button shd-button-dark" type="submit">{de?'E-Mail vorbereiten':'Préparer l’e-mail'} <span aria-hidden="true">↗</span></button>
     <small className="shd-form-notice">{de?'Die Nachricht wird nicht automatisch gesendet. Bitte bestätigen Sie den Versand in Ihrem E-Mail-Programm.':'Le message n’est pas envoyé automatiquement. Confirmez l’envoi dans votre messagerie.'}</small>
    </form>
   </div>
  </section>
 </div>
}
