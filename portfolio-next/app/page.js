const projects = [
  {
    title: 'Évolution backend & microservices',
    company: 'Orange Cameroun',
    description: 'Refonte d’une architecture critique pour sécuriser les transactions et améliorer la fiabilité du système.',
    stack: ['.NET', 'ASP.NET Core', 'CQRS', 'MediatR', 'Docker']
  },
  {
    title: 'Digitalisation des transports',
    company: 'Camrail S.A',
    description: 'Application web pensée pour simplifier la gestion des demandes de transport ferroviaire.',
    stack: ['Java Web', 'PHP', 'SQL', 'Fullstack']
  },
  {
    title: 'Intégration UI/UX & performance',
    company: 'ADWA SARL',
    description: 'Transformation de maquettes en interfaces web modernes, rapides et conformes aux besoins métiers.',
    stack: ['Next.js', 'Node.js', 'JavaScript', 'Figma']
  }
];

const skills = [
  ['Backend & architecture', ['.NET / ASP.NET Core', 'CQRS', 'Microservices', 'Refit', 'OpenTelemetry']],
  ['Frontend & design', ['Next.js', 'JavaScript', 'TypeScript', 'Figma']],
  ['Outils & qualité', ['Git / GitHub', 'Docker', 'Testcontainers', 'NSubstitute', 'SQL']]
];

const highlights = [
  { value: '3+', label: 'stages techniques' },
  { value: '.NET', label: 'expertise backend' },
  { value: 'Next.js', label: 'frontend moderne' }
];

export default function Home() {
  return (
    <main className="page">
      <header className="topbar">
        <a href="#home" className="brand">Marthy</a>
        <nav className="nav">
          <a href="#about">À propos</a>
          <a href="#projects">Projets</a>
          <a href="#skills">Compétences</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Ingénieure logicielle fullstack • Backend & architecture</p>
          <h1>Je transforme des idées complexes en produits fiables et élégants.</h1>
          <p className="lead">
            Je suis Marthy Sharon Taylor NLEND, étudiante en génie logiciel passionnée par les architectures solides,
            le clean code, la qualité logicielle et la création d’expériences digitales performantes.
          </p>
          <div className="actions">
            <a href="#projects" className="btn btn-primary">Voir mes projets</a>
            <a href="#contact" className="btn btn-secondary">Me contacter</a>
          </div>
        </div>

        <div className="card hero-card">
          <div className="avatar">MS</div>
          <div className="metrics">
            {highlights.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-heading">
          <p className="eyebrow">À propos</p>
          <h2>Une approche technique rigoureuse et orientée impact.</h2>
        </div>
        <div className="card about-card">
          <p>
            Je conçois des services backend solides, documentés et évolutifs, tout en apportant une vraie attention à l’expérience utilisateur.
            Mon objectif est de créer des solutions modernes, maintenables et prêtes à évoluer avec les besoins métiers.
          </p>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-heading">
          <p className="eyebrow">Projets</p>
          <h2>Réalisations marquantes</h2>
        </div>
        <div className="grid projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="card project-card">
              <h3>{project.title}</h3>
              <p className="company">{project.company}</p>
              <p>{project.description}</p>
              <div className="tags">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-heading">
          <p className="eyebrow">Compétences</p>
          <h2>Un socle technique solide et polyvalent</h2>
        </div>
        <div className="grid skills-grid">
          {skills.map(([title, items]) => (
            <article key={title} className="card skill-card">
              <h3>{title}</h3>
              <div className="tags">
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h2>Discutons de votre prochain projet</h2>
        </div>
        <div className="card contact-card">
          <p>GitHub : <a href="https://github.com/myselfonlybff" target="_blank" rel="noreferrer">github.com/myselfonlybff</a></p>
          <p>Localisation : Douala, Cameroun</p>
          <p>Disponible pour des missions de développement backend, fullstack et architecture logicielle.</p>
        </div>
      </section>
    </main>
  );
}
