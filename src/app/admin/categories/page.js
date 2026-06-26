"use client";

import React, { useState } from "react";
import { Plus, Edit2, Trash2, Search, Filter, ChevronLeft, ChevronRight, X, Upload, Layers } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CategoryManagement() {
  const [categories, setCategories] = useState([
    { id: 1, name: "Perfume", status: "Active", subCount: 5, image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=100&h=100" },
    { id: 2, name: "Bottles", status: "Active", subCount: 3, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=100&h=100" },
    { id: 3, name: "Plastic Items", status: "Active", subCount: 8, image: "https://images.unsplash.com/photo-1584016221727-463d1a8e6ea4?auto=format&fit=crop&q=80&w=100&h=100" },
    { id: 4, name: "Fashion", status: "Inactive", subCount: 12, image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=100&h=100" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [newCategory, setNewCategory] = useState({ name: '', status: 'Active', image: '', parentCategory: '' });

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);
  const [deleteConfirmText, setDeleteConfirmText] = useState("");
  const [deleteConfirmCode, setDeleteConfirmCode] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategory, setExpandedCategory] = useState(null);

  const filteredCategories = categories.filter(category => 
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteClick = (category) => {
    setCategoryToDelete(category);
    setDeleteConfirmText("");
    setDeleteConfirmCode(Math.floor(1000 + Math.random() * 9000).toString());
    setDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (categoryToDelete && deleteConfirmText === deleteConfirmCode) {
      setCategories(categories.filter(cat => cat.id !== categoryToDelete.id));
      setDeleteModalOpen(false);
      setTimeout(() => setCategoryToDelete(null), 200);
    }
  };

  const getCategoryBadge = (status) => {
    return status === 'Active' ? 'bg-[#00c896]/10 text-[#00c896]' : 'bg-red-500/10 text-red-500';
  };

  const toggleStatus = (id) => {
    setCategories(categories.map(cat => {
      if (cat.id === id) {
        return { ...cat, status: cat.status === 'Active' ? 'Inactive' : 'Active' };
      }
      return cat;
    }));
  };

  const openAddModal = () => {
    setEditingId(null);
    setNewCategory({ name: '', status: 'Active', image: '', parentCategory: '' });
    setIsModalOpen(true);
  };

  const handleEditClick = (category) => {
    setEditingId(category.id);
    setNewCategory({ name: category.name, status: category.status, image: category.image, parentCategory: category.parentCategory || '' });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setEditingId(null);
      setNewCategory({ name: '', status: 'Active', image: '', parentCategory: '' });
    }, 200);
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!newCategory.name) return;
    
    if (editingId) {
      setCategories(categories.map(cat => 
        cat.id === editingId 
          ? { ...cat, name: newCategory.name, status: newCategory.status, image: newCategory.image, parentCategory: newCategory.parentCategory }
          : cat
      ));
    } else {
      const id = categories.length > 0 ? Math.max(...categories.map(c => c.id)) + 1 : 1;
      setCategories([{
        id,
        name: newCategory.name,
        status: newCategory.status,
        parentCategory: newCategory.parentCategory,
        subCount: 0,
        image: newCategory.image || "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=100&h=100"
      }, ...categories]);
    }
    closeModal();
  };

  return (
    <div className="space-y-8 animate-fade-in relative">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl text-slate-800 dark:text-white font-bold flex items-center gap-3">
            <div className="p-2 bg-[#1F2336]/10 dark:bg-slate-800 text-[#1F2336] dark:text-white rounded-lg">
              <Layers className="h-6 w-6" />
            </div>
            Category Management
          </h1>
        </div>
        <button 
          onClick={openAddModal}
          className="bg-[#1F2336] hover:bg-slate-800 text-white px-6 py-2.5 transition-all flex items-center gap-2 rounded-md"
        >
          <Plus className="h-4 w-4" />
          Add Category
        </button>
      </div>

      {/* Toolbar */}
      <div className="bg-white dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-4 justify-between items-center rounded-xl shadow-sm">
        <div className="relative w-full sm:w-[450px]">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-[#1F2336]/10 focus:border-[#1F2336] text-sm transition-all placeholder:text-slate-400 text-slate-700 dark:text-slate-200"
          />
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all bg-white dark:bg-slate-900 shadow-sm w-full sm:w-auto justify-center group">
          <Filter className="h-4 w-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" />
          Filter
        </button>
      </div>

      {/* Table Section matching Product Management Look */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1F2336] text-white text-xs font-semibold tracking-wide">
                <th className="p-4 whitespace-nowrap w-1/5 text-center">Image</th>
                <th className="p-4 whitespace-nowrap w-1/5 text-center">Category Name</th>
                <th className="p-4 whitespace-nowrap w-1/5 text-center">Sub Categories</th>
                <th className="p-4 whitespace-nowrap w-1/5 text-center">Status</th>
                <th className="p-4 whitespace-nowrap w-1/5 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {filteredCategories.map((category) => (
                <React.Fragment key={category.id}>
                  <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors">
                  <td className="p-4">
                    <div className="w-10 h-10 overflow-hidden bg-slate-100 relative rounded-md border border-slate-200 dark:border-slate-700 mx-auto">
                      <Image src={category.image} alt={category.name} fill className="object-cover" />
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${getCategoryBadge(category.status)}`}>
                      {category.name}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <Link 
                      href={`/admin/subcategories/${category.id}`}
                      className="inline-flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-[#1F2336] hover:text-white dark:hover:bg-slate-700 px-3 py-1.5 rounded-md text-xs font-bold transition-colors shadow-sm"
                    >
                      {category.subCount || 0} Items <ChevronRight className="h-3 w-3 ml-1" />
                    </Link>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-center">
                      <button 
                        onClick={() => toggleStatus(category.id)}
                        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none ${
                          category.status === 'Active' ? 'bg-[#00c896]' : 'bg-red-500'
                        }`}
                      >
                        <span 
                          className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
                          style={{ transform: category.status === 'Active' ? 'translateX(18px)' : 'translateX(2px)' }}
                        />
                      </button>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-3">
                      <button 
                        onClick={() => handleEditClick(category)}
                        className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors" title="Edit"
                      >
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button onClick={() => handleDeleteClick(category)} className="text-red-500 hover:text-red-700 transition-colors" title="Delete">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Section */}
        {filteredCategories.length > 0 ? (
          <div className="flex items-center justify-end px-6 py-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-4 text-sm text-slate-500 font-medium">
              <span>1 to {filteredCategories.length} of {filteredCategories.length}</span>
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

      {/* Add/Edit Category Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-slate-900/50 animate-fade-in lg:pl-72">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl w-full max-w-md flex flex-col max-h-[85vh] overflow-hidden animate-slide-up">
            <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800 shrink-0">
              <h3 className="text-xl font-bold text-[#1F2336] dark:text-white">
                {editingId ? "Edit Category" : "Add New Category"}
              </h3>
              <button 
                onClick={closeModal}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <form onSubmit={handleAddCategory} className="flex flex-col overflow-hidden flex-1">
              <div className="p-6 space-y-6 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#1F2336] [&::-webkit-scrollbar-thumb]:rounded-full">
                
                {/* Category Name */}
                <div>
                  <label className="block text-sm font-bold text-[#1F2336] dark:text-slate-200 mb-2">
                    Category Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    value={newCategory.name}
                    onChange={(e) => setNewCategory({...newCategory, name: e.target.value})}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:border-[#1F2336] transition-colors text-sm"
                    placeholder="Enter category name"
                    required
                  />
                </div>

                {/* Parent Category */}
                <div>
                  <label className="block text-sm font-bold text-[#1F2336] dark:text-slate-200 mb-2">
                    Parent Category (Optional)
                  </label>
                  <select 
                    value={newCategory.parentCategory || ""}
                    onChange={(e) => setNewCategory({...newCategory, parentCategory: e.target.value})}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:border-[#1F2336] transition-colors text-sm text-slate-700 dark:text-slate-300"
                  >
                    <option value="">None (Create as Main Category)</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.name}>{cat.name}</option>
                    ))}
                  </select>
                </div>

                {/* Category Image Uploader */}
                <div>
                  <label className="block text-sm font-bold text-[#1F2336] dark:text-slate-200 mb-2">
                    Category Image
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-200 dark:border-slate-700 border-dashed rounded-xl hover:border-[#1F2336] dark:hover:border-slate-500 transition-colors bg-slate-50/50 dark:bg-slate-800/50 cursor-pointer group">
                    <div className="space-y-2 text-center">
                      <div className="mx-auto h-12 w-12 text-slate-400 group-hover:text-[#1F2336] transition-colors flex items-center justify-center bg-white dark:bg-slate-800 rounded-full shadow-sm">
                        <Upload className="h-6 w-6" />
                      </div>
                      <div className="flex text-sm text-slate-600 dark:text-slate-400 justify-center">
                        <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-[#1F2336] dark:text-slate-300 hover:underline focus-within:outline-none">
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-slate-500">
                        PNG, JPG, GIF up to 5MB
                      </p>
                    </div>
                  </div>
                </div>

                {/* Status Toggle */}
                <div>
                  <label className="block text-sm font-bold text-[#1F2336] dark:text-slate-200 mb-3">
                    Status
                  </label>
                  <div className="flex items-center gap-3">
                    <button 
                      type="button"
                      onClick={() => setNewCategory({...newCategory, status: newCategory.status === 'Active' ? 'Inactive' : 'Active'})}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                        newCategory.status === 'Active' ? 'bg-[#00c896]' : 'bg-red-500'
                      }`}
                    >
                      <span 
                        className="inline-block h-5 w-5 transform rounded-full bg-white transition-transform"
                        style={{ transform: newCategory.status === 'Active' ? 'translateX(22px)' : 'translateX(2px)' }}
                      />
                    </button>
                    <span className={`text-sm font-bold w-12 text-left ${newCategory.status === 'Active' ? 'text-[#00c896]' : 'text-slate-500'}`}>
                      {newCategory.status}
                    </span>
                  </div>
                </div>

              </div>

              {/* Footer */}
              <div className="p-6 border-t border-slate-100 dark:border-slate-800 flex justify-end items-center gap-4 bg-white dark:bg-slate-900 shrink-0">
                <button 
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2.5 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 transition-colors font-medium text-sm"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-6 py-2.5 bg-[#1F2336] hover:bg-slate-800 text-white rounded-lg transition-colors font-medium text-sm shadow-sm"
                >
                  {editingId ? "Save Changes" : "Save Category"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Category Modal */}
      {deleteModalOpen && categoryToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-slate-900/50 animate-fade-in lg:pl-72">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl w-full max-w-md flex flex-col overflow-hidden animate-slide-up">
            <div className="flex items-center justify-between p-6 shrink-0">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-red-500">
                  <Trash2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-[#1F2336] dark:text-white">Delete Category</h3>
              </div>
              <button 
                onClick={() => setDeleteModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors self-start mt-1"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="px-6 pb-6 space-y-5 border-b border-slate-100 dark:border-slate-800">
              <p className="text-slate-600 dark:text-slate-300">
                This action is <span className="font-bold text-[#1F2336] dark:text-white">permanent</span> and cannot be undone.<br/>
                Type <span className="font-bold text-red-500">{deleteConfirmCode}</span> to confirm.
              </p>
              
              <input 
                type="text" 
                value={deleteConfirmText}
                onChange={(e) => setDeleteConfirmText(e.target.value)}
                className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:border-red-500 transition-colors text-sm"
                placeholder={`Type ${deleteConfirmCode} to confirm`}
              />
            </div>

            {/* Footer */}
            <div className="p-6 flex justify-end items-center gap-4 bg-slate-50/50 dark:bg-slate-900/50 shrink-0">
              <button 
                onClick={() => setDeleteModalOpen(false)}
                className="px-6 py-2.5 border border-slate-200 dark:border-slate-700 text-[#1F2336] dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors font-bold text-sm bg-white dark:bg-slate-900 shadow-sm"
              >
                Cancel
              </button>
              <button 
                onClick={confirmDelete}
                disabled={deleteConfirmText !== deleteConfirmCode}
                className="px-6 py-2.5 bg-red-100 dark:bg-red-500/20 text-red-500 hover:bg-red-200 dark:hover:bg-red-500/30 rounded-lg transition-colors font-bold text-sm shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
