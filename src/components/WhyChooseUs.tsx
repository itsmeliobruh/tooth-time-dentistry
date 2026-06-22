'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const reasons = [
  {
    title: 'Husky Health & Insurance Accepted',
    body: 'We proudly accept HUSKY Health (Connecticut Medicaid), making quality pediatric dental care accessible to all Hartford families regardless of financial situation. We also work with Aetna, Cigna, Delta Dental, MetLife, and most major dental insurance plans. Our friendly front office team will help you understand your benefits and maximize your coverage. No family should go without dental care due to cost — call us today to verify your insurance.',
    image: '/office-2.jpeg',
    imageAlt: 'Welcoming dental office front desk at Tooth Time Dentistry Hartford',
    direction: 'left' as const,
  },
  {
    title: 'Anxiety-Free Visits with Nitrous Oxide',
    body: "Dental anxiety is real, and we take it seriously. Tooth Time Dentistry offers nitrous oxide (laughing gas) sedation to help nervous children relax during procedures. Nitrous oxide is completely safe, fast-acting, and wears off within minutes after the mask is removed. Combined with our gentle, patient chairside manner, we transform what could be a scary experience into a calm, even pleasant one. Your child's comfort is our priority from the moment they walk through our doors.",
    image: '/childrens-dentistry-hartford-ct.jpeg',
    imageAlt: 'Child comfortable in dental chair at Tooth Time Dentistry',
    direction: 'right' as const,
  },
  {
    title: 'Special Needs Dental Expertise',
    body: "Dr. Lim and her team have dedicated years to developing specialized skills in treating children with physical, developmental, cognitive, and behavioral special needs. We understand that every child is different, and we take the time to develop individualized care plans that accommodate each patient's unique needs. Our office is equipped and our team is trained to provide a calm, supportive environment that helps special needs children receive the dental care they deserve — with dignity and compassion.",
    image: '/office-3.jpeg',
    imageAlt: 'Compassionate dentist with child patient at Tooth Time Dentistry Hartford',
    direction: 'left' as const,
  },
  {
    title: 'Multilingual Team: English, Spanish & Korean',
    body: 'Hartford is a beautifully diverse city, and we believe language should never be a barrier to great dental care. Our team communicates fluently in English, Spanish, and Korean, so you can discuss your child\'s dental health in the language you\'re most comfortable with. This multilingual capability helps us better explain treatment plans, answer questions, and build the trust that is essential in a healthcare relationship. We serve Hartford\'s entire community — everyone is welcome at Tooth Time Dentistry.',
    image: '/ChildrenHero.jpg',
    imageAlt: 'Diverse children and families served by Tooth Time Dentistry in Hartford CT',
    direction: 'right' as const,
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="label-text inline-block bg-primary/10 text-primary font-semibold text-sm px-3 py-1 rounded-full mb-3">
            Why Families Trust Us
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-text-dark">
            Why Hartford Families Choose Tooth Time Dentistry
          </h2>
        </motion.div>

        <div className="space-y-20">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                reason.direction === 'right' ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <motion.div
                initial={{ opacity: 0, x: reason.direction === 'left' ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={reason.direction === 'right' ? 'lg:order-2' : ''}
              >
                <span className="label-text text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  0{i + 1}
                </span>
                <h3 className="font-display text-3xl text-text-dark mt-4 mb-4">{reason.title}</h3>
                <p className="font-body text-text-body leading-relaxed text-lg">{reason.body}</p>
                <a
                  href="tel:+18602637791"
                  className="inline-flex items-center gap-2 mt-6 bg-primary hover:bg-primary-dark text-white font-body font-bold px-6 py-3 rounded-full transition-colors"
                >
                  📞 Call (860) 263-7791
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: reason.direction === 'left' ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl ${
                  reason.direction === 'right' ? 'lg:order-1' : ''
                }`}
              >
                <Image
                  src={reason.image}
                  alt={reason.imageAlt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
