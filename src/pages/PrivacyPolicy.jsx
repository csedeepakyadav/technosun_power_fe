import SEO from '../components/SEO.jsx';

const PrivacyPolicy = () => (
  <>
    <SEO title="Privacy Policy" canonical="/privacy-policy" noindex={true} />
    <section className="section legal">
      <span className="eyebrow">Privacy Policy</span>
      <h1>Privacy Policy</h1>
      <p>
        Technosun Power collects contact details, service preferences, and project information only to respond to inquiries, prepare solar recommendations, and provide customer support.
      </p>
      <p>
        We do not sell personal information. Form submissions may be processed through email and internal business tools needed to serve the request.
      </p>
      <p>
        Customers can request correction or deletion of their information by contacting technosunpower@gmail.com.
      </p>
    </section>
  </>
);

export default PrivacyPolicy;
