'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutSection() {
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
            <h2 className="font-display text-4xl lg:text-5xl text-text-dark mb-6">
              Gentle, Dedicated Dental Care for Hartford Families
            </h2>
            <div className="font-body text-text-body leading-relaxed space-y-4 text-lg">
              <p>
                For over 14 years, Tooth Time Dentistry has been a trusted partner in children&apos;s oral health throughout Hartford and the greater Connecticut area. Founded on the belief that every child deserves compassionate, fear-free dental care, our practice has grown into one of Hartford&apos;s most loved children's dental offices.
              </p>
              <p>
                Led by Dr. Lim — a specialist known for her extraordinary gentleness and genuine care for each patient — our team brings warmth, patience, and expertise to every appointment. Whether your child is coming in for their very first cleaning or needs more involved treatment, we take the time to explain everything clearly and ensure maximum comfort throughout.
              </p>
              <p>
                We specialize in caring for children with special needs, including physical, developmental, cognitive, and behavioral conditions. We believe these children deserve excellent dental care just as much as any other patient, and we have the training and experience to deliver it.
              </p>
              <p>
                Our multilingual team speaks English, Spanish, and Korean, reflecting our commitment to serving Hartford&apos;s wonderfully diverse community. We also proudly accept HUSKY Health (Connecticut Medicaid) and most major dental insurance plans, because financial barriers should never prevent a child from getting the care they need.
              </p>
              <p>
                We offer nitrous oxide sedation for anxious children, making dental visits comfortable and even enjoyable. With 228+ five-star reviews and counting, Hartford families know they can trust Tooth Time Dentistry with their most precious smiles.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-6 mb-8">
              {['🇺🇸 English', '🇪🇸 Spanish', '🇰🇷 Korean'].map((lang) => (
                <span
                  key={lang}
                  className="label-text text-sm bg-bg-pearl text-text-body font-semibold px-4 py-2 rounded-full border border-primary/20"
                >
                  {lang}
                </span>
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
