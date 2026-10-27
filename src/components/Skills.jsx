
import {
  Code2,
  Palette,
  Database,
  Terminal,
  GitBranch,
  Globe,
} from 'lucide-react';

const skillGroups = [
  {
    title: 'Frontend Development',
    icon: <Palette size={24} />,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Bootstrap'],
  },
  {
    title: 'Backend Development',
    icon: <Terminal size={24} />,
    skills: ['Node.js', 'Express.js', 'EJS'],
  },
  {
    title: 'Database',
    icon: <Database size={24} />,
    skills: ['MongoDB', 'SQL'],
  },
  {
    title: 'Programming',
    icon: <Code2 size={24} />,
    skills: ['C', 'Python', 'JavaScript'],
  },
  {
    title: 'Tools & Platforms',
    icon: <GitBranch size={24} />,
    skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
  {
    title: 'Web Fundamentals',
    icon: <Globe size={24} />,
    skills: ['Responsive Design', 'REST APIs', 'DOM', 'ES6+'],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-heading">
        <p className="section-label">WHAT I KNOW</p>
        <h2>
          My <span>Technical Skills</span>
        </h2>
        <p>
          Technologies and tools I use to build modern web applications.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <div className="skill-icon">{group.icon}</div>

            <h3>{group.title}</h3>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
