export interface ServiceFAQ {
  q: string
  a: string
}

export interface Service {
  slug: string
  icon: string
  title: string
  shortTitle: string
  metaTitle: string
  metaDescription: string
  image: string
  imageAlt: string
  intro: string
  paragraphs: string[]
  faqs: ServiceFAQ[]
}

export const services: Service[] = [
  {
    slug: 'preventive-cleanings',
    icon: '🦷',
    shortTitle: 'Preventive Cleanings',
    title: 'Preventive Cleanings & Exams',
    metaTitle: 'Pediatric Dental Cleanings in Hartford, CT | Tooth Time Dentistry',
    metaDescription:
      'Professional teeth cleanings and exams for kids in Hartford, CT. Tooth Time Dentistry accepts HUSKY Health. Call (860) 263-7791 to book your child\'s cleaning today.',
    image: 'https://images.unsplash.com/photo-1681939282741-9ace0a227977?w=1200&q=80',
    imageAlt: 'Pediatric dental hygienist performing a gentle teeth cleaning on a child in Hartford CT',
    intro:
      'Preventive dental care is the foundation of a lifetime of healthy smiles. At Tooth Time Dentistry in Hartford, CT, our gentle cleanings and thorough exams help your child stay cavity-free — and make every visit something they look forward to.',
    paragraphs: [
      'During each routine cleaning, our experienced hygienists carefully remove plaque and tartar from all surfaces of your child\'s teeth — including areas that brushing and flossing at home can\'t fully reach. We follow up with a gentle polish that leaves teeth smooth, clean, and bright.',
      'Dr. Lim performs a comprehensive exam at each visit, checking for early signs of cavities, gum disease, bite problems, and developmental concerns. Catching issues early is always easier, faster, and less costly than treating them once they progress.',
      'For children with a higher risk of cavities, we may recommend fluoride treatments and dental sealants — thin protective coatings applied painlessly to the grooves of back molars where most cavities in kids form. Both treatments are quick, comfortable, and highly effective.',
      'We also take time to teach your child age-appropriate brushing and flossing skills, and we coach parents on diet habits and products that help protect young teeth at home.',
      'Most children should visit every six months, though some benefit from more frequent care based on their individual risk. Most insurance plans — including HUSKY Health — cover preventive cleanings and exams at no cost to you.',
    ],
    faqs: [
      {
        q: 'How often should my child get a dental cleaning?',
        a: 'Most children benefit from a professional cleaning every six months. Dr. Lim may recommend more frequent visits for children with a history of cavities or higher decay risk.',
      },
      {
        q: 'Are dental sealants covered by HUSKY Health?',
        a: 'HUSKY Health typically covers dental sealants for children on back molars. Our office will verify your specific coverage before treatment.',
      },
      {
        q: 'What if my child is nervous about the dentist?',
        a: 'Our team is specially trained to work with anxious children. We use a gentle, tell-show-do approach and offer nitrous oxide for children who need extra help relaxing.',
      },
      {
        q: 'When should my child have their first dental visit?',
        a: 'The American Academy of Pediatric Dentistry recommends a child\'s first dental visit by age one or within six months of their first tooth coming in.',
      },
    ],
  },
  {
    slug: 'dental-x-rays',
    icon: '🔬',
    shortTitle: 'Dental X-Rays',
    title: 'Pediatric Dental X-Rays',
    metaTitle: 'Safe Digital Dental X-Rays for Kids in Hartford, CT | Tooth Time Dentistry',
    metaDescription:
      'Low-radiation digital dental X-rays for children at Tooth Time Dentistry in Hartford, CT. Safe, fast, and essential for catching hidden cavities and tracking jaw development. Call (860) 263-7791.',
    image: 'https://plus.unsplash.com/premium_photo-1681997228576-97a401398bf5?w=1200&q=80',
    imageAlt: 'Modern digital dental X-ray equipment used safely for children at Tooth Time Dentistry Hartford CT',
    intro:
      'Digital dental X-rays give Dr. Lim a complete picture of your child\'s oral health — revealing cavities, tracking jaw development, and catching problems that are invisible to the naked eye, all with significantly less radiation than traditional film X-rays.',
    paragraphs: [
      'Our digital radiography system produces high-resolution diagnostic images while emitting up to 90% less radiation than older film-based systems. Combined with lead aprons and thyroid collars, the exposure is far below any level of concern — and we only take X-rays when they are clinically necessary.',
      'X-rays allow us to detect cavities forming between teeth long before they cause pain or become visible, monitor the development and positioning of incoming permanent teeth, evaluate tooth roots and surrounding bone health, and identify cysts, abscesses, or other hidden concerns beneath the gums.',
      'For growing children and teenagers, X-rays are also an important tool for tracking jaw development and identifying early orthodontic issues — giving families time to plan ahead.',
      'We follow the American Academy of Pediatric Dentistry\'s evidence-based guidelines to determine how often X-rays are appropriate for each child. Most healthy children with low cavity risk need X-rays every 12 to 24 months; higher-risk children may need them more frequently.',
      'Our child-sized sensors and experienced pediatric team make the process fast and comfortable, even for young children. HUSKY Health and most major dental insurance plans cover diagnostic X-rays.',
    ],
    faqs: [
      {
        q: 'Are dental X-rays safe for my child?',
        a: 'Yes. Our digital X-rays emit up to 90% less radiation than traditional film X-rays. We also use lead aprons and thyroid collars and only take X-rays when clinically necessary.',
      },
      {
        q: 'How often does my child need dental X-rays?',
        a: 'The frequency depends on your child\'s individual oral health. Most children need X-rays every 12–24 months, while higher-risk children may need them more often.',
      },
      {
        q: 'What can X-rays detect that a visual exam cannot?',
        a: 'X-rays reveal cavities forming between teeth, developing permanent teeth, bone levels, infections, cysts, and jaw development issues invisible to the naked eye.',
      },
      {
        q: 'Does my child need to do anything to prepare for X-rays?',
        a: 'No special preparation is needed. X-rays are taken quickly during a regular visit. If your child is very young, we may wait until they are comfortable before attempting X-rays.',
      },
    ],
  },
  {
    slug: 'tooth-fillings',
    icon: '✨',
    shortTitle: 'Tooth Fillings',
    title: 'Tooth-Colored Fillings for Kids',
    metaTitle: 'Tooth Fillings for Children in Hartford, CT | Tooth Time Dentistry',
    metaDescription:
      'Tooth-colored composite fillings for kids at Tooth Time Dentistry in Hartford, CT. Gentle, mercury-free, and completed in one visit. HUSKY accepted. Call (860) 263-7791.',
    image: 'https://plus.unsplash.com/premium_photo-1681966964991-c91687dc735f?w=1200&q=80',
    imageAlt: 'Child relaxed in dental chair receiving a tooth-colored filling at Tooth Time Dentistry Hartford CT',
    intro:
      'When a cavity develops, prompt treatment stops the decay in its tracks. At Tooth Time Dentistry in Hartford, CT, we restore teeth with tooth-colored composite resin fillings — no silver, no mercury, and results that blend naturally with your child\'s smile.',
    paragraphs: [
      'The filling process is comfortable and typically completed in a single appointment. After numbing the area thoroughly, Dr. Lim removes only the decayed portion of the tooth, leaving as much healthy structure as possible. The composite resin is applied in layers, hardened with a special curing light, then shaped and polished to match the surrounding tooth perfectly.',
      'For anxious children, we offer nitrous oxide (laughing gas) sedation to promote calm and relaxation throughout the procedure. Our team explains every step in friendly, age-appropriate language — no scary surprises.',
      'Baby teeth with cavities absolutely need treatment. Primary teeth hold space for incoming permanent teeth, support proper speech development, and allow children to chew comfortably. Leaving a cavity in a baby tooth untreated can cause pain, abscess, and even damage the developing permanent tooth underneath.',
      'Our tooth-colored composite fillings are completely mercury-free and provide a strong, durable restoration that typically lasts many years with proper care. They look and feel like natural teeth, with no dark metal visible when your child smiles or laughs.',
      'We also use every filling appointment as an opportunity to review brushing habits, diet, and fluoride use so your child can avoid new cavities in the future. HUSKY Health and most major insurance plans cover fillings for children.',
    ],
    faqs: [
      {
        q: 'Should baby teeth with cavities be filled?',
        a: 'Yes. Baby teeth serve critical functions — holding space for permanent teeth, supporting speech, and enabling proper chewing. Untreated cavities can cause pain and spread infection.',
      },
      {
        q: 'Do you use silver or tooth-colored fillings?',
        a: 'We use tooth-colored composite resin fillings that match your child\'s natural tooth color. They are mercury-free and blend naturally into the smile.',
      },
      {
        q: 'Will my child feel pain during the filling?',
        a: 'We use topical and local anesthesia so your child feels no pain during the procedure. We also offer nitrous oxide for anxious children. The area may be slightly sore afterward, which resolves quickly.',
      },
      {
        q: 'How long do composite fillings last?',
        a: 'With proper brushing, flossing, and regular dental visits, composite fillings typically last 5–10 years or more.',
      },
    ],
  },
  {
    slug: 'tooth-extractions',
    icon: '🔧',
    shortTitle: 'Tooth Extractions',
    title: 'Gentle Tooth Extractions for Children',
    metaTitle: 'Pediatric Tooth Extractions in Hartford, CT | Tooth Time Dentistry',
    metaDescription:
      'Safe, gentle tooth extractions for children at Tooth Time Dentistry in Hartford, CT. Nitrous oxide available for anxious kids. HUSKY accepted. Call (860) 263-7791.',
    image: 'https://images.unsplash.com/photo-1619236233405-bb5d430f0620?w=1200&q=80',
    imageAlt: 'Children smiling and comfortable after a gentle dental procedure at Tooth Time Dentistry Hartford CT',
    intro:
      'When a tooth cannot be saved, our goal is to make the extraction as gentle and stress-free as possible. At Tooth Time Dentistry in Hartford, CT, we exhaust every option to preserve teeth before recommending removal — and when extraction is the right choice, we make it comfortable.',
    paragraphs: [
      'Tooth extractions in children are most commonly needed when a tooth is severely decayed beyond repair, when a stubborn baby tooth is blocking the eruption of a permanent tooth, when there is overcrowding that requires creating space, or when a tooth has been damaged by trauma or infection.',
      'Before the extraction, Dr. Lim thoroughly numbs the area with a topical anesthetic and then a local anesthetic injection so your child feels no pain during the procedure. For anxious children, nitrous oxide sedation is available to promote calm and relaxation. Most extractions take only a few minutes once the area is numb.',
      'After the procedure, we provide detailed aftercare instructions and walk parents through managing any minor soreness or swelling. Most children feel back to normal within 24 to 48 hours and can return to school the next day.',
      'If a primary (baby) tooth is extracted before its natural time, Dr. Lim may recommend a space maintainer — a small custom appliance that holds the gap open until the permanent tooth is ready to erupt. This prevents neighboring teeth from drifting and avoids future orthodontic problems.',
      'We take the fear out of extractions by using child-friendly language, going at your child\'s pace, and never rushing. HUSKY Health and most major dental insurance plans cover tooth extractions for children.',
    ],
    faqs: [
      {
        q: 'How do I know if my child needs a tooth extracted?',
        a: 'Dr. Lim will examine and take X-rays to determine if extraction is necessary. Common indicators include severe decay, dental abscess, overcrowding, or a stubborn baby tooth blocking a permanent tooth.',
      },
      {
        q: 'Will my child need a space maintainer after an extraction?',
        a: 'Depending on which tooth was removed and your child\'s age, we may recommend a space maintainer to hold the gap open until the permanent tooth erupts naturally.',
      },
      {
        q: 'How long does recovery take after a tooth extraction?',
        a: 'Most children recover within 24–48 hours. We provide detailed aftercare instructions including dietary guidance, pain management tips, and signs to watch for during healing.',
      },
      {
        q: 'Is nitrous oxide available for extractions?',
        a: 'Yes. We offer nitrous oxide sedation for any procedure, including extractions, to help anxious or younger children stay relaxed and comfortable throughout.',
      },
    ],
  },
  {
    slug: 'nitrous-oxide',
    icon: '😊',
    shortTitle: 'Nitrous Oxide',
    title: 'Nitrous Oxide Sedation for Children',
    metaTitle: 'Nitrous Oxide Sedation for Kids in Hartford, CT | Tooth Time Dentistry',
    metaDescription:
      'Safe laughing gas sedation for anxious children at Tooth Time Dentistry in Hartford, CT. Your child stays awake and comfortable. HUSKY accepted. Call (860) 263-7791.',
    image: 'https://images.unsplash.com/photo-1626736985932-c0df2ae07a2e?w=1200&q=80',
    imageAlt: 'Child relaxed and smiling with parent at Tooth Time Dentistry Hartford CT pediatric dental office',
    intro:
      'Dental anxiety is real — and at Tooth Time Dentistry in Hartford, CT, we take it seriously. Nitrous oxide (laughing gas) is the safest, most widely used sedation option in pediatric dentistry, helping children relax so they can receive the care they need comfortably and confidently.',
    paragraphs: [
      'Nitrous oxide is a colorless, odorless gas delivered through a small, comfortable mask that sits over your child\'s nose. Blended with oxygen, it produces a pleasant feeling of warmth, calm, and mild euphoria within just a few minutes — earning its well-known nickname, "laughing gas."',
      'Importantly, nitrous oxide does not put children to sleep. They remain awake, aware, and able to communicate with Dr. Lim throughout the procedure. The effect is simply relaxation — reduced anxiety, increased comfort, and a more positive dental experience overall.',
      'One of the biggest advantages of nitrous oxide is how quickly it wears off. Within three to five minutes of removing the mask, the effects are completely gone. Your child will be fully alert and back to their normal self before leaving the office, with no grogginess or lingering effects — so school and after-school activities are not disrupted.',
      'Nitrous oxide is appropriate for a wide range of children: those with mild or moderate dental anxiety, children undergoing longer procedures, and children with special needs who find dental appointments challenging. It can be used alone or combined with local anesthesia for a completely pain-free and stress-free experience.',
      'We always discuss nitrous oxide with you before using it and answer every question you have. There are very few contraindications, and our team follows strict safety protocols. HUSKY Health and most major insurance plans cover nitrous oxide when medically indicated.',
    ],
    faqs: [
      {
        q: 'Is nitrous oxide safe for children?',
        a: 'Yes. Nitrous oxide has been safely used in dentistry for over 150 years and is specifically approved for pediatric use. It is carefully controlled and blended with oxygen.',
      },
      {
        q: 'Will my child be awake during the procedure?',
        a: 'Yes. Nitrous oxide does not put children to sleep — it simply promotes relaxation. Your child remains awake, aware, and able to talk with the dental team.',
      },
      {
        q: 'How quickly does nitrous oxide wear off?',
        a: 'Effects wear off within 3–5 minutes of removing the mask. Your child can return to school or normal activities immediately — no recovery time needed.',
      },
      {
        q: 'Is nitrous oxide covered by insurance?',
        a: 'HUSKY Health and most major dental insurance plans cover nitrous oxide when medically necessary. We will verify your coverage before the appointment.',
      },
    ],
  },
  {
    slug: 'special-needs-dentistry',
    icon: '💜',
    shortTitle: 'Special Needs Dentistry',
    title: 'Special Needs Dentistry for Children in Hartford',
    metaTitle: 'Special Needs Pediatric Dentist in Hartford, CT | Tooth Time Dentistry',
    metaDescription:
      'Compassionate dental care for children with special needs in Hartford, CT. Tooth Time Dentistry has extensive experience with autism, Down syndrome, cerebral palsy & more. Call (860) 263-7791.',
    image: 'https://images.unsplash.com/photo-1593183230686-69876b0cb240?w=1200&q=80',
    imageAlt: 'Diverse group of children receiving compassionate special needs dental care at Tooth Time Dentistry Hartford CT',
    intro:
      'Every child deserves excellent dental care. At Tooth Time Dentistry in Hartford, CT, Dr. Lim and her team have built a practice that truly welcomes children with physical, developmental, cognitive, and behavioral special needs — with the patience, skill, and compassion their care requires.',
    paragraphs: [
      'We have extensive experience caring for children with autism spectrum disorder, Down syndrome, cerebral palsy, sensory processing disorders, ADHD, intellectual disabilities, physical disabilities, and many other conditions. We recognize that no two children are alike, and we build an individualized approach for each patient before they ever sit in the chair.',
      'Before your child\'s first appointment, we invite you to share everything — your child\'s triggers, their communication style, what has worked or not worked at other practices, and what makes them feel safe. This information shapes every aspect of how we interact with your child.',
      'Our office is designed with sensory-sensitive patients in mind. We can adjust lighting levels, reduce noise, use visual schedules, allow extra time, permit parents to stay chairside throughout, and make a wide range of accommodations. We never rush, and we celebrate every small step forward.',
      'For children who need extra support during procedures, nitrous oxide sedation is available. In cases where a child\'s medical complexity or behavioral needs require it, we can coordinate with hospital-based providers for treatment under general anesthesia — always prioritizing your child\'s safety above all else.',
      'The dental health of special needs children is too often overlooked, and the consequences — pain, infection, difficulty eating — can significantly affect quality of life. We are committed to being a practice where families of children with special needs feel genuinely welcome, not just accommodated. Call (860) 263-7791 to talk with our team about your child.',
    ],
    faqs: [
      {
        q: 'What types of special needs do you have experience with?',
        a: 'We have experience with autism spectrum disorder, Down syndrome, cerebral palsy, sensory processing disorders, ADHD, intellectual disabilities, physical disabilities, and many other conditions.',
      },
      {
        q: 'Can parents stay with their child during the appointment?',
        a: 'Absolutely. We encourage parents of special needs children to stay chairside throughout the appointment. Your presence is often the most important comfort we can offer.',
      },
      {
        q: 'What accommodations can you make for my child?',
        a: 'We can adjust lighting, minimize noise, allow extra time, use visual supports, permit weighted blankets, modify our communication approach, and many other accommodations based on your child\'s individual needs.',
      },
      {
        q: 'Do you accept HUSKY Health for special needs patients?',
        a: 'Yes. We accept HUSKY Health and most major insurance plans for all patients, including those with special needs.',
      },
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
