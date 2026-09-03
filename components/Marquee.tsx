'use client'

interface MarqueeProps {
  items: string[]
  speed?: number
  dark?: boolean
}

export default function Marquee({ items, speed = 28, dark = false }: MarqueeProps) {
  const doubled = [...items, ...items]

  return (
    <div
      className={`overflow-hidden py-4 border-y ${
        dark ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-100'
      }`}
    >
      <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`inline-flex items-center gap-4 px-6 text-xs font-medium tracking-[0.2em] uppercase ${
              dark ? 'text-zinc-500' : 'text-zinc-400'
            }`}
          >
            {item}
            <span className={dark ? 'text-zinc-700' : 'text-zinc-200'}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
