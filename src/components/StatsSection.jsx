import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { Users, Award, Leaf, Heart } from 'lucide-react';

const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: 10000,
      suffix: '+',
      label: 'Clients Satisfaits',
      description: 'Nous font confiance chaque jour',
      color: 'sage'
    },
    {
      icon: Award,
      number: 25,
      suffix: '+',
      label: 'Années d\'Expérience',
      description: 'D\'expertise en bien-être naturel',
      color: 'earth'
    },
    {
      icon: Leaf,
      number: 150,
      suffix: '+',
      label: 'Produits Naturels',
      description: 'Soigneusement sélectionnés',
      color: 'sage'
    },
    {
      icon: Heart,
      number: 98,
      suffix: '%',
      label: 'Satisfaction',
      description: 'Taux de satisfaction client',
      color: 'earth'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notre Impact en Chiffres
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des résultats qui témoignent de notre engagement envers la qualité et votre bien-être
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const colorClasses = stat.color === 'sage' 
              ? 'bg-sage-100 text-sage-600' 
              : 'bg-earth-100 text-earth-600';
            
            return (
              <div key={index} className="text-center group">
                <div className="card p-8 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <div className={`w-16 h-16 ${colorClasses} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">
                    {stat.label}
                  </h3>
                  
                  <p className="text-gray-600 text-sm">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;