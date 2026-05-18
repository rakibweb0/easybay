'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '@/lib/cart-context'
import { buttonVariants } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart()
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)
    setMessage(null)

    if (!name.trim() || !address.trim() || !phone.trim()) {
      setError('Please fill in name, address, and phone number.')
      return
    }

    if (items.length === 0) {
      setError('Your cart is empty. Add items before checking out.')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerName: name,
          customerAddress: address,
          customerPhone: phone,
          items,
          total,
        }),
      })

      if (!response.ok) {
        const payload = await response.json().catch(() => null)
        throw new Error(payload?.error || 'Unable to submit order. Please try again later.')
      }

      setMessage('Order placed successfully. You will receive a confirmation email shortly.')
      clearCart()
      setName('')
      setAddress('')
      setPhone('')
    } catch (submitError: unknown) {
      const errorMessage = submitError instanceof Error ? submitError.message : 'Unexpected error.'
      setError(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-10 space-y-3">
          <div className="flex items-center gap-4">
            <Link href="/" className={buttonVariants({ size: "icon" })}><ChevronLeft /></Link>
            <h1 className="text-4xl font-semibold text-foreground">Checkout</h1>
          </div>
          <p className="text-muted-foreground">Enter your contact details and place your order.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl border border-border bg-card p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Delivery details</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-foreground mb-2">
                  Address
                </label>
                <textarea
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  rows={4}
                  placeholder="Street address, city, state, postal code"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="123-456-7890"
                />
              </div>

              {error && <p className="text-sm text-destructive">{error}</p>}
              {message && <p className="text-sm text-green-600">{message}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-primary px-5 py-3 text-base font-semibold text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? 'Placing order…' : 'Place order'}
              </button>
            </form>
          </div>

          <aside className="rounded-3xl border border-border bg-card p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-foreground">Your order</h2>
              <p className="text-sm text-muted-foreground">Review the items before placing your order.</p>
            </div>

            {items.length === 0 ? (
              <div className="space-y-4 text-center text-muted-foreground">
                <p>Your cart is currently empty.</p>
                <Link href="/" className="text-primary hover:underline">
                  Return to shop
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li key={item.product._id} className="rounded-3xl border border-border bg-background p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-semibold text-foreground">{item.product.title}</p>
                          <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-semibold text-foreground">
                          ৳{(item.product.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="rounded-3xl border border-border bg-muted p-4">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Subtotal</span>
                    <span>৳{total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Shipping</span>
                    <span>As per delivery address</span>
                  </div>
                  <div className="mt-3 flex justify-between text-lg font-semibold text-foreground">
                    <span>Total</span>
                    <span>৳{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  )
}
