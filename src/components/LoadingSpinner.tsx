
import { Loader2 } from "lucide-react";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="animate-spin text-brand-blue">
        <Loader2 size={48} />
      </div>
    </div>
  );
};

export default LoadingSpinner;
