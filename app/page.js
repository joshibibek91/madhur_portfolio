const services = [
  {
    title: 'Creative Design',
    icon: '✕',
    desc: 'Building visual identities and memorable brand assets that connect with customers.'
  },
  {
    title: 'Branding',
    icon: '◎',
    desc: 'Crafting strategic brand language, tone, and positioning that drives trust.'
  },
  {
    title: 'User Interface',
    icon: '▦',
    desc: 'Designing modern, high-performing interfaces that turn visits into conversions.'
  }
];

const projects = [
  {
    title: 'SaaS Dashboard',
    category: 'Product Design',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Luxury Brand Site',
    category: 'Brand Identity',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Fintech Mobile App',
    category: 'UI/UX Design',
    image:
      'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=1200&q=80'
  }
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="overlay" />
        <header className="nav container">
          <h2 className="brand">Yazen</h2>
          <nav>
            <a href="#home" className="active">
              Home
            </a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#resume">Resume</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </nav>
          <button>Contact Me</button>
        </header>

        <div className="hero-center container">
          <img
            src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=400&q=80"
            alt="Razan Smith"
            className="hero-avatar"
          />
          <h1>Razan Smith</h1>
          <p>A Creative Freelancer & Full Stack Developer</p>
        </div>
        <span className="scroll-indicator">Scroll Down</span>
      </section>

      <section className="about section container" id="about">
        <div className="section-number">01</div>
        <img
          src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=700&q=80"
          alt="About portrait"
          className="about-image"
        />
        <div className="about-content">
          <h4>Discover</h4>
          <h2>About Me</h2>
          <p>
            My name is Razan Smith. I&apos;m a freelance full stack developer based in New York, USA,
            and I&apos;m very passionate and dedicated to my work. With 6 years experience as a
            professional full stack developer, I have acquired the skills necessary to build great
            and premium websites.
          </p>
          <div className="about-card">
            <div>
              <p>
                <strong>Name:</strong> Razan Smith
              </p>
              <p>
                <strong>Phone:</strong> +1 212 451-4127
              </p>
              <p>
                <strong>Experience:</strong> 6 Years
              </p>
              <p>
                <strong>Skype:</strong> razan.smith
              </p>
            </div>
            <div>
              <p>
                <strong>Age:</strong> 26
              </p>
              <p>
                <strong>Address:</strong> New York, USA
              </p>
              <p>
                <strong>Freelance:</strong> Available
              </p>
              <p>
                <strong>Dribbble:</strong> smith.dribbble
              </p>
            </div>
          </div>
          <a className="btn-primary" href="#">
            Download CV
          </a>
        </div>
      </section>

      <section className="services section container" id="services">
        <div className="section-number">02</div>
        <h4>What I Do</h4>
        <h2>My Services</h2>
        <div className="service-grid">
          {services.map((item) => (
            <article key={item.title}>
              <span className="service-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio section container" id="portfolio">
        <h4>Featured Work</h4>
        <h2>Selected Projects</h2>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <img src={project.image} alt={project.title} />
              <div>
                <p>{project.category}</p>
                <h3>{project.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta section" id="contact">
        <div className="container cta-inner">
          <div>
            <h2>Ready to build your next premium digital experience?</h2>
            <p>Let&apos;s collaborate and create a modern, business-focused product together.</p>
          </div>
          <a href="mailto:hello@razansmith.com" className="btn-primary">
            Let&apos;s Talk
          </a>
        </div>
      </section>
    </main>
  );
}
