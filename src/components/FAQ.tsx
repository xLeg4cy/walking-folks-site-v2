
import { useTranslation } from 'react-i18next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const FAQ = () => {
  const { t } = useTranslation();
  
  const faqs = [
    {
      question: "What services do you provide?",
      answer: "We offer a comprehensive range of services including web development, mobile app development, cloud solutions, and digital transformation consulting. Our team specializes in creating custom solutions tailored to your specific needs."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, while more complex applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer various support and maintenance packages to ensure your solution continues to perform optimally. Our team is available for updates, bug fixes, and improvements post-launch."
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with a wide range of modern technologies including React, Node.js, Python, AWS, and more. We choose the best tech stack based on your project's specific requirements and goals."
    },
    {
      question: "How do you handle project communication?",
      answer: "We maintain clear communication through regular meetings, progress reports, and dedicated project management tools. You'll have a direct line to your project team and regular updates on milestones."
    }
  ];

  return (
    <section className="section py-20 bg-background text-foreground dark:bg-gray-900">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground dark:text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#7E69AB] to-[#D6BCFA]">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground dark:text-gray-300">
            Find answers to common questions about our services and process
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <AccordionItem value={`item-${index}`} className="border-b border-gray-200 dark:border-gray-700">
                <AccordionTrigger className="text-left text-foreground dark:text-white hover:text-brand-purple-medium dark:hover:text-brand-purple-light">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground dark:text-gray-300">
                  {faq.answer}
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
