
import { Suspense, useEffect, useState, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LoadingSpinner from '@/components/LoadingSpinner';
import TopProgressBar from '@/components/TopProgressBar';

// Lazy load non-critical components
const About = lazy(() => import('@/components/About'));
const Services = lazy(() => import('@/components/Services'));
const Pricing = lazy(() => import('@/components/Pricing'));
const TechnologyStack = lazy(() => import('@/components/TechnologyStack'));
const Contact = lazy(() => import('@/components/Contact'));
const Footer = lazy(() => import('@/components/Footer'));
const Testimonials = lazy(() => import('@/components/Testimonials'));
const FAQ = lazy(() => import('@/components/FAQ'));
const CookieConsent = lazy(() => import('@/components/CookieConsent'));
const ScrollToTop = lazy(() => import('@/components/ScrollToTop'));
const LiveChat = lazy(() => import('@/components/LiveChat'));
const Team = lazy(() => import('@/components/Team'));

// Skeleton loader component
const SkeletonLoader = () => (
  <div className="animate-pulse space-y-4 p-4">
    <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
  </div>
);

const Index = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    // Preload critical fonts
    const fontPreloadLink = document.createElement('link');
    fontPreloadLink.rel = 'preload';
    fontPreloadLink.as = 'font';
    fontPreloadLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
    fontPreloadLink.crossOrigin = 'anonymous';
    document.head.appendChild(fontPreloadLink);

    // Simulate initial loading with a minimum duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0;
        if (isVisible) {
          section.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
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
        className="min-h-screen bg-background text-foreground"
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

        <TopProgressBar />
        <Navbar onContactClick={() => setIsContactOpen(true)} />
        
        <Hero onContactClick={() => setIsContactOpen(true)} />

        <Suspense fallback={<SkeletonLoader />}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <About />
            <TechnologyStack />
            <Services />
            <Team />
            <Testimonials />
            <Pricing onContactClick={() => setIsContactOpen(true)} />
            <FAQ />
          </motion.div>
        </Suspense>

        {isContactOpen && (
          <Suspense fallback={<SkeletonLoader />}>
            <Contact onClose={() => setIsContactOpen(false)} />
          </Suspense>
        )}

        <Suspense fallback={<SkeletonLoader />}>
          <Footer />
        </Suspense>

        <Suspense fallback={null}>
          <ScrollToTop />
          <CookieConsent />
          <LiveChat />
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
