'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface StatItem {
  end: number
  suffix: string
  label: string
  icon: string
}

const stats: StatItem[] = [
  { end: 14, suffix: '+', label: 'Years of Experience', icon: '🏆' },
  { end: 5, suffix: '', label: 'Service Areas', icon: '📍' },
  { end: 228, suffix: '', label: 'Google Reviews', icon: '⭐' },
  { end: 100, suffix: '%', label: 'Kid-Friendly Environment', icon: '😊' },
]

function CountUp({ end, suffix, duration = 2000 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = end / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, end, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default function StatsBar() {
  return (
    <section className="bg-bg-pearl py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="font-display text-5xl text-primary mb-1">
                <CountUp end={stat.end} suffix={stat.suffix} />
              </div>
              <p className="font-body text-text-body font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
