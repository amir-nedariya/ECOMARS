"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, Minus, Plus, ShoppingCart, Heart, Share2, ShieldCheck, Truck, RotateCcw } from "lucide-react";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [selectedSize, setSelectedSize] = useState("500ml");
  const [activeTab, setActiveTab] = useState("Description");

  // Mock product data based on the wireframe
  const product = {
    name: "Premium Water Bottle",
    price: "299",
    rating: 5,
    category: "Bottles",
    subCategory: "Water Bottle",
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=800&h=800",
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800&h=800",
      "https://images.unsplash.com/photo-1581007871115-f483bfdb5824?auto=format&fit=crop&q=80&w=800&h=800",
      "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800&h=800"
    ],
    colors: ["Black", "White", "Blue", "Olive"],
    sizes: ["500ml", "1L", "1.5L"],
    description: "Stay hydrated in style with our Premium Water Bottle. Crafted from double-walled, vacuum-insulated stainless steel, it keeps your beverages cold for up to 24 hours or hot for 12 hours. The sleek design features a leak-proof cap and a sweat-free exterior, making it the perfect companion for your commute, gym session, or outdoor adventure.",
    specifications: [
      { label: "Material", value: "18/8 Stainless Steel" },
      { label: "Insulation", value: "Double-wall vacuum insulation" },
      { label: "Cap", value: "Leak-proof, BPA-free plastic" },
      { label: "Care", value: "Hand wash recommended" },
      { label: "Dimensions", value: "3.5\" W x 10.5\" H (1L size)" }
    ]
  };

  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      <Header />
      
      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Left Column - Image Gallery */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4 animate-fade-in">
              {/* Main Image */}
              <div className="glass-card overflow-hidden relative aspect-square w-full bg-white dark:bg-slate-900 group">
                <Image 
                  src={mainImage} 
                  alt={product.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute top-4 right-4 flex flex-col gap-3">
                  <button className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-3 rounded-full text-slate-400 hover:text-red-500 hover:scale-110 transition-all shadow-md active:scale-95">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-3 rounded-full text-slate-400 hover:text-primary hover:scale-110 transition-all shadow-md active:scale-95">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              {/* Thumbnails */}
              <div className="flex gap-4 overflow-x-auto pb-2 snap-x scrollbar-hide">
                {product.images.map((img, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setMainImage(img)}
                    className={`relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 snap-start border-2 transition-all ${mainImage === img ? 'border-primary ring-2 ring-primary/20 scale-95' : 'border-transparent hover:border-slate-300 dark:hover:border-slate-700'}`}
                  >
                    <Image src={img} alt={`Thumbnail ${idx+1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Product Details */}
            <div className="w-full lg:w-1/2 animate-slide-up" style={{animationDelay: '0.2s', opacity: 0}}>
              
              <div className="mb-8 border-b border-slate-200 dark:border-slate-800 pb-8">
                {/* Meta */}
                <div className="flex items-center gap-2 mb-4 text-sm font-semibold">
                  <span className="text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">{product.category}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-500 dark:text-slate-400">{product.subCategory}</span>
                </div>
                
                {/* Title & Price */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4 leading-tight">
                  {product.name}
                </h1>
                
                <div className="flex items-end gap-4 mb-4">
                  <span className="text-4xl font-black text-slate-900 dark:text-white">₹{product.price}</span>
                  <span className="text-lg text-slate-400 line-through font-bold mb-1">₹599</span>
                  <span className="text-sm font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded mb-1">50% OFF</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-5 w-5 ${i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300 dark:text-slate-700'}`} />
                    ))}
                  </div>
                  <span className="text-slate-500 font-medium hover:text-primary transition-colors cursor-pointer border-b border-dashed border-slate-400">(128 Reviews)</span>
                </div>
              </div>

              {/* Variants */}
              <div className="mb-8 space-y-6">
                
                {/* Colors */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold text-slate-900 dark:text-white">Color: <span className="text-slate-500 font-normal ml-1">{selectedColor}</span></h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {product.colors.map(color => (
                      <button 
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-5 py-2.5 rounded-full border-2 text-sm font-semibold transition-all ${
                          selectedColor === color 
                          ? 'border-primary text-primary bg-primary/5' 
                          : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-slate-400'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sizes */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold text-slate-900 dark:text-white">Size: <span className="text-slate-500 font-normal ml-1">{selectedSize}</span></h3>
                    <button className="text-sm text-primary font-medium hover:underline">Size Guide</button>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map(size => (
                      <button 
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-5 py-2.5 rounded-xl border-2 text-sm font-semibold transition-all ${
                          selectedSize === size 
                          ? 'border-primary text-primary bg-primary/5' 
                          : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-slate-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-3">Quantity</h3>
                  <div className="inline-flex items-center bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-xl p-1 shadow-sm">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-slate-500 hover:text-slate-900 dark:hover:text-white disabled:opacity-50"
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-slate-500 hover:text-slate-900 dark:hover:text-white"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-10">
                <button className="flex-1 bg-primary hover:bg-indigo-500 text-white py-4 px-8 rounded-2xl font-bold text-lg shadow-xl shadow-primary/25 hover:-translate-y-1 transition-all active:scale-95 flex justify-center items-center gap-3">
                  <ShoppingCart className="h-5 w-5" />
                  Add To Cart
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 glass-card bg-white/50 dark:bg-slate-900/50">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">1 Year Warranty</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <Truck className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Free Shipping</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <RotateCcw className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">14-Day Returns</span>
                </div>
              </div>

            </div>
          </div>

          {/* Tabs Section (Description / Specifications / Reviews) */}
          <div className="mt-20 glass-card p-6 md:p-10 animate-slide-up" style={{animationDelay: '0.4s', opacity: 0}}>
            <div className="flex gap-8 border-b border-slate-200 dark:border-slate-800 mb-8 overflow-x-auto scrollbar-hide">
              {['Description', 'Specifications', 'Reviews'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-lg font-bold whitespace-nowrap transition-all relative ${
                    activeTab === tab 
                    ? 'text-primary' 
                    : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-full"></span>
                  )}
                </button>
              ))}
            </div>

            <div className="min-h-[200px]">
              {activeTab === 'Description' && (
                <div className="prose prose-slate dark:prose-invert max-w-none animate-fade-in">
                  <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">{product.description}</p>
                </div>
              )}
              
              {activeTab === 'Specifications' && (
                <div className="animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.specifications.map((spec, idx) => (
                      <div key={idx} className="flex py-3 border-b border-slate-100 dark:border-slate-800/50">
                        <span className="w-1/3 text-slate-500 font-semibold">{spec.label}</span>
                        <span className="w-2/3 text-slate-900 dark:text-slate-200 font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'Reviews' && (
                <div className="animate-fade-in">
                  <div className="flex flex-col md:flex-row items-center gap-8 mb-10 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl">
                    <div className="text-center">
                      <h4 className="text-5xl font-black text-slate-900 dark:text-white mb-2">4.8</h4>
                      <div className="flex items-center justify-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-slate-500 font-medium">Based on 128 Reviews</span>
                    </div>
                    <div className="flex-1 w-full space-y-2">
                      {[5,4,3,2,1].map(star => (
                        <div key={star} className="flex items-center gap-3">
                          <span className="text-sm font-bold text-slate-500 w-3">{star}</span>
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <div className="flex-1 h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-yellow-400 rounded-full" style={{width: `${star === 5 ? 85 : star === 4 ? 10 : star === 3 ? 5 : 0}%`}}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button className="text-primary font-bold hover:underline">Write a Review</button>
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
