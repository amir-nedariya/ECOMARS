"use client";

import { useState } from "react";
import { Plus, Edit2, Search, Filter, Ticket, ChevronLeft, ChevronRight, Trash2 } from "lucide-react";
import Link from "next/link";

export default function CouponManagementPage() {
  const [coupons, setCoupons] = useState([
    { id: 1, code: "WELCOME50", discount: "50%", used: "50", limit: "50", status: "Expired" },
    { id: 2, code: "NEWUSER20", discount: "20%", used: "120", limit: "500", status: "Active" },
    { id: 3, code: "SAVE500", discount: "₹500", used: "30", limit: "100", status: "Active" },
    { id: 4, code: "FESTIVE30", discount: "30%", used: "0", limit: "200", status: "Active" },
  ]);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl text-slate-900 dark:text-white flex items-center gap-3">
            <Ticket className="h-7 w-7 text-primary" />
            Coupon Management
          </h1>
          <p className="text-sm text-slate-500 mt-1">Create, manage and track promotional discounts.</p>
        </div>
        <Link href="/admin/coupons/add" className="bg-[#1F2336] hover:bg-slate-800 text-white px-6 py-2.5 transition-all flex items-center gap-2 rounded-md">
          <Plus className="h-4 w-4" />
          Create Coupon
        </Link>
      </div>

      {/* Toolbar */}
      <div className="bg-white dark:bg-slate-900 p-4 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-4 justify-between items-center rounded-lg">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input type="text" placeholder="Search Coupon..."
            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-primary text-sm transition-all rounded-md"
          />
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <select className="px-4 py-2 border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 focus:border-primary outline-none rounded-md">
            <option value="">Status: All</option>
            <option value="Active">Active</option>
            <option value="Expired">Expired</option>
            <option value="Inactive">Inactive</option>
          </select>
          <select className="px-4 py-2 border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 focus:border-primary outline-none rounded-md">
            <option value="">Type: All</option>
            <option value="Percentage">Percentage</option>
            <option value="Fixed">Fixed</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors w-full sm:w-auto justify-center rounded-md">
            <Filter className="h-4 w-4" />
            Filter
          </button>
        </div>
      </div>

      {/* Coupons Table */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1F2336] text-white text-xs font-semibold tracking-wide">
                <th className="p-4 pl-6 whitespace-nowrap">Code</th>
                <th className="p-4 whitespace-nowrap">Discount</th>
                <th className="p-4 whitespace-nowrap text-center">Used</th>
                <th className="p-4 whitespace-nowrap text-center">Limit</th>
                <th className="p-4 whitespace-nowrap text-center">Status</th>
                <th className="p-4 text-center whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {coupons.map((coupon) => (
                <tr key={coupon.id} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors">
                  <td className="p-4 pl-6">
                    <span className="text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10 dark:text-indigo-400 px-3 py-1.5 border border-indigo-100 dark:border-indigo-500/20 tracking-widest uppercase rounded-md font-semibold">
                      {coupon.code}
                    </span>
                  </td>
                  <td className="p-4 text-[#00c896] font-bold text-lg">
                    {coupon.discount}
                  </td>
                  <td className="p-4 text-center text-slate-700 dark:text-slate-300 font-medium">
                    <span className={coupon.used === coupon.limit ? "text-red-500" : ""}>
                      {coupon.used}
                    </span>
                  </td>
                  <td className="p-4 text-center text-slate-500 font-medium">
                    {coupon.limit}
                  </td>
                  <td className="p-4 text-center">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap border inline-flex items-center gap-1.5 ${
                      coupon.status === 'Active' ? 'bg-green-50 text-[#00c896] border-[#00c896]/20' : 'bg-red-50 text-red-500 border-red-500/20'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${coupon.status === 'Active' ? 'bg-[#00c896]' : 'bg-red-500'}`}></div>
                      {coupon.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-3">
                      <Link href="/admin/coupons/add" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors" title={coupon.status === 'Expired' ? 'View' : 'Edit'}>
                        <Edit2 className="h-4 w-4" />
                      </Link>
                      <button className="text-red-500 hover:text-red-700 transition-colors" title="Delete">
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
        {coupons.length > 0 ? (
          <div className="flex items-center justify-end px-6 py-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-4 text-sm text-slate-500 font-medium">
              <span>1 to {coupons.length} of {coupons.length}</span>
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
              <Ticket className="h-8 w-8 text-slate-400" />
            </div>
            <h3 className="text-lg text-slate-900 dark:text-white mb-1 font-medium">No coupons found</h3>
            <p className="text-slate-500">You don't have any active discount codes.</p>
          </div>
        )}
      </div>

    </div>
  );
}
