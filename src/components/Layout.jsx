import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import SchemaOrg from './SchemaOrg'
import ScrollToTop from './ScrollToTop'

export default function Layout({ children }) {
  const location = useLocation()

  return (
    <div className="flex min-h-svh flex-col">
      <ScrollToTop />
      <SchemaOrg />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-zephia-gold"
      >
        Skip to main content
      </a>
      <Navbar key={location.pathname} />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
