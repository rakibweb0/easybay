import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Easy Bay | Men\'s Fashion',
  description: 'Learn more about Easy Bay and our commitment to premium menswear, modern design, and effortless wardrobe staples.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="max-w-5xl mx-auto px-4 py-16">
        <section className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-primary font-semibold">About Easy Bay</p>
            <h1 className="text-4xl md:text-5xl font-semibold">A modern menswear destination built for confident style.</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Easy Bay curates premium men\'s fashion essentials and statement pieces for the modern wardrobe. Our collection emphasizes clean silhouettes, versatile layering, and thoughtfully selected fabrics that feel as good as they look.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-border bg-muted p-8">
              <h2 className="text-2xl font-semibold mb-4">Our Philosophy</h2>
              <p className="text-sm text-muted-foreground leading-7">
                We believe men\'s fashion should be simple, intentional, and effortless. Easy Bay is dedicated to offering elevated wardrobe staples with a refined edge, designed to make dressing well feel natural and accessible.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-muted p-8">
              <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
              <p className="text-sm text-muted-foreground leading-7">
                From timeless jackets and premium knitwear to modern shirts and reliable basics, every piece is selected for quality, fit, and versatility. Whether you\'re updating your everyday rotation or shopping for a standout look, Easy Bay has you covered.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-muted p-8">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-sm text-muted-foreground leading-7">
              Easy Bay began with the goal of making premium men\'s fashion easy to shop and easy to wear. We care about delivering a polished edit of clothing that supports confidence, comfort, and contemporary style without the clutter.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
