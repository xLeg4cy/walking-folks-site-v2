
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {  
  const { t } = useTranslation();

  return (
    <section id="faq" className="py-20 bg-background text-foreground dark:bg-gray-900">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#7E69AB] to-[#D6BCFA]">
            {t('faq.title')}
          </h2>
          <p className="text-muted-foreground dark:text-gray-300">
            {t('faq.description')}
          </p>
        </div>

        <Accordion type="single" collapsible>
          {(t('faq.items', { returnObjects: true }) as FAQItem[]).map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
};

export default FAQ;
