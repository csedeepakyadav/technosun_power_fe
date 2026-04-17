import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Technosun Power';
const SITE_URL = 'https://technosunpower.com';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;
const DEFAULT_DESCRIPTION =
  'Technosun Power offers expert solar panel installation for homes, businesses, farms & institutions across Delhi, NCR, Ghaziabad, Noida, Greater Noida, Gurugram & Faridabad.';

/**
 * SEO component — drop into any page for per-page meta tags.
 *
 * Props:
 *   title       {string}  Page title (appended with " | Technosun Power")
 *   description {string}  Meta description (≤160 chars recommended)
 *   canonical   {string}  Full canonical URL
 *   image       {string}  Full OG image URL (defaults to /og-image.jpg)
 *   noindex     {boolean} Set true to noindex the page
 *   schema      {object}  Additional JSON-LD schema object
 */
const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  image = DEFAULT_IMAGE,
  noindex = false,
  schema,
}) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Solar Panel Installation Delhi, NCR, Ghaziabad`;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large'} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@technosunpower" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD per-page schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
