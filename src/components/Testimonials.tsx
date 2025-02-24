
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { QuoteIcon } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "Working with Lovable has been transformative for our business. Their innovative solutions helped us scale rapidly.",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "Michael Chen",
    role: "CTO, InnovateCorp",
    content: "The team's technical expertise and attention to detail are unmatched. They delivered beyond our expectations.",
    image: "https://i.pravatar.cc/150?img=2"
  },
  {
    name: "Emma Williams",
    role: "Founder, DesignPro",
    content: "Exceptional service and outstanding results. Lovable truly understands modern web development.",
    image: "https://i.pravatar.cc/150?img=3"
  }
];

const Testimonials = () => {
  const [loadedTestimonials, setLoadedTestimonials] = useState(testimonials);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section className="section py-20 bg-background text-foreground dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/10 via-transparent to-purple-50/10 dark:from-purple-900/5 dark:via-transparent dark:to-purple-900/5" />
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground dark:text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#7E69AB] to-[#D6BCFA]">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied clients about their experience working with us.
          </p>
        </motion.div>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {loadedTestimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg relative overflow-hidden group h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-purple-light/5 to-transparent dark:from-brand-purple-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <QuoteIcon className="h-8 w-8 text-brand-purple-medium dark:text-brand-purple-light mb-4 transform transition-transform group-hover:scale-110 duration-300" />
                  </motion.div>
                  
                  <p className="text-muted-foreground dark:text-gray-300 mb-6 text-lg italic relative z-10">
                    "{testimonial.content}"
                  </p>
                  
                  <motion.div 
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-purple-light/20 group-hover:ring-brand-purple-light/40 transition-all duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-purple-light/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground dark:text-white group-hover:text-brand-purple-medium transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-muted-foreground dark:text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </motion.div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-12" />
          <CarouselNext className="hidden sm:flex -right-12" />
        </Carousel>
      </motion.div>
    </section>
  );
};

export default Testimonials;
