"use client";

import { useState } from"react";
import { Plus, Edit2, Trash2, FolderTree, Tag, Search } from"lucide-react";

export default function SubCategoryManagement() {
 const [data, setData] = useState([
 {
 id: 1,
 mainCategory:"Perfume",
 subCategories: [
 { id: 101, name:"Men Perfume", status:"Active" },
 { id: 102, name:"Women Perfume", status:"Active" },
 { id: 103, name:"Unisex Perfume", status:"Active" },
 ]
 },
 {
 id: 2,
 mainCategory:"Bottle",
 subCategories: [
 { id: 201, name:"Water Bottle", status:"Active" },
 { id: 202, name:"Spray Bottle", status:"Active" },
 { id: 203, name:"Glass Bottle", status:"Inactive" },
 ]
 },
 {
 id: 3,
 mainCategory:"Plastic Items",
 subCategories: [
 { id: 301, name:"Storage Box", status:"Active" },
 { id: 302, name:"Lunch Box", status:"Active" },
 ]
 }
 ]);

 const deleteSubCategory = (mainId, subId) => {
 if (confirm("Are you sure you want to delete this sub-category?")) {
 setData(prevData => prevData.map(group => {
 if (group.id === mainId) {
 return {
 ...group,
 subCategories: group.subCategories.filter(sub => sub.id !== subId)
 };
 }
 return group;
 }));
 }
 };

 return (
 <div className="space-y-8 animate-fade-in">
 {/* Header Section */}
 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
 <div>
 <h1 className="text-2xl text-slate-900 dark:text-white flex items-center gap-3">
 <FolderTree className="h-7 w-7 text-primary" />
 Sub Category Management
 </h1>
 <p className="text-sm text-slate-500 mt-1">Organize your products deeply with sub-categories.</p>
 </div>
 <button className="bg-primary hover:bg-indigo-500 text-white px-6 py-3 shadow-lg shadow-primary/25 hover:-translate-y-1 transition-all active:scale-95 flex items-center gap-2">
 <Plus className="h-5 w-5" />
 Add Sub Category
 </button>
 </div>

 {/* Toolbar */}
 <div className="bg-white dark:bg-slate-900 p-4 shadow-sm border border-slate-100 dark:border-slate-800">
 <div className="relative w-full sm:w-96">
 <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
 <input type="text" placeholder="Search sub-categories..."
 className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-all"
 />
 </div>
 </div>

 {/* Main Category Groups */}
 <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
 {data.map((group) => (
 <div key={group.id} className="bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col">
 {/* Main Category Header */}
 <div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 flex justify-between items-center">
 <div>
 <span className="text-xs uppercase tracking-wider text-slate-500 mb-1 block">Main Category</span>
 <h2 className="text-xl text-slate-900 dark:text-white flex items-center gap-2">
 <Tag className="h-5 w-5 text-primary" />
 {group.mainCategory}
 </h2>
 </div>
 <span className="bg-primary/10 text-primary px-3 py-1 text-xs">
 {group.subCategories.length} Items
 </span>
 </div>

 {/* Sub Categories List */}
 <div className="p-6 flex-1">
 <h3 className="text-sm text-slate-500 mb-4 uppercase tracking-wider">Sub Categories</h3>
 {group.subCategories.length === 0 ? (
 <div className="text-center py-6 text-slate-400 text-sm font-medium">
 No sub-categories added yet.
 </div>
 ) : (
 <div className="space-y-3">
 {group.subCategories.map((sub) => (
 <div key={sub.id} className="flex items-center justify-between p-4 border border-slate-100 dark:border-slate-800 hover:border-primary/30 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-all group/item">
 <div className="flex items-center gap-4">
 <div className="w-2 h-2 bg-primary"></div>
 <span className="text-slate-700 dark:text-slate-200">{sub.name}</span>
 <span className={`px-2 py-0.5 text-[10px] uppercase tracking-wider ${
 sub.status === 'Active' ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
 }`}>
 {sub.status}
 </span>
 </div>
 {/* Actions */}
 <div className="flex items-center gap-2 opacity-0 group-hover/item:opacity-100 transition-opacity">
 <button className="p-1.5 text-slate-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-colors" title="Edit">
 <Edit2 className="h-4 w-4" />
 </button>
 <button onClick={() => deleteSubCategory(group.id, sub.id)}
 className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors" title="Delete"
 >
 <Trash2 className="h-4 w-4" />
 </button>
 </div>
 </div>
 ))}
 </div>
 )}
 </div>

 {/* Quick Add Footer */}
 <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
 <button className="w-full py-2.5 border-2 border-dashed border-slate-300 dark:border-slate-700 text-sm text-slate-500 hover:text-primary hover:border-primary hover:bg-primary/5 transition-all flex items-center justify-center gap-2">
 <Plus className="h-4 w-4" />
 Quick Add to {group.mainCategory}
 </button>
 </div>

 </div>
 ))}
 </div>

 </div>
 );
}
