import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { images, projects } from '../data/siteData.js';

const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('sd-visible'); io.unobserve(el); } },
      { threshold: 0.1 }
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

const Projects = () => (
  <>
    <SEO
      title="Solar Projects – Installations Across Delhi, NCR, Ghaziabad & Noida"
      description="Explore Technosun Power's completed solar installations – residential villas, commercial offices, industrial warehouses, schools & farms across Delhi, Noida, Ghaziabad, Greater Noida, Gurugram & Faridabad."
      canonical="/projects"
    />
    {/* ── Hero ── */}
    <section className="srv-hero">
      <div className="srv-hero-bg" style={{ backgroundImage: `url(${images.field})` }} />
      <div className="srv-hero-overlay" />
      <div className="srv-hero-shape srv-hero-shape--1" />
      <div className="srv-hero-shape srv-hero-shape--2" />
      <div className="srv-hero-shape srv-hero-shape--3" />
      <div className="srv-hero-content">
        <Reveal>
          <span className="sd-hero-badge">Projects</span>
          <h1 className="srv-hero-title">Solar work across Delhi, NCR, and beyond.</h1>
          <p className="srv-hero-sub">Case studies from homes, factories, warehouses, schools, and farms — each built around the site's actual constraints and load profile.</p>
          <div className="srv-hero-actions">
            <Link className="button primary" to="/contact">Start your project</Link>
            <a className="button ghost" href="#proj-grid">Browse case studies</a>
          </div>
        </Reveal>
      </div>
      <svg className="srv-hero-wave" viewBox="0 0 1440 72" preserveAspectRatio="none">
        <path d="M0,36 C480,72 960,0 1440,36 L1440,72 L0,72 Z" fill="var(--paper)" />
      </svg>
    </section>

    {/* ── Project Grid ── */}
    <section className="section proj-grid-section" id="proj-grid">
      <div className="srv-dot-pattern" />
      <Reveal>
        <SectionHeader
          eyebrow="Selected use cases"
          title="Built around site constraints and customer priorities"
          text="Every project below started with a site survey, load analysis, and a practical financial model. Click any case study to see the full technical details."
        />
      </Reveal>
      <div className="proj-cards-grid">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 55}>
            <Link className="proj-card" to={`/projects/${project.slug}`}>
              <div className="proj-card-img-wrap">
                <img src={project.image} alt={project.title} loading={i > 2 ? 'lazy' : 'eager'} />
                <div className="proj-card-overlay" />
                <span className="proj-card-type">{project.type}</span>
              </div>
              <div className="proj-card-body">
                <p className="proj-card-location">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M7 1C4.79 1 3 2.79 3 5c0 3 4 8 4 8s4-5 4-8c0-2.21-1.79-4-4-4Zm0 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="currentColor" />
                  </svg>
                  {project.location}
                </p>
                <h3>{project.title}</h3>
                <p>{project.result}</p>
                <span className="proj-card-cta">
                  Read case study
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <div className="proj-card-glow" />
            </Link>
          </Reveal>
        ))}
      </div>
    </section>

    {/* ── CTA band ── */}
    <section className="srv-cta-band">
      <div className="srv-cta-shape srv-cta-shape--1" />
      <div className="srv-cta-shape srv-cta-shape--2" />
      <Reveal className="srv-cta-inner">
        <span className="eyebrow light">Your project next</span>
        <h2>Ready to add your site to this list?</h2>
        <p>Send us your electricity bill and location — we'll come back with a sizing, savings estimate, and site visit within 48 hours.</p>
        <div className="srv-cta-actions">
          <Link className="button primary" to="/contact">Book a free site visit</Link>
          <Link className="button ghost" to="/services">Explore our services</Link>
        </div>
      </Reveal>
    </section>
  </>
);

export default Projects;
