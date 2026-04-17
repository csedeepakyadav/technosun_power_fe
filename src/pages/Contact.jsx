import ContactForm from '../components/ContactForm.jsx';
import SEO from '../components/SEO.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { images } from '../data/siteData.js';

const Contact = () => (
  <>
    <SEO
      title="Contact Us – Solar Consultation in Delhi, NCR, Ghaziabad, Noida"
      description="Get in touch with Technosun Power for a free solar site assessment. We serve Delhi, Ghaziabad, Noida, Greater Noida, Gurugram, Faridabad & all NCR areas. Call +91 92112 47248."
      canonical="/contact"
    />
    <section className="page-hero compact" style={{ backgroundImage: `linear-gradient(90deg, rgba(17,17,17,.78), rgba(17,17,17,.24)), url(${images.engineers})` }}>
      <div>
        <span className="eyebrow light">Contact</span>
        <h1>Share your site details and get a practical solar recommendation.</h1>
      </div>
    </section>
    <section className="section contact-page">
      <div>
        <SectionHeader eyebrow="Talk to us" title="Book a solar audit" />
        <p>
          Send your location, monthly electricity bill, roof type, and preferred service. Our team will respond with the next step for survey, sizing, and estimate.
        </p>
        <div className="contact-list">
          <a href="tel:+919211247248">+91 92112 47248</a>
          <a href="mailto:technosunpower@gmail.com">technosunpower@gmail.com</a>
          <span>L2 Cloud 9, Sector 1, Vaishali, Ghaziabad</span>
        </div>
      </div>
      <ContactForm />
    </section>
  </>
);

export default Contact;
