'use client'

import Cart from '@/components/cart'
import ProductGrid from '@/components/product-grid'
import { useState } from 'react'
import Header from './header'
import ProductModal from './product-modal'
import { ProductType } from '@/lib/types'

export default function ProductSection({ products }: { products: ProductType[] }) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null)
  const selectedProduct = selectedProductId ? products.find(product => product._id === selectedProductId) : null

  return (
    <div className="min-h-screen bg-background">
      <Header isCartOpen={isCartOpen} onCartToggle={() => setIsCartOpen(prev => !prev)} />

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-light text-foreground mb-4 leading-tight text-balance">
            Curated collection of premium products
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover thoughtfully designed items for your home and lifestyle, crafted with quality and sustainability in mind
          </p>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductGrid
              key={product._id}
              product={product}
              onProductClick={() => setSelectedProductId(product._id)}
            />
          ))}
        </div>
      </main>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProductId(null)} />
      )}

      {/* Cart Sidebar */}
      {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
    </div>
  )
}
