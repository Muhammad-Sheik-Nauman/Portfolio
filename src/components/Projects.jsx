const projects = [
  {
    title: 'FinWise',
    description: 'AI-powered finance platform featuring secure authentication, expense tracking, smart dashboards, and automated financial insights.',
    tech: ['Next Js', 'Gemini AI', 'Tailwind', 'Prisma', 'Shadcn UI'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'Whispr',
    description: 'WHISPR is an anonymous confession and message platform where users can send and receive honest or secret thoughts without revealing their identity.',
    tech: ['MongoDB', 'Express', 'React js', 'node'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'DropDeal',
    description: 'Smart price tracker app that monitors product prices and sends instant alerts when they drop',
    tech: ['React', 'Next JS', 'Supabase', 'Firecrawl', 'Shadcn'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'Coming Soon...',
    description: '',
    tech: [''],
    github: 'https://github.com',
    demo: 'https://example.com'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 border-b border-beige-400 dark:border-beige-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-6xl md:text-7xl font-extralight text-beige-900 dark:text-dark-text tracking-tight">
            Selected Works
          </h2>
          <p className="mt-4 text-lg text-beige-600 dark:text-dark-muted font-light">
            A collection of projects I've built
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative ${index % 2 === 0 ? 'md:pr-24' : 'md:pl-24'
                }`}
            >
              {/* Large Background Number */}
              <div
                className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'
                  } text-[180px] md:text-[240px] font-bold text-beige-300/45 dark:text-beige-800/30 leading-none select-none pointer-events-none`}
              >
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Content Container */}
              <div className="relative z-10">
                {/* Project Header */}
                <div className={`mb-6 ${index % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                  <h3 className="text-4xl md:text-5xl font-light text-beige-900 dark:text-dark-text mb-2 tracking-tight">
                    {project.title}
                  </h3>

                  {project.description && (
                    <p className="text-base md:text-lg text-beige-700 dark:text-dark-muted font-light leading-relaxed max-w-2xl">
                      {project.description}
                    </p>
                  )}
                </div>

                {/* Tech Stack */}
                {project.tech[0] && (
                  <div className={`flex flex-wrap gap-2 mb-6 ${index % 2 === 0 ? 'justify-start' : 'md:justify-end'}`}>
                    {project.tech.map(tech => (
                      <span
                        key={tech}
                        className="text-xs uppercase tracking-wider px-3 py-1 text-beige-600 dark:text-dark-muted border border-beige-300 dark:border-dark-border hover:border-beige-500 dark:hover:border-dark-accent transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Links */}
                <div className={`flex gap-8 ${index % 2 === 0 ? 'justify-start' : 'md:justify-end'}`}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link text-sm uppercase tracking-widest text-beige-700 dark:text-dark-muted hover:text-beige-900 dark:hover:text-dark-text transition-colors duration-200"
                  >
                    <span className="relative">
                      GitHub
                      <span className="absolute bottom-0 left-0 w-full h-px bg-beige-300 dark:bg-dark-border">
                        <span className="absolute inset-0 bg-beige-900 dark:bg-dark-accent scale-x-0 group-hover/link:scale-x-100 transition-transform duration-200 origin-left" />
                      </span>
                    </span>
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link text-sm uppercase tracking-widest text-beige-700 dark:text-dark-muted hover:text-beige-900 dark:hover:text-dark-text transition-colors duration-200"
                  >
                    <span className="relative">
                      Live Site
                      <span className="absolute bottom-0 left-0 w-full h-px bg-beige-300 dark:bg-dark-border">
                        <span className="absolute inset-0 bg-beige-900 dark:bg-dark-accent scale-x-0 group-hover/link:scale-x-100 transition-transform duration-200 origin-left" />
                      </span>
                    </span>
                  </a>
                </div>
              </div>

              {/* Bottom Border */}
              {index < projects.length - 1 && (
                <div className="mt-24 h-px bg-gradient-to-r from-beige-200 via-beige-300 to-beige-200 dark:from-dark-bg dark:via-dark-border dark:to-dark-bg" />
              )}
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="mt-32 text-center">
          <a
            href="#"
            className="group inline-flex items-center gap-3 text-sm uppercase tracking-widest text-beige-700 dark:text-dark-muted hover:text-beige-900 dark:hover:text-dark-text transition-colors duration-200"
          >
            <span className="relative">
              See More Projects
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

export default Projects
