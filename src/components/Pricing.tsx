
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const Pricing = () => {
  const pricingRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (pricingRef.current) {
      observer.observe(pricingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id="pricing" className="py-24 bg-background dark:bg-gray-900">
      <div ref={pricingRef} className="section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">{t('pricing.title')}</h2>
          <p className="text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto">
            {t('pricing.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">{t('pricing.fixed.title')}</h3>
            <p className="text-muted-foreground dark:text-gray-300 mb-6">
              {t('pricing.fixed.description')}
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-muted-foreground dark:text-gray-300">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Predictable costs
              </li>
              <li className="flex items-center text-muted-foreground dark:text-gray-300">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Clear timeline
              </li>
              <li className="flex items-center text-muted-foreground dark:text-gray-300">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Defined deliverables
              </li>
            </ul>
            <button className="w-full bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
              Get Quote
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">{t('pricing.milestone.title')}</h3>
            <p className="text-muted-foreground dark:text-gray-300 mb-6">
              {t('pricing.milestone.description')}
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-muted-foreground dark:text-gray-300">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Per hour rates
              </li>
              <li className="flex items-center text-muted-foreground dark:text-gray-300">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Per developer pricing
              </li>
              <li className="flex items-center text-muted-foreground dark:text-gray-300">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Flexible engagement
              </li>
            </ul>
            <button className="w-full bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
