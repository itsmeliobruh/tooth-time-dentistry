'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'

const reviews = [
  {
    name: 'Karen Lupoli Eisenman',
    text: 'I am thrilled to have found Tooth Time Dentistry. Dr. Lim is one of the most competent dentists I have ever gone to. She is kind and caring. Once you meet her you can put aside any fears you may have had going to the dentist. She is the best of the best! The office is clean and nicely appointed. I recommend Dr. Lim without reservation.',
    stars: 5,
  },
  {
    name: 'Jacqueline Degray',
    text: 'Five Star excellence. I would definitely recommend Tooth Time Dentistry. Dr. Lim is very personable, kind, and gentle with children. The office is pleasant and also accepts our insurance.',
    stars: 5,
  },
  {
    name: 'Leandra Arcanjo Costa Gontijo',
    text: 'The office is very clean and organized. The professionals are very competent and kind. My kids are excited every time they have an appointment.',
    stars: 5,
  },
  {
    name: 'Pat Grabbe',
    text: 'They are kind and very friendly. Also professional and accommodating. I appreciated the way they spoke to my teenage granddaughter — she left the office saying she liked the dentist very much. That is worth a lot.',
    stars: 5,
  },
  {
    name: 'Melissa Lynn',
    text: 'The office is beautiful and inviting! Happy to find out that they accept all ages. Dr. Lim is caring and kind. I would recommend anyone to go and see her!',
    stars: 5,
  },
  {
    name: 'Roberto Vergara',
    text: 'The best dentist I have visited in my 45 years of life. She takes her time to get the job done right.',
    stars: 5,
  },
  {
    name: 'Theresa P Cannavo',
    text: 'Dr. Kim is fantastic — very considerate and has a great bedside manner!',
    stars: 5,
  },
]

// Duplicate for infinite loop
const allReviews = [...reviews, ...reviews]

export default function ReviewsCarousel() {
  const isHovered = useRef(false)

  return (
    <section className="py-20 bg-bg-pearl overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="label-text inline-block bg-primary/10 text-primary font-semibold text-sm px-3 py-1 rounded-full mb-3">
            Real Patient Reviews
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-text-dark mb-3">
            What Hartford Parents Are Saying
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</span>
            <span className="label-text font-semibold text-text-body">4.6 Stars · 228 Reviews</span>
          </div>
        </motion.div>
      </div>

      {/* Scrolling carousel */}
      <div
        className="relative"
        onMouseEnter={() => { isHovered.current = true }}
        onMouseLeave={() => { isHovered.current = false }}
      >
        <motion.div
          className="flex gap-6"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 40,
            ease: 'linear',
            repeat: Infinity,
          }}
          style={{ width: 'max-content' }}
        >
          {allReviews.map((review, i) => (
            <div
              key={`${review.name}-${i}`}
              className="w-80 flex-shrink-0 bg-white rounded-2xl p-6 shadow-md border border-primary/10"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: review.stars }).map((_, si) => (
                  <span key={si} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>
              <p className="font-body text-text-body leading-relaxed text-sm mb-4 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="label-text font-bold text-primary text-sm">{review.name}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-10 text-center">
        <a
          href="tel:+18602637791"
          className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-body font-bold px-6 py-4 rounded-full text-base sm:text-lg transition-colors w-full sm:w-auto max-w-xs sm:max-w-none mx-auto"
        >
          📞 Call (860) 263-7791
        </a>
      </div>
    </section>
  )
}
