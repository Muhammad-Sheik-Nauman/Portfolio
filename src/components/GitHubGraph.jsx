import { useState, useEffect } from 'react'

const GitHubGraph = () => {
  const [contributions, setContributions] = useState([])
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({ total: 0, streak: 0 })

  useEffect(() => {
    fetchContributions()
  }, [])

  const fetchContributions = async () => {
    try {
      const username = 'Muhammad-Sheik-Nauman'
      const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      const data = await response.json()

      if (data.contributions) {
        const recentContributions = data.contributions.slice(-182)
        setContributions(organizeByWeeks(recentContributions))
        calculateStats(recentContributions)
      }
    } catch (error) {
      console.error('Error fetching contributions:', error)
      generateMockData()
    } finally {
      setLoading(false)
    }
  }

  const organizeByWeeks = (contributions) => {
    const weeks = []
    for (let i = 0; i < contributions.length; i += 7) {
      weeks.push(contributions.slice(i, i + 7))
    }
    return weeks
  }

  const calculateStats = (contributions) => {
    const total = contributions.reduce((sum, day) => sum + day.count, 0)
    let currentStreak = 0
    for (let i = contributions.length - 1; i >= 0; i--) {
      if (contributions[i].count > 0) {
        currentStreak++
      } else {
        break
      }
    }
    setStats({ total, streak: currentStreak })
  }

  const generateMockData = () => {
    const days = []
    for (let i = 0; i < 182; i++) {
      days.push({
        date: new Date(Date.now() - (181 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        count: Math.floor(Math.random() * 10),
        level: Math.floor(Math.random() * 5)
      })
    }
    setContributions(organizeByWeeks(days))
    calculateStats(days)
  }

  const getColor = (count) => {
    if (count === 0) return 'bg-transparent border border-beige-200/30 dark:border-dark-border/30'
    if (count <= 2) return 'bg-beige-400/60 dark:bg-beige-700/40'
    if (count <= 4) return 'bg-beige-500/70 dark:bg-beige-600/50'
    if (count <= 6) return 'bg-beige-600/80 dark:bg-beige-500/60'
    return 'bg-beige-700 dark:bg-beige-400/70'
  }

  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, content: '' })

  const handleMouseEnter = (event, day) => {
    const rect = event.target.getBoundingClientRect()
    setTooltip({
      visible: true,
      x: rect.left + rect.width / 2,
      y: rect.top - 10,
      content: `${day.date}: ${day.count} contributions`
    })
  }

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, visible: false })
  }

  return (
    <section className="py-16 px-6 border-b border-beige-400 dark:border-beige-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-6xl md:text-7xl font-extralight text-beige-900 dark:text-dark-text tracking-tight mb-4">
            GitHub Activity
          </h2>
          <p className="text-lg text-beige-600 dark:text-dark-muted font-light">
            Last 6 months of contributions
          </p>
        </div>

        {loading ? (
          <div className="text-center text-beige-600 dark:text-dark-muted py-20">
            Loading contributions...
          </div>
        ) : (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="border border-beige-300 dark:border-dark-border p-6">
                <div className="text-4xl font-extralight text-beige-900 dark:text-dark-text mb-2">
                  {stats.total}
                </div>
                <div className="text-xs uppercase tracking-widest text-beige-600 dark:text-dark-muted">
                  Total Contributions
                </div>
              </div>

              <div className="border border-beige-300 dark:border-dark-border p-6">
                <div className="text-4xl font-extralight text-beige-900 dark:text-dark-text mb-2">
                  {stats.streak}
                </div>
                <div className="text-xs uppercase tracking-widest text-beige-600 dark:text-dark-muted">
                  Day Streak
                </div>
              </div>

              <div className="border border-beige-300 dark:border-dark-border p-6">
                <div className="text-4xl font-extralight text-beige-900 dark:text-dark-text mb-2">
                  182
                </div>
                <div className="text-xs uppercase tracking-widest text-beige-600 dark:text-dark-muted">
                  Days Tracked
                </div>
              </div>

              <div className="border border-beige-300 dark:border-dark-border p-6">
                <div className="text-4xl font-extralight text-beige-900 dark:text-dark-text mb-2">
                  {Math.round(stats.total / 26)}
                </div>
                <div className="text-xs uppercase tracking-widest text-beige-600 dark:text-dark-muted">
                  Avg Per Week
                </div>
              </div>
            </div>

            {/* Contribution Graph */}
            <div className="border border-beige-300 dark:border-dark-border p-8 md:p-12">
              <div className="overflow-x-auto pb-10">
                <div className="inline-flex gap-2 min-w-full justify-center">
                  {contributions.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-2">
                      {week.map((day, dayIndex) => (
                        <div
                          key={dayIndex}
                          className={`w-4 h-4 rounded-sm ${getColor(day.count)} transition-all duration-200 hover:ring-1 hover:ring-beige-600 dark:hover:ring-dark-accent hover:scale-125 cursor-pointer`}
                          onMouseEnter={e => handleMouseEnter(e, day)}
                          onMouseLeave={handleMouseLeave}
                          onClick={() => window.open(`https://github.com/Muhammad-Sheik-Nauman?tab=overview&from=${day.date}&to=${day.date}`, '_blank')}
                        />
                      ))}
                    </div>
                  ))}
                </div>

                {/* Legend */}
                <div className="flex items-center justify-center gap-3 mt-12 pt-8 border-t border-beige-300 dark:border-dark-border">
                  <span className="text-xs uppercase tracking-wider text-beige-600 dark:text-dark-muted">Less</span>
                  <div className="flex gap-2">
                    {[0, 2, 4, 6, 8].map((level) => (
                      <div
                        key={level}
                        className={`w-4 h-4 rounded-sm ${getColor(level)}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs uppercase tracking-wider text-beige-600 dark:text-dark-muted">More</span>
                </div>
              </div>
            </div>

            {/* GitHub Link */}
            <div className="mt-12 text-center">
              <a
                href="https://github.com/Muhammad-Sheik-Nauman"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-sm uppercase tracking-widest text-beige-700 dark:text-dark-muted hover:text-beige-900 dark:hover:text-dark-text transition-colors duration-200"
              >
                <span className="relative">
                  View Full Profile
                  <span className="absolute bottom-0 left-0 w-full h-px bg-beige-300 dark:bg-dark-border">
                    <span className="absolute inset-0 bg-beige-900 dark:bg-dark-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
                  </span>
                </span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </>
        )}

        {/* Tooltip */}
        {tooltip.visible && (
          <div
            className="fixed z-50 px-3 py-2 bg-beige-900 text-beige-100 dark:bg-dark-text dark:text-dark-bg text-xs font-medium shadow-lg pointer-events-none"
            style={{ left: tooltip.x, top: tooltip.y, transform: 'translateX(-50%) translateY(-100%)' }}
          >
            {tooltip.content}
          </div>
        )}
      </div>
    </section>
  )
}

export default GitHubGraph
