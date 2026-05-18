'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useCart } from '@/lib/cart-context'
import { X, Plus, Minus } from 'lucide-react'
import { sanityImageBlurUrl, sanityImageUrl } from '@/lib/image-builder'
import { ProductType } from '@/lib/types'

interface ProductModalProps {
  product: ProductType
  onClose: () => void
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [isAdded, setIsAdded] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = product.images?.length ? product.images : product.image?.length ? product.image : []
  const currentImageUrl = sanityImageUrl(images[currentImageIndex]?.asset, 1200)
  const currentImageBlurUrl = sanityImageBlurUrl(images[currentImageIndex]?.asset, 100, undefined, 25, 15)

  const handleAddToCart = () => {
    addItem(product, quantity)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div
          className="bg-background rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-muted transition-colors rounded-full z-10"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Image Gallery */}
              <div className="flex flex-col gap-4">
                <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
                  {currentImageBlurUrl && (
                    <div
                      className="absolute inset-0 bg-cover bg-center blur-2xl scale-110 opacity-80"
                      style={{ backgroundImage: `url(${currentImageBlurUrl})` }}
                    />
                  )}
                  {currentImageUrl ? (
                    <Image
                      src={currentImageUrl}
                      alt={`${product.title} - Image ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground">
                      No image available
                    </div>
                  )}
                </div>

                {images.length > 1 && (
                  <div className="grid grid-cols-4 gap-2">
                    {images.map((image, index) => {
                      const thumbUrl = sanityImageUrl(image.asset, 240, 240)
                      return (
                        <button
                          key={image._key || index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`overflow-hidden rounded-lg border transition ${
                            index === currentImageIndex ? 'border-primary' : 'border-border'
                          }`}
                          type="button"
                          aria-label={`View image ${index + 1}`}
                        >
                          {thumbUrl ? (
                            <Image
                              src={thumbUrl}
                              alt={`${product.title} thumbnail ${index + 1}`}
                              width={240}
                              height={240}
                              className="object-cover w-full h-full"
                            />
                          ) : (
                            <div className="flex items-center justify-center bg-muted text-xs text-muted-foreground p-4">
                              No image
                            </div>
                          )}
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="flex flex-col justify-start">
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-4">
                  {product.category.title || 'Uncategorized'}
                </p>

                <h1 className="text-3xl md:text-4xl font-light text-foreground mb-4 leading-tight">
                  {product.title}
                </h1>

                <p className="text-lg text-muted-foreground mb-6">
                  {product.shortDescription || 'No description available.'}
                </p>

                <div className="mb-8 pb-8 border-b border-border space-y-3">
                  <div className="text-3xl font-semibold text-foreground">
                    ${product.price.toFixed(2)}
                  </div>
                  {product.offerPrice != null && (
                    <div className="text-sm text-muted-foreground">
                      Offer Price: ${product.offerPrice.toFixed(2)}
                    </div>
                  )}
                  <div className={`text-sm mt-2 ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                  </div>
                </div>

                <div className="mb-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <label className="text-sm font-medium text-foreground">Quantity:</label>
                    <div className="flex items-center gap-2 bg-muted border border-border rounded">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-2 hover:bg-border transition-colors"
                        disabled={quantity <= 1}
                      >
                        <Minus size={18} />
                      </button>
                      <span className="w-12 text-center font-medium">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-2 hover:bg-border transition-colors"
                      >
                        <Plus size={18} />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    disabled={product.stock === 0}
                    className={`w-full py-3 font-semibold text-lg transition-all rounded ${
                      isAdded
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed'
                    }`}
                  >
                    {isAdded ? '✓ Added to cart' : 'Add to cart'}
                  </button>
                </div>

                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">Slug</span>
                    <span>{product.slug ?? '—'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">Product ID</span>
                    <span>{product._id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">Status</span>
                    <span>{product.status ? 'Active' : 'Inactive'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">Images</span>
                    <span>{images.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
