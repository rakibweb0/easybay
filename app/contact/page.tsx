import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Easy Bay | Men\'s Fashion',
  description: 'Get in touch with Easy Bay for orders, support, and store details for premium men\'s fashion.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="max-w-5xl mx-auto px-4 py-16">
        <section className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-primary font-semibold">Contact</p>
            <h1 className="text-4xl md:text-5xl font-semibold">Reach Easy Bay for style support and orders.</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              We\'re here to help with product details, order support, and style questions. Reach out by phone, email, or visit our Rangpur store at the address below.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-border bg-muted p-8">
              <h2 className="text-2xl font-semibold mb-4">Contact details</h2>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li>
                  <strong>Phone:</strong>
                  <div>01521426630</div>
                  <div>01718505012</div>
                </li>
                <li>
                  <strong>Email:</strong>
                  <div>rakibce30@gmail.com</div>
                </li>
                <li>
                  <strong>Facebook:</strong>
                  <div>facebook/BDEasyBay</div>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-muted p-8">
              <h2 className="text-2xl font-semibold mb-4">Store Location</h2>
              <p className="text-sm text-muted-foreground leading-7">
                Shop #06, Helal Market, Grand Hotel More, Rangpur (Beside Salek Market).
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-muted p-8">
            <h2 className="text-2xl font-semibold mb-4">Need help?</h2>
            <p className="text-sm text-muted-foreground leading-7">
              Whether you want styling advice or need help with an order, our team is ready to assist. Send us an email or give us a call and we will respond as soon as possible.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
