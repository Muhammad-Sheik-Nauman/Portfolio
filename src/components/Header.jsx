import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
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
        className={`fixed z-50 transition-all duration-500 ease-in-out ${
          scrolled 
            ? 'top-4 left-4 right-4 bg-white/60 dark:bg-black/60 backdrop-blur-3xl shadow-2xl border-2 border-beige-300/70 dark:border-beige-700/50 rounded-2xl' 
            : 'top-0 left-0 right-0 bg-transparent'
        }`}
      >
        <nav className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'py-2.5' : 'py-5'
        }`}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`group flex items-center gap-2.5 text-beige-900 dark:text-dark-text hover:opacity-70 transition-all duration-500 ${
              scrolled ? 'text-base' : 'text-lg'
            }`}
          >
            <div className="flex items-center gap-1">
              <span className="font-thin text-beige-600 dark:text-dark-muted">{`{`}</span>
              <span className="font-medium tracking-wide">YN</span>
              <span className="font-thin text-beige-600 dark:text-dark-muted">{`}`}</span>
            </div>
          </button>
          
          <div className="flex items-center gap-4">
            <ul className="hidden md:flex items-center gap-10">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`font-normal text-beige-700 dark:text-dark-muted hover:text-beige-900 dark:hover:text-dark-text transition-all duration-300 relative group ${
                      scrolled ? 'text-xs' : 'text-sm'
                    }`}
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-beige-900 dark:bg-dark-text transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
              ))}
            </ul>
            
            <button
              onClick={toggleTheme}
              className={`rounded-lg hover:bg-beige-200/60 dark:hover:bg-dark-card/60 transition-all duration-300 ${
                scrolled ? 'p-1.5' : 'p-2'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className={`text-beige-700 transition-all duration-300 ${
                  scrolled ? 'w-4 h-4' : 'w-5 h-5'
                }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className={`text-dark-text transition-all duration-300 ${
                  scrolled ? 'w-4 h-4' : 'w-5 h-5'
                }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden flex flex-col items-center justify-center gap-1.5 transition-all duration-300 ${
                scrolled ? 'w-7 h-7' : 'w-8 h-8'
              }`}
              aria-label="Toggle menu"
            >
              <span className={`block bg-beige-700 dark:bg-dark-text transition-all duration-300 ${
                scrolled ? 'w-5 h-[1.5px]' : 'w-6 h-[2px]'
              }`}></span>
              <span className={`block bg-beige-700 dark:bg-dark-text transition-all duration-300 ${
                scrolled ? 'w-5 h-[1.5px]' : 'w-6 h-[2px]'
              }`}></span>
              <span className={`block bg-beige-700 dark:bg-dark-text transition-all duration-300 ${
                scrolled ? 'w-5 h-[1.5px]' : 'w-6 h-[2px]'
              }`}></span>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-beige-50/95 dark:bg-dark-bg/95 backdrop-blur-2xl md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[70] flex items-center justify-center md:hidden"
            >
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-8 right-6 p-2 text-beige-700 dark:text-dark-text hover:text-beige-900 dark:hover:text-beige-300 transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <nav className="flex flex-col items-center space-y-8">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                    setMobileMenuOpen(false)
                  }}
                  className="text-4xl font-light text-beige-900 dark:text-dark-text hover:text-beige-700 dark:hover:text-beige-400 transition-colors"
                >
                  Home
                </motion.button>

                {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item, index) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + index * 0.05 }}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-4xl font-light text-beige-700 dark:text-dark-muted hover:text-beige-900 dark:hover:text-dark-text transition-colors"
                  >
                    {item}
                  </motion.button>
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
