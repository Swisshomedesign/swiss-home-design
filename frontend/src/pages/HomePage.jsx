import React from 'react'
export default function HomePage({lang='fr'}){
 const title=lang==='fr'?'Construisons ensemble votre maison design en Suisse':'Bauen wir gemeinsam Ihr Designhaus in der Schweiz'
 return <section className="relative min-h-[70vh] bg-slate-800 text-white flex items-center"><div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-950"/><div className="relative max-w-6xl mx-auto px-6 py-24 w-full"><h1 className="text-4xl md:text-6xl font-bold max-w-3xl">{title}</h1><p className="mt-6 text-white/90 max-w-2xl">{lang==='fr'?'Swiss Home Design Sàrl — Construction de maisons design à Neuchâtel.':'Swiss Home Design Sàrl — Designhäuser in Neuenburg.'}</p></div></section>
}
