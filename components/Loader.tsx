'use client'

import { useEffect, useState } from 'react'

export default function Loader() {
  const [leaving, setLeaving] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const t1 = setTimeout(() => setLeaving(true), 1700)
    const t2 = setTimeout(() => {
      setGone(true)
      document.body.style.overflow = ''
    }, 2450)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (gone) return null

  return (
    <div className={`loader-overlay${leaving ? ' leaving' : ''}`}>
      <div className="loader-logo">
        <span>F</span><span>I</span><span>N</span><span>E</span>
        <span className="ldr-sep">·</span>
        <span>C</span><span>U</span><span>P</span>
      </div>
      <div className="loader-bar-wrap">
        <div className="loader-bar-fill" />
      </div>
      <p className="loader-sub">Coffee Roasters — Bakı</p>
    </div>
  )
}
