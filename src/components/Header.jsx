import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Track active section
      const sections = ['home', 'projects', 'skills', 'experience', 'about', 'contact']
      const scrollPosition = window.scrollY + 150

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    handleScroll() // Initial check
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed z-50 transition-all duration-500 ease-in-out ${scrolled
          ? 'top-4 md:left-1/4 md:right-1/4 left-4 right-4 bg-white/40 dark:bg-dark-bg/90 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.15)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.7)] border border-beige-200 dark:border-beige-700/30 rounded-2xl'
          : 'top-0 left-0 right-0 bg-transparent border border-beige-200/40 dark:border-beige-700/20'
          }`}
      >
        <nav className={`mx-auto px-6 flex items-center justify-between transition-all duration-500 ${scrolled ? 'py-2.5 max-w-4xl' : 'py-5 max-w-7xl'
          }`}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`group flex items-center gap-2.5 text-beige-900 dark:text-beige-100 hover:opacity-70 transition-all duration-500 ${scrolled ? 'text-base' : 'text-lg'
              }`}
          >
            <div className="flex items-center gap-1">
              <span className="font-thin text-beige-600 dark:text-dark-muted">{`{`}</span>
              <span className="font-medium tracking-wide">nauman</span>
              <span className="font-thin text-beige-600 dark:text-dark-muted">{`}`}</span>
            </div>
          </button>

          <div className="flex items-center gap-2">
            <ul className="hidden lg:flex items-center gap-6">
              {['Projects', 'Skills', 'Experience', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`font-normal transition-all duration-300 relative group ${scrolled ? 'text-xs' : 'text-sm'
                      } ${activeSection === item.toLowerCase()
                        ? 'text-beige-900 dark:text-beige-100 font-medium'
                        : 'text-beige-700 dark:text-beige-100 hover:text-beige-900 dark:hover:text-beige-300'
                      }`}
                  >
                    {item}
                    <span className={`absolute -bottom-1 left-0 h-[2px] bg-beige-900 dark:bg-beige-300 transition-all duration-300 ${activeSection === item.toLowerCase()
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                      }`}></span>
                  </button>
                </li>
              ))}
            </ul>

            <button
              onClick={toggleTheme}
              className={`rounded-lg hover:bg-beige-200/60 dark:hover:bg-beige-700/40 transition-all duration-300 ${scrolled ? 'p-1.5' : 'p-2'
                }`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className={`text-beige-700 transition-all duration-300 ${scrolled ? 'w-4 h-4' : 'w-5 h-5'
                  }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className={`text-dark-text transition-all duration-300 ${scrolled ? 'w-4 h-4' : 'w-5 h-5'
                  }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden flex flex-col items-center justify-center gap-1.5 transition-all duration-300 ${scrolled ? 'w-7 h-7' : 'w-8 h-8'
                }`}
              aria-label="Toggle menu"
            >
              <svg className={`text-beige-900 dark:text-dark-text transition-all duration-300 ${scrolled ? 'w-6 h-6' : 'w-7 h-7'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M10 12h10M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            {/* Bottom Sheet */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.8 }}
              className="fixed left-0 right-0 bottom-0 z-[70] bg-white/95 dark:bg-dark-card/95 backdrop-blur-xl rounded-t-[2rem] shadow-[0_-8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_-8px_32px_rgba(0,0,0,0.6)] lg:hidden border-t border-beige-200 dark:border-beige-700/30"
            >
              {/* Drag Handle */}
              <div className="flex justify-center pt-4 pb-2">
                <div className="w-12 h-1.5 bg-beige-300 dark:bg-beige-700 rounded-full" />
              </div>

              {/* Close Button */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-6 right-6 p-2 text-beige-700 dark:text-dark-text hover:text-beige-900 dark:hover:text-beige-300 transition-colors rounded-lg hover:bg-beige-100 dark:hover:bg-beige-800/30"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation */}
              <nav className="flex flex-col items-center gap-1 px-8 pb-10 pt-8">
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                    setMobileMenuOpen(false)
                  }}
                  className={`text-xl font-light transition-all duration-200 w-full py-4 px-6 rounded-xl ${activeSection === 'home'
                    ? 'text-beige-900 dark:text-beige-100 bg-beige-100 dark:bg-beige-800/40 font-medium'
                    : 'text-beige-700 dark:text-beige-300 hover:text-beige-900 dark:hover:text-beige-100 hover:bg-beige-50 dark:hover:bg-beige-800/20'
                    }`}
                >
                  Home
                </button>
                {['Projects', 'Skills', 'Experience', 'About', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-xl font-light transition-all duration-200 w-full py-4 px-6 rounded-xl ${activeSection === item.toLowerCase()
                      ? 'text-beige-900 dark:text-beige-100 bg-beige-100 dark:bg-beige-800/40 font-medium'
                      : 'text-beige-700 dark:text-beige-300 hover:text-beige-900 dark:hover:text-beige-100 hover:bg-beige-50 dark:hover:bg-beige-800/20'
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
