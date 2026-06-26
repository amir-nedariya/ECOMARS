"use client";

import { useState } from "react";
import { Users as UsersIcon, Search, Filter, ShieldAlert, ShieldCheck, Phone, ChevronLeft, ChevronRight, Users, UserCheck, UserX, ShoppingCart } from "lucide-react";

export default function UserManagementPage() {
  const [users, setUsers] = useState([
    { id: 1, name: "Amir", phone: "+91 9876543210", orders: 5, status: "Active", joinDate: "12 May 2023" },
    { id: 2, name: "Rahul Sharma", phone: "+91 8765432109", orders: 12, status: "Active", joinDate: "03 Jun 2023" },
    { id: 3, name: "Priya Patel", phone: "+91 7654321098", orders: 3, status: "Blocked", joinDate: "15 Aug 2023" },
    { id: 4, name: "Amit Kumar", phone: "+91 6543210987", orders: 0, status: "Active", joinDate: "22 Nov 2023" },
    { id: 5, name: "Neha Singh", phone: "+91 5432109876", orders: 8, status: "Active", joinDate: "05 Jan 2024" },
  ]);

  const toggleUserStatus = (userId) => {
    setUsers(users.map(user => {
      if (user.id === userId) {
        return {
          ...user,
          status: user.status === "Active" ? "Blocked" : "Active"
        };
      }
      return user;
    }));
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl text-slate-900 dark:text-white flex items-center gap-3">
            👥 User Management
          </h1>
          <p className="text-sm text-slate-500 mt-1">Manage customers, view order history, and handle account statuses.</p>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Total Users", value: users.length.toString(), icon: Users, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-500/10" },
          { title: "Active Users", value: users.filter(u => u.status === 'Active').length.toString(), icon: UserCheck, color: "text-[#00c896]", bg: "bg-[#00c896]/10" },
          { title: "Blocked Users", value: users.filter(u => u.status === 'Blocked').length.toString(), icon: UserX, color: "text-red-500", bg: "bg-red-50 dark:bg-red-500/10" },
          { title: "Total Orders", value: users.reduce((acc, curr) => acc + curr.orders, 0).toString(), icon: ShoppingCart, color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-500/10" }
        ].map((kpi, index) => (
          <div key={index} className="bg-white dark:bg-slate-900 p-5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
            <div className={`w-12 h-12 ${kpi.bg} ${kpi.color} rounded-full flex items-center justify-center shrink-0`}>
              <kpi.icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium mb-1">{kpi.title}</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{kpi.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Toolbar */}
      <div className="bg-white dark:bg-slate-900 p-4 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-4 justify-between items-center rounded-lg">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input type="text" placeholder="Search by name or phone..."
            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-primary text-sm transition-all rounded-md"
          />
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <select className="px-4 py-2 border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 focus:border-primary outline-none rounded-md">
            <option value="">All Users</option>
            <option value="Active">Active</option>
            <option value="Blocked">Blocked</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors w-full sm:w-auto justify-center rounded-md">
            <Filter className="h-4 w-4" />
            Filter
          </button>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1F2336] text-white text-xs font-semibold tracking-wide">
                <th className="p-4 pl-6 whitespace-nowrap">Name</th>
                <th className="p-4 whitespace-nowrap">Phone Number</th>
                <th className="p-4 text-center whitespace-nowrap">Orders</th>
                <th className="p-4 whitespace-nowrap">Status</th>
                <th className="p-4 text-right pr-6 whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {users.map((user) => (
                <tr key={user.id} className={`border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors group ${user.status === 'Blocked' ? 'opacity-75 bg-slate-50/50 dark:bg-slate-900/50' : ''}`}>
                  <td className="p-4 pl-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 flex items-center justify-center text-white rounded-md font-medium ${user.status === 'Blocked' ? 'bg-slate-400' : 'bg-indigo-500'}`}>
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-slate-900 dark:text-white font-medium">{user.name}</div>
                        <div className="text-xs text-slate-500">Joined {user.joinDate}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 font-medium">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-slate-400" />
                      {user.phone}
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 px-3 py-1 font-semibold rounded-md">
                      {user.orders}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full flex items-center gap-1.5 w-max border ${
                      user.status === 'Active' ? 'bg-green-50 text-[#00c896] border-[#00c896]/20' : 'bg-red-50 text-red-500 border-red-500/20'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-[#00c896]' : 'bg-red-500'}`}></div>
                      {user.status}
                    </span>
                  </td>
                  <td className="p-4 text-right pr-6">
                    <button onClick={() => toggleUserStatus(user.id)}
                      className={`inline-flex items-center justify-center gap-2 px-4 py-1.5 text-xs font-semibold rounded-md transition-all border ${
                        user.status === 'Active'
                          ? 'text-red-500 bg-red-50 hover:bg-red-100 dark:bg-red-500/10 dark:hover:bg-red-500/20 border-red-200 dark:border-red-500/20'
                          : 'text-[#00c896] bg-green-50 hover:bg-green-100 dark:bg-green-500/10 dark:hover:bg-green-500/20 border-green-200 dark:border-green-500/20'
                      }`}
                    >
                      {user.status === 'Active' ? (
                        <>
                          <ShieldAlert className="h-3.5 w-3.5" />
                          Block User
                        </>
                      ) : (
                        <>
                          <ShieldCheck className="h-3.5 w-3.5" />
                          Unblock User
                        </>
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Section */}
        {users.length > 0 ? (
          <div className="flex items-center justify-end px-6 py-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-4 text-sm text-slate-500 font-medium">
              <span>1 to {users.length} of {users.length}</span>
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
              <UsersIcon className="h-8 w-8 text-slate-400" />
            </div>
            <h3 className="text-lg text-slate-900 dark:text-white mb-1 font-medium">No users found</h3>
            <p className="text-slate-500">You don't have any registered users yet.</p>
          </div>
        )}
      </div>

    </div>
  );
}
