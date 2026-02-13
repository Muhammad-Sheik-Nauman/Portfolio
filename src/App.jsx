import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import GitHubGraph from './components/GitHubGraph'
import Contact from './components/Contact'
import Footer from './components/Footer'

import { Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-beige-50 dark:bg-dark-bg transition-colors duration-300">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Projects />
                <GitHubGraph />
                <Skills />
                <Experience />
                <About />
                <Contact />
              </>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
