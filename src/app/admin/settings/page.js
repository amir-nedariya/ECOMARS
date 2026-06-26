"use client";

import { useState } from "react";
import { Settings, CreditCard, Store, Truck, Bell, Save, Shield, CheckCircle2, AlertCircle, QrCode } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("payments");

  const [paymentSettings, setPaymentSettings] = useState({
    upi: {
      enabled: true,
      id: "tubastore@ybl",
      merchantName: "Tuba Store"
    },
    razorpay: {
      enabled: true,
      keyId: "rzp_test_1234567890",
      keySecret: "****************"
    },
    cod: {
      enabled: true,
      extraCharge: "0"
    }
  });

  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 animate-fade-in max-w-6xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <h1 className="text-2xl text-slate-900 dark:text-white font-bold flex items-center gap-3">
            <Settings className="h-7 w-7 text-indigo-500" />
            Store Settings
          </h1>
          <p className="text-sm text-slate-500 mt-1">Manage your store configurations and payment gateways.</p>
        </div>
        <button 
          onClick={handleSave}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all shadow-md shadow-indigo-500/20 active:scale-95 flex items-center gap-2"
        >
          {isSaved ? <CheckCircle2 className="h-5 w-5" /> : <Save className="h-5 w-5" />}
          {isSaved ? "Settings Saved!" : "Save Changes"}
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Settings Sidebar */}
        <div className="w-full md:w-64 shrink-0">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
            <button 
              onClick={() => setActiveTab("general")}
              className={`w-full flex items-center gap-3 px-5 py-4 text-left transition-colors border-b border-slate-100 dark:border-slate-800/50 ${activeTab === 'general' ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold border-l-2 border-l-indigo-600' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
            >
              <Store className="h-5 w-5" /> Store Details
            </button>
            <button 
              onClick={() => setActiveTab("payments")}
              className={`w-full flex items-center gap-3 px-5 py-4 text-left transition-colors border-b border-slate-100 dark:border-slate-800/50 ${activeTab === 'payments' ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold border-l-2 border-l-indigo-600' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
            >
              <CreditCard className="h-5 w-5" /> Payment Gateways
            </button>
            <button 
              onClick={() => setActiveTab("shipping")}
              className={`w-full flex items-center gap-3 px-5 py-4 text-left transition-colors border-b border-slate-100 dark:border-slate-800/50 ${activeTab === 'shipping' ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold border-l-2 border-l-indigo-600' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
            >
              <Truck className="h-5 w-5" /> Shipping Methods
            </button>
            <button 
              onClick={() => setActiveTab("notifications")}
              className={`w-full flex items-center gap-3 px-5 py-4 text-left transition-colors ${activeTab === 'notifications' ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold border-l-2 border-l-indigo-600' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
            >
              <Bell className="h-5 w-5" /> Notifications
            </button>
          </div>
        </div>

        {/* Settings Content */}
        <div className="flex-1">
          {activeTab === 'payments' && (
            <div className="space-y-6 animate-slide-up">
              
              {/* Info Alert */}
              <div className="bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 p-4 rounded-xl flex gap-3">
                <Shield className="h-5 w-5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Secure Payment Configuration</h4>
                  <p className="text-xs mt-1 opacity-80">Enable or disable payment methods. API keys are securely encrypted before being stored.</p>
                </div>
              </div>

              {/* Razorpay Settings */}
              <div className="bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#0c2e60]/10 rounded-lg flex items-center justify-center">
                      <CreditCard className="h-5 w-5 text-[#0c2e60] dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">Razorpay Configuration</h3>
                      <p className="text-xs text-slate-500">Accept Credit Cards, Netbanking & Wallets</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={paymentSettings.razorpay.enabled}
                      onChange={(e) => setPaymentSettings({...paymentSettings, razorpay: {...paymentSettings.razorpay, enabled: e.target.checked}})}
                    />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                  </label>
                </div>
                
                {paymentSettings.razorpay.enabled && (
                  <div className="p-6 space-y-4 bg-slate-50/50 dark:bg-slate-800/20">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Key ID</label>
                      <input 
                        type="text" 
                        value={paymentSettings.razorpay.keyId}
                        onChange={(e) => setPaymentSettings({...paymentSettings, razorpay: {...paymentSettings.razorpay, keyId: e.target.value}})}
                        className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-indigo-500 font-mono text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Key Secret</label>
                      <input 
                        type="password" 
                        value={paymentSettings.razorpay.keySecret}
                        onChange={(e) => setPaymentSettings({...paymentSettings, razorpay: {...paymentSettings.razorpay, keySecret: e.target.value}})}
                        className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-indigo-500 font-mono text-sm tracking-widest"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* UPI Settings */}
              <div className="bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                      <QrCode className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">UPI Direct Configuration</h3>
                      <p className="text-xs text-slate-500">Accept manual payments via GPay, PhonePe, Paytm</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={paymentSettings.upi.enabled}
                      onChange={(e) => setPaymentSettings({...paymentSettings, upi: {...paymentSettings.upi, enabled: e.target.checked}})}
                    />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500"></div>
                  </label>
                </div>

                {paymentSettings.upi.enabled && (
                  <div className="p-6 space-y-4 bg-slate-50/50 dark:bg-slate-800/20">
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="flex-1 space-y-4">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Store UPI ID</label>
                          <input 
                            type="text" 
                            value={paymentSettings.upi.id}
                            onChange={(e) => setPaymentSettings({...paymentSettings, upi: {...paymentSettings.upi, id: e.target.value}})}
                            placeholder="e.g. storename@ybl"
                            className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-green-500 font-mono text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Merchant Name</label>
                          <input 
                            type="text" 
                            value={paymentSettings.upi.merchantName}
                            onChange={(e) => setPaymentSettings({...paymentSettings, upi: {...paymentSettings.upi, merchantName: e.target.value}})}
                            className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-green-500 text-sm"
                          />
                        </div>
                      </div>
                      
                      <div className="shrink-0">
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 text-center">Auto-Generated QR</label>
                        <div className="w-32 h-32 bg-white border border-slate-200 dark:border-slate-700 rounded-xl flex flex-col items-center justify-center overflow-hidden p-2 shadow-sm">
                          {paymentSettings.upi.id ? (
                            <img 
                              src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(`upi://pay?pa=${paymentSettings.upi.id}&pn=${paymentSettings.upi.merchantName || 'Store'}&cu=INR`)}`} 
                              alt="UPI QR Code" 
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <div className="w-full h-full bg-slate-50 flex items-center justify-center">
                              <QrCode className="h-8 w-8 text-slate-300" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* COD Settings */}
              <div className="bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                <div className="p-6 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                      <Truck className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">Cash on Delivery</h3>
                      <p className="text-xs text-slate-500">Allow customers to pay upon delivery</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={paymentSettings.cod.enabled}
                      onChange={(e) => setPaymentSettings({...paymentSettings, cod: {...paymentSettings.cod, enabled: e.target.checked}})}
                    />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"></div>
                  </label>
                </div>
              </div>

            </div>
          )}

          {activeTab !== 'payments' && (
            <div className="bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 p-16 rounded-xl flex flex-col items-center justify-center text-center animate-fade-in">
              <AlertCircle className="h-12 w-12 text-slate-300 dark:text-slate-700 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Section Under Construction</h3>
              <p className="text-slate-500 max-w-sm text-sm">The {activeTab} settings panel is currently being updated. Please check back later.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}