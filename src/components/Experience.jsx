import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Company Inc.',
    period: '2023 - Present',
    description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting robust solutions.',
    technologies: ['React', 'Node.js', 'AWS', 'MongoDB']
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    period: '2021 - 2023',
    description: 'Developed and maintained multiple client projects, implemented RESTful APIs, and improved application performance by 40%.',
    technologies: ['React', 'Express', 'PostgreSQL', 'Docker']
  },
  {
    title: 'Frontend Developer',
    company: 'Startup Ventures',
    period: '2020 - 2021',
    description: 'Built responsive user interfaces, collaborated with design team to implement pixel-perfect designs, and optimized web performance.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Redux']
  }
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-light text-beige-900 dark:text-dark-text mb-12 text-center">
            Experience
          </h3>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-beige-300 dark:border-dark-muted/30"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-beige-600 dark:bg-beige-500"></div>
                
                <div className="pb-8">
                  <h4 className="text-xl font-medium text-beige-900 dark:text-dark-text mb-1">
                    {exp.title}
                  </h4>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm text-beige-700 dark:text-dark-muted">
                      {exp.company}
                    </span>
                    <span className="text-sm text-beige-600 dark:text-dark-muted/70">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-sm text-beige-700 dark:text-dark-muted font-light leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map(tech => (
                      <span 
                        key={tech}
                        className="text-xs px-3 py-1 bg-beige-200 dark:bg-dark-bg text-beige-800 dark:text-dark-muted rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience