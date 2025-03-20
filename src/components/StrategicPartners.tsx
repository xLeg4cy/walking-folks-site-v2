
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Award, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  since: string;
  featured: boolean;
}

const partners: Partner[] = [
  {
    id: "xcape-tours",
    name: "Xcape Tours",
    logo: "/lovable-uploads/db5fc616-d92f-40d8-a9f1-0c815842db57.png",
    description: "A key strategic partner in the travel industry. Xcape Tours has been working with us to create innovative digital experiences for adventure seekers and travelers worldwide.",
    website: "https://example.com",
    since: "2024",
    featured: true
  },
  {
    id: "larasoft",
    name: "Larasoft",
    logo: "/lovable-uploads/46aad1ea-7d79-4b50-9b66-be6cf014bc64.png",
    description: "A software-based company specializing in the lenders and merchants sector. Larasoft has partnered with us to develop innovative financial technology solutions.",
    website: "https://example.com",
    since: "2025",
    featured: false
  }
];

const StrategicPartners = () => {
  const [visiblePartners, setVisiblePartners] = useState<Partner[]>([]);
  const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    setVisiblePartners(partners);
  }, []);

  const nextPartner = useCallback(() => {
    if (flipping || !visiblePartners.length) return;
    
    setFlipping(true);
    const nextIndex = (currentPartnerIndex + 1) % visiblePartners.length;
    
    setTimeout(() => {
      setCurrentPartnerIndex(nextIndex);
      setFlipping(false);
    }, 400); // Half of the flip animation duration
  }, [currentPartnerIndex, visiblePartners, flipping]);

  const prevPartner = useCallback(() => {
    if (flipping || !visiblePartners.length) return;
    
    setFlipping(true);
    const prevIndex = currentPartnerIndex === 0 ? visiblePartners.length - 1 : currentPartnerIndex - 1;
    
    setTimeout(() => {
      setCurrentPartnerIndex(prevIndex);
      setFlipping(false);
    }, 400); // Half of the flip animation duration
  }, [currentPartnerIndex, visiblePartners, flipping]);

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

  return <section id="partners" className="py-20 bg-gray-50/50 dark:bg-gray-900/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/5 to-transparent dark:from-transparent dark:via-indigo-900/5 dark:to-transparent" />
      
      <motion.div initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1
    }} transition={{
      duration: 0.5
    }} viewport={{
      once: true
    }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} viewport={{
        once: true
      }} className="text-center mb-12">
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

          <motion.div initial={{
          width: 0
        }} whileInView={{
          width: "100px"
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="h-1 bg-gradient-to-r from-[#4338CA] to-[#818CF8] mx-auto mt-6 rounded-full" />
        </motion.div>

        {visiblePartners.length > 0 && (
          <motion.div 
            initial={{
              opacity: 0,
              y: 20
            }} 
            whileInView={{
              opacity: 1,
              y: 0
            }} 
            transition={{
              duration: 0.6
            }} 
            viewport={{
              once: true
            }} 
            className="max-w-4xl mx-auto relative"
          >
            <div className="flex items-center justify-center mb-8">
              <span className="text-sm text-muted-foreground dark:text-gray-400 mr-2">
                Partner {currentPartnerIndex + 1} of {visiblePartners.length}
              </span>
              <div className="flex space-x-2">
                {visiblePartners.map((_, index) => (
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
                  <Card className="border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800">
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-1/3 flex items-center justify-center p-8 bg-gray-50 dark:bg-gray-800/80">
                        <motion.div whileHover={{
                          scale: 1.05
                        }} transition={{
                          type: "spring",
                          stiffness: 300
                        }} className="relative">
                          <div className="mb-4 text-center">
                            {visiblePartners[currentPartnerIndex].featured && (
                              <Badge className="bg-[#4338CA] hover:bg-[#4338CA]/90 text-white">
                                <Star className="h-3 w-3 mr-1 fill-current" /> Featured Partner
                              </Badge>
                            )}
                          </div>
                          <img 
                            src={visiblePartners[currentPartnerIndex].logo} 
                            alt={visiblePartners[currentPartnerIndex].name} 
                            className="max-w-[180px] max-h-[120px] object-contain" 
                          />
                        </motion.div>
                      </div>
                      <div className="lg:w-2/3 p-6 lg:p-8">
                        <CardHeader className="p-0 pb-4">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-2xl font-bold text-brand-navy dark:text-white">
                              {visiblePartners[currentPartnerIndex].name}
                            </CardTitle>
                            <Badge variant="outline" className="text-muted-foreground">
                              Partner since {visiblePartners[currentPartnerIndex].since}
                            </Badge>
                          </div>
                          <CardDescription className="text-muted-foreground dark:text-gray-400 mt-1">
                            {visiblePartners[currentPartnerIndex].id === "xcape-tours" 
                              ? "Strategic Travel Partner" 
                              : "Strategic Software Partner"}
                          </CardDescription>
                        </CardHeader>
                        <Separator className="my-4" />
                        <CardContent className="p-0 py-4">
                          <p className="text-foreground dark:text-gray-300 leading-relaxed">
                            {visiblePartners[currentPartnerIndex].description}
                          </p>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
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
          </motion.div>
        )}
      </motion.div>
    </section>;
};

export default StrategicPartners;
