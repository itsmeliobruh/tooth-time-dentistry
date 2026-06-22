'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const trustBadges = [
  '✓ Husky Accepted',
  '✓ Laughing Gas Available',
  '✓ Special Needs Welcome',
  '✓ 14+ Years Experience',
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20">
      {/* Radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,55,230,0.05)_0%,_transparent_60%)] pointer-events-none" />

      {/* Dot grid top-right */}
      <div
        className="absolute top-0 right-0 w-80 h-80 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #C937E6 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Left accent bar */}
      <div className="absolute left-0 top-20 bottom-0 w-1.5 bg-gradient-to-b from-primary to-secondary" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="pl-4"
          >
            <motion.div variants={fadeInUp}>
              <span className="label-text inline-block bg-primary/10 text-primary font-semibold text-sm px-3 py-1 rounded-full mb-4">
                Hartford&apos;s Pediatric Dental Team
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-text-dark leading-tight mb-5"
            >
              Children&apos;s Dentist in Hartford, CT —{' '}
              <span className="text-primary italic">Big Smiles</span> Start Here
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="font-body text-lg text-text-body leading-relaxed mb-8"
            >
              Tooth Time Dentistry provides gentle, compassionate dental care for kids of all ages and needs — including Husky Health patients and children with special needs. Proudly serving Hartford and surrounding CT communities for 14+ years.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="tel:+18602637791"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-body font-bold px-8 py-4 rounded-full text-lg transition-colors shadow-lg shadow-primary/30"
              >
                📞 Call Us: (860) 263-7791
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-body font-bold px-8 py-4 rounded-full text-lg transition-all"
              >
                See Our Services →
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="label-text text-sm bg-bg-pearl text-text-body font-semibold px-4 py-2 rounded-full border border-primary/20"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/ChildrenHero.jpg"
                alt="Happy children smiling at Tooth Time Dentistry Hartford CT"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
              <div className="bg-primary/10 rounded-xl p-3">
                <span className="text-2xl">⭐</span>
              </div>
              <div>
                <p className="font-display text-text-dark text-lg leading-none">4.6 Stars</p>
                <p className="font-body text-muted text-sm">228+ Google Reviews</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
