import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

const Privacy = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = t('privacy.sections', { returnObjects: true }) as any;

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t('privacy.back')}
        </button>

        <h1 className="text-4xl font-bold mb-8 text-foreground">{t('privacy.title')}</h1>

        <div className="prose prose-lg dark:prose-invert">
          <p className="mb-4 text-muted-foreground">
            {t('privacy.lastUpdated')}: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {sections.informationWeCollect.title}
            </h2>
            <p className="text-muted-foreground">{sections.informationWeCollect.description}</p>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground">
              {sections.informationWeCollect.items.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {sections.howWeUse.title}
            </h2>
            <p className="text-muted-foreground">{sections.howWeUse.description}</p>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground">
              {sections.howWeUse.items.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {sections.informationSharing.title}
            </h2>
            <p className="text-muted-foreground">{sections.informationSharing.description}</p>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground">
              {sections.informationSharing.items.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {sections.security.title}
            </h2>
            <p className="text-muted-foreground">{sections.security.description}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {sections.contactUs.title}
            </h2>
            <p className="text-muted-foreground">{sections.contactUs.description}</p>
            <p className="text-muted-foreground">
              {sections.contactUs.email}: <a href="mailto:contact@walkingfolks.com" className="text-brand-purple-medium hover:underline">contact@walkingfolks.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
