import SEO from '../components/SEO'

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Zephia is a Brisbane-based property developer and acquisitions platform — sourcing premium sites and shaping disciplined residential projects across South East Queensland."
        path="/about"
      />
      <article className="bg-white">
        <header className="border-b border-black/5 bg-stone-50 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-zephia-gold">About Zephia</p>
            <h1 className="mt-6 max-w-3xl font-display text-4xl tracking-tight text-zephia-black sm:text-5xl md:text-6xl">
              Development acquisitions, delivered with discipline
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zephia-stone">
              Zephia is a Brisbane-based developer focused on sourcing exceptional sites and shaping premium
              residential projects across South East Queensland — with market clarity, discretion, and a long view.
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="font-display text-2xl text-zephia-black sm:text-3xl">Project acquisitions</h2>
              <p className="mt-6 leading-relaxed text-zephia-stone">
                The right project starts with the right site. We specialise in identifying and securing premium
                residential opportunities — on and off market — where planning fundamentals, amenity, and demand
                support a high-quality outcome.
              </p>
              <p className="mt-6 leading-relaxed text-zephia-stone">
                Our process is deliberate: zoning and overlay review, constraints mapping, yield and mix testing,
                and feasibility that remains conservative under pressure. If the numbers don’t hold, we don’t
                proceed.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-zephia-black sm:text-3xl">Strategy, planning, delivery</h2>
              <p className="mt-6 leading-relaxed text-zephia-stone">
                We guide projects from early strategy through approvals and delivery — aligning consultants,
                programme, and design intent so the finished result feels resolved, not compromised.
              </p>
              <p className="mt-6 leading-relaxed text-zephia-stone">
                With deep Brisbane and SEQ market knowledge, we focus on opportunities that can become profitable
                and sustainable developments — while respecting the streetscape, neighbours, and long-term value of
                place.
              </p>
            </div>
          </div>

          <figure className="mt-20 overflow-hidden bg-stone-200">
            <img
              src="https://images.unsplash.com/photo-1659563159297-6f724e125026?auto=format&fit=crop&w=2000&q=80"
              alt="Brisbane city skyline and the Story Bridge over the Brisbane River at dusk"
              className="aspect-[21/9] w-full object-cover"
              width={2000}
              height={857}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </article>
    </>
  )
}
