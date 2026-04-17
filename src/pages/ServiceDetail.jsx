import { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import ContactForm from '../components/ContactForm.jsx';
import SEO from '../components/SEO.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { services } from '../data/siteData.js';

/* Intersection Observer hook for scroll-reveal */
const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('sd-visible'); io.unobserve(el); } },
      { threshold: 0.15 }
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

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug) || services[0];

  /* scroll to top on slug change */
  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  return (
    <>
      <SEO
        title={`${service.title} – Solar Services Delhi, NCR, Ghaziabad`}
        description={service.summary}
        canonical={`/services/${service.slug}`}
      />
      {/* ═══ 1. CINEMATIC HERO ═══ */}
      <section className="sd-hero">
        <div className="sd-hero-bg" style={{ backgroundImage: `url(${service.heroImage})` }} />
        <div className="sd-hero-overlay" />
        {/* decorative floating shapes */}
        <div className="sd-hero-shape sd-hero-shape--1" />
        <div className="sd-hero-shape sd-hero-shape--2" />
        <div className="sd-hero-shape sd-hero-shape--3" />
        <div className="sd-hero-content">
          <span className="sd-hero-badge">{service.eyebrow}</span>
          <h1 className="sd-hero-title">{service.title}</h1>
          <p className="sd-hero-sub">{service.summary}</p>
          <div className="sd-hero-actions">
            <Link className="button primary" to="/contact">Get a free quote</Link>
            <a className="button ghost" href="#sd-process">See how it works</a>
          </div>
        </div>
        {/* bottom wave divider */}
        <svg className="sd-hero-wave" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,60 C360,100 720,20 1080,60 C1260,80 1380,50 1440,40 L1440,100 L0,100 Z" fill="var(--paper)" />
        </svg>
      </section>

      {/* ═══ 2. OVERVIEW — split image + text ═══ */}
      <section className="section sd-split">
        <Reveal className="sd-split-img-wrap">
          <img src={service.image} alt={service.title} className="sd-split-img" />
          <div className="sd-split-img-accent" />
        </Reveal>
        <Reveal className="sd-split-text" delay={120}>
          <SectionHeader eyebrow="Overview" title={`Why choose ${service.title}?`} />
          <p className="sd-split-desc">{service.description}</p>
          <ul className="sd-check-list">
            {service.highlights.map((h) => (
              <li key={h}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="var(--primary)" opacity=".12"/><path d="M6 10.5l2.5 2.5 5.5-5.5" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ═══ 3. BENEFITS COUNTER STRIP ═══ */}
      {service.benefits?.length > 0 && (
        <section className="sd-benefits">
          <div className="sd-benefits-bg" style={{ backgroundImage: `url(${service.gallery?.[1] || service.heroImage})` }} />
          <div className="sd-benefits-overlay" />
          <div className="sd-benefits-inner">
            {service.benefits.map((b, i) => (
              <Reveal key={b.label} className="sd-benefit" delay={i * 100}>
                <strong>{b.value}</strong>
                <span>{b.label}</span>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ═══ 4. FEATURES — bento grid ═══ */}
      {service.features?.length > 0 && (
        <section className="section sd-features-section">
          {/* decorative dot grid */}
          <div className="sd-dot-pattern" />
          <Reveal>
            <SectionHeader eyebrow="What's included" title="Features that matter" align="center" />
          </Reveal>
          <div className="sd-bento">
            {service.features.map((f, i) => (
              <Reveal key={f.title} className={`sd-bento-card sd-bento-card--${i}`} delay={i * 80}>
                <span className="sd-bento-icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
                <div className="sd-bento-glow" />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ═══ 5. PROCESS — timeline ═══ */}
      {service.process?.length > 0 && (
        <section className="section warm" id="sd-process">
          <Reveal>
            <SectionHeader eyebrow="How it works" title="Our proven process" align="center" />
          </Reveal>
          <div className="sd-timeline">
            <div className="sd-timeline-line" />
            {service.process.map((p, i) => (
              <Reveal key={p.step} className={`sd-timeline-item ${i % 2 === 0 ? 'sd-timeline-item--left' : 'sd-timeline-item--right'}`} delay={i * 120}>
                <div className="sd-timeline-dot">
                  <span>{p.step}</span>
                </div>
                <div className="sd-timeline-card">
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ═══ 6. GALLERY — masonry-style ═══ */}
      {service.gallery?.length > 0 && (
        <section className="section sd-gallery-section">
          <Reveal>
            <SectionHeader eyebrow="Our work" title="Project gallery" align="center" />
          </Reveal>
          <div className="sd-masonry">
            {service.gallery.map((src, i) => (
              <Reveal key={i} className={`sd-masonry-item sd-masonry-item--${i}`} delay={i * 100}>
                <img src={src} alt={`${service.title} project ${i + 1}`} loading="lazy" />
                <div className="sd-masonry-overlay">
                  <span>{service.title}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ═══ 7. FAQ + CONTACT ═══ */}
      <section className="section sd-faq-section">
        <div className="sd-faq-shape" />
        <div className="faq-contact">
          <Reveal>
            <SectionHeader eyebrow="FAQ" title="Common questions" />
            <div className="faq-list">
              {service.faq?.map((item) => (
                <details key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* ═══ 8. CTA — gradient band ═══ */}
      <section className="sd-cta">
        <div className="sd-cta-shape sd-cta-shape--1" />
        <div className="sd-cta-shape sd-cta-shape--2" />
        <Reveal className="sd-cta-inner">
          <h2>Ready to start your {service.title} project?</h2>
          <p>Get a free site assessment and customized proposal from our engineers.</p>
          <div className="sd-cta-actions">
            <Link className="button primary" to="/contact">Request free audit</Link>
            <Link className="button ghost" to="/services">Explore all services</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default ServiceDetail;
