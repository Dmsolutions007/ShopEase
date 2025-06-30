import { Heart, Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    rating: number;
    reviewCount: number;
    brand?: string;
    isOnSale?: boolean;
    isFreeShipping?: boolean;
    category: string;
  };
  className?: string;
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  return (
    <div
      className={cn(
        "bg-card border rounded-lg overflow-hidden shadow-card card-hover group",
        className,
      )}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image container */}
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Badges */}
          <div className="absolute top-2 left-2 space-y-1">
            {product.isOnSale && (
              <Badge variant="destructive" className="text-xs">
                -{discountPercentage}%
              </Badge>
            )}
            {product.isFreeShipping && (
              <Badge className="bg-success text-success-foreground text-xs">
                Free Shipping
              </Badge>
            )}
          </div>

          {/* Wishlist button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              // Handle wishlist toggle
            }}
          >
            <Heart className="w-4 h-4" />
          </Button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Brand */}
        {product.brand && (
          <div className="text-xs text-muted-foreground uppercase tracking-wide">
            {product.brand}
          </div>
        )}

        {/* Title */}
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-sm line-clamp-2 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center space-x-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "w-3 h-3",
                  i < Math.floor(product.rating)
                    ? "text-warning fill-warning"
                    : "text-muted-foreground",
                )}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-foreground">
            R{product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              R{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Add to cart button */}
        <Button
          className="w-full btn-primary"
          size="sm"
          onClick={(e) => {
            e.preventDefault();
            // Handle add to cart
          }}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
