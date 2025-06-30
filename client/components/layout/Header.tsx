import { Search, ShoppingCart, User, Menu, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "Electronics",
    "Fashion",
    "Home & Garden",
    "Sports",
    "Books",
    "Health & Beauty",
    "Automotive",
    "Toys & Games",
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b shadow-sm">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="hidden md:flex items-center space-x-6">
              <span>📞 Customer Service: 0860 555 444</span>
              <span>🚚 Free delivery on orders over R500</span>
            </div>
            <div className="flex items-center space-x-4 ml-auto">
              <Link to="/help" className="hover:underline">
                Help
              </Link>
              <Link to="/track-order" className="hover:underline">
                Track Order
              </Link>
              <Link to="/account" className="hover:underline">
                My Account
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">
                S
              </span>
            </div>
            <span className="text-xl font-bold text-primary hidden md:block">
              ShopEase
            </span>
          </Link>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full input-focus"
              />
              <Button
                size="sm"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 btn-primary"
              >
                Search
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex relative"
              asChild
            >
              <Link to="/wishlist">
                <Heart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  2
                </span>
              </Link>
            </Button>

            <Button variant="ghost" size="icon" className="relative" asChild>
              <Link to="/cart">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex"
              asChild
            >
              <Link to="/account">
                <User className="w-5 h-5" />
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Categories navigation */}
        <div className="hidden lg:flex items-center justify-center space-x-8 mt-4 pt-4 border-t">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm hover:text-primary transition-colors font-medium"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-4">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {categories.map((category) => (
                  <Link
                    key={category}
                    to={`/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm hover:text-primary transition-colors font-medium p-2 hover:bg-muted rounded"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category}
                  </Link>
                ))}
              </div>
              <div className="pt-4 border-t space-y-2">
                <Link
                  to="/account"
                  className="flex items-center space-x-2 p-2 hover:bg-muted rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="w-4 h-4" />
                  <span>My Account</span>
                </Link>
                <Link
                  to="/wishlist"
                  className="flex items-center space-x-2 p-2 hover:bg-muted rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Heart className="w-4 h-4" />
                  <span>Wishlist</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
