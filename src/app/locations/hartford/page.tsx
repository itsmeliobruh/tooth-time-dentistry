import type { Metadata } from 'next'
import Image from 'next/image'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: "Children's Dentist in Hartford, CT | Tooth Time Dentistry",
  description:
    "Top-rated pediatric dentist serving Hartford, CT families. HUSKY Health accepted, special needs care, nitrous oxide. 1000 Albany Ave. Call (860) 263-7791.",
  alternates: {
    canonical: 'https://toothtimect.com/locations/hartford',
  },
  openGraph: {
    title: "Children's Dentist in Hartford, CT | Tooth Time Dentistry",
    description:
      "Hartford's most trusted pediatric dental office. Gentle care for kids of all ages and needs — conveniently located at 1000 Albany Avenue.",
    url: 'https://toothtimect.com/locations/hartford',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://toothtimect.com' },
    { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://toothtimect.com/locations/hartford' },
    { '@type': 'ListItem', position: 3, name: 'Hartford', item: 'https://toothtimect.com/locations/hartford' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Where is Tooth Time Dentistry located in Hartford, CT?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are located at 1000 Albany Avenue, Suite 1, Hartford, CT 06112. We are accessible by public transit and have ample free parking.',
      },
    },
    {
      '@type': 'Question',
      name: "Does the Hartford dentist office accept HUSKY Health?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Tooth Time Dentistry proudly accepts HUSKY Health (Connecticut Medicaid) for children\'s dental care in Hartford.',
      },
    },
    {
      '@type': 'Question',
      name: "What are the office hours for the Hartford dental office?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hours: Monday 8AM–5PM, Tuesday 8AM–2PM, Wednesday 8AM–5PM, Thursday Closed, Friday 8AM–5PM, Saturday and Sunday Closed.',
      },
    },
    {
      '@type': 'Question',
      name: "Does Tooth Time Dentistry in Hartford treat children with special needs?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dr. Lim has extensive specialized training in caring for children with physical, developmental, cognitive, and behavioral special needs.',
      },
    },
    {
      '@type': 'Question',
      name: "What languages does the Hartford dental team speak?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our Hartford team speaks English, Spanish, and Korean — serving Hartford\'s diverse community.',
      },
    },
  ],
}

export default function HartfordPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-bg-pearl pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="label-text inline-block bg-primary/10 text-primary font-semibold text-sm px-3 py-1 rounded-full mb-4">
            Hartford, Connecticut
          </span>
          <h1 className="font-display text-5xl lg:text-6xl text-text-dark mb-6">
            Children&apos;s Dentist in Hartford, CT | Tooth Time Dentistry
          </h1>
          <p className="font-body text-text-body text-xl leading-relaxed mb-8">
            Hartford families have trusted Tooth Time Dentistry for over 14 years. Conveniently located at 1000 Albany Avenue, we are Hartford&apos;s go-to destination for gentle, comprehensive pediatric dental care.
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
            <h2 className="font-display text-4xl text-text-dark mb-5">Serving Hartford Families with Heart</h2>
            <div className="font-body text-text-body leading-relaxed space-y-4 text-lg">
              <p>
                As the capital city of Connecticut, Hartford is home to a wonderfully diverse population — and Tooth Time Dentistry has been proud to serve Hartford families from all walks of life for more than 14 years. Our office at 1000 Albany Avenue, Suite 1 is centrally located in Hartford and accessible by bus routes and major roadways, making it easy for Hartford families throughout the city to reach us.
              </p>
              <p>
                Hartford children receive comprehensive pediatric dental care at our office, from routine cleanings and digital X-rays to tooth fillings, extractions, and specialized care for children with special needs. We proudly accept HUSKY Health (Connecticut Medicaid), which covers preventive and restorative services for Hartford children enrolled in the program.
              </p>
              <p>
                Our multilingual team speaks English, Spanish, and Korean, making it easy for Hartford&apos;s diverse families to communicate comfortably about their children&apos;s dental health. We believe no Hartford family should face a language barrier when seeking dental care for their child.
              </p>
              <p>
                Whether your child is visiting the dentist for the first time or is a longtime patient, our Hartford team will make every appointment a positive experience. With 228+ five-star reviews, Hartford parents know they can trust Tooth Time Dentistry.
              </p>
            </div>
            <a href="tel:+18602637791" className="inline-flex items-center gap-2 mt-6 bg-primary hover:bg-primary-dark text-white font-body font-bold px-6 py-3 rounded-full transition-colors">
              📞 Book Your Hartford Appointment
            </a>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image src="/ChildrenHero.jpg" alt="Hartford children's dentist Tooth Time Dentistry" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Near Me + Directions */}
      <section className="py-20 bg-bg-pearl">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-4xl text-text-dark mb-6 text-center">
            Finding a Children&apos;s Dentist Near Me in Hartford, CT
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="font-body text-text-body text-lg leading-relaxed mb-6">
                Tooth Time Dentistry is conveniently located at <strong>1000 Albany Avenue, Suite 1, Hartford, CT 06112</strong>. We are easily accessible from all Hartford neighborhoods including Blue Hills, Upper Albany, North End, South End, Frog Hollow, and downtown Hartford.
              </p>
              <div className="bg-white rounded-2xl p-6 border border-primary/10 mb-6">
                <h3 className="font-display text-2xl text-text-dark mb-4">Directions to Our Hartford Office</h3>
                <div className="font-body text-text-body space-y-2 text-sm">
                  <p><strong>From I-91:</strong> Take exit 33 toward Albany Avenue. Head west on Albany Avenue. Our office is on the left at 1000 Albany Ave.</p>
                  <p><strong>From I-84:</strong> Take exit 44 toward Flatbush Avenue. Continue north to Albany Avenue and turn right. We are approximately 0.5 miles on the right.</p>
                  <p><strong>By Bus:</strong> CTTransit routes serve Albany Avenue with stops near our office.</p>
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
            <div className="rounded-2xl overflow-hidden shadow-xl h-96">
              <iframe
                title="Tooth Time Dentistry Hartford Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d-72.6974!3d41.7887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e65365b8e0a1b5%3A0x5e24d9c7e0c55f9e!2s1000%20Albany%20Ave%2C%20Hartford%2C%20CT%2006112!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
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

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-4xl text-text-dark mb-8 text-center">Hartford Dental FAQs</h2>
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
