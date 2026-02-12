// components/Footer.tsx
import { Facebook, Instagram, Twitter, Github, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Section 1: Brand & Socials */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-7 w-7 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">SHOPMART</span>
            </div>
            <p className="text-gray-600 text-sm leading-6 mb-6">
              Making premium goods accessible to everyone. Quality materials, ethical sourcing, and timeless design.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Github size={20} />
              </Link>
            </div>
          </div>

          {/* Section 2: Quick Shop */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Shop</h3>
            <ul className="space-y-3">
              {['New Arrivals', 'Best Sellers', 'Sale', 'All Collections'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-3">
              {['Shipping Policy', 'Returns & Exchanges', 'FAQs', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-600 mb-4">Join our newsletter for exclusive offers and news.</p>
            <form className="flex flex-col space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white border border-gray-300 py-2 pl-10 pr-4 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <button className="bg-gray-900 text-white text-sm font-medium py-2 rounded-md hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {currentYear} SHOPMART Inc. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-900">Privacy Policy</Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-900">Terms of Service</Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-900">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
