
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";

interface PricingProps {
  onContactClick: () => void;
}

const Pricing = ({
  onContactClick
}: PricingProps) => {
  const pricingRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    }, {
      threshold: 0.1
    });

    if (pricingRef.current) {
      observer.observe(pricingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Function to handle opening the live chat
  const handleChatOpen = () => {
    // Find the chat button and click it
    const chatButton = document.querySelector('[aria-label="Open live chat"]') as HTMLButtonElement;
    if (chatButton) {
      chatButton.click();
    }
  };

  return (
    <div id="pricing" className="py-24 bg-background dark:bg-gray-900">
      <div ref={pricingRef} className="section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 dark:text-white">
            {t('pricing.title')}
          </h2>
          <p className="text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto">
            {t('pricing.description')}
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-semibold mb-4 dark:text-white">
              {t('pricing.fixed.title')}
            </h3>
            <p className="text-muted-foreground dark:text-gray-300 mb-6">
              {t('pricing.fixed.description')}
            </p>
            <div className="space-y-4">
              <Button
                onClick={onContactClick}
                className="w-full bg-brand-purple-medium hover:bg-brand-purple-dark text-white"
              >
                {t('nav.contact')}
              </Button>
              <Button
                onClick={handleChatOpen}
                variant="outline"
                className="w-full"
              >
                Live Chat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
