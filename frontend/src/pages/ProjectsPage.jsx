import React from 'react'
export default function ProjectsPage({lang='fr'}){return <section className="max-w-6xl mx-auto px-6 py-16"><h2 className="text-3xl font-semibold">{lang==='fr'?'Galerie / Réalisations':'Galerie / Referenzen'}</h2><div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">{[1,2,3].map(i=><div key={i} className="h-48 bg-gray-200 rounded-lg"/>)}</div></section>}
