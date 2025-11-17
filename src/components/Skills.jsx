import { motion } from 'framer-motion'

const skills = [
  'React', 'JavaScript', 'TypeScript', 'Node.js',
  'Express', 'MongoDB', 'PostgreSQL', 'Tailwind CSS',
  'Git', 'REST APIs', 'GraphQL', 'Docker'
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-beige-100 dark:bg-dark-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-light text-beige-900 dark:text-dark-text mb-12 text-center">
            Skills
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-beige-50 dark:bg-dark-bg px-6 py-4 rounded-sm text-center shadow-sm hover:shadow-md dark:shadow-md dark:hover:shadow-xl dark:border dark:border-dark-border dark:hover:border-beige-600/30 transition-all duration-300"
              >
                <span className="text-sm font-light text-beige-800 dark:text-dark-accent">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
