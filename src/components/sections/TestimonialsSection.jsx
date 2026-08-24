const quotes = [
  {
    quote:
      'Zephia purchased a development site for us and made the whole process simple. Clear advice the whole way, and a result we were really happy with.',
    name: 'E. Morrison',
    role: 'Private investor, SEQ',
  },
  {
    quote:
      'Zephia found and purchased the right development site for us. They know the market well and kept everything easy to understand.',
    name: 'J. Nguyen',
    role: 'Brisbane developer',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-zephia-charcoal py-24 text-white lg:py-32" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 id="testimonials-heading" className="font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
          Trusted by partners who value craft
        </h2>
        <ul className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
          {quotes.map((q) => (
            <li key={q.name}>
              <figure>
                <blockquote className="text-lg leading-relaxed text-white/90 sm:text-xl">&ldquo;{q.quote}&rdquo;</blockquote>
                <figcaption className="mt-8">
                  <p className="text-sm font-medium text-white">{q.name}</p>
                  <p className="mt-1 text-sm text-white/50">{q.role}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
