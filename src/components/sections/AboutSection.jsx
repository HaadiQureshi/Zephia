import { Link } from 'react-router-dom'

export default function AboutSection() {
  return (
    <section className="bg-stone-50 py-24 lg:py-32" aria-labelledby="about-heading">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:gap-24 lg:px-8">
        <div>
          <h2 id="about-heading" className="font-display text-3xl tracking-tight text-zephia-black sm:text-4xl md:text-5xl">
            A Brisbane developer with a national eye for detail
          </h2>
          <p className="mt-8 text-base leading-relaxed text-zephia-stone sm:text-lg">
            Zephia partners with architects, planners, and investors to deliver boutique residential projects in
            Brisbane&apos;s most liveable corridors. Our work prioritises enduring materials, intelligent floor plans,
            and neighbourhoods that mature beautifully over time.
          </p>
          <p className="mt-6 text-base leading-relaxed text-zephia-stone sm:text-lg">
            From site acquisition through to delivery, we maintain a single thread of quality — so every Zephia
            address feels unmistakably considered.
          </p>
          <Link
            to="/about"
            className="mt-10 inline-flex items-center text-xs font-medium uppercase tracking-[0.2em] text-zephia-black underline decoration-zephia-gold decoration-1 underline-offset-8 transition hover:text-zephia-stone"
          >
            Our story
          </Link>
        </div>
        <figure className="relative aspect-[4/5] overflow-hidden bg-stone-200">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
            alt="Interior of a luxury living space with natural light and minimalist design"
            className="h-full w-full object-cover"
            width={1200}
            height={1500}
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </section>
  )
}
