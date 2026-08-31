import { SITE_URL, SITE_NAME } from '../config'

/** LocalBusiness JSON-LD for rich results (address is placeholder — update for real NAP). */
export default function SchemaOrg() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: SITE_NAME,
    description:
      'Zephia Property Group — a specialist property acquisitions advisory across Brisbane and South East Queensland, focused on development and commercial sourcing.',
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
