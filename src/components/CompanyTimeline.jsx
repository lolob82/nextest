import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Leaf, Award, Globe, Users, Heart, Sparkles } from 'lucide-react';

const CompanyTimeline = () => {
  const timelineEvents = [
    {
      year: 'Roots',
      title: 'Family Tradition',
      description: 'A family passion for natural remedies passed down through generations in the French countryside.',
      icon: Heart,
      image: '/images/family-tradition.jpg'
    },
    {
      year: '2023',
      title: 'Foundation',
      description: 'NatureMama Heritage was born from the meeting of ancestral secrets and modern scientific validation.',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      year: 'Today',
      title: 'Excellence',
      description: 'High-quality, certified organic natural food supplements, made in France with complete traceability.',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our History: A Family Passion Passed Down Through Generations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From ancestral French countryside traditions to modern certified excellence, 
            discover the heritage that shapes every NatureMama product
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary-200 to-earth-200 h-full hidden lg:block" />

          <div className="space-y-12 lg:space-y-24">
            {timelineEvents.map((event, index) => {
              const [ref, inView] = useInView({
                triggerOnce: true,
                threshold: 0.3,
              });

              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:gap-16 gap-8`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white border-4 border-primary-300 rounded-full flex items-center justify-center z-10 hidden lg:flex">
                    <event.icon className="h-8 w-8 text-primary-600" />
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center justify-center lg:hidden mb-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                          <event.icon className="h-6 w-6 text-primary-600" />
                        </div>
                      </div>
                      
                      <div className="text-4xl font-bold text-primary-600 mb-2">
                        {event.year}
                      </div>
                      <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="flex-1">
                    <div className="relative overflow-hidden rounded-2xl shadow-lg">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-64 lg:h-80 object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-earth-50 rounded-2xl p-8 lg:p-12">
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Be Part of Our Continuing Story
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of customers who have made NatureMama Heritage part of their wellness journey. 
              Your story could be the next chapter in our heritage.
            </p>
            <button className="btn-primary text-lg px-8 py-3">
              Start Your Journey
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyTimeline;