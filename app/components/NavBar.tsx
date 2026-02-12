"use client"; // Required for stateful interactions

import { ShoppingCart, Search, User, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md transition-all">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <div className="shrink-0 flex items-center gap-2">
            <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900 hidden sm:block">
              SHOPMART
            </span>
          </div>

          {/* Navigation Links - Centered */}
          <div className="hidden md:flex items-center space-x-8">
            {["New Arrivals", "Categories", "Deals"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 md:gap-5">

            {/* Search Bar - Hidden on Mobile, expands on Desktop */}
            <div className="hidden lg:flex items-center bg-gray-100 px-3 py-1.5 rounded-full border focus-within:border-blue-400 focus-within:bg-white transition-all">
              <Search className="h-4 w-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-48"
              />
            </div>

            {/* User Account */}
            <Link href={"/login"} className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
              <User className="h-5 w-5" />
            </Link>

            {/* Cart with Badge */}
            <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 h-4 w-4 bg-blue-600 text-[10px] font-bold text-white flex items-center justify-center rounded-full border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden p-2 text-gray-600">
              <Menu className="h-6 w-6" />
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}
