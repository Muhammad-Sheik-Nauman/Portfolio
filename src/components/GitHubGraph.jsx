import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const GitHubGraph = () => {
  const [contributions, setContributions] = useState([])
  const [loading, setLoading] = useState(true)

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
  }

  const getColor = (count) => {
    if (count === 0) return 'bg-beige-200 dark:bg-dark-border'
    if (count <= 2) return 'bg-beige-400 dark:bg-beige-700/60'
    if (count <= 4) return 'bg-beige-500 dark:bg-beige-600/70'
    if (count <= 6) return 'bg-beige-600 dark:bg-beige-500/80'
    return 'bg-beige-700 dark:bg-beige-400/90'
  }

  // Tooltip state
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, content: '' })

  // Handle mouse events for tooltip
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
    <section className="py-20 px-6 bg-beige-100 dark:bg-dark-card relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-light text-beige-900 dark:text-dark-text mb-8 text-center">
            GitHub Activity
          </h3>
          {/* Creative animated grid */}
          {loading ? (
            <div className="text-center text-beige-600 dark:text-dark-muted">
              Loading contributions...
            </div>
          ) : (
            <div className="overflow-x-auto pb-4">
              <div className="inline-flex gap-1.5 min-w-full justify-center">
                {contributions.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-1.5">
                    {week.map((day, dayIndex) => (
                      <motion.div
                        key={dayIndex}
                        className={`w-3.5 h-3.5 rounded-sm ${getColor(day.count)} transition-all hover:ring-2 hover:ring-beige-500 dark:hover:ring-beige-400 hover:scale-110 cursor-pointer`}
                        onMouseEnter={e => handleMouseEnter(e, day)}
                        onMouseLeave={handleMouseLeave}
                        whileHover={{ scale: 1.25, rotate: 8 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        onClick={() => window.open(`https://github.com/Muhammad-Sheik-Nauman?tab=overview&from=${day.date}&to=${day.date}`, '_blank')}
                      />
                    ))}
                  </div>
                ))}
              </div>
              {/* Legend */}
              <div className="flex items-center justify-center gap-2 mt-6">
                <span className="text-xs text-beige-600 dark:text-dark-muted">Less</span>
                <div className="flex gap-1.5">
                  {[0, 2, 4, 6, 8].map((level) => (
                    <motion.div
                      key={level}
                      className={`w-3.5 h-3.5 rounded-sm ${getColor(level)}`}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: level * 0.1 }}
                    />
                  ))}
                </div>
                <span className="text-xs text-beige-600 dark:text-dark-muted">More</span>
              </div>
            </div>
          )}
          {/* Tooltip */}
          {tooltip.visible && (
            <div
              className="fixed z-50 px-3 py-1 rounded bg-beige-900 text-beige-100 dark:bg-dark-border dark:text-dark-text text-xs shadow-lg pointer-events-none"
              style={{ left: tooltip.x, top: tooltip.y }}
            >
              {tooltip.content}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default GitHubGraph
