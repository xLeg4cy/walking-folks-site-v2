
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-3xl mx-4">
        <button
          onClick={onClose}
          className="absolute -right-2 -top-2 p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-50"
          aria-label="Close contact form"
        >
          <X className="text-gray-800 dark:text-gray-200" size={24} />
        </button>
        
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-black/5 dark:bg-white/5 rounded-full px-6 py-2 text-sm font-medium mb-4">
                <MessageSquare size={16} className="mr-2" />
                Get in Touch
              </div>
              
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
                Let's Start a <span className="text-gradient">Conversation</span>
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
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
