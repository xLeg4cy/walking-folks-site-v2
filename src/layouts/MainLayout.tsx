
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import ScrollToTop from '@/components/ScrollToTop';
import TopProgressBar from '@/components/TopProgressBar';

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <TopProgressBar />
      <Navbar onContactClick={handleContactClick} />
      
      <main className="flex-grow pt-16 md:pt-20">
        {children || <Outlet />}
      </main>
      
      <Footer />
      <CookieConsent />
      <ScrollToTop />
    </div>
  );
};

export default MainLayout;
