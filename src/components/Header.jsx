import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { images } from '../data/siteData.js';

const navLinks = [
  {
    path: '/',
    label: 'Home',
    megaMenu: {
      links: [
        { path: '/', label: 'Hero' },
        { path: '/about', label: 'Who we are' },
        { path: '/services', label: 'Our services' },
        { path: '/projects', label: 'Projects' },
        { path: '/sustainability', label: 'Sustainability' },
        { path: '/contact', label: 'Free audit' },
      ],
      featureTitle: 'Discover',
      features: [
        { image: images.hero, title: 'Powering clean rooftops', path: '/' },
        { image: images.engineers, title: 'Site-ready solar planning', path: '/contact' },
      ],
    },
  },
  {
    path: '/about',
    label: 'About',
    megaMenu: {
      links: [
        { path: '/about', label: 'Our company' },
        { path: '/about', label: 'Engineering approach' },
        { path: '/about', label: 'Safety standards' },
        { path: '/about', label: 'Aftercare model' },
      ],
      featureTitle: 'Company',
      features: [
        { image: images.engineers, title: 'Practical solar engineering', path: '/about' },
        { image: images.rooftop, title: 'Built around dependable aftercare', path: '/about' },
      ],
    },
  },
  {
    path: '/services',
    label: 'Services',
    megaMenu: {
      links: [
        { path: '/services/residential-solar', label: 'Residential solar' },
        { path: '/services/commercial-industrial-solar', label: 'Commercial and industrial' },
        { path: '/services/solar-water-heating', label: 'Solar water heating' },
        { path: '/services/battery-backup', label: 'Battery backup' },
        { path: '/services/operations-maintenance', label: 'Operations and maintenance' },
      ],
      featureTitle: 'Expertise',
      features: [
        { image: images.commercial, title: 'Rooftop and commercial systems', path: '/services' },
        { image: images.battery, title: 'Hybrid power and backup', path: '/services/battery-backup' },
      ],
    },
  },
  {
    path: '/projects',
    label: 'Projects',
    megaMenu: {
      links: [
        { path: '/projects', label: 'View all' },
        { path: '/projects', label: 'Homes' },
        { path: '/projects', label: 'Commercial sites' },
        { path: '/projects', label: 'Farms' },
      ],
      featureTitle: 'Work',
      features: [
        { image: images.field, title: 'Installed solar capacity', path: '/projects' },
        { image: images.maintenance, title: 'Performance-focused layouts', path: '/projects' },
      ],
    },
  },
  {
    path: '/sustainability',
    label: 'Sustainability',
    megaMenu: {
      links: [
        { path: '/sustainability', label: 'Cleaner energy' },
        { path: '/sustainability', label: 'Lower bills' },
        { path: '/sustainability', label: 'Long-term value' },
        { path: '/sustainability', label: 'Responsible systems' },
      ],
      featureTitle: 'Impact',
      features: [
        { image: images.field, title: 'Cleaner power for everyday loads', path: '/sustainability' },
        { image: images.rooftop, title: 'Designed for long service life', path: '/sustainability' },
      ],
    },
  },
  {
    path: '/contact',
    label: 'Contact',
    megaMenu: {
      links: [
        { path: '/contact', label: 'Book audit' },
        { path: '/contact', label: 'Request proposal' },
        { path: '/contact', label: 'Service support' },
        { path: '/contact', label: 'Visit planning' },
      ],
      featureTitle: 'Start',
      features: [
        { image: images.engineers, title: 'Start with a site visit', path: '/contact' },
        { image: images.home, title: 'Get a practical solar recommendation', path: '/contact' },
      ],
    },
  },
];

const isActivePath = (pathname, path) => {
  if (path === '/') return pathname === '/';
  return pathname === path || pathname.startsWith(`${path}/`);
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <Link to="/" className="logo" aria-label="Technosun Power home">
            <svg className="logo-symbol sunflower-logo" width="44" height="44" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <g className="sunflower-petals">
                <ellipse cx="50" cy="15" rx="9" ry="18" fill="var(--secondary)" />
                <ellipse cx="50" cy="15" rx="9" ry="18" fill="var(--secondary)" transform="rotate(30 50 50)" />
                <ellipse cx="50" cy="15" rx="9" ry="18" fill="var(--secondary)" transform="rotate(60 50 50)" />
                <ellipse cx="50" cy="15" rx="9" ry="18" fill="var(--secondary)" transform="rotate(90 50 50)" />
                <ellipse cx="50" cy="15" rx="9" ry="18" fill="var(--secondary)" transform="rotate(120 50 50)" />
                <ellipse cx="50" cy="15" rx="9" ry="18" fill="var(--secondary)" transform="rotate(150 50 50)" />
                <ellipse cx="50" cy="15" rx="9" ry="18" fill="var(--secondary)" transform="rotate(180 50 50)" />
                <ellipse cx="50" cy="15" rx="9" ry="18" fill="var(--secondary)" transform="rotate(210 50 50)" />
                <ellipse cx="50" cy="15" rx="9" ry="18" fill="var(--secondary)" transform="rotate(240 50 50)" />
                <ellipse cx="50" cy="15" rx="9" ry="18" fill="var(--secondary)" transform="rotate(270 50 50)" />
                <ellipse cx="50" cy="15" rx="9" ry="18" fill="var(--secondary)" transform="rotate(300 50 50)" />
                <ellipse cx="50" cy="15" rx="9" ry="18" fill="var(--secondary)" transform="rotate(330 50 50)" />
              </g>
              <circle cx="50" cy="50" r="21" fill="var(--primary)" />
              <circle cx="50" cy="50" r="13" fill="var(--text)" opacity="0.9" />
              <path d="M50 63 C50 73 44 82 35 88" fill="none" stroke="var(--primary)" strokeWidth="7" strokeLinecap="round" />
              <path d="M49 74 C38 72 30 66 25 58" fill="none" stroke="var(--primary)" strokeWidth="5" strokeLinecap="round" />
            </svg>
            <svg className="logo-wordmark" viewBox="0 0 260 58" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="technosun Power">
              <defs>
                <linearGradient id="wordmarkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--primary)" />
                  <stop offset="52%" stopColor="var(--secondary)" />
                  <stop offset="100%" stopColor="var(--primary)" />
                </linearGradient>
              </defs>
              <text className="wordmark-main" x="0" y="35">technosun</text>
              <text className="wordmark-power" x="154" y="35">Power</text>
              <path className="wordmark-sunline" d="M4 45 C58 55 120 55 178 44 C203 39 226 39 252 45" />
            </svg>
          </Link>

          <nav className="nav-desktop" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="nav-item-wrapper"
                onMouseEnter={() => setActiveMenu(link.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  to={link.path}
                  className={`nav-link ${isActivePath(location.pathname, link.path) ? 'active' : ''}`}
                  onClick={() => setActiveMenu(null)}
                >
                  {link.label}
                </Link>
                <div className={`mega-menu${activeMenu === link.label ? ' mega-menu--open' : ''}`}>
                  <div className="mega-menu-inner">
                    <div className="mega-menu-links">
                      {link.megaMenu.links.map((sublink) => (
                        <Link key={`${link.label}-${sublink.label}`} to={sublink.path} className="mega-menu-link" onClick={() => setActiveMenu(null)}>
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                    <div className="mega-menu-features">
                      <h4 className="mega-menu-feature-title">{link.megaMenu.featureTitle}</h4>
                      <div className="mega-menu-features-grid">
                        {link.megaMenu.features.map((feature) => (
                          <Link to={feature.path} key={feature.title} className="mega-menu-feature-card" onClick={() => setActiveMenu(null)}>
                            <span className="mega-menu-feature-media" style={{ backgroundImage: `url(${feature.image})` }} />
                            <span className="mega-menu-feature-caption">{feature.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </nav>

          <button
            className={`hamburger ${isMobileOpen ? 'open' : ''}`}
            type="button"
            onClick={() => setIsMobileOpen((value) => !value)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile nav OUTSIDE header so it's not clipped by header stacking context */}
      {isMobileOpen && <div className="nav-mobile-overlay" onClick={() => setIsMobileOpen(false)} />}
      <nav className={`nav-mobile ${isMobileOpen ? 'open' : ''}`} aria-label="Mobile navigation">
        <div className="nav-mobile-inner">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-mobile-link ${isActivePath(location.pathname, link.path) ? 'active' : ''}`}
              onClick={() => setIsMobileOpen(false)}
            >
              <span className="nav-mobile-label">{link.label}</span>
              <svg className="nav-mobile-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </Link>
          ))}
        </div>
        <div className="nav-mobile-footer">
          <Link to="/contact" className="nav-mobile-cta" onClick={() => setIsMobileOpen(false)}>
            Get free audit →
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
