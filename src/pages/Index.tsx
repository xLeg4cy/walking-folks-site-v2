
import { Suspense, useEffect, useState, useCallback, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LoadingSpinner from '@/components/LoadingSpinner';
import TopProgressBar from '@/components/TopProgressBar';
import { HeroSkeleton, ServicesSkeleton, TestimonialSkeleton } from '@/components/SkeletonLoaders';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import { lazy } from 'react';
import { useToast } from "@/hooks/use-toast";

// Lazy load non-critical components
const About = lazy(() => import('@/components/About'));
const TechnologyStack = lazy(() => import('@/components/TechnologyStack'));
const Contact = lazy(() => import('@/components/Contact'));
const Footer = lazy(() => import('@/components/Footer'));
const CookieConsent = lazy(() => import('@/components/CookieConsent'));
const ScrollToTop = lazy(() => import('@/components/ScrollToTop'));
const LiveChat = lazy(() => import('@/components/LiveChat'));

const Index = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const loadingRef = useRef(null);
  const { toast } = useToast();

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

    return () => {
      clearTimeout(timer);
      document.documentElement.style.scrollBehavior = '';
      document.head.removeChild(fontPreloadLink);
    };
  }, []);

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const [target] = entries;
    if (target.isIntersecting && hasMore && !isLoadingMore) {
      setIsLoadingMore(true);
      setTimeout(() => {
        setPage(prev => {
          if (prev >= 3) { // Limit to 3 pages for demo
            setHasMore(false);
            toast({
              title: "You've reached the end!",
              description: "No more content to load.",
              duration: 3000,
            });
            return prev;
          }
          return prev + 1;
        });
        setIsLoadingMore(false);
      }, 1000); // Add a slight delay to prevent rapid loading
    }
  }, [hasMore, isLoadingMore, toast]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '20px',
      threshold: 0.1,
    });

    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    return () => observer.disconnect();
  }, [handleObserver]);

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
        
        <main>
          <Suspense fallback={<HeroSkeleton />}>
            <Hero onContactClick={() => setIsContactOpen(true)} />
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
              
              {Array.from({ length: page }).map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Suspense fallback={<ServicesSkeleton />}>
                    <Services />
                  </Suspense>

                  <Suspense fallback={<TestimonialSkeleton />}>
                    <Testimonials />
                  </Suspense>

                  <FAQ />
                </motion.div>
              ))}
            </motion.div>
          </Suspense>

          {hasMore && (
            <div 
              ref={loadingRef}
              className="flex justify-center items-center py-10"
            >
              {isLoadingMore ? <LoadingSpinner /> : null}
            </div>
          )}

          {isContactOpen && (
            <Suspense fallback={<LoadingSpinner />}>
              <Contact onClose={() => setIsContactOpen(false)} />
            </Suspense>
          )}
        </main>

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
