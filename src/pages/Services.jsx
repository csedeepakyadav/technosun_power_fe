import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { images, processSteps, services, stats } from '../data/siteData.js';

const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('sd-visible'); io.unobserve(el); } },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
};

const Reveal = ({ children, className = '', delay = 0 }) => {
  const ref = useReveal();
  return (
    <div ref={ref} className={`sd-reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
};

const WHY_FEATURES = [
  { icon: '📐', title: 'Site-specific design', text: 'No packages — every proposal is built from your roof data, load profile, and budget.' },
  { icon: '🔒', title: 'Electrical safety first', text: 'MCB, earthing, surge protection, and cable management designed to standard.' },
  { icon: '📊', title: 'Generation monitoring', text: 'App-based tracking so you see output, savings, and alerts in real time.' },
  { icon: '🛠️', title: 'Long-term care', text: 'Annual O&M plans that protect your generation over the 25-year panel life.' },
];

const Services = () => (
  <>
    <SEO
      title="Solar Energy Services – Residential, Commercial & Industrial"
      description="Technosun Power offers on-grid, off-grid & hybrid solar systems, solar water pumps, and AMC services across Delhi, NCR, Ghaziabad, Noida, Greater Noida, Gurugram & Faridabad."
      canonical="/services"
    />
    {/* ═══ 1. CINEMATIC HERO ═══ */}
    <section className="srv-hero">
      <div className="srv-hero-bg" style={{ backgroundImage: `url(${images.commercial})` }} />
      <div className="srv-hero-overlay" />
      <div className="srv-hero-shape srv-hero-shape--1" />
      <div className="srv-hero-shape srv-hero-shape--2" />
      <div className="srv-hero-shape srv-hero-shape--3" />
      <div className="srv-hero-content">
        <Reveal>
          <span className="sd-hero-badge">Services</span>
          <h1 className="srv-hero-title">Solar solutions for every site, scale, and goal.</h1>
          <p className="srv-hero-sub">From a single rooftop to a 250 kW industrial array — explore every service we offer and find the right fit for your energy needs.</p>
          <div className="srv-hero-actions">
            <Link className="button primary" to="/contact">Book a free audit</Link>
            <a className="button ghost" href="#srv-grid">Explore services</a>
          </div>
        </Reveal>
      </div>
      <svg className="srv-hero-wave" viewBox="0 0 1440 72" preserveAspectRatio="none">
        <path d="M0,36 C360,72 720,0 1080,40 C1260,60 1380,30 1440,20 L1440,72 L0,72 Z" fill="var(--paper)" />
      </svg>
    </section>

    {/* ═══ 2. SERVICE CARDS GRID ═══ */}
    <section className="section srv-grid-section" id="srv-grid">
      <div className="srv-dot-pattern" />
      <Reveal>
        <SectionHeader
          eyebrow="Choose a service"
          title="A complete solar partner for new systems and existing assets"
          text="Explore the service areas below, then request an audit with your site type and monthly energy bill."
        />
      </Reveal>
      <div className="srv-cards-grid">
        {services.map((service, i) => (
          <Reveal key={service.slug} delay={i * 65}>
            <Link className="srv-card" to={`/services/${service.slug}`}>
              <div className="srv-card-img-wrap">
                <img src={service.image} alt={service.title} />
                <div className="srv-card-img-overlay" />
                <span className="srv-card-eyebrow">{service.eyebrow}</span>
              </div>
              <div className="srv-card-body">
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <span className="srv-card-cta">
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <div className="srv-card-glow" />
            </Link>
          </Reveal>
        ))}
      </div>
    </section>

    {/* ═══ 3. WHY TECHNOSUN — split section ═══ */}
    <section className="section srv-why">
      <Reveal className="srv-why-img-wrap">
        <img src={images.engineers} alt="Solar engineers on site" className="srv-why-img" />
        <div className="srv-why-img-badge">
          <strong>12+</strong>
          <span>Years of solar execution</span>
        </div>
        <div className="srv-why-img-shape" />
      </Reveal>
      <Reveal className="srv-why-text" delay={120}>
        <SectionHeader eyebrow="Why Technosun Power" title="Practical solar engineering from audit to aftercare" />
        <p className="srv-why-desc">We focus on correct sizing, safe structures, generation visibility, and serviceable layouts — systems that are easier to inspect, maintain, and trust over 25 years.</p>
        <div className="srv-why-features">
          {WHY_FEATURES.map((f) => (
            <div className="srv-why-feature" key={f.title}>
              <span className="srv-why-feature-icon">{f.icon}</span>
              <div>
                <strong>{f.title}</strong>
                <p>{f.text}</p>
              </div>
            </div>
          ))}
        </div>
        <Link className="button primary" to="/contact" style={{ marginTop: '28px', display: 'inline-flex' }}>Start with a site visit</Link>
      </Reveal>
    </section>

    {/* ═══ 4. STATS BAND ═══ */}
    <section className="srv-stats-band">
      <div className="srv-stats-bg" style={{ backgroundImage: `url(${images.field})` }} />
      <div className="srv-stats-overlay" />
      <div className="srv-stats-inner">
        {stats.map((s, i) => (
          <Reveal key={s.label} className="srv-stat" delay={i * 100}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>

    {/* ═══ 5. PROCESS STEPS ═══ */}
    <section className="section warm srv-process-section">
      <Reveal>
        <SectionHeader eyebrow="How it works" title="A clean path from energy bill to commissioned system" align="center" />
      </Reveal>
      <div className="srv-process-steps">
        <div className="srv-process-connector" />
        {processSteps.map((step, i) => (
          <Reveal key={step.title} className="srv-process-step" delay={i * 110}>
            <div className="srv-process-num">
              <span>{String(i + 1).padStart(2, '0')}</span>
            </div>
            <div className="srv-process-card">
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* ═══ 6. CTA BAND ═══ */}
    <section className="srv-cta-band">
      <div className="srv-cta-shape srv-cta-shape--1" />
      <div className="srv-cta-shape srv-cta-shape--2" />
      <Reveal className="srv-cta-inner">
        <span className="eyebrow light">Get started today</span>
        <h2>Ready to cut your electricity bill with solar?</h2>
        <p>Share your latest electricity bill and we'll send you a practical recommendation within 48 hours — no commitment required.</p>
        <div className="srv-cta-actions">
          <Link className="button primary" to="/contact">Book a free site visit</Link>
          <Link className="button ghost" to="/projects">See project examples</Link>
        </div>
      </Reveal>
    </section>
  </>
);

export default Services;
