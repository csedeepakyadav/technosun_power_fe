import { useEffect, useRef, useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:7911';
const SESSION_KEY = 'technosun-offer-popup-closed-v2';
const phoneNumber = '+919211247248';
const whatsappNumber = '919211247248';
const offerMessage = 'I am interested in this month solar offer from Technosun Power.';

// Animated solar rays SVG rendered inline for zero external dependency
const SolarRaysSVG = () => (
  <svg
    className="offer-sun-rays"
    viewBox="0 0 200 200"
    aria-hidden="true"
    focusable="false"
  >
    {Array.from({ length: 12 }, (_, i) => {
      const angle = (i / 12) * 360;
      const rad = (angle * Math.PI) / 180;
      const x1 = 100 + Math.cos(rad) * 52;
      const y1 = 100 + Math.sin(rad) * 52;
      const x2 = 100 + Math.cos(rad) * 88;
      const y2 = 100 + Math.sin(rad) * 88;
      return (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="rgba(255,201,71,0.85)"
          strokeWidth={i % 3 === 0 ? 3 : 1.5}
          strokeLinecap="round"
          style={{ animationDelay: `${i * 0.08}s` }}
        />
      );
    })}
    <circle cx="100" cy="100" r="44" fill="rgba(255,201,71,0.18)" />
    <circle cx="100" cy="100" r="32" fill="rgba(255,201,71,0.32)" />
  </svg>
);

// Floating particle dots for ambient energy effect
const Particles = () => (
  <div className="offer-particles" aria-hidden="true">
    {Array.from({ length: 18 }, (_, i) => (
      <span
        key={i}
        className="offer-particle"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${(i * 0.37).toFixed(2)}s`,
          animationDuration: `${3.2 + (i % 5) * 0.6}s`,
          width: `${3 + (i % 4) * 1.5}px`,
          height: `${3 + (i % 4) * 1.5}px`,
          opacity: 0.4 + (i % 3) * 0.1,
        }}
      />
    ))}
  </div>
);

const OfferPopup = () => {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const timer = window.setTimeout(() => setVisible(true), 900);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return undefined;
    const handleEscape = (event) => {
      if (event.key === 'Escape') closePopup();
    };
    window.addEventListener('keydown', handleEscape);
    // Focus trap: move focus into dialog on open
    const firstFocusable = dialogRef.current?.querySelector(
      'input, button, a[href]',
    );
    firstFocusable?.focus();
    return () => window.removeEventListener('keydown', handleEscape);
  }, [visible]);

  const closePopup = () => {
    sessionStorage.setItem(SESSION_KEY, 'true');
    setVisible(false);
  };

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const submitOffer = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch(`${API_URL}/api/offer-lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          service: 'This Month Solar Offer',
          message: offerMessage,
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Unable to submit offer request.');
      }

      sessionStorage.setItem(SESSION_KEY, 'true');
      setStatus({ type: 'success', message: '🎉 Request received! We\'ll contact you within 24 hours.' });
      window.setTimeout(() => setVisible(false), 1800);
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    } finally {
      setLoading(false);
    }
  };

  if (!visible) return null;

  return (
    <div
      className="offer-overlay"
      role="presentation"
      onClick={(e) => e.target === e.currentTarget && closePopup()}
    >
      <section
        ref={dialogRef}
        className="offer-popup"
        role="dialog"
        aria-modal="true"
        aria-labelledby="offer-title"
      >
        {/* Close button */}
        <button
          className="offer-close"
          type="button"
          onClick={closePopup}
          aria-label="Close offer popup"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="offer-layout">
          {/* === LEFT: Visual Panel === */}
          <div className="offer-visual" aria-hidden="true">
            <Particles />

            {/* Limited deal ribbon */}
            <div className="offer-ribbon">
              <span>⚡</span> Limited Month Deal
            </div>

            {/* Hero image with gradient overlay */}
            <div className="offer-image-wrap">
              <img
                src="/solar-offer-bg.png"
                alt="Solar installation at golden hour"
                className="offer-hero-img"
                loading="eager"
              />
              <div className="offer-image-overlay" />
            </div>

            {/* Central discount burst */}
            <div className="offer-burst-wrap">
              <SolarRaysSVG />
              <div className="offer-burst">
                <span className="offer-burst-pct">5–10%</span>
                <small>OFF</small>
                <div className="offer-burst-ring offer-burst-ring--1" />
                <div className="offer-burst-ring offer-burst-ring--2" />
              </div>
            </div>

            {/* Bottom teaser text */}
            <p className="offer-visual-caption">
              + Free equipment support on selected packages
            </p>
          </div>

          {/* === RIGHT: Details Panel === */}
          <div className="offer-details">
            <header className="offer-copy">
              <span className="offer-kicker">☀️ This Month's Special Offer</span>
              <h2 id="offer-title">Save big on your solar installation</h2>
              <p>
                Claim <strong>5–10% off</strong> on eligible solar systems, or opt for
                free additional equipment to maximise your energy output.
                Limited slots available — act now.
              </p>
            </header>

            {/* Quick contact channels */}
            <nav className="offer-channels" aria-label="Quick contact options">
              <a
                id="offer-call-btn"
                href={`tel:${phoneNumber}`}
                className="offer-channel offer-channel--call"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path
                    d="M3 5.5C3 14.06 9.94 21 18.5 21c.386 0 .77-.014 1.148-.042.435-.033.652-.05.822-.163.156-.104.278-.274.344-.48.07-.214.07-.467.07-.974v-2.878c0-.394 0-.59-.073-.756a.997.997 0 00-.437-.465c-.155-.085-.346-.11-.73-.16l-3.17-.424c-.42-.056-.63-.084-.823-.044a1 1 0 00-.534.302c-.131.137-.21.326-.367.703l-.683 1.621a13.566 13.566 0 01-6.486-6.486l1.621-.683c.377-.157.566-.236.703-.367a1 1 0 00.302-.534c.04-.193.012-.403-.044-.823l-.424-3.17c-.05-.384-.075-.576-.16-.73a1 1 0 00-.465-.438C8.21 4 8.014 4 7.621 4H4.742c-.507 0-.76 0-.974.07-.206.066-.376.188-.48.344-.113.17-.13.387-.163.822A16.496 16.496 0 003 5.5z"
                    fill="currentColor"
                  />
                </svg>
                Call Now
              </a>
              <a
                id="offer-whatsapp-btn"
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(offerMessage)}`}
                className="offer-channel offer-channel--whatsapp"
                target="_blank"
                rel="noreferrer"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.546 21l4.157-.786A9.954 9.954 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.946 7.946 0 01-4.016-1.083l-.29-.17-2.47.467.484-2.413-.19-.302A7.95 7.95 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"
                    fill="currentColor"
                  />
                </svg>
                WhatsApp
              </a>
              <a
                id="offer-email-btn"
                href="mailto:technosunpower@gmail.com?subject=This%20Month%20Solar%20Offer"
                className="offer-channel offer-channel--email"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path
                    d="M2 7a2 2 0 012-2h16a2 2 0 012 2v.01l-10 6.5L2 7.01V7zm0 2.236V17a2 2 0 002 2h16a2 2 0 002-2V9.236l-10 6.5L2 9.236z"
                    fill="currentColor"
                  />
                </svg>
                Email
              </a>
            </nav>

            <div className="offer-divider">
              <span>or leave your details — we'll call you</span>
            </div>

            {/* Lead capture form */}
            <form className="offer-form" id="offer-lead-form" onSubmit={submitOffer} noValidate>
              <div className="offer-field">
                <label htmlFor="offer-name">Your name</label>
                <input
                  id="offer-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={updateField}
                  placeholder="e.g. Rajesh Sharma"
                  autoComplete="name"
                  required
                />
              </div>
              <div className="offer-field">
                <label htmlFor="offer-phone">Phone / WhatsApp</label>
                <input
                  id="offer-phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={updateField}
                  placeholder="+91 98765 43210"
                  autoComplete="tel"
                  required
                />
              </div>

              <button
                id="offer-submit-btn"
                className="offer-submit"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="offer-spinner" />
                    Submitting…
                  </>
                ) : (
                  <>
                    ⚡ Claim This Offer Now
                  </>
                )}
              </button>

              {status.message && (
                <p className={`offer-status ${status.type}`} role="alert">
                  {status.message}
                </p>
              )}

              <button
                id="offer-no-thanks-btn"
                className="offer-no-thanks"
                type="button"
                onClick={closePopup}
              >
                No thanks, I'll pay full price
              </button>
            </form>
          </div>
        </div>

        {/* Bottom urgency bar */}
        <div className="offer-urgency-bar" aria-hidden="true">
          <span className="offer-urgency-dot" />
          <span>Offer valid this month only · Limited installation slots remaining</span>
          <span className="offer-urgency-dot" />
        </div>
      </section>
    </div>
  );
};

export default OfferPopup;
