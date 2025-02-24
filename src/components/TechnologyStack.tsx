import { useTranslation } from 'react-i18next';
import TechnologyCarousel from './TechnologyCarousel';
import { ArrowDown } from 'lucide-react';

const TechnologyStack = () => {
  const { t } = useTranslation();

  return (
    <div className="py-16 bg-background text-foreground dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground dark:text-white">{t('tech.title')}</h2>
          <p className="text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto">
            {t('tech.description')}
          </p>
        </div>
        <TechnologyCarousel />
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <ArrowDown className="text-[#7E69AB] dark:text-purple-400" size={24} />
      </div>
    </div>
  );
};

export default TechnologyStack;
