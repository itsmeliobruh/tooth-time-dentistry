import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import StatsBar from '@/components/StatsBar'
import AboutSection from '@/components/AboutSection'
import ServicesGrid from '@/components/ServicesGrid'
import WhyChooseUs from '@/components/WhyChooseUs'
import ReviewsCarousel from '@/components/ReviewsCarousel'
import SocialSection from '@/components/SocialSection'
import ServiceAreas from '@/components/ServiceAreas'
import InsuranceSection from '@/components/InsuranceSection'
import FAQAccordion from '@/components/FAQAccordion'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: "Children's Dentist in Hartford, CT | Tooth Time Dentistry",
  description:
    "Tooth Time Dentistry — gentle pediatric dental care in Hartford, CT. HUSKY Health accepted, special needs welcome, nitrous oxide available. Call (860) 263-7791.",
  alternates: {
    canonical: 'https://toothtimect.com',
  },
  openGraph: {
    title: "Children's Dentist in Hartford, CT | Tooth Time Dentistry",
    description:
      "Gentle, compassionate pediatric dentistry for Hartford families. 14+ years, HUSKY accepted, special needs welcome. Call today!",
    url: 'https://toothtimect.com',
    images: [
      {
        url: 'https://toothtimect.com/wp-content/uploads/2020/04/ChildrenHero.jpg',
        width: 1200,
        height: 630,
        alt: "Tooth Time Dentistry — Hartford Children's Dentist",
      },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'At what age should my child first visit the dentist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The American Academy of Pediatric Dentistry recommends that children visit the dentist by their first birthday or within six months of their first tooth erupting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Tooth Time Dentistry accept HUSKY Health insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We proudly accept HUSKY Health, Connecticut\'s Medicaid program, for children\'s dental care. Call (860) 263-7791 to verify your plan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer nitrous oxide (laughing gas) for children?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer nitrous oxide sedation for children who experience dental anxiety or require more involved procedures. It is safe and wears off within minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you treat children with special needs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Dr. Lim has extensive experience and specialized training in providing dental care to children with physical, developmental, cognitive, and behavioral special needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What languages does your office speak?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our team is fluent in English, Spanish, and Korean.',
      },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <ServicesGrid />
      <WhyChooseUs />
      <ReviewsCarousel />
      <ServiceAreas />
      <SocialSection />
      <InsuranceSection />
      <FAQAccordion />
      <CTASection />
    </>
  )
}
