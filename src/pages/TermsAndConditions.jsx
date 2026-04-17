import SEO from '../components/SEO.jsx';

const TermsAndConditions = () => (
  <>
    <SEO title="Terms and Conditions" canonical="/terms-and-conditions" noindex={true} />
    <section className="section legal">
      <span className="eyebrow">Terms</span>
      <h1>Terms and Conditions</h1>
      <p>
        Website content is provided for general information about Technosun Power services. Final scope, pricing, generation estimates, and timelines depend on site survey, approvals, equipment availability, and written proposal terms.
      </p>
      <p>
        Customers should review all technical and commercial documents before confirming a project. Warranty, maintenance, and support obligations are governed by the accepted proposal or service agreement.
      </p>
    </section>
  </>
);

export default TermsAndConditions;
