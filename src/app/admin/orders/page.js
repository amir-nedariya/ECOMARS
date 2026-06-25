"use client";

import { useState } from "react";
import { PackageOpen, Search, Filter, Eye, Download, ChevronLeft, ChevronRight, Edit2, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function OrderManagementPage() {
  const router = useRouter();
  const [orders, setOrders] = useState([
    { id: "#1001", customer: "Amir", product: "Premium Water Bottle", amount: "₹500", status: "Pending", payment: "UPI" },
    { id: "#1002", customer: "Riya Sen", product: "Designer Black Perfume", amount: "₹3,199", status: "Packed", payment: "COD" },
    { id: "#1003", customer: "John Doe", product: "Storage Plastic Box", amount: "₹450", status: "Shipped", payment: "UPI" },
    { id: "#1004", customer: "Neha Sharma", product: "Wireless Headphones", amount: "₹12,999", status: "Delivered", payment: "UPI" },
    { id: "#1005", customer: "Rahul Verma", product: "Sports Water Bottle", amount: "₹699", status: "Pending", payment: "COD" },
  ]);

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(order => order.id === orderId ? { ...order, status: newStatus } : order));
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Pending': return 'bg-orange-50 text-orange-500 border-orange-500/20';
      case 'Packed': return 'bg-blue-50 text-blue-500 border-blue-500/20';
      case 'Shipped': return 'bg-purple-50 text-purple-500 border-purple-500/20';
      case 'Delivered': return 'bg-green-50 text-[#00c896] border-[#00c896]/20';
      default: return 'bg-slate-50 text-slate-500 border-slate-200';
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl text-slate-900 dark:text-white flex items-center gap-3">
            📦 Order Management
          </h1>
          <p className="text-sm text-slate-500 mt-1">Track, update and fulfill customer orders.</p>
        </div>
        <button className="flex items-center gap-2 bg-[#1F2336] hover:bg-slate-800 text-white px-6 py-2.5 transition-all rounded-md">
          <Download className="h-4 w-4" />
          Export CSV
        </button>
      </div>

      {/* Toolbar */}
      <div className="bg-white dark:bg-slate-900 p-4 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-4 justify-between items-center rounded-lg">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input type="text" placeholder="Search by Order ID or Customer..."
            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-primary text-sm transition-all rounded-md"
          />
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <select className="px-4 py-2 border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 focus:border-primary outline-none rounded-md">
            <option value="">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="Packed">Packed</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors w-full sm:w-auto justify-center rounded-md">
            <Filter className="h-4 w-4" />
            Filter
          </button>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1F2336] text-white text-xs font-semibold tracking-wide">
                <th className="p-4 pl-6 whitespace-nowrap">Order ID</th>
                <th className="p-4 whitespace-nowrap">Customer</th>
                <th className="p-4 whitespace-nowrap">Product</th>
                <th className="p-4 whitespace-nowrap">Amount</th>
                <th className="p-4 whitespace-nowrap text-center">Payment</th>
                <th className="p-4 text-center whitespace-nowrap">Status</th>
                <th className="p-4 text-center whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {orders.map((order) => (
                <tr 
                  key={order.id} 
                  onClick={() => router.push(`/admin/orders/${order.id.replace('#', '')}`)}
                  className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors cursor-pointer"
                >
                  <td className="p-4 pl-6 text-slate-900 dark:text-white font-medium whitespace-nowrap">
                    {order.id}
                  </td>
                  <td className="p-4 text-slate-700 dark:text-slate-300 font-medium whitespace-nowrap">
                    {order.customer}
                  </td>
                  <td className="p-4 text-slate-500 max-w-[250px] truncate">
                    {order.product}
                  </td>
                  <td className="p-4 text-[#00c896] font-bold whitespace-nowrap">
                    {order.amount}
                  </td>
                  <td className="p-4 text-center whitespace-nowrap">
                    <span className={`px-2.5 py-1 text-xs font-bold rounded-md border tracking-wider ${
                      order.payment === 'UPI' 
                        ? 'bg-indigo-50 text-indigo-600 border-indigo-200 dark:bg-indigo-500/10 dark:border-indigo-500/20' 
                        : 'bg-orange-50 text-orange-600 border-orange-200 dark:bg-orange-500/10 dark:border-orange-500/20'
                    }`}>
                      {order.payment}
                    </span>
                  </td>
                  <td className="p-4 text-center" onClick={(e) => e.stopPropagation()}>
                    <div className="relative inline-block">
                      <select value={order.status}
                        onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                        className={`appearance-none px-4 py-1 pr-8 text-xs font-semibold rounded-full border cursor-pointer outline-none transition-all ${getStatusColor(order.status)}`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Packed">Packed</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                      </select>
                      <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                        <svg className={`h-3 w-3 ${getStatusColor(order.status).split(' ')[1]}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-3">
                      <button className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors" title="View Details">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button onClick={(e) => { e.stopPropagation(); /* delete logic */ }} className="text-red-500 hover:text-red-700 transition-colors" title="Delete">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Section */}
        {orders.length > 0 ? (
          <div className="flex items-center justify-end px-6 py-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-4 text-sm text-slate-500 font-medium">
              <span>1 to {orders.length} of {orders.length}</span>
              <div className="flex items-center gap-2">
                <button className="p-1.5 border border-slate-200 dark:border-slate-700 rounded text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50" disabled>
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <span className="text-slate-900 dark:text-white font-semibold">Page 1 of 1</span>
                <button className="p-1.5 border border-slate-200 dark:border-slate-700 rounded text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50" disabled>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-16 text-center border-t border-slate-200 dark:border-slate-800">
            <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 flex items-center justify-center mx-auto mb-4 rounded-full">
              <PackageOpen className="h-8 w-8 text-slate-400" />
            </div>
            <h3 className="text-lg text-slate-900 dark:text-white mb-1 font-medium">No orders found</h3>
            <p className="text-slate-500">You don't have any orders to process yet.</p>
          </div>
        )}
      </div>

    </div>
  );
}
