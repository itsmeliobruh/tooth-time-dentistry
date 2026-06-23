import type { Metadata } from 'next'
import Image from 'next/image'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: "Children's Dentist Near East Hartford, CT | Tooth Time Dentistry",
  description:
    "Tooth Time Dentistry serves East Hartford, CT families with gentle pediatric dental care. HUSKY accepted, special needs welcome. Just minutes away! Call (860) 263-7791.",
  alternates: { canonical: 'https://toothtimect.com/locations/east-hartford' },
  openGraph: {
    title: "Children's Dentist Near East Hartford, CT | Tooth Time Dentistry",
    description: "East Hartford families love our gentle pediatric dental care. HUSKY accepted, multilingual team, special needs expertise. Call today!",
    url: 'https://toothtimect.com/locations/east-hartford',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://toothtimect.com' },
    { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://toothtimect.com/locations/east-hartford' },
    { '@type': 'ListItem', position: 3, name: 'East Hartford', item: 'https://toothtimect.com/locations/east-hartford' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: "How far is Tooth Time Dentistry from East Hartford?", acceptedAnswer: { '@type': 'Answer', text: 'Our office at 1000 Albany Avenue in Hartford is just minutes from East Hartford, across the Connecticut River via the Connecticut Blvd or Silver Lane bridge.' } },
    { '@type': 'Question', name: "Do you accept HUSKY Health from East Hartford children?", acceptedAnswer: { '@type': 'Answer', text: 'Yes! We gladly accept HUSKY Health for children from East Hartford and all surrounding communities.' } },
    { '@type': 'Question', name: "Is there parking at your office for East Hartford patients?", acceptedAnswer: { '@type': 'Answer', text: 'Yes, our office at 1000 Albany Avenue, Hartford has ample free parking for all patients including those traveling from East Hartford.' } },
    { '@type': 'Question', name: "What services do East Hartford families use most often?", acceptedAnswer: { '@type': 'Answer', text: 'East Hartford families come to us for preventive cleanings, cavity fillings, nitrous oxide sedation, and our specialized special needs dentistry program.' } },
    { '@type': 'Question', name: "Do you speak Spanish for East Hartford patients?", acceptedAnswer: { '@type': 'Answer', text: 'Yes! Our team is fluent in English, Spanish, and Korean, making us a great fit for East Hartford\'s diverse community.' } },
  ],
}

export default function EastHartfordPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-bg-pearl pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="label-text inline-block bg-primary/10 text-primary font-semibold text-sm px-3 py-1 rounded-full mb-4">East Hartford, CT</span>
          <h1 className="font-display text-5xl lg:text-6xl text-text-dark mb-6">
            Children&apos;s Dentist in East Hartford, CT | Tooth Time Dentistry
          </h1>
          <p className="font-body text-text-body text-xl leading-relaxed mb-8">
            East Hartford families trust Tooth Time Dentistry for exceptional pediatric dental care. Our Hartford office is just minutes across the river — and worth every minute of the drive.
          </p>
          <a href="tel:+18602637791" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-body font-bold px-8 py-4 rounded-full text-lg transition-colors">
            📞 Call (860) 263-7791
          </a>
        </div>
      </section>

      {/* Parking Banner */}
      <div className="max-w-5xl mx-auto px-4 pb-4">
        <div className="flex items-center justify-center gap-3 bg-secondary/10 border border-secondary/20 rounded-2xl px-6 py-4 max-w-sm mx-auto">
          <span className="text-2xl">🅿️</span>
          <p className="font-body font-semibold text-secondary-dark text-base">
            Free private parking available on site
          </p>
        </div>
      </div>


      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl text-text-dark mb-5">East Hartford&apos;s Trusted Pediatric Dentist</h2>
            <div className="font-body text-text-body leading-relaxed space-y-4 text-lg">
              <p>
                Families from East Hartford have been making the short drive across the Connecticut River to visit Tooth Time Dentistry for over a decade. Our office at 1000 Albany Avenue in Hartford is just minutes from East Hartford via the Connecticut Boulevard or Silver Lane bridges, making us one of the most convenient dental offices for East Hartford families seeking expert pediatric dental care.
              </p>
              <p>
                East Hartford is home to a diverse and vibrant community, and our multilingual team — fluent in English, Spanish, and Korean — ensures that every East Hartford family can communicate comfortably about their child&apos;s dental health. We also proudly accept HUSKY Health, making our services accessible to East Hartford families enrolled in Connecticut Medicaid.
              </p>
              <p>
                Whether your East Hartford child needs a routine cleaning, a cavity filled, or specialized care for anxiety or special needs, Tooth Time Dentistry has the expertise and the heart to deliver exceptional care. Dr. Lim and her team will make your child feel right at home from the moment they walk through our doors.
              </p>
              <p>
                East Hartford parents consistently praise our gentle approach, warm atmosphere, and the transformative difference Dr. Lim makes for children who have struggled with dental anxiety elsewhere. We invite you to experience the Tooth Time difference for your East Hartford family.
              </p>
            </div>
            <a href="tel:+18602637791" className="inline-flex items-center gap-2 mt-6 bg-primary hover:bg-primary-dark text-white font-body font-bold px-6 py-3 rounded-full transition-colors">
              📞 Book Your East Hartford Appointment
            </a>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image src="/childrens-dentistry-hartford-ct.jpeg" alt="Diverse East Hartford children at Tooth Time Dentistry" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg-pearl">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-4xl text-text-dark mb-8 text-center">
            Finding a Children&apos;s Dentist Near Me in East Hartford, CT
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="font-body text-text-body text-lg leading-relaxed mb-6">
                From East Hartford, our office is easily reached in under 10 minutes. Take Connecticut Boulevard or Silver Lane to cross the river, then head west on Albany Avenue to 1000 Albany Avenue, Suite 1, Hartford, CT 06112.
              </p>
              <div className="bg-white rounded-2xl p-6 border border-primary/10 mb-4">
                <h3 className="font-display text-xl text-text-dark mb-3">Directions from East Hartford</h3>
                <div className="font-body text-text-body space-y-2 text-sm">
                  <p><strong>Via CT Blvd:</strong> Head west on Connecticut Blvd across the river, then left on Albany Ave. Our office is at 1000 Albany Ave on the right.</p>
                  <p><strong>Via I-84:</strong> Take I-84 West to exit 44 (Flatbush Ave), then north to Albany Ave and turn right.</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl h-80">
              <iframe title="Tooth Time Dentistry Map - East Hartford" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d-72.6974!3d41.7887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e65365b8e0a1b5%3A0x5e24d9c7e0c55f9e!2s1000%20Albany%20Ave%2C%20Hartford%2C%20CT%2006112!5e0!3m2!1sen!2sus!4v1700000000000" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-4xl text-text-dark mb-8 text-center">East Hartford Dental FAQs</h2>
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
