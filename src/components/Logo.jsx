import { Link } from 'react-router-dom'

export default function Logo({
  to = '/',
  alt = 'Zephia',
  className = '',
  sizeClassName = 'h-8 sm:h-9 md:h-10',
  src = '/zephia-logo.png',
  onClick,
  scale = 1,
}) {
  const img = (
    <img
      src={src}
      alt={alt}
      className={`w-auto ${sizeClassName} object-contain ${className}`}
      draggable="false"
      loading="eager"
      decoding="async"
      style={scale !== 1 ? { transform: `scale(${scale})`, transformOrigin: 'left center' } : undefined}
    />
  )

  return to ? (
    <Link to={to} className="inline-flex items-center" aria-label={alt} onClick={onClick}>
      {img}
    </Link>
  ) : (
    <div className="inline-flex items-center">{img}</div>
  )
}

