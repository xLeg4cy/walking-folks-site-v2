
import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { toast } from "sonner";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check for existing consent with try-catch for localStorage access
    try {
      const hasConsent = localStorage.getItem("cookieConsent");
      if (!hasConsent) {
        setIsVisible(true);
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }

    // Cleanup function to prevent memory leaks
    return () => {
      setIsVisible(false);
    };
  }, []);

  const handleAccept = useCallback(() => {
    try {
      localStorage.setItem("cookieConsent", "true");
      setIsVisible(false);
      toast.success("Cookie preferences saved!");
    } catch (error) {
      console.error("Error saving cookie consent:", error);
      toast.error("Failed to save preferences. Please try again.");
    }
  }, []);

  const handleDecline = useCallback(() => {
    try {
      localStorage.setItem("cookieConsent", "false");
      setIsVisible(false);
      toast.success("Cookie preferences saved!");
    } catch (error) {
      console.error("Error saving cookie consent:", error);
      toast.error("Failed to save preferences. Please try again.");
    }
  }, []);

  const handleClose = useCallback(() => {
    setIsVisible(false);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 md:p-6 z-50 animate-slide-up"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <h3 id="cookie-consent-title" className="text-lg font-semibold text-brand-navy dark:text-white mb-2">
            We value your privacy
          </h3>
          <p id="cookie-consent-description" className="text-gray-600 dark:text-gray-300">
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={handleDecline}
            className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
            type="button"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-2 bg-[#4338CA] hover:bg-[#818CF8] dark:bg-[#818CF8] dark:hover:bg-[#4338CA] text-white rounded-lg transition-colors"
            type="button"
          >
            Accept
          </button>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors text-gray-500 dark:text-gray-400"
            aria-label="Close cookie consent dialog"
            type="button"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
