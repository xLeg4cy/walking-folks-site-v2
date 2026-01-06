import { useEffect } from 'react';

export const usePerformanceMetrics = () => {
    useEffect(() => {
        // Register performance metrics
        if ('performance' in window && 'getEntriesByType' in performance) {
            const handleLoad = () => {
                setTimeout(() => {
                    const perfEntries = performance.getEntriesByType('navigation');
                    if (perfEntries.length > 0) {
                        const metrics = perfEntries[0] as PerformanceNavigationTiming;
                        console.info('Page Load Metrics:', {
                            'TTFB (ms)': Math.round(metrics.responseStart),
                            'DOM Content Loaded (ms)': Math.round(metrics.domContentLoadedEventEnd),
                            'Load Event (ms)': Math.round(metrics.loadEventEnd),
                        });

                        // Report metrics if Web Vitals API is available
                        if ('web-vitals' in window) {
                            import('web-vitals').then((webVitals) => {
                                // Use correct method names available in web-vitals
                                if (webVitals.onCLS) webVitals.onCLS(console.info);
                                if (webVitals.onFID) webVitals.onFID(console.info);
                                if (webVitals.onLCP) webVitals.onLCP(console.info);
                            });
                        }
                    }
                }, 0);
            };

            if (document.readyState === 'complete') {
                handleLoad();
            } else {
                window.addEventListener('load', handleLoad);
            }

            return () => {
                window.removeEventListener('load', handleLoad);
            };
        }
    }, []);
};
