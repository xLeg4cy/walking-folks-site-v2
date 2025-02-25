
import { useEffect, useRef } from 'react';
import { Users, Globe, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    }, {
      threshold: 0.1
    });

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id="about" className="py-24 bg-background dark:bg-gray-900">
      <div ref={aboutRef} className="section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 dark:text-white">{t('about.title')}</h2>
            <p className="text-muted-foreground dark:text-gray-300 mb-8 text-lg">
              We've got over a decade of real skill in software, infrastructure, and cybersecurity, offering tech fixes that are simple, cheap, and ahead of their time. We shoot for fresh innovation - see it as open workflows and pro-level development support - producing top-quality, standout tech with no high bills, no sneaky charges, or junk you don't want, all geared to win in a fast-moving field.
            </p>

            <div className="flex flex-col gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-indigo-50/50 rounded-lg flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-[#4338CA] dark:text-indigo-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">{t('about.expertTeam.title')}</h3>
                    <p className="text-muted-foreground dark:text-gray-300">
                      {t('about.expertTeam.description')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-indigo-50/50 rounded-lg flex items-center justify-center shrink-0">
                    <Globe className="w-6 h-6 text-[#4338CA] dark:text-indigo-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">{t('about.globalReach.title')}</h3>
                    <p className="text-muted-foreground dark:text-gray-300">
                      {t('about.globalReach.description')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-indigo-50/50 rounded-lg flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 text-[#4338CA] dark:text-indigo-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">{t('about.quality.title')}</h3>
                    <p className="text-muted-foreground dark:text-gray-300">
                      {t('about.quality.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-3 md:p-4 transform transition-transform hover:scale-105">
              <img 
                src="/lovable-uploads/1581554e-9bcc-4b34-acc2-9aff908acdee.png" 
                alt="Data analytics" 
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute -left-3 top-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 md:p-3 transform -translate-x-1/2 rotate-12 animate-bounce">
                <Globe className="text-[#4338CA] dark:text-indigo-300 w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="absolute -right-3 bottom-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 md:p-3 transform translate-x-1/2 -rotate-12 animate-bounce delay-150">
                <Shield className="text-[#4338CA] dark:text-indigo-300 w-6 h-6 md:w-8 md:h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
