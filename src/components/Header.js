import { Search, Heart, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 glass shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-black text-gradient tracking-tighter">
              ECOMARS
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400 group-focus-within:text-primary transition-colors" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 dark:border-slate-800 rounded-full leading-5 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 sm:text-sm"
                placeholder="Search products, brands and categories..."
              />
            </div>
          </div>

          {/* Icons & Actions */}
          <div className="flex items-center space-x-6">
            <Link href="/account" className="text-slate-500 hover:text-primary transition-colors flex flex-col items-center group">
              <Heart className="h-6 w-6 group-hover:fill-primary/10 transition-all" />
              <span className="text-[10px] font-medium mt-1">Wishlist</span>
            </Link>
            <Link href="/cart" className="text-slate-500 hover:text-primary transition-colors flex flex-col items-center relative group">
              <div className="relative">
                <ShoppingCart className="h-6 w-6 group-hover:fill-primary/10 transition-all" />
                <span className="absolute -top-1.5 -right-1.5 bg-primary text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">2</span>
              </div>
              <span className="text-[10px] font-medium mt-1">Cart</span>
            </Link>
            <Link href="/account" className="text-slate-500 hover:text-primary transition-colors flex flex-col items-center group">
              <User className="h-6 w-6 group-hover:fill-primary/10 transition-all" />
              <span className="text-[10px] font-medium mt-1">Account</span>
            </Link>
          </div>

        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 pb-3 justify-center">
          {[
            { name: 'Home', path: '/' },
            { name: 'Categories', path: '/products' },
            { name: 'Products', path: '/products' },
            { name: 'Offers', path: '/products' }
          ].map((item) => (
            <Link 
              key={item.name} 
              href={item.path} 
              className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300 pb-1"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
