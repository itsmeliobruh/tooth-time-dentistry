import type { Metadata } from 'next'
import Image from 'next/image'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: "Children's Dentist Near Bloomfield, CT | Tooth Time Dentistry",
  description:
    'Tooth Time Dentistry serves Bloomfield, CT families from our Hartford office — just minutes away. HUSKY Health accepted, special needs care. Call (860) 263-7791.',
  alternates: {
    canonical: 'https://toothtimect.com/locations/bloomfield',
  },
  openGraph: {
    title: "Children's Dentist Near Bloomfield, CT | Tooth Time Dentistry",
    description:
      'Bloomfield families choose Tooth Time Dentistry for gentle, compassionate pediatric dental care. Conveniently located minutes from Bloomfield in Hartford, CT.',
    url: 'https://toothtimect.com/locations/bloomfield',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://toothtimect.com' },
    { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://toothtimect.com/locations/bloomfield' },
    { '@type': 'ListItem', position: 3, name: 'Bloomfield', item: 'https://toothtimect.com/locations/bloomfield' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How far is Tooth Time Dentistry from Bloomfield, CT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our office at 1000 Albany Avenue, Hartford, CT is approximately 5–10 minutes from most parts of Bloomfield, making it one of the most convenient pediatric dental offices for Bloomfield families.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Tooth Time Dentistry accept HUSKY Health for Bloomfield patients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We proudly accept HUSKY Health (Connecticut Medicaid) for children from Bloomfield and all surrounding communities.',
      },
    },
    {
      '@type': 'Question',
      name: 'What pediatric dental services are available for Bloomfield children?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer preventive cleanings, dental X-rays, tooth fillings, extractions, nitrous oxide sedation, and specialized care for children with special needs — all available to Bloomfield families.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you treat children with special needs from Bloomfield?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dr. Lim has extensive experience caring for children with autism, Down syndrome, cerebral palsy, sensory processing disorders, and other special needs. Bloomfield families are always welcome.',
      },
    },
  ],
}

export default function BloomfieldPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-bg-pearl pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="label-text inline-block bg-primary/10 text-primary font-semibold text-sm px-3 py-1 rounded-full mb-4">
            Serving Bloomfield, Connecticut
          </span>
          <h1 className="font-display font-bold text-5xl lg:text-6xl text-text-dark mb-6">
            Children&apos;s Dentist Near Bloomfield, CT
          </h1>
          <p className="font-body text-text-body text-xl leading-relaxed mb-8">
            Bloomfield families are just minutes from Tooth Time Dentistry — Hartford&apos;s trusted pediatric dental office on Albany Avenue. Gentle, comprehensive care for kids of all ages and needs.
          </p>
          <a href="tel:+18602637791" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-body font-bold px-8 py-4 rounded-full text-lg transition-colors">
            📞 Call (860) 263-7791
          </a>
        </div>
      </section>

      {/* About + Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl text-text-dark mb-5">Proudly Serving Bloomfield Families</h2>
            <div className="font-body text-text-body leading-relaxed space-y-4 text-lg">
              <p>
                Bloomfield is one of Hartford&apos;s closest neighbors, and Tooth Time Dentistry has been a trusted resource for Bloomfield families seeking exceptional pediatric dental care. Our office at 1000 Albany Avenue, Suite 1 in Hartford is just a short drive from Bloomfield — making it one of the most convenient options for quality children&apos;s dentistry in the area.
              </p>
              <p>
                Bloomfield children receive the same compassionate, thorough care as all of our patients. From a child&apos;s very first dental visit to their teenage years, we provide preventive cleanings, digital X-rays, tooth-colored fillings, gentle extractions, and nitrous oxide sedation for anxious patients.
              </p>
              <p>
                We are proud to accept HUSKY Health for Bloomfield children, ensuring that cost is never a barrier to receiving high-quality dental care. We also work with most major private insurance plans and welcome self-pay families.
              </p>
              <p>
                If your Bloomfield child has special needs, you&apos;ve found the right practice. Dr. Lim and her team have years of specialized experience caring for children with autism spectrum disorder, Down syndrome, cerebral palsy, sensory processing disorders, and more — with the patience and compassion every child deserves.
              </p>
            </div>
            <a href="tel:+18602637791" className="inline-flex items-center gap-2 mt-6 bg-primary hover:bg-primary-dark text-white font-body font-bold px-6 py-3 rounded-full transition-colors">
              📞 Book a Bloomfield Appointment
            </a>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/office-4.jpeg"
              alt="Pediatric dentist serving Bloomfield CT children at Tooth Time Dentistry Hartford"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-20 bg-bg-pearl">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-4xl text-text-dark mb-6 text-center">
            Getting to Us from Bloomfield, CT
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <div>
              <p className="font-body text-text-body text-lg leading-relaxed mb-6">
                From Bloomfield, our office at <strong>1000 Albany Avenue, Suite 1, Hartford, CT 06112</strong> is easily accessible in under 10 minutes via Albany Avenue or Bloomfield Avenue — no highway required.
              </p>
              <div className="bg-white rounded-2xl p-6 border border-primary/10 mb-6">
                <h3 className="font-display text-2xl text-text-dark mb-4">Directions from Bloomfield</h3>
                <div className="font-body text-text-body space-y-2 text-sm">
                  <p><strong>Via Albany Avenue:</strong> Head south on Albany Avenue from Bloomfield into Hartford. Continue past the Bloomfield/Hartford town line — our office is on the right at 1000 Albany Ave.</p>
                  <p><strong>Via Bloomfield Avenue:</strong> Take Bloomfield Avenue south into Hartford, then connect to Albany Avenue heading east. We are approximately 0.5 miles on the right.</p>
                  <p><strong>Parking:</strong> Free parking is available directly at our office.</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-primary/10">
                <h3 className="font-display text-xl text-text-dark mb-3">Office Hours</h3>
                <div className="font-body text-text-body space-y-1 text-sm">
                  <p>Monday: 8AM – 5PM</p>
                  <p>Tuesday: 8AM – 2PM</p>
                  <p>Wednesday: 8AM – 5PM</p>
                  <p>Thursday: Closed</p>
                  <p>Friday: 8AM – 5PM</p>
                  <p>Saturday – Sunday: Closed</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-full">
            <div className="rounded-2xl overflow-hidden shadow-xl flex-1 min-h-[300px]">
              <iframe
                title="Tooth Time Dentistry - Serving Bloomfield CT"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d-72.6974!3d41.7887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e65365b8e0a1b5%3A0x5e24d9c7e0c55f9e!2s1000%20Albany%20Ave%2C%20Hartford%2C%20CT%2006112!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          <a
            href="https://maps.google.com/?q=1000+Albany+Avenue+STE+1+Hartford+CT+06112"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-body font-bold px-6 py-4 rounded-2xl transition-colors text-base"
          >
            📍 Get Directions
          </a>
          <div className="mt-3 flex items-center justify-center gap-3 bg-secondary/10 border border-secondary/20 rounded-2xl px-6 py-4">
              <span className="text-2xl">🅿️</span>
              <p className="font-body font-semibold text-secondary-dark text-base">
                Free private parking available on site
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-4xl text-text-dark mb-8 text-center">
            FAQs — Bloomfield Pediatric Dentist
          </h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="bg-bg-pearl rounded-2xl p-6 border border-primary/10">
                <h3 className="font-display text-xl text-text-dark mb-2">{faq.name}</h3>
                <p className="font-body text-text-body">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
