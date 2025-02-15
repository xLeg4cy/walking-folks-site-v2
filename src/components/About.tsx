
import { useEffect, useRef } from 'react';
import { Users, Globe, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id="about" className="py-24 bg-gradient-to-b from-white to-brand-purple-light/10">
      <div ref={aboutRef} className="section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">{t('about.title')}</h2>
            <p className="text-gray-600 mb-8 text-lg">
              {t('about.description')}
            </p>

            <div className="flex flex-col gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-brand-purple-light/20 rounded-lg flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-brand-purple-dark" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t('about.expertTeam.title')}</h3>
                    <p className="text-gray-600">
                      {t('about.expertTeam.description')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-brand-purple-light/20 rounded-lg flex items-center justify-center shrink-0">
                    <Globe className="w-6 h-6 text-brand-purple-dark" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t('about.globalReach.title')}</h3>
                    <p className="text-gray-600">
                      {t('about.globalReach.description')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-brand-purple-light/20 rounded-lg flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 text-brand-purple-dark" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t('about.quality.title')}</h3>
                    <p className="text-gray-600">
                      {t('about.quality.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <img 
              src="/lovable-uploads/1581554e-9bcc-4b34-acc2-9aff908acdee.png"
              alt="Data analytics"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
