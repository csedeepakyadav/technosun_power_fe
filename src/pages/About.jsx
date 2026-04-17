import SEO from '../components/SEO.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { images, stats } from '../data/siteData.js';

const About = () => (
  <>
    <SEO
      title="About Us – Solar EPC Company in Delhi NCR"
      description="Learn about Technosun Power – a trusted solar EPC company based in Vaishali, Ghaziabad serving Delhi, NCR, Noida, Greater Noida, Gurugram & Faridabad with 900+ installations."
      canonical="/about"
    />
    <section className="page-hero compact" style={{ backgroundImage: `linear-gradient(90deg, rgba(17,17,17,.78), rgba(17,17,17,.34)), url(${images.rooftop})` }}>
      <div>
        <span className="eyebrow light">About Technosun Power</span>
        <h1>Solar energy work grounded in site reality, safety, and measurable output.</h1>
      </div>
    </section>
    <section className="split-section">
      <div>
        <SectionHeader
          eyebrow="Our role"
          title="We help customers move from interest in solar to a working power asset"
          text="Technosun Power supports residential, commercial, institutional, farm, and industrial customers with solar design, installation, upgrades, and maintenance."
        />
        <p>
          Every site has different shading, structure, consumption, tariff, and backup needs. Our job is to convert those details into a system that is efficient, maintainable, and financially sensible.
        </p>
      </div>
      <img src={images.field} alt="Solar power plant under a clear sky" />
    </section>
    <section className="stats-strip inset">
      {stats.map((item) => (
        <div key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </section>
    <section className="section warm">
      <SectionHeader eyebrow="Standards" title="What we protect on every project" align="center" />
      <div className="value-grid">
        {['Correct system sizing', 'Safe electrical protection', 'Clean installation finish', 'Transparent generation expectations', 'Serviceable equipment layout', 'Long-term customer support'].map((value) => (
          <div className="value-card" key={value}>{value}</div>
        ))}
      </div>
    </section>
  </>
);

export default About;
