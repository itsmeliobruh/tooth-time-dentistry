'use client'

import { motion } from 'framer-motion'

const insurers = [
  { name: 'HUSKY Health', note: 'CT Medicaid', icon: '💙' },
  { name: 'Aetna', note: 'Major Plans', icon: '🟡' },
  { name: 'Cigna', note: 'Dental Plans', icon: '🔵' },
  { name: 'Delta Dental', note: 'All Plans', icon: '🟢' },
  { name: 'MetLife', note: 'Dental Benefits', icon: '🔷' },
  { name: 'United Healthcare', note: 'Dental Coverage', icon: '🟠' },
]

export default function InsuranceSection() {
  return (
    <section className="py-20 bg-bg-pearl">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="label-text inline-block bg-secondary/10 text-secondary-dark font-semibold text-sm px-3 py-1 rounded-full mb-3">
            No Financial Barriers
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-text-dark mb-4">
            We Accept Your Insurance
          </h2>
          <p className="font-body text-text-body text-lg max-w-3xl mx-auto">
            We believe every child in Hartford deserves exceptional dental care. That&apos;s why we accept HUSKY Health (Connecticut Medicaid) along with most major dental insurance plans. Our office team works hard to maximize your benefits so you can focus on what matters — your child&apos;s health.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10"
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {insurers.map((ins) => (
            <motion.div
              key={ins.name}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-5 text-center border border-primary/10 hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-2">{ins.icon}</div>
              <p className="font-display text-text-dark text-lg leading-tight">{ins.name}</p>
              <p className="label-text text-muted text-xs mt-1">{ins.note}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 border border-primary/10 text-center max-w-2xl mx-auto"
        >
          <h3 className="font-display text-2xl text-text-dark mb-3">Not Sure If We Accept Your Plan?</h3>
          <p className="font-body text-text-body mb-6">
            Give us a call and our friendly front office team will verify your coverage before your appointment. We accept most major dental insurance and are committed to making care affordable for every Hartford family.
          </p>
          <a
            href="tel:+18602637791"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-body font-bold px-8 py-4 rounded-full text-lg transition-colors"
          >
            📞 Verify Your Coverage — (860) 263-7791
          </a>
        </motion.div>
      </div>
    </section>
  )
}
