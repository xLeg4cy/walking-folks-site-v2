
import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import ScrollToTop from '@/components/ScrollToTop';
import TopProgressBar from '@/components/TopProgressBar';
import Contact from '@/components/Contact';

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Check for contact=true in URL query params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('contact') === 'true') {
      setIsContactOpen(true);
      // Clean up the URL after opening the contact form
      const newUrl = location.pathname;
      window.history.replaceState({}, '', newUrl);
    }
  }, [location.search, location.pathname]);

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
      
      <Footer />
      <CookieConsent />
      <ScrollToTop />
      {isContactOpen && <Contact onClose={() => setIsContactOpen(false)} />}
    </div>
  );
};

export default MainLayout;
