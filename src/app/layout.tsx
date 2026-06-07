import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import MobileCallBar from '@/components/MobileCallBar'

const outfit = Outfit({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://toothtimect.com'),
  title: "Children's Dentist in Hartford, CT | Tooth Time Dentistry",
  description:
    "Tooth Time Dentistry offers gentle pediatric dental care in Hartford, CT. Accepting HUSKY Health, special needs patients & all ages. Call (860) 263-7791.",
  openGraph: {
    title: "Children's Dentist in Hartford, CT | Tooth Time Dentistry",
    description:
      "Gentle, compassionate pediatric dentistry for Hartford families. HUSKY accepted, special needs welcome, 14+ years serving CT.",
    url: 'https://toothtimect.com',
    siteName: 'Tooth Time Dentistry',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://toothtimect.com',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const dentistSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Tooth Time Dentistry',
  telephone: '+18602637791',
  email: 'info@toothtimect.com',
  url: 'https://toothtimect.com',
  image: 'https://toothtimect.com/toothlogo_clean.png',
  description:
    'Tooth Time Dentistry provides gentle, compassionate pediatric dental care in Hartford, CT, serving families across the greater Hartford area for 14+ years.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1000 Albany Avenue, STE 1',
    addressLocality: 'Hartford',
    addressRegion: 'CT',
    postalCode: '06112',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.7887,
    longitude: -72.6974,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Monday',
      opens: '08:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Tuesday',
      opens: '08:00',
      closes: '14:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Wednesday',
      opens: '08:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '08:00',
      closes: '17:00',
    },
  ],
  areaServed: [
    'Hartford, CT',
    'East Hartford, CT',
    'Manchester, CT',
    'West Hartford, CT',
    'New Britain, CT',
  ],
  sameAs: [
    'https://www.facebook.com/toothtimedentistry/',
    'https://www.instagram.com/toothtimedentistryct',
  ],
  priceRange: '$$',
  hasMap: 'https://maps.google.com/?q=1000+Albany+Avenue+Hartford+CT+06112',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.6',
    reviewCount: '228',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
        />
        <meta name="geo.region" content="US-CT" />
        <meta name="geo.placename" content="Hartford" />
        <meta name="geo.position" content="41.7887;-72.6974" />
        <meta name="ICBM" content="41.7887, -72.6974" />
      </head>
      <body className="font-body antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  )
}
