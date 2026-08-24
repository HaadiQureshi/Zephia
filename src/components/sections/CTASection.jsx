import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32" aria-labelledby="cta-heading">
      <img
        src="https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?auto=format&fit=crop&w=2400&q=80"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        width={2400}
        height={1200}
        loading="lazy"
        decoding="async"
        role="presentation"
      />
      <div className="absolute inset-0 bg-zephia-black/75" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">
        <h2 id="cta-heading" className="font-display text-3xl text-white sm:text-4xl md:text-5xl">
          Discuss your next site or partnership
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">
          Whether you hold land, capital, or a brief — we are always open to thoughtful conversations.
        </p>
        <Link
          to="/contact"
          className="mt-10 inline-flex min-h-[52px] items-center justify-center border border-white bg-white px-10 text-xs font-medium uppercase tracking-[0.22em] text-zephia-black transition hover:bg-transparent hover:text-white"
        >
          Get in touch
        </Link>
      </div>
    </section>
  )
}
