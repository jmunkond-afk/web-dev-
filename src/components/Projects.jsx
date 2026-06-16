import { projects } from '../data.js'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section__title">
          <span className="section__num">01.</span> Projects
        </h2>

        <div className="projects__grid">
          {projects.map((p) => (
            <article key={p.name} className="card project">
              <div className="project__top">
                <span className="project__folder" aria-hidden="true">
                  ▸
                </span>
                <div className="project__links">
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noreferrer" aria-label="Source code">
                      Code
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" aria-label="Live site">
                      Live
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project__name">{p.name}</h3>
              <p className="project__desc">{p.description}</p>

              <ul className="project__tech">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
