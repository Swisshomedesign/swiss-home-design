import React, { useState } from 'react'
export default function ContactPage({lang='fr'}) {
 const de=lang==='de'
 const [form,setForm]=useState({name:'',email:'',type:'',message:''})
 const [consent,setConsent]=useState(false)
 const [sending,setSending]=useState(false)
 const [feedback,setFeedback]=useState('')
 const update=(key,value)=>setForm(prev=>({...prev,[key]:value}))
 const types=de?['Neubau','Renovation / Umbau','Planung / Beratung','Andere Anfrage']:['Nouvelle construction','Rénovation / transformation','Conception / conseil','Autre demande']
 async function submit(e){
  e.preventDefault()
  if(!consent || sending)return
  setSending(true);setFeedback('')
  try{
   const response=await fetch('https://formspree.io/f/mpppaolk',{
    method:'POST',
    headers:{'Content-Type':'application/json',Accept:'application/json'},
    body:JSON.stringify({name:form.name,email:form.email,project_type:form.type,message:form.message,_subject:'Swiss Home Design – '+form.type})
   })
   if(!response.ok)throw new Error('form submission failed')
   setFeedback('success');setForm({name:'',email:'',type:'',message:''});setConsent(false)
  }catch(err){setFeedback('error')}
  finally{setSending(false)}
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
    <p>{de?'Füllen Sie die Felder aus und senden Sie uns Ihre Anfrage direkt zu.':'Remplissez les champs et transmettez-nous directement votre demande.'}</p>
    {feedback==='success' && <p role="status" style={{color:'#285b36',fontWeight:600,marginBottom:18}}>{de?'Vielen Dank! Deine Anfrage wurde erfolgreich übermittelt.':'Merci ! Votre demande a bien été envoyée.'}</p>}
    {feedback==='error' && <p role="alert" style={{color:'#ab2424',marginBottom:18}}>{de?'Die Anfrage konnte nicht gesendet werden. Bitte erneut versuchen oder per E-Mail Kontakt aufnehmen.':'Impossible d’envoyer la demande. Veuillez réessayer ou nous écrire par e-mail.'}</p>}
    <form onSubmit={submit}>
     <div className="shd-form-fields">
      <label>{de?'Name *':'Nom *'}<input required maxLength={120} autoComplete="name" value={form.name} onChange={e=>update('name',e.target.value)} placeholder={de?'Ihr Name':'Votre nom'}/></label>
      <label>{de?'E-Mail *':'E-mail *'}<input required type="email" maxLength={200} autoComplete="email" value={form.email} onChange={e=>update('email',e.target.value)} placeholder="name@example.com"/></label>
      <label className="shd-field-wide">{de?'Art des Projekts *':'Type de projet *'}<select required value={form.type} onChange={e=>update('type',e.target.value)}><option value="">{de?'Bitte auswählen':'Choisir une option'}</option>{types.map(t=><option key={t} value={t}>{t}</option>)}</select></label>
      <label className="shd-field-wide">{de?'Ihre Nachricht *':'Votre message *'}<textarea required rows={6} maxLength={3500} value={form.message} onChange={e=>update('message',e.target.value)} placeholder={de?'Beschreiben Sie kurz Ihre Idee oder Ihr Vorhaben.':'Décrivez brièvement votre idée ou votre projet.'}/></label>
     </div>
     <label className="shd-consent"><input type="checkbox" required checked={consent} onChange={e=>setConsent(e.target.checked)}/><span>{de?'Ich bin damit einverstanden, dass meine Angaben zur Bearbeitung der Anfrage per E-Mail übermittelt werden.':'J’accepte que mes informations soient transmises par e-mail pour le traitement de ma demande.'}</span></label>
     <button className="shd-button shd-button-dark" type="submit" disabled={sending}>{sending?(de?'Wird gesendet…':'Envoi en cours…'):(de?'Anfrage senden':'Envoyer la demande')} <span aria-hidden="true">↗</span></button>
     <small className="shd-form-notice">{de?'Deine Angaben werden zur Bearbeitung der Anfrage an Formspree übermittelt.':'Vos données sont transmises à Formspree pour le traitement de votre demande.'}</small>
    </form>
   </div>
  </section>
 </div>
}
