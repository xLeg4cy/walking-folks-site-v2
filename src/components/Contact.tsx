
import { ContactForm } from "./ContactForm";
import { MessageSquare, X } from "lucide-react";

interface ContactProps {
  onClose: () => void;
}

export default function Contact({ onClose }: ContactProps) {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-3xl">
        <button
          onClick={onClose}
          className="absolute -right-2 -top-2 z-50 p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Close contact form"
        >
          <X className="text-gray-800 dark:text-gray-200" size={20} />
        </button>
        
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-y-auto md:overflow-visible max-h-[90vh] md:max-h-none">
          <div className="p-4 sm:p-6 md:p-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center bg-black/5 dark:bg-white/5 rounded-full px-4 py-2 text-sm font-medium mb-4">
                <MessageSquare size={16} className="mr-2" />
                Get in Touch
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
                Let's Start a <span className="text-gradient">Conversation</span>
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
                Have a project in mind or just want to learn more? We'd love to hear from you.
              </p>
            </div>

            <ContactForm />
          </div>
        </section>
      </div>
    </div>
  );
}
