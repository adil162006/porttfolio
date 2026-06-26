import { PROFILE } from '../data/content.js'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <p className="hero__eyebrow">
          <span className="hero__eyebrow-rule" aria-hidden="true" />
          {PROFILE.role} &mdash; {PROFILE.location}
        </p>

        <h1 className="hero__name">
          Mohammed Adil
          <br />
          Shaikh
        </h1>

        <div className="hero__row">
          <p className="hero__bio">{PROFILE.bio}</p>

          <dl className="hero__meta">
            <div className="hero__meta-item">
              <dt>Education</dt>
              <dd>{PROFILE.education}</dd>
            </div>
            <div className="hero__meta-item">
              <dt>CGPA</dt>
              <dd>{PROFILE.cgpa} / 10</dd>
            </div>
            <div className="hero__meta-item">
              <dt>Focus</dt>
              <dd>Full-stack &amp; applied AI</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
