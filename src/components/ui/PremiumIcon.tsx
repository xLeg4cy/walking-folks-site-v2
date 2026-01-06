import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MouseEvent, useRef } from 'react';

interface PremiumIconProps {
    icon: LucideIcon;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    iconClassName?: string;
}

const PremiumIcon = ({
    icon: Icon,
    size = 'md',
    className,
    iconClassName
}: PremiumIconProps) => {
    const ref = useRef<HTMLDivElement>(null);

    // Physics values for 3D Tilt
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Heavy springs for that "premium" weighted feel
    const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 1 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 1 });

    // Transform values based on mouse position
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    // Glare effect movement
    const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
    const glareY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        // Calculate normalized position (-0.5 to 0.5)
        const normalizedX = (e.clientX - rect.left) / width - 0.5;
        const normalizedY = (e.clientY - rect.top) / height - 0.5;

        x.set(normalizedX);
        y.set(normalizedY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const sizeClasses = {
        sm: 'w-10 h-10',
        md: 'w-16 h-16', // Slightly larger for better tilt effect
        lg: 'w-24 h-24'
    };

    const iconSizes = {
        sm: 'w-5 h-5',
        md: 'w-8 h-8',
        lg: 'w-12 h-12'
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={cn("relative group perspective-1000 z-20", className)} // z-20 to ensure it's above other elements
        >
            {/* Outer ambient glow - reacts to hover state only */}
            <div
                className="absolute inset-0 bg-brand-electric/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ transform: "translateZ(-20px)" }}
            />

            {/* Main container with glass effect */}
            <div className={cn(
                "relative flex items-center justify-center rounded-2xl transition-all duration-300",
                "bg-gradient-to-br from-white/80 to-white/40 dark:from-card/80 dark:to-card/40",
                "backdrop-blur-md shadow-lg",
                "border border-white/40 dark:border-white/10",
                "group-hover:border-brand-electric/50",
                sizeClasses[size]
            )}>

                {/* Dynamic Glare Effect */}
                <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none overflow-hidden"
                    style={{
                        background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.4) 0%, transparent 80%)`,
                        mixBlendMode: "overlay"
                    }}
                />

                {/* Inner depth shadow */}
                <div className="absolute inset-0 rounded-2xl bg-black/5 dark:bg-black/20 inset-shadow pointer-events-none" />

                {/* The Icon - Floats above */}
                <motion.div
                    style={{ transform: "translateZ(30px)" }} // Physical pop effect
                >
                    <Icon
                        className={cn(
                            "relative z-10 transition-colors duration-300 drop-shadow-md",
                            "text-brand-electric dark:text-brand-purple-light",
                            "group-hover:text-brand-electric dark:group-hover:text-white",
                            "group-hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]",
                            iconSizes[size],
                            iconClassName
                        )}
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default PremiumIcon;
