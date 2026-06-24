import type { Metadata } from 'next'
import Image from 'next/image'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: "Children's Dentist Near Manchester, CT | Tooth Time Dentistry",
  description:
    "Manchester, CT families choose Tooth Time Dentistry for exceptional pediatric dental care. HUSKY accepted, gentle & experienced. Call (860) 263-7791 today.",
  alternates: { canonical: 'https://toothtimect.com/locations/manchester' },
  openGraph: {
    title: "Children's Dentist Near Manchester, CT | Tooth Time Dentistry",
    description: "Manchester families drive to Tooth Time Dentistry Hartford for our outstanding pediatric dental care. Special needs expertise & HUSKY accepted.",
    url: 'https://toothtimect.com/locations/manchester',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://toothtimect.com' },
    { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://toothtimect.com/locations/manchester' },
    { '@type': 'ListItem', position: 3, name: 'Manchester', item: 'https://toothtimect.com/locations/manchester' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: "How far is Tooth Time Dentistry from Manchester, CT?", acceptedAnswer: { '@type': 'Answer', text: 'Our Hartford office is approximately 10-15 minutes from Manchester via I-84 West or Route 44. Many Manchester families consider the short drive well worth it for our exceptional care.' } },
    { '@type': 'Question', name: "Do you accept HUSKY Health for Manchester children?", acceptedAnswer: { '@type': 'Answer', text: 'Yes! We accept HUSKY Health (CT Medicaid) for children from Manchester and all surrounding communities. Call to verify your plan.' } },
    { '@type': 'Question', name: "Does your office serve Manchester children with special needs?", acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Dr. Lim is specially trained in pediatric dentistry for children with physical, developmental, and cognitive special needs — many Manchester families bring their special needs children to us specifically for this expertise.' } },
    { '@type': 'Question', name: "What dental services do you offer for Manchester children?", acceptedAnswer: { '@type': 'Answer', text: 'We offer preventive cleanings, digital X-rays, tooth-colored fillings, extractions, nitrous oxide sedation, and specialized special needs dentistry for Manchester children.' } },
    { '@type': 'Question', name: "Can Manchester families schedule same-week appointments?", acceptedAnswer: { '@type': 'Answer', text: 'We do our best to accommodate urgent needs promptly. Call us at (860) 263-7791 and our team will find the earliest available time for your Manchester family.' } },
  ],
}

export default function ManchesterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-bg-pearl pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="label-text inline-block bg-primary/10 text-primary font-semibold text-sm px-3 py-1 rounded-full mb-4">Manchester, CT</span>
          <h1 className="font-display text-5xl lg:text-6xl text-text-dark mb-6">
            Children&apos;s Dentist in Manchester, CT | Tooth Time Dentistry
          </h1>
          <p className="font-body text-text-body text-xl leading-relaxed mb-8">
            Manchester families make the short drive to Tooth Time Dentistry in Hartford for pediatric dental care that is truly exceptional. Gentle, thorough, and genuinely kind — we are worth the trip from Manchester, CT.
          </p>
          <a href="tel:+18602637791" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-body font-bold px-8 py-4 rounded-full text-lg transition-colors">
            📞 Call (860) 263-7791
          </a>
        </div>
      </section>


      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl text-text-dark mb-5">Manchester Families Choose Tooth Time Dentistry</h2>
            <div className="font-body text-text-body leading-relaxed space-y-4 text-lg">
              <p>
                Manchester, CT is a thriving community just east of Hartford, and many Manchester families have discovered that the short drive to Tooth Time Dentistry at 1000 Albany Avenue in Hartford is among the best decisions they have made for their children&apos;s oral health. Our office is easily accessible from Manchester via I-84 West or Route 44, typically taking just 10-15 minutes depending on traffic.
              </p>
              <p>
                Manchester children receive the same exceptional, gentle care that has earned us 228+ five-star reviews. From first dental visits for Manchester toddlers to comprehensive care for Manchester teenagers, Dr. Lim and our team provide personalized, age-appropriate dental services at every stage of your child&apos;s development.
              </p>
              <p>
                We understand that Manchester families lead busy lives, which is why we offer convenient weekday hours and a team that moves efficiently while never rushing your child&apos;s appointment. We also accept HUSKY Health for Manchester children enrolled in Connecticut Medicaid.
              </p>
              <p>
                Many Manchester families specifically seek us out for our special needs dentistry expertise and our multilingual team — abilities that can be hard to find closer to home. We are proud to be Manchester families&apos; trusted choice for pediatric dental care.
              </p>
            </div>
            <a href="tel:+18602637791" className="inline-flex items-center gap-2 mt-6 bg-primary hover:bg-primary-dark text-white font-body font-bold px-6 py-3 rounded-full transition-colors">
              📞 Book Your Manchester Appointment
            </a>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image src="/childrens-dentistry-hartford-ct.jpeg" alt="Manchester CT children smiling at Tooth Time Dentistry" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg-pearl">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-4xl text-text-dark mb-8 text-center">
            Finding a Children&apos;s Dentist Near Me in Manchester, CT
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <div>
              <div className="bg-white rounded-2xl p-6 border border-primary/10 mb-4">
                <h3 className="font-display text-xl text-text-dark mb-3">Directions from Manchester to Our Hartford Office</h3>
                <div className="font-body text-text-body space-y-2 text-sm">
                  <p><strong>Via I-84 West:</strong> Take I-84 West from Manchester toward Hartford. Take exit 44 (Flatbush Ave). Head north on Flatbush Ave to Albany Ave, turn right. We are at 1000 Albany Ave on the right.</p>
                  <p><strong>Via Route 44:</strong> Head west on Route 44 from Manchester into Hartford. Continue to Albany Ave. Turn right and look for 1000 Albany Ave on the right side.</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-primary/10 mt-4">
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
              <iframe title="Tooth Time Dentistry Map - Manchester" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d-72.6974!3d41.7887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e65365b8e0a1b5%3A0x5e24d9c7e0c55f9e!2s1000%20Albany%20Ave%2C%20Hartford%2C%20CT%2006112!5e0!3m2!1sen!2sus!4v1700000000000" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
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
          <h2 className="font-display text-4xl text-text-dark mb-8 text-center">Manchester Dental FAQs</h2>
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
