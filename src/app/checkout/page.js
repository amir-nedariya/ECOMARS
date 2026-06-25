"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2, CreditCard, Wallet, Banknote, MapPin, Phone, User, CheckCircle } from "lucide-react";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  if (isOrderPlaced) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-28 pb-20 px-4">
          <div className="glass-card p-10 md:p-16 max-w-lg w-full text-center animate-slide-up">
            <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12" />
            </div>
            <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Order Placed!</h1>
            <p className="text-slate-500 mb-8">Thank you for your purchase. Your order number is <strong>#ORD-{Math.floor(100000 + Math.random() * 900000)}</strong>. We'll send you an email with your order details.</p>
            <Link href="/products" className="bg-primary hover:bg-indigo-500 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 inline-block w-full">
              Continue Shopping
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      <Header />
      
      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-10">Checkout</h1>

          <div className="space-y-8 animate-slide-up">
            
            {/* Delivery Address Section */}
            <div className="glass-card p-8">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
                <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                Delivery Address
              </h2>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input 
                      type="tel" 
                      placeholder="+91 9876543210"
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Complete Address</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-4 h-5 w-5 text-slate-400" />
                    <textarea 
                      rows="3"
                      placeholder="House No, Street, City, State, Pincode"
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Section */}
            <div className="glass-card p-8">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
                <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                Payment Method
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* COD Option */}
                <label className={`cursor-pointer rounded-2xl border-2 p-5 transition-all flex flex-col items-center gap-3 text-center ${paymentMethod === 'COD' ? 'border-primary bg-primary/5' : 'border-slate-200 dark:border-slate-800 hover:border-slate-300'}`}>
                  <input 
                    type="radio" 
                    name="payment" 
                    value="COD" 
                    checked={paymentMethod === 'COD'} 
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="sr-only" 
                  />
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${paymentMethod === 'COD' ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                    <Banknote className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Cash on Delivery</h3>
                    <p className="text-xs text-slate-500 mt-1">Pay at your doorstep</p>
                  </div>
                  {paymentMethod === 'COD' && <CheckCircle2 className="absolute top-4 right-4 h-5 w-5 text-primary" />}
                </label>

                {/* UPI Option */}
                <label className={`relative cursor-pointer rounded-2xl border-2 p-5 transition-all flex flex-col items-center gap-3 text-center ${paymentMethod === 'UPI' ? 'border-primary bg-primary/5' : 'border-slate-200 dark:border-slate-800 hover:border-slate-300'}`}>
                  <input 
                    type="radio" 
                    name="payment" 
                    value="UPI" 
                    checked={paymentMethod === 'UPI'} 
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="sr-only" 
                  />
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${paymentMethod === 'UPI' ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                    <Wallet className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">UPI</h3>
                    <p className="text-xs text-slate-500 mt-1">GPay, PhonePe, Paytm</p>
                  </div>
                  {paymentMethod === 'UPI' && <CheckCircle2 className="absolute top-4 right-4 h-5 w-5 text-primary" />}
                </label>

                {/* Card Option */}
                <label className={`relative cursor-pointer rounded-2xl border-2 p-5 transition-all flex flex-col items-center gap-3 text-center ${paymentMethod === 'Card' ? 'border-primary bg-primary/5' : 'border-slate-200 dark:border-slate-800 hover:border-slate-300'}`}>
                  <input 
                    type="radio" 
                    name="payment" 
                    value="Card" 
                    checked={paymentMethod === 'Card'} 
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="sr-only" 
                  />
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${paymentMethod === 'Card' ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Credit / Debit Card</h3>
                    <p className="text-xs text-slate-500 mt-1">Visa, Mastercard, RuPay</p>
                  </div>
                  {paymentMethod === 'Card' && <CheckCircle2 className="absolute top-4 right-4 h-5 w-5 text-primary" />}
                </label>
              </div>
            </div>

            {/* Place Order Button */}
            <div className="flex justify-end pt-4">
              <button 
                onClick={() => setIsOrderPlaced(true)}
                className="w-full sm:w-auto bg-primary hover:bg-indigo-500 text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-primary/25 hover:-translate-y-1 transition-all active:scale-95 flex justify-center items-center gap-2"
              >
                Place Order (₹14,798)
              </button>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
