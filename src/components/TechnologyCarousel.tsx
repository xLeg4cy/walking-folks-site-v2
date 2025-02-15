
import React from 'react';

const technologies1 = [
  { name: 'Node.js', url: '#nodejs', icon: '/placeholder.svg' },
  { name: 'Java', url: '#java', icon: '/placeholder.svg' },
  { name: 'React', url: '#react', icon: '/placeholder.svg' },
  { name: '.NET', url: '#dotnet', icon: '/placeholder.svg' },
  { name: 'Python', url: '#python', icon: '/placeholder.svg' },
  { name: 'C#', url: '#csharp', icon: '/placeholder.svg' },
  { name: 'Rails', url: '#rails', icon: '/placeholder.svg' },
];

const technologies2 = [
  { name: 'Angular', url: '#angular', icon: '/placeholder.svg' },
  { name: 'PHP', url: '#php', icon: '/placeholder.svg' },
  { name: 'Android', url: '#android', icon: '/placeholder.svg' },
  { name: 'iOS', url: '#ios', icon: '/placeholder.svg' },
  { name: 'Golang', url: '#golang', icon: '/placeholder.svg' },
  { name: 'Vue.js', url: '#vuejs', icon: '/placeholder.svg' },
  { name: 'TypeScript', url: '#typescript', icon: '/placeholder.svg' },
];

const TechnologyCarousel = () => {
  return (
    <div className="mb-14 flex w-full flex-col gap-8 md:gap-3 xl:mb-11 xl:gap-1">
      <div className="relative h-16 overflow-hidden md:h-24">
        <ul className="absolute flex min-w-[200%] justify-around animate-slide-left hover:pause">
          {[...technologies1, ...technologies1].map((tech, index) => (
            <li key={index} className="hover:scale-110 pr-7 md:pr-9 transition-all duration-300">
              <a href={tech.url} className="flex flex-col items-center">
                <img src={tech.icon} alt={tech.name} className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                <span className="text-sm mt-2">{tech.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative h-16 overflow-hidden md:h-24">
        <ul className="absolute flex min-w-[200%] justify-around animate-slide-right hover:pause">
          {[...technologies2, ...technologies2].map((tech, index) => (
            <li key={index} className="hover:scale-110 pr-7 md:pr-9 transition-all duration-300">
              <a href={tech.url} className="flex flex-col items-center">
                <img src={tech.icon} alt={tech.name} className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                <span className="text-sm mt-2">{tech.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TechnologyCarousel;
