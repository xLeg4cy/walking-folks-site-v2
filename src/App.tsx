
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ThemeProvider } from "next-themes";
import { HelmetProvider } from 'react-helmet-async';
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorBoundary from "./components/ErrorBoundary";
import MainLayout from "./layouts/MainLayout";

const Index = lazy(() => import("./pages/Index"));
const Privacy = lazy(() => import("./pages/Privacy"));
// const Blog = lazy(() => import("./pages/Blog")); // Commented out blog route
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <ThemeProvider 
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          themes={["light", "dark"]}
        >
          <div className="min-h-screen bg-background font-sans antialiased dark:bg-gray-900">
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route element={<MainLayout />}>
                      <Route path="/" element={<Index />} />
                      <Route path="/privacy" element={<Privacy />} />
                      {/* <Route path="/blog" element={<Blog />} /> */}
                      <Route path="*" element={<NotFound />} />
                    </Route>
                  </Routes>
                </Suspense>
              </BrowserRouter>
            </TooltipProvider>
          </div>
        </ThemeProvider>
      </ErrorBoundary>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
