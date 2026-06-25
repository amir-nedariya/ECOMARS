import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, Star, Heart, ShoppingCart, Filter, SlidersHorizontal } from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
  const products = [
    { id: 1, name: "Premium Blue Perfume", category: "Men Perfume", price: "2,499", rating: 5, image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=400&h=400" },
    { id: 2, name: "Stainless Steel Water Bottle", category: "Water Bottle", price: "899", rating: 4, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=400&h=400" },
    { id: 3, name: "Designer Black Perfume", category: "Men Perfume", price: "3,199", rating: 5, image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=400&h=400" },
    { id: 4, name: "Clear Storage Plastic Box", category: "Plastic", price: "450", rating: 4, image: "https://images.unsplash.com/photo-1584016221727-463d1a8e6ea4?auto=format&fit=crop&q=80&w=400&h=400" },
    { id: 5, name: "Sports Water Bottle", category: "Water Bottle", price: "699", rating: 5, image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=400&h=400" },
    { id: 6, name: "Luxury Gold Perfume", category: "Men Perfume", price: "4,599", rating: 5, image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=400&h=400" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      <Header />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col lg:flex-row gap-8">

            {/* Sidebar Filters */}
            <aside className="w-full lg:w-72 flex-shrink-0 animate-fade-in">
              <div className="glass-card p-6 sticky top-28">
                <div className="flex items-center gap-2 mb-6 text-xl font-black text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4">
                  <SlidersHorizontal className="h-5 w-5 text-primary" />
                  FILTERS
                </div>

                {/* Search */}
                <div className="mb-8">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                    <Search className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                  </div>
                </div>

                {/* Category */}
                <div className="mb-8">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <Filter className="h-4 w-4 text-primary" />
                    Category
                  </h3>
                  <div className="space-y-3">
                    {['Perfume', 'Bottle', 'Plastic'].map((item) => (
                      <label key={item} className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center">
                          <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-slate-300 dark:border-slate-700 rounded transition-all checked:bg-primary checked:border-primary cursor-pointer" />
                          <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors text-sm font-medium">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Sub Category */}
                <div className="mb-8">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-4">Sub Category</h3>
                  <div className="space-y-3">
                    {['Men Perfume', 'Water Bottle'].map((item) => (
                      <label key={item} className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center">
                          <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-slate-300 dark:border-slate-700 rounded transition-all checked:bg-primary checked:border-primary cursor-pointer" />
                          <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors text-sm font-medium">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-4">Price</h3>
                  <div className="flex items-center gap-4">
                    <div className="relative flex-1">
                      <span className="absolute left-3 top-2.5 text-slate-400 font-medium">₹</span>
                      <input type="number" placeholder="Min" className="w-full pl-7 pr-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-primary focus:outline-none text-sm" />
                    </div>
                    <span className="text-slate-400 font-bold">-</span>
                    <div className="relative flex-1">
                      <span className="absolute left-3 top-2.5 text-slate-400 font-medium">₹</span>
                      <input type="number" placeholder="Max" className="w-full pl-7 pr-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-primary focus:outline-none text-sm" />
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-4">Rating</h3>
                  <div className="flex gap-1 cursor-pointer group">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-6 w-6 text-slate-300 dark:text-slate-700 hover:text-yellow-400 transition-colors" />
                    ))}
                  </div>
                </div>

              </div>
            </aside>

            {/* Main Content - Product Grid */}
            <div className="flex-1 animate-slide-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-black text-slate-900 dark:text-white">All Products</h1>
                <span className="text-sm font-semibold text-slate-500 bg-white dark:bg-slate-900 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 shadow-sm">
                  Showing 6 results
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Link href={`/products/${product.id}`} key={product.id} className="glass-card overflow-hidden group hover-lift flex flex-col h-full">

                    {/* Image Area */}
                    <div className="relative h-64 w-full overflow-hidden bg-slate-100 flex-shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-full text-slate-400 hover:text-red-500 hover:bg-white hover:scale-110 transition-all shadow-md active:scale-95">
                        <Heart className="h-5 w-5" />
                      </button>
                    </div>

                    {/* Content Area */}
                    <div className="p-5 flex flex-col flex-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                        {product.category}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">
                        {product.name}
                      </h3>

                      <div className="flex items-center space-x-1 mb-auto">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300 dark:text-slate-700'}`} />
                        ))}
                      </div>

                      <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <span className="text-2xl font-black text-slate-900 dark:text-white">
                          ₹{product.price}
                        </span>
                        <button className="bg-primary hover:bg-indigo-500 text-white px-4 py-2.5 rounded-xl font-bold text-sm transition-colors flex items-center gap-2 shadow-lg shadow-primary/25 active:scale-95">
                          <ShoppingCart className="h-4 w-4" />
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
