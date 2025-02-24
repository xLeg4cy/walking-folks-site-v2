
import { Suspense, useEffect, useState, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LoadingSpinner from '@/components/LoadingSpinner';
import TopProgressBar from '@/components/TopProgressBar';
import { HeroSkeleton, ServicesSkeleton, TestimonialSkeleton } from '@/components/SkeletonLoaders';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Lazy load non-critical components
const About = lazy(() => import('@/components/About'));
const Services = lazy(() => import('@/components/Services'));
const TechnologyStack = lazy(() => import('@/components/TechnologyStack'));
const Contact = lazy(() => import('@/components/Contact'));
const Footer = lazy(() => import('@/components/Footer'));
const Testimonials = lazy(() => import('@/components/Testimonials'));
const FAQ = lazy(() => import('@/components/FAQ'));
const CookieConsent = lazy(() => import('@/components/CookieConsent'));
const ScrollToTop = lazy(() => import('@/components/ScrollToTop'));
const LiveChat = lazy(() => import('@/components/LiveChat'));

const Index = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.2 });

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

        <TopProgressBar />
        <Navbar onContactClick={() => setIsContactOpen(true)} />
        
        <Suspense fallback={<HeroSkeleton />}>
          <Hero onContactClick={() => setIsContactOpen(true)} />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <About />
            <TechnologyStack />
            
            <div ref={servicesRef}>
              <Suspense fallback={<ServicesSkeleton />}>
                {isServicesInView && <Services />}
              </Suspense>
            </div>

            <div ref={testimonialsRef}>
              <Suspense fallback={<TestimonialSkeleton />}>
                {isTestimonialsInView && <Testimonials />}
              </Suspense>
            </div>

            <FAQ />
          </motion.div>
        </Suspense>

        {isContactOpen && (
          <Suspense fallback={<LoadingSpinner />}>
            <Contact onClose={() => setIsContactOpen(false)} />
          </Suspense>
        )}

        <Suspense fallback={null}>
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
