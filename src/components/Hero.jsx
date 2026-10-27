
import { ArrowRight, Github, Linkedin, Code2 } from 'lucide-react';

function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-left">
        <div className="hero-status">
          <span className="status-dot"></span>
          Computer Science Student
        </div>

        <p className="hero-intro">HELLO, I'M</p>

        <h1>
          Madhukar Pati
          <span className="gradient-text">Tripathi.</span>
        </h1>

        <h2>
          Aspiring <span className="gradient-text">Frontend Developer</span>
        </h2>

        <p className="hero-description">
          I build modern, responsive and user-friendly web
          experiences with React.js, JavaScript, HTML and CSS.
          I love turning ideas into real-world projects.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="hero-btn hero-btn-primary">
            Explore My Work <ArrowRight size={18} />
          </a>

          <a href="#contact" className="hero-btn hero-btn-secondary">
            Contact Me
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>

          <span className="social-caption">Connect with me</span>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-orb"></div>

        <div className="developer-card">
          <div className="developer-card-header">
            <div className="window-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span>developer.jsx</span>
          </div>

          <div className="developer-code">
            <p><span className="code-keyword">const</span> developer = {'{'}</p>
            <p className="code-indent">
              name: <span className="code-string">'Madhukar Tripathi'</span>,
            </p>
            <p className="code-indent">
              role: <span className="code-string">'Frontend Developer'</span>,
            </p>
            <p className="code-indent">skills: [</p>
            <p className="code-indent code-indent-more">
              <span className="code-value">'React.js'</span>,
            </p>
            <p className="code-indent code-indent-more">
              <span className="code-value">'JavaScript'</span>,
            </p>
            <p className="code-indent code-indent-more">
              <span className="code-value">'CSS3'</span>
            </p>
            <p className="code-indent">],</p>
            <p className="code-indent">
              learning: <span className="code-string">'Every day'</span>
            </p>
            <p>{'}'};</p>
          </div>

          <div className="developer-card-footer">
            <Code2 size={18} />
            <span>Building something meaningful.</span>
          </div>
        </div>

        <div className="tech-float tech-react">⚛ React.js</div>
        <div className="tech-float tech-web">✦ Web Developer</div>
      </div>
    </section>
  );
}

export default Hero;
