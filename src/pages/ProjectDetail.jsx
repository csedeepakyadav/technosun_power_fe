import { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import ContactForm from '../components/ContactForm.jsx';
import SEO from '../components/SEO.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { projects } from '../data/siteData.js';

/* ── Scroll-reveal hook (reused pattern from ServiceDetail) ── */
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

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug) || projects[0];

  /* Related projects — up to 3 others */
  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  return (
    <>
      <SEO
        title={`${project.title} – ${project.type} Solar Project in ${project.location}`}
        description={project.description}
        canonical={`/projects/${project.slug}`}
        image={project.heroImage || project.image}
      />
      {/* ═══ 1. CINEMATIC HERO ═══ */}
      <section className="pd-hero">
        <div className="pd-hero-bg" style={{ backgroundImage: `url(${project.heroImage || project.image})` }} />
        <div className="pd-hero-overlay" />
        <div className="pd-hero-shape pd-hero-shape--1" />
        <div className="pd-hero-shape pd-hero-shape--2" />
        <div className="pd-hero-shape pd-hero-shape--3" />
        <div className="pd-hero-content">
          <Reveal>
            <span className="sd-hero-badge">Case Study</span>
            <div className="pd-hero-meta">
              <span className="pd-hero-type">{project.type}</span>
              <span className="pd-hero-sep">·</span>
              <span className="pd-hero-location">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 1C4.79 1 3 2.79 3 5c0 3 4 8 4 8s4-5 4-8c0-2.21-1.79-4-4-4Zm0 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="currentColor" opacity=".8"/>
                </svg>
                {project.location}
              </span>
            </div>
            <h1 className="pd-hero-title">{project.title}</h1>
            <p className="pd-hero-sub">{project.result}</p>
            <div className="pd-hero-actions">
              <Link className="button primary" to="/contact">Get a similar system</Link>
              <a className="button ghost" href="#pd-specs">See technical specs</a>
            </div>
          </Reveal>
        </div>
        <svg className="pd-hero-wave" viewBox="0 0 1440 72" preserveAspectRatio="none">
          <path d="M0,36 C480,72 960,0 1440,36 L1440,72 L0,72 Z" fill="var(--paper)" />
        </svg>
      </section>

      {/* ═══ 2. OVERVIEW — split image + description ═══ */}
      <section className="section pd-split">
        <Reveal className="pd-split-img-wrap">
          <img src={project.image} alt={project.title} className="pd-split-img" />
          <div className="pd-split-img-accent" />
          <div className="pd-split-img-tag">
            <strong>{project.capacity}</strong>
            <span>Installed</span>
          </div>
        </Reveal>
        <Reveal className="pd-split-text" delay={120}>
          <SectionHeader eyebrow="Project overview" title={`About this project`} />
          <p className="pd-split-desc">{project.description}</p>
          <ul className="sd-check-list">
            {project.highlights.map((h) => (
              <li key={h}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill="var(--primary)" opacity=".12" />
                  <path d="M6 10.5l2.5 2.5 5.5-5.5" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ═══ 3. KEY METRICS BAND ═══ */}
      <section className="pd-metrics">
        <div className="pd-metrics-bg" style={{ backgroundImage: `url(${project.gallery?.[2] || project.image})` }} />
        <div className="pd-metrics-overlay" />
        <div className="pd-metrics-inner">
          {project.metrics.map((m, i) => (
            <Reveal key={m.label} className="pd-metric" delay={i * 100}>
              <strong>{m.value}</strong>
              <span>{m.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══ 4. TECHNICAL SPECS ═══ */}
      <section className="section pd-specs-section" id="pd-specs">
        <div className="sd-dot-pattern" />
        <Reveal>
          <SectionHeader eyebrow="Technical details" title="What went into this installation" align="center" />
        </Reveal>
        <div className="pd-specs-grid">
          {project.specs.map((s, i) => (
            <Reveal key={s.title} className="pd-spec-card" delay={i * 80}>
              <span className="pd-spec-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <div className="pd-spec-glow" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══ 5. GALLERY — masonry ═══ */}
      {project.gallery?.length > 0 && (
        <section className="section pd-gallery-section">
          <Reveal>
            <SectionHeader eyebrow="Site photos" title="Project gallery" align="center" />
          </Reveal>
          <div className="pd-masonry">
            {project.gallery.map((src, i) => (
              <Reveal key={i} className={`pd-masonry-item pd-masonry-item--${i}`} delay={i * 90}>
                <img src={src} alt={`${project.title} — photo ${i + 1}`} loading="lazy" />
                <div className="pd-masonry-overlay">
                  <span>{project.title}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ═══ 6. FAQ + CONTACT ═══ */}
      <section className="section pd-faq-section">
        <div className="pd-faq-shape" />
        <div className="faq-contact">
          <Reveal>
            <SectionHeader eyebrow="Questions" title="About this project" />
            <div className="faq-list">
              {project.faq?.map((item) => (
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

      {/* ═══ 7. RELATED PROJECTS ═══ */}
      {related.length > 0 && (
        <section className="section warm pd-related-section">
          <Reveal>
            <SectionHeader eyebrow="More work" title="Related project case studies" align="center" />
          </Reveal>
          <div className="pd-related-grid">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <Link className="pd-related-card" to={`/projects/${p.slug}`}>
                  <div className="pd-related-img-wrap">
                    <img src={p.image} alt={p.title} />
                    <div className="pd-related-img-overlay" />
                    <span className="pd-related-type">{p.type}</span>
                  </div>
                  <div className="pd-related-body">
                    <p className="pd-related-location">
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M7 1C4.79 1 3 2.79 3 5c0 3 4 8 4 8s4-5 4-8c0-2.21-1.79-4-4-4Zm0 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="currentColor" />
                      </svg>
                      {p.location}
                    </p>
                    <h3>{p.title}</h3>
                    <p>{p.result}</p>
                    <span className="pd-related-cta">
                      View case study
                      <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                        <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ═══ 8. CTA BAND ═══ */}
      <section className="pd-cta">
        <div className="pd-cta-shape pd-cta-shape--1" />
        <div className="pd-cta-shape pd-cta-shape--2" />
        <Reveal className="pd-cta-inner">
          <h2>Want a system like this for your site?</h2>
          <p>Share your electricity bill and location. We'll come back with a practical sizing, estimate, and savings projection within 48 hours.</p>
          <div className="pd-cta-actions">
            <Link className="button primary" to="/contact">Book a free site visit</Link>
            <Link className="button ghost" to="/projects">All projects</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default ProjectDetail;
