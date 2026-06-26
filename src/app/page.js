"use client";
import { useRef } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, ShoppingCart, Zap, Heart, ShieldCheck, Truck, Lock, ArrowRight, RefreshCcw, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const scrollRef = useRef(null);
  
  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const categories = [
    { name: "Perfume", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=300&h=400" },
    { name: "Bottles", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=300&h=400" },
    { name: "Plastic", image: "https://images.unsplash.com/photo-1584016221727-463d1a8e6ea4?auto=format&fit=crop&q=80&w=300&h=400" },
    { name: "Fashion", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=300&h=400" },
    { name: "Electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=300&h=400" },
    { name: "Home", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=300&h=400" },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: "12,999",
      rating: 5,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400&h=400",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Elite Smart Watch Series 5",
      price: "8,499",
      rating: 5,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400&h=400",
      badge: "New Arrival"
    },
    {
      id: 3,
      name: "Signature Designer Perfume",
      price: "4,599",
      rating: 5,
      image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=400&h=400",
      badge: ""
    },
    {
      id: 4,
      name: "Minimalist Leather Wallet",
      price: "2,299",
      rating: 5,
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=400&h=400",
      badge: "Trending"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#0B0F19]">
      <Header />
      
      <main className="flex-1 pt-28 md:pt-32">
        
        {/* Premium Hero Section */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
          <div className="relative rounded-[2rem] overflow-hidden bg-slate-900 shadow-2xl min-h-[500px] md:min-h-[600px] flex items-center">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0">
              <Image 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80" 
                alt="Store Hero" 
                fill 
                className="object-cover object-center opacity-40"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
            </div>
            
            <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wider uppercase mb-8">
                <ShieldCheck className="h-4 w-4 text-green-400" /> Premium Quality Guaranteed
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
                Curated Excellence <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">For Your Lifestyle</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl font-light leading-relaxed">
                Discover our handpicked collection of premium products. 100% authentic, secure checkout, and lightning-fast delivery to your doorstep.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-lg transition-all active:scale-95 flex items-center justify-center gap-2">
                  Shop Collection <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-12 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Secure Checkout</h4>
                  <p className="text-sm text-slate-500">256-bit SSL encryption</p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <Truck className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Fast Delivery</h4>
                  <p className="text-sm text-slate-500">Free shipping over ₹999</p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <RefreshCcw className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Easy Returns</h4>
                  <p className="text-sm text-slate-500">30-day money-back guarantee</p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <Lock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Buyer Protection</h4>
                  <p className="text-sm text-slate-500">Shop with full confidence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-20 bg-slate-50 dark:bg-[#0B0F19]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Explore Categories</h2>
                <p className="text-slate-500 max-w-2xl">Find exactly what you're looking for from our carefully structured collections.</p>
              </div>
            </div>
            
            <div className="relative group/slider">
              <div ref={scrollRef} className="flex overflow-x-auto gap-8 pb-8 snap-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-2">
                {categories.map((category) => (
                  <div key={category.name} className="flex flex-col items-center gap-4 w-[120px] md:w-[150px] flex-shrink-0 snap-start group cursor-pointer">
                    <div className="relative w-full aspect-square rounded-full overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-300 border-[4px] border-transparent group-hover:border-indigo-100 dark:group-hover:border-indigo-900/50 bg-slate-100 dark:bg-slate-800">
                      <Image 
                        src={category.image} 
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-slate-700 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-center">
                      {category.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-24 bg-white dark:bg-[#0B0F19] border-t border-slate-100 dark:border-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Trending Now</h2>
                <p className="text-slate-500 max-w-xl">Our most popular items chosen by customers, updated daily to bring you the best.</p>
              </div>
              <button className="text-indigo-600 dark:text-indigo-400 font-bold hover:text-indigo-700 transition-colors flex items-center gap-2 group">
                View All Collection <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {featuredProducts.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  {/* Image Container */}
                  <div className="relative h-[360px] w-full bg-slate-50 dark:bg-slate-800/30 rounded-3xl overflow-hidden mb-5">
                    <Image 
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-slate-900 dark:text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                        {product.badge}
                      </div>
                    )}
                    
                    {/* Wishlist Button */}
                    <button className="absolute top-4 right-4 bg-white/50 hover:bg-white dark:bg-slate-900/50 dark:hover:bg-slate-900 backdrop-blur-md p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:text-red-500 dark:hover:text-red-400 transition-all shadow-sm opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 duration-300 delay-100">
                      <Heart className="h-4 w-4" />
                    </button>
                    
                    {/* Add to Cart Overlay Button */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                      <button className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2 shadow-xl hover:scale-[1.02] active:scale-95 transition-all">
                        <ShoppingCart className="h-4 w-4" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  
                  {/* Product Details (Clean & Minimal) */}
                  <div className="px-2">
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-xs text-slate-400 ml-2 font-medium">(128)</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 line-clamp-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{product.name}</h3>
                    <p className="text-lg font-black text-slate-900 dark:text-white">₹{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof / Testimonials */}
        <section className="py-24 bg-indigo-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">Trusted by 10,000+ Customers</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Rahul S.", text: "The quality of the products is unmatched. Delivery was super fast and the packaging was premium." },
                { name: "Priya K.", text: "I was worried about online payments, but their secure checkout and buyer protection gave me total peace of mind." },
                { name: "Amit V.", text: "Fantastic customer support! They helped me choose the right perfume and it smells absolutely divine." }
              ].map((review, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl text-left">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(i => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-slate-200 mb-6 italic">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-white text-lg">
                      {review.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{review.name}</h4>
                      <p className="text-xs text-indigo-200 flex items-center gap-1"><CheckCircle2 className="h-3 w-3" /> Verified Buyer</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
