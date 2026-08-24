const services = [
  {
    title: 'Site acquisitions',
    desc: 'Sourcing development sites and quiet opportunities across Brisbane and South East Queensland — with discretion and disciplined underwriting.',
    img: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1600&q=80',
    alt: 'Cranes above a development site at dusk',
  },
  {
    title: 'Development strategy',
    desc: 'We work closely with clients to align positioning, risk, and return from day one.',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
    alt: 'Architectural drawings and development planning materials on a desk',
  },
  {
    title: 'Project feasibility',
    desc: 'Feasibility modelling and scenario testing — so each opportunity is assessed with clarity, not optimism.',
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1600&q=80',
    alt: 'Financial feasibility analysis on paper and calculator',
  },
  {
    title: 'Planning and delivery',
    desc: 'Approvals, consultant coordination, and delivery oversight — keeping momentum without compromising the finish.',
    img: '/services/planning-delivery.png',
    alt: 'Zephia construction site — luxury home under construction with city skyline at golden hour',
  },
  {
    title: 'Development advisory',
    desc: 'Straightforward advice from acquisition to completion.',
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80',
    alt: 'Team reviewing project documents together',
  },
  {
    title: 'Market opportunity assessment',
    desc: 'We research the local market so you know where to buy and when.',
    img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80',
    alt: 'City precinct map and market research materials',
  },
]

export default function ServicesSection() {
  return (
    <section className="border-y border-black/5 bg-white py-24 lg:py-32" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 id="services-heading" className="font-display text-3xl tracking-tight text-zephia-black sm:text-4xl md:text-5xl">
          How we help
        </h2>
        <p className="mt-4 max-w-2xl text-zephia-stone">
          Development acquisitions and delivery support for teams seeking premium residential outcomes across
          Brisbane and South East Queensland.
        </p>
        <ul className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {services.map((s) => (
            <li key={s.title}>
              <div className="overflow-hidden bg-stone-100">
                <img
                  src={s.img}
                  alt={s.alt}
                  className="aspect-[4/3] w-full object-cover"
                  width={1600}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="mt-6 text-xs font-medium uppercase tracking-[0.25em] text-zephia-navy">{s.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-zephia-black/80">{s.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
