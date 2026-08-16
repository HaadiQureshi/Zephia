import { Link } from 'react-router-dom'

const heroImage =
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=80'

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[85vh] items-end overflow-hidden bg-zephia-black"
      aria-labelledby="hero-heading"
    >
      <img
        src={heroImage}
        alt="Premium residential development under construction with crane and scaffolding"
        className="absolute inset-0 h-full w-full object-cover opacity-90"
        width={2400}
        height={1600}
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20" aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-8 lg:pb-28">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-zephia-gold">Brisbane · Property development</p>
        <h1 id="hero-heading" className="mt-6 max-w-3xl font-display text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Built for life. Designed for legacy.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
          Zephia delivers considered residential developments across South East Queensland — where architecture,
          landscape, and investment discipline meet.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/projects"
            className="inline-flex min-h-[48px] items-center justify-center border border-white bg-white px-8 text-xs font-medium uppercase tracking-[0.2em] text-zephia-black transition hover:bg-transparent hover:text-white"
          >
            View projects
          </Link>
          <Link
            to="/contact"
            className="inline-flex min-h-[48px] items-center justify-center border border-white/40 px-8 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:border-white hover:bg-white/10"
          >
            Discuss an opportunity
          </Link>
        </div>
      </div>
    </section>
  )
}
