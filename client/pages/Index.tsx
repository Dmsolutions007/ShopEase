import {
  ChevronRight,
  Truck,
  Shield,
  CreditCard,
  HeadphonesIcon,
  Star,
  ShoppingBag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/product/ProductCard";
import { Link } from "react-router-dom";

export default function Index() {
  // Mock data for featured products
  const featuredProducts = [
    {
      id: "1",
      name: "Samsung Galaxy S24 Ultra 256GB - Titanium Black",
      price: 24999,
      originalPrice: 27999,
      image:
        "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
      rating: 4.8,
      reviewCount: 1247,
      brand: "Samsung",
      isOnSale: true,
      isFreeShipping: true,
      category: "Electronics",
    },
    {
      id: "2",
      name: "Nike Air Max 270 Running Shoes - Black/White",
      price: 2499,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      rating: 4.6,
      reviewCount: 892,
      brand: "Nike",
      isFreeShipping: true,
      category: "Fashion",
    },
    {
      id: "3",
      name: "KitchenAid Stand Mixer 5.7L - Empire Red",
      price: 8999,
      originalPrice: 10499,
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
      rating: 4.9,
      reviewCount: 456,
      brand: "KitchenAid",
      isOnSale: true,
      category: "Home & Garden",
    },
    {
      id: "4",
      name: 'Apple MacBook Air M2 13" 256GB - Midnight',
      price: 21999,
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
      rating: 4.7,
      reviewCount: 1834,
      brand: "Apple",
      isFreeShipping: true,
      category: "Electronics",
    },
  ];

  const categories = [
    {
      name: "Electronics",
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=300&h=200&fit=crop",
      productCount: "15,000+",
    },
    {
      name: "Fashion",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop",
      productCount: "25,000+",
    },
    {
      name: "Home & Garden",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop",
      productCount: "12,000+",
    },
    {
      name: "Sports & Outdoors",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
      productCount: "8,000+",
    },
    {
      name: "Books & Media",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop",
      productCount: "50,000+",
    },
    {
      name: "Health & Beauty",
      image:
        "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=300&h=200&fit=crop",
      productCount: "6,000+",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
          <div className="container mx-auto px-4 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-accent text-accent-foreground">
                    New Arrivals Daily
                  </Badge>
                  <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                    Shop Everything You Need,
                    <span className="text-primary"> Delivered Fast</span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-md">
                    Discover millions of products with unbeatable prices and
                    lightning-fast delivery across South Africa.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="btn-primary" asChild>
                    <Link to="/products">
                      <ShoppingBag className="w-5 h-5 mr-2" />
                      Start Shopping
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/deals">
                      View Deals
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>

                {/* Trust indicators */}
                <div className="flex flex-wrap gap-6 pt-8">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Truck className="w-4 h-4 text-primary" />
                    <span>Free delivery over R500</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>Secure payments</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <HeadphonesIcon className="w-4 h-4 text-primary" />
                    <span>24/7 support</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-card rounded-lg p-4 shadow-card card-hover">
                      <img
                        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop"
                        alt="Product"
                        className="w-full h-32 object-cover rounded mb-2"
                      />
                      <div className="space-y-1">
                        <p className="font-medium text-sm">
                          Premium Headphones
                        </p>
                        <p className="text-primary font-bold">R2,499</p>
                      </div>
                    </div>
                    <div className="bg-card rounded-lg p-4 shadow-card card-hover">
                      <img
                        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop"
                        alt="Product"
                        className="w-full h-32 object-cover rounded mb-2"
                      />
                      <div className="space-y-1">
                        <p className="font-medium text-sm">Running Shoes</p>
                        <p className="text-primary font-bold">R1,899</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="bg-card rounded-lg p-4 shadow-card card-hover">
                      <img
                        src="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=200&h=200&fit=crop"
                        alt="Product"
                        className="w-full h-32 object-cover rounded mb-2"
                      />
                      <div className="space-y-1">
                        <p className="font-medium text-sm">Smartphone</p>
                        <p className="text-primary font-bold">R12,999</p>
                      </div>
                    </div>
                    <div className="bg-card rounded-lg p-4 shadow-card card-hover">
                      <img
                        src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop"
                        alt="Product"
                        className="w-full h-32 object-cover rounded mb-2"
                      />
                      <div className="space-y-1">
                        <p className="font-medium text-sm">Home Decor</p>
                        <p className="text-primary font-bold">R599</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Shop by Category
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our vast selection across all categories
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={`/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group block"
                >
                  <div className="bg-card rounded-lg overflow-hidden shadow-card card-hover">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-semibold text-sm mb-1">
                        {category.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {category.productCount}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Featured Products
                </h2>
                <p className="text-muted-foreground">
                  Hand-picked favorites just for you
                </p>
              </div>
              <Button variant="outline" asChild>
                <Link to="/products">
                  View All
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Fast Delivery</h3>
                <p className="text-muted-foreground text-sm">
                  Free delivery on orders over R500. Get your items in 1-3 days.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Secure Shopping</h3>
                <p className="text-muted-foreground text-sm">
                  Your data is protected with bank-level security and
                  encryption.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <CreditCard className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Easy Returns</h3>
                <p className="text-muted-foreground text-sm">
                  Not satisfied? Return items within 30 days for a full refund.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <HeadphonesIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">24/7 Support</h3>
                <p className="text-muted-foreground text-sm">
                  Get help anytime with our dedicated customer support team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold">Stay in the Loop</h2>
              <p className="text-primary-foreground/80">
                Get exclusive deals, new product alerts, and shopping tips
                delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-primary-foreground/60">
                By subscribing, you agree to our Privacy Policy and Terms of
                Service.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
