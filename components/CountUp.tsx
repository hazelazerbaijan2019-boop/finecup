'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export default function CountUp({ end, suffix = '', prefix = '', duration = 1400, className = '' }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const el = ref.current
    if (!el) return

    const startTime = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(eased * end)
      el.textContent = prefix + current + suffix
      if (progress < 1) requestAnimationFrame(tick)
      else el.textContent = prefix + end + suffix
    }
    requestAnimationFrame(tick)
  }, [started, end, suffix, prefix, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{end}{suffix}
    </span>
  )
}
