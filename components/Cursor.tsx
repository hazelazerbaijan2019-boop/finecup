'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    dot.style.opacity = '1'
    ring.style.opacity = '1'

    let mx = -100, my = -100, rx = -100, ry = -100
    let rafId: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      dot.style.left = `${mx}px`
      dot.style.top = `${my}px`
    }

    const tick = () => {
      rx += (mx - rx) * 0.11
      ry += (my - ry) * 0.11
      ring.style.left = `${rx}px`
      ring.style.top = `${ry}px`
      rafId = requestAnimationFrame(tick)
    }

    const onEnter = () => ring.classList.add('hovered')
    const onLeave = () => ring.classList.remove('hovered')

    const bindHoverables = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    document.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(tick)
    bindHoverables()
    const observer = new MutationObserver(bindHoverables)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cur-dot" style={{ opacity: 0 }} />
      <div ref={ringRef} className="cur-ring" style={{ opacity: 0 }} />
    </>
  )
}
