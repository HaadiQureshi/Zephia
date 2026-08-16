import { Link } from 'react-router-dom'

const featured = [
  {
    title: 'Arbor Ridge Subdivision',
    loc: 'Wynnum, Brisbane',
    stage: 'Planning',
    desc: 'Premium multi-lot residential subdivision with disciplined staging and services coordination.',
    img: '/projects/arbor-ridge.png',
    alt: 'Arbor Ridge Subdivision — aerial view of a Brisbane residential subdivision estate',
  },
  {
    title: 'Stoneleaf Townhomes',
    loc: 'Paddington, Brisbane',
    stage: 'Under construction',
    desc: 'Architecturally designed townhouse collection with a refined material palette and generous light.',
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1200&q=80',
    alt: 'Architectural townhouse facades in an inner Brisbane neighbourhood',
  },
  {
    title: 'Haven Row',
    loc: 'Bulimba, Brisbane',
    stage: 'Completed',
    desc: 'Boutique multi-residential project delivered with a focus on privacy, landscape, and longevity.',
    img: '/projects/haven-row.png',
    alt: 'Haven Row townhouse collection — contemporary Brisbane streetscape',
  },
]

export default function ProjectsSection() {
  return (
    <section className="py-24 lg:py-32" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 id="projects-heading" className="font-display text-3xl tracking-tight text-zephia-black sm:text-4xl md:text-5xl">
              Featured projects
            </h2>
            <p className="mt-4 max-w-xl text-zephia-stone">
              Subdivisions, townhomes, and boutique multi-residential projects — curated across Brisbane and SEQ.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex min-h-[44px] items-center justify-center border border-zephia-black px-6 text-xs font-medium uppercase tracking-[0.2em] text-zephia-black transition hover:bg-zephia-black hover:text-white"
          >
            All projects
          </Link>
        </div>
        <ul className="mt-16 grid gap-10 md:grid-cols-3">
          {featured.map((p) => (
            <li key={p.title}>
              <article className="group">
                <div className="overflow-hidden bg-stone-200">
                  <img
                    src={p.img}
                    alt={p.alt}
                    className="h-40 w-full object-cover transition duration-700 group-hover:scale-[1.02] sm:h-44"
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="mt-6 font-display text-xl text-zephia-black">{p.title}</h3>
                <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm text-zephia-stone">{p.loc}</p>
                  <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-zephia-gold">
                    {p.stage}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zephia-stone">{p.desc}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
