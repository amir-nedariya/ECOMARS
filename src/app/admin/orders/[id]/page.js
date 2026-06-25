"use client";

import { ArrowLeft, Package, Truck, User, MapPin, CreditCard, Download, Printer } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function OrderDetailsPage() {
  const params = useParams();
  const orderId = params.id;

  // Mock order data based on ID
  const order = {
    id: `#${orderId}`,
    date: "25 Jun 2026, 14:30 PM",
    status: "Packed",
    paymentMethod: "UPI",
    customer: {
      name: "Amir",
      email: "amir@example.com",
      phone: "+91 98765 43210",
    },
    shippingAddress: {
      street: "123 Tech Park, Phase 1",
      city: "Mumbai",
      state: "Maharashtra",
      zip: "400001",
      country: "India",
    },
    items: [
      { id: 1, name: "Premium Water Bottle", price: 500, quantity: 1, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=100&h=100" },
      { id: 2, name: "Designer Black Perfume", price: 3199, quantity: 1, image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=100&h=100" },
    ],
    subtotal: 3699,
    shipping: 100,
    tax: 180,
    total: 3979,
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Pending': return 'bg-orange-50 text-orange-500 border-orange-500/20';
      case 'Packed': return 'bg-blue-50 text-blue-500 border-blue-500/20';
      case 'Shipped': return 'bg-purple-50 text-purple-500 border-purple-500/20';
      case 'Delivered': return 'bg-green-50 text-[#00c896] border-[#00c896]/20';
      default: return 'bg-slate-50 text-slate-500 border-slate-200';
    }
  };

  return (
    <div className="space-y-8 animate-fade-in max-w-6xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <Link href="/admin/orders" className="text-slate-400 hover:text-indigo-600 transition-colors p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-2xl text-slate-900 dark:text-white font-bold flex items-center gap-3">
              Order {order.id}
              <span className={`px-2.5 py-1 text-xs font-bold rounded-md border tracking-wider uppercase ${getStatusBadge(order.status)}`}>
                {order.status}
              </span>
            </h1>
          </div>
          <p className="text-sm text-slate-500 ml-10">Placed on {order.date}</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none px-6 py-2.5 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all rounded-md font-medium flex items-center justify-center gap-2">
            <Printer className="h-4 w-4" />
            Print
          </button>
          <Link href={`/admin/orders/${order.id.replace('#', '')}/invoice`} className="flex-1 sm:flex-none bg-[#1F2336] hover:bg-slate-800 text-white px-6 py-2.5 shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 rounded-md font-medium">
            <Download className="h-4 w-4" />
            Invoice
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Left Column - Order Items & Summary */}
        <div className="xl:col-span-2 space-y-8">
          
          {/* Order Items */}
          <div className="bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 p-8 rounded-xl">
            <h2 className="text-lg text-slate-900 dark:text-white font-semibold mb-6 flex items-center gap-2">
              <Package className="h-5 w-5 text-indigo-500" />
              Order Items
            </h2>
            
            <div className="space-y-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 border border-slate-100 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-md overflow-hidden bg-slate-100 relative border border-slate-200 dark:border-slate-700">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 dark:text-white font-medium">{item.name}</h4>
                      <p className="text-sm text-slate-500 mt-0.5">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[#00c896] font-bold">₹{item.price * item.quantity}</p>
                    <p className="text-xs text-slate-400 mt-1">₹{item.price} each</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Summary */}
          <div className="bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 p-8 rounded-xl">
            <h2 className="text-lg text-slate-900 dark:text-white font-semibold mb-6 flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-indigo-500" />
              Payment Summary
            </h2>
            
            <div className="space-y-3 max-w-sm ml-auto">
              <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400">
                <span>Subtotal</span>
                <span className="font-medium text-slate-900 dark:text-white">₹{order.subtotal}</span>
              </div>
              <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400">
                <span>Shipping</span>
                <span className="font-medium text-slate-900 dark:text-white">₹{order.shipping}</span>
              </div>
              <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400">
                <span>Tax</span>
                <span className="font-medium text-slate-900 dark:text-white">₹{order.tax}</span>
              </div>
              <div className="border-t border-slate-100 dark:border-slate-800 pt-3 mt-3 flex justify-between">
                <span className="font-semibold text-slate-900 dark:text-white">Total</span>
                <span className="font-bold text-xl text-[#00c896]">₹{order.total}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column - Customer Info & Actions */}
        <div className="space-y-8">
          
          {/* Action: Update Status */}
          <div className="bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 p-6 rounded-xl">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 uppercase tracking-wider">Update Status</h3>
            <div className="relative">
              <select defaultValue={order.status} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all appearance-none text-sm text-slate-700 dark:text-slate-300 font-medium">
                <option value="Pending">Pending</option>
                <option value="Packed">Packed</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
            <button className="w-full mt-4 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 dark:bg-indigo-500/10 dark:text-indigo-400 dark:hover:bg-indigo-500/20 py-2.5 rounded-md font-medium text-sm transition-colors">
              Save Status
            </button>
          </div>

          {/* Customer Details */}
          <div className="bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 p-6 rounded-xl">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider flex items-center gap-2">
              <User className="h-4 w-4 text-slate-400" /> Customer Details
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-slate-500 mb-1">Name</p>
                <p className="text-sm font-medium text-slate-900 dark:text-white">{order.customer.name}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Email</p>
                <p className="text-sm font-medium text-slate-900 dark:text-white">{order.customer.email}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Phone</p>
                <p className="text-sm font-medium text-slate-900 dark:text-white">{order.customer.phone}</p>
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 p-6 rounded-xl">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider flex items-center gap-2">
              <MapPin className="h-4 w-4 text-slate-400" /> Shipping Address
            </h3>
            <div className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
              <p className="font-medium text-slate-900 dark:text-white">{order.customer.name}</p>
              <p>{order.shippingAddress.street}</p>
              <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}</p>
              <p>{order.shippingAddress.country}</p>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 p-6 rounded-xl">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider flex items-center gap-2">
              <CreditCard className="h-4 w-4 text-slate-400" /> Payment Method
            </h3>
            <div className="flex items-center gap-3">
              <span className={`px-2.5 py-1 text-xs font-bold rounded-md border tracking-wider ${
                order.paymentMethod === 'UPI' 
                  ? 'bg-indigo-50 text-indigo-600 border-indigo-200 dark:bg-indigo-500/10 dark:border-indigo-500/20' 
                  : 'bg-orange-50 text-orange-600 border-orange-200 dark:bg-orange-500/10 dark:border-orange-500/20'
              }`}>
                {order.paymentMethod}
              </span>
              <span className="text-sm text-slate-500">
                {order.paymentMethod === 'UPI' ? 'Paid via UPI' : 'Cash on Delivery'}
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
