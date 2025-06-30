import { useState } from "react";
import {
  Filter,
  Grid,
  List,
  ChevronDown,
  SlidersHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/product/ProductCard";

export default function Products() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 50000]);

  // Mock products data
  const products = Array.from({ length: 24 }, (_, i) => ({
    id: (i + 1).toString(),
    name: `Product ${i + 1} - High Quality Item with Great Features`,
    price: Math.floor(Math.random() * 10000) + 500,
    originalPrice:
      Math.random() > 0.7
        ? Math.floor(Math.random() * 15000) + 1000
        : undefined,
    image: `https://images.unsplash.com/photo-${1523275335684 + i}?w=400&h=400&fit=crop&auto=format`,
    rating: 3.5 + Math.random() * 1.5,
    reviewCount: Math.floor(Math.random() * 2000) + 10,
    brand: ["Samsung", "Apple", "Nike", "Adidas", "Sony", "LG"][
      Math.floor(Math.random() * 6)
    ],
    isOnSale: Math.random() > 0.6,
    isFreeShipping: Math.random() > 0.3,
    category: ["Electronics", "Fashion", "Home & Garden", "Sports"][
      Math.floor(Math.random() * 4)
    ],
  }));

  const categories = [
    { name: "Electronics", count: 1250 },
    { name: "Fashion", count: 890 },
    { name: "Home & Garden", count: 567 },
    { name: "Sports & Outdoors", count: 432 },
    { name: "Books & Media", count: 321 },
    { name: "Health & Beauty", count: 234 },
  ];

  const brands = [
    { name: "Samsung", count: 89 },
    { name: "Apple", count: 67 },
    { name: "Nike", count: 54 },
    { name: "Adidas", count: 43 },
    { name: "Sony", count: 32 },
    { name: "LG", count: 28 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          Home / Products
        </nav>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              All Products
            </h1>
            <p className="text-muted-foreground">
              Showing 1-24 of 15,847 products
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile filter toggle */}
            <Button
              variant="outline"
              className="md:hidden"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
            </Button>

            {/* Sort */}
            <Select defaultValue="featured">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>

            {/* View toggle */}
            <div className="hidden sm:flex border rounded-lg">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside
            className={`
            ${showFilters ? "block" : "hidden"} md:block
            w-full md:w-64 space-y-6 bg-card p-6 rounded-lg h-fit
          `}
          >
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-lg">Filters</h2>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground"
              >
                Clear All
              </Button>
            </div>

            {/* Price Range */}
            <div className="space-y-4">
              <h3 className="font-medium">Price Range</h3>
              <div className="space-y-4">
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={50000}
                  step={100}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>R{priceRange[0].toLocaleString()}</span>
                  <span>R{priceRange[1].toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h3 className="font-medium">Categories</h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <div
                    key={category.name}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox id={category.name} />
                    <Label
                      htmlFor={category.name}
                      className="flex-1 text-sm cursor-pointer flex justify-between"
                    >
                      <span>{category.name}</span>
                      <span className="text-muted-foreground">
                        ({category.count})
                      </span>
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Brands */}
            <div className="space-y-4">
              <h3 className="font-medium">Brands</h3>
              <div className="space-y-3">
                {brands.map((brand) => (
                  <div key={brand.name} className="flex items-center space-x-2">
                    <Checkbox id={brand.name} />
                    <Label
                      htmlFor={brand.name}
                      className="flex-1 text-sm cursor-pointer flex justify-between"
                    >
                      <span>{brand.name}</span>
                      <span className="text-muted-foreground">
                        ({brand.count})
                      </span>
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h3 className="font-medium">Features</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="free-shipping" />
                  <Label
                    htmlFor="free-shipping"
                    className="text-sm cursor-pointer"
                  >
                    Free Shipping
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="on-sale" />
                  <Label htmlFor="on-sale" className="text-sm cursor-pointer">
                    On Sale
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="same-day" />
                  <Label htmlFor="same-day" className="text-sm cursor-pointer">
                    Same Day Delivery
                  </Label>
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  : "space-y-4"
              }
            >
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  className={viewMode === "list" ? "flex" : ""}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center space-x-2 mt-12">
              <Button variant="outline" disabled>
                Previous
              </Button>
              <Button variant="default">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <span className="px-2 text-muted-foreground">...</span>
              <Button variant="outline">47</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
