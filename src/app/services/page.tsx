import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/lib/services'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Pediatric Dental Services in Hartford, CT | Tooth Time Dentistry',
  description:
    'Full-range pediatric dental services at Tooth Time Dentistry in Hartford, CT — cleanings, fillings, X-rays, extractions, nitrous oxide & special needs care. HUSKY accepted. Call (860) 263-7791.',
  alternates: { canonical: 'https://toothtimect.com/services' },
  openGraph: {
    title: 'Pediatric Dental Services in Hartford, CT | Tooth Time Dentistry',
    description:
      'Comprehensive pediatric dental care in Hartford, CT. Gentle, compassionate services for children of all ages and needs. HUSKY Health accepted.',
    url: 'https://toothtimect.com/services',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://toothtimect.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://toothtimect.com/services' },
  ],
}

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-bg-pearl pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="label-text inline-block bg-primary/10 text-primary font-semibold text-sm px-3 py-1 rounded-full mb-4">
            Pediatric Dental Care · Hartford, CT
          </span>
          <h1 className="font-display font-bold text-5xl lg:text-6xl text-text-dark mb-6">
            Our Dental Services
          </h1>
          <p className="font-body text-text-body text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
            From your child&apos;s very first visit to their teenage years, Tooth Time Dentistry offers comprehensive, gentle care for every smile. Explore each service below to learn more.
          </p>
          <a
            href="tel:+18602637791"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-body font-bold px-8 py-4 rounded-full text-lg transition-colors shadow-lg"
          >
            📞 Call (860) 263-7791
          </a>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-bg-pearl rounded-2xl p-8 border border-primary/10 hover:border-primary/40 hover:shadow-xl transition-all flex flex-col"
              >
                <span className="text-5xl mb-4 block group-hover:scale-110 transition-transform">
                  {service.icon}
                </span>
                <h2 className="font-display text-2xl text-text-dark mb-3 group-hover:text-primary transition-colors">
                  {service.shortTitle}
                </h2>
                <p className="font-body text-text-body text-sm leading-relaxed mb-5 flex-1">
                  {service.intro}
                </p>
                <span className="label-text text-primary font-semibold text-sm inline-flex items-center gap-1">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance note */}
      <section className="py-12 bg-bg-pearl">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl text-text-dark mb-3">
            We Accept HUSKY Health &amp; Most Major Insurance
          </h2>
          <p className="font-body text-text-body mb-6">
            All of our services are available to HUSKY Health patients. We also accept most major dental insurance plans and welcome self-pay families. Call us to verify your coverage before your visit.
          </p>
          <a
            href="tel:+18602637791"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-body font-bold px-6 py-4 rounded-full transition-colors label-text w-full sm:w-auto max-w-xs sm:max-w-none mx-auto"
          >
            📞 Call (860) 263-7791
          </a>
        </div>
      </section>

      <CTASection />
    </>
  )
}
