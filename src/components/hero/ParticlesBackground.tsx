
import { useCallback, useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';
import { useMemo } from 'react';
import { useMobile } from '@/hooks/use-mobile';

const ParticlesBackground = () => {
  const isMobile = useMobile();
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = useMemo(() => {
    // Reduce particles count on mobile for better performance
    const particleCount = isMobile ? 40 : 100;
    const particleSize = isMobile ? { min: 1, max: 2 } : { min: 1, max: 3 };
    const particleSpeed = isMobile ? 1 : 1.5;
    
    return {
      fullScreen: false,
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60, // Reduced from 120 for better performance
      particles: {
        color: {
          value: "#4338CA",
        },
        links: {
          color: "#4338CA",
          distance: isMobile ? 100 : 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          direction: "none",
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: particleSpeed,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: particleCount,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: particleSize,
        },
      },
      detectRetina: true,
    };
  }, [isMobile]);

  if (!isClient) {
    // Server-side or initial render, return just the gradient
    return <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/30 to-transparent dark:from-indigo-900/10 dark:to-transparent" />;
  }

  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/30 to-transparent dark:from-indigo-900/10 dark:to-transparent" />
      {isClient && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          className="absolute inset-0 -z-0"
        />
      )}
    </>
  );
};

export default ParticlesBackground;
