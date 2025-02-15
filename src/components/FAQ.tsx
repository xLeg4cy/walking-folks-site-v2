
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const FAQ = () => {
  return (
    <section className="section py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Find answers to common questions about our services and process.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-brand-navy hover:text-brand-blue">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
