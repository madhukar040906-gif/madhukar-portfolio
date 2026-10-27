import { useEffect, useState } from 'react';
import profile from './assets/profile.jpg';
import './App.css';

function App() {
  
const roles = [
  'Frontend Developer',
  'React.js Developer',
  'Web Development Enthusiast'
];

const [roleIndex, setRoleIndex] = useState(0);
const [displayText, setDisplayText] = useState('');

useEffect(() => {
  const currentRole = roles[roleIndex];
  let index = 0;

  setDisplayText('');

  const timer = setInterval(() => {
    index++;
    setDisplayText(currentRole.slice(0, index));

    if (index >= currentRole.length) {
      clearInterval(timer);

      setTimeout(() => {
        setRoleIndex((previous) => (previous + 1) % roles.length);
      }, 1400);
    }
  }, 80);

  return () => clearInterval(timer);
}, [roleIndex]);

  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo">PORTFOLIO<span>.</span></a>


<div className="nav-links">
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#skills">Skills</a>
  <a href="#education">Education</a>
  <a href="#projects">Projects</a>
  <a href="#interests">Beyond Coding</a>
  <a href="#contact">Contact</a>
</div>


      </nav>

      <main>
      
<section className="hero hero-modern" id="home">
  <div className="hero-content">
    <p className="tagline">
      <span className="status-dot"></span>
      AVAILABLE FOR OPPORTUNITIES
    </p>

    <p className="hero-greeting">Hello, I'm</p>

    <h1>
      Madhukar Pati
      <br />
      <span>Tripathi.</span>
    </h1>

    <h2 className="animated-role">
      {displayText}
      <span className="typing-cursor">|</span>
    </h2>

    <p className="description">
      I create modern, responsive and user-friendly
      web experiences. I enjoy turning ideas into
      functional websites with clean design and code.
    </p>

    <div className="hero-buttons">
      <a href="#projects" className="btn-primary">
        Explore My Work ↗
      </a>

      <a href="#contact" className="btn-secondary">
        Let's Connect
      </a>
    </div>

    <div className="hero-socials">
      <a href="https://github.com/" target="_blank" rel="noreferrer">
        GitHub ↗
      </a>

      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
        LinkedIn ↗
      </a>
    </div>
  </div>

  <div className="hero-visual">
    <div className="visual-glow"></div>

    <div className="orbit orbit-one"></div>
    <div className="orbit orbit-two"></div>

    <div className="profile-frame profile-large">
      <img src={profile} alt="Madhukar Pati Tripathi" />
    </div>

    <div className="floating-badge badge-top">
      <span>⚛️</span>
      React.js
    </div>

    <div className="floating-badge badge-bottom">
      <span>💻</span>
      Web Developer
    </div>

    <div className="visual-caption">
      <span>BUILDING FOR THE WEB</span>
      <span className="caption-line"></span>
    </div>
  </div>

  <div className="hero-bottom">
    <div>
      <strong>04</strong>
      <span>Featured Projects</span>
    </div>

    <div>
      <strong>CSE</strong>
      <span>Academic Background</span>
    </div>

    <div>
      <strong>∞</strong>
      <span>Things to Learn</span>
    </div>
  </div>
</section>



<section className="info-section about-section" id="about">
  <p className="section-label">GET TO KNOW ME</p>
  <h2>About <span>Me</span></h2>

  <div className="about-content">
    <div className="about-text">
      <h3>Turning Ideas Into Digital Experiences 🚀</h3>

      <p>
        Hi, I'm <strong>Madhukar Pati Tripathi</strong>, a final-year
        B.Tech Computer Science and Engineering student at RR Institute
        of Modern Technology, Lucknow.
      </p>

      <p>
        I'm passionate about web development and enjoy creating modern,
        responsive, and user-friendly websites. I have experience with
        HTML, CSS, JavaScript, and Python, and I'm currently improving
        my skills in React.js and full-stack web development.
      </p>

      <p>
        Through projects like Business Insights 360, Packshift, and
        website clones, I've explored website design, data visualization,
        and practical problem-solving. These projects help me connect
        what I learn with real-world applications.
      </p>

      <p>
        My goal is to start my career in the technology industry, work
        with a collaborative team, and keep learning new tools and
        technologies. I'm always ready to take on new challenges and
        turn ideas into useful digital solutions.
      </p>

      <div className="about-highlights">
        <div>
          <span>🎓</span>
          <div>
            <strong>Education</strong>
            <small>B.Tech – Computer Science</small>
          </div>
        </div>

        <div>
          <span>💻</span>
          <div>
            <strong>Career Focus</strong>
            <small>Frontend & Full-Stack Development</small>
          </div>
        </div>

        <div>
          <span>📚</span>
          <div>
            <strong>Currently Learning</strong>
            <small>React.js & Modern Web Technologies</small>
          </div>
        </div>
      </div>

      <a href="#projects" className="btn-primary about-button">
        Explore My Projects ↗
      </a>
    </div>
  </div>
</section>
```    
        
<section className="info-section" id="skills">
  <p className="tagline">WHAT I WORK WITH</p>
  <h2>My Technical Skills</h2>

  <div className="skills-grid">
    <div className="skill-card">
      <span>🌐</span>
      <h3>Frontend</h3>
      <p>HTML, CSS, JavaScript, React.js</p>
    </div>

    <div className="skill-card">
      <span>⚙️</span>
      <h3>Backend</h3>
      <p>Node.js, Express.js, EJS</p>
    </div>

    <div className="skill-card">
      <span>🗄️</span>
      <h3>Database</h3>
      <p>MongoDB, SQL</p>
    </div>

    <div className="skill-card">
      <span>📊</span>
      <h3>Analytics</h3>
      <p>Power BI, DAX, Excel</p>
    </div>

    <div className="skill-card">
      <span>💻</span>
      <h3>Programming</h3>
      <p>C, Python, Java basics</p>
    </div>

    <div className="skill-card">
      <span>🛠️</span>
      <h3>Tools</h3>
      <p>Git, GitHub, VS Code, Postman</p>
    </div>
  </div>
</section>

<section className="info-section" id="education">
  <p className="tagline">MY ACADEMIC JOURNEY</p>
  <h2>Education</h2>

  <div className="education-grid">

    <div className="project-card education-card">
      <span className="project-number">BACHELOR'S DEGREE</span>
      <h3>B.Tech — Computer Science & Engineering</h3>
      <p>RR Institute of Modern Technology, Lucknow</p>
      <p>CGPA: 8.16</p>
      <p>Final Year</p>
    </div>

    <div className="project-card education-card">
      <span className="project-number">CLASS XII</span>
      <h3>Intermediate (12th)</h3>
      <p>SSSV Inter College, Ayodhya</p>
      <p>Percentage: 81%</p>
    </div>

    <div className="project-card education-card">
      <span className="project-number">CLASS X</span>
      <h3>High School (10th)</h3>
      <p>SSSV Inter College, Ayodhya</p>
      <p>Percentage: 81.33%</p>
    </div>

  </div>
</section>






<section className="info-section" id="projects">
  <p className="tagline">MY RECENT WORK</p>
  <h2>My Projects</h2>
  <p>Here are some projects I have worked on.</p>

  <div className="projects-grid">

    {/* Project 1 */}
    <div className="project-card">
      <span className="project-number">PROJECT 01</span>
      <h3>Business Insights 360</h3>
      <p>
        An interactive Power BI dashboard for analyzing
        sales, finance, marketing and supply chain performance.
      </p>
      <div className="project-links">
        <a href="https://github.com/" target="_blank"
          rel="noreferrer" className="btn-primary">
          GitHub ↗
        </a>
      </div>
    </div>

    {/* Project 2 */}
    <div className="project-card">
      <span className="project-number">PROJECT 02</span>
      <h3>Packshift</h3>
      <p>
        A responsive packing and shifting service website
        built using HTML, CSS and JavaScript.
      </p>
      <div className="project-links">
        <a href="https://github.com/" target="_blank"
          rel="noreferrer" className="btn-primary">
          GitHub ↗
        </a>
      </div>
    </div>

    {/* Project 3 */}
    <div className="project-card">
      <span className="project-number">PROJECT 03</span>
      <h3>Amazon Clone</h3>
      <p>
        An e-commerce website interface with product cards,
        navigation and a responsive layout.
      </p>
      <div className="project-links">
        <a href="https://github.com/" target="_blank"
          rel="noreferrer" className="btn-primary">
          GitHub ↗
        </a>
      </div>
    </div>

    {/* Project 4 */}
    <div className="project-card">
      <span className="project-number">PROJECT 04</span>
      <h3>Netflix Clone</h3>
      <p>
        A streaming platform-inspired interface featuring
        movie sections and a modern dark design.
      </p>
      <div className="project-links">
        <a href="https://github.com/" target="_blank"
          rel="noreferrer" className="btn-primary">
          GitHub ↗
        </a>
      </div>
    </div>

  </div>
</section>

{/* Beyond Coding Section */}
<section className="info-section interests-section" id="interests">
  <p className="section-label">LIFE BEYOND THE CODE</p>
  <h2>Beyond <span>Coding</span></h2>

  <p className="interests-intro">
    I believe learning goes beyond programming. These are some of the
    things that keep me motivated, curious, and growing.
  </p>

  <div className="interests-grid">
    <div className="interest-card">
      <span className="interest-icon">📚</span>
      <h3>Continuous Learning</h3>
      <p>Exploring new technologies and improving my technical knowledge.</p>
    </div>

    <div className="interest-card">
      <span className="interest-icon">🧩</span>
      <h3>Problem Solving</h3>
      <p>Practising logical thinking and finding solutions to challenges.</p>
    </div>

    <div className="interest-card">
      <span className="interest-icon">🌐</span>
      <h3>Exploring Technology</h3>
      <p>Discovering new tools, web development trends, and digital ideas.</p>
    </div>

    <div className="interest-card">
      <span className="interest-icon">🎯</span>
      <h3>Personal Growth</h3>
      <p>Working on communication, confidence, and professional skills.</p>
    </div>
  </div>
</section>      




{/* Updated Contact Section */}
<section className="info-section contact-section" id="contact">
  <p className="section-label">LET'S CONNECT</p>
  <h2>Contact <span>Me</span></h2>
  <p className="contact-intro">
    Have a project idea, job opportunity, or just want to say hello?
    I'd love to hear from you!
  </p>

  <div className="contact-layout">
    <div className="contact-info">
      <h3>Let's start a conversation 👋</h3>
      <p>
        I'm open to entry-level opportunities, internships, and
        collaborations in web development and technology.
      </p>

      <a className="contact-detail" href="mailto:YOUR_EMAIL@gmail.com">
        <span className="contact-icon">✉️</span>
        <span>
          <small>Email Me</small>
          <strong>YOUR_EMAIL@gmail.com</strong>
        </span>
      </a>

      <a
        className="contact-detail"
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noreferrer"
      >
        <span className="contact-icon">💼</span>
        <span>
          <small>LinkedIn</small>
          <strong>Let's connect professionally ↗</strong>
        </span>
      </a>

      <a
        className="contact-detail"
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
      >
        <span className="contact-icon">💻</span>
        <span>
          <small>GitHub</small>
          <strong>Explore my projects ↗</strong>
        </span>
      </a>

      <div className="contact-availability">
        <span className="status-dot"></span>
        Open to learning and new opportunities
      </div>
    </div>

    <form
      className="contact-form contact-form-modern"
      onSubmit={(e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const data = new FormData(form);
        const name = data.get("name");
        const email = data.get("email");
        const subject = data.get("subject");
        const message = data.get("message");

        const mailto = `mailto:YOUR_EMAIL@gmail.com?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(
          `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`;

        window.location.href = mailto;
      }}
    >
      <h3>Send Me a Message</h3>
      <p>Fill in the details below and let's talk.</p>

      <label htmlFor="contact-name">Your Name</label>
      <input
        id="contact-name"
        type="text"
        name="name"
        placeholder="Enter your full name"
        required
      />

      <label htmlFor="contact-email">Email Address</label>
      <input
        id="contact-email"
        type="email"
        name="email"
        placeholder="you@example.com"
        required
      />

      <label htmlFor="contact-subject">Subject</label>
      <input
        id="contact-subject"
        type="text"
        name="subject"
        placeholder="What would you like to discuss?"
        required
      />

      <label htmlFor="contact-message">Your Message</label>
      <textarea
        id="contact-message"
        name="message"
        rows="5"
        placeholder="Write your message here..."
        required
      ></textarea>

      <button type="submit" className="contact-submit">
        Send Message <span>↗</span>
      </button>

      <small className="contact-note">
        Your email app will open to send the message.
      </small>
    </form>
  </div>
</section>

      </main>

    
{/* Interactive Footer */}
<footer className="portfolio-footer">
  <div className="footer-top">
    <div className="footer-brand">
      <a href="#home" className="footer-logo">Portfolio<span>.</span></a>
      <p>Building ideas into meaningful digital experiences.</p>
    </div>

    <div className="footer-navigation">
      <h3>Quick Links</h3>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>

    <div className="footer-connect">
      <h3>Let's Connect</h3>
      <p>Have an idea or opportunity? Let's talk!</p>
      <a href="#contact" className="footer-cta">
        Get In Touch <span>↗</span>
      </a>
      <div className="footer-socials">
        <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
      </div>
    </div>
  </div>

  <div className="footer">
    <p>© {new Date().getFullYear()} Madhukar Pati Tripathi. All rights reserved.</p>
    <button
      className="back-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      Back to Top ↑
    </button>
  </div>
</footer>

    </div>
  );
}

export default App;
