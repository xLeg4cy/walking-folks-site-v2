
import { useRef, useEffect } from 'react';
import { User } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Team = () => {
  const teamRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (teamRef.current) {
      observer.observe(teamRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const team = [
    {
      name: "John Smith",
      role: "CEO",
      bio: "Visionary leader with 15+ years of experience in technology and business strategy.",
      image: "/placeholder.svg"
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      bio: "Technology innovator with extensive experience in scalable architecture and cloud solutions.",
      image: "/placeholder.svg"
    },
    {
      name: "Michael Chen",
      role: "Senior Software Developer",
      bio: "Full-stack expert specializing in modern web technologies and distributed systems.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div id="team" className="py-24 bg-background text-foreground dark:bg-gray-900">
      <div ref={teamRef} className="section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 dark:text-white">{t('team.title')}</h2>
          <p className="text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto text-lg">
            {t('team.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-brand-purple-light dark:hover:border-brand-purple-light transition-all hover:-translate-y-1 hover:shadow-lg text-center"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-brand-purple-light/10 flex items-center justify-center">
                <User className="w-12 h-12 text-brand-purple-medium" />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{member.name}</h3>
              <p className="text-brand-purple-medium font-medium mb-4">{member.role}</p>
              <p className="text-muted-foreground dark:text-gray-300">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
