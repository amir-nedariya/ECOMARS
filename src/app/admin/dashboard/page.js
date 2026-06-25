"use client";

import { Users, ShoppingBag, IndianRupee, Package, TrendingUp, ArrowUpRight, BarChart3 } from"lucide-react";

export default function AdminDashboard() {
 const stats = [
 { title:"Total Sales", value:"₹ 5,00,000", icon: <IndianRupee className="h-6 w-6" />, color:"bg-blue-500", trend:"+15%" },
 { title:"Orders", value:"1,200", icon: <ShoppingBag className="h-6 w-6" />, color:"bg-purple-500", trend:"+8%" },
 { title:"Users", value:"500", icon: <Users className="h-6 w-6" />, color:"bg-green-500", trend:"+12%" },
 { title:"Products", value:"300", icon: <Package className="h-6 w-6" />, color:"bg-orange-500", trend:"+4%" },
 ];

 const recentOrders = [
 { id:"#ORD-8901", customer:"Rahul Sharma", product:"Premium Wireless Headphones", amount:"₹12,999", status:"Delivered" },
 { id:"#ORD-8902", customer:"Priya Patel", product:"Designer Black Perfume", amount:"₹3,199", status:"Processing" },
 { id:"#ORD-8903", customer:"Amit Kumar", product:"Stainless Steel Water Bottle", amount:"₹899", status:"Shipped" },
 { id:"#ORD-8904", customer:"Neha Singh", product:"Clear Storage Box", amount:"₹450", status:"Pending" },
 { id:"#ORD-8905", customer:"Anjali Gupta", product:"Smart Fitness Watch", amount:"₹4,999", status:"Delivered" },
 ];

 const topProducts = [
 { id: 1, name:"Premium Blue Perfume", sales: 145, revenue:"₹3,62,355" },
 { id: 2, name:"Stainless Steel Bottle", sales: 120, revenue:"₹1,07,880" },
 { id: 3, name:"Sports Water Bottle", sales: 95, revenue:"₹66,405" },
 { id: 4, name:"Wireless Earbuds", sales: 80, revenue:"₹1,99,920" },
 ];

 // Dummy data for CSS Chart
 const chartData = [40, 70, 45, 90, 65, 85, 100, 60, 75, 50, 80, 95];
 const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

 return (
 <div className="space-y-8 animate-fade-in max-w-[1600px] mx-auto">
 {/* Header */}
 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
 <div>
 <h1 className="text-2xl text-slate-900 dark:text-white flex items-center gap-3">
 <BarChart3 className="h-7 w-7 text-primary" />
 Dashboard Overview
 </h1>
 <p className="text-sm text-slate-500 mt-1">Welcome back, here's what's happening with your store today.</p>
 </div>
 <div className="flex gap-3">
 <button className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2.5 transition-colors text-sm">
 Export PDF
 </button>
 <button className="bg-primary hover:bg-indigo-500 text-white px-6 py-2.5 shadow-lg shadow-primary/25 transition-all active:scale-95 text-sm">
 Download Report
 </button>
 </div>
 </div>

 {/* Stats Grid */}
 <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
 {stats.map((stat, index) => (
 <div key={index} className="bg-white dark:bg-slate-900 p-6 shadow-sm border border-slate-100 dark:border-slate-800 transition-all duration-300">
 <div className="flex justify-between items-start mb-4">
 <div className={`p-4 text-white ${stat.color} shadow-lg`}>
 {stat.icon}
 </div>
 <span className="flex items-center text-xs text-green-500 bg-green-500/10 px-2.5 py-1.5 border border-green-500/20">
 <ArrowUpRight className="h-3 w-3 mr-1" />
 {stat.trend}
 </span>
 </div>
 <div>
 <p className="text-sm text-slate-500 mb-1">{stat.title}</p>
 <h3 className="text-3xl text-slate-900 dark:text-white tracking-tight">{stat.value}</h3>
 </div>
 </div>
 ))}
 </div>

 {/* Sales Chart Section */}
 <div className="bg-white dark:bg-slate-900 p-8 shadow-sm border border-slate-100 dark:border-slate-800">
 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
 <div>
 <h2 className="text-lg text-slate-900 dark:text-white flex items-center gap-2">
 <TrendingUp className="h-5 w-5 text-primary" />
 Sales Chart
 </h2>
 <p className="text-sm text-slate-500 mt-1">Monthly revenue overview for the current year</p>
 </div>
 <select className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-sm text-slate-700 dark:text-slate-300 px-4 py-2.5 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all cursor-pointer">
 <option>This Year (2026)</option>
 <option>Last Year (2025)</option>
 </select>
 </div>
 {/* CSS Bar Chart */}
 <div className="h-72 flex items-end justify-between gap-1 sm:gap-3 pt-6 border-b border-slate-100 dark:border-slate-800 pb-2">
 {chartData.map((height, idx) => (
 <div key={idx} className="flex flex-col items-center flex-1 group h-full">
 <div className="w-full relative flex justify-center h-full items-end">
 <div className="w-full max-w-[40px] bg-primary/20 group-hover:bg-primary transition-all duration-500 relative overflow-hidden"
 style={{ height: `${height}%` }}
 >
 <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
 <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-slate-800 text-white text-xs py-1 px-2 transition-opacity pointer-events-none whitespace-nowrap z-10">
 ₹{height}k
 </span>
 </div>
 </div>
 <span className="text-xs text-slate-400 mt-4 uppercase tracking-wider">{months[idx]}</span>
 </div>
 ))}
 </div>
 </div>

 <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
 {/* Recent Orders Table */}
 <div className="bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden xl:col-span-2 flex flex-col">
 <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
 <div>
 <h2 className="text-lg text-slate-900 dark:text-white flex items-center gap-2">
 <ShoppingBag className="h-5 w-5 text-primary" />
 Recent Orders
 </h2>
 <p className="text-sm text-slate-500 mt-1">Latest customer purchases</p>
 </div>
 <button className="text-sm text-primary hover:text-indigo-500 transition-colors px-4 py-2 hover:bg-primary/5">
 View All
 </button>
 </div>
 <div className="overflow-x-auto flex-1">
 <table className="w-full text-left border-collapse">
 <thead>
 <tr className="bg-slate-50 dark:bg-slate-800/30 text-slate-500 text-xs uppercase tracking-wider">
 <th className="p-5 whitespace-nowrap">Order ID</th>
 <th className="p-5">Customer</th>
 <th className="p-5">Product</th>
 <th className="p-5 text-right">Amount</th>
 <th className="p-5 text-center">Status</th>
 </tr>
 </thead>
 <tbody className="text-sm">
 {recentOrders.map((order, idx) => (
 <tr key={idx} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors group">
 <td className="p-5 text-slate-900 dark:text-white whitespace-nowrap">{order.id}</td>
 <td className="p-5 text-slate-700 dark:text-slate-300 whitespace-nowrap">{order.customer}</td>
 <td className="p-5 text-slate-500 line-clamp-1">{order.product}</td>
 <td className="p-5 text-slate-900 dark:text-white text-right whitespace-nowrap">{order.amount}</td>
 <td className="p-5 flex justify-center">
 <span className={`px-3 py-1.5 text-[10px] uppercase tracking-wider w-24 text-center ${
 order.status === 'Delivered' ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800' :
 order.status === 'Processing' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-200 dark:border-blue-800' :
 order.status === 'Shipped' ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 border border-purple-200 dark:border-purple-800' :
 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 border border-orange-200 dark:border-orange-800'
 }`}>
 {order.status}
 </span>
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>

 {/* Top Products */}
 <div className="bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 p-8 xl:col-span-1 flex flex-col">
 <div className="mb-8">
 <h2 className="text-lg text-slate-900 dark:text-white flex items-center gap-2">
 <Package className="h-5 w-5 text-primary" />
 Top Products
 </h2>
 <p className="text-sm text-slate-500 mt-1">Best selling items this month</p>
 </div>
 <div className="space-y-6 flex-1">
 {topProducts.map((item, index) => (
 <div key={item.id} className="flex items-center gap-4 group p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all border border-transparent hover:border-slate-100 dark:hover:border-slate-800">
 <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
 #{index + 1}
 </div>
 <div className="flex-1 min-w-0">
 <h4 className="text-slate-900 dark:text-white truncate text-sm">
 {item.name}
 </h4>
 <p className="text-xs text-slate-500 mt-1">{item.sales} Sales</p>
 </div>
 <div className="text-primary text-sm bg-primary/5 px-3 py-1.5 border border-primary/10">
 {item.revenue}
 </div>
 </div>
 ))}
 </div>

 <button className="w-full mt-6 py-3 border border-slate-200 dark:border-slate-700 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
 View All Products
 </button>
 </div>

 </div>
 </div>
 );
}
