import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <Link href="/" className="text-2xl font-black text-white tracking-tighter">
              ECOMARS
            </Link>
            <p className="mt-2 text-sm text-slate-500 max-w-xs">
              Everything you need in one place. Premium quality, fastest delivery.
            </p>
          </div>
          
          <nav className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
            {['About Us', 'Contact', 'Privacy Policy', 'Terms of Service'].map((item) => (
              <Link 
                key={item} 
                href="#" 
                className="text-sm hover:text-white transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Ecomars. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <span>Made with ❤️ for premium shopping</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
