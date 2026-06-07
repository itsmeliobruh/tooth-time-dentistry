import type { Metadata } from 'next'
import Image from 'next/image'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: "Pediatric Dental Services in Hartford, CT | Tooth Time Dentistry",
  description:
    "Explore all pediatric dental services at Tooth Time Dentistry in Hartford, CT — cleanings, fillings, extractions, nitrous oxide & special needs care. Call (860) 263-7791.",
  alternates: {
    canonical: 'https://toothtimect.com/services',
  },
  openGraph: {
    title: "Pediatric Dental Services in Hartford, CT | Tooth Time Dentistry",
    description:
      "Full-range pediatric dental services in Hartford, CT. Gentle care for all children including special needs patients. HUSKY accepted.",
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

const services = [
  {
    id: 'preventive',
    icon: '🦷',
    title: 'Preventive Cleanings & Exams',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80',
    imageAlt: 'Dental professional at Tooth Time Dentistry Hartford',
    content: `Preventive dental care is the cornerstone of lifelong oral health, and at Tooth Time Dentistry in Hartford, we are passionate about helping your child build healthy habits from an early age. During each routine visit, one of our friendly and experienced hygienists will gently remove plaque and tartar buildup from your child's teeth — deposits that cannot be removed by brushing and flossing alone.

Our comprehensive preventive exams include a thorough visual examination of all teeth, gums, and soft tissues. Dr. Lim checks for signs of cavities, gum disease, bite alignment issues, and developmental concerns. We also review your child's brushing and flossing technique and provide age-appropriate oral hygiene instruction so your child understands the importance of caring for their smile.

For children at higher cavity risk, we may recommend fluoride treatments and dental sealants — thin protective coatings applied to the grooved surfaces of back teeth where cavities are most likely to form. These preventive measures are quick, painless, and highly effective at preventing decay.

We recommend most children visit us every six months, though some children may benefit from more frequent visits based on their individual risk factors. Early and consistent preventive care helps us catch small problems before they become large ones — saving your family time, discomfort, and expense in the long run.

Most insurance plans, including HUSKY Health, cover routine preventive cleanings and exams at little or no cost to you. Call us at (860) 263-7791 to schedule your child's next cleaning at our Hartford, CT office.`,
    faqs: [
      {
        q: 'How often should my child get a dental cleaning?',
        a: 'Most children benefit from a professional cleaning every six months. However, Dr. Lim may recommend more frequent visits for children with a history of cavities or higher decay risk.',
      },
      {
        q: 'Are dental sealants covered by HUSKY Health?',
        a: 'HUSKY Health typically covers dental sealants for children on back molars. Our office will verify your specific coverage before treatment.',
      },
      {
        q: 'My child is terrified of the dentist. How do you handle anxious kids?',
        a: 'Our team is specially trained to work with anxious children. We use a gentle, tell-show-do approach and offer nitrous oxide for children who need extra help relaxing.',
      },
    ],
  },
  {
    id: 'xrays',
    icon: '🔬',
    title: 'Dental X-Rays',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80',
    imageAlt: 'Modern dental office equipment at Tooth Time Dentistry',
    content: `Dental X-rays are an essential diagnostic tool that allows Dr. Lim to see what cannot be detected with the naked eye. At Tooth Time Dentistry in Hartford, we use modern digital radiography technology that produces high-quality images while emitting significantly less radiation than traditional film X-rays — making them extremely safe for children.

X-rays help us identify cavities between teeth that are not visible during a visual examination, monitor the development of incoming permanent teeth, evaluate the roots and surrounding bone, and detect any cysts, infections, or other concerns beneath the gum line. For growing children and teenagers, X-rays are also an important tool for monitoring jaw development and identifying any orthodontic concerns early.

We follow evidence-based guidelines to take X-rays only when clinically necessary, based on each child's individual risk factors. For most children with good oral health, we typically recommend X-rays every 12–24 months. Children with a higher risk of cavities or other conditions may need them more frequently.

Our child-sized X-ray sensors and our team's experience with pediatric patients make the process quick and comfortable — even for young children. We always use lead aprons and thyroid collars for additional protection, and we are happy to answer any questions you have about our radiation safety protocols.

HUSKY Health and most major dental insurance plans cover diagnostic X-rays. Please call (860) 263-7791 to learn more or to schedule an appointment at our Hartford, CT office.`,
    faqs: [
      {
        q: 'Are dental X-rays safe for my child?',
        a: 'Yes. Our digital X-rays emit up to 90% less radiation than traditional film X-rays. We also use lead aprons for added protection and only take X-rays when clinically necessary.',
      },
      {
        q: 'How often does my child need dental X-rays?',
        a: 'The frequency depends on your child\'s individual oral health. Most children need X-rays every 12-24 months, while higher-risk children may need them more often.',
      },
      {
        q: 'What can X-rays detect that a visual exam cannot?',
        a: 'X-rays reveal cavities between teeth, developing permanent teeth, bone levels, infections, cysts, and jaw development issues that cannot be seen with the naked eye.',
      },
    ],
  },
  {
    id: 'fillings',
    icon: '✨',
    title: 'Tooth Fillings',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffbb172754d?w=800&q=80',
    imageAlt: 'Child comfortable at dentist receiving tooth filling',
    content: `If your child has developed a cavity, prompt treatment with a tooth filling is essential to stop the decay from spreading and restore the tooth to full health and function. At Tooth Time Dentistry in Hartford, we use tooth-colored composite resin fillings that blend seamlessly with your child's natural teeth — no silver amalgam, no obvious metal fillings.

The filling process is straightforward and comfortable. After numbing the area with a topical anesthetic followed by a local anesthetic injection, Dr. Lim carefully removes the decayed portion of the tooth and thoroughly cleans the area. The composite resin is then applied in layers, hardened with a special light, and shaped and polished to match the surrounding tooth. Most fillings are completed in a single appointment.

For anxious children, we offer nitrous oxide (laughing gas) sedation to promote relaxation during the procedure. Our friendly team explains each step in child-friendly language and moves at a pace that keeps your child comfortable throughout the process.

We also emphasize the prevention of future cavities by discussing proper brushing and flossing techniques, dietary habits, and fluoride use. Our goal is not just to treat existing cavities but to help your child avoid them in the future.

Baby teeth (primary teeth) are just as important to fill as permanent teeth. They hold space for incoming permanent teeth, support proper speech development, and allow children to chew comfortably. Untreated cavities in baby teeth can cause pain and infection that affects the developing permanent tooth beneath.

Call (860) 263-7791 to schedule a filling appointment at our Hartford, CT office. HUSKY Health and most major insurance plans cover tooth fillings.`,
    faqs: [
      {
        q: 'Should baby teeth with cavities be filled?',
        a: 'Yes. Baby teeth serve critical functions — they hold space for permanent teeth, help with speech, and allow proper chewing. Untreated cavities can cause pain and spread infection.',
      },
      {
        q: 'Do you use silver or tooth-colored fillings?',
        a: 'We use tooth-colored composite resin fillings that match your child\'s natural tooth color and are free of mercury.',
      },
      {
        q: 'Will my child feel pain during the filling?',
        a: 'We use topical and local anesthesia to ensure your child feels no pain. We also offer nitrous oxide for anxious children. The area may be a little sore afterward, but it resolves quickly.',
      },
    ],
  },
  {
    id: 'extractions',
    icon: '🔧',
    title: 'Tooth Extractions',
    image: 'https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=800&q=80',
    imageAlt: 'Kids smiling after dental treatment at Tooth Time Dentistry',
    content: `Sometimes a tooth needs to be removed to protect your child's overall oral health. At Tooth Time Dentistry in Hartford, CT, we always make extractions a last resort — we explore every possible option to save a tooth before recommending removal. However, when extraction is necessary, you can trust our experienced team to perform the procedure with maximum gentleness and care.

Common reasons for extractions in children include severely decayed teeth that cannot be restored, teeth that are causing crowding or blocking the eruption of permanent teeth, baby teeth that refuse to fall out on their own and are impeding incoming permanent teeth, or teeth damaged by trauma or infection.

Before the extraction, Dr. Lim will thoroughly numb the area with local anesthesia so your child does not feel pain during the procedure. For anxious patients, nitrous oxide sedation is available to promote calmness and relaxation. The actual extraction takes only a few minutes once the area is numb.

After the extraction, we provide detailed post-operative instructions to ensure proper healing. We ask that children avoid hard or crunchy foods for a day or two, and parents are given guidance on managing any minor swelling or discomfort. In most cases, children are feeling back to normal within 24 to 48 hours.

If a primary tooth is extracted early, we may recommend a space maintainer to hold the gap open until the permanent tooth is ready to erupt — preventing neighboring teeth from drifting into the space.

We accept HUSKY Health and most major dental insurance for tooth extractions. Call (860) 263-7791 to discuss your child's dental needs with our Hartford team.`,
    faqs: [
      {
        q: 'How do I know if my child needs a tooth extracted?',
        a: 'Dr. Lim will examine and take X-rays to determine if a tooth needs extraction. Signs include severe decay, dental abscess, crowding, or a stubborn baby tooth blocking a permanent tooth.',
      },
      {
        q: 'Will my child need a space maintainer after an extraction?',
        a: 'Depending on which tooth was removed and your child\'s age, we may recommend a space maintainer to hold the gap open until the permanent tooth erupts.',
      },
      {
        q: 'How long does recovery take after a tooth extraction?',
        a: 'Most children recover within 24-48 hours. We provide detailed aftercare instructions including dietary restrictions, pain management, and what to watch for during healing.',
      },
    ],
  },
  {
    id: 'nitrous',
    icon: '😊',
    title: 'Nitrous Oxide Sedation',
    image: 'https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?w=800&q=80',
    imageAlt: 'Parent with child at dental office, relaxed and comfortable',
    content: `Dental anxiety affects many children, and at Tooth Time Dentistry in Hartford, we take this seriously. Nitrous oxide — commonly known as laughing gas — is one of the safest, most effective tools we have for helping anxious children relax during dental procedures. We are proud to offer this service to make every visit as comfortable as possible.

Nitrous oxide is a colorless, odorless gas that is mixed with oxygen and delivered through a small mask that rests over your child's nose. Within a few minutes, most children feel a pleasant sensation of warmth and relaxation. They remain awake, can still communicate and respond to Dr. Lim's instructions, and are aware of what is happening — they simply feel calm and at ease.

The effects of nitrous oxide wear off completely within three to five minutes of removing the mask, so your child will be fully alert and back to normal by the time they leave our office. There are no lasting effects, and children can return to school and normal activities immediately after their appointment.

Nitrous oxide is appropriate for a wide range of children — from those with mild anxiety to those with more severe dental phobia, as well as children undergoing longer procedures who benefit from relaxation. It is also commonly used for children with special needs who may find dental appointments challenging.

We will always discuss nitrous oxide with you before using it and answer any questions you have. HUSKY Health and most major insurance plans cover nitrous oxide when medically necessary. Call (860) 263-7791 to ask whether nitrous oxide is right for your child.`,
    faqs: [
      {
        q: 'Is nitrous oxide safe for children?',
        a: 'Yes. Nitrous oxide has been safely used in dentistry for over 150 years and is specifically approved for pediatric use. It is administered at carefully controlled levels mixed with oxygen.',
      },
      {
        q: 'Will my child be awake during the procedure with nitrous oxide?',
        a: 'Yes. Nitrous oxide does not put children to sleep — they remain awake, aware, and able to communicate. It simply promotes relaxation and reduces anxiety.',
      },
      {
        q: 'How quickly does nitrous oxide wear off?',
        a: 'The effects wear off within 3-5 minutes of removing the mask. Your child will be fully alert and can return to school or normal activities immediately after the appointment.',
      },
    ],
  },
  {
    id: 'special-needs',
    icon: '💜',
    title: 'Special Needs Dentistry',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191011?w=1200&q=80',
    imageAlt: 'Diverse children receiving compassionate dental care in Hartford CT',
    content: `Every child deserves excellent dental care — including those with physical, developmental, cognitive, and behavioral special needs. At Tooth Time Dentistry in Hartford, CT, Dr. Lim and her team have dedicated years to developing specialized skills and compassionate approaches that make dental care accessible and comfortable for children with a wide range of conditions.

We have experience caring for children with autism spectrum disorder, Down syndrome, cerebral palsy, sensory processing disorders, ADHD, intellectual disabilities, physical disabilities, and many other conditions. We understand that each child is unique, and we take the time before each appointment to learn about your child's specific needs, triggers, and preferences so we can tailor our approach accordingly.

Our office is designed with sensory considerations in mind. We can adjust lighting, minimize noise, allow extra time, use weighted blankets, permit parents to stay chairside throughout the appointment, and make any other reasonable accommodations that help your child feel safe and comfortable. We never rush, and we celebrate every small milestone.

For children who require additional support during procedures, we offer nitrous oxide sedation. In some cases, we may coordinate with specialists or recommend treatment under general anesthesia at a hospital facility for children with very complex needs — safety always comes first.

We believe the dental health of special needs children is often overlooked, and we are committed to changing that. Good oral health contributes to overall health, quality of life, and confidence — and every child deserves that.

If you have a child with special needs who has had difficulty receiving dental care elsewhere, please call us at (860) 263-7791. We would love to welcome your family and create a care plan that works.`,
    faqs: [
      {
        q: 'What types of special needs do you have experience with?',
        a: 'We have experience with autism spectrum disorder, Down syndrome, cerebral palsy, sensory processing disorders, ADHD, intellectual disabilities, physical disabilities, and more.',
      },
      {
        q: 'Can parents stay with their child during the appointment?',
        a: 'Absolutely. We encourage parents of special needs children to stay chairside throughout the appointment. Your presence can be a tremendous comfort to your child.',
      },
      {
        q: 'What accommodations can you make for my special needs child?',
        a: 'We can adjust lighting, minimize noise, allow extra appointment time, use weighted blankets, modify our communication approach, and many other accommodations based on your child\'s needs.',
      },
    ],
  },
]

export default function ServicesPage() {
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
            Our Services
          </span>
          <h1 className="font-display text-5xl lg:text-6xl text-text-dark mb-6">
            Pediatric &amp; Family Dental Services in Hartford, CT
          </h1>
          <p className="font-body text-text-body text-xl leading-relaxed mb-8">
            From first smiles to teenage years, Tooth Time Dentistry offers comprehensive, gentle dental care designed for children of all ages and needs. Explore our full range of services below.
          </p>
          <a
            href="tel:+18602637791"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-body font-bold px-8 py-4 rounded-full text-lg transition-colors"
          >
            📞 Call (860) 263-7791
          </a>
        </div>
      </section>

      {/* Services */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 ${i % 2 === 0 ? 'bg-white' : 'bg-bg-pearl'}`}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{service.icon}</span>
                  <h2 className="font-display text-3xl lg:text-4xl text-text-dark">{service.title}</h2>
                </div>
                <div className="font-body text-text-body leading-relaxed space-y-4 mb-8 whitespace-pre-line">
                  {service.content.split('\n\n').map((para, pi) => (
                    <p key={pi}>{para}</p>
                  ))}
                </div>
                <a
                  href="tel:+18602637791"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-body font-bold px-6 py-3 rounded-full transition-colors"
                >
                  📞 Book This Service
                </a>

                {/* Mini FAQs */}
                <div className="mt-10 space-y-4">
                  <h3 className="font-display text-xl text-text-dark">Common Questions</h3>
                  {service.faqs.map((faq, fi) => (
                    <div key={fi} className="bg-bg-pearl rounded-xl p-5 border border-primary/10">
                      <p className="font-body font-bold text-text-dark mb-1">{faq.q}</p>
                      <p className="font-body text-text-body text-sm">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`relative h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </>
  )
}
