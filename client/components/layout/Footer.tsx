import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-secondary/30 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  S
                </span>
              </div>
              <span className="text-xl font-bold text-primary">ShopEase</span>
            </div>
            <p className="text-muted-foreground text-sm">
              South Africa's leading online shopping destination. Fast delivery,
              great prices, and excellent customer service.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary"
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary"
              >
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Customer Service</h3>
            <div className="space-y-2 text-sm">
              <Link
                to="/help"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Help Centre
              </Link>
              <Link
                to="/returns"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Returns & Refunds
              </Link>
              <Link
                to="/shipping"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Shipping Info
              </Link>
              <Link
                to="/track-order"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Track Your Order
              </Link>
              <Link
                to="/size-guide"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Size Guide
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link
                to="/about"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/careers"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Careers
              </Link>
              <Link
                to="/press"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Press Centre
              </Link>
              <Link
                to="/investor-relations"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Investor Relations
              </Link>
              <Link
                to="/sustainability"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Sustainability
              </Link>
            </div>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Stay Connected</h3>
            <p className="text-sm text-muted-foreground">
              Get the latest deals and updates
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="input-focus"
              />
              <Button className="w-full btn-primary">Subscribe</Button>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>0860 555 444</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>support@shopease.co.za</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Cape Town, South Africa</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 ShopEase. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
