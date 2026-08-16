import { useEffect, useState } from 'react'

/**
 * Full-screen brand intro: fade + scale, then calls onComplete.
 * durationMs is total time before exit animation starts (~2s as requested).
 */
export default function IntroAnimation({ onComplete, durationMs = 2000 }) {
  const [phase, setPhase] = useState('enter')

  useEffect(() => {
    const t1 = window.setTimeout(() => setPhase('hold'), 400)
    const t2 = window.setTimeout(() => setPhase('exit'), durationMs)
    const t3 = window.setTimeout(() => onComplete?.(), durationMs + 700)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [onComplete, durationMs])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-zephia-black"
      role="presentation"
      aria-hidden="true"
    >
      <div
        className={[
          'font-display text-5xl tracking-[0.35em] text-white sm:text-6xl md:text-7xl',
          'transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
          phase === 'enter' && 'scale-90 opacity-0',
          phase === 'hold' && 'scale-100 opacity-100',
          phase === 'exit' && 'scale-105 opacity-0',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        ZEPHIA
      </div>
    </div>
  )
}
