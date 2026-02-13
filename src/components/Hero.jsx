import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 md:pt-32 md:pb-16 border-b border-beige-400 dark:border-beige-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Text Content */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-light text-beige-900 dark:text-dark-text mb-6 leading-tight">
            Hello, I'm <br />
            <span className="font-medium">Muhammad Sheik Nauman</span>
          </h1>

          <p className="text-xl md:text-2xl text-beige-700 dark:text-dark-muted font-light mb-6">
            Full Stack Developer
          </p>

          <p className="text-base md:text-lg text-beige-600 dark:text-dark-muted font-light max-w-lg mx-auto md:mx-0 mb-10 leading-relaxed">
            I build responsive, scalable web applications using modern JavaScript, React, Node.js, and full-stack technologies. Turning ideas into fast, secure, and user-focused products.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
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
        </div>

        {/* Image Content */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end mt-6 md:mt-0">
          <div className="relative w-56 h-56 md:w-80 md:h-80 bg-white dark:bg-[#2a2826] p-3 rounded-[2rem] shadow-2xl border border-beige-200 dark:border-beige-800 transform rotate-3 hover:rotate-0 transition-all duration-500">
            <img
              src="./profile.jpeg"
              alt="Muhammad Sheik Nauman"
              className="w-full h-full object-cover rounded-[1.5rem]"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
