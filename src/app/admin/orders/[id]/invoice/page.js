"use client";

import { ArrowLeft, Printer, Download, Mail } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function InvoicePage() {
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
      { id: 1, name: "Premium Water Bottle", price: 500, quantity: 1 },
      { id: 2, name: "Designer Black Perfume", price: 3199, quantity: 1 },
    ],
    subtotal: 3699,
    shipping: 100,
    tax: 180,
    total: 3979,
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="animate-fade-in max-w-4xl mx-auto pb-12">
      {/* Controls - Hidden when printing */}
      <div className="flex justify-between items-center mb-8 print:hidden bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <Link href={`/admin/orders/${orderId}`} className="text-slate-600 hover:text-indigo-600 dark:text-slate-400 flex items-center gap-2 font-medium transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Order
        </Link>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 transition-all rounded-md font-medium flex items-center gap-2">
            <Mail className="h-4 w-4" /> Email
          </button>
          <button onClick={handlePrint} className="bg-[#1F2336] hover:bg-slate-800 text-white px-6 py-2 shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 rounded-md font-medium">
            <Printer className="h-4 w-4" />
            Print Invoice
          </button>
        </div>
      </div>

      {/* Invoice Document */}
      <div className="bg-white p-10 sm:p-16 rounded-none sm:rounded-xl shadow-none sm:shadow-sm border-0 sm:border border-slate-200 text-slate-800 print:shadow-none print:border-0 print:p-0">
        
        {/* Header */}
        <div className="flex justify-between items-start border-b border-slate-200 pb-8 mb-8">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tighter mb-2">ECOMARS</h1>
            <p className="text-slate-500 text-sm">Your Premium Shopping Destination</p>
          </div>
          <div className="text-right">
            <h2 className="text-2xl font-bold text-slate-800 mb-1">INVOICE</h2>
            <p className="text-sm font-medium text-slate-500 mb-4">{order.id}</p>
            <div className="text-xs text-slate-500">
              <p>Date: <span className="font-medium text-slate-800">{order.date.split(',')[0]}</span></p>
              <p>Payment: <span className="font-medium text-slate-800">{order.paymentMethod}</span></p>
            </div>
          </div>
        </div>

        {/* Addresses */}
        <div className="grid grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Billed To</h3>
            <p className="font-bold text-slate-800 mb-1">{order.customer.name}</p>
            <p className="text-sm text-slate-600">{order.customer.email}</p>
            <p className="text-sm text-slate-600">{order.customer.phone}</p>
          </div>
          <div className="text-right">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Shipped To</h3>
            <p className="font-bold text-slate-800 mb-1">{order.customer.name}</p>
            <p className="text-sm text-slate-600">{order.shippingAddress.street}</p>
            <p className="text-sm text-slate-600">{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}</p>
            <p className="text-sm text-slate-600">{order.shippingAddress.country}</p>
          </div>
        </div>

        {/* Order Items Table */}
        <div className="mb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-y border-slate-200 text-slate-800 text-xs uppercase tracking-wider font-bold">
                <th className="py-4 pr-4">Description</th>
                <th className="py-4 px-4 text-center">Qty</th>
                <th className="py-4 px-4 text-right">Price</th>
                <th className="py-4 pl-4 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item, idx) => (
                <tr key={item.id} className={idx !== order.items.length - 1 ? "border-b border-slate-100" : ""}>
                  <td className="py-4 pr-4">
                    <p className="font-medium text-slate-800">{item.name}</p>
                  </td>
                  <td className="py-4 px-4 text-center text-slate-600">{item.quantity}</td>
                  <td className="py-4 px-4 text-right text-slate-600">₹{item.price}</td>
                  <td className="py-4 pl-4 text-right font-medium text-slate-800">₹{item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="flex justify-end border-t border-slate-200 pt-8">
          <div className="w-1/2 min-w-[250px]">
            <div className="flex justify-between py-2 text-sm text-slate-600">
              <span>Subtotal</span>
              <span className="font-medium text-slate-800">₹{order.subtotal}</span>
            </div>
            <div className="flex justify-between py-2 text-sm text-slate-600">
              <span>Shipping</span>
              <span className="font-medium text-slate-800">₹{order.shipping}</span>
            </div>
            <div className="flex justify-between py-2 text-sm text-slate-600">
              <span>Tax (18% GST)</span>
              <span className="font-medium text-slate-800">₹{order.tax}</span>
            </div>
            <div className="flex justify-between py-4 mt-2 border-t border-slate-200 text-lg font-bold text-slate-900">
              <span>Total</span>
              <span>₹{order.total}</span>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="border-t border-slate-200 mt-16 pt-8 text-center text-slate-500 text-xs">
          <p className="mb-1">Thank you for shopping with ECOMARS!</p>
          <p>If you have any questions regarding this invoice, please contact support@ecomars.com</p>
        </div>

      </div>
    </div>
  );
}
