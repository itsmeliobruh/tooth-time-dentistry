'use client'

import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl lg:text-5xl text-white mb-4">
            Ready to Book Your Child&apos;s Appointment?
          </h2>
          <p className="font-body text-white/90 text-xl mb-10 max-w-2xl mx-auto">
            Give your child the gift of a healthy, beautiful smile. Our caring team is ready to welcome your family today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="tel:+18602637791"
              className="inline-flex items-center justify-center gap-3 bg-white text-primary hover:bg-bg-pearl font-body font-bold px-10 py-5 rounded-full text-xl transition-colors shadow-xl"
            >
              📞 (860) 263-7791
            </a>
          </div>

          <div className="font-body text-white/80 space-y-1">
            <p>📍 1000 Albany Avenue, STE 1, Hartford, CT 06112</p>
            <p>Mon 8AM–5PM · Tue 8AM–2PM · Wed 8AM–5PM · Fri 8AM–5PM</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
