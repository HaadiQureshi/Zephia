import SEO from '../components/SEO'

const projects = [
  {
    name: 'Arbor Ridge Subdivision',
    area: 'Wynnum',
    status: 'Planning',
    type: 'Premium Residential Subdivision',
    desc: 'Multi-lot subdivision opportunity shaped by services, staging, and strong owner-occupier fundamentals.',
    img: '/projects/arbor-ridge.png',
    alt: 'Arbor Ridge Subdivision — aerial view of a Brisbane residential subdivision estate',
  },
  {
    name: 'Stoneleaf Townhomes',
    area: 'Paddington',
    status: 'Under construction',
    type: 'Architecturally Designed Townhomes',
    desc: 'A boutique townhouse collection prioritising light, privacy, and a calm, durable material palette.',
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1400&q=80',
    alt: 'Architectural townhouse facades in an inner Brisbane neighbourhood',
  },
  {
    name: 'Haven Row',
    area: 'Bulimba',
    status: 'Completed',
    type: 'Boutique Multi-Residential Project',
    desc: 'Design-led residences delivered with considered landscape, acoustic performance, and longevity of finish.',
    img: '/projects/haven-row.png',
    alt: 'Haven Row townhouse collection — contemporary Brisbane streetscape',
  },
  {
    name: 'Parkside Terraces',
    area: 'Coorparoo',
    status: 'Feasibility',
    type: 'Multi-Lot Development Opportunity',
    desc: 'Early-stage feasibility and yield testing for a refined terrace product with strong walkability.',
    img: '/projects/parkside-terraces.png',
    alt: 'Parkside Terraces — modern Brisbane townhomes with refined facade detailing',
  },
]

export default function Projects() {
  return (
    <>
      <SEO
        title="Projects"
        description="Explore Zephia development projects across Brisbane — subdivisions, townhomes, and boutique multi-residential opportunities."
        path="/projects"
      />
      <div className="bg-white">
        <header className="border-b border-black/5 bg-stone-50 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h1 className="font-display text-4xl tracking-tight text-zephia-black sm:text-5xl md:text-6xl">Projects</h1>
            <p className="mt-6 max-w-2xl text-lg text-zephia-stone">
              A curated view of Zephia-led development opportunities — subdivisions, townhomes, and boutique
              multi-residential projects across Brisbane. Imagery is representative.
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <ul className="grid gap-12 md:grid-cols-2">
            {projects.map((p) => (
              <li key={p.name}>
                <article>
                  <div className="overflow-hidden bg-stone-200">
                    <img
                      src={p.img}
                      alt={p.alt}
                      className="h-44 w-full object-cover sm:h-48"
                      width={1400}
                      height={900}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="mt-6 flex flex-wrap items-baseline justify-between gap-2">
                    <h2 className="font-display text-2xl text-zephia-black">{p.name}</h2>
                    <span className="text-xs font-medium uppercase tracking-[0.15em] text-zephia-gold">{p.status}</span>
                  </div>
                  <p className="mt-1 text-sm text-zephia-stone">{p.area}, Brisbane</p>
                  <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-zephia-black/70">{p.type}</p>
                  <p className="mt-3 max-w-prose text-sm leading-relaxed text-zephia-stone">{p.desc}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
