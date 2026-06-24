import type { Metadata } from 'next'
import Image from 'next/image'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: "Children's Dentist Near West Hartford, CT | Tooth Time Dentistry",
  description:
    "West Hartford families choose Tooth Time Dentistry for specialized pediatric dental care. Gentle, HUSKY-accepted, multilingual. Just minutes away. Call (860) 263-7791.",
  alternates: { canonical: 'https://toothtimect.com/locations/west-hartford' },
  openGraph: {
    title: "Children's Dentist Near West Hartford, CT | Tooth Time Dentistry",
    description: "West Hartford parents trust Tooth Time Dentistry for compassionate, expert pediatric dental care. Special needs expertise, HUSKY accepted.",
    url: 'https://toothtimect.com/locations/west-hartford',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://toothtimect.com' },
    { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://toothtimect.com/locations/west-hartford' },
    { '@type': 'ListItem', position: 3, name: 'West Hartford', item: 'https://toothtimect.com/locations/west-hartford' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: "How do West Hartford families get to Tooth Time Dentistry?", acceptedAnswer: { '@type': 'Answer', text: 'West Hartford families can reach our Hartford office in about 10 minutes via Albany Avenue heading east. Our office is at 1000 Albany Avenue, Suite 1, Hartford, CT 06112.' } },
    { '@type': 'Question', name: "Why do West Hartford parents choose Tooth Time Dentistry?", acceptedAnswer: { '@type': 'Answer', text: 'West Hartford parents choose us for Dr. Lim\'s exceptional skill and gentleness, our special needs expertise, multilingual team (English, Spanish, Korean), and acceptance of HUSKY Health.' } },
    { '@type': 'Question', name: "Do you offer nitrous oxide for West Hartford children?", acceptedAnswer: { '@type': 'Answer', text: 'Yes! Nitrous oxide (laughing gas) is available for children from West Hartford and all communities we serve who experience dental anxiety or need help relaxing during procedures.' } },
    { '@type': 'Question', name: "Does Tooth Time Dentistry accept West Hartford children with HUSKY?", acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We accept HUSKY Health for West Hartford children, making quality pediatric dental care accessible regardless of financial situation.' } },
    { '@type': 'Question', name: "What makes Tooth Time Dentistry the best children's dentist for West Hartford?", acceptedAnswer: { '@type': 'Answer', text: 'With 228+ five-star reviews, 14+ years of experience, specialized special needs training, a multilingual team, and true compassion for every patient — Tooth Time Dentistry stands apart.' } },
  ],
}

export default function WestHartfordPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-bg-pearl pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="label-text inline-block bg-primary/10 text-primary font-semibold text-sm px-3 py-1 rounded-full mb-4">West Hartford, CT</span>
          <h1 className="font-display text-5xl lg:text-6xl text-text-dark mb-6">
            Children&apos;s Dentist in West Hartford, CT | Tooth Time Dentistry
          </h1>
          <p className="font-body text-text-body text-xl leading-relaxed mb-8">
            West Hartford families seeking the very best in pediatric dental care find it at Tooth Time Dentistry. Our Hartford office — just minutes from West Hartford — is home to one of Connecticut&apos;s most skilled and compassionate children&apos;s dental teams.
          </p>
          <a href="tel:+18602637791" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-body font-bold px-8 py-4 rounded-full text-lg transition-colors">
            📞 Call (860) 263-7791
          </a>
        </div>
      </section>


      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl text-text-dark mb-5">West Hartford&apos;s Preferred Pediatric Dentist</h2>
            <div className="font-body text-text-body leading-relaxed space-y-4 text-lg">
              <p>
                West Hartford is one of Connecticut&apos;s most prestigious communities, and West Hartford parents have high standards when it comes to their children&apos;s healthcare — including dental care. Tooth Time Dentistry meets those standards and exceeds them. Our Hartford office, just 10 minutes from West Hartford via Albany Avenue, offers pediatric dental excellence that West Hartford families have come to rely on.
              </p>
              <p>
                Dr. Lim&apos;s reputation among West Hartford parents is built on her exceptional clinical skill, her extraordinary patience with children, and her ability to make even the most nervous child feel completely comfortable. West Hartford parents consistently describe their children asking to return to the dentist — which speaks volumes about the experience we create.
              </p>
              <p>
                We offer West Hartford families the full range of pediatric dental services, including preventive cleanings, dental X-rays, tooth-colored fillings, extractions, nitrous oxide sedation, and specialized care for children with special needs. Our multilingual team also serves West Hartford&apos;s Spanish-speaking and Korean-speaking families.
              </p>
              <p>
                HUSKY Health accepted. All major insurance plans accepted. West Hartford families are always welcome at Tooth Time Dentistry. Call us today to schedule.
              </p>
            </div>
            <a href="tel:+18602637791" className="inline-flex items-center gap-2 mt-6 bg-primary hover:bg-primary-dark text-white font-body font-bold px-6 py-3 rounded-full transition-colors">
              📞 Book Your West Hartford Appointment
            </a>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image src="/office-1.jpeg" alt="West Hartford families at Tooth Time Dentistry Hartford CT" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg-pearl">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-4xl text-text-dark mb-8 text-center">
            Pediatric Dentist Near Me — West Hartford to Hartford
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <div>
              <div className="bg-white rounded-2xl p-6 border border-primary/10 mb-4">
                <h3 className="font-display text-xl text-text-dark mb-3">Directions from West Hartford</h3>
                <div className="font-body text-text-body space-y-2 text-sm">
                  <p><strong>Via Albany Avenue:</strong> Head east on Albany Avenue from West Hartford directly into Hartford. Our office is at 1000 Albany Ave, approximately 10 minutes from the West Hartford town line.</p>
                  <p><strong>Via I-84:</strong> Take I-84 East toward Hartford. Take exit 44 and head north to Albany Ave, then turn left. 1000 Albany Ave is on the right.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-full">
            <div className="rounded-2xl overflow-hidden shadow-xl flex-1 min-h-[300px]">
              <iframe title="Tooth Time Dentistry Map - West Hartford" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d-72.6974!3d41.7887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e65365b8e0a1b5%3A0x5e24d9c7e0c55f9e!2s1000%20Albany%20Ave%2C%20Hartford%2C%20CT%2006112!5e0!3m2!1sen!2sus!4v1700000000000" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
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

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-4xl text-text-dark mb-8 text-center">West Hartford Dental FAQs</h2>
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
