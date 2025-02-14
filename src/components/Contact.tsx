
import { ContactForm } from "./ContactForm";
import { MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-black/5 rounded-full px-6 py-2 text-sm font-medium mb-8">
            <MessageSquare size={16} className="mr-2" />
            Get in Touch
          </div>
          
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Let's Start a <span className="text-gradient">Conversation</span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to learn more? We'd love to hear from you.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
