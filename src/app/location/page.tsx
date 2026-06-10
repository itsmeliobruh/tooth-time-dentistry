import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Location | Tooth Time Dentistry – Hartford, CT',
  description:
    'Visit Tooth Time Dentistry at 1000 Albany Avenue, STE 1, Hartford, CT 06112. Call (860) 263-7791 to schedule your child\'s appointment.',
}

export default function LocationPage() {
  return (
    <main className="pt-28 pb-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block bg-secondary/10 text-secondary-dark font-semibold text-sm px-3 py-1 rounded-full mb-3 label-text">
            Find Us
          </span>
          <h1 className="font-display font-bold text-4xl lg:text-5xl text-text-dark mb-4">
            Our Location
          </h1>
          <p className="font-body text-text-body text-lg max-w-xl mx-auto">
            We are conveniently located in Hartford, CT and proudly serve families from across the greater Hartford area.
          </p>
        </div>

        {/* Info + Map grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-12">

          {/* Info card */}
          <div className="bg-bg-pearl rounded-2xl p-8 border border-primary/10 space-y-6">

            <div>
              <h2 className="font-display text-xl text-text-dark mb-1">Address</h2>
              <p className="font-body text-text-body">
                1000 Albany Avenue, STE 1<br />
                Hartford, CT 06112
              </p>
              <a
                href="https://maps.google.com/?q=1000+Albany+Avenue+STE+1+Hartford+CT+06112"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-primary font-semibold text-sm hover:text-primary-dark transition-colors label-text"
              >
                Get Directions →
              </a>
            </div>

            <div>
              <h2 className="font-display text-xl text-text-dark mb-1">Phone</h2>
              <a
                href="tel:+18602637791"
                className="font-body text-text-body hover:text-primary transition-colors text-lg"
              >
                📞 (860) 263-7791
              </a>
            </div>

            <div>
              <h2 className="font-display text-xl text-text-dark mb-2">Office Hours</h2>
              <ul className="font-body text-text-body space-y-1 text-sm">
                <li className="flex justify-between max-w-xs">
                  <span>Monday</span><span className="font-semibold">8:00 AM – 5:00 PM</span>
                </li>
                <li className="flex justify-between max-w-xs">
                  <span>Tuesday</span><span className="font-semibold">8:00 AM – 2:00 PM</span>
                </li>
                <li className="flex justify-between max-w-xs">
                  <span>Wednesday</span><span className="font-semibold">8:00 AM – 5:00 PM</span>
                </li>
                <li className="flex justify-between max-w-xs text-gray-400">
                  <span>Thursday</span><span>Closed</span>
                </li>
                <li className="flex justify-between max-w-xs">
                  <span>Friday</span><span className="font-semibold">8:00 AM – 5:00 PM</span>
                </li>
                <li className="flex justify-between max-w-xs text-gray-400">
                  <span>Saturday – Sunday</span><span>Closed</span>
                </li>
              </ul>
            </div>

            <a
              href="tel:+18602637791"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-body font-bold px-8 py-4 rounded-full transition-colors w-full text-center label-text"
            >
              📞 Call to Book an Appointment
            </a>
          </div>

          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-primary/10 h-[420px]">
            <iframe
              title="Tooth Time Dentistry – 1000 Albany Avenue Hartford CT"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d-72.6974!3d41.7887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e65365b8e0a1b5%3A0x5e24d9c7e0c55f9e!2s1000%20Albany%20Ave%2C%20Hartford%2C%20CT%2006112!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </main>
  )
}
