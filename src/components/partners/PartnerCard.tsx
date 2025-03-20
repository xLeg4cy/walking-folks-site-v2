
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Partner } from "@/data/partnersData";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface PartnerCardProps {
  partner: Partner;
}

const PartnerCard = ({ partner }: PartnerCardProps) => {
  return (
    <Card className="border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/3 flex items-center justify-center p-8 bg-gray-50 dark:bg-gray-800/80">
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            transition={{ type: "spring", stiffness: 300 }} 
            className="relative"
          >
            <div className="mb-4 text-center">
              {partner.featured && (
                <Badge className="bg-[#4338CA] hover:bg-[#4338CA]/90 text-white">
                  <Star className="h-3 w-3 mr-1 fill-current" /> Featured Partner
                </Badge>
              )}
            </div>
            <img 
              src={partner.logo} 
              alt={partner.name} 
              className="max-w-[180px] max-h-[120px] object-contain" 
            />
          </motion.div>
        </div>
        <div className="lg:w-2/3 p-6 lg:p-8">
          <CardHeader className="p-0 pb-4">
            <div className="flex justify-between items-start">
              <CardTitle className="text-2xl font-bold text-brand-navy dark:text-white">
                {partner.name}
              </CardTitle>
              <Badge variant="outline" className="text-muted-foreground">
                Partner since {partner.since}
              </Badge>
            </div>
            <CardDescription className="text-muted-foreground dark:text-gray-400 mt-1">
              {partner.id === "xcape-tours" 
                ? "Strategic Travel Partner" 
                : "Strategic Software Partner"}
            </CardDescription>
          </CardHeader>
          <Separator className="my-4" />
          <CardContent className="p-0 py-4">
            <p className="text-foreground dark:text-gray-300 leading-relaxed">
              {partner.description}
            </p>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default PartnerCard;
