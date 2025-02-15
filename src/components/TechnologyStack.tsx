
import { useTranslation } from 'react-i18next';
import TechnologyCarousel from './TechnologyCarousel';

const TechnologyStack = () => {
  const { t } = useTranslation();

  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">{t('tech.title')}</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('tech.description')}
          </p>
        </div>
        <TechnologyCarousel />
      </div>
    </div>
  );
};

export default TechnologyStack;
