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
          Hello, I'm <span className="font-medium">Your Name</span>
        </h2>
        
        <p className="text-lg md:text-xl text-beige-700 dark:text-dark-muted font-light mb-4">
          Full Stack Developer
        </p>
        
        <p className="text-base md:text-lg text-beige-600 dark:text-dark-muted font-light max-w-2xl mx-auto mb-10">
          I craft clean, functional web experiences with attention to detail and user-centered design.
        </p>
        
        <button 
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-3 bg-beige-800 dark:bg-dark-card text-beige-50 dark:text-dark-text text-sm font-light rounded-sm hover:bg-beige-900 dark:hover:bg-beige-700 transition-colors"
        >
          View My Work
        </button>
      </motion.div>
    </section>
  )
}

export default Hero
