
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onContactClick: () => void;
}

const Navbar = ({ onContactClick }: NavbarProps) => {
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img 
                src="/lovable-uploads/c067a121-ecd5-40ee-b6ee-293f2ed14efe.png" 
                alt="Walking Folks" 
                className="h-8 w-auto"
              />
            </Link>
            <span className="ml-3 font-bold text-xl text-[#0A2647] dark:text-white">Walking Folks</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-brand-purple-medium dark:hover:text-brand-purple-light px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
            <a href="#about" className="text-gray-700 dark:text-gray-200 hover:text-brand-purple-medium dark:hover:text-brand-purple-light px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
            <a href="#services" className="text-gray-700 dark:text-gray-200 hover:text-brand-purple-medium dark:hover:text-brand-purple-light px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
            <Link to="/blog" className="text-gray-700 dark:text-gray-200 hover:text-brand-purple-medium dark:hover:text-brand-purple-light px-3 py-2 rounded-md text-sm font-medium transition-colors">Blog</Link>
            <a href="#pricing" className="text-gray-700 dark:text-gray-200 hover:text-brand-purple-medium dark:hover:text-brand-purple-light px-3 py-2 rounded-md text-sm font-medium transition-colors">Pricing</a>
            <ThemeToggle />
            <button 
              onClick={onContactClick}
              className="bg-brand-purple-medium hover:bg-brand-purple-dark text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Contact Us
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-brand-purple-medium dark:hover:text-brand-purple-light focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-brand-purple-medium dark:hover:text-brand-purple-light">Home</Link>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-brand-purple-medium dark:hover:text-brand-purple-light">About</a>
            <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-brand-purple-medium dark:hover:text-brand-purple-light">Services</a>
            <Link to="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-brand-purple-medium dark:hover:text-brand-purple-light">Blog</Link>
            <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-brand-purple-medium dark:hover:text-brand-purple-light">Pricing</a>
            <button 
              onClick={() => {
                onContactClick();
                setIsOpen(false);
              }}
              className="w-full text-left bg-brand-purple-medium text-white px-3 py-2 rounded-md text-base font-medium hover:bg-brand-purple-dark"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
