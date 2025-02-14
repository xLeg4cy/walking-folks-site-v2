
import TechnologyCarousel from './TechnologyCarousel';

const TechnologyStack = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Technology Stack</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies and frameworks to build robust, scalable, and efficient solutions for our clients. Our expertise spans across multiple technologies and platforms.
          </p>
        </div>
        <TechnologyCarousel />
      </div>
    </div>
  );
};

export default TechnologyStack;
