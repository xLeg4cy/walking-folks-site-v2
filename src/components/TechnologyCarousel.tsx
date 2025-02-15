
import React from 'react';

const technologies1 = [
  { name: 'Node.js', url: '#nodejs', color: 'text-green-600' },
  { name: 'Java', url: '#java', color: 'text-red-600' },
  { name: 'React', url: '#react', color: 'text-blue-500' },
  { name: '.NET', url: '#dotnet', color: 'text-purple-600' },
  { name: 'Python', url: '#python', color: 'text-yellow-600' },
  { name: 'C#', url: '#csharp', color: 'text-violet-600' },
  { name: 'Rails', url: '#rails', color: 'text-red-500' },
];

const technologies2 = [
  { name: 'Angular', url: '#angular', color: 'text-red-500' },
  { name: 'PHP', url: '#php', color: 'text-indigo-600' },
  { name: 'Android', url: '#android', color: 'text-green-500' },
  { name: 'iOS', url: '#ios', color: 'text-gray-600' },
  { name: 'Golang', url: '#golang', color: 'text-cyan-600' },
  { name: 'Vue.js', url: '#vuejs', color: 'text-emerald-600' },
  { name: 'TypeScript', url: '#typescript', color: 'text-blue-600' },
];

const TechnologyCarousel = () => {
  return (
    <div className="mb-14 flex w-full flex-col gap-8 md:gap-3 xl:mb-11 xl:gap-1">
      <div className="relative h-10 overflow-hidden md:h-16">
        <ul className="absolute flex min-w-[200%] justify-around animate-slide-left hover:pause">
          {[...technologies1, ...technologies1].map((tech, index) => (
            <li key={index} className={`text-2xl ${tech.color} hover:scale-110 font-bold md:text-[3.25rem] md:leading-[4rem] pr-7 md:pr-9 transition-all duration-300`}>
              <a href={tech.url}>{tech.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative h-10 overflow-hidden md:h-16">
        <ul className="absolute flex min-w-[200%] justify-around animate-slide-right hover:pause">
          {[...technologies2, ...technologies2].map((tech, index) => (
            <li key={index} className={`text-2xl ${tech.color} hover:scale-110 font-bold md:text-[3.25rem] md:leading-[4rem] pr-7 md:pr-9 transition-all duration-300`}>
              <a href={tech.url}>{tech.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TechnologyCarousel;
