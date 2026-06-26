import { PROJECTS } from '../data/content.js'

export default function Work() {
  return (
    <section id="work" className="work">
      <div className="section__head">
        <span className="section__label">Selected Work</span>
        <h2 className="section__title">Things I&rsquo;ve built</h2>
      </div>

      <div className="work__list">
        {PROJECTS.map((project) => (
          <a
            key={project.index}
            href={project.link}
            className="work__item"
            target={project.link !== '#' ? '_blank' : undefined}
            rel={project.link !== '#' ? 'noreferrer' : undefined}
          >
            <span className="work__index">{project.index}</span>

            <div className="work__main">
              <h3 className="work__title">{project.title}</h3>
              <p className="work__desc">{project.description}</p>
              <ul className="work__tags">
                {project.tags.map((tag) => (
                  <li key={tag} className="work__tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <span className="work__year">{project.year}</span>
            <span className="work__arrow" aria-hidden="true">
              &#8599;
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
