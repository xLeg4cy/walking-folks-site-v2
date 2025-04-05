
import { Suspense, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import LoadingSpinner from '@/components/LoadingSpinner';
import { HeroSkeleton, ServicesSkeleton, TestimonialSkeleton } from '@/components/SkeletonLoaders';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import StrategicPartners from '@/components/StrategicPartners';
import { lazy } from 'react';

// Lazy load non-critical components
const About = lazy(() => import('@/components/About'));
const TechnologyStack = lazy(() => import('@/components/TechnologyStack'));
const Contact = lazy(() => import('@/components/Contact'));
const LiveChat = lazy(() => import('@/components/LiveChat'));
// const Blog = lazy(() => import('@/components/Blog')); // Commented out blog component

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    // Track if user has interacted with the page
    const handleInteraction = () => setHasInteracted(true);
    window.addEventListener('scroll', handleInteraction, { once: true });
    window.addEventListener('click', handleInteraction, { once: true });

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Check if there's a hash in the URL to scroll to that section
    const hashId = window.location.hash.substring(1);
    if (hashId) {
      setTimeout(() => {
        const element = document.getElementById(hashId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 1500); // Give time for components to load
    }

    // Register performance metrics
    if ('performance' in window && 'getEntriesByType' in performance) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfEntries = performance.getEntriesByType('navigation');
          if (perfEntries.length > 0) {
            const metrics = perfEntries[0] as PerformanceNavigationTiming;
            console.info('Page Load Metrics:', {
              'TTFB (ms)': Math.round(metrics.responseStart),
              'DOM Content Loaded (ms)': Math.round(metrics.domContentLoadedEventEnd),
              'Load Event (ms)': Math.round(metrics.loadEventEnd),
            });

            // Report metrics if Web Vitals API is available
            if ('web-vitals' in window) {
              import('web-vitals').then(({ getCLS, getFID, getLCP }) => {
                getCLS(console.info);
                getFID(console.info);
                getLCP(console.info);
              });
            }
          }
        }, 0);
      });
    }

    return () => {
      clearTimeout(timer);
      document.documentElement.style.scrollBehavior = '';
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('click', handleInteraction);
    };
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-background text-foreground dark:bg-gray-900"
      >
        <Helmet>
          <title>Walking Folks - Modern Web Solutions</title>
          <meta name="description" content="Professional web development services with modern solutions and expert consulting by Walking Folks." />
          <meta httpEquiv="Content-Security-Policy" 
                content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://*.googleapis.com;" 
          />
          <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
          <meta httpEquiv="X-Frame-Options" content="DENY" />
          <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
          <meta name="referrer" content="strict-origin-when-cross-origin" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        </Helmet>
        
        <main>
          <Suspense fallback={<HeroSkeleton />}>
            <Hero />
          </Suspense>

          <Suspense fallback={<LoadingSpinner />}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-20"
            >
              <About />
              <TechnologyStack />
              
              <Suspense fallback={<ServicesSkeleton />}>
                <Services />
              </Suspense>
              
              <StrategicPartners />

              <Suspense fallback={<TestimonialSkeleton />}>
                <Testimonials />
              </Suspense>

              <FAQ />
            </motion.div>
          </Suspense>
        </main>

        {/* Only load LiveChat once user has interacted with the page */}
        {hasInteracted && (
          <Suspense fallback={null}>
            <LiveChat />
          </Suspense>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
