
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Award } from "lucide-react";
import { partners } from "@/data/partnersData";
import PartnerCarousel from "./partners/PartnerCarousel";

const StrategicPartners = () => {
  const [visiblePartners, setVisiblePartners] = useState(partners);

  useEffect(() => {
    setVisiblePartners(partners);
  }, []);

  return (
    <section id="partners" className="py-20 bg-gray-50/50 dark:bg-gray-900/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/5 to-transparent dark:from-transparent dark:via-indigo-900/5 dark:to-transparent" />
      
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
          <div className="inline-flex items-center bg-black/5 dark:bg-white/5 rounded-full px-6 py-2 text-sm font-medium mb-8">
            <Award size={16} className="mr-2 text-brand-navy dark:text-brand-purple-light" />
            Strategic Alliances
          </div>
          <h2 className="text-3xl font-bold text-foreground dark:text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#4338CA] to-[#818CF8]">
            Our Trusted Partners
          </h2>
          <p className="text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto">
            Collaborating with industry leaders to deliver exceptional value and innovative solutions
          </p>

          <motion.div 
            initial={{ width: 0 }} 
            whileInView={{ width: "100px" }} 
            transition={{ duration: 0.8, delay: 0.2 }} 
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-[#4338CA] to-[#818CF8] mx-auto mt-6 rounded-full" 
          />
        </motion.div>

        {visiblePartners.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }}
          >
            <PartnerCarousel partners={visiblePartners} />
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default StrategicPartners;
