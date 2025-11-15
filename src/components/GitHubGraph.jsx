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
      const username = 'yourusername'
      const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      const data = await response.json()
      
      if (data.contributions) {
        const recentContributions = data.contributions.slice(-364)
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
    for (let i = 0; i < 364; i++) {
      days.push({
        date: new Date(Date.now() - (363 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        count: Math.floor(Math.random() * 10),
        level: Math.floor(Math.random() * 5)
      })
    }
    setContributions(organizeByWeeks(days))
  }

  const getColor = (count) => {
    if (count === 0) return 'bg-beige-200 dark:bg-dark-bg'
    if (count <= 2) return 'bg-beige-400 dark:bg-beige-700'
    if (count <= 4) return 'bg-beige-500 dark:bg-beige-600'
    if (count <= 6) return 'bg-beige-600 dark:bg-beige-500'
    return 'bg-beige-700 dark:bg-beige-400'
  }

  return (
    <section className="py-20 px-6 bg-beige-100 dark:bg-dark-card">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-light text-beige-900 dark:text-dark-text mb-8 text-center">
            GitHub Activity
          </h3>
          
          {loading ? (
            <div className="text-center text-beige-600 dark:text-dark-muted">
              Loading contributions...
            </div>
          ) : (
            <div className="overflow-x-auto pb-4">
              <div className="inline-flex gap-1 min-w-full justify-center">
                {contributions.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-1">
                    {week.map((day, dayIndex) => (
                      <div
                        key={dayIndex}
                        className={`w-3 h-3 rounded-sm ${getColor(day.count)} transition-colors hover:ring-1 hover:ring-beige-500`}
                        title={`${day.date}: ${day.count} contributions`}
                      />
                    ))}
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-center gap-2 mt-6">
                <span className="text-xs text-beige-600 dark:text-dark-muted">Less</span>
                <div className="flex gap-1">
                  {[0, 2, 4, 6, 8].map((level) => (
                    <div
                      key={level}
                      className={`w-3 h-3 rounded-sm ${getColor(level)}`}
                    />
                  ))}
                </div>
                <span className="text-xs text-beige-600 dark:text-dark-muted">More</span>
              </div>
            </div>
          )}
          
          <p className="text-center text-sm text-beige-600 dark:text-dark-muted mt-6">
            Last 12 months of contributions
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default GitHubGraph
