import Link from 'next/link';
import { ShieldCheck, Lock, CreditCard, Headphones, Package, HelpCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Indicators Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 pb-12 border-b border-slate-800">
          <div className="flex items-center gap-4">
            <div className="bg-indigo-500/10 p-3 rounded-xl border border-indigo-500/20">
              <ShieldCheck className="h-6 w-6 text-indigo-400" />
            </div>
            <div>
              <h4 className="font-semibold text-white">100% Secure</h4>
              <p className="text-xs text-slate-500 mt-1">Bank-level encryption</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-green-500/10 p-3 rounded-xl border border-green-500/20">
              <Lock className="h-6 w-6 text-green-400" />
            </div>
            <div>
              <h4 className="font-semibold text-white">Buyer Protection</h4>
              <p className="text-xs text-slate-500 mt-1">Full refund if not as described</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-blue-500/10 p-3 rounded-xl border border-blue-500/20">
              <Package className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <h4 className="font-semibold text-white">Fast Delivery</h4>
              <p className="text-xs text-slate-500 mt-1">Tracked and insured shipping</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-orange-500/10 p-3 rounded-xl border border-orange-500/20">
              <Headphones className="h-6 w-6 text-orange-400" />
            </div>
            <div>
              <h4 className="font-semibold text-white">24/7 Support</h4>
              <p className="text-xs text-slate-500 mt-1">We are here to help you</p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-black text-white tracking-tighter flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-bold text-xl">E</div>
              ECOMARS
            </Link>
            <p className="text-sm text-slate-400 max-w-sm mb-6 leading-relaxed">
              Your premium destination for quality products. We believe in providing the best shopping experience with highest security standards.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 text-slate-400 hover:text-white transition-all font-bold text-xs">IG</Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 text-slate-400 hover:text-white transition-all font-bold text-xs">X</Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 text-slate-400 hover:text-white transition-all font-bold text-xs">FB</Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 text-slate-400 hover:text-white transition-all font-bold text-xs">YT</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Shop Categories</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">Premium Perfumes</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">Smart Electronics</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">Fashion Accessories</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">Home & Living</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">Exclusive Offers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Customer Service</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">Track Your Order</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">Shipping & Returns</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">FAQ & Help Center</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Legal & Policy</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">Cookie Policy</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">Payment Security</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Ecomars. All rights reserved.</p>
          
          <div className="flex items-center gap-2">
            <span className="mr-2">Secure Payments by:</span>
            {/* Fake Payment Icons */}
            <div className="px-2 py-1 bg-slate-800 rounded text-[10px] font-bold text-white border border-slate-700">UPI</div>
            <div className="px-2 py-1 bg-slate-800 rounded text-[10px] font-bold text-white border border-slate-700">VISA</div>
            <div className="px-2 py-1 bg-slate-800 rounded text-[10px] font-bold text-white border border-slate-700">MASTERCARD</div>
            <div className="px-2 py-1 bg-slate-800 rounded text-[10px] font-bold text-white border border-slate-700">RAZORPAY</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
