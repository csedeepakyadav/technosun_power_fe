import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { images } from '../data/siteData.js';

/* ── Scroll-reveal ── */
const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('sd-visible'); io.unobserve(el); } },
      { threshold: 0.11 }
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

const COMMITMENTS = [
  {
    icon: '🏗️',
    title: 'Minimal site disturbance',
    text: 'We use ballasted or clamp-based mounting wherever possible — no unnecessary excavation, drilling, or waterproofing disruption to existing roofs.',
  },
  {
    icon: '👷',
    title: 'Local installation crews',
    text: 'We work with trained local technicians in Delhi NCR, reducing travel-related emissions and keeping skilled employment in the communities we serve.',
  },
  {
    icon: '🔌',
    title: 'Hazard-free materials',
    text: 'All conduit, wiring, and insulation used in our installations meets fire safety and RoHS compliance standards — no hazardous halogens in cable sheaths.',
  },
  {
    icon: '♻️',
    title: 'End-of-life guidance',
    text: 'We advise clients on manufacturer panel take-back programmes and MNRE-approved recycling channels when their 25-year panels eventually retire.',
  },
  {
    icon: '📊',
    title: 'Generation transparency',
    text: 'Every system we install includes monitoring. Customers can see real output, verify environmental claims, and share verified data for ESG reporting.',
  },
  {
    icon: '🌱',
    title: 'Continuous improvement',
    text: 'We track our own installation carbon footprint annually and are working towards a fleet of electric service vehicles for maintenance visits by 2026.',
  },
];

const ESG_FEATURES = [
  {
    icon: '📋',
    title: 'Scope 2 emission reduction',
    text: 'Solar generation directly reduces your market-based Scope 2 emissions — the portion attributable to purchased electricity. This is the most impactful single action most facilities can take toward net-zero targets.',
  },
  {
    icon: '🏆',
    title: 'Green building certification',
    text: 'Solar systems contribute points toward IGBC Green Factory, LEED, and GRIHA certifications. We provide the generation data and technical documentation needed for certification submissions.',
  },
  {
    icon: '📜',
    title: 'I-REC certificates',
    text: 'For export-oriented businesses and multinational subsidiaries, we facilitate International Renewable Energy Certificates (I-RECs) that provide verifiable proof of renewable generation for global sustainability reports.',
  },
  {
    icon: '📈',
    title: 'ESG reporting integration',
    text: 'Our monitoring API feeds real-time generation data to your sustainability dashboard — whether that is an internal tool, CDP submission, or GRI reporting template.',
  },
];

const TIMELINE = [
  {
    phase: '0–6 months',
    icon: '🔧',
    title: 'Installation & commissioning',
    text: 'The embodied carbon of panels, inverters, and mounting materials is typically recovered within 18–24 months of generation — the carbon payback period for monocrystalline silicon panels in Indian conditions.',
  },
  {
    phase: '1–5 years',
    icon: '💰',
    title: 'Financial & carbon payback',
    text: 'Most residential systems achieve financial ROI in 3–5 years. Carbon payback is complete by year 2. From that point onward, every kWh generated is net carbon-negative versus grid supply.',
  },
  {
    phase: '5–15 years',
    icon: '📉',
    title: 'Compounding savings',
    text: 'As grid tariffs rise, the value of self-generated solar electricity grows. A 10 kW system generating 1,200 kWh/month avoids approximately 12 tonnes of CO₂ per year — compounding over the system lifetime.',
  },
  {
    phase: '15–25 years',
    icon: '🌍',
    title: 'Long-term climate contribution',
    text: 'A typical 10 kW residential system avoids 150–200 tonnes of CO₂ over 25 years — equivalent to planting 700+ trees or taking a passenger car off the road for 15 years.',
  },
];

const Sustainability = () => (
  <>
    <SEO
      title="Sustainability & Green Energy – Solar for a Cleaner Delhi NCR"
      description="Technosun Power is committed to a sustainable future. 3.8 MW+ installed, ~31,000 tonnes CO₂ offset, 900+ solar sites across Delhi NCR, Ghaziabad, Noida, Greater Noida, Gurugram & Faridabad."
      canonical="/sustainability"
    />
    {/* ═══ 1. CINEMATIC HERO ═══ */}
    <section className="sus-hero">
      <div className="sus-hero-bg" style={{ backgroundImage: `url(${images.field})` }} />
      <div className="sus-hero-overlay" />
      <div className="sus-hero-shape sus-hero-shape--1" />
      <div className="sus-hero-shape sus-hero-shape--2" />
      <div className="sus-hero-shape sus-hero-shape--3" />
      <div className="sus-hero-content">
        <Reveal>
          <span className="sd-hero-badge">Sustainability</span>
          <h1 className="sus-hero-title">Solar energy that's good for the planet and your balance sheet.</h1>
          <p className="sus-hero-sub">
            Technosun Power builds systems that reduce carbon emissions, lower energy costs, and give
            site owners clear visibility into how power is used and where it comes from.
          </p>
          <div className="sus-hero-actions">
            <Link className="button primary" to="/contact">Start your green energy journey</Link>
            <a className="button ghost" href="#sus-impact">See our impact</a>
          </div>
        </Reveal>
      </div>

      {/* Floating fact chips */}
      <div className="sus-hero-chips">
        <Reveal className="sus-chip sus-chip--1" delay={200}>
          <span className="sus-chip-val">3.8 MW+</span>
          <span className="sus-chip-label">Clean capacity installed</span>
        </Reveal>
        <Reveal className="sus-chip sus-chip--2" delay={340}>
          <span className="sus-chip-val">~31,000 t</span>
          <span className="sus-chip-label">CO₂ avoided over system lifetimes</span>
        </Reveal>
        <Reveal className="sus-chip sus-chip--3" delay={480}>
          <span className="sus-chip-val">900+</span>
          <span className="sus-chip-label">Sites audited and assessed</span>
        </Reveal>
      </div>

      <svg className="sus-hero-wave" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path d="M0,48 C360,80 720,16 1080,52 C1260,70 1380,40 1440,28 L1440,80 L0,80 Z" fill="var(--paper)" />
      </svg>
    </section>

    {/* ═══ 2. THE ENVIRONMENTAL CASE — split ═══ */}
    <section className="section sus-split" id="sus-impact">
      <Reveal className="sus-split-img-wrap">
        <img src={images.engineers} alt="Solar engineers at a rooftop installation" className="sus-split-img" />
        <div className="sus-split-img-accent" />
        <div className="sus-split-fact">
          <span className="sus-split-fact-num">0.82</span>
          <span className="sus-split-fact-unit">kg CO₂</span>
          <span className="sus-split-fact-desc">avoided per kWh generated vs Indian grid average</span>
        </div>
      </Reveal>
      <Reveal className="sus-split-text" delay={120}>
        <SectionHeader
          eyebrow="The environmental case"
          title="Every kilowatt of solar displaces fossil-fuel generation"
        />
        <p className="sus-split-desc">
          India's electricity grid runs predominantly on coal and gas. The average grid emission factor is
          0.82 kg CO₂ per kWh — meaning every unit you draw from the grid carries that carbon footprint.
          Solar generation avoids that emission entirely for every unit produced.
        </p>
        <p className="sus-split-desc">
          At the scale of a 10 kW home system generating 1,200 kWh per month, that is nearly
          <strong> 12 tonnes of CO₂ avoided every year</strong> — equivalent to planting 55 trees
          or removing a car from the road for 14 months.
        </p>
        <ul className="sd-check-list">
          <li>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="var(--primary)" opacity=".12"/><path d="M6 10.5l2.5 2.5 5.5-5.5" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span>Lower carbon footprint from daily operations and electricity use</span>
          </li>
          <li>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="var(--primary)" opacity=".12"/><path d="M6 10.5l2.5 2.5 5.5-5.5" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span>Reduced exposure to rising grid tariffs and fuel-linked surcharges</span>
          </li>
          <li>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="var(--primary)" opacity=".12"/><path d="M6 10.5l2.5 2.5 5.5-5.5" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span>Real-time generation data creates a culture of energy awareness</span>
          </li>
          <li>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="var(--primary)" opacity=".12"/><path d="M6 10.5l2.5 2.5 5.5-5.5" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span>Support for ESG targets, green building ratings, and sustainability disclosure</span>
          </li>
        </ul>
      </Reveal>
    </section>

    {/* ═══ 3. IMPACT METRICS BAND ═══ */}
    <section className="sus-metrics-band">
      <div className="sus-metrics-bg" style={{ backgroundImage: `url(${images.groundMount})` }} />
      <div className="sus-metrics-overlay" />
      <div className="sus-metrics-inner">
        {[
          { value: '3.8 MW+', label: 'Clean capacity installed across NCR & beyond' },
          { value: '~31K t', label: 'Tonnes of CO₂ avoided over projected system lifetimes' },
          { value: '145K+', label: 'Trees equivalent — based on 25-year generation projections' },
          { value: '900+', label: 'Energy audits and site assessments conducted' },
          { value: '25 yrs', label: 'Panel performance warranty on all systems we install' },
        ].map((m, i) => (
          <Reveal key={m.label} className="sus-metric" delay={i * 90}>
            <strong>{m.value}</strong>
            <span>{m.label}</span>
          </Reveal>
        ))}
      </div>
    </section>

    {/* ═══ 4. HOW WE OPERATE — commitments bento ═══ */}
    <section className="section sus-commitments-section">
      <div className="sus-dot-pattern" />
      <Reveal>
        <SectionHeader
          eyebrow="How we operate"
          title="Sustainability built into our own practices"
          text="We hold ourselves to the same standards we encourage in clients — responsible materials, local employment, and transparent reporting on what our installations actually deliver."
          align="center"
        />
      </Reveal>
      <div className="sus-commitments-grid">
        {COMMITMENTS.map((c, i) => (
          <Reveal key={c.title} className="sus-commitment-card" delay={i * 75}>
            <div className="sus-commitment-icon-wrap">
              <span className="sus-commitment-icon">{c.icon}</span>
            </div>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
            <div className="sus-commitment-glow" />
          </Reveal>
        ))}
      </div>
    </section>

    {/* ═══ 5. SOLAR FOR ESG & GREEN BUILDINGS ═══ */}
    <section className="section warm sus-esg-section">
      <div className="sus-esg-shape sus-esg-shape--1" />
      <div className="sus-esg-shape sus-esg-shape--2" />
      <div className="sus-esg-layout">
        <Reveal className="sus-esg-intro">
          <SectionHeader
            eyebrow="For commercial clients"
            title="Solar as a verifiable ESG and green building strategy"
          />
          <p className="sus-esg-desc">
            For factories, offices, schools, and institutions, solar is no longer just a cost-reduction
            play — it is a measurable, auditable contribution to sustainability targets. We help
            commercial clients connect their generation data to reporting frameworks, certification
            bodies, and investor disclosures.
          </p>
          <img
            src={images.commercial}
            alt="Commercial solar installation for ESG compliance"
            className="sus-esg-img"
          />
        </Reveal>
        <div className="sus-esg-features">
          {ESG_FEATURES.map((f, i) => (
            <Reveal key={f.title} className="sus-esg-card" delay={i * 90}>
              <span className="sus-esg-icon">{f.icon}</span>
              <div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ 6. THE 25-YEAR STORY — timeline ═══ */}
    <section className="section sus-timeline-section">
      <Reveal>
        <SectionHeader
          eyebrow="The long view"
          title="What solar delivers over a 25-year system life"
          text="Solar panels are not a short-term fix — they are 25-year infrastructure assets. Here is how the environmental and financial return compounds over a system lifetime."
          align="center"
        />
      </Reveal>
      <div className="sus-timeline">
        {TIMELINE.map((t, i) => (
          <Reveal key={t.phase} className={`sus-timeline-item sus-timeline-item--${i % 2 === 0 ? 'left' : 'right'}`} delay={i * 110}>
            <div className="sus-timeline-dot">
              <span>{t.icon}</span>
            </div>
            <div className="sus-timeline-card">
              <span className="sus-timeline-phase">{t.phase}</span>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
            </div>
          </Reveal>
        ))}
        <div className="sus-timeline-line" />
      </div>

      {/* Bottom comparison strip */}
      <Reveal className="sus-compare-strip">
        <div className="sus-compare-item">
          <span className="sus-compare-icon">🌳</span>
          <strong>700+ trees</strong>
          <span>equivalent CO₂ absorption over 25 years for a 10 kW system</span>
        </div>
        <div className="sus-compare-div" />
        <div className="sus-compare-item">
          <span className="sus-compare-icon">🚗</span>
          <strong>15 years</strong>
          <span>of taking one petrol car off the road — same carbon impact</span>
        </div>
        <div className="sus-compare-div" />
        <div className="sus-compare-item">
          <span className="sus-compare-icon">⚡</span>
          <strong>360,000 kWh</strong>
          <span>of clean electricity generated by a 10 kW system over its lifetime</span>
        </div>
        <div className="sus-compare-div" />
        <div className="sus-compare-item">
          <span className="sus-compare-icon">🏭</span>
          <strong>150–200 t</strong>
          <span>of CO₂ avoided versus drawing the same energy from India's grid</span>
        </div>
      </Reveal>
    </section>

    {/* ═══ 7. CTA BAND ═══ */}
    <section className="sus-cta">
      <div className="sus-cta-bg" style={{ backgroundImage: `url(${images.rooftop})` }} />
      <div className="sus-cta-overlay" />
      <div className="sus-cta-shape sus-cta-shape--1" />
      <div className="sus-cta-shape sus-cta-shape--2" />
      <Reveal className="sus-cta-inner">
        <span className="sd-hero-badge">Take the first step</span>
        <h2>Start your sustainability journey with a free site assessment.</h2>
        <p>
          Share your electricity bill and site location. We'll come back with a practical solar
          proposal — including the CO₂ avoided, trees equivalent, and financial return projected
          over the 25-year system life.
        </p>
        <div className="sus-cta-actions">
          <Link className="button primary" to="/contact">Book a free site visit</Link>
          <Link className="button ghost" to="/projects">See project case studies</Link>
        </div>
      </Reveal>
    </section>
  </>
);

export default Sustainability;
