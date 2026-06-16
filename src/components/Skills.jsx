import { skills, experience } from '../data.js'

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <h2 className="section__title">
          <span className="section__num">02.</span> Skills &amp; Experience
        </h2>

        <div className="skills__layout">
          <div className="skills__groups">
            {skills.map((group) => (
              <div key={group.group} className="card skills__card">
                <h3 className="skills__heading">{group.group}</h3>
                <ul className="skills__tags">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <ol className="timeline">
            {experience.map((job, i) => (
              <li key={i} className="timeline__item">
                <div className="timeline__period">{job.period}</div>
                <h3 className="timeline__role">
                  {job.role} <span>· {job.company}</span>
                </h3>
                <p className="timeline__desc">{job.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
