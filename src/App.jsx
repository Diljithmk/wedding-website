import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Approach from './components/Approach'
import FeaturedFilm from './components/FeaturedFilm'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { WhatsApp } from './components/Icons'
import { BRAND } from './data/content'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [showFloatingButton, setShowFloatingButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingButton(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white text-charcoal font-sans antialiased selection:bg-champagne selection:text-charcoal relative">
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Approach />
        <FeaturedFilm />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      {/* Subtle Floating WhatsApp Concierge Button */}
      <AnimatePresence>
        {showFloatingButton && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-30"
          >
            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-4 py-2.5 bg-white/95 hover:bg-white text-charcoal border border-charcoal/15 hover:border-emerald-600/50 shadow-xl shadow-black/10 backdrop-blur-md transition-all duration-300"
              aria-label="Direct WhatsApp Concierge"
            >
              <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                <WhatsApp className="w-3.5 h-3.5" />
              </div>
              <span className="text-[11px] font-medium tracking-luxury uppercase text-charcoal group-hover:text-emerald-700 transition-colors">
                Inquire on WhatsApp
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
