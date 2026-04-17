import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

/* ─── Slide data ─────────────────────────────────────────────────────────────
   Each slide has a unique background, eyebrow, headline, description,
   primary CTA, and a set of short detail lines shown in the right navigator.
   ─────────────────────────────────────────────────────────────────────────── */
const SLIDES = [
  {
    id: 'residential',
    bg: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1800&q=85',
    eyebrow: 'Residential Solar',
    headline: 'Clean rooftop energy for your home.',
    sub: 'Site-specific design, safe installation, and net metering support — built around your family\'s actual energy use.',
    cta: { label: 'Request free audit', to: '/contact' },
    ghost: { label: 'Explore services', to: '/services' },
    details: [
      'On-grid & hybrid systems',
      'Net metering guidance',
      'Clean cable routing',
      'Performance monitoring',
    ],
    accent: '#ffc947',
  },
  {
    id: 'commercial',
    bg: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1800&q=85',
    eyebrow: 'Commercial & Industrial',
    headline: 'Solar that cuts your operating costs.',
    sub: 'High-capacity rooftop and ground-mount systems with generation monitoring, load profiling, and CAPEX / OPEX models.',
    cta: { label: 'Get a proposal', to: '/contact' },
    ghost: { label: 'View projects', to: '/projects' },
    details: [
      'Load profile analysis',
      'RCC & shed mounting',
      'Inverter-level monitoring',
      'OPEX & CAPEX guidance',
    ],
    accent: '#5de3a3',
  },
  {
    id: 'maintenance',
    bg: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=1800&q=85',
    eyebrow: 'Operations & Maintenance',
    headline: 'Keep your solar system producing.',
    sub: 'Preventive maintenance, thermal inspection, panel cleaning, and inverter health checks that protect your lifetime generation.',
    cta: { label: 'Book a service visit', to: '/contact' },
    ghost: { label: 'Learn more', to: '/services/operations-maintenance' },
    details: [
      'Panel cleaning schedules',
      'Thermal imaging checks',
      'Inverter health reports',
      '24/7 remote monitoring',
    ],
    accent: '#7eb8ff',
  },
];

const INTERVAL_MS = 6000;

/* ─── Progress bar for the active slide ────────────────────────────────────── */
const ProgressBar = ({ active, paused, duration }) => (
  <div className="hc-progress-track" aria-hidden="true">
    <div
      key={`${active}-${paused}`}
      className="hc-progress-fill"
      style={{
        animationDuration: `${duration}ms`,
        animationPlayState: paused ? 'paused' : 'running',
      }}
    />
  </div>
);

/* ─── Main component ─────────────────────────────────────────────────────── */
const HeroCarousel = () => {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(null);
  const [paused, setPaused] = useState(false);
  const [entering, setEntering] = useState(true);
  const timerRef = useRef(null);
  const sectionRef = useRef(null);

  /* Advance to a specific slide */
  const goTo = useCallback(
    (index) => {
      if (index === active) return;
      setPrev(active);
      setActive(index);
      setEntering(true);
      // Clear the "entering" state after the animation completes
      setTimeout(() => setEntering(false), 900);
    },
    [active],
  );

  const goNext = useCallback(() => goTo((active + 1) % SLIDES.length), [active, goTo]);
  const goPrev = useCallback(
    () => goTo((active - 1 + SLIDES.length) % SLIDES.length),
    [active, goTo],
  );

  /* Auto-advance */
  useEffect(() => {
    if (paused) return;
    timerRef.current = window.setTimeout(goNext, INTERVAL_MS);
    return () => window.clearTimeout(timerRef.current);
  }, [active, paused, goNext]);

  /* Keyboard navigation */
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev]);

  /* Pause on hover / focus-within */
  const handleMouseEnter = () => setPaused(true);
  const handleMouseLeave = () => setPaused(false);

  const slide = SLIDES[active];

  return (
    <section
      ref={sectionRef}
      className="hc-root"
      aria-label="Hero image carousel"
      aria-roledescription="carousel"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Background image layers (fade crossfade) ── */}
      <div className="hc-bg-layer" aria-hidden="true">
        {SLIDES.map((s, i) => (
          <div
            key={s.id}
            className={`hc-bg ${i === active ? 'hc-bg--active' : ''} ${i === prev ? 'hc-bg--prev' : ''}`}
            style={{ backgroundImage: `url(${s.bg})` }}
          />
        ))}
        {/* Dark gradient overlay — heavy left, lighter right */}
        <div className="hc-bg-overlay" />
      </div>

      {/* ── Main layout grid ── */}
      <div className="hc-layout">
        {/* Left content panel */}
        <div className="hc-content" aria-live="polite" aria-atomic="true">
          <span
            key={`eyebrow-${active}`}
            className="hc-eyebrow"
            style={{ '--accent': slide.accent }}
          >
            {slide.eyebrow}
          </span>

          <h1 key={`h1-${active}`} className="hc-headline">
            {slide.headline}
          </h1>

          <p key={`sub-${active}`} className="hc-sub">
            {slide.sub}
          </p>

          <div key={`actions-${active}`} className="hc-actions">
            <Link
              id={`hc-cta-${slide.id}`}
              to={slide.cta.to}
              className="hc-btn-primary"
              style={{ '--accent': slide.accent }}
            >
              {slide.cta.label}
            </Link>
            <Link
              id={`hc-ghost-${slide.id}`}
              to={slide.ghost.to}
              className="hc-btn-ghost"
            >
              {slide.ghost.label}
            </Link>
          </div>

          {/* Slide counter */}
          <div className="hc-counter" aria-hidden="true">
            <span className="hc-counter-active">
              {String(active + 1).padStart(2, '0')}
            </span>
            <span className="hc-counter-sep" />
            <span className="hc-counter-total">
              {String(SLIDES.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Right navigator panel */}
        <nav
          className="hc-nav"
          aria-label="Carousel slide navigation"
        >
          <ul className="hc-nav-list">
            {SLIDES.map((s, i) => {
              const isActive = i === active;
              return (
                <li key={s.id} className="hc-nav-item">
                  <button
                    id={`hc-nav-btn-${s.id}`}
                    className={`hc-nav-btn ${isActive ? 'hc-nav-btn--active' : ''}`}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-current={isActive ? 'true' : undefined}
                    aria-label={`Go to slide ${i + 1}: ${s.eyebrow}`}
                    style={{ '--accent': s.accent }}
                  >
                    {/* Active indicator line */}
                    <span className="hc-nav-line" aria-hidden="true" />

                    <span className="hc-nav-inner">
                      {/* Slide number */}
                      <span className="hc-nav-num">
                        {String(i + 1).padStart(2, '0')}
                      </span>

                      {/* Text block */}
                      <span className="hc-nav-text">
                        <span className="hc-nav-title">{s.eyebrow}</span>
                        {/* Detail lines — only shown for active */}
                        <span className="hc-nav-details" aria-hidden={!isActive}>
                          {s.details.map((d) => (
                            <span key={d} className="hc-nav-detail-line">
                              {d}
                            </span>
                          ))}
                        </span>
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* ── Bottom strip: progress + arrow controls ── */}
      <div className="hc-controls" aria-label="Carousel controls">
        <ProgressBar active={active} paused={paused} duration={INTERVAL_MS} />

        <div className="hc-arrows">
          <button
            id="hc-prev-btn"
            className="hc-arrow"
            type="button"
            onClick={goPrev}
            aria-label="Previous slide"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            id="hc-next-btn"
            className="hc-arrow"
            type="button"
            onClick={goNext}
            aria-label="Next slide"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
