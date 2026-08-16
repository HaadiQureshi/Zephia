import { Helmet } from 'react-helmet-async'
import { SITE_URL, SITE_NAME } from '../config'

/** Share preview image — replace with your branded 1200×630 asset in /public when ready. */
const defaultOgImage =
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&h=630&q=80'

/**
 * Per-route SEO: title, description, canonical, Open Graph.
 * Replace og-default.jpg in /public when you have a real share image (1200×630).
 */
export default function SEO({
  title,
  description,
  path = '',
  image = defaultOgImage,
  noIndex = false,
}) {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Property Developer Brisbane`
  const url = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`

  return (
    <Helmet>
      <html lang="en-AU" />
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_AU" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
