"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { User, Package, Heart, MapPin, Truck, Star, LogOut, ChevronRight, Edit3, ShoppingCart, Trash2 } from "lucide-react";

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("Profile");

  const menuItems = [
    { id: "Profile", icon: <User className="h-5 w-5" />, label: "Profile" },
    { id: "Orders", icon: <Package className="h-5 w-5" />, label: "My Orders" },
    { id: "Wishlist", icon: <Heart className="h-5 w-5" />, label: "Wishlist" },
    { id: "Address", icon: <MapPin className="h-5 w-5" />, label: "Saved Address" },
    { id: "Track", icon: <Truck className="h-5 w-5" />, label: "Track Order" },
    { id: "Reviews", icon: <Star className="h-5 w-5" />, label: "Reviews" },
  ];

  const [wishlistItems, setWishlistItems] = useState([
    { id: 1, name: "Premium Blue Perfume", category: "Men Perfume", price: "2,499", rating: 5, image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=400&h=400" },
    { id: 2, name: "Stainless Steel Water Bottle", category: "Water Bottle", price: "899", rating: 4, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=400&h=400" },
    { id: 4, name: "Clear Storage Plastic Box", category: "Plastic", price: "450", rating: 4, image: "https://images.unsplash.com/photo-1584016221727-463d1a8e6ea4?auto=format&fit=crop&q=80&w=400&h=400" },
  ]);

  const removeWishlist = (id) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      <Header />
      
      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-10">My Account</h1>

          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar Navigation */}
            <aside className="w-full lg:w-72 flex-shrink-0 animate-fade-in">
              <div className="glass-card overflow-hidden sticky top-28">
                
                {/* User Info Header */}
                <div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-black">
                    JD
                  </div>
                  <div>
                    <h2 className="font-bold text-slate-900 dark:text-white text-lg">John Doe</h2>
                    <p className="text-sm text-slate-500">john.doe@example.com</p>
                  </div>
                </div>

                {/* Menu List */}
                <nav className="p-4 flex flex-col gap-1">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${
                        activeTab === item.id 
                        ? 'bg-primary text-white font-bold shadow-lg shadow-primary/20' 
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {item.icon}
                        <span>{item.label}</span>
                      </div>
                      <ChevronRight className={`h-4 w-4 ${activeTab === item.id ? 'opacity-100' : 'opacity-0'}`} />
                    </button>
                  ))}
                  
                  <div className="my-2 border-t border-slate-100 dark:border-slate-800"></div>

                  {/* Logout Button */}
                  <button className="w-full flex items-center gap-3 p-4 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 font-semibold transition-colors">
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </button>
                </nav>

              </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 animate-slide-up" style={{animationDelay: '0.2s', opacity: 0}}>
              
              {activeTab === "Profile" && (
                <div className="glass-card p-8 md:p-10">
                  <div className="flex justify-between items-center mb-8 border-b border-slate-100 dark:border-slate-800 pb-6">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Personal Information</h2>
                    <button className="text-primary font-semibold flex items-center gap-2 hover:underline">
                      <Edit3 className="h-4 w-4" /> Edit
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-semibold text-slate-500 mb-1">First Name</label>
                      <p className="text-lg font-medium text-slate-900 dark:text-white">John</p>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-500 mb-1">Last Name</label>
                      <p className="text-lg font-medium text-slate-900 dark:text-white">Doe</p>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-500 mb-1">Email Address</label>
                      <p className="text-lg font-medium text-slate-900 dark:text-white">john.doe@example.com</p>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-500 mb-1">Phone Number</label>
                      <p className="text-lg font-medium text-slate-900 dark:text-white">+91 98765 43210</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "Orders" && (
                <div className="glass-card p-8 md:p-10">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 border-b border-slate-100 dark:border-slate-800 pb-6">My Orders</h2>
                  
                  <div className="space-y-6">
                    <div className="border border-slate-200 dark:border-slate-800 rounded-2xl p-6 bg-slate-50/50 dark:bg-slate-900/50">
                      <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Order Number</span>
                          <p className="font-bold text-slate-900 dark:text-white">#ORD-109283</p>
                        </div>
                        <div className="text-right">
                          <span className="bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Delivered</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                        <div className="w-16 h-16 bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden relative">
                          <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=200&h=200" alt="Product" className="object-cover w-full h-full" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white line-clamp-1">Premium Wireless Headphones</h4>
                          <p className="text-sm text-slate-500">Quantity: 1</p>
                        </div>
                        <div className="ml-auto font-black text-lg text-slate-900 dark:text-white">₹12,999</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "Wishlist" && (
                <div className="glass-card p-8 md:p-10">
                  <div className="flex justify-between items-center mb-8 border-b border-slate-100 dark:border-slate-800 pb-6">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                      My Wishlist <span className="bg-primary text-white text-sm px-3 py-1 rounded-full">{wishlistItems.length} Items</span>
                    </h2>
                  </div>
                  
                  {wishlistItems.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Heart className="h-10 w-10 text-slate-400" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Your wishlist is empty</h3>
                      <p className="text-slate-500 mb-8 max-w-sm mx-auto">You haven't saved any items yet. Start exploring our premium collection.</p>
                      <Link href="/products" className="bg-primary hover:bg-indigo-500 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-primary/20">
                        Explore Products
                      </Link>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {wishlistItems.map((product) => (
                        <div key={product.id} className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden group hover:border-primary/50 transition-colors flex flex-col">
                          <Link href={`/products/${product.id}`} className="relative h-48 w-full bg-slate-100 overflow-hidden block">
                            <img src={product.image} alt={product.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                            <button 
                              onClick={(e) => { e.preventDefault(); removeWishlist(product.id); }}
                              className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-colors shadow-sm"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </Link>
                          
                          <div className="p-5 flex flex-col flex-1 bg-slate-50/50 dark:bg-slate-900/50">
                            <span className="text-xs font-bold uppercase tracking-wider text-primary mb-1">{product.category}</span>
                            <Link href={`/products/${product.id}`}>
                              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-1 hover:text-primary transition-colors">{product.name}</h3>
                            </Link>
                            
                            <div className="flex items-center justify-between mt-auto pt-4">
                              <span className="text-xl font-black text-slate-900 dark:text-white">₹{product.price}</span>
                              <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-xl font-bold text-sm hover:bg-primary dark:hover:bg-primary hover:text-white transition-colors flex items-center gap-2">
                                <ShoppingCart className="h-4 w-4" />
                                Add
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Placeholder for other tabs to show they work */}
              {["Address", "Track", "Reviews"].includes(activeTab) && (
                <div className="glass-card p-16 text-center">
                  <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    {menuItems.find(m => m.id === activeTab)?.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{activeTab} section coming soon!</h2>
                  <p className="text-slate-500">This area will display your {activeTab.toLowerCase()}.</p>
                </div>
              )}

            </div>
            
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
