import About from './components/About'
import Contacts from './components/Contacts'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Story from './components/Story'

const App = () => {
  return (
    <main className='min-h-screen relative w-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contacts />
      <Footer />
    </main>
  )
}

export default App