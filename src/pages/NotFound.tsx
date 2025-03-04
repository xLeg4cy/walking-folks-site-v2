
import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Page Not Found | Walking Folks</title>
        <meta name="description" content="The page you are looking for doesn't exist." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center min-h-[calc(100vh-20rem)]">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center max-w-md">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button onClick={() => navigate('/')} className="bg-brand-purple-medium hover:bg-brand-purple-dark text-white">
          Return to Homepage
        </Button>
      </div>
    </>
  );
};

export default NotFound;
