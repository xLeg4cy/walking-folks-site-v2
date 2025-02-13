
import React from 'react';

const technologies1 = [
  { name: 'Node.js', url: '#nodejs' },
  { name: 'Java', url: '#java' },
  { name: 'React', url: '#react' },
  { name: '.NET', url: '#dotnet' },
  { name: 'Python', url: '#python' },
  { name: 'C#', url: '#csharp' },
  { name: 'Rails', url: '#rails' },
];

const technologies2 = [
  { name: 'Angular', url: '#angular' },
  { name: 'PHP', url: '#php' },
  { name: 'Android', url: '#android' },
  { name: 'iOS', url: '#ios' },
  { name: 'Golang', url: '#golang' },
  { name: 'Vue.js', url: '#vuejs' },
  { name: 'TypeScript', url: '#typescript' },
];

const TechnologyCarousel = () => {
  return (
    <div className="-mx-[100vw] px-[100vw] bg-gradient-to-r from-gray-50/50 to-white/50 mb-14 w-screen">
      <div className="flex w-full flex-col gap-8 md:gap-3 xl:gap-1 py-8">
        <div className="relative h-10 overflow-hidden md:h-16">
          <ul className="absolute flex min-w-[200%] justify-around animate-slide-left hover:pause">
            {[...technologies1, ...technologies1].map((tech, index) => (
              <li key={index} className="text-2xl hover:text-[#3498db] text-[#2c3e50] font-bold md:text-[3.25rem] md:leading-[4rem] pr-7 md:pr-9 transition-colors">
                <a href={tech.url}>{tech.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-10 overflow-hidden md:h-16">
          <ul className="absolute flex min-w-[200%] justify-around animate-slide-right hover:pause">
            {[...technologies2, ...technologies2].map((tech, index) => (
              <li key={index} className="text-2xl hover:text-[#3498db] text-[#2c3e50] font-bold md:text-[3.25rem] md:leading-[4rem] pr-7 md:pr-9 transition-colors">
                <a href={tech.url}>{tech.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCarousel;
