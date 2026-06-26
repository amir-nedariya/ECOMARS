"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, Search, ChevronLeft, Layers, ArrowLeft, X } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function SubcategoriesView() {
  const params = useParams();
  const parentName = params.id == "1" ? "Perfume" : params.id == "2" ? "Bottles" : params.id == "3" ? "Plastic Items" : "Fashion";
  
  const [subcategories, setSubcategories] = useState([
    { id: 1, name: `${parentName} Sub Item 1`, status: "Active" },
    { id: 2, name: `${parentName} Sub Item 2`, status: "Active" },
    { id: 3, name: `${parentName} Sub Item 3`, status: "Inactive" },
    { id: 4, name: `${parentName} Sub Item 4`, status: "Active" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  
  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [newSubcategory, setNewSubcategory] = useState({ name: '', status: 'Active' });
  
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [subcategoryToDelete, setSubcategoryToDelete] = useState(null);
  const [deleteConfirmText, setDeleteConfirmText] = useState("");
  const [deleteConfirmCode, setDeleteConfirmCode] = useState("");

  const filteredSubcategories = subcategories.filter(sub => 
    sub.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getBadge = (status) => {
    return status === 'Active' ? 'bg-[#00c896]/10 text-[#00c896]' : 'bg-red-500/10 text-red-500';
  };

  const openAddModal = () => {
    setEditingId(null);
    setNewSubcategory({ name: '', status: 'Active' });
    setIsModalOpen(true);
  };

  const handleEditClick = (sub) => {
    setEditingId(sub.id);
    setNewSubcategory({ name: sub.name, status: sub.status });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setEditingId(null);
      setNewSubcategory({ name: '', status: 'Active' });
    }, 200);
  };

  const handleAddSubcategory = (e) => {
    e.preventDefault();
    if (!newSubcategory.name) return;
    
    if (editingId) {
      setSubcategories(subcategories.map(sub => 
        sub.id === editingId 
          ? { ...sub, name: newSubcategory.name, status: newSubcategory.status }
          : sub
      ));
    } else {
      const id = subcategories.length > 0 ? Math.max(...subcategories.map(s => s.id)) + 1 : 1;
      setSubcategories([{
        id,
        name: newSubcategory.name,
        status: newSubcategory.status,
      }, ...subcategories]);
    }
    closeModal();
  };

  const handleDeleteClick = (sub) => {
    setSubcategoryToDelete(sub);
    setDeleteConfirmText("");
    setDeleteConfirmCode(Math.floor(1000 + Math.random() * 9000).toString());
    setDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (subcategoryToDelete && deleteConfirmText === deleteConfirmCode) {
      setSubcategories(subcategories.filter(sub => sub.id !== subcategoryToDelete.id));
      setDeleteModalOpen(false);
      setTimeout(() => setSubcategoryToDelete(null), 200);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in relative">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <Link href="/admin/categories" className="text-slate-500 hover:text-[#1F2336] transition-colors flex items-center gap-2 text-sm font-semibold mb-2 w-fit">
            <ArrowLeft className="h-4 w-4" /> Back to Categories
          </Link>
          <h1 className="text-2xl text-slate-800 dark:text-white font-bold flex items-center gap-3">
            <div className="p-2 bg-[#1F2336]/10 dark:bg-slate-800 text-[#1F2336] dark:text-white rounded-lg">
              <Layers className="h-6 w-6" />
            </div>
            {parentName} Subcategories
          </h1>
        </div>
        <button onClick={openAddModal} className="bg-[#1F2336] hover:bg-slate-800 text-white px-6 py-2.5 transition-all flex items-center gap-2 rounded-md">
          <Plus className="h-4 w-4" />
          Add Subcategory
        </button>
      </div>

      {/* Toolbar */}
      <div className="bg-white dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-4 justify-between items-center rounded-xl shadow-sm">
        <div className="relative w-full sm:w-[450px]">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search subcategories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-[#1F2336]/10 focus:border-[#1F2336] text-sm transition-all placeholder:text-slate-400 text-slate-700 dark:text-slate-200"
          />
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1F2336] text-white text-xs font-semibold tracking-wide">
                <th className="p-4 whitespace-nowrap w-1/3 pl-8">Subcategory Name</th>
                <th className="p-4 whitespace-nowrap w-1/3 text-center">Status</th>
                <th className="p-4 whitespace-nowrap w-1/3 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {filteredSubcategories.map((sub) => (
                <tr key={sub.id} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors">
                  <td className="p-4 pl-8 font-medium text-slate-800 dark:text-slate-200">
                    {sub.name}
                  </td>
                  <td className="p-4 text-center">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${getBadge(sub.status)}`}>
                      {sub.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-3">
                      <button onClick={() => handleEditClick(sub)} className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors" title="Edit">
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button onClick={() => handleDeleteClick(sub)} className="text-red-500 hover:text-red-700 transition-colors" title="Delete">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredSubcategories.length === 0 && (
                <tr>
                  <td colSpan="3" className="p-8 text-center text-slate-500">No subcategories found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Subcategory Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-slate-900/50 animate-fade-in lg:pl-72">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl w-full max-w-md flex flex-col overflow-hidden animate-slide-up h-auto max-h-[90vh]">
            <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800 shrink-0">
              <h3 className="text-xl font-bold text-[#1F2336] dark:text-white">
                {editingId ? "Edit Subcategory" : "Add New Subcategory"}
              </h3>
              <button 
                onClick={closeModal}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-500"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <form onSubmit={handleAddSubcategory} className="flex flex-col overflow-hidden flex-1">
              <div className="p-6 space-y-6 overflow-y-auto">
                <div>
                  <label className="block text-sm font-bold text-[#1F2336] dark:text-slate-200 mb-2">
                    Subcategory Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    value={newSubcategory.name}
                    onChange={(e) => setNewSubcategory({...newSubcategory, name: e.target.value})}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:border-[#1F2336] transition-colors text-sm"
                    placeholder="Enter subcategory name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#1F2336] dark:text-slate-200 mb-3">
                    Status
                  </label>
                  <div className="flex items-center gap-3">
                    <button 
                      type="button"
                      onClick={() => setNewSubcategory({...newSubcategory, status: newSubcategory.status === 'Active' ? 'Inactive' : 'Active'})}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                        newSubcategory.status === 'Active' ? 'bg-[#00c896]' : 'bg-red-500'
                      }`}
                    >
                      <span 
                        className="inline-block h-5 w-5 transform rounded-full bg-white transition-transform"
                        style={{ transform: newSubcategory.status === 'Active' ? 'translateX(22px)' : 'translateX(2px)' }}
                      />
                    </button>
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                      {newSubcategory.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex justify-end gap-3 shrink-0">
                <button 
                  type="button"
                  onClick={closeModal}
                  className="px-6 py-2.5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors font-medium text-sm"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-6 py-2.5 bg-[#1F2336] hover:bg-slate-800 text-white rounded-lg transition-colors font-medium text-sm shadow-sm"
                >
                  {editingId ? "Save Changes" : "Save Subcategory"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Subcategory Modal */}
      {deleteModalOpen && subcategoryToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-slate-900/50 animate-fade-in lg:pl-72">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl w-full max-w-md flex flex-col overflow-hidden animate-slide-up">
            <div className="flex items-center justify-between p-6 shrink-0">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-red-500">
                  <Trash2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-[#1F2336] dark:text-white">Delete Subcategory</h3>
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
