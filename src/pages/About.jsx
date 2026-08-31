import SEO from '../components/SEO'

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Zephia Property Group is a Brisbane-based property acquisitions advisory — sourcing development and commercial opportunities across South East Queensland."
        path="/about"
      />
      <article className="bg-white">
        <header className="border-b border-black/5 bg-stone-50 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-zephia-navy">About Zephia</p>
            <h1 className="mt-6 max-w-3xl font-display text-4xl tracking-tight text-zephia-black sm:text-5xl md:text-6xl">
              Development acquisitions, delivered with discipline
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zephia-stone">
              Zephia is a Brisbane-based development acquisition firm focused on sourcing exceptional sites and shaping premium
              residential projects across South East Queensland — with market clarity, discretion, and a long view.
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-5xl space-y-14 lg:space-y-16">
            <section className="grid gap-x-16 gap-y-6 border-t border-black/10 pt-10 lg:grid-cols-[220px_1fr] lg:pt-14">
              <h2 className="font-display text-2xl text-zephia-black sm:text-3xl">Project acquisitions</h2>
              <div className="space-y-6">
                <p className="leading-relaxed text-zephia-stone">
                  The right project starts with the right site. We specialise in identifying and securing premium
                  residential opportunities — off market — where planning fundamentals and demand support a
                  high-quality outcome.
                </p>
                <p className="leading-relaxed text-zephia-stone">
                  Our process is deliberate: zoning and overlay review, constraints mapping, yield and mix testing,
                  and feasibilities.
                </p>
              </div>
            </section>
            <section className="grid gap-x-16 gap-y-6 border-t border-black/10 pt-10 lg:grid-cols-[220px_1fr] lg:pt-14">
              <h2 className="font-display text-2xl text-zephia-black sm:text-3xl">How we work</h2>
              <div className="space-y-6">
                <p className="leading-relaxed text-zephia-stone">
                  Our team is structured into two dedicated divisions, so every client receives guidance tailored to
                  their goals — from small mixed-use sites to large-scale development projects.
                </p>
                <p className="leading-relaxed text-zephia-stone">
                  On the development side, we specialise in identifying and acquiring high-potential sites with
                  strong strategic upside. We assess zoning, planning controls, overlays, infrastructure, and market
                  dynamics — combining detailed due diligence with a clear read on growth corridors and demand, so
                  clients secure sites that are well-located and primed for successful outcomes.
                </p>
                <p className="leading-relaxed text-zephia-stone">
                  On the commercial side, we help clients navigate the property market — acquiring owner-occupied
                  premises, securing high-performing investment assets, or expanding a portfolio — keeping every
                  acquisition commercially sound and aligned with their broader business goals.
                </p>
                <p className="leading-relaxed text-zephia-stone">
                  Our approach is grounded in transparency, communication, and genuine care — accessible,
                  approachable, and proactive at every step. Whether you&apos;re growing an investment portfolio or
                  securing your next development site, Zephia turns opportunities into rewarding outcomes.
                </p>
              </div>
            </section>
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

        <section className="border-t border-black/5 bg-stone-50 py-20 lg:py-28" aria-labelledby="team-heading">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-zephia-navy">Our team</p>
            <h2 id="team-heading" className="mt-6 max-w-3xl font-display text-3xl tracking-tight text-zephia-black sm:text-4xl md:text-5xl">
              Meet the people behind Zephia
            </h2>

            <figure className="mx-auto mt-12 max-w-4xl overflow-hidden bg-stone-200">
              <img
                src="/team/fiston-and-cormac.jpg"
                alt="Fiston Mopia and Cormac Buckley of Zephia Property Group"
                className="aspect-[3/2] w-full object-cover object-top"
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
              />
            </figure>

            <div className="mt-16 grid gap-12 md:grid-cols-2 lg:gap-16">
              <article>
                <div className="overflow-hidden bg-stone-200">
                  <img
                    src="/team/fiston.jpg"
                    alt="Fiston Mopia"
                    className="aspect-[4/5] w-full object-cover object-top"
                    width={800}
                    height={1000}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="mt-6 font-display text-2xl text-zephia-black sm:text-3xl">Fiston Mopia</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.25em] text-zephia-navy">Development &amp; Sales</p>
                <div className="mt-5 space-y-4 leading-relaxed text-zephia-stone">
                  <p>
                    Throughout his career, Fiston has had the privilege of assisting countless clients in achieving
                    their real estate dreams. His journey began with a strong foundation in residential and project
                    sales, which has enriched his understanding of the market and its nuances.
                  </p>
                  <p>
                    Fiston is driven by a vision to transform spaces into thriving communities. With a track record of
                    successfully delivering innovative real estate projects, he brings a unique blend of creativity,
                    strategic thinking, and meticulous planning to every endeavour.
                  </p>
                </div>
                <p className="mt-6 text-xs font-medium uppercase tracking-[0.25em] text-zephia-navy">Background &amp; expertise</p>
                <p className="mt-3 leading-relaxed text-zephia-stone">
                  With over three years of experience in property development and a further four years in project and
                  residential sales, he has honed his skills in conceptualising, planning, and executing a wide range of
                  projects — from residential and commercial developments to mixed-use complexes. His background in
                  sales and development has given him a holistic understanding of the real estate industry, and he is
                  ready to take on challenges of even greater magnitude.
                </p>
                <a
                  href="mailto:fiston@zephia.com.au"
                  className="mt-6 inline-flex items-center text-sm font-medium text-zephia-black underline decoration-zephia-navy decoration-1 underline-offset-8 transition hover:text-zephia-stone"
                >
                  fiston@zephia.com.au
                </a>
                <p className="mt-3 text-sm text-zephia-stone">
                  <a href="tel:+61404014550" className="transition hover:text-zephia-black">0404 014 550</a>
                </p>
              </article>

              <article>
                <div className="overflow-hidden bg-stone-200">
                  <img
                    src="/team/cormac.jpg"
                    alt="Cormac Buckley"
                    className="aspect-[4/5] w-full object-cover object-top"
                    width={800}
                    height={1000}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="mt-6 font-display text-2xl text-zephia-black sm:text-3xl">Cormac Buckley</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.25em] text-zephia-navy">Acquisitions &amp; Commercial</p>
                <div className="mt-5 space-y-4 leading-relaxed text-zephia-stone">
                  <p>
                    Cormac is a valued member of Zephia&apos;s team, bringing a strong passion for property and a genuine
                    commitment to delivering strategic outcomes for clients in the commercial and development space. With
                    a background in construction and renovations, as well as a sharp eye for opportunity, Cormac offers
                    practical insight, clear communication, and a disciplined approach to site acquisition.
                  </p>
                </div>
                <p className="mt-6 text-xs font-medium uppercase tracking-[0.25em] text-zephia-navy">Background &amp; expertise</p>
                <div className="mt-3 space-y-4 leading-relaxed text-zephia-stone">
                  <p>
                    He works closely with developers and commercial buyers to understand project objectives, investment
                    criteria, and long-term growth strategies. By carefully assessing sites, identifying potential, and
                    aligning opportunities with client goals, Cormac ensures each acquisition is strategically positioned
                    from the outset.
                  </p>
                  <p>
                    Cormac&apos;s enthusiasm for the market, combined with his professional and personable approach, makes
                    him a trusted advisor for those seeking development sites and commercial assets. All round, he is a
                    valued contributor to the continued growth of Zephia Property, with endless potential for the future
                    ahead.
                  </p>
                </div>
                <a
                  href="mailto:cormac@zephia.com.au"
                  className="mt-6 inline-flex items-center text-sm font-medium text-zephia-black underline decoration-zephia-navy decoration-1 underline-offset-8 transition hover:text-zephia-stone"
                >
                  cormac@zephia.com.au
                </a>
                <p className="mt-3 text-sm text-zephia-stone">
                  <a href="tel:+61457169904" className="transition hover:text-zephia-black">0457 169 904</a>
                </p>
              </article>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
