import type { Metadata } from 'next'
import Image from 'next/image'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: "Children's Dentist Near New Britain, CT | Tooth Time Dentistry",
  description:
    "New Britain families trust Tooth Time Dentistry for top-rated pediatric dental care. HUSKY Health accepted, Spanish spoken, special needs welcome. Call (860) 263-7791.",
  alternates: { canonical: 'https://toothtimect.com/locations/new-britain' },
  openGraph: {
    title: "Children's Dentist Near New Britain, CT | Tooth Time Dentistry",
    description: "New Britain families receive exceptional pediatric dental care at Tooth Time Dentistry Hartford. Accepting HUSKY, Spanish-speaking, special needs expertise.",
    url: 'https://toothtimect.com/locations/new-britain',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://toothtimect.com' },
    { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://toothtimect.com/locations/new-britain' },
    { '@type': 'ListItem', position: 3, name: 'New Britain', item: 'https://toothtimect.com/locations/new-britain' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: "How far is Tooth Time Dentistry from New Britain, CT?", acceptedAnswer: { '@type': 'Answer', text: 'Our Hartford office is approximately 15-20 minutes from New Britain via Route 9 or I-84. Many New Britain families make this short drive for our exceptional pediatric dental care.' } },
    { '@type': 'Question', name: "Does your office serve Spanish-speaking New Britain families?", acceptedAnswer: { '@type': 'Answer', text: 'Yes! New Britain has a large Spanish-speaking community, and our team is fluent in Spanish. We make every New Britain family feel welcome and understood.' } },
    { '@type': 'Question', name: "Do you accept HUSKY Health from New Britain children?", acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We accept HUSKY Health (Connecticut Medicaid) for children from New Britain. Making dental care accessible to every family is central to our mission.' } },
    { '@type': 'Question', name: "Can New Britain children with special needs be treated at your office?", acceptedAnswer: { '@type': 'Answer', text: 'Yes. Dr. Lim has specialized expertise in treating children with a wide range of special needs. New Britain families specifically seek us out for this expertise.' } },
    { '@type': 'Question', name: "What is the easiest way to get from New Britain to your Hartford office?", acceptedAnswer: { '@type': 'Answer', text: 'The easiest routes from New Britain are via Route 9 North connecting to I-84 West, or via Route 372 and then Albany Avenue into Hartford. Our office is at 1000 Albany Avenue, Suite 1.' } },
  ],
}

export default function NewBritainPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-bg-pearl pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="label-text inline-block bg-primary/10 text-primary font-semibold text-sm px-3 py-1 rounded-full mb-4">New Britain, CT</span>
          <h1 className="font-display text-5xl lg:text-6xl text-text-dark mb-6">
            Children&apos;s Dentist in New Britain, CT | Tooth Time Dentistry
          </h1>
          <p className="font-body text-text-body text-xl leading-relaxed mb-8">
            New Britain families trust Tooth Time Dentistry for comprehensive, compassionate pediatric dental care. Our Hartford office serves New Britain children with the gentleness, expertise, and cultural sensitivity your family deserves.
          </p>
          <a href="tel:+18602637791" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-body font-bold px-8 py-4 rounded-full text-lg transition-colors">
            📞 Call (860) 263-7791
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl text-text-dark mb-5">Serving New Britain Families with Pride</h2>
            <div className="font-body text-text-body leading-relaxed space-y-4 text-lg">
              <p>
                New Britain, known as the Hardware City, is home to a proud, diverse community with deep roots and a strong sense of family. At Tooth Time Dentistry, we share those values — and we are honored to serve New Britain families at our Hartford office, conveniently located just 15-20 minutes away via Route 9 or I-84.
              </p>
              <p>
                New Britain has one of the largest Spanish-speaking communities in Connecticut, and our bilingual team is fluent in Spanish — making it easy for New Britain families to communicate about their children&apos;s dental health without any language barrier. We also speak English and Korean, serving New Britain&apos;s full cultural diversity.
              </p>
              <p>
                We accept HUSKY Health for New Britain children, recognizing that access to quality dental care should not depend on financial situation. Our office team is experienced at working with HUSKY plans and will help you understand and maximize your benefits before each appointment.
              </p>
              <p>
                New Britain families also come to Tooth Time Dentistry specifically for our special needs dental expertise. Dr. Lim has helped many New Britain children with autism, Down syndrome, cerebral palsy, and other conditions receive the dental care they need in a safe, supportive environment. We are here for every New Britain child.
              </p>
            </div>
            <a href="tel:+18602637791" className="inline-flex items-center gap-2 mt-6 bg-primary hover:bg-primary-dark text-white font-body font-bold px-6 py-3 rounded-full transition-colors">
              📞 Book Your New Britain Appointment
            </a>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image src="/childrens-dentistry-hartford-ct.jpeg" alt="New Britain CT children at Tooth Time Dentistry Hartford" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg-pearl">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-4xl text-text-dark mb-8 text-center">
            Pediatric Dentist Near Me in New Britain, CT
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="bg-white rounded-2xl p-6 border border-primary/10 mb-4">
                <h3 className="font-display text-xl text-text-dark mb-3">Directions from New Britain to Our Hartford Office</h3>
                <div className="font-body text-text-body space-y-2 text-sm">
                  <p><strong>Via Route 9 North:</strong> Take Route 9 North from New Britain to I-84 East. Take exit 44 (Flatbush Ave), head north to Albany Avenue, then turn right. 1000 Albany Ave is on the right.</p>
                  <p><strong>Via Route 372:</strong> Head east on Route 372 from New Britain into Hartford. Continue to Albany Avenue area and our office at 1000 Albany Ave, Suite 1.</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl h-80">
              <iframe title="Tooth Time Dentistry Map - New Britain" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d-72.6974!3d41.7887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e65365b8e0a1b5%3A0x5e24d9c7e0c55f9e!2s1000%20Albany%20Ave%2C%20Hartford%2C%20CT%2006112!5e0!3m2!1sen!2sus!4v1700000000000" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-4xl text-text-dark mb-8 text-center">New Britain Dental FAQs</h2>
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
