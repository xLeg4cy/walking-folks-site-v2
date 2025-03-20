
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Partner } from "@/data/partnersData";
import { Button } from "@/components/ui/button";
import PartnerCard from "./PartnerCard";

interface PartnerCarouselProps {
  partners: Partner[];
}

const PartnerCarousel = ({ partners }: PartnerCarouselProps) => {
  const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0);
  const [flipping, setFlipping] = useState(false);
  
  const nextPartner = useCallback(() => {
    if (flipping || !partners.length) return;
    
    setFlipping(true);
    const nextIndex = (currentPartnerIndex + 1) % partners.length;
    
    setTimeout(() => {
      setCurrentPartnerIndex(nextIndex);
      setFlipping(false);
    }, 400); // Half of the flip animation duration
  }, [currentPartnerIndex, partners, flipping]);

  const prevPartner = useCallback(() => {
    if (flipping || !partners.length) return;
    
    setFlipping(true);
    const prevIndex = currentPartnerIndex === 0 ? partners.length - 1 : currentPartnerIndex - 1;
    
    setTimeout(() => {
      setCurrentPartnerIndex(prevIndex);
      setFlipping(false);
    }, 400); // Half of the flip animation duration
  }, [currentPartnerIndex, partners, flipping]);

  // Card flip animation variants
  const cardVariants = {
    hidden: { 
      rotateY: 90,
      opacity: 0,
      scale: 0.95,
    },
    visible: { 
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut" 
      }
    },
    exit: { 
      rotateY: -90,
      opacity: 0,
      scale: 0.95,
      transition: { 
        duration: 0.4,
        ease: "easeIn" 
      }
    }
  };

  if (partners.length === 0) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto relative">
      <div className="flex items-center justify-center mb-8">
        <span className="text-sm text-muted-foreground dark:text-gray-400 mr-2">
          Partner {currentPartnerIndex + 1} of {partners.length}
        </span>
        <div className="flex space-x-2">
          {partners.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentPartnerIndex 
                  ? "bg-[#4338CA]" 
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
              aria-label={`Go to partner ${index + 1}`}
              onClick={() => {
                if (index !== currentPartnerIndex && !flipping) {
                  setFlipping(true);
                  setTimeout(() => {
                    setCurrentPartnerIndex(index);
                    setFlipping(false);
                  }, 400);
                }
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative perspective-1000">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPartnerIndex}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full"
          >
            <PartnerCard partner={partners[currentPartnerIndex]} />
          </motion.div>
        </AnimatePresence>

        <div className="absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-12">
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full bg-white dark:bg-gray-800 shadow-md"
            onClick={prevPartner}
            disabled={flipping}
            aria-label="Previous partner"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-12">
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full bg-white dark:bg-gray-800 shadow-md"
            onClick={nextPartner}
            disabled={flipping}
            aria-label="Next partner"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PartnerCarousel;
