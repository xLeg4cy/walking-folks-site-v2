
import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import ScrollToTop from '@/components/ScrollToTop';
import TopProgressBar from '@/components/TopProgressBar';
import { lazy, Suspense } from 'react';

const Contact = lazy(() => import('@/components/Contact'));

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactOpen(true);
  };

  const handleNavigation = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <TopProgressBar />
      <Navbar onContactClick={handleContactClick} onSectionClick={handleNavigation} />
      
      <main className="flex-grow pt-16 md:pt-20">
        {children || <Outlet />}
      </main>
      
      {isContactOpen && (
        <Suspense fallback={<div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="w-12 h-12 rounded-full border-4 border-t-transparent border-primary animate-spin"></div>
        </div>}>
          <Contact onClose={() => setIsContactOpen(false)} />
        </Suspense>
      )}
      
      <Footer />
      <CookieConsent />
      <ScrollToTop />
    </div>
  );
};

export default MainLayout;
