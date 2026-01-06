import { motion } from 'framer-motion';
import { Laptop, Smartphone } from 'lucide-react';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

const HeroImage = () => {
  return (
    <motion.div
      className="flex-1 relative w-full px-4 sm:px-0"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <SpotlightCard className="group p-3 md:p-4">
          <img
            src="/lovable-uploads/e92ee987-29bd-48b1-9ef2-a07dc0b8e844.png"
            srcSet="/lovable-uploads/e92ee987-29bd-48b1-9ef2-a07dc0b8e844.png 1x, /lovable-uploads/e92ee987-29bd-48b1-9ef2-a07dc0b8e844.png 2x"
            alt="Illustration of person working"
            width="600"
            height="400"
            loading="eager"
            fetchPriority="high"
            className="w-full h-auto rounded-xl"
          />
        </SpotlightCard>
      </motion.div>
    </motion.div>
  );
};

export default HeroImage;
