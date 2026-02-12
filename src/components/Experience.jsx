const experiences = [
  {
    title: 'Frontend Intern',
    company: 'Joy Technologies',
    period: 'Sep - Oct 2024',
    description: ' as a Bubble Intern where I earned and applied no-code development concepts to build basic web applications. Created simple pages, forms, and workflows, managed basic database structures, and gained hands-on experience in building functional apps.',
    technologies: ['Bubble']
  },
  {
    title: 'Open Source',
    company: 'Github',
    period: 'Ongoing',
    description: 'Contributed to open-source projects by improving UI themes, fixing responsive design issues, and enhancing overall user experience through clean, maintainable changes.',
    technologies: ['JavaScript', 'Tailwind CSS', 'Git']
  }
]

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-6 border-b border-beige-400 dark:border-beige-800">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-6xl md:text-7xl font-extralight text-beige-900 dark:text-dark-text tracking-tight mb-4">
            Experience
          </h2>
          <p className="text-lg text-beige-600 dark:text-dark-muted font-light">
            Where I've worked and contributed
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group border border-beige-300 dark:border-dark-border hover:border-beige-400 dark:hover:border-dark-accent transition-colors duration-200"
            >
              <div className="p-8 md:p-10">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6 pb-6 border-b border-beige-200 dark:border-dark-border">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-light text-beige-900 dark:text-dark-text mb-2">
                      {exp.title}
                    </h3>
                    <div className="text-base text-beige-700 dark:text-dark-muted">
                      {exp.company}
                    </div>
                  </div>

                  <div className="text-sm uppercase tracking-widest text-beige-600 dark:text-dark-muted md:text-right">
                    {exp.period}
                  </div>
                </div>

                {/* Description */}
                <p className="text-base text-beige-700 dark:text-dark-muted font-light leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map(tech => (
                    <span
                      key={tech}
                      className="text-xs uppercase tracking-wider px-3 py-1.5 text-beige-600 dark:text-dark-muted border border-beige-300 dark:border-dark-border hover:border-beige-500 dark:hover:border-dark-accent transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add More Link */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="group inline-flex items-center gap-3 text-sm uppercase tracking-widest text-beige-700 dark:text-dark-muted hover:text-beige-900 dark:hover:text-dark-text transition-colors duration-200"
          >
            <span className="relative">
              View Resume
              <span className="absolute bottom-0 left-0 w-full h-px bg-beige-300 dark:bg-dark-border">
                <span className="absolute inset-0 bg-beige-900 dark:bg-dark-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
              </span>
            </span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Experience