import { SKILLS } from '../data/content.js'

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section__head">
        <span className="section__label">Skills</span>
        <h2 className="section__title">Toolkit</h2>
      </div>

      <div className="skills__grid">
        {SKILLS.map((group) => (
          <div key={group.group} className="skills__group">
            <h3 className="skills__group-title">{group.group}</h3>
            <ul className="skills__items">
              {group.items.map((item) => (
                <li key={item} className="skills__item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
