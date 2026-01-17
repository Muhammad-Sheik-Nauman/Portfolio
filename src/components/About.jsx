import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-shrink-0">
            <div className="w-48 h-48 rounded-lg overflow-hidden shadow-lg dark:shadow-2xl dark:shadow-black/50 bg-beige-300 dark:bg-dark-card ring-1 ring-beige-400/20 dark:ring-dark-border">
              <img 
                src="./profile.jpeg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-3xl font-light text-beige-900 dark:text-dark-text mb-6">
              About Me
            </h3>
            
            <div className="space-y-4 text-beige-700 dark:text-dark-muted font-light leading-relaxed">
              <p>
                I'm a passionate developer who loves building things for the web. My journey in development started with a curiosity about how websites work, and it has grown into a career of creating thoughtful digital experiences.
              </p>
              <p>
                I believe in writing clean, maintainable code and designing interfaces that are both beautiful and functional. Every project is an opportunity to learn something new and push the boundaries of what's possible.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open source, or enjoying a good cup of coffee while reading about design and development trends.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
