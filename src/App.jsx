import { useState, useCallback } from 'react'
import { Routes, Route } from 'react-router-dom'
import IntroAnimation from './components/IntroAnimation'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'

export default function App() {
  const [introComplete, setIntroComplete] = useState(false)

  const handleIntroDone = useCallback(() => {
    setIntroComplete(true)
  }, [])

  return (
    <>
      {!introComplete && <IntroAnimation onComplete={handleIntroDone} durationMs={2000} />}
      <div
        className={`min-h-svh transition-opacity duration-700 ease-out ${
          introComplete ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!introComplete}
      >
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </Layout>
      </div>
    </>
  )
}
