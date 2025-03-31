import { About } from './components/about'
import { Benefits } from './components/benefits'
import { Contact } from './components/contact'
import { Description } from './components/description'
import { Features } from './components/features'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { Hero } from './components/hero'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Description />
        <Features />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App