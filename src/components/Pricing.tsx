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
  const {
    t
  } = useTranslation();
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
  return;
};
export default Pricing;