import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import LegalPage from './pages/LegalPage'
export default function App() {
  return <div className="min-h-screen bg-gray-50 text-gray-900">
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
