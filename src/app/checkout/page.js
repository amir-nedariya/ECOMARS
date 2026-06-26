"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2, CreditCard, Wallet, Banknote, MapPin, Phone, User, CheckCircle, QrCode, Copy, UploadCloud, X, Loader2 } from "lucide-react";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [orderPayload, setOrderPayload] = useState(null);

  // UPI State
  const [upiUtr, setUpiUtr] = useState("");
  const [upiScreenshot, setUpiScreenshot] = useState(null);
  
  // Razorpay State
  const [isRazorpayModalOpen, setIsRazorpayModalOpen] = useState(false);
  const [isRazorpayProcessing, setIsRazorpayProcessing] = useState(false);

  const handleCopyUpi = () => {
    navigator.clipboard.writeText("tubastore@ybl");
    alert("UPI ID Copied!");
  };

  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUpiScreenshot(URL.createObjectURL(e.target.files[0]));
    }
  };

  const placeOrder = (methodData) => {
    setOrderPayload(methodData);
    setIsOrderPlaced(true);
  };

  const handleUpiSubmit = () => {
    if (!upiUtr) {
      alert("Please enter UTR / Transaction ID");
      return;
    }
    placeOrder({
      method: "upi",
      upiId: "tubastore@ybl",
      utr: upiUtr,
      screenshot: upiScreenshot || "",
      status: "pending"
    });
  };

  const handleRazorpayFlow = () => {
    setIsRazorpayModalOpen(true);
  };

  const simulateRazorpaySuccess = () => {
    setIsRazorpayProcessing(true);
    setTimeout(() => {
      setIsRazorpayModalOpen(false);
      setIsRazorpayProcessing(false);
      placeOrder({
        method: "razorpay",
        paymentId: `pay_${Math.random().toString(36).substring(2, 10)}`,
        status: "paid"
      });
    }, 2000);
  };

  if (isOrderPlaced) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-28 pb-20 px-4">
          <div className="glass-card p-10 md:p-16 max-w-lg w-full text-center animate-slide-up">
            <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12" />
            </div>
            <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-4">
              {orderPayload?.method === 'upi' ? 'Payment Submitted!' : 'Order Placed!'}
            </h1>
            <p className="text-slate-500 mb-8">
              {orderPayload?.method === 'upi' 
                ? "Your UPI payment details have been received and are pending verification." 
                : "Thank you for your purchase. We'll send you an email with your order details."}
            </p>
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
              
              <div className="space-y-4">
                {/* COD Option */}
                <label className={`cursor-pointer rounded-2xl border-2 p-5 transition-all flex items-center gap-4 ${paymentMethod === 'COD' ? 'border-primary bg-primary/5' : 'border-slate-200 dark:border-slate-800 hover:border-slate-300'}`}>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${paymentMethod === 'COD' ? 'border-primary' : 'border-slate-300'}`}>
                    {paymentMethod === 'COD' && <div className="w-3 h-3 bg-primary rounded-full" />}
                  </div>
                  <input type="radio" name="payment" value="COD" checked={paymentMethod === 'COD'} onChange={(e) => setPaymentMethod(e.target.value)} className="sr-only" />
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                      <Banknote className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">Cash on Delivery</h3>
                      <p className="text-xs text-slate-500 mt-0.5">Pay at your doorstep</p>
                    </div>
                  </div>
                </label>

                {/* UPI Option */}
                <label className={`cursor-pointer rounded-2xl border-2 p-5 transition-all flex items-center gap-4 ${paymentMethod === 'UPI' ? 'border-primary bg-primary/5' : 'border-slate-200 dark:border-slate-800 hover:border-slate-300'}`}>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${paymentMethod === 'UPI' ? 'border-primary' : 'border-slate-300'}`}>
                    {paymentMethod === 'UPI' && <div className="w-3 h-3 bg-primary rounded-full" />}
                  </div>
                  <input type="radio" name="payment" value="UPI" checked={paymentMethod === 'UPI'} onChange={(e) => setPaymentMethod(e.target.value)} className="sr-only" />
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                      <QrCode className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">UPI Direct</h3>
                      <p className="text-xs text-slate-500 mt-0.5">Scan & Pay via any UPI app</p>
                    </div>
                  </div>
                </label>

                {paymentMethod === 'UPI' && (
                  <div className="ml-0 sm:ml-10 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-800 animate-slide-up">
                    <div className="flex flex-col-reverse sm:flex-row gap-8 items-start">
                      <div className="flex-1 space-y-5 w-full">
                        <div>
                          <p className="text-sm font-semibold text-slate-500 mb-2">UPI ID</p>
                          <div className="flex items-center gap-3 flex-wrap">
                            <span className="text-lg font-bold text-slate-900 dark:text-white bg-white dark:bg-slate-900 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700">tubastore@ybl</span>
                            <button onClick={handleCopyUpi} className="text-primary hover:text-indigo-600 bg-primary/10 p-2 rounded-lg transition-colors flex items-center gap-2 text-sm font-bold">
                              <Copy className="h-4 w-4" /> Copy UPI ID
                            </button>
                          </div>
                        </div>

                        <div className="pt-5 border-t border-slate-200 dark:border-slate-700">
                          <h4 className="font-bold text-slate-900 dark:text-white mb-4">After Payment</h4>
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">UTR / Transaction ID <span className="text-red-500">*</span></label>
                              <input 
                                type="text" 
                                value={upiUtr}
                                onChange={(e) => setUpiUtr(e.target.value)}
                                placeholder="Enter 12-digit UTR number"
                                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-primary transition-colors"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Screenshot (Optional)</label>
                              <label className="flex items-center gap-3 cursor-pointer bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 border-dashed px-4 py-3 rounded-xl hover:border-primary transition-colors">
                                <UploadCloud className="h-5 w-5 text-slate-400" />
                                <span className="text-sm text-slate-500 font-medium">{upiScreenshot ? "Screenshot Selected" : "Choose Image"}</span>
                                <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="shrink-0 w-full sm:w-auto flex flex-col items-center">
                        <div className="w-48 h-48 bg-white p-3 rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center overflow-hidden">
                          <img 
                            src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(`upi://pay?pa=tubastore@ybl&pn=Tuba Store&am=798.00&cu=INR`)}`} 
                            alt="Scan to Pay" 
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <p className="text-sm text-slate-500 font-bold mt-3 text-center">Scan to Pay ₹798</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Razorpay Option */}
                <label className={`cursor-pointer rounded-2xl border-2 p-5 transition-all flex items-center gap-4 ${paymentMethod === 'Razorpay' ? 'border-primary bg-primary/5' : 'border-slate-200 dark:border-slate-800 hover:border-slate-300'}`}>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${paymentMethod === 'Razorpay' ? 'border-primary' : 'border-slate-300'}`}>
                    {paymentMethod === 'Razorpay' && <div className="w-3 h-3 bg-primary rounded-full" />}
                  </div>
                  <input type="radio" name="payment" value="Razorpay" checked={paymentMethod === 'Razorpay'} onChange={(e) => setPaymentMethod(e.target.value)} className="sr-only" />
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                      <CreditCard className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">Online Payment - Razorpay</h3>
                      <p className="text-xs text-slate-500 mt-0.5">Cards, Netbanking, Wallets</p>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Place Order Button */}
            <div className="flex justify-end pt-4">
              {paymentMethod === 'COD' && (
                <button 
                  onClick={() => placeOrder({ method: "cod", status: "pending" })}
                  className="w-full sm:w-auto bg-primary hover:bg-indigo-500 text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-primary/25 hover:-translate-y-1 transition-all active:scale-95 flex justify-center items-center gap-2"
                >
                  Place Order (₹798)
                </button>
              )}
              {paymentMethod === 'UPI' && (
                <button 
                  onClick={handleUpiSubmit}
                  className="w-full sm:w-auto bg-primary hover:bg-indigo-500 text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-primary/25 hover:-translate-y-1 transition-all active:scale-95 flex justify-center items-center gap-2"
                >
                  Submit Payment Details
                </button>
              )}
              {paymentMethod === 'Razorpay' && (
                <button 
                  onClick={handleRazorpayFlow}
                  className="w-full sm:w-auto bg-slate-900 dark:bg-white dark:text-slate-900 text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-xl hover:-translate-y-1 transition-all active:scale-95 flex justify-center items-center gap-2"
                >
                  Pay Now (₹798)
                </button>
              )}
            </div>

          </div>
        </div>
      </main>

      {/* Razorpay Simulated Modal */}
      {isRazorpayModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden animate-slide-up">
            <div className="bg-[#0c2e60] text-white p-6 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-xl">Razorpay Checkout</h3>
                <p className="text-blue-200 text-sm opacity-80 mt-1">TUBA STORE</p>
              </div>
              <button onClick={() => !isRazorpayProcessing && setIsRazorpayModalOpen(false)} className="text-white/60 hover:text-white transition-colors">
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-8">
              {!isRazorpayProcessing ? (
                <>
                  <div className="text-center mb-8">
                    <p className="text-slate-500 mb-2">Amount to Pay</p>
                    <h2 className="text-4xl font-black text-slate-900">₹798.00</h2>
                  </div>
                  
                  <div className="space-y-3">
                    <button onClick={simulateRazorpaySuccess} className="w-full py-4 px-6 border-2 border-[#0c2e60]/10 hover:border-[#0c2e60] rounded-xl flex items-center justify-between group transition-all text-left">
                      <div className="flex items-center gap-3">
                        <QrCode className="text-slate-400 group-hover:text-[#0c2e60]" />
                        <span className="font-semibold text-slate-700 group-hover:text-[#0c2e60]">UPI / QR</span>
                      </div>
                      <span className="text-[#0c2e60] font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">Select</span>
                    </button>
                    <button onClick={simulateRazorpaySuccess} className="w-full py-4 px-6 border-2 border-[#0c2e60]/10 hover:border-[#0c2e60] rounded-xl flex items-center justify-between group transition-all text-left">
                      <div className="flex items-center gap-3">
                        <CreditCard className="text-slate-400 group-hover:text-[#0c2e60]" />
                        <span className="font-semibold text-slate-700 group-hover:text-[#0c2e60]">Card</span>
                      </div>
                    </button>
                    <button onClick={simulateRazorpaySuccess} className="w-full py-4 px-6 border-2 border-[#0c2e60]/10 hover:border-[#0c2e60] rounded-xl flex items-center justify-between group transition-all text-left">
                      <div className="flex items-center gap-3">
                        <Wallet className="text-slate-400 group-hover:text-[#0c2e60]" />
                        <span className="font-semibold text-slate-700 group-hover:text-[#0c2e60]">Netbanking / Wallets</span>
                      </div>
                    </button>
                  </div>
                </>
              ) : (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <Loader2 className="h-12 w-12 text-[#0c2e60] animate-spin" />
                  <h3 className="text-xl font-bold text-slate-900">Processing Payment...</h3>
                  <p className="text-slate-500">Please do not close this window or press back.</p>
                </div>
              )}
            </div>
            
            <div className="bg-slate-50 p-4 text-center border-t border-slate-100">
              <p className="text-xs text-slate-400 font-medium flex items-center justify-center gap-1">
                Secured by <span className="font-bold text-slate-600">Razorpay</span>
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
