"use client";

import { useState } from"react";
import Link from"next/link";
import { usePathname } from"next/navigation";
import { LayoutDashboard, PackageSearch, Tags, ShoppingCart, Users, Ticket, LineChart, Settings,
 LogOut,
 Menu,
 X
} from"lucide-react";

export default function AdminLayout({ children }) {
 const pathname = usePathname();
 const [sidebarOpen, setSidebarOpen] = useState(false);

 const navItems = [
 { name:"Dashboard", href:"/admin/dashboard", icon: <LayoutDashboard className="h-5 w-5" /> },
 { name:"Products", href:"/admin/products", icon: <PackageSearch className="h-5 w-5" /> },
 { name:"Categories", href:"/admin/categories", icon: <Tags className="h-5 w-5" /> },
 { name:"Orders", href:"/admin/orders", icon: <ShoppingCart className="h-5 w-5" /> },
 { name:"Users", href:"/admin/users", icon: <Users className="h-5 w-5" /> },
 { name:"Coupons", href:"/admin/coupons", icon: <Ticket className="h-5 w-5" /> },
 { name:"Analytics", href:"/admin/analytics", icon: <LineChart className="h-5 w-5" /> },
 { name:"Settings", href:"/admin/settings", icon: <Settings className="h-5 w-5" /> },
 ];

 return (
 <div className="h-screen bg-slate-50 dark:bg-slate-950 flex overflow-hidden">
 {/* Mobile Sidebar Overlay */}
 {sidebarOpen && (
 <div className="fixed inset-0 bg-black/50 z-40 lg:hidden"
 onClick={() => setSidebarOpen(false)}
 ></div>
 )}

 {/* Floating Mobile Toggle (visible only on mobile when sidebar is closed) */}
 {!sidebarOpen && (
 <button className="lg:hidden fixed top-4 left-4 z-30 p-2 bg-white dark:bg-slate-900 shadow-md border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-white"
 onClick={() => setSidebarOpen(true)}
 >
 <Menu className="h-6 w-6" />
 </button>
 )}

 {/* Sidebar */}
 <aside className={`
 fixed lg:static inset-y-0 left-0 z-50
 w-72 bg-slate-900 text-slate-300 flex flex-col transition-transform duration-300 ease-in-out shadow-xl lg:shadow-none print:hidden
 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
 `}>
 <div className="p-6 flex items-center justify-between border-b border-slate-800">
 <Link href="/admin" className="text-2xl text-white tracking-tighter">
 ECOMARS <span className="text-primary text-sm tracking-normal ml-1">ADMIN</span>
 </Link>
 <button className="lg:hidden text-slate-400 hover:text-white" onClick={() => setSidebarOpen(false)}>
 <X className="h-6 w-6" />
 </button>
 </div>

 <nav className="flex-1 pl-4 py-6 space-y-2 overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
 {navItems.map((item) => {
 const isActive = pathname === item.href || (item.href !== '/admin/dashboard' && pathname.startsWith(item.href));
 return (
 <Link key={item.name} href={item.href}
 className={`
 flex items-center gap-3 px-5 py-3.5 transition-all relative z-10 ${
 isActive 
 ? 'bg-slate-50 dark:bg-slate-950 text-indigo-600 dark:text-indigo-400 rounded-l-3xl before:absolute before:-top-6 before:right-0 before:h-6 before:w-6 before:bg-transparent before:rounded-br-2xl before:shadow-[10px_10px_0_0_#f8fafc] dark:before:shadow-[10px_10px_0_0_#020617] after:absolute after:-bottom-6 after:right-0 after:h-6 after:w-6 after:bg-transparent after:rounded-tr-2xl after:shadow-[10px_-10px_0_0_#f8fafc] dark:after:shadow-[10px_-10px_0_0_#020617]' 
 : 'text-slate-400 hover:text-white rounded-l-3xl mr-4'
 }
 `}
 >
 {item.icon}
 <span className={`${isActive ? 'font-medium' : ''}`}>{item.name}</span>
 </Link>
 );
 })}
 </nav>

 {/* User Profile in Sidebar */}
 <div className="p-4 border-t border-slate-800">
 <div className="flex items-center gap-3 px-4 py-3 mb-2 bg-slate-800/50">
 <div className="h-10 w-10 bg-primary flex items-center justify-center text-white border-2 border-primary/20 flex-shrink-0">
 A
 </div>
 <div className="overflow-hidden">
 <p className="text-sm text-white truncate">Admin User</p>
 <p className="text-xs text-slate-400 truncate">Super Admin</p>
 </div>
 </div>
 </div>
 </aside>

 {/* Main Content Area */}
 <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative print:overflow-visible">
 {/* Page Content */}
 <main className="flex-1 overflow-y-auto p-6 lg:p-10 pt-16 lg:pt-10 print:overflow-visible print:p-0 print:m-0">
 {children}
 </main>
 </div>

 </div>
 );
}
