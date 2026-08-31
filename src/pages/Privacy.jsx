import SEO from '../components/SEO'

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for Zephia Property Group — how we collect, use, and protect your personal information."
        path="/privacy"
      />
      <article className="bg-white">
        <header className="border-b border-black/5 bg-stone-50 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-zephia-navy">Legal</p>
            <h1 className="mt-6 font-display text-4xl tracking-tight text-zephia-black sm:text-5xl md:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-6 text-sm text-zephia-stone">Last updated: August 2026</p>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="space-y-10 leading-relaxed text-zephia-stone">
            <p>
              Zephia Property Group (&ldquo;Zephia&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;)
              is committed to protecting your privacy. This policy explains how we collect, use, disclose, and
              safeguard your personal information in accordance with the Australian Privacy Principles (APPs) under
              the Privacy Act 1988 (Cth).
            </p>

            <section>
              <h2 className="font-display text-2xl text-zephia-black">Information we collect</h2>
              <p className="mt-4">
                We collect personal information you provide directly to us — typically your name, email address,
                phone number, and the details of your enquiry — when you contact us through our website form, by
                email, or by phone. We may also collect information relating to properties, sites, or investment
                opportunities you ask us to assess on your behalf.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-zephia-black">How we use your information</h2>
              <p className="mt-4">We use the personal information we collect to:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>respond to your enquiries and provide our acquisition and advisory services;</li>
                <li>communicate with you about opportunities, engagements, and updates relevant to your enquiry;</li>
                <li>maintain our business records; and</li>
                <li>comply with our legal and regulatory obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-zephia-black">Disclosure to third parties</h2>
              <p className="mt-4">
                We do not sell your personal information. We may share it with trusted service providers who help us
                operate our website and business. Enquiries submitted through our website form are processed by
                Formspree, a third-party form provider, which transmits your message to us by email. Our website also
                embeds Google Maps, which is subject to Google&apos;s own privacy policy. We may disclose information
                where required or authorised by law.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-zephia-black">Data storage and security</h2>
              <p className="mt-4">
                We take reasonable steps to protect your personal information from misuse, loss, and unauthorised
                access or disclosure. Some of our service providers may store data on servers located outside
                Australia; where this occurs, we take reasonable steps to ensure your information is handled in line
                with this policy and applicable law.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-zephia-black">Cookies</h2>
              <p className="mt-4">
                Our website may use cookies and similar technologies to support core functionality and understand how
                the site is used. You can control or disable cookies through your browser settings, though some
                features may not function as intended if you do.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-zephia-black">Access and correction</h2>
              <p className="mt-4">
                You may request access to the personal information we hold about you, and ask us to correct it if it
                is inaccurate, out of date, or incomplete. To make a request, please contact us using the details
                below.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-zephia-black">Changes to this policy</h2>
              <p className="mt-4">
                We may update this policy from time to time. The latest version will always be available on this page,
                with the &ldquo;last updated&rdquo; date revised accordingly.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-zephia-black">Contact us</h2>
              <p className="mt-4">
                If you have any questions about this Privacy Policy or how we handle your personal information, please
                contact us at{' '}
                <a
                  href="mailto:info@zephia.com.au"
                  className="text-zephia-black underline decoration-zephia-navy/50 underline-offset-4 hover:decoration-zephia-navy"
                >
                  info@zephia.com.au
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </article>
    </>
  )
}
