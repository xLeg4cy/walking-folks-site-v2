
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { HelpCircle } from "lucide-react";
import PremiumIcon from "./ui/PremiumIcon";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const { t } = useTranslation();
  const faqItems = t('faq.items', { returnObjects: true }) as FAQItem[];

  return (
    <section id="faq" className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 dark:opacity-2" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#4338CA] to-[#818CF8]">
            {t('faq.title')}
          </h2>
          <p className="text-muted-foreground dark:text-gray-300">
            {t('faq.description')}
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((faq: FAQItem, index: number) => (
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
                  <span className="text-left">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-0 text-muted-foreground dark:text-gray-300">
                  <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
};

export default FAQ;
