import { Link } from 'react-router-dom';

import ContactForm from '../components/ContactForm.jsx';
import SEO from '../components/SEO.jsx';
import HeroCarousel from '../components/HeroCarousel.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import SubscribeForm from '../components/SubscribeForm.jsx';
import { faqs, images, processSteps, projects, services, stats } from '../data/siteData.js';

const homeSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'serviceType': 'Solar Panel Installation',
  'provider': { '@id': 'https://technosunpower.com/#business' },
  'areaServed': [
    'Delhi', 'Ghaziabad', 'Noida', 'Greater Noida', 'Gurugram', 'Faridabad',
    'Vaishali', 'Indirapuram', 'Vasundhara', 'Rohini', 'Dwarka', 'Manesar',
  ],
};

const Home = () => (
  <>
    <SEO
      title="Solar Panel Installation in Delhi, NCR, Ghaziabad, Noida | Technosun Power"
      description="Technosun Power – expert solar panel installation for homes, businesses, farms & institutions across Delhi, NCR, Ghaziabad, Noida, Greater Noida, Gurugram & Faridabad. Get 5–10% off this month."
      canonical="/"
      schema={homeSchema}
    />
    <HeroCarousel />

    <section className="stats-strip">
      {stats.map((item) => (
        <div key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </section>

    <section className="section home-srv-section">
      <div className="home-srv-shape home-srv-shape--1" />
      <div className="home-srv-shape home-srv-shape--2" />
      <SectionHeader
        eyebrow="What we do"
        title="Solar services for every kind of roof, load, and budget"
        text="From a single home to a multi-building facility, every proposal starts with site data, energy usage, safety requirements, and a practical payback model."
      />
      <div className="service-grid">
        {services.map((service) => (
          <Link className="service-card home-srv-card" key={service.slug} to={`/services/${service.slug}`}>
            <div className="home-srv-card-img-wrap">
              <img src={service.image} alt="" />
              <div className="home-srv-card-overlay" />
            </div>
            <span>{service.eyebrow}</span>
            <h3>{service.title}</h3>
            <p>{service.summary}</p>
            <span className="home-srv-arrow">
              Explore
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2.5 6.5h8M7.5 3.5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </section>

    <section className="split-section">
      <img src={images.engineers} alt="Solar engineers inspecting a photovoltaic installation" />
      <div>
        <span className="eyebrow">Why Technosun Power</span>
        <h2>Practical solar engineering from audit to aftercare</h2>
        <p>
          We focus on correct sizing, safe structures, generation visibility, and serviceable layouts.
          That means your system is easier to inspect, easier to maintain, and easier to trust over time.
        </p>
        <ul className="check-list">
          <li>Site-specific design instead of one-size-fits-all packages</li>
          <li>Clear guidance on on-grid, off-grid, and hybrid options</li>
          <li>Installation teams aligned with electrical safety practices</li>
          <li>Maintenance plans for better lifetime generation</li>
        </ul>
      </div>
    </section>

    <section className="section warm">
      <SectionHeader eyebrow="Process" title="A clean path from energy bill to commissioned system" align="center" />
      <div className="process-grid">
        {processSteps.map((step, index) => (
          <div className="process-card" key={step.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="section">
      <SectionHeader eyebrow="Project examples" title="Systems designed for homes, businesses, and farms" />
      <div className="project-grid">
        {projects.slice(0, 3).map((project) => (
          <Link className="project-card" key={project.slug} to={`/projects/${project.slug}`} style={{ textDecoration: 'none' }}>
            <img src={project.image} alt="" />
            <div>
              <span>{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.result}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>

    <section className="cta-band">
      <div>
        <span className="eyebrow light">Start with your latest electricity bill</span>
        <h2>Get a practical solar recommendation for your property.</h2>
      </div>
      <Link className="button primary" to="/contact">Book a site visit</Link>
    </section>

    <section className="section faq-contact">
      <div>
        <SectionHeader eyebrow="Answers" title="Common solar questions" />
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
      <ContactForm />
    </section>

    <section className="newsletter">
      <div>
        <h2>Solar savings notes for property owners</h2>
        <p>Monthly tips on maintenance, rooftop readiness, net metering, and smarter energy use.</p>
      </div>
      <SubscribeForm />
    </section>
  </>
);

export default Home;
