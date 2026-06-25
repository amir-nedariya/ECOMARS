"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, Search, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function CategoryManagement() {
  const [categories, setCategories] = useState([
    { id: 1, name: "Perfume", status: "Active", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=100&h=100" },
    { id: 2, name: "Bottles", status: "Active", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=100&h=100" },
    { id: 3, name: "Plastic Items", status: "Active", image: "https://images.unsplash.com/photo-1584016221727-463d1a8e6ea4?auto=format&fit=crop&q=80&w=100&h=100" },
    { id: 4, name: "Fashion", status: "Inactive", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=100&h=100" },
  ]);

  const deleteCategory = (id) => {
    if (confirm("Are you sure you want to delete this category?")) {
      setCategories(categories.filter(cat => cat.id !== id));
    }
  };

  const getCategoryBadge = (name) => {
    switch(name) {
      case 'Perfume': return 'bg-purple-100 text-purple-600';
      case 'Bottles': return 'bg-green-100 text-green-600';
      case 'Plastic Items': return 'bg-orange-100 text-orange-600';
      case 'Fashion': return 'bg-pink-100 text-pink-600';
      default: return 'bg-blue-100 text-blue-600';
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl text-slate-900 dark:text-white flex items-center gap-3">
            📁 Category Management
          </h1>
          <p className="text-sm text-slate-500 mt-1">Manage your product categories and hierarchy.</p>
        </div>
        <button className="bg-[#1F2336] hover:bg-slate-800 text-white px-6 py-2.5 transition-all flex items-center gap-2 rounded-md">
          <Plus className="h-4 w-4" />
          Add Category
        </button>
      </div>

      {/* Toolbar */}
      <div className="bg-white dark:bg-slate-900 p-4 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-4 justify-between items-center rounded-lg">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input type="text" placeholder="Search categories..."
            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-primary text-sm transition-all rounded-md"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors w-full sm:w-auto justify-center rounded-md">
          <Filter className="h-4 w-4" />
          Filter
        </button>
      </div>

      {/* Table Section matching Product Management Look */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1F2336] text-white text-xs font-semibold tracking-wide">
                <th className="p-4 pl-6 whitespace-nowrap w-24">Image</th>
                <th className="p-4 whitespace-nowrap">Category Name</th>
                <th className="p-4 whitespace-nowrap text-center">Status</th>
                <th className="p-4 whitespace-nowrap text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {categories.map((category) => (
                <tr key={category.id} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors">
                  <td className="p-4 pl-6">
                    <div className="w-10 h-10 overflow-hidden bg-slate-100 relative rounded-md border border-slate-200 dark:border-slate-700">
                      <Image src={category.image} alt={category.name} fill className="object-cover" />
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${getCategoryBadge(category.name)}`}>
                      {category.name}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${
                      category.status === 'Active' ? 'bg-green-50 text-[#00c896] border border-[#00c896]/20' : 'bg-red-50 text-red-500 border border-red-500/20'
                    }`}>
                      {category.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-3">
                      <button className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors" title="Edit">
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button onClick={() => deleteCategory(category.id)} className="text-red-500 hover:text-red-700 transition-colors" title="Delete">
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
        {categories.length > 0 ? (
          <div className="flex items-center justify-end px-6 py-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-4 text-sm text-slate-500 font-medium">
              <span>1 to {categories.length} of {categories.length}</span>
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
          <div className="p-12 text-center border-t border-slate-200 dark:border-slate-800">
            <p className="text-slate-500 font-medium">No categories found.</p>
          </div>
        )}
      </div>

    </div>
  );
}
