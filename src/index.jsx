import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import Home from './pages/Home'
import About from './pages/About'
import HousingRecord from './pages/HousingRecord'
import logementsData from './data/logements.json' // Supposé url pour la future base de données (pour l'instant l'url est uniquement un fichier JSON)

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing-record/:id" element={<HousingRecord />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
