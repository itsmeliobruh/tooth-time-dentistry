import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: "Children's Dental Health Blog | Hartford, CT | Tooth Time Dentistry",
  description:
    "Expert tips on children's dental health from Tooth Time Dentistry in Hartford, CT. HUSKY coverage, anxiety, laughing gas, special needs dentistry & more.",
  alternates: {
    canonical: 'https://toothtimect.com/blog',
  },
  openGraph: {
    title: "Children's Dental Health Blog | Hartford, CT | Tooth Time Dentistry",
    description:
      "Helpful articles on pediatric dental care from Hartford's most trusted children's dentist.",
    url: 'https://toothtimect.com/blog',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://toothtimect.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://toothtimect.com/blog' },
  ],
}

const posts = [
  {
    title: "When Should My Child First Visit a Dentist in Hartford, CT?",
    excerpt: "The American Academy of Pediatric Dentistry recommends a child's first dental visit by age 1 or within 6 months of their first tooth. Learn why early visits matter and what to expect at Tooth Time Dentistry.",
    category: "Child Development",
    readTime: "5 min read",
    icon: "🦷",
    date: "May 28, 2026",
  },
  {
    title: "Does HUSKY Health Cover Kids Dentistry in Connecticut?",
    excerpt: "Good news for Connecticut families — HUSKY Health covers a wide range of pediatric dental services. We break down what's covered, how to use your benefits, and how to schedule at Tooth Time Dentistry Hartford.",
    category: "Insurance",
    readTime: "6 min read",
    icon: "💙",
    date: "May 15, 2026",
  },
  {
    title: "How to Prepare an Anxious Child for Their Dental Appointment",
    excerpt: "Dental anxiety is one of the most common challenges for pediatric patients. Dr. Lim shares her top strategies for helping nervous children feel calm, safe, and even excited about visiting the dentist.",
    category: "Anxiety & Comfort",
    readTime: "7 min read",
    icon: "😌",
    date: "April 30, 2026",
  },
  {
    title: "Laughing Gas at the Dentist: What Hartford Parents Need to Know",
    excerpt: "Nitrous oxide is safe, effective, and can transform a scary dental visit into a calm experience. We answer the most common questions Hartford parents have about laughing gas for children.",
    category: "Sedation",
    readTime: "5 min read",
    icon: "😊",
    date: "April 12, 2026",
  },
  {
    title: "Best Children's Dentist Near Me in Hartford, CT — What to Look For",
    excerpt: "Searching for a pediatric dentist in Hartford? Here's what families should look for — from insurance acceptance and language access to special needs expertise and reviews. Tooth Time Dentistry checks every box.",
    category: "Choosing a Dentist",
    readTime: "8 min read",
    icon: "🏆",
    date: "March 25, 2026",
  },
  {
    title: "Why Special Needs Dental Care Matters: A Hartford Dentist's Guide",
    excerpt: "Children with special needs often face unique barriers to dental care — but great oral health is achievable for every child. Dr. Lim explains how our specialized approach makes a difference for Hartford families.",
    category: "Special Needs",
    readTime: "9 min read",
    icon: "💜",
    date: "March 10, 2026",
  },
]

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-bg-pearl pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="label-text inline-block bg-primary/10 text-primary font-semibold text-sm px-3 py-1 rounded-full mb-4">
            Expert Dental Advice
          </span>
          <h1 className="font-display text-5xl lg:text-6xl text-text-dark mb-6">
            Children&apos;s Dental Health Blog | Hartford, CT | Tooth Time Dentistry
          </h1>
          <p className="font-body text-text-body text-xl leading-relaxed">
            Tips, guidance, and answers from Hartford&apos;s pediatric dental experts — helping your family build healthy smiles that last a lifetime.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <article
                key={i}
                className="bg-bg-pearl rounded-2xl overflow-hidden border border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all group"
              >
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 h-40 flex items-center justify-center">
                  <span className="text-6xl">{post.icon}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="label-text text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="label-text text-xs text-muted">{post.readTime}</span>
                  </div>
                  <h2 className="font-display text-xl text-text-dark mb-3 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="font-body text-text-body text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="label-text text-xs text-muted">{post.date}</span>
                    <a
                      href="tel:+18602637791"
                      className="label-text text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                    >
                      Have questions? Call us →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16 p-10 bg-bg-pearl rounded-3xl border border-primary/10">
            <h2 className="font-display text-3xl text-text-dark mb-4">Have a Dental Question?</h2>
            <p className="font-body text-text-body text-lg mb-6 max-w-xl mx-auto">
              Our Hartford team is always happy to answer questions about your child&apos;s dental health. Don&apos;t wait for the next blog post — give us a call!
            </p>
            <a
              href="tel:+18602637791"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-body font-bold px-8 py-4 rounded-full text-lg transition-colors"
            >
              📞 Call (860) 263-7791
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
