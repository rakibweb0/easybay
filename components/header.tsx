'use client'

import Link from 'next/link'
import { useCart } from '@/lib/cart-context'
import { ShoppingCart } from 'lucide-react'

interface HeaderProps {
  isCartOpen: boolean
  onCartToggle: () => void
}

export default function Header({ isCartOpen, onCartToggle }: HeaderProps) {
  const { itemCount } = useCart()

  return (
    <header className="sticky top-0 z-40 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
            ✓
          </div>
          <span className="text-xl font-semibold text-foreground">Shop</span>
        </Link>

        {/* Navigation - hidden on mobile */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Products
          </Link>
          <a href="#" className="hover:text-foreground transition-colors">
            About
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        {/* Cart Button */}
        <button
          onClick={onCartToggle}
          className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground hover:bg-muted transition-colors relative"
        >
          <ShoppingCart size={20} />
          <span className="text-sm font-medium">Cart</span>
          {itemCount > 0 && (
            <span className="absolute top-0 right-0 -mr-2 -mt-2 bg-accent text-accent-foreground text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}
