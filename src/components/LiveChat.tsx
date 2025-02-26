
import { MessageCircleMore } from 'lucide-react';
import { motion } from 'framer-motion';

const LiveChat = () => {
  // Placeholder phone number - replace with your actual WhatsApp business number
  const phoneNumber = "1234567890";
  
  const handleWhatsAppClick = () => {
    // Format: https://wa.me/<number>
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 10,
          stiffness: 100,
          restDelta: 0.001
        }
      }}
      className="fixed bottom-4 right-4 z-50"
    >
      <button
        onClick={handleWhatsAppClick}
        className="bg-[#4338CA] hover:bg-[#818CF8] dark:bg-[#818CF8] dark:hover:bg-[#4338CA] text-white p-4 rounded-full shadow-lg transition-all hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4338CA] dark:focus:ring-[#818CF8]"
        aria-label="Open WhatsApp chat"
      >
        <MessageCircleMore size={24} />
      </button>
    </motion.div>
  );
};

export default LiveChat;
