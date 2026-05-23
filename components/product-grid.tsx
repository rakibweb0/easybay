"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/lib/cart-context";
import { Plus } from "lucide-react";
import { ProductType } from "@/lib/types";
import { sanityImageBlurUrl, sanityImageUrl } from "@/lib/image-builder";

interface ProductGridProps {
  product: ProductType;
  onProductClick?: () => void;
}

export default function ProductGrid({
  product,
  onProductClick,
}: ProductGridProps) {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const imageAsset = product.images?.[0]?.asset;
  const imageSrc = sanityImageUrl(imageAsset, 800);
  const imageBlurSrc = sanityImageBlurUrl(imageAsset, 80, undefined, 25, 15);

  const handleAddToCart = () => {
    addItem(product, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="group ">
      {/* Product Image */}
      <div onClick={onProductClick} className="cursor-pointer">
        <div className="relative w-full aspect-square bg-muted overflow-hidden mb-4">
          {imageBlurSrc && (
            <div
              className="absolute inset-0 bg-cover bg-center blur-2xl scale-110 opacity-80"
              style={{ backgroundImage: `url(${imageBlurSrc})` }}
            />
          )}

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
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wide">
            {product.category.title}
          </p>
          <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
            {product.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.shortDescription}
          </p>
        </div>
      </div>

      <div className="space-y-2">
        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            {product.offerPrice ? (
              <div>
                <span className="text-lg md:text-xl text-foreground font-semibold">
                  ৳{product.offerPrice.toFixed(2)}
                </span>
                <span className="text-sm  text-muted-foreground line-through ml-2">
                  ৳{product.price.toFixed(2)}
                </span>
              </div>
            ) : (
              <div>
                <span className="text-lg md:text-xl text-foreground font-semibold">
                  ৳{product.price.toFixed(2)}
                </span>
              </div>
            )}
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleAddToCart();
            }}
            className={`p-2 transition-colors ${
              isAdded
                ? "bg-accent text-accent-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
            }`}
            title="Add to cart"
          >
            <Plus size={20} />
          </button>
        </div>
        {/* Stock Status */}
        <p
          className={`text-xs font-medium ${product.stock > 0 ? "text-green-600" : "text-red-600"}`}
        >
          {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
        </p>
      </div>
    </div>
  );
}
