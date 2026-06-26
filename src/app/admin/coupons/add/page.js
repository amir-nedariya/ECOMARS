"use client";

import { useState } from"react";
import { ArrowLeft, Save, Ticket, Percent, Banknote, ShieldCheck, Sparkles } from"lucide-react";
import Link from"next/link";

export default function CreateCouponPage() {
 const [discountType, setDiscountType] = useState("Percentage");
 const [applicableFor, setApplicableFor] = useState("All Products");
 const [status, setStatus] = useState("Active");
 const [couponCode, setCouponCode] = useState("");

 const generateAiCoupon = () => {
 const prefixes = ["SAVE","OFFER","MEGA","FLASH","SUPER","WINTER","SUMMER","FEST"];
 const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
 const number = Math.floor(Math.random() * 80) + 20; // 20 to 99
 setCouponCode(`${prefix}${number}`);
 };

 const couponTypes = ["Percentage Discount","Fixed Discount","Free Shipping","First Order","Category Discount","Product Discount","Buy X Get Y","Festival Offer","Limited Usage"
 ];

  return (
  <div className="space-y-8 animate-fade-in max-w-5xl mx-auto pb-12">
    {/* Header */}
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
      <div>
        <div className="flex items-center gap-3 mb-1">
          <Link href="/admin/coupons" className="text-slate-400 hover:text-indigo-600 transition-colors p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-2xl text-slate-900 dark:text-white font-bold flex items-center gap-3">
            <Ticket className="h-7 w-7 text-indigo-500" />
            Create New Coupon
          </h1>
        </div>
        <p className="text-sm text-slate-500 ml-10">Configure discount rules, usage limits, and validity.</p>
      </div>
      <button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 font-medium">
        <Save className="h-4 w-4" />
        Save Coupon
      </button>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Column (2/3 width) */}
      <div className="lg:col-span-2 space-y-8">
        
        {/* Basic Info */}
        <div className="bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-2xl">
          <h2 className="text-lg text-slate-900 dark:text-white font-semibold mb-6 flex items-center gap-2">
            <Ticket className="h-5 w-5 text-indigo-500" />
            Coupon Details
          </h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Coupon Code</label>
              <div className="relative">
                <input type="text" value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                  placeholder="e.g. WELCOME50"
                  className="w-full pl-4 pr-12 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 uppercase transition-all font-medium text-slate-900 dark:text-white placeholder:normal-case placeholder:font-normal"
                />
                <button onClick={generateAiCoupon}
                  title="AI Generate Coupon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 transition-colors"
                >
                  <Sparkles className="h-4 w-4" />
                </button>
              </div>
              <p className="text-xs text-slate-500 mt-2">Customers will enter this code at checkout.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Coupon Category</label>
              <div className="relative">
                <select className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all appearance-none text-sm text-slate-700 dark:text-slate-300 font-medium">
                  <option value="">Select Category</option>
                  {couponTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Discount Type</label>
                <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                  <button 
                    onClick={() => setDiscountType('Percentage')}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-md transition-all ${
                      discountType === 'Percentage' ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <Percent className="h-4 w-4" /> Percentage
                  </button>
                  <button 
                    onClick={() => setDiscountType('Fixed')}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-md transition-all ${
                      discountType === 'Fixed' ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <Banknote className="h-4 w-4" /> Fixed Amount
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Discount Value {discountType === 'Percentage' ? '(%)' : '(₹)'}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-slate-500 sm:text-sm font-medium">{discountType === 'Percentage' ? '%' : '₹'}</span>
                  </div>
                  <input type="number" placeholder={discountType ==="Percentage" ?"50" :"500"}
                    className="w-full pl-8 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all font-medium text-slate-900 dark:text-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Applicability */}
        <div className="bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-2xl">
          <h2 className="text-lg text-slate-900 dark:text-white font-semibold mb-6 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-indigo-500" />
            Applicability
          </h2>
          
          <div className="flex flex-wrap gap-4 mb-6">
            {["All Products", "Specific Category", "Specific Product"].map(option => (
              <label key={option} className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border cursor-pointer transition-all ${
                applicableFor === option 
                  ? 'bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-400 font-medium' 
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}>
                <input type="radio" name="applicableFor" value={option} checked={applicableFor === option} onChange={(e) => setApplicableFor(e.target.value)} className="sr-only" />
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${applicableFor === option ? 'border-indigo-600 dark:border-indigo-400' : 'border-slate-300 dark:border-slate-600'}`}>
                  {applicableFor === option && <div className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>}
                </div>
                <span className="text-sm">{option}</span>
              </label>
            ))}
          </div>

          {applicableFor ==="Specific Category" && (
            <div className="animate-fade-in grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Select Category</label>
                <div className="relative">
                  <select className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm font-medium text-slate-700 dark:text-slate-300 appearance-none">
                    <option>Select Category...</option>
                    <option>Perfume</option>
                    <option>Bottle</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Select Sub Category <span className="text-slate-400 font-normal">(Optional)</span></label>
                <div className="relative">
                  <select className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm font-medium text-slate-700 dark:text-slate-300 appearance-none">
                    <option>Select Sub Category...</option>
                    <option>Men's Perfume</option>
                    <option>Women's Perfume</option>
                    <option>Steel Bottles</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>
            </div>
          )}

          {applicableFor ==="Specific Product" && (
            <div className="animate-fade-in">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Select Product</label>
              <div className="relative">
                <select className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm font-medium text-slate-700 dark:text-slate-300 appearance-none">
                  <option>Select Product...</option>
                  <option>Premium Wireless Headphones</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Column (1/3 width) */}
      <div className="space-y-8">
        
        {/* Usage Settings */}
        <div className="bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 p-6 rounded-2xl">
          <h2 className="text-base font-semibold text-slate-900 dark:text-white mb-5 uppercase tracking-wider text-xs">Usage Limits</h2>
          
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Total Usage Limit</label>
              <input type="number" placeholder="e.g. 100" className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm" />
              <p className="text-xs text-slate-500 mt-1.5">Max times this coupon can be used.</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Per Customer Limit</label>
              <input type="number" placeholder="e.g. 1" className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm" />
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Minimum Cart Value (₹)</label>
              <input type="number" placeholder="1000" className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm" />
            </div>

            {discountType === 'Percentage' && (
              <div className="animate-fade-in">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Maximum Discount (₹)</label>
                <input type="number" placeholder="500" className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm" />
              </div>
            )}
          </div>
        </div>

        {/* Validity */}
        <div className="bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 p-6 rounded-2xl">
          <h2 className="text-base font-semibold text-slate-900 dark:text-white mb-5 uppercase tracking-wider text-xs">Schedule & Status</h2>
          
          <div className="space-y-5 mb-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Start Date</label>
              <input type="date" className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm font-medium text-slate-600 dark:text-slate-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Expiry Date</label>
              <input type="date" className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm font-medium text-slate-600 dark:text-slate-300" />
            </div>
          </div>

          <div className="pt-5 border-t border-slate-100 dark:border-slate-800">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Coupon Status</label>
            <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
              <button onClick={() => setStatus("Active")}
                className={`flex-1 py-2 text-sm font-medium transition-all flex items-center justify-center gap-2 rounded-md ${
                  status === 'Active' ? 'bg-white dark:bg-slate-700 text-green-600 shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${status === 'Active' ? 'bg-green-500' : 'bg-slate-400'}`}></div>
                Active
              </button>
              <button onClick={() => setStatus("Inactive")}
                className={`flex-1 py-2 text-sm font-medium transition-all flex items-center justify-center gap-2 rounded-md ${
                  status === 'Inactive' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${status === 'Inactive' ? 'bg-slate-500' : 'bg-slate-400'}`}></div>
                Inactive
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
