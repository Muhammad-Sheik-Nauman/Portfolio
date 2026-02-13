import { Suspense, lazy } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import SEO from './components/SEO'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'

// Lazy load non-critical components
const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Experience = lazy(() => import('./components/Experience'))
const Projects = lazy(() => import('./components/Projects'))
const GitHubGraph = lazy(() => import('./components/GitHubGraph'))
const Contact = lazy(() => import('./components/Contact'))

// Loading Spinner Component
const LoadingFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-10 h-10 border-4 border-beige-300 border-t-beige-800 rounded-full animate-spin"></div>
  </div>
)

function App() {
  return (
    <ThemeProvider>
      <SEO />
      <div className="min-h-screen bg-beige-50 dark:bg-dark-bg transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <Suspense fallback={<LoadingFallback />}>
            <Projects />
            <GitHubGraph />
            <Skills />
            <Experience />
            <About />
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
