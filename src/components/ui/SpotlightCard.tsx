import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useMotionTemplate } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SpotlightCardProps {
    children: React.ReactNode;
    className?: string;
    spotlightColor?: string;
}

export const SpotlightCard = ({
    children,
    className,
    spotlightColor = "rgba(99, 102, 241, 0.15)" // Brand electric blue default
}: SpotlightCardProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => setOpacity(0);

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "relative rounded-2xl border border-border bg-card overflow-hidden group hover:border-border/80 transition-colors duration-300",
                className
            )}
        >
            {/* Spotlight Gradient - Follows Mouse */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`
                }}
            />

            {/* Content */}
            <div className="relative h-full">
                {children}
            </div>
        </div>
    );
};
