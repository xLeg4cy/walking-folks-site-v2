
import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
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
  const [autoplay, setAutoplay] = useState(true);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isMobile = useIsMobile();
  
  const rotationInterval = 5000; // 5 seconds per partner
  
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

  // Setup autoplay rotation
  useEffect(() => {
    if (autoplay && partners.length > 1) {
      autoplayTimerRef.current = setInterval(() => {
        if (!document.hidden) {
          nextPartner();
        }
      }, rotationInterval);
    }
    
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [autoplay, nextPartner, partners.length]);

  // Pause autoplay when user interacts with carousel
  const handleUserInteraction = () => {
    setAutoplay(false);
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }
  };

  // Toggle autoplay function
  const toggleAutoplay = () => {
    setAutoplay(prev => !prev);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevPartner();
        handleUserInteraction();
      } else if (e.key === 'ArrowRight') {
        nextPartner();
        handleUserInteraction();
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
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
          <div className="flex items-center">
            <span className="text-sm text-muted-foreground dark:text-gray-400 mr-2">
              Partner {currentPartnerIndex + 1} of {partners.length}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleAutoplay}
              className="h-8 w-8 rounded-full"
              aria-label={autoplay ? "Pause auto-rotation" : "Play auto-rotation"}
            >
              {autoplay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
          </div>
          
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
                  handleUserInteraction();
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
      </div>

      {/* Progress indicator showing auto-rotation progress */}
      {autoplay && (
        <motion.div 
          className="h-1 bg-gray-200 dark:bg-gray-700 mb-4 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="h-full bg-gradient-to-r from-[#4338CA] to-[#818CF8] rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: rotationInterval / 1000, 
              ease: "linear", 
              repeat: Infinity 
            }}
          />
        </motion.div>
      )}

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
            onClick={() => {
              handleUserInteraction();
              prevPartner();
            }}
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
            onClick={() => {
              handleUserInteraction();
              nextPartner();
            }}
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
