
import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
      <div className="flex gap-3 md:gap-4 perspective-1000">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ y: 0 }}
            animate={{
              y: [-20, 0, -20],
              backgroundColor: [
                "#4338CA", // Deep indigo
                "#6366F1", // Medium indigo
                "#818CF8", // Light indigo
                "#6366F1", // Back to medium
                "#4338CA", // Back to deep
              ],
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
              delay: i * 0.1,
            }}
            className="w-3 h-3 md:w-4 md:h-4 rounded-full shadow-md"
          />
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-6 text-sm md:text-base text-gray-600 dark:text-gray-300 font-medium"
      >
        Loading amazing things...
      </motion.p>
    </div>
  );
};

export default LoadingSpinner;
