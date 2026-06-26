import { CONTACT } from '../data/content.js'

const CARDS = [
  {
    label: 'Email',
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    label: 'Phone',
    value: CONTACT.phone,
    href: `tel:${CONTACT.phone.replace(/\s+/g, '')}`,
  },
  {
    label: 'LinkedIn',
    value: 'in/mohdadilshaikh',
    href: CONTACT.linkedin,
  },
  {
    label: 'GitHub',
    value: 'mohdadilshaikh',
    href: CONTACT.github,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section__head">
        <span className="section__label">Contact</span>
        <h2 className="section__title">Let&rsquo;s talk</h2>
      </div>

      <p className="contact__lede">
        Open to internships, freelance work, and collaborations. The fastest
        way to reach me is email.
      </p>

      <div className="contact__grid">
        {CARDS.map((card) => (
          <a
            key={card.label}
            href={card.href}
            className="contact__card"
            target={card.href.startsWith('http') ? '_blank' : undefined}
            rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
          >
            <span className="contact__card-label">{card.label}</span>
            <span className="contact__card-value">{card.value}</span>
            <span className="contact__card-arrow" aria-hidden="true">
              &#8599;
            </span>
          </a>
        ))}
      </div>

      <footer className="footer">
        <span>&copy; {new Date().getFullYear()} Mohd Adil Shaikh</span>
        <span>Built with React &amp; Vite</span>
      </footer>
    </section>
  )
}
