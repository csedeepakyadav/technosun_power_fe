import { Link } from 'react-router-dom';

/* ─── Navigation data ─────────────────────────────────────── */
const companyLinks = [
  { label: 'Home', to: '/' },
  { label: 'About us', to: '/about' },
  { label: 'Our projects', to: '/projects' },
  { label: 'Sustainability', to: '/sustainability' },
  { label: 'Contact us', to: '/contact' },
];

const serviceLinks = [
  { label: 'Residential Solar', to: '/services/residential-solar' },
  { label: 'Commercial & Industrial', to: '/services/commercial-industrial-solar' },
  { label: 'Solar Water Heating', to: '/services/solar-water-heating' },
  { label: 'Battery Backup & Hybrid', to: '/services/battery-backup' },
  { label: 'Operations & Maintenance', to: '/services/operations-maintenance' },
  { label: 'Solar Consulting', to: '/services/solar-consulting' },
];

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms-and-conditions' },
];

/* ─── Social icon components ───────────────────────────── */
const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.546 21l4.157-.786A9.954 9.954 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
  </svg>
);

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const IconYouTube = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const IconPhone = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.22 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
  </svg>
);

const IconMail = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const IconLocation = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

/* ─── Inline SVG logo (matches Header exactly) ──────────── */
const FooterLogo = () => (
  <Link to="/" className="footer-logo" aria-label="Technosun Power homepage">
    <svg className="footer-logo-symbol" width="52" height="52" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g className="footer-petals">
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
          <ellipse key={deg} cx="50" cy="15" rx="9" ry="18" fill="#ffc947" transform={deg ? `rotate(${deg} 50 50)` : undefined} opacity="0.92" />
        ))}
      </g>
      <circle cx="50" cy="50" r="21" fill="#0f7b58" />
      <circle cx="50" cy="50" r="13" fill="#111111" opacity="0.88" />
      <path d="M50 63 C50 73 44 82 35 88" fill="none" stroke="#0f7b58" strokeWidth="7" strokeLinecap="round" />
      <path d="M49 74 C38 72 30 66 25 58" fill="none" stroke="#0f7b58" strokeWidth="5" strokeLinecap="round" />
    </svg>
    <div className="footer-logo-text">
      <span className="footer-logo-name">
        <span className="footer-logo-techno">technosun</span>
        <span className="footer-logo-power">Power</span>
      </span>
      <span className="footer-logo-tagline">Clean energy, installed right</span>
    </div>
  </Link>
);

/* ─── Certification badges ───────────────────────────────── */
const certifications = [
  { label: 'MNRE Empanelled', icon: '⚡' },
  { label: 'ISO 9001:2015', icon: '✓' },
  { label: '12+ Years Experience', icon: '★' },
  { label: '3.8 MW+ Installed', icon: '☀' },
];

/* ─── Main Footer component ──────────────────────────────── */
const Footer = () => (
  <footer className="footer" role="contentinfo">

    {/* Luminous top divider */}
    <div className="footer-glow-bar" aria-hidden="true" />

    <div className="footer-inner">

      {/* ── COL 1: Brand + about ── */}
      <div className="footer-col footer-col--brand">
        <FooterLogo />

        <p className="footer-about">
          Technosun Power designs, installs, and maintains rooftop, commercial, hybrid, water heating,
          and solar consulting solutions — delivered with clear engineering and dependable support.
        </p>

        {/* Social icons */}
        <nav className="footer-social" aria-label="Social media">
          <a
            id="footer-whatsapp-link"
            href="https://wa.me/919876543210"
            className="footer-social-link"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <IconWhatsApp />
          </a>
          <a
            id="footer-linkedin-link"
            href="https://linkedin.com/company/technosunpower"
            className="footer-social-link"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <IconLinkedIn />
          </a>
          <a
            id="footer-instagram-link"
            href="https://instagram.com/technosunpower"
            className="footer-social-link"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <IconInstagram />
          </a>
          <a
            id="footer-youtube-link"
            href="https://youtube.com/@technosunpower"
            className="footer-social-link"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
          >
            <IconYouTube />
          </a>
        </nav>
      </div>

      {/* ── COL 2: Company links ── */}
      <div className="footer-col">
        <h3 className="footer-heading">Company</h3>
        <nav aria-label="Company pages">
          <ul className="footer-link-list">
            {companyLinks.map((link) => (
              <li key={link.to}>
                <Link id={`footer-company-${link.label.toLowerCase().replace(/\s+/g, '-')}`} to={link.to} className="footer-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* ── COL 3: Services links ── */}
      <div className="footer-col">
        <h3 className="footer-heading">Services</h3>
        <nav aria-label="Service pages">
          <ul className="footer-link-list">
            {serviceLinks.map((link) => (
              <li key={link.to}>
                <Link id={`footer-service-${link.label.toLowerCase().replace(/[\s&]+/g, '-')}`} to={link.to} className="footer-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* ── COL 4: Contact ── */}
      <div className="footer-col footer-col--contact">
        <h3 className="footer-heading">Get in touch</h3>

        <ul className="footer-contact-list">
          <li>
            <a id="footer-phone-link" href="tel:+919211247248" className="footer-contact-item">
              <span className="footer-contact-icon"><IconPhone /></span>
              <span>+91 92112 47248</span>
            </a>
          </li>
          <li>
            <a id="footer-email-link" href="mailto:technosunpower@gmail.com" className="footer-contact-item">
              <span className="footer-contact-icon"><IconMail /></span>
              <span>technosunpower@gmail.com</span>
            </a>
          </li>
          <li>
            <span className="footer-contact-item footer-contact-item--address">
              <span className="footer-contact-icon"><IconLocation /></span>
              <span>L2 Cloud 9, Sector 1,<br />Vaishali, Ghaziabad</span>
            </span>
          </li>
        </ul>

        <Link id="footer-cta-link" to="/contact" className="footer-cta">
          Book a free site audit →
        </Link>
      </div>
    </div>

    {/* ── Certification strip ── */}
    <div className="footer-cert-strip" aria-label="Certifications and achievements">
      {certifications.map((cert) => (
        <div key={cert.label} className="footer-cert">
          <span className="footer-cert-icon">{cert.icon}</span>
          <span className="footer-cert-label">{cert.label}</span>
        </div>
      ))}
    </div>

    {/* ── Bottom bar ── */}
    <div className="footer-bottom">
      <span className="footer-copy">
        © {new Date().getFullYear()} Technosun Power Pvt. Ltd. All rights reserved.
      </span>
      <nav className="footer-legal" aria-label="Legal links">
        {legalLinks.map((link) => (
          <Link key={link.to} to={link.to} className="footer-legal-link">
            {link.label}
          </Link>
        ))}
      </nav>
      <span className="footer-built">
        Built for efficient solar adoption.
      </span>
    </div>
  </footer>
);

export default Footer;
