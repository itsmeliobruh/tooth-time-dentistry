'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const areas = [
  {
    city: 'Hartford',
    href: '/locations/hartford',
    description: 'Our home base — conveniently located at 1000 Albany Avenue for Hartford families.',
    icon: '🏛️',
  },
  {
    city: 'East Hartford',
    href: '/locations/east-hartford',
    description: 'Just minutes across the river, East Hartford families love our gentle pediatric care.',
    icon: '🌉',
  },
  {
    city: 'Manchester',
    href: '/locations/manchester',
    description: 'Manchester families make the short drive for our exceptional children\'s dental services.',
    icon: '🌳',
  },
  {
    city: 'West Hartford',
    href: '/locations/west-hartford',
    description: 'West Hartford parents choose Tooth Time for our specialized pediatric expertise.',
    icon: '🏡',
  },
  {
    city: 'New Britain',
    href: '/locations/new-britain',
    description: 'New Britain families trust us for comprehensive, compassionate pediatric dental care.',
    icon: '⭐',
  },
  {
    city: 'Bloomfield',
    href: '/locations/bloomfield',
    description: 'Bloomfield families are just minutes away from our Hartford office on Albany Avenue.',
    icon: '🌿',
  },
]

export default function ServiceAreas() {
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
            We Come to You... Almost!
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-text-dark mb-4">
            Serving Hartford, CT and Surrounding Communities
          </h2>
          <p className="font-body text-text-body text-lg max-w-2xl mx-auto">
            Families across the greater Hartford area trust Tooth Time Dentistry for exceptional pediatric dental care. Find your area below.
          </p>
        </motion.div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl overflow-hidden shadow-xl border border-primary/10 h-80 mb-12"
        >
          <iframe
            title="Tooth Time Dentistry Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d-72.6974!3d41.7887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e65365b8e0a1b5%3A0x5e24d9c7e0c55f9e!2s1000%20Albany%20Ave%2C%20Hartford%2C%20CT%2006112!5e0!3m2!1sen!2sus!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {areas.map((area) => (
            <motion.div
              key={area.city}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href={area.href}
                className="block bg-bg-pearl rounded-2xl p-6 border border-primary/10 hover:border-primary/40 hover:shadow-lg transition-all group h-full"
              >
                <span className="text-3xl mb-3 block">{area.icon}</span>
                <h3 className="font-display text-2xl text-text-dark mb-2 group-hover:text-primary transition-colors">
                  {area.city}, CT
                </h3>
                <p className="font-body text-text-body text-sm leading-relaxed mb-3">
                  {area.description}
                </p>
                <span className="label-text text-primary text-sm font-semibold">
                  Learn More →
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
