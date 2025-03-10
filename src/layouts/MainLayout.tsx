
import React, { useState } from 'react';
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
