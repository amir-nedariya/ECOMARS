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
 <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
 {/* Header */}
 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
 <div>
 <div className="flex items-center gap-3 mb-1">
 <Link href="/admin/coupons" className="text-slate-400 hover:text-primary transition-colors">
 <ArrowLeft className="h-5 w-5" />
 </Link>
 <h1 className="text-2xl text-slate-900 dark:text-white flex items-center gap-2">
 <Ticket className="h-6 w-6 text-primary" />
 Create Coupon
 </h1>
 </div>
 </div>
 <button className="w-full sm:w-auto bg-primary hover:bg-indigo-500 text-white px-8 py-2.5 shadow-lg shadow-primary/25 hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-2">
 <Save className="h-4 w-4" />
 Save Coupon
 </button>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 {/* Left Column */}
 <div className="space-y-8">
 {/* Basic Info */}
 <div className="bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 p-8">
 <h2 className="text-lg text-slate-900 dark:text-white mb-6">Coupon Details</h2>
 <div className="space-y-6">
 <div>
 <label className="block text-sm text-slate-700 dark:text-slate-300 mb-2">Coupon Code</label>
 <div className="relative">
 <input type="text" value={couponCode}
 onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
 placeholder="e.g. WELCOME50"
 className="w-full pl-4 pr-12 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary uppercase transition-all"
 />
 <button onClick={generateAiCoupon}
 title="AI Generate Coupon"
 className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
 >
 <Sparkles className="h-5 w-5" />
 </button>
 </div>
 </div>

 <div>
 <label className="block text-sm text-slate-700 dark:text-slate-300 mb-2">Coupon Type</label>
 <div className="relative">
 <select className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none text-sm text-slate-700 dark:text-slate-300">
 <option value="">Select Type</option>
 {couponTypes.map(type => (
 <option key={type} value={type}>{type}</option>
 ))}
 </select>
 <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
 <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
 </div>
 </div>
 </div>

 <div>
 <label className="block text-sm text-slate-700 dark:text-slate-300 mb-2">Discount Type</label>
 <div className="flex gap-4">
 <label className={`flex-1 cursor-pointer border-2 p-3 transition-all flex items-center gap-3 ${discountType === 'Percentage' ? 'border-primary bg-primary/5' : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'}`}>
 <input type="radio" name="discountType" value="Percentage" checked={discountType === 'Percentage'} onChange={(e) => setDiscountType(e.target.value)} className="sr-only" />
 <div className={`w-8 h-8 flex items-center justify-center ${discountType === 'Percentage' ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
 <Percent className="h-4 w-4" />
 </div>
 <span className="text-sm text-slate-900 dark:text-white">Percentage %</span>
 </label>
 <label className={`flex-1 cursor-pointer border-2 p-3 transition-all flex items-center gap-3 ${discountType === 'Fixed' ? 'border-primary bg-primary/5' : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'}`}>
 <input type="radio" name="discountType" value="Fixed" checked={discountType === 'Fixed'} onChange={(e) => setDiscountType(e.target.value)} className="sr-only" />
 <div className={`w-8 h-8 flex items-center justify-center ${discountType === 'Fixed' ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
 <Banknote className="h-4 w-4" />
 </div>
 <span className="text-sm text-slate-900 dark:text-white">Fixed Amount ₹</span>
 </label>
 </div>
 </div>

 <div>
 <label className="block text-sm text-slate-700 dark:text-slate-300 mb-2">Discount Value</label>
 <input type="number" placeholder={discountType ==="Percentage" ?"50" :"500"}
 className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-lg"
 />
 </div>
 </div>
 </div>

 {/* Applicability */}
 <div className="bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 p-8">
 <h2 className="text-lg text-slate-900 dark:text-white mb-6">Applicable For</h2>
 <div className="space-y-4 mb-6">
 {["All Products","Specific Category","Specific Product"].map(option => (
 <label key={option} className="flex items-center gap-3 cursor-pointer">
 <input type="radio" name="applicableFor" value={option} checked={applicableFor === option} onChange={(e) => setApplicableFor(e.target.value)}
 className="w-4 h-4 text-primary focus:ring-primary border-gray-300" />
 <span className="text-sm text-slate-700 dark:text-slate-300">{option}</span>
 </label>
 ))}
 </div>

 {applicableFor ==="Specific Category" && (
 <div>
 <label className="block text-xs text-slate-500 mb-2 uppercase tracking-wider">Select Category</label>
 <select className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-primary transition-all text-sm text-slate-700 dark:text-slate-300">
 <option>Perfume</option>
 <option>Bottle</option>
 </select>
 </div>
 )}

 {applicableFor ==="Specific Product" && (
 <div>
 <label className="block text-xs text-slate-500 mb-2 uppercase tracking-wider">Select Product</label>
 <select className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-primary transition-all text-sm text-slate-700 dark:text-slate-300">
 <option>Select Product ▼</option>
 <option>Premium Wireless Headphones</option>
 </select>
 </div>
 )}
 </div>
 </div>

 {/* Right Column */}
 <div className="space-y-8">
 {/* Usage Settings */}
 <div className="bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 p-8">
 <h2 className="text-lg text-slate-900 dark:text-white mb-6">Usage Settings & Constraints</h2>
 <div className="space-y-6">
 <div className="grid grid-cols-2 gap-4">
 <div>
 <label className="block text-sm text-slate-700 dark:text-slate-300 mb-2">Total Coupon Usage</label>
 <input type="number" placeholder="50" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-primary transition-all" />
 </div>
 <div>
 <label className="block text-sm text-slate-700 dark:text-slate-300 mb-2">Per Customer Usage</label>
 <input type="number" placeholder="1" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-primary transition-all" />
 </div>
 </div>

 <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
 <div>
 <label className="block text-sm text-slate-700 dark:text-slate-300 mb-2">Min Cart Value (₹)</label>
 <input type="number" placeholder="1000" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-primary transition-all" />
 </div>
 <div>
 <label className="block text-sm text-slate-700 dark:text-slate-300 mb-2">Max Discount (₹)</label>
 <input type="number" placeholder="500" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-primary transition-all" />
 </div>
 </div>
 </div>
 </div>

 {/* Validity */}
 <div className="bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 p-8">
 <h2 className="text-lg text-slate-900 dark:text-white mb-6">Validity</h2>
 <div className="grid grid-cols-2 gap-4 mb-6">
 <div>
 <label className="block text-sm text-slate-700 dark:text-slate-300 mb-2">Start Date</label>
 <input type="date" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-primary transition-all text-sm font-medium text-slate-600 dark:text-slate-300" />
 </div>
 <div>
 <label className="block text-sm text-slate-700 dark:text-slate-300 mb-2">Expiry Date</label>
 <input type="date" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-primary transition-all text-sm font-medium text-slate-600 dark:text-slate-300" />
 </div>
 </div>

 <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
 <label className="block text-sm text-slate-700 dark:text-slate-300 mb-4">Status</label>
 <div className="flex gap-4">
 <button onClick={() => setStatus("Active")}
 className={`flex-1 py-2.5 text-sm transition-all flex items-center justify-center gap-2 ${status === 'Active' ? 'bg-green-100 text-green-700 border-2 border-green-500' : 'bg-slate-50 text-slate-500 border-2 border-slate-200'}`}
 >
 <div className={`w-2 h-2 ${status === 'Active' ? 'bg-green-500' : 'bg-slate-400'}`}></div>
 Active
 </button>
 <button onClick={() => setStatus("Inactive")}
 className={`flex-1 py-2.5 text-sm transition-all flex items-center justify-center gap-2 ${status === 'Inactive' ? 'bg-slate-200 text-slate-700 border-2 border-slate-500' : 'bg-slate-50 text-slate-500 border-2 border-slate-200'}`}
 >
 <div className={`w-2 h-2 ${status === 'Inactive' ? 'bg-slate-500' : 'bg-slate-400'}`}></div>
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
