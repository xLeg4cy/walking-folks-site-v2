
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { QuoteIcon, Building2, Star } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Xcape Tours",
    role: "Tours and Travel Company",
    content: "Working with Walking Folks has been transformative for our business. Their innovative website design and payment integration solutions helped us scale rapidly and provide a seamless booking experience for our customers.",
    logo: "/lovable-uploads/db5fc616-d92f-40d8-a9f1-0c815842db57.png",
    industry: "Travel"
  },
  {
    name: "Larasofts",
    role: "Lenders and Merchant Services",
    content: "The team's technical expertise in infrastructure management is unmatched. Walking Folks delivered beyond our expectations and has become our trusted technology partner for all our critical systems.",
    logo: "/lovable-uploads/46aad1ea-7d79-4b50-9b66-be6cf014bc64.png", 
    industry: "Software"
  },
  {
    name: "Top Bright Inc",
    role: "Logistics and Warehouse",
    content: "Walking Folks revolutionized our parcel labeling process with their custom automation software. What used to take our team 8-10 hours daily now takes less than 30 minutes, dramatically improving our operational efficiency.",
    logo: "/lovable-uploads/1d6e29f4-c548-4f24-8ec4-75d830188ac3.png", 
    industry: "Supply Chain"
  }
];

const Testimonials = () => {
  const [loadedTestimonials] = useState(testimonials);

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Removed background-specific classes */}
      <div className="absolute inset-0 opacity-5 dark:opacity-2" />
      
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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center bg-indigo-100 dark:bg-indigo-900/30 rounded-full px-4 py-2 text-sm font-medium mb-6 text-[#4338CA] dark:text-indigo-300 mx-auto"
          >
            <Star size={16} className="mr-2 animate-pulse" />
            Client Success Stories
          </motion.div>
          
          <h2 className="text-3xl font-bold text-foreground dark:text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#4338CA] to-[#818CF8]">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied clients about their experience working with us.
          </p>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-[#4338CA] to-[#818CF8] mx-auto mt-6 rounded-full"
          />
        </motion.div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {loadedTestimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 overflow-hidden">
                    <CardContent className="p-0">
                      <motion.div 
                        whileHover={{ 
                          borderColor: "#4338CA",
                          y: -5,
                          boxShadow: "0 10px 25px -5px rgba(67, 56, 202, 0.1), 0 10px 10px -5px rgba(67, 56, 202, 0.05)"
                        }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 400, 
                          damping: 10 
                        }}
                        className="p-8 h-full border-t-4 border-transparent transition-colors duration-300"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <motion.div 
                              whileHover={{ scale: 1.05 }}
                              className="flex items-center justify-center w-12 h-12 rounded-md bg-indigo-50 dark:bg-indigo-900/30"
                            >
                              <Building2 className="h-6 w-6 text-[#4338CA] dark:text-indigo-300" />
                            </motion.div>
                            <div>
                              <h4 className="font-semibold text-foreground dark:text-white group-hover:text-[#4338CA] transition-colors duration-300">
                                {testimonial.name}
                              </h4>
                              <p className="text-muted-foreground dark:text-gray-400 text-sm">{testimonial.role}</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="bg-indigo-50 dark:bg-indigo-900/30 text-[#4338CA] dark:text-indigo-300 border-indigo-100 dark:border-indigo-800/50">
                            {testimonial.industry}
                          </Badge>
                        </div>
                        
                        <Separator className="my-4 bg-gray-100 dark:bg-gray-700" />
                        
                        <div className="relative">
                          <QuoteIcon className="h-8 w-8 text-indigo-200 dark:text-indigo-900/50 mb-2 absolute -top-1 -left-1 opacity-50" />
                          <p className="text-muted-foreground dark:text-gray-300 mb-0 text-base relative pl-6 pt-2">
                            "{testimonial.content}"
                          </p>
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-12 bg-white text-[#4338CA] hover:bg-[#4338CA] hover:text-white border-[#4338CA] transition-colors" />
          <CarouselNext className="hidden sm:flex -right-12 bg-white text-[#4338CA] hover:bg-[#4338CA] hover:text-white border-[#4338CA] transition-colors" />
        </Carousel>
      </motion.div>
    </section>
  );
};

export default Testimonials;
