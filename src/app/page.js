import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, ShoppingCart, Zap, Heart } from "lucide-react";

export default function Home() {
  const categories = [
    { name: "Perfume", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=200&h=200" },
    { name: "Bottles", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=200&h=200" },
    { name: "Plastic", image: "https://images.unsplash.com/photo-1584016221727-463d1a8e6ea4?auto=format&fit=crop&q=80&w=200&h=200" },
    { name: "Fashion", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=200&h=200" },
    { name: "Electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=200&h=200" },
    { name: "Home", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=200&h=200" },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: "12,999",
      rating: 5,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      id: 2,
      name: "Elite Smart Watch Series 5",
      price: "8,499",
      rating: 5,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      id: 3,
      name: "Signature Designer Perfume",
      price: "4,599",
      rating: 5,
      image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=400&h=400"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-[116px]"> {/* Offset for header */}
        
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 lg:py-24 animate-fade-in">
          <div className="rounded-3xl overflow-hidden relative glass-card border-none bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-indigo-950">
            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1557821552-17105153ce67?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay"></div>
            <div className="relative px-6 py-20 md:py-32 md:px-16 text-center lg:text-left flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 space-y-8 z-10">
                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider uppercase backdrop-blur-md">
                  Welcome to Ecomars
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
                  Everything You Need <br/>
                  <span className="text-gradient">In One Place</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0">
                  Discover curated collections of premium products designed for modern living. Fast shipping, secure payments.
                </p>
                <button className="bg-primary hover:bg-indigo-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/30 hover:-translate-y-1 transition-all duration-300 active:scale-95 inline-flex items-center gap-2">
                  Shop Now
                  <Zap className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Top Categories */}
        <section className="py-16 bg-white dark:bg-slate-900 animate-slide-up" style={{animationDelay: '0.2s', opacity: 0}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-10 text-center lg:text-left">
              Top Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.map((category) => (
                <div key={category.name} className="group cursor-pointer flex flex-col items-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 border-4 border-slate-50 dark:border-slate-800 shadow-md group-hover:shadow-xl group-hover:border-primary/20 transition-all duration-300 relative group-hover:-translate-y-2">
                    <Image 
                      src={category.image} 
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-slate-700 dark:text-slate-200 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-slate-50 dark:bg-slate-950 animate-slide-up" style={{animationDelay: '0.4s', opacity: 0}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl font-bold">Featured Products</h2>
                <p className="text-slate-500 mt-2">Handpicked quality items for you</p>
              </div>
              <a href="#" className="hidden sm:block text-primary font-semibold hover:underline">View All →</a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <div key={product.id} className="glass-card overflow-hidden group hover-lift">
                  <div className="relative h-72 w-full overflow-hidden bg-slate-100">
                    <Image 
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full text-slate-400 hover:text-red-500 hover:bg-white transition-colors shadow-sm">
                      <Heart className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-xs text-slate-400 ml-2">(128)</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-1">{product.name}</h3>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-2xl font-black text-primary">₹{product.price}</span>
                      <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-primary dark:hover:bg-primary hover:text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-colors flex items-center gap-2">
                        <ShoppingCart className="h-4 w-4" />
                        Add Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deal Section - Flash Sale */}
        <section className="py-20 animate-slide-up" style={{animationDelay: '0.6s', opacity: 0}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl overflow-hidden relative bg-slate-900 text-white shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/90 to-orange-500/90 z-10"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40"></div>
              
              <div className="relative z-20 px-8 py-16 md:py-24 text-center md:text-left flex flex-col md:flex-row items-center justify-between">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
                    🔥 Flash Sale
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
                    Up to 70% Off <br/> On All Electronics
                  </h2>
                  <p className="text-lg text-white/80 mb-8 max-w-xl">
                    Don't miss out on our biggest sale of the year. Grab your favorite items before they run out.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    {['12', '45', '30'].map((time, idx) => (
                      <div key={idx} className="bg-white/10 backdrop-blur-md rounded-xl p-4 min-w-[80px] text-center border border-white/20">
                        <span className="block text-3xl font-black">{time}</span>
                        <span className="text-xs uppercase tracking-wider font-semibold text-white/70">
                          {idx === 0 ? 'Hours' : idx === 1 ? 'Mins' : 'Secs'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-10 md:mt-0">
                  <button className="bg-white text-red-600 hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-transform duration-300">
                    Grab Deals Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
