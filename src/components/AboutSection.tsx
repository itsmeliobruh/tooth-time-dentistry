'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

const items = [
  {
    icon: '🦷',
    title: 'Led by Dr. Lim',
    body: "Known for her extraordinary gentleness and genuine care for each patient, Dr. Lim brings warmth, patience, and expertise to every appointment. Whether your child is coming in for their very first cleaning or needs more involved treatment, we take the time to explain everything clearly and ensure maximum comfort throughout.",
  },
  {
    icon: '🌟',
    title: 'Special Needs Care',
    body: "We specialize in caring for children with special needs, including physical, developmental, cognitive, and behavioral conditions. We believe these children deserve excellent dental care just as much as any other patient, and we have the training and experience to deliver it.",
  },
  {
    icon: '🌍',
    title: 'Multilingual Team',
    body: "Our team speaks English, Spanish, and Korean, reflecting our commitment to serving Hartford's wonderfully diverse community. We also proudly accept HUSKY Health (Connecticut Medicaid) and most major dental plans, because financial barriers should never prevent a child from getting the care they need.",
  },
  {
    icon: '😮‍💨',
    title: 'Nitrous Oxide & Comfort',
    body: "We offer nitrous oxide sedation for anxious children, making dental visits comfortable and even enjoyable. With 274+ five-star reviews and counting, Hartford families know they can trust Tooth Time Dentistry with their most precious smiles.",
  },
]

export default function AboutSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="label-text inline-block bg-secondary/10 text-secondary-dark font-semibold text-sm px-3 py-1 rounded-full mb-4">
              About Tooth Time Dentistry
            </span>
            <h2 className="font-display text-4xl lg:text-5xl text-text-dark mb-4">
              Gentle, Dedicated Dental Care for Hartford Families
            </h2>
            <p className="font-body text-text-body text-lg leading-relaxed mb-8">
              For over 14 years, Tooth Time Dentistry has been a trusted partner in children&apos;s oral health throughout Hartford — founded on the belief that every child deserves compassionate, fear-free dental care.
            </p>

            <div className="flex flex-col gap-2 mb-8">
              {items.map((item, i) => (
                <div
                  key={item.title}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    open === i
                      ? 'border-primary/30 shadow-md'
                      : 'border-primary/10'
                  }`}
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-xl">{item.icon}</span>
                      <span className="font-body font-semibold text-text-dark text-base">{item.title}</span>
                    </span>
                    <svg
                      className={`w-5 h-5 text-muted flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                      viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"
                    >
                      <polyline points="5 8 10 13 15 8" />
                    </svg>
                  </button>
                  {open === i && (
                    <div className="px-5 pb-5 pl-14 font-body text-text-body text-base leading-relaxed">
                      {item.body}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <a
              href="tel:+18602637791"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-body font-bold px-8 py-4 rounded-full text-lg transition-colors"
            >
              📞 Call (860) 263-7791
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/office-1.jpeg"
              alt="Parent and child at Tooth Time Dentistry in Hartford CT"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
