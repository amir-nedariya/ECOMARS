import { Search, Heart, ShoppingCart, User, Menu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 dark:bg-[#0B0F19]/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Left: Mobile Menu & Logo */}
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-slate-600 dark:text-slate-300">
              <Menu className="h-6 w-6" />
            </button>
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="ECOMARS Logo" width={200} height={56} className="h-12 sm:h-14 w-auto object-contain" priority />
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { name: 'Home', path: '/' },
              { name: 'New Arrivals', path: '/products' },
              { name: 'Categories', path: '/products' },
              { name: 'Best Sellers', path: '/products' },
              { name: 'Offers', path: '/products' }
            ].map((item) => (
              <Link 
                key={item.name} 
                href={item.path} 
                className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right: Icons & Actions */}
          <div className="flex items-center space-x-5 sm:space-x-6">
            <button className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <Link href="/account" className="hidden sm:block text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Heart className="h-5 w-5" />
            </Link>
            <Link href="/account" className="hidden sm:block text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <User className="h-5 w-5" />
            </Link>
            <Link href="/cart" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full">
              <ShoppingCart className="h-4 w-4" />
              <span className="text-xs font-bold">2</span>
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
