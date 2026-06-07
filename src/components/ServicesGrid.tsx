'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
  {
    icon: '🦷',
    title: 'Preventive Cleanings',
    description:
      'Regular professional cleanings are the foundation of great oral health. Our gentle hygienists make every visit comfortable for your child, removing plaque and tartar while teaching proper brushing habits.',
  },
  {
    icon: '🔬',
    title: 'Dental X-Rays',
    description:
      'Safe, low-radiation digital X-rays help us detect cavities, monitor jaw development, and ensure teeth are erupting properly — all while minimizing exposure with modern technology.',
  },
  {
    icon: '✨',
    title: 'Tooth Fillings',
    description:
      'When cavities occur, our tooth-colored composite fillings restore teeth naturally and comfortably. We use gentle techniques and can offer nitrous oxide to keep anxious children at ease.',
  },
  {
    icon: '🔧',
    title: 'Tooth Extractions',
    description:
      'When a tooth needs to be removed — whether a stubborn baby tooth or a damaged permanent tooth — our team performs extractions with compassion and care to minimize discomfort.',
  },
  {
    icon: '😊',
    title: 'Nitrous Oxide',
    description:
      'Laughing gas is a safe, effective way to help anxious children relax during dental procedures. It wears off quickly, and your child will be back to their normal self within minutes.',
  },
  {
    icon: '💜',
    title: 'Special Needs Dentistry',
    description:
      'Dr. Lim has extensive experience caring for children with physical, developmental, and cognitive special needs. We create personalized care plans to ensure every child receives the dental care they deserve.',
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="label-text inline-block bg-secondary/10 text-secondary-dark font-semibold text-sm px-3 py-1 rounded-full mb-3">
            What We Offer
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-text-dark mb-4">
            Pediatric Dental Services in Hartford, CT
          </h2>
          <p className="font-body text-text-body text-lg max-w-2xl mx-auto">
            From routine cleanings to specialized care, we offer a full range of dental services designed with children&apos;s comfort and health in mind.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="bg-bg-pearl rounded-2xl p-8 border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                {service.icon}
              </div>
              <h3 className="font-display text-2xl text-text-dark mb-3">{service.title}</h3>
              <p className="font-body text-text-body leading-relaxed mb-5">{service.description}</p>
              <Link
                href="/services"
                className="label-text text-primary font-semibold text-sm hover:text-primary-dark transition-colors inline-flex items-center gap-1"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
