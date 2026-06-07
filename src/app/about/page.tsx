import type { Metadata } from 'next'
import Image from 'next/image'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: "About Tooth Time Dentistry — Hartford's Pediatric Dental Team",
  description:
    "Meet Dr. Lim and the Tooth Time Dentistry team in Hartford, CT. 14+ years of gentle, specialized pediatric dental care for children of all needs. Call (860) 263-7791.",
  alternates: {
    canonical: 'https://toothtimect.com/about',
  },
  openGraph: {
    title: "About Tooth Time Dentistry — Hartford's Pediatric Dental Team",
    description:
      "Meet Dr. Lim and our multilingual, compassionate pediatric dental team serving Hartford, CT families for 14+ years.",
    url: 'https://toothtimect.com/about',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://toothtimect.com' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://toothtimect.com/about' },
  ],
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-bg-pearl pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="label-text inline-block bg-primary/10 text-primary font-semibold text-sm px-3 py-1 rounded-full mb-4">
            Our Story
          </span>
          <h1 className="font-display text-5xl lg:text-6xl text-text-dark mb-6">
            About Tooth Time Dentistry — Hartford&apos;s Pediatric Dental Team
          </h1>
          <p className="font-body text-text-body text-xl leading-relaxed">
            For over 14 years, we have been Hartford&apos;s trusted partner in children&apos;s oral health — building big smiles and lasting confidence, one little patient at a time.
          </p>
        </div>
      </section>

      {/* Dr. Lim Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="label-text inline-block bg-primary/10 text-primary font-semibold text-sm px-3 py-1 rounded-full mb-4">
                Meet Our Doctor
              </span>
              <h2 className="font-display text-4xl text-text-dark mb-6">Dr. Lim — Hartford&apos;s Most Trusted Children&apos;s Dentist</h2>
              <div className="font-body text-text-body leading-relaxed space-y-4 text-lg">
                <p>
                  Dr. Lim founded Tooth Time Dentistry with a single powerful mission: to create a dental practice where every child feels safe, comfortable, and genuinely cared for. With over 14 years of experience in pediatric dentistry in the Hartford area, she has built a reputation as one of Connecticut&apos;s most skilled and compassionate children&apos;s dentists.
                </p>
                <p>
                  Dr. Lim completed her dental education with distinction and has pursued extensive continuing education in pediatric dentistry, special needs care, and sedation techniques. She is known among Hartford families for her extraordinary patience, her ability to connect with even the most nervous children, and her meticulous clinical skills.
                </p>
                <p>
                  Patients and parents consistently praise Dr. Lim for her kindness, her clear communication, and her genuine investment in each child&apos;s wellbeing. Hundreds of Hartford families have trusted her with their children&apos;s dental care for years — many bringing multiple children and even grandchildren to her practice.
                </p>
                <p>
                  Dr. Lim is particularly passionate about caring for children with special needs. She understands that these patients often face additional barriers to dental care, and she has developed specialized techniques and a deeply patient, individualized approach that makes dental visits possible and positive for children across the full spectrum of needs.
                </p>
                <p>
                  Fluent in English, Spanish, and Korean, Dr. Lim is deeply connected to Hartford&apos;s diverse community and committed to serving every family regardless of language, background, or financial situation.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1681939282741-9ace0a227977?w=800&q=80"
                alt="Dr. Lim, pediatric dentist at Tooth Time Dentistry Hartford CT"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-bg-pearl">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="lg:order-2">
              <span className="label-text inline-block bg-secondary/10 text-secondary-dark font-semibold text-sm px-3 py-1 rounded-full mb-4">
                Our Philosophy
              </span>
              <h2 className="font-display text-4xl text-text-dark mb-6">Dentistry That Starts with Kindness</h2>
              <div className="font-body text-text-body leading-relaxed space-y-4 text-lg">
                <p>
                  At Tooth Time Dentistry, we believe that a child&apos;s early dental experiences shape their relationship with oral health for life. A positive first visit builds a foundation of trust that makes dental care a natural, comfortable part of childhood rather than something to dread.
                </p>
                <p>
                  That&apos;s why every aspect of our practice — from our welcoming office design to our gentle clinical techniques — is intentionally crafted with children in mind. We explain every procedure in child-friendly language, move at each patient&apos;s pace, and celebrate every milestone along the way.
                </p>
                <p>
                  We welcome children of all ages, all abilities, and all backgrounds. Our HUSKY Health acceptance means no family in Hartford has to go without dental care because of cost. Our multilingual team means no family has to struggle with a language barrier. And our specialized special needs expertise means no child is turned away because their needs are complex.
                </p>
                <p>
                  Great dental care is not just about teeth — it&apos;s about building confidence, preventing pain, and supporting overall health. We are honored to be a part of your child&apos;s health journey.
                </p>
              </div>
            </div>
            <div className="lg:order-1 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://plus.unsplash.com/premium_photo-1663958034026-2d6311bc344c?w=800&q=80"
                alt="Parent and child at Tooth Time Dentistry Hartford enjoying their visit"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Office Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl text-text-dark mb-4">Our Hartford Office</h2>
            <p className="font-body text-text-body text-lg max-w-2xl mx-auto">
              Our welcoming, child-friendly office at 1000 Albany Avenue is designed to put even the most anxious child at ease. Clean, bright, and beautifully appointed — just as our reviews describe.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://plus.unsplash.com/premium_photo-1681997228576-97a401398bf5?w=800&q=80"
                alt="Tooth Time Dentistry office interior Hartford CT"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://plus.unsplash.com/premium_photo-1681966964991-c91687dc735f?w=800&q=80"
                alt="Dental treatment room at Tooth Time Dentistry"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1619236233405-bb5d430f0620?w=800&q=80"
                alt="Happy children at Tooth Time Dentistry Hartford"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-bg-pearl">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl text-text-dark mb-4">What Makes Us Different</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '💙', title: 'HUSKY Health Accepted', desc: 'Making dental care accessible to every Hartford family regardless of financial situation.' },
              { icon: '💜', title: 'Special Needs Expertise', desc: 'Specialized training and compassionate approaches for children with complex needs.' },
              { icon: '🌍', title: 'Multilingual Team', desc: 'English, Spanish, and Korean spoken — serving Hartford\'s diverse community.' },
              { icon: '😊', title: 'Anxiety-Free Care', desc: 'Nitrous oxide, gentle techniques, and patient-paced appointments for nervous children.' },
            ].map((val) => (
              <div key={val.title} className="bg-white rounded-2xl p-8 text-center border border-primary/10 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{val.icon}</div>
                <h3 className="font-display text-xl text-text-dark mb-3">{val.title}</h3>
                <p className="font-body text-text-body text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
