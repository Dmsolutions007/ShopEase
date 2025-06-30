import { User, Package, Heart, MapPin, CreditCard, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

export default function Account() {
  const accountMenuItems = [
    {
      icon: User,
      title: "Profile",
      description: "Manage your personal information",
      href: "/account/profile",
    },
    {
      icon: Package,
      title: "Orders",
      description: "Track and manage your orders",
      href: "/account/orders",
    },
    {
      icon: Heart,
      title: "Wishlist",
      description: "View your saved items",
      href: "/account/wishlist",
    },
    {
      icon: MapPin,
      title: "Addresses",
      description: "Manage shipping addresses",
      href: "/account/addresses",
    },
    {
      icon: CreditCard,
      title: "Payment Methods",
      description: "Manage payment options",
      href: "/account/payment",
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Manage your preferences",
      href: "/account/notifications",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-8">
            My Account
          </h1>

          {/* Account overview placeholder */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accountMenuItems.map((item) => (
              <Card
                key={item.title}
                className="card-hover cursor-pointer"
                asChild
              >
                <Link to={item.href}>
                  <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="text-base">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary">12</CardTitle>
                <CardDescription>Total Orders</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary">5</CardTitle>
                <CardDescription>Wishlist Items</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary">R24,568</CardTitle>
                <CardDescription>Total Spent</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
