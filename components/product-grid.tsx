'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useCart } from '@/lib/cart-context'
import { Plus } from 'lucide-react'
import { ProductType } from '@/lib/types'
import { sanityImageUrl } from '@/lib/image-builder'

interface ProductGridProps {
  product: ProductType
  onProductClick?: () => void
}

export default function ProductGrid({ product, onProductClick }: ProductGridProps) {
  const { addItem } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const imageAsset = product.images?.[0]?.asset
  const imageSrc = sanityImageUrl(imageAsset, 800)

  console.log(imageAsset, "from grid")
  console.log(imageSrc, "from grid")

  const handleAddToCart = () => {
    // addItem(product, 1)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <div onClick={onProductClick} className="group cursor-pointer">
      {/* Product Image */}
      <div className="relative w-full aspect-square bg-muted overflow-hidden mb-4">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground text-sm">
            No image available
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <p className="text-xs text-muted-foreground uppercase tracking-wide">{product.category.title}</p>
        <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
          {product.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="text-lg font-semibold text-foreground">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={(e) => {
              e.preventDefault()
              handleAddToCart()
            }}
            className={`p-2 transition-colors ${
              isAdded
                ? 'bg-accent text-accent-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground'
            }`}
            title="Add to cart"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
