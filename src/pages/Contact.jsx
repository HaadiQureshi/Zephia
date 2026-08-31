import { useState } from 'react'
import SEO from '../components/SEO'

export default function Contact() {
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xreolbze'

  const [status, setStatus] = useState('idle') // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    setStatus('submitting')
    setErrorMessage('')

    try {
      const form = e.currentTarget
      const formData = new FormData(form)

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (!res.ok) {
        let msg = 'Sorry — something went wrong. Please try again.'
        try {
          const data = await res.json()
          if (data?.errors?.length) {
            msg = data.errors.map((x) => x.message).filter(Boolean).join(' ')
          }
        } catch {
          // ignore JSON parsing errors
        }
        setErrorMessage(msg)
        setStatus('error')
        return
      }

      form.reset()
      setStatus('success')
    } catch {
      setErrorMessage('Network error — please check your connection and try again.')
      setStatus('error')
    }
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Contact Zephia Property Group — a Brisbane property acquisitions advisory. Enquire about development and commercial site opportunities across South East Queensland."
        path="/contact"
      />
      <div className="bg-white">
        <header className="border-b border-black/5 bg-stone-50 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h1 className="font-display text-4xl tracking-tight text-zephia-black sm:text-5xl md:text-6xl">Contact</h1>
            <p className="mt-6 max-w-2xl text-lg text-zephia-stone">
              Share a brief outline of your enquiry. For site submissions or investment, attach details through your
              email client after we respond.
            </p>
          </div>
        </header>

        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-16 lg:grid-cols-2 lg:gap-24 lg:px-8 lg:py-24">
          <div>
            <h2 className="font-display text-2xl text-zephia-black">Studio</h2>
            <address className="mt-6 not-italic text-zephia-stone">
              <p>Brisbane, Queensland, Australia</p>
              <p className="mt-4">
                <a className="text-zephia-black underline decoration-zephia-navy/50 underline-offset-4 hover:decoration-zephia-navy" href="mailto:info@zephia.com.au">
                  info@zephia.com.au
                </a>
              </p>
              <p className="mt-2">
                <a className="text-zephia-black underline decoration-zephia-navy/50 underline-offset-4 hover:decoration-zephia-navy" href="tel:+61404014550">
                  +61 404 014 550
                </a>
              </p>
            </address>
            <p className="mt-10 text-sm leading-relaxed text-zephia-stone">
              Enquiries are delivered via Formspree — no server required.
            </p>
          </div>

          <div>
            {status === 'success' ? (
              <div
                className="border border-zephia-navy/40 bg-stone-50 px-8 py-10"
                role="status"
                aria-live="polite"
              >
                <p className="font-display text-xl text-zephia-black">Thank you</p>
                <p className="mt-3 text-zephia-stone">
                  Thanks, we’ll be in touch shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                action={FORMSPREE_ENDPOINT}
                method="POST"
                className="space-y-8"
                noValidate
              >
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
                <div>
                  <label htmlFor="name" className="block text-xs font-medium uppercase tracking-[0.18em] text-zephia-stone">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="mt-2 w-full border border-black/15 bg-white px-4 py-3 text-zephia-black outline-none transition focus:border-zephia-navy focus:ring-2 focus:ring-zephia-navy/20"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium uppercase tracking-[0.18em] text-zephia-stone">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-2 w-full border border-black/15 bg-white px-4 py-3 text-zephia-black outline-none transition focus:border-zephia-navy focus:ring-2 focus:ring-zephia-navy/20"
                  />
                </div>
                <div>
                  <label htmlFor="topic" className="block text-xs font-medium uppercase tracking-[0.18em] text-zephia-stone">
                    Topic
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    className="mt-2 w-full border border-black/15 bg-white px-4 py-3 text-zephia-black outline-none transition focus:border-zephia-navy focus:ring-2 focus:ring-zephia-navy/20"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select…
                    </option>
                    <option value="project">Project enquiry</option>
                    <option value="investment">Investment / JV</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-medium uppercase tracking-[0.18em] text-zephia-stone">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-2 w-full resize-y border border-black/15 bg-white px-4 py-3 text-zephia-black outline-none transition focus:border-zephia-navy focus:ring-2 focus:ring-zephia-navy/20"
                  />
                </div>
                {status === 'error' && (
                  <p className="border border-red-500/30 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
                    {errorMessage || 'Sorry — something went wrong. Please try again.'}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className={[
                    'w-full min-h-[52px] bg-zephia-black text-xs font-medium uppercase tracking-[0.22em] text-white',
                    'transition-all duration-200 hover:bg-zephia-charcoal active:translate-y-[1px]',
                    'disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-zephia-black',
                  ].join(' ')}
                >
                  {status === 'submitting' ? 'Sending…' : 'Send message'}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-black/5">
          <iframe
            title="Zephia location — Brisbane CBD, Queensland"
            src="https://www.google.com/maps?q=Brisbane+CBD,+Queensland,+Australia&z=14&output=embed"
            className="block h-[360px] w-full sm:h-[420px] lg:h-[480px]"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </>
  )
}
