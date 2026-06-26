import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Work from './components/Work.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Grain from './components/Grain.jsx'

export default function App() {
  return (
    <>
      <Grain />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <About />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
