import React from 'react'
export default function LegalPage({lang='fr'}) {
 const fr={title:'Mentions légales & Protection des données',content:"Raison sociale : Swiss Home Design Sàrl\nSiège : Marin-Epagnier, Neuchâtel, Suisse\nEmail : info@swisshomedesign.ch\n\nProtection des données : Aucune donnée personnelle n'est vendue. Pour supprimer vos données : info@swisshomedesign.ch."}
 const de={title:'Impressum & Datenschutz',content:'Firma: Swiss Home Design Sàrl\nSitz: Marin-Epagnier, Neuenburg, Schweiz\nEmail: info@swisshomedesign.ch\n\nDatenschutz: Es werden keine personenbezogenen Daten verkauft. Zur Löschung: info@swisshomedesign.ch.'}
 const item=lang==='fr'?fr:de
 return <section className="max-w-6xl mx-auto px-6 py-16"><h1 className="text-2xl font-semibold mb-4">{item.title}</h1><pre className="whitespace-pre-wrap font-sans text-gray-700">{item.content}</pre></section>
}
