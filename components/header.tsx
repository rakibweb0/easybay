'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useCart } from '@/lib/cart-context'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'

interface HeaderProps {
  isCartOpen: boolean
  onCartToggle: () => void
}

export default function Header({ isCartOpen, onCartToggle }: HeaderProps) {
  const { itemCount } = useCart()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <header className="sticky top-0 z-40 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
  
        <Link href="/" className='relative w-36 md:w-48 h-6 md:h-8'>
        <Image src="/logo.png" alt="" fill/>
        </Link>

        {/* Navigation - hidden on mobile */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Products
          </Link>
          <Link href="/about" className="hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>

        {/* Cart Button */}
        <button
          type="button"
          onClick={onCartToggle}
          aria-expanded={isCartOpen}
          className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground hover:bg-muted transition-colors relative"
        >
          <ShoppingCart size={20} />
          <span className="text-sm font-medium">Cart</span>
          {mounted && itemCount > 0 && (
            <span className="absolute top-0 right-0 -mr-2 -mt-2 bg-accent text-accent-foreground text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}
