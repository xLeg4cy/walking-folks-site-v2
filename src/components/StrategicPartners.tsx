
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Award } from "lucide-react";
import { partners } from "@/data/partnersData";
import PartnerCarousel from "./partners/PartnerCarousel";
import { useTranslation } from "react-i18next";

const StrategicPartners = () => {
  const [visiblePartners, setVisiblePartners] = useState(partners);
  const { t } = useTranslation();

  useEffect(() => {
    setVisiblePartners(partners);
  }, []);

  // Animation variants for enhanced visual effects
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section
      id="partners"
      className="bg-gray-50/50 dark:bg-gray-900/30 relative overflow-hidden"
      aria-labelledby="partners-heading"
    >
      {/* Background patterns for visual enhancement */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/5 to-transparent dark:from-transparent dark:via-indigo-900/5 dark:to-transparent" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iLjAyIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40 dark:opacity-20" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >

          <motion.h2
            id="partners-heading"
            variants={childVariants}
            className="text-3xl font-bold text-foreground dark:text-white mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#4338CA] to-[#818CF8]"
          >
            {t('partners.title')}
          </motion.h2>

          <motion.p
            variants={childVariants}
            className="text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto"
          >
            {t('partners.description')}
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-[#4338CA] to-[#818CF8] mx-auto mt-6 rounded-full"
            aria-hidden="true"
          />
        </motion.div>

        {visiblePartners.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="partner-carousel-container"
          >
            <PartnerCarousel partners={visiblePartners} />
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default StrategicPartners;
