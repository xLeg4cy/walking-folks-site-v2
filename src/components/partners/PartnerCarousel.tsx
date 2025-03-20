
import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Partner } from "@/data/partnersData";
import { Button } from "@/components/ui/button";
import PartnerCard from "./PartnerCard";
import { useIsMobile } from "@/hooks/use-mobile";

interface PartnerCarouselProps {
  partners: Partner[];
}

const PartnerCarousel = ({ partners }: PartnerCarouselProps) => {
  const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isMobile = useIsMobile();
  
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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevPartner();
      } else if (e.key === 'ArrowRight') {
        nextPartner();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [prevPartner, nextPartner]);

  // Card flip animation variants - enhanced with more fluid motion
  const cardVariants = {
    hidden: { 
      rotateY: 90,
      opacity: 0,
      scale: 0.95,
      filter: 'blur(3px)'
    },
    visible: { 
      rotateY: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: { 
        duration: 0.8,
        ease: "easeOut" 
      }
    },
    exit: { 
      rotateY: -90,
      opacity: 0,
      scale: 0.95,
      filter: 'blur(3px)',
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
        <div className="flex items-center">
          <span className="text-sm text-muted-foreground dark:text-gray-400">
            Partner {currentPartnerIndex + 1} of {partners.length}
          </span>
        </div>
      </div>

      <div 
        className="relative perspective-1000"
        role="region"
        aria-roledescription="carousel"
        aria-label="Partners carousel"
      >
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

        <div className={`absolute top-1/2 ${isMobile ? "-left-2" : "-left-4 lg:-left-12"}`}>
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full bg-white dark:bg-gray-800 shadow-md focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-[#4338CA]"
            onClick={prevPartner}
            disabled={flipping}
            aria-label="Previous partner"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </div>

        <div className={`absolute top-1/2 ${isMobile ? "-right-2" : "-right-4 lg:-right-12"}`}>
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full bg-white dark:bg-gray-800 shadow-md focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-[#4338CA]"
            onClick={nextPartner}
            disabled={flipping}
            aria-label="Next partner"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Accessibility instructions */}
      <div className="sr-only">
        Use left and right arrow keys to navigate between partners
      </div>
    </div>
  );
};

export default PartnerCarousel;
