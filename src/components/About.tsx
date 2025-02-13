
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
    <div id="about" className="py-24 bg-gray-50">
      <div ref={aboutRef} className="section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            With over 10 years in the software and infrastructure field, we focus on delivering technology solutions that are cost-efficient, minimalist, and innovative while maintaining transparency and high-quality development support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-black/5 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
            <p className="text-gray-600">
              Our experienced professionals bring extensive knowledge and expertise to every project.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-black/5 rounded-lg flex items-center justify-center mb-6">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Global Reach</h3>
            <p className="text-gray-600">
              Establishing a strong presence in the US and Latin America markets.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-black/5 rounded-lg flex items-center justify-center mb-6">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Quality Assured</h3>
            <p className="text-gray-600">
              Committed to delivering high-quality solutions that meet your business needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
