"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Minus, Plus, Trash2, ArrowRight, Tag, ShieldCheck, Ticket } from "lucide-react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 12999,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400&h=400",
      color: "Black"
    },
    {
      id: 2,
      name: "Stainless Steel Water Bottle",
      price: 899,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=400&h=400",
      color: "Silver"
    }
  ]);

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(null);

  const updateQuantity = (id, change) => {
    setCartItems(items => 
      items.map(item => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const availableCoupons = [
    { code: "WELCOME50", type: "Percentage", value: 0.5, desc: "50% OFF", terms: "Use once only" },
    { code: "SAVE500", type: "Fixed", value: 500, desc: "₹500 OFF", terms: "Min order ₹2000" },
    { code: "NEWUSER20", type: "Percentage", value: 0.2, desc: "20% OFF", terms: "First order only" }
  ];

  const applyCoupon = (codeToApply = coupon) => {
    const code = codeToApply.toUpperCase();
    setCoupon(code);
    
    if (code === "WELCOME50") {
      setDiscount({ type: 'Percentage', value: 0.5 });
    } else if (code === "NEWUSER20") {
      setDiscount({ type: 'Percentage', value: 0.2 });
    } else if (code === "SAVE500") {
      setDiscount({ type: 'Fixed', value: 500 });
    } else if (code === "SAVE20") {
      setDiscount({ type: 'Percentage', value: 0.2 });
    } else {
      setDiscount(null);
      alert("Invalid or expired coupon code.");
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  let discountAmount = 0;
  if (discount) {
    if (discount.type === 'Percentage') {
      discountAmount = subtotal * discount.value;
    } else if (discount.type === 'Fixed') {
      // For fixed, check min order if needed, but we'll just apply it safely
      discountAmount = Math.min(subtotal, discount.value);
    }
  }

  const total = subtotal - discountAmount;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      <Header />
      
      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h1 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-10">
            My Cart {cartItems.length > 0 && <span className="text-slate-400 font-medium text-2xl">({cartItems.length} Items)</span>}
          </h1>

          {cartItems.length === 0 ? (
            <div className="glass-card p-16 flex flex-col items-center text-center animate-fade-in">
              <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
                <ShoppingCart className="h-10 w-10 text-slate-400" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Your cart is empty</h2>
              <p className="text-slate-500 mb-8 max-w-md">Looks like you haven't added anything to your cart yet. Discover our premium products and find what you love.</p>
              <Link href="/products" className="bg-primary hover:bg-indigo-500 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-10">
              
              {/* Left Column - Cart Items */}
              <div className="flex-1 animate-slide-up">
                <div className="glass-card overflow-hidden">
                  {cartItems.map((item, index) => (
                    <div key={item.id} className={`p-6 flex flex-col sm:flex-row items-center gap-6 ${index !== cartItems.length - 1 ? 'border-b border-slate-100 dark:border-slate-800' : ''}`}>
                      
                      {/* Image */}
                      <Link href={`/products/${item.id}`} className="relative h-28 w-28 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 group">
                        <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                      </Link>

                      {/* Details */}
                      <div className="flex-1 text-center sm:text-left w-full">
                        <Link href={`/products/${item.id}`}>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white hover:text-primary transition-colors line-clamp-1">{item.name}</h3>
                        </Link>
                        <p className="text-sm text-slate-500 mt-1">Color: {item.color}</p>
                        
                        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
                          <span className="text-xl font-black text-slate-900 dark:text-white">₹{item.price.toLocaleString()}</span>
                          
                          <div className="flex items-center gap-4">
                            {/* Quantity Control */}
                            <div className="inline-flex items-center bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-1">
                              <button 
                                onClick={() => updateQuantity(item.id, -1)}
                                className="p-1 hover:bg-slate-200 dark:hover:bg-slate-800 rounded transition-colors text-slate-500 disabled:opacity-50"
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="w-10 text-center font-bold text-sm">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, 1)}
                                className="p-1 hover:bg-slate-200 dark:hover:bg-slate-800 rounded transition-colors text-slate-500"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                            
                            {/* Remove Button */}
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="text-slate-400 hover:text-red-500 p-2 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-full transition-colors"
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Summary & Coupon */}
              <div className="w-full lg:w-96 flex-shrink-0 animate-slide-up" style={{animationDelay: '0.2s', opacity: 0}}>
                <div className="glass-card p-8 sticky top-28">
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6">Order Summary</h3>
                  
                  {/* Coupon Code */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Have a coupon code?</label>
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input 
                          type="text" 
                          placeholder="e.g. SAVE20"
                          value={coupon}
                          onChange={(e) => setCoupon(e.target.value)}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm uppercase"
                        />
                      </div>
                      <button 
                        onClick={() => applyCoupon(coupon)}
                        className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-primary dark:hover:bg-primary hover:text-white transition-colors"
                      >
                        Apply
                      </button>
                    </div>
                  </div>

                  {/* Available Coupons */}
                  <div className="mb-6 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden bg-slate-50/50 dark:bg-slate-900/50">
                    <div className="bg-slate-100 dark:bg-slate-800/80 px-4 py-3 border-b border-slate-200 dark:border-slate-700">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">Available Coupons</h4>
                    </div>
                    <div className="p-4 space-y-3">
                      {availableCoupons.map((c, idx) => (
                        <div key={idx} className="relative border border-dashed border-primary/40 bg-primary/5 rounded-xl p-3 flex justify-between items-center group hover:bg-primary/10 transition-colors">
                          <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white dark:bg-slate-950 rounded-full border-r border-dashed border-primary/40"></div>
                          <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white dark:bg-slate-950 rounded-full border-l border-dashed border-primary/40"></div>
                          
                          <div className="pl-2">
                            <div className="flex items-center gap-2 mb-1">
                              <Ticket className="h-4 w-4 text-primary" />
                              <span className="font-black text-slate-900 dark:text-white text-sm">{c.code}</span>
                            </div>
                            <div className="text-primary font-bold text-sm">{c.desc}</div>
                            <div className="text-xs text-slate-500 mt-0.5">{c.terms}</div>
                          </div>
                          
                          <button 
                            onClick={() => applyCoupon(c.code)}
                            className="text-xs font-bold text-primary hover:text-white border border-primary hover:bg-primary px-3 py-1.5 rounded-lg transition-all"
                          >
                            Apply
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 border-t border-slate-100 dark:border-slate-800 pt-6 mb-6">
                    <div className="flex justify-between text-slate-600 dark:text-slate-400">
                      <span>Subtotal</span>
                      <span className="font-semibold text-slate-900 dark:text-white">₹{subtotal.toLocaleString()}</span>
                    </div>
                    {discountAmount > 0 && (
                      <div className="flex justify-between text-green-500">
                        <span>Discount ({discount?.type === 'Percentage' ? `${discount.value * 100}%` : `₹${discount.value}`})</span>
                        <span className="font-semibold">-₹{discountAmount.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-slate-600 dark:text-slate-400">
                      <span>Shipping</span>
                      <span className="font-semibold text-primary">Free</span>
                    </div>
                  </div>

                  <div className="border-t border-slate-200 dark:border-slate-700 pt-6 mb-8 flex justify-between items-end">
                    <span className="text-lg font-bold text-slate-900 dark:text-white">Total</span>
                    <span className="text-3xl font-black text-slate-900 dark:text-white">₹{total.toLocaleString()}</span>
                  </div>

                  <Link href="/checkout" className="w-full bg-primary hover:bg-indigo-500 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-primary/25 hover:-translate-y-1 transition-all active:scale-95 flex justify-center items-center gap-2 mb-4">
                    Proceed Checkout
                    <ArrowRight className="h-5 w-5" />
                  </Link>

                  <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Secure Checkout</span>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
