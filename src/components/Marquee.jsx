import { TECH_STACK } from '../data/content.js'

function MarqueeRow({ ariaHidden }) {
  return (
    <div className="marquee__row" aria-hidden={ariaHidden || undefined}>
      {TECH_STACK.map((tech, i) => (
        <span className="marquee__item" key={`${tech}-${i}`}>
          <span className="marquee__word">{tech}</span>
          <span className="marquee__glyph" aria-hidden="true">
            &#10022;
          </span>
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="marquee" role="list" aria-label="Core technologies">
      <div className="marquee__track">
        <MarqueeRow />
        <MarqueeRow ariaHidden />
        <MarqueeRow ariaHidden />
      </div>
    </div>
  )
}
