import { EXPERIENCE, ACHIEVEMENTS, PROFILE } from '../data/content.js'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section__head">
        <span className="section__label">About</span>
        <h2 className="section__title">Background &amp; experience</h2>
      </div>

      <div className="about__grid">
        <p className="about__intro">
          Currently pursuing a B.Tech in Computer Engineering at VESIT, Mumbai,
          while working across freelance contracts and internships &mdash;
          moving between mobile apps, web dashboards, and the backend systems
          that hold them together.
        </p>

        <ul className="about__achievements">
          {ACHIEVEMENTS.map((item) => (
            <li key={item.label} className="about__achievement">
              <span className="about__achievement-value">{item.value}</span>
              <span className="about__achievement-label">{item.label}</span>
              <span className="about__achievement-detail">{item.detail}</span>
            </li>
          ))}
        </ul>
      </div>

      <ol className="timeline">
         <span className="section__label">Work</span>
        <h2 className="section__title">Experience</h2>
        {EXPERIENCE.map((item) => (
          <li key={item.role} className="timeline__item">
            <span className="timeline__period">{item.period}</span>
            <div className="timeline__body">
              <h3 className="timeline__role">
                {item.role}
                <span className="timeline__org"> &mdash; {item.org}</span>
              </h3>
              <p className="timeline__desc">{item.description}</p>
            </div>
            <span className="timeline__location">{item.location}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}
