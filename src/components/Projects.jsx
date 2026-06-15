import { useState } from 'react'

const primaryProjects = [
  {
    title: 'FreshWay',
    description: 'AI-powered fish freshness assessment and marketplace platform. Built a hybrid ensemble pipeline combining MobileNetV2 CNN, OpenCV-based expert rules, and multi-view inference for robust freshness grading with geolocation-based buyer matching.',
    tech: ['Next.js', 'React', 'TypeScript', 'Flask', 'MongoDB', 'TensorFlow'],
    github: 'https://github.com/muhammad-sheik-nauman/freshway',
    demo: '#'
  },
  {
    title: 'Attendo',
    description: 'AI-powered smart classroom attendance system that recognizes multiple students from a single classroom photo using DeepFace (FaceNet512) embeddings and cosine-similarity matching, with automatic personalized Telegram notifications and JWT-secured admin dashboard.',
    tech: ['FastAPI', 'React', 'Tailwind CSS', 'MongoDB', 'DeepFace', 'RetinaFace'],
    github: 'https://github.com/muhammad-sheik-nauman/attendo',
    demo: 'https://attendo-ten.vercel.app'
  },
  {
    title: 'FinWise',
    description: 'AI-powered finance platform featuring secure authentication, expense tracking, smart dashboards, and automated financial insights.',
    tech: ['Next Js', 'Gemini AI', 'Tailwind', 'Prisma', 'Shadcn UI'],
    github: 'https://github.com/Muhammad-Sheik-Nauman/Finwise',
    demo: 'https://finwise-official.vercel.app/'
  },
]

const extraProjects = [
  {
    title: 'DropDeal',
    description: 'Smart price tracker app that monitors product prices and sends instant alerts when they drop',
    tech: ['React', 'Next JS', 'Supabase', 'Firecrawl', 'Shadcn'],
    github: 'https://github.com/Muhammad-Sheik-Nauman/DropDeal',
    demo: 'https://dropdeal.vercel.app/'
  },
  {
    title: 'PDFbro',
    description: 'PDFBro is a fast, free, and privacy-focused online platform providing essential PDF tools. No login required. No watermarks. Simple, secure, and easy to use',
    tech: ['Next Js', 'Tailwind CSS', 'shadcn/ui', 'Lucide React'],
    github: 'https://github.com/Muhammad-Sheik-Nauman/PDFbro',
    demo: 'https://pdfbro.me/'
  },
  {
    title: 'Whispr',
    description: 'WHISPR is an anonymous confession and message platform where users can send and receive honest or secret thoughts without revealing their identity.',
    tech: ['MongoDB', 'Express', 'React js', 'node'],
    github: 'https://github.com/Muhammad-Sheik-Nauman/Whispr-a_anonymous_confession_platform',
    demo: 'https://whispr-official.vercel.app/'
  },
]

const ProjectCard = ({ project, index, globalIndex }) => (
  <div
    className={`group relative ${index % 2 === 0 ? 'md:pr-24' : 'md:pl-24'}`}
  >
    {/* Large Background Number */}
    <div
      className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'
        } text-[180px] md:text-[240px] font-bold text-beige-300/45 dark:text-beige-800/30 leading-none select-none pointer-events-none`}
    >
      {String(globalIndex + 1).padStart(2, '0')}
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

        {project.demo && project.demo !== '#' && (
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
        )}
      </div>
    </div>
  </div>
)

const Projects = () => {
  const [showMore, setShowMore] = useState(false)

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

        {/* Primary Projects (always visible) */}
        <div className="space-y-24">
          {primaryProjects.map((project, index) => (
            <div key={project.title}>
              <ProjectCard project={project} index={index} globalIndex={index} />
              {/* Divider after each primary project */}
              <div className="mt-24 h-px bg-gradient-to-r from-beige-200 via-beige-300 to-beige-200 dark:from-dark-bg dark:via-dark-border dark:to-dark-bg" />
            </div>
          ))}
        </div>

        {/* Extra Projects (revealed on See More) */}
        <div
          className="overflow-hidden transition-all duration-700 ease-in-out"
          style={{ maxHeight: showMore ? '3000px' : '0px', opacity: showMore ? 1 : 0 }}
        >
          <div className="space-y-24 pt-24">
            {extraProjects.map((project, index) => (
              <div key={project.title}>
                <ProjectCard
                  project={project}
                  index={index}
                  globalIndex={primaryProjects.length + index}
                />
                {index < extraProjects.length - 1 && (
                  <div className="mt-24 h-px bg-gradient-to-r from-beige-200 via-beige-300 to-beige-200 dark:from-dark-bg dark:via-dark-border dark:to-dark-bg" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* See More / See Less Button */}
        <div className="mt-32 text-center">
          <button
            onClick={() => setShowMore(prev => !prev)}
            className="group inline-flex items-center gap-3 text-sm uppercase tracking-widest text-beige-700 dark:text-dark-muted hover:text-beige-900 dark:hover:text-dark-text transition-colors duration-200 bg-transparent border-none cursor-pointer"
          >
            <span className="relative">
              {showMore ? 'Show Less' : 'See More Projects'}
              <span className="absolute bottom-0 left-0 w-full h-px bg-beige-300 dark:bg-dark-border">
                <span className="absolute inset-0 bg-beige-900 dark:bg-dark-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
              </span>
            </span>
            <svg
              className={`w-4 h-4 transition-all duration-300 ${showMore ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
