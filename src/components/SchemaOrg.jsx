import { SITE_URL, SITE_NAME } from '../config'

/** LocalBusiness JSON-LD for rich results (address is placeholder — update for real NAP). */
export default function SchemaOrg() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateDeveloper',
    name: SITE_NAME,
    description:
      'Premium property development in Brisbane — contemporary residences and curated developments across South East Queensland.',
    url: SITE_URL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Brisbane',
      addressRegion: 'QLD',
      addressCountry: 'AU',
    },
    areaServed: {
      '@type': 'City',
      name: 'Brisbane',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
