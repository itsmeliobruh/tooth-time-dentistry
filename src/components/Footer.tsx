import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#1A0E26] text-white">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Site Links */}
          <div>
            <h3 className="font-display text-xl text-primary-light mb-4">Site Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'Location', href: '/location' },
                { label: 'About', href: '/about' },
                { label: 'Blog', href: '/blog' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-body text-gray-300 hover:text-primary-light transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-display text-xl text-primary-light mb-4">Services</h3>
            <ul className="space-y-2 text-sm font-body text-gray-300">
              <li>Preventive Cleanings</li>
              <li>Dental X-Rays</li>
              <li>Tooth Fillings</li>
              <li>Tooth Extractions</li>
              <li>Nitrous Oxide Sedation</li>
              <li>Special Needs Dentistry</li>
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h3 className="font-display text-xl text-primary-light mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {[
                { label: 'Hartford, CT', href: '/locations/hartford' },
                { label: 'East Hartford, CT', href: '/locations/east-hartford' },
                { label: 'Manchester, CT', href: '/locations/manchester' },
                { label: 'West Hartford, CT', href: '/locations/west-hartford' },
                { label: 'New Britain, CT', href: '/locations/new-britain' },
                { label: 'Bloomfield, CT', href: '/locations/bloomfield' },
              ].map((loc) => (
                <li key={loc.href}>
                  <Link href={loc.href} className="font-body text-gray-300 hover:text-primary-light transition-colors text-sm">
                    {loc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-display text-xl text-primary-light mb-4">Contact</h3>
            <address className="not-italic font-body text-gray-300 text-sm space-y-2">
              <p>1000 Albany Avenue, STE 1<br />Hartford, CT 06112</p>
              <p>
                <a href="tel:+18602637791" className="hover:text-primary-light transition-colors">
                  📞 (860) 263-7791
                </a>
              </p>
              <p>
                <a href="mailto:info@toothtimect.com" className="hover:text-primary-light transition-colors">
                  info@toothtimect.com
                </a>
              </p>
              <div className="pt-2">
                <p className="font-semibold text-white">Hours:</p>
                <p>Mon: 8AM–5PM | Tue: 8AM–2PM</p>
                <p>Wed: 8AM–5PM | Thu: Closed</p>
                <p>Fri: 8AM–5PM | Sat–Sun: Closed</p>
              </div>
              <div className="flex gap-3 pt-2">
                <a href="https://www.facebook.com/toothtimedentistry/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-light transition-colors">
                  Facebook
                </a>
                <span>·</span>
                <a href="https://www.instagram.com/toothtimedentistryct" target="_blank" rel="noopener noreferrer" className="hover:text-primary-light transition-colors">
                  Instagram
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm font-body text-gray-400">
          <p>© 2026 Tooth Time Dentistry. All rights reserved.</p>
          <p>
            Designed by{' '}
            <a href="https://egl.solutions" target="_blank" rel="noopener noreferrer" className="hover:text-primary-light transition-colors">
              EGL Solutions
            </a>{' '}
            ·{' '}
            <a href="tel:+18602003455" className="hover:text-primary-light transition-colors">
              (860) 200-3455
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
