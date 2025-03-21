
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {  
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  
  // Get FAQ items in both languages
  const faqItemsEnglish = t('faq.items', { lng: 'en', returnObjects: true }) as FAQItem[];
  const faqItemsSpanish = t('faq.items', { lng: 'es', returnObjects: true }) as FAQItem[];

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      {/* Removed background-specific classes */}
      <div className="absolute inset-0 opacity-5 dark:opacity-2" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center bg-indigo-100 dark:bg-indigo-900/30 rounded-full px-4 py-2 text-sm font-medium mb-6 text-[#4338CA] dark:text-indigo-300 mx-auto"
          >
            <HelpCircle size={16} className="mr-2 animate-bounce-slow" />
            {t('faq.badge')}
          </motion.div>
          
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#4338CA] to-[#818CF8]">
            {t('faq.title')}
          </h2>
          <p className="text-muted-foreground dark:text-gray-300">
            {t('faq.description')}
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqItemsEnglish.map((faq: FAQItem, index: number) => {
            const spanishFaq = faqItemsSpanish[index];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all group"
                >
                  <AccordionTrigger className="px-4 py-4 hover:no-underline group-hover:text-[#4338CA] transition-colors">
                    <span className="text-left">
                      <span className="font-medium">{faq.question}</span>
                      <span className="block text-sm text-gray-500 dark:text-gray-400 mt-1">{spanishFaq.question}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pt-0 text-muted-foreground dark:text-gray-300">
                    <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
                      <p className="mb-2">{faq.answer}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 pt-2 border-t border-gray-50 dark:border-gray-700">{spanishFaq.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            );
          })}
        </Accordion>
      </motion.div>
    </section>
  );
};

export default FAQ;
