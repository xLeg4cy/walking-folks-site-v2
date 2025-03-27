
import { useTranslation } from 'react-i18next';

const Privacy = () => {
  const { t } = useTranslation();
  
  return (
    <div id="privacy" className="py-24 bg-background dark:bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Privacy Policy</h2>
        
        <div className="prose prose-lg dark:prose-invert">
          <p className="mb-4 text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">1. Information We Collect</h3>
            <p className="text-muted-foreground">Walking Folks collects information that you provide directly to us, including but not limited to:</p>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground">
              <li>Name and contact information</li>
              <li>Account credentials</li>
              <li>Payment information</li>
              <li>Communications with us</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">2. How We Use Your Information</h3>
            <p className="text-muted-foreground">Walking Folks uses the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground">
              <li>Provide and maintain our services</li>
              <li>Process your transactions</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">3. Information Sharing</h3>
            <p className="text-muted-foreground">Walking Folks does not sell or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground">
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and interests</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">4. Security</h3>
            <p className="text-muted-foreground">Walking Folks implements appropriate technical and organizational measures to protect your personal information against unauthorized access, modification, or destruction.</p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">5. Contact Us</h3>
            <p className="text-muted-foreground">If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="text-muted-foreground">Email: <a href="mailto:contact@walkingfolks.com" className="text-brand-purple-medium hover:underline">contact@walkingfolks.com</a></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
