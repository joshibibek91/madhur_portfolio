'use client';

import { useEffect, useRef, useState } from 'react';

const brands = [
  {
    name: 'Alziba',
    desc: 'Premium skincare and personal care solutions crafted for everyday beauty and wellness needs.',
    tag: 'Personal Care',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    name: 'Ichi',
    desc: 'Innovative personal care products combining modern science with natural ingredients.',
    tag: 'Wellness',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66L19 8h-2z" />
        <path d="M15 2a4 4 0 0 0-4 4" />
        <path d="M15 2a4 4 0 0 1 4 4" />
      </svg>
    ),
  },
  {
    name: 'Kleida',
    desc: 'Trusted personal care brand known for quality formulations and effective results.',
    tag: 'Beauty',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    name: 'Humeda',
    desc: 'Hydration-focused personal care products designed to nourish and protect your skin.',
    tag: 'Skincare',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
  },
];

const milestones = [
  {
    step: '01',
    date: 'Banking Career',
    title: 'NIC Asia Bank \u2014 Manager',
    desc: 'Began my professional journey at NIC Asia Bank, one of Nepal\u2019s leading commercial banks. Over 12 years, I grew from a dedicated staff member to a Bank Manager, gaining deep expertise in financial management, team leadership, customer relations, and strategic operations.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    step: '02',
    date: 'The Transition',
    title: 'From Banker to Entrepreneur',
    desc: 'After 12 successful years in banking, I made the courageous decision to step into entrepreneurship. Armed with financial acumen, management skills, and a vision for Nepal\u2019s growing personal care market, I embarked on a new chapter.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    step: '03',
    date: '5 Years Ago',
    title: 'Founded Dulche Suppliers',
    desc: 'Established Dulche Suppliers as a trusted import and supply company for premium personal care products in Nepal. Secured partnerships with international brands including Alziba, Ichi, Kleida, and Humeda.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    step: '04',
    date: 'Present Day',
    title: 'Leading Dulche Suppliers Forward',
    desc: 'As Managing Director, I continue to expand Dulche Suppliers\u2019 reach across Nepal, building a reliable distribution network and bringing more premium personal care brands to the market. The journey of growth continues.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

const highlights = [
  'Former NIC Asia Bank Manager',
  '12 Years in Banking Leadership',
  'Founded Dulche Suppliers 5 Years Ago',
  'Importing Premium Personal Care Brands',
];

function Counter({ target }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 1500;
          const step = target / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            setCount(Math.floor(current));
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span className="stat-number" ref={ref}>
      {count}<span className="suffix">+</span>
    </span>
  );
}

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      e.target.reset();
    }, 3000);
  };

  return (
    <main>
      {/* Navbar */}
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="#" className="nav-logo">
            <span className="logo-text">Dulche</span>
            <span className="logo-sub">Suppliers</span>
          </a>
          <button
            className={`nav-toggle${menuOpen ? ' active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span /><span /><span />
          </button>
          <ul className={`nav-menu${menuOpen ? ' open' : ''}`}>
            {['Home', 'About', 'Brands', 'Journey', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-bg-pattern" />
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="hero-greeting">Welcome, I&apos;m</p>
            <h1 className="hero-name">Madhur Mahotra</h1>
            <p className="hero-title">
              Managing Director <span className="hero-divider">|</span> Dulche Suppliers
            </p>
            <p className="hero-desc">
              Bringing premium personal care brands to Nepal. With over 17 years of
              professional experience spanning banking leadership and entrepreneurship,
              I lead Dulche Suppliers in delivering quality products you can trust.
            </p>
            <div className="hero-actions">
              <a href="#about" className="btn btn-primary">Learn More</a>
              <a href="#contact" className="btn btn-outline">Get in Touch</a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <Counter target={5} />
                <span className="stat-label">Years in Business</span>
              </div>
              <div className="stat">
                <Counter target={12} />
                <span className="stat-label">Years in Banking</span>
              </div>
              <div className="stat">
                <Counter target={4} />
                <span className="stat-label">Premium Brands</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-frame">
              <img
                src="/images/madhur-hero.png"
                alt="Madhur Mahotra"
                className="hero-image"
              />
            </div>
            <div className="floating-card card-1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
              </svg>
              <span>17+ Years Experience</span>
            </div>
            <div className="floating-card card-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span>Nepal&apos;s Trusted Supplier</span>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <a href="#about" aria-label="Scroll down">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
        </div>
      </section>

      {/* About */}
      <section className="section about" id="about">
        <div className="container">
          <div className="section-header">
            <p className="section-tag">About Me</p>
            <h2 className="section-title">
              From Banking Leader to<br />Visionary Entrepreneur
            </h2>
          </div>
          <div className="about-grid">
            <div className="about-image">
              <img
                src="/images/madhur-about.png"
                alt="Madhur Mahotra"
                className="about-photo"
              />
            </div>
            <div className="about-content">
              <p className="about-lead">
                I&apos;m Madhur Mahotra, the Managing Director of <strong>Dulche Suppliers</strong> —
                Nepal&apos;s growing name in premium personal care product distribution.
              </p>
              <div className="about-text">
                <p>
                  Before founding Dulche Suppliers, I spent <strong>12 years at NIC Asia Bank</strong>,
                  where I rose to the position of Manager. My years in banking sharpened my
                  skills in leadership, strategic planning, financial management, and building
                  lasting professional relationships.
                </p>
                <p>
                  After over a decade of dedicated service in the banking sector, I made the
                  bold decision to follow my entrepreneurial vision. I founded Dulche Suppliers
                  to bring high-quality personal care products from internationally recognized
                  brands to the Nepali market.
                </p>
                <p>
                  Today, Dulche Suppliers proudly imports and distributes products from brands like{' '}
                  <strong>Alziba, Ichi, Kleida, Humeda</strong>, and more — serving retailers and
                  consumers across Nepal with quality they can trust.
                </p>
              </div>
              <div className="about-highlights">
                {highlights.map((item) => (
                  <div className="highlight" key={item}>
                    <CheckIcon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="section brands" id="brands">
        <div className="container">
          <div className="section-header">
            <p className="section-tag">Our Brands</p>
            <h2 className="section-title">
              Premium Personal Care Brands<br />We Bring to Nepal
            </h2>
            <p className="section-desc">
              We partner with internationally recognized personal care brands to deliver
              quality products that Nepali consumers deserve.
            </p>
          </div>
          <div className="brands-grid">
            {brands.map((brand) => (
              <div className="brand-card" key={brand.name}>
                <div className="brand-icon">{brand.icon}</div>
                <h3 className="brand-name">{brand.name}</h3>
                <p className="brand-desc">{brand.desc}</p>
                <div className="brand-tag">{brand.tag}</div>
              </div>
            ))}
          </div>
          <div className="brands-cta">
            <p>
              Interested in stocking our brands?{' '}
              <a href="#contact">Contact us</a> for wholesale inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="section journey" id="journey">
        <div className="container">
          <div className="section-header">
            <p className="section-tag">My Journey</p>
            <h2 className="section-title">
              A Path Built on Dedication<br />and Vision
            </h2>
          </div>
          <div className="infographic">
            {milestones.map((item, i) => (
              <div className="info-item" key={i}>
                <div className="info-num">{item.step}</div>
                {i % 2 === 0 ? (
                  <>
                    <div className="info-content">
                      <span className="info-date">{item.date}</span>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                    <div className="info-icon">
                      <div className="info-icon-circle">{item.icon}</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="info-icon">
                      <div className="info-icon-circle">{item.icon}</div>
                    </div>
                    <div className="info-content">
                      <span className="info-date">{item.date}</span>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section contact" id="contact">
        <div className="container">
          <div className="section-header">
            <p className="section-tag">Contact</p>
            <h2 className="section-title">Let&apos;s Connect</h2>
            <p className="section-desc">
              Whether you&apos;re interested in our products, wholesale partnerships, or just
              want to say hello — I&apos;d love to hear from you.
            </p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-card">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Nepal</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>info@dulchesuppliers.com</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <polyline points="16 3 12 7 8 3" />
                  </svg>
                </div>
                <div>
                  <h4>Company</h4>
                  <p>Dulche Suppliers</p>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" />
              </div>
              <div className="form-group">
                <textarea rows={5} placeholder="Your Message" required />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-full"
                disabled={formSent}
                style={formSent ? { background: '#2d8a4e', borderColor: '#2d8a4e' } : {}}
              >
                {formSent ? (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <span className="logo-text">Dulche</span>
              <span className="logo-sub">Suppliers</span>
              <p>Importing premium personal care brands to Nepal since 2021.</p>
            </div>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#brands">Brands</a>
              <a href="#journey">Journey</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Dulche Suppliers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
