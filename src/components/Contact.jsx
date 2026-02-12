const Contact = () => {
  const links = [
    {
      name: 'Email',
      handle: 'noumansheik07@gmail.com',
      url: 'mailto:noumansheik07@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      handle: 'Muhammad Sheik Nauman',
      url: 'https://www.linkedin.com/in/muhammad-sheik-nauman-811238293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    },
    {
      name: 'GitHub',
      handle: '@Muhammad-Sheik-Nauman',
      url: 'https://github.com/Muhammad-Sheik-Nauman',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      )
    }
  ]

  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-6xl md:text-7xl font-extralight text-beige-900 dark:text-dark-text tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-beige-600 dark:text-dark-muted font-light">
            Let's create something amazing together
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Message */}
          <div>
            <h3 className="text-2xl font-light text-beige-900 dark:text-dark-text mb-6">
              Have a project in mind?
            </h3>
            <p className="text-base text-beige-700 dark:text-dark-muted font-light leading-relaxed mb-8">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out.
            </p>

            {/* Quick Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-beige-600 dark:text-dark-muted mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <div className="text-sm text-beige-600 dark:text-dark-muted">Based in</div>
                  <div className="text-base text-beige-900 dark:text-dark-text font-light">India</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-beige-600 dark:text-dark-muted mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="text-sm text-beige-600 dark:text-dark-muted">Response time</div>
                  <div className="text-base text-beige-900 dark:text-dark-text font-light">Within 24 hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Links */}
          <div className="space-y-4">
            {links.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="group block border border-beige-300 dark:border-dark-border hover:border-beige-400 dark:hover:border-dark-accent transition-colors duration-200"
              >
                <div className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-beige-600 dark:text-dark-muted group-hover:text-beige-900 dark:group-hover:text-dark-accent transition-colors duration-200">
                      {link.icon}
                    </div>
                    <div>
                      <div className="text-sm uppercase tracking-widest text-beige-600 dark:text-dark-muted mb-1">
                        {link.name}
                      </div>
                      <div className="text-base text-beige-900 dark:text-dark-text font-light">
                        {link.handle}
                      </div>
                    </div>
                  </div>
                  <svg
                    className="w-5 h-5 text-beige-400 dark:text-dark-border group-hover:text-beige-900 dark:group-hover:text-dark-accent group-hover:translate-x-1 transition-all duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
