"use client";

import { useState } from "react";
import { UploadCloud, Image as ImageIcon, X, Plus, Save, ArrowLeft, ImagePlus } from "lucide-react";
import Link from "next/link";

export default function AddProductPage() {
  const [images, setImages] = useState([]);
  const [specifications, setSpecifications] = useState([{ label: "", value: "" }]);

  const handleImageUpload = (e) => {
    // Mock upload behavior
    if (e.target.files && e.target.files.length > 0) {
      const newImages = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
      setImages([...images, ...newImages]);
    }
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const addSpecification = () => {
    setSpecifications([...specifications, { label: "", value: "" }]);
  };

  const updateSpecification = (index, field, value) => {
    const newSpecs = [...specifications];
    newSpecs[index][field] = value;
    setSpecifications(newSpecs);
  };

  const removeSpecification = (index) => {
    setSpecifications(specifications.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-8 animate-fade-in max-w-6xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <Link href="/admin/products" className="text-slate-400 hover:text-indigo-600 transition-colors p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-2xl text-slate-900 dark:text-white font-bold">
              Add New Product
            </h1>
          </div>
          <p className="text-sm text-slate-500 ml-10">Create a new product listing for your store.</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none px-6 py-2.5 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all rounded-md font-medium">
            Save Draft
          </button>
          <button className="flex-1 sm:flex-none bg-[#1F2336] hover:bg-slate-800 text-white px-8 py-2.5 shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 rounded-md font-medium">
            <Save className="h-4 w-4" />
            Publish Product
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Left Column - Main Details */}
        <div className="xl:col-span-2 space-y-8">
          {/* General Information */}
          <div className="bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 p-8 rounded-xl">
            <h2 className="text-lg text-slate-900 dark:text-white font-semibold mb-6">General Information</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Product Name <span className="text-red-500">*</span></label>
                <input type="text" placeholder="e.g. Premium Wireless Headphones"
                  className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Description</label>
                <textarea rows="6"
                  placeholder="Write a detailed product description..."
                  className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none text-sm"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Media/Images */}
          <div className="bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 p-8 rounded-xl">
            <h2 className="text-lg text-slate-900 dark:text-white font-semibold mb-6">Product Images</h2>
            <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-10 flex flex-col items-center justify-center text-center bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/20 dark:hover:bg-slate-800/40 transition-colors relative cursor-pointer group">
              <input type="file" multiple accept="image/*" onChange={handleImageUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
              <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ImagePlus className="h-8 w-8" />
              </div>
              <h3 className="text-base font-medium text-slate-900 dark:text-white mb-1">Click or drag images to upload</h3>
              <p className="text-sm text-slate-500">SVG, PNG, JPG or GIF (max. 800x400px)</p>
            </div>

            {images.length > 0 && (
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {images.map((src, idx) => (
                  <div key={idx} className="relative aspect-square overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700 group shadow-sm">
                    <img src={src} alt={`Upload ${idx}`} className="object-cover w-full h-full" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button onClick={() => removeImage(idx)} className="bg-white text-red-500 p-2 rounded-full hover:scale-110 transition-transform shadow-md">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Specifications */}
          <div className="bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 p-8 rounded-xl">
            <h2 className="text-lg text-slate-900 dark:text-white font-semibold mb-6">Specifications</h2>
            <div className="space-y-4">
              {specifications.map((spec, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-1 grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Label (e.g. Material)"
                      value={spec.label}
                      onChange={(e) => updateSpecification(index, 'label', e.target.value)}
                      className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
                    />
                    <input type="text" placeholder="Value (e.g. Stainless Steel)"
                      value={spec.value}
                      onChange={(e) => updateSpecification(index, 'value', e.target.value)}
                      className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
                    />
                  </div>
                  {specifications.length > 1 && (
                    <button onClick={() => removeSpecification(index)} className="p-2.5 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-md transition-colors mt-0.5">
                      <X className="h-5 w-5" />
                    </button>
                  )}
                </div>
              ))}
              <button onClick={addSpecification} className="mt-4 px-4 py-2 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium flex items-center gap-2 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 rounded-md transition-colors">
                <Plus className="h-4 w-4" /> Add Specification
              </button>
            </div>
          </div>

        </div>

        {/* Right Column - Organization & Pricing */}
        <div className="space-y-8">
          {/* Organization */}
          <div className="bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 p-8 rounded-xl">
            <h2 className="text-lg text-slate-900 dark:text-white font-semibold mb-6">Organization</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Category</label>
                <div className="relative">
                  <select className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all appearance-none text-sm text-slate-700 dark:text-slate-300">
                    <option value="">Select Category</option>
                    <option value="perfume">Perfume</option>
                    <option value="bottle">Bottle</option>
                    <option value="plastic">Plastic</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Sub Category</label>
                <div className="relative">
                  <select className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all appearance-none text-sm text-slate-700 dark:text-slate-300">
                    <option value="">Select Sub Category</option>
                    <option value="men-perfume">Men Perfume</option>
                    <option value="water-bottle">Water Bottle</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 p-8 rounded-xl">
            <h2 className="text-lg text-slate-900 dark:text-white font-semibold mb-6">Pricing & Inventory</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Price (₹)</label>
                <input type="number" placeholder="0.00"
                  className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Discount (%)</label>
                <input type="number" placeholder="0"
                  className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Stock Quantity</label>
                <input type="number" placeholder="100"
                  className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
