'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'At what age should my child first visit the dentist?',
    a: "The American Academy of Pediatric Dentistry recommends that children visit the dentist by their first birthday or within six months of their first tooth erupting — whichever comes first. Early visits allow Dr. Lim to monitor dental development, catch problems early, and help parents learn proper oral hygiene techniques for their little one. Starting early also helps children become comfortable with dental visits, reducing anxiety as they grow.",
  },
  {
    q: 'Does Tooth Time Dentistry accept HUSKY Health insurance?',
    a: "Yes! We proudly accept HUSKY Health, Connecticut's Medicaid program, for children's dental care. We believe every child in Hartford deserves excellent dental care regardless of financial circumstance. Please call us at (860) 263-7791 to verify your specific HUSKY plan and schedule your child's appointment.",
  },
  {
    q: 'What should I do if my child is afraid of the dentist?',
    a: "Dental anxiety in children is very common and completely normal. Our entire team is trained to create a calm, welcoming environment that puts nervous kids at ease. We explain everything in child-friendly language, go at your child's pace, and offer nitrous oxide (laughing gas) for children who need a little extra help relaxing. We also encourage parents to stay with their child during the exam. Please let us know about any anxiety beforehand so we can prepare appropriately.",
  },
  {
    q: 'Do you offer nitrous oxide (laughing gas) for children?',
    a: "Yes, we offer nitrous oxide sedation for children who experience dental anxiety or require more involved procedures. Nitrous oxide is extremely safe, has been used in dentistry for over 150 years, and is specifically approved for pediatric use. It helps children relax without putting them to sleep, and the effects wear off within minutes of removing the mask. Your child will be able to leave our office and resume normal activities immediately.",
  },
  {
    q: 'Can you treat children with special needs?',
    a: "Absolutely. Dr. Lim has extensive experience and specialized training in providing dental care to children with a wide range of physical, developmental, cognitive, and behavioral special needs, including autism spectrum disorder, Down syndrome, cerebral palsy, and sensory processing disorders. We develop individualized treatment plans and take all the time needed to make each visit as comfortable and successful as possible.",
  },
  {
    q: 'What languages does your office speak?',
    a: "Our team is fluent in English, Spanish, and Korean. We understand that Hartford is a wonderfully diverse city, and we want every family to feel comfortable communicating in their preferred language. We can discuss diagnoses, treatment plans, home care instructions, and insurance questions in whichever language works best for you.",
  },
  {
    q: 'How often should my child visit the dentist?',
    a: "We recommend most children visit the dentist every six months for a routine cleaning and examination. However, some children with higher cavity risk, orthodontic concerns, or other dental health issues may benefit from more frequent visits. Dr. Lim will recommend a personalized schedule based on your child's specific oral health needs.",
  },
  {
    q: 'What insurance plans does Tooth Time Dentistry accept?',
    a: "In addition to HUSKY Health, we accept most major dental insurance plans including Aetna, Cigna, Delta Dental, MetLife, and United Healthcare, among others. Our office team is experienced at verifying benefits and submitting claims to make the process as smooth as possible for your family. Call us to verify your specific plan.",
  },
  {
    q: 'Where is Tooth Time Dentistry located?',
    a: "We are conveniently located at 1000 Albany Avenue, Suite 1, Hartford, CT 06112. We serve families from Hartford, East Hartford, Manchester, West Hartford, New Britain, and surrounding communities. Our office is accessible by public transit and has ample free parking.",
  },
  {
    q: 'What are your office hours?',
    a: "Our office hours are: Monday 8AM–5PM, Tuesday 8AM–2PM, Wednesday 8AM–5PM, Thursday Closed, Friday 8AM–5PM, Saturday and Sunday Closed. We encourage you to call (860) 263-7791 to schedule your appointment and confirm current availability.",
  },
]

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="label-text inline-block bg-primary/10 text-primary font-semibold text-sm px-3 py-1 rounded-full mb-3">
            Got Questions?
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-text-dark">
            Frequently Asked Questions About Children&apos;s Dental Care
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="border border-primary/20 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-bg-pearl hover:bg-primary/5 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="font-display text-lg text-text-dark pr-4">{faq.q}</span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 text-primary"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-2">
                      <p className="font-body text-text-body leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
