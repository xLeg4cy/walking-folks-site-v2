import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/c067a121-ecd5-40ee-b6ee-293f2ed14efe.png" 
            alt="Walking Folks" 
            className="h-8 w-auto"
          />
          <span className="ml-3 font-bold text-xl">Walking Folks</span>
        </div>
        <p className="text-gray-400">
          Creating innovative solutions for tomorrow's challenges.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-brand-blue transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:text-brand-blue transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-brand-blue transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="hover:text-brand-blue transition-colors">
            <Linkedin size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Web Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Mobile Apps</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Cloud Solutions</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Consulting</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Walking Folks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
