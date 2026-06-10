import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { services, getServiceBySlug } from '@/lib/services'
import CTASection from '@/components/CTASection'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)
  if (!service) return {}
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `https://toothtimect.com/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://toothtimect.com/services/${service.slug}`,
      images: [{ url: service.image, alt: service.imageAlt }],
    },
  }
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()

  const otherServices = services.filter((s) => s.slug !== service.slug)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://toothtimect.com' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://toothtimect.com/services' },
      { '@type': 'ListItem', position: 3, name: service.title, item: `https://toothtimect.com/services/${service.slug}` },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: service.title,
    description: service.metaDescription,
    procedureType: 'https://health-lifesci.schema.org/MedicalProcedure',
    provider: {
      '@type': 'Dentist',
      name: 'Tooth Time Dentistry',
      telephone: '+18602637791',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1000 Albany Avenue, STE 1',
        addressLocality: 'Hartford',
        addressRegion: 'CT',
        postalCode: '06112',
      },
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section className="bg-bg-pearl pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm font-body text-text-body mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <span className="text-gray-400">/</span>
            <span className="text-text-dark font-semibold">{service.shortTitle}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">{service.icon}</span>
            <span className="label-text inline-block bg-primary/10 text-primary font-semibold text-sm px-3 py-1 rounded-full">
              Pediatric Dental Care · Hartford, CT
            </span>
          </div>
          <h1 className="font-display font-bold text-4xl lg:text-6xl text-text-dark mb-5">
            {service.title}
          </h1>
          <p className="font-body text-text-body text-xl leading-relaxed mb-8 max-w-3xl">
            {service.intro}
          </p>
          <a
            href="tel:+18602637791"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-body font-bold px-8 py-4 rounded-full text-lg transition-colors shadow-lg"
          >
            📞 Call (860) 263-7791
          </a>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* Text */}
            <div>
              <div className="font-body text-text-body text-lg leading-relaxed space-y-5 mb-10">
                {service.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* FAQ */}
              <div>
                <h2 className="font-display text-2xl text-text-dark mb-5">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, i) => (
                    <div key={i} className="bg-bg-pearl rounded-xl p-5 border border-primary/10">
                      <p className="font-body font-bold text-text-dark mb-1">{faq.q}</p>
                      <p className="font-body text-text-body text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image + sidebar */}
            <div className="space-y-8">
              <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Quick info card */}
              <div className="bg-bg-pearl rounded-2xl p-7 border border-primary/10 space-y-4">
                <h3 className="font-display text-xl text-text-dark">Tooth Time Dentistry</h3>
                <div className="font-body text-text-body text-sm space-y-2">
                  <p>📍 1000 Albany Avenue, STE 1<br />Hartford, CT 06112</p>
                  <p>📞 <a href="tel:+18602637791" className="hover:text-primary transition-colors">(860) 263-7791</a></p>
                  <p>🕐 Mon &amp; Wed &amp; Fri: 8AM–5PM<br />Tue: 8AM–2PM · Thu/Sat/Sun: Closed</p>
                  <p className="text-primary font-semibold">✓ HUSKY Health Accepted</p>
                </div>
                <a
                  href="tel:+18602637791"
                  className="block text-center bg-primary hover:bg-primary-dark text-white font-body font-bold px-6 py-3 rounded-full transition-colors label-text"
                >
                  Book an Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-bg-pearl">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-3xl text-text-dark mb-8 text-center">
            Explore Our Other Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="flex items-center gap-4 bg-white rounded-xl p-5 border border-primary/10 hover:border-primary/40 hover:shadow-md transition-all group"
              >
                <span className="text-3xl">{s.icon}</span>
                <div>
                  <p className="font-body font-semibold text-text-dark group-hover:text-primary transition-colors">
                    {s.shortTitle}
                  </p>
                  <p className="font-body text-text-body text-xs mt-0.5">Hartford, CT</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
