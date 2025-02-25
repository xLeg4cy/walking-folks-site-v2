
import { ContactForm } from "./ContactForm";
import { MessageSquare, X } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ContactProps {
  onClose: () => void;
}

export default function Contact({ onClose }: ContactProps) {
  const { t } = useTranslation();

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
        
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-y-auto max-h-[90vh]">
          <div className="p-4 sm:p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-indigo-50 dark:bg-indigo-900/30 rounded-full px-4 py-2 text-sm font-medium mb-4">
                <MessageSquare size={16} className="mr-2 text-[#4338CA] dark:text-indigo-300" />
                <span className="text-[#4338CA] dark:text-indigo-300">{t('contact.subtitle')}</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#4338CA] to-[#818CF8] px-4">
                {t('contact.title')}
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
                {t('contact.description')}
              </p>
            </div>

            <ContactForm />
          </div>
        </section>
      </div>
    </div>
  );
}
