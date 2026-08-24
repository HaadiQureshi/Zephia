import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo'

const nav = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function linkClass({ isActive }) {
  return [
    'text-sm tracking-[0.12em] uppercase transition-colors duration-300',
    isActive ? 'text-zephia-black' : 'text-zephia-stone hover:text-zephia-black',
  ].join(' ')
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <Logo
          to="/"
          sizeClassName="h-14 sm:h-16 md:h-20"
          className="max-w-[360px] sm:max-w-[440px]"
          onClick={() => setOpen(false)}
        />

        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass} end={item.end}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="min-h-[44px] min-w-[44px] rounded border border-black/10 px-3 text-xs font-medium uppercase tracking-[0.15em] text-zephia-black md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-black/5 bg-white md:hidden ${open ? 'block' : 'hidden'}`}
      >
        <nav className="flex flex-col gap-1 px-6 py-6" aria-label="Mobile primary">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  'py-3 text-sm tracking-[0.14em] uppercase',
                  isActive ? 'text-zephia-black' : 'text-zephia-stone',
                ].join(' ')
              }
              end={item.end}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
