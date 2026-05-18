'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/lib/cart-context'
import { sanityImageUrl } from '@/lib/image-builder'
import { X, Minus, Plus, Trash2 } from 'lucide-react'

interface CartProps {
  onClose: () => void
}

export default function Cart({ onClose }: CartProps) {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart()

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/30 z-40"
        onClick={onClose}
      />

      {/* Cart Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background border-l border-border z-50 flex flex-col shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-2xl font-light text-foreground">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-muted transition-colors"
            aria-label="Close cart"
          >
            <X size={24} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground mb-4">Your cart is empty</p>
              <button
                onClick={onClose}
                className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
              >
                Continue shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => {
                const imageAsset = item.product.images?.[0]?.asset || item.product.image?.[0]?.asset
                const imageSrc = sanityImageUrl(imageAsset, 240, 240)
                const productSlug =
                  typeof item.product.slug === 'string'
                    ? item.product.slug
                    : item.product.slug?.current ?? item.product._id

                return (
                  <div key={item.product._id} className="border border-border p-4">
                    <div className="flex gap-3 mb-3">
                      <div className="relative w-16 h-16 bg-muted shrink-0">
                        {imageSrc ? (
                          <Image
                            src={imageSrc}
                            alt={item.product.title}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full bg-muted text-muted-foreground text-xs">
                            No image
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <Link href={`/products/${productSlug}`}>
                          <h3 className="font-medium text-foreground hover:text-primary text-sm truncate">
                            {item.product.title}
                          </h3>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                          ${item.product.price.toFixed(2)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 bg-muted rounded">
                        <button
                          onClick={() => updateQuantity(item.product._id, item.quantity - 1)}
                          className="p-1 hover:bg-border transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product._id, item.quantity + 1)}
                          className="p-1 hover:bg-border transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <p className="font-semibold text-foreground">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>

                      <button
                        onClick={() => removeItem(item.product._id)}
                        className="p-1 text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-6 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="border-t border-border pt-2 flex justify-between">
                <span className="font-semibold">Total</span>
                <span className="text-lg font-semibold text-primary">${total.toFixed(2)}</span>
              </div>
            </div>

            <Link href="/checkout" className="w-full block">
              <button
                className="w-full bg-primary text-primary-foreground py-3 font-medium hover:opacity-90 transition-opacity"
                onClick={onClose}
              >
                Proceed to Checkout
              </button>
            </Link>

            <button
              onClick={clearCart}
              className="w-full bg-secondary text-secondary-foreground py-2 text-sm font-medium hover:bg-muted transition-colors"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  )
}
