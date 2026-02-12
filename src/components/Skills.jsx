const skills = [
  'React', 'JavaScript', 'TypeScript', 'Node.js',
  'Express', 'MongoDB', 'PostgreSQL', 'Tailwind CSS',
  'Next.js', 'Git', 'REST APIs', 'GraphQL'
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 border-b border-beige-400 dark:border-beige-800">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-3xl font-light text-beige-900 dark:text-dark-text mb-12">
          Skills
        </h3>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-5 py-2.5 text-sm text-beige-700 dark:text-dark-muted border border-beige-300 dark:border-dark-border rounded-full hover:border-beige-500 dark:hover:border-beige-600 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
