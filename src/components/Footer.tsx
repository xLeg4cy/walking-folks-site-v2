
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background dark:bg-gray-900 text-gray-900 dark:text-gray-200 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/c067a121-ecd5-40ee-b6ee-293f2ed14efe.png" 
                alt="Walking Folks" 
                className="h-8 w-auto"
                width="32"
                height="32"
              />
              <span className="ml-3 font-bold text-xl text-gray-900 dark:text-white">Walking Folks</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Creating innovative solutions for tomorrow's challenges.
            </p>
            <div className="flex space-x-4">
              {/* Social media links with updated text color */}
              <a href="#" className="text-gray-600 hover:text-brand-purple-medium dark:text-gray-400 dark:hover:text-brand-purple-light transition-colors" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-brand-purple-medium dark:text-gray-400 dark:hover:text-brand-purple-light transition-colors" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-brand-purple-medium dark:text-gray-400 dark:hover:text-brand-purple-light transition-colors" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-brand-purple-medium dark:text-gray-400 dark:hover:text-brand-purple-light transition-colors" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#about" className="text-gray-600 hover:text-brand-purple-medium dark:text-gray-400 dark:hover:text-brand-purple-light transition-colors flex items-center">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-brand-purple-medium dark:text-gray-400 dark:hover:text-brand-purple-light transition-colors flex items-center">
                  Services
                </a>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-brand-purple-medium dark:text-gray-400 dark:hover:text-brand-purple-light transition-colors flex items-center">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-brand-purple-medium dark:text-gray-400 dark:hover:text-brand-purple-light transition-colors flex items-center">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-gray-900 dark:text-white">Services</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-purple-medium dark:text-gray-400 dark:hover:text-brand-purple-light transition-colors">Web Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-purple-medium dark:text-gray-400 dark:hover:text-brand-purple-light transition-colors">Mobile Apps</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-purple-medium dark:text-gray-400 dark:hover:text-brand-purple-light transition-colors">Cloud Solutions</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-purple-medium dark:text-gray-400 dark:hover:text-brand-purple-light transition-colors">Consulting</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-gray-900 dark:text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin className="w-5 h-5 mr-3" />
                <span>123 Business Ave, Suite 100<br/>Boston, MA 02110</span>
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <Phone className="w-5 h-5 mr-3" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <Mail className="w-5 h-5 mr-3" />
                <span>contact@walkingfolks.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Walking Folks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
