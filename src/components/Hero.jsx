import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-3xl text-center"
      >
        <h2 className="text-5xl md:text-6xl font-light text-beige-900 dark:text-dark-text mb-6">
          Hello, I'm  <span className="font-medium">Muhammad Sheik Nauman</span>
        </h2>
        
        <p className="text-lg md:text-xl text-beige-700 dark:text-dark-muted font-light mb-4">
          Full Stack Developer
        </p>
        
        <p className="text-base md:text-lg text-beige-600 dark:text-dark-muted font-light max-w-2xl mx-auto mb-10">
          I craft clean, functional web experiences with attention to detail and user-centered design.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-beige-800 dark:bg-beige-600 text-beige-50 dark:text-dark-bg text-sm font-light rounded-sm hover:bg-beige-900 dark:hover:bg-beige-500 transition-all duration-300 shadow-sm dark:shadow-lg dark:shadow-beige-600/20"
          >
            View My Work
          </button>
          
   
          <a
            href="/resume_me.pdf"
            download="Muhammad-Sheik-Nauman-Resume.pdf"
            className="px-8 py-3 border-2 border-beige-800 dark:border-beige-500 text-beige-800 dark:text-beige-400 text-sm font-light rounded-sm hover:bg-beige-800 hover:text-beige-50 dark:hover:bg-beige-600 dark:hover:border-beige-600 dark:hover:text-dark-bg transition-all duration-300 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
