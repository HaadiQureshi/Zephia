import { Link } from 'react-router-dom'
import { SITE_NAME } from '../config'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-zephia-charcoal text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo
            to="/"
            sizeClassName="h-14 sm:h-16"
            className="max-w-[420px] drop-shadow-[0_1px_0_rgba(0,0,0,0.35)]"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            We secure the sites great developments are built on — across South East Queensland.
          </p>
        </div>
        <div>
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-zephia-silver">Navigation</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>
              <Link className="transition-colors hover:text-white" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="transition-colors hover:text-white" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-zephia-silver">Contact</h2>
          <address className="mt-4 not-italic text-sm leading-relaxed text-white/75">
            <p>Brisbane, Queensland</p>
            <p className="mt-2">
              <a className="hover:text-white" href="mailto:admin@zephia.com.au">
                admin@zephia.com.au
              </a>
            </p>
            <p className="mt-1">
              <a className="hover:text-white" href="tel:+61404014550">
                +61 404 014 550
              </a>
            </p>
          </address>
        </div>
        <div>
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-zephia-silver">Connect</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>
              <a href="#" className="transition-colors hover:text-white">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-white">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-8 text-xs text-white/45 sm:flex-row sm:items-center lg:px-8">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p className="text-white/40">Property developer · Brisbane &amp; SEQ</p>
        </div>
      </div>
    </footer>
  )
}
