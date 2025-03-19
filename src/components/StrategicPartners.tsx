
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Award, Star } from "lucide-react";

interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  since: string;
  featured: boolean;
}

const partners: Partner[] = [{
  id: "xcape-tours",
  name: "Xcape Tours",
  logo: "/lovable-uploads/db5fc616-d92f-40d8-a9f1-0c815842db57.png",
  description: "A key strategic partner in the travel industry. Xcape Tours has been working with us to create innovative digital experiences for adventure seekers and travelers worldwide.",
  website: "https://example.com",
  since: "2024",
  featured: true
}];

const StrategicPartners = () => {
  const [visiblePartners, setVisiblePartners] = useState<Partner[]>([]);
  useEffect(() => {
    setVisiblePartners(partners);
  }, []);

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

        {visiblePartners.length === 1 ?
      <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="max-w-4xl mx-auto">
            <Card className="border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 flex items-center justify-center p-8 bg-gray-50 dark:bg-gray-800/80">
                  <motion.div whileHover={{
                scale: 1.05
              }} transition={{
                type: "spring",
                stiffness: 300
              }} className="relative">
                    {/* Badge moved above the logo instead of on the right */}
                    <div className="mb-4 text-center">
                      <Badge className="bg-[#4338CA] hover:bg-[#4338CA]/90 text-white">
                        <Star className="h-3 w-3 mr-1 fill-current" /> Featured Partner
                      </Badge>
                    </div>
                    <img src={visiblePartners[0].logo} alt={visiblePartners[0].name} className="max-w-[180px] max-h-[120px] object-contain" />
                  </motion.div>
                </div>
                <div className="lg:w-2/3 p-6 lg:p-8">
                  <CardHeader className="p-0 pb-4">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-2xl font-bold text-brand-navy dark:text-white">
                        {visiblePartners[0].name}
                      </CardTitle>
                      <Badge variant="outline" className="text-muted-foreground">
                        Partner since {visiblePartners[0].since}
                      </Badge>
                    </div>
                    <CardDescription className="text-muted-foreground dark:text-gray-400 mt-1">
                      Strategic Technology Partner
                    </CardDescription>
                  </CardHeader>
                  <Separator className="my-4" />
                  <CardContent className="p-0 py-4">
                    <p className="text-foreground dark:text-gray-300 leading-relaxed">
                      {visiblePartners[0].description}
                    </p>
                  </CardContent>
                  <CardFooter className="p-0 pt-2">
                    <a href={visiblePartners[0].website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#4338CA] hover:text-[#564ED1] dark:text-brand-purple-light dark:hover:text-white transition-colors">
                      Visit Partner Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </CardFooter>
                </div>
              </div>
            </Card>
            
            <div className="text-center mt-10">
              
            </div>
          </motion.div> :
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visiblePartners.map(partner => <motion.div key={partner.id} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <img src={partner.logo} alt={partner.name} className="h-12 object-contain" />
                    {partner.featured && <Badge className="bg-[#4338CA]">Featured</Badge>}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {partner.description}
                  </p>
                  <a href={partner.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#4338CA] hover:text-[#564ED1] dark:text-brand-purple-light dark:hover:text-white text-sm">
                    Learn more
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </motion.div>)}
          </div>}
      </motion.div>
    </section>;
};

export default StrategicPartners;
