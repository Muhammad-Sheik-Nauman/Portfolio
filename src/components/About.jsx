const About = () => {
  return (
    <section id="about" className="py-16 px-6 border-b border-beige-400 dark:border-beige-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-6xl md:text-7xl font-extralight text-beige-900 dark:text-dark-text tracking-tight mb-4">
            About Me
          </h2>
          <p className="text-lg text-beige-600 dark:text-dark-muted font-light">
            Developer, designer, and problem solver
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {/* Bio */}
          <div className="space-y-6 text-base md:text-lg text-beige-700 dark:text-dark-muted font-light leading-relaxed mb-10">
            <p>
              I’m a full-stack developer building scalable web applications with a focus on performance, security, and clean architecture. I specialize in modern technologies like Next.js, Prisma, and Tailwind, creating digital products that are both functional and production-ready.
            </p>
            <p>
              I’m driven by solving real problems through thoughtful system design and continuous improvement.
            </p>
          </div>

          {/* What I Do */}
          <div className="pt-6 border-t border-beige-300 dark:border-dark-border">
            <h3 className="text-2xl font-light text-beige-900 dark:text-dark-text mb-8">
              What I Do
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="text-sm uppercase tracking-widest text-beige-600 dark:text-dark-muted font-medium">
                  Frontend Development
                </div>
                <p className="text-sm text-beige-700 dark:text-dark-muted font-light leading-relaxed">
                  Building responsive and interactive user interfaces with modern frameworks
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-sm uppercase tracking-widest text-beige-600 dark:text-dark-muted font-medium">
                  UI/UX Design
                </div>
                <p className="text-sm text-beige-700 dark:text-dark-muted font-light leading-relaxed">
                  Creating intuitive and aesthetically pleasing digital experiences
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-sm uppercase tracking-widest text-beige-600 dark:text-dark-muted font-medium">
                  Web Development
                </div>
                <p className="text-sm text-beige-700 dark:text-dark-muted font-light leading-relaxed">
                  Full-stack development with focus on performance and scalability
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-sm uppercase tracking-widest text-beige-600 dark:text-dark-muted font-medium">
                  Open Source
                </div>
                <p className="text-sm text-beige-700 dark:text-dark-muted font-light leading-relaxed">
                  Contributing to community projects and sharing knowledge
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
