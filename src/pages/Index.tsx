import { Suspense, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import LoadingSpinner from '@/components/LoadingSpinner';
import { HeroSkeleton, ServicesSkeleton, TestimonialSkeleton } from '@/components/SkeletonLoaders';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import { lazy } from 'react';

// Lazy load non-critical components
const About = lazy(() => import('@/components/About'));
const TechnologyStack = lazy(() => import('@/components/TechnologyStack'));
const Contact = lazy(() => import('@/components/Contact'));
const LiveChat = lazy(() => import('@/components/LiveChat'));

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    const fontPreloadLink = document.createElement('link');
    fontPreloadLink.rel = 'preload';
    fontPreloadLink.as = 'font';
    fontPreloadLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
    fontPreloadLink.crossOrigin = 'anonymous';
    document.head.appendChild(fontPreloadLink);

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

    return () => {
      clearTimeout(timer);
      document.documentElement.style.scrollBehavior = '';
      document.head.removeChild(fontPreloadLink);
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
          <title>Lovable - Modern Web Solutions</title>
          <meta name="description" content="Professional web development services with modern solutions" />
          <meta httpEquiv="Content-Security-Policy" 
                content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://*.googleapis.com;" 
          />
          <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
          <meta httpEquiv="X-Frame-Options" content="DENY" />
          <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
          <meta name="referrer" content="strict-origin-when-cross-origin" />
          <link 
            rel="preload" 
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            as="style"
          />
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

              <Suspense fallback={<TestimonialSkeleton />}>
                <Testimonials />
              </Suspense>

              <FAQ />
            </motion.div>
          </Suspense>
        </main>

        <Suspense fallback={null}>
          <LiveChat />
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
