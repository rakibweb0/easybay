'use client'

import Cart from '@/components/cart'
import ProductGrid from '@/components/product-grid'
import { useEffect, useMemo, useState } from 'react'
import Header from './header'
import ProductModal from './product-modal'
import { ProductType } from '@/lib/types'
import Link from 'next/link'
import Image from 'next/image'
import { AspectRatio } from './ui/aspect-ratio'

export default function ProductSection({ products }: { products: ProductType[] }) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null)
  const selectedProduct = selectedProductId ? products.find(product => product._id === selectedProductId) : null

  const categories = useMemo(() => {
    return Array.from(
      new Set(
        products.map(product => product.category?.title ?? 'Uncategorized')
      )
    )
  }, [products])

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return products
    return products.filter(product => product.category?.title === selectedCategory)
  }, [products, selectedCategory])

  const [currentPage, setCurrentPage] = useState(1)
  const PRODUCTS_PER_PAGE = 12
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE))

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory, filteredProducts.length])

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * PRODUCTS_PER_PAGE
    return filteredProducts.slice(start, start + PRODUCTS_PER_PAGE)
  }, [filteredProducts, currentPage])

  return (
    <div className="min-h-screen bg-background">
      <Header isCartOpen={isCartOpen} onCartToggle={() => setIsCartOpen(prev => !prev)} />

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-primary font-semibold mb-4">
            Easy Bay
          </p>
          <h1 className="text-3xl md:text-6xl font-semibold text-foreground mb-6 leading-tight text-balance">
            Modern men&apos;s fashion, refined for every day.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Easy Bay brings you a curated edit of menswear essentials and sharp statement pieces. Shop premium jackets, shirts, knitwear, and accessories designed for confident style and lasting quality.
          </p>
        </div>

        {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-6 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === null
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-muted'
                }`}
              >
                All Products
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-muted'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

        {/* Products */}
        <div id="products" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {paginatedProducts.map(product => (
            <ProductGrid
              key={product._id}
              product={product}
              onProductClick={() => setSelectedProductId(product._id)}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-full border border-border bg-background text-sm font-medium transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition border border-border ${
                  page === currentPage
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background text-foreground hover:bg-muted'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-full border border-border bg-background text-sm font-medium transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="rounded-3xl border border-border bg-muted p-8 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-primary font-semibold mb-3">
            Exclusive menswear
          </p>
          <h2 className="text-3xl font-semibold text-foreground mb-4">
            Discover the latest drop from Easy Bay.
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-6">
            A premium collection of modern men&apos;s wardrobe essentials, crafted for confident everyday style. Shop bold silhouettes, refined staples, and standout pieces made to elevate your look.
          </p>
          <a
            href="#products"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
          >
            Explore the Collection
          </a>
        </div>
      </main>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProductId(null)} />
      )}

      {/* Cart Sidebar */}
      {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12">
        <div className="max-w-7xl mx-auto px-4 grid gap-10 md:grid-cols-3">
          <div>
            
            <Link href="/" >
              <AspectRatio ratio={16/2} className='w-28 md:w-36'>
                <Image src="/logo.png" alt="logo" fill className="object-contain" />
              </AspectRatio>
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Easy Bay is your destination for premium men&apos;s fashion. We curate sleek essentials, versatile layering pieces, and seasonal statement styles for modern wardrobes.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Phone: 01521426630</li>
              <li>Phone: 01718505012</li>
              <li>Email: rakibce30@gmail.com</li>
              <li>Facebook: facebook/BDEasyBay</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Location</h3>
            <p className="text-sm text-muted-foreground">
              Shop #06, Helal Market, Grand Hotel More, Rangpur (Beside Salek Market)
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
