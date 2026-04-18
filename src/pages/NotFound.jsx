import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';

const NotFound = () => {
  const canvasRef = useRef(null);

  /* ── floating particles ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2.2 + 0.4,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.5 + 0.15,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,201,71,${p.alpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <>
      <SEO
        title="404 – Page Not Found | Technosun Power"
        description="Oops! This page doesn't exist. Return to Technosun Power's homepage."
        canonical="/404"
      />

      <style>{`
        .nf-root {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0a1628 0%, #0d2b1f 50%, #0a1628 100%);
          overflow: hidden;
          padding: 2rem;
        }
        .nf-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        /* ── sun + rays ── */
        .nf-sun-wrap {
          position: absolute;
          top: 10%;
          right: 8%;
          width: 200px;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 600px) {
          .nf-sun-wrap { top: 4%; right: 4%; width: 120px; height: 120px; }
        }
        .nf-orb {
          position: absolute;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: radial-gradient(circle, #ffe066 0%, #ffc947 55%, rgba(255,201,71,.2) 100%);
          box-shadow: 0 0 40px 14px rgba(255,201,71,.4), 0 0 90px 35px rgba(255,201,71,.15);
          animation: nf-pulse 3.2s ease-in-out infinite;
          z-index: 2;
        }
        .nf-orb::after {
          content: '';
          position: absolute;
          inset: 10px;
          border-radius: 50%;
          background: radial-gradient(circle, #fff 0%, #ffe599 100%);
        }
        .nf-ray {
          position: absolute;
          width: 90px;
          height: 3px;
          border-radius: 4px;
          background: linear-gradient(90deg, rgba(255,201,71,.7), transparent);
          transform-origin: left center;
          left: 50%;
          top: 50%;
          margin-top: -1.5px;
          animation: nf-ray-flash 2.6s ease-in-out infinite;
        }

        /* ── card ── */
        .nf-card {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 580px;
          width: 100%;
          padding: 3rem 2.5rem;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 28px;
          backdrop-filter: blur(18px);
          box-shadow: 0 32px 80px rgba(0,0,0,.45), inset 0 1px 0 rgba(255,255,255,.1);
          animation: nf-float 6s ease-in-out infinite;
        }
        @media (max-width: 500px) {
          .nf-card { padding: 2rem 1.25rem; border-radius: 20px; }
        }

        /* ── glitch 404 ── */
        .nf-404 {
          display: inline-block;
          font-size: clamp(5.5rem, 22vw, 10rem);
          font-weight: 900;
          line-height: 1;
          color: #fff;
          letter-spacing: -0.04em;
          text-shadow: 0 0 50px rgba(255,201,71,.5);
          position: relative;
        }
        .nf-404::before,
        .nf-404::after {
          content: attr(data-text);
          position: absolute;
          inset: 0;
        }
        .nf-404::before {
          color: #ffc947;
          text-shadow: -3px 0 #0f7b58;
          animation: nf-glitch-1 3.5s infinite linear;
        }
        .nf-404::after {
          color: #0f7b58;
          text-shadow: 3px 0 #ffc947;
          animation: nf-glitch-2 3.5s infinite linear 0.12s;
        }

        .nf-heading {
          margin: 0.6rem 0 0.5rem;
          font-size: clamp(1.2rem, 4vw, 1.7rem);
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.02em;
        }
        .nf-sub {
          margin: 0 0 1.75rem;
          font-size: 1rem;
          color: rgba(255,255,255,.58);
          line-height: 1.65;
        }

        /* ── solar panels ── */
        .nf-panels {
          display: flex;
          gap: 10px;
          justify-content: center;
          margin-bottom: 2rem;
          align-items: flex-end;
        }
        .nf-panel {
          width: 58px;
          height: 44px;
          border-radius: 4px;
          border: 1.5px solid rgba(15,123,88,.7);
          background: linear-gradient(160deg, #0d3d2a 0%, #0a2a1c 100%);
          position: relative;
          overflow: hidden;
          animation: nf-panel-glow 2.2s ease-in-out infinite;
          /* horizontal cell lines */
          background-image:
            linear-gradient(160deg, #0d3d2a 0%, #0a2a1c 100%),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent calc(33% - 1px),
              rgba(15,123,88,.45) calc(33% - 1px),
              rgba(15,123,88,.45) 33%
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent calc(50% - 1px),
              rgba(15,123,88,.45) calc(50% - 1px),
              rgba(15,123,88,.45) 50%
            );
          background-blend-mode: normal;
        }
        /* draw grid lines via pseudo-elements for better browser support */
        .nf-panel::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent calc(33.3% - 1px),
              rgba(15,123,88,.6) calc(33.3% - 1px),
              rgba(15,123,88,.6) 33.3%
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent calc(50% - 1px),
              rgba(15,123,88,.6) calc(50% - 1px),
              rgba(15,123,88,.6) 50%
            );
        }
        .nf-panel::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg,
            transparent 20%, rgba(255,201,71,.12) 50%, transparent 80%);
          animation: nf-panel-shine 2.2s ease-in-out infinite;
        }
        /* mounting pole under each panel */
        .nf-panel-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }
        .nf-panel-pole {
          width: 3px;
          height: 14px;
          background: rgba(15,123,88,.6);
          border-radius: 0 0 2px 2px;
        }
        .nf-panel-base {
          width: 20px;
          height: 3px;
          background: rgba(15,123,88,.5);
          border-radius: 2px;
        }

        /* ── buttons ── */
        .nf-btns {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }
        .nf-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: .8rem 1.8rem;
          background: linear-gradient(135deg, #0f7b58, #0a5c40);
          color: #fff;
          font-weight: 700;
          font-size: .95rem;
          border-radius: 50px;
          box-shadow: 0 8px 24px rgba(15,123,88,.38);
          transition: transform .22s, box-shadow .22s;
        }
        .nf-btn-primary:hover {
          transform: translateY(-3px) scale(1.04);
          box-shadow: 0 14px 32px rgba(15,123,88,.5);
        }
        .nf-btn-secondary {
          display: inline-flex;
          align-items: center;
          padding: .8rem 1.8rem;
          background: rgba(255,255,255,.07);
          color: #fff;
          font-weight: 600;
          font-size: .95rem;
          border-radius: 50px;
          border: 1px solid rgba(255,255,255,.2);
          transition: background .22s, transform .22s;
        }
        .nf-btn-secondary:hover {
          background: rgba(255,255,255,.14);
          transform: translateY(-3px);
        }

        .nf-hint {
          font-size: .84rem;
          color: rgba(255,255,255,.38);
          margin: 0;
        }
        .nf-qlink {
          color: rgba(255,255,255,.52);
          transition: color .2s;
        }
        .nf-qlink:hover { color: #ffc947; }

        /* ── divider ── */
        .nf-divider {
          width: 48px;
          height: 3px;
          background: linear-gradient(90deg, #0f7b58, #ffc947);
          border-radius: 2px;
          margin: 1rem auto 1.5rem;
        }

        /* ── keyframes ── */
        @keyframes nf-pulse {
          0%,100% { transform: scale(1); }
          50%      { transform: scale(1.1); }
        }
        @keyframes nf-ray-flash {
          0%,100% { opacity: .12; }
          50%      { opacity: .45; }
        }
        @keyframes nf-float {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-12px); }
        }
        @keyframes nf-panel-glow {
          0%,100% { box-shadow: none; border-color: rgba(15,123,88,.4); }
          50%      { box-shadow: 0 0 12px rgba(15,123,88,.6); border-color: rgba(15,123,88,.9); }
        }
        @keyframes nf-panel-shine {
          0%      { transform: translateX(-100%); }
          50%,100%{ transform: translateX(150%); }
        }
        @keyframes nf-glitch-1 {
          0%  { clip-path: inset(0 0 96% 0); transform: translateX(-3px); }
          20% { clip-path: inset(40% 0 38% 0); transform: translateX(3px); }
          40% { clip-path: inset(78% 0 5% 0); transform: translateX(-2px); }
          60% { clip-path: inset(18% 0 62% 0); transform: translateX(2px); }
          80% { clip-path: inset(62% 0 18% 0); transform: translateX(-3px); }
          100%{ clip-path: inset(96% 0 0 0); transform: translateX(0); }
        }
        @keyframes nf-glitch-2 {
          0%  { clip-path: inset(52% 0 28% 0); transform: translateX(3px); }
          20% { clip-path: inset(10% 0 72% 0); transform: translateX(-3px); }
          40% { clip-path: inset(72% 0 10% 0); transform: translateX(2px); }
          60% { clip-path: inset(30% 0 52% 0); transform: translateX(-2px); }
          80% { clip-path: inset(88% 0 2% 0); transform: translateX(3px); }
          100%{ clip-path: inset(2% 0 90% 0); transform: translateX(-2px); }
        }
      `}</style>

      <div className="nf-root">
        <canvas ref={canvasRef} className="nf-canvas" />

        {/* animated sun */}
        <div className="nf-sun-wrap" aria-hidden="true">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="nf-ray"
              style={{
                transform: `rotate(${i * 45}deg)`,
                animationDelay: `${i * 0.18}s`,
              }}
            />
          ))}
          <div className="nf-orb" />
        </div>

        {/* main card */}
        <div className="nf-card">
          <div aria-label="404">
            <span className="nf-404" data-text="404">404</span>
          </div>

          <div className="nf-divider" aria-hidden="true" />

          <h1 className="nf-heading">Lost in the Solar System?</h1>
          <p className="nf-sub">
            This page has gone off-grid. Let&apos;s get you back to the light.
          </p>

          {/* animated solar panels */}
          <div className="nf-panels" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="nf-panel-wrap"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className="nf-panel" style={{ animationDelay: `${i * 0.2}s` }} />
                <div className="nf-panel-pole" />
                <div className="nf-panel-base" />
              </div>
            ))}
          </div>

          <div className="nf-btns">
            <Link to="/" className="nf-btn-primary">
              <span aria-hidden="true">☀</span>
              Back to Home
            </Link>
            <Link to="/contact" className="nf-btn-secondary">
              Contact Us
            </Link>
          </div>

          <p className="nf-hint">
            Quick links:{' '}
            {[
              { to: '/services', label: 'Services' },
              { to: '/projects', label: 'Projects' },
              { to: '/about', label: 'About' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }, i, arr) => (
              <span key={to}>
                <Link to={to} className="nf-qlink">{label}</Link>
                {i < arr.length - 1 && ' · '}
              </span>
            ))}
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
