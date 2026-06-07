'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const locations = [
  { label: 'Hartford', href: '/locations/hartford' },
  { label: 'East Hartford', href: '/locations/east-hartford' },
  { label: 'Manchester', href: '/locations/manchester' },
  { label: 'West Hartford', href: '/locations/west-hartford' },
  { label: 'New Britain', href: '/locations/new-britain' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [locationOpen, setLocationOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10">
            <Image
              src="/toothlogo_clean.png"
              alt="Tooth Time Dentistry Logo"
              fill
              className="object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
              }}
            />
          </div>
          <span className="font-display text-xl text-primary leading-tight">
            Tooth Time<br />
            <span className="text-text-dark text-base">Dentistry</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="font-body font-semibold text-text-body hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/services" className="font-body font-semibold text-text-body hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/about" className="font-body font-semibold text-text-body hover:text-primary transition-colors">
            About
          </Link>

          {/* Locations Dropdown */}
          <div className="relative" onMouseEnter={() => setLocationOpen(true)} onMouseLeave={() => setLocationOpen(false)}>
            <button className="font-body font-semibold text-text-body hover:text-primary transition-colors flex items-center gap-1">
              Locations
              <svg className={`w-4 h-4 transition-transform ${locationOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {locationOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                >
                  {locations.map((loc) => (
                    <Link
                      key={loc.href}
                      href={loc.href}
                      className="block px-4 py-2.5 font-body text-text-body hover:bg-bg-pearl hover:text-primary transition-colors text-sm"
                    >
                      {loc.label}, CT
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/blog" className="font-body font-semibold text-text-body hover:text-primary transition-colors">
            Blog
          </Link>

          <a
            href="tel:+18602637791"
            className="bg-primary hover:bg-primary-dark text-white font-body font-bold px-5 py-2.5 rounded-full transition-colors label-text"
          >
            📞 (860) 263-7791
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-text-dark"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-text-dark transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-text-dark transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-text-dark transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              <Link href="/" className="font-body font-semibold text-text-body py-2 border-b border-gray-100" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/services" className="font-body font-semibold text-text-body py-2 border-b border-gray-100" onClick={() => setMenuOpen(false)}>Services</Link>
              <Link href="/about" className="font-body font-semibold text-text-body py-2 border-b border-gray-100" onClick={() => setMenuOpen(false)}>About</Link>
              <div>
                <p className="font-body font-bold text-text-dark py-2">Locations</p>
                {locations.map((loc) => (
                  <Link
                    key={loc.href}
                    href={loc.href}
                    className="block pl-4 py-1.5 font-body text-text-body text-sm hover:text-primary"
                    onClick={() => setMenuOpen(false)}
                  >
                    {loc.label}, CT
                  </Link>
                ))}
              </div>
              <Link href="/blog" className="font-body font-semibold text-text-body py-2 border-t border-gray-100" onClick={() => setMenuOpen(false)}>Blog</Link>
              <a
                href="tel:+18602637791"
                className="bg-primary text-white font-body font-bold px-5 py-3 rounded-full text-center mt-2"
              >
                📞 Call (860) 263-7791
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
