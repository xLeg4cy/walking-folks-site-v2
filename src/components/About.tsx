
import { useEffect, useRef } from 'react';
import { Users, Globe, Shield } from 'lucide-react';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

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
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="text-gray-600 mb-8 text-lg">
              With over 10 years in the software and infrastructure field, we focus on delivering technology solutions that are cost-efficient, minimalist, and innovative while maintaining transparency and high-quality development support.
            </p>

            <div className="flex flex-col gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-brand-purple-light/20 rounded-lg flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-brand-purple-dark" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                    <p className="text-gray-600">
                      Our experienced professionals bring extensive knowledge to every project.
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
                    <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                    <p className="text-gray-600">
                      Strong presence in US and Latin America markets.
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
                    <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
                    <p className="text-gray-600">
                      Committed to delivering high-quality solutions.
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
