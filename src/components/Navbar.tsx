
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="font-bold text-xl">Walking Folks</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
              <a href="#about" className="hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
              <a href="#services" className="hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
              <a href="#pricing" className="hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Pricing</a>
              <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
                Contact Us
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50">Home</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50">About</a>
            <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50">Services</a>
            <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50">Pricing</a>
            <button className="w-full text-left bg-black text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
