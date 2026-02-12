'use client';

import { useState } from 'react';
import Link from 'next/link';
import { User, Mail, Lock, ShieldCheck, ArrowRight } from 'lucide-react';

export default function SignupPage() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate backend call
    console.log(formData);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
      <div className="flex w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">

        {/* Left Side: Brand/Marketing (Hidden on Mobile) */}
        <div className="hidden w-1/2 bg-green-600 p-12 text-white lg:block">
          <div className="flex h-full flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold">Start your shopping journey.</h2>
              <p className="mt-4 text-green-100">
                Create an account to track orders, save favorites, and get exclusive member-only discounts.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-green-300" />
                <span className="text-sm">Secure checkout & data encryption</span>
              </div>
              <p className="text-xs text-green-200">© 2026 Your E-Store. All rights reserved.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full p-8 md:p-12 lg:w-1/2">
          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-3xl font-bold text-gray-900">Sign Up</h1>
            <p className="mt-2 text-sm text-gray-500">It only takes a minute to get started.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full text-black rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 outline-none transition-all focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full text-black rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 outline-none transition-all focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full text-black rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 outline-none transition-all focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100"
                  onChange={handleChange}
                  required
                />
              </div>
              <p className="mt-1.5 text-[11px] text-gray-400">Must be at least 8 characters with a symbol.</p>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="group flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 py-3 font-semibold text-white transition-all hover:bg-green-700 active:scale-[0.98] disabled:opacity-70"
            >
              {isLoading ? "Creating account..." : "Create Account"}
              {!isLoading && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link href="/login" className="font-bold text-green-600 hover:text-green-700">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
