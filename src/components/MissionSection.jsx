import { motion } from 'framer-motion';
import { Leaf, Heart, Globe, Shield } from 'lucide-react';

const MissionSection = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We source responsibly and support regenerative practices that heal the earth while providing the finest natural products.'
    },
    {
      icon: Heart,
      title: 'Authenticity',
      description: 'Every product honors traditional wisdom and time-tested practices, ensuring genuine benefits for your wellness journey.'
    },
    {
      icon: Globe,
      title: 'Community',
      description: 'We partner with local farmers and artisans worldwide, creating positive impact in communities that share our values.'
    },
    {
      icon: Shield,
      title: 'Quality',
      description: 'Rigorous testing and certification ensure that every product meets our highest standards for purity and effectiveness.'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Our Mission & Values
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              At NatureMama Heritage, we believe that true wellness comes from honoring the wisdom of our ancestors 
              while embracing the innovations of today. Our mission is to bridge this gap, creating products that 
              nurture both body and soul while respecting the earth that provides for us all.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <blockquote className="text-2xl font-display text-primary-700 italic">
                "We don't just sell products; we cultivate a lifestyle that honors nature's heritage 
                and empowers individuals to live their most authentic, healthy lives."
              </blockquote>
              <cite className="block mt-4 text-gray-600 font-medium">
                — Maria Santos, Founder & CEO
              </cite>
            </div>
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Target Audience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-primary-600 to-earth-600 rounded-2xl p-8 lg:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-display text-3xl font-bold mb-6">
                  Who We Serve
                </h3>
                <p className="text-lg text-primary-100 mb-6">
                  Our community spans across generations and lifestyles, united by a shared commitment 
                  to natural wellness and authentic living.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-earth-300 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-primary-100">
                      <strong className="text-white">Wellness Enthusiasts</strong> seeking authentic, 
                      natural alternatives to conventional products
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-earth-300 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-primary-100">
                      <strong className="text-white">Conscious Consumers</strong> who value sustainability, 
                      ethical sourcing, and environmental responsibility
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-earth-300 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-primary-100">
                      <strong className="text-white">Heritage Seekers</strong> interested in traditional 
                      wisdom and time-tested natural remedies
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-earth-300 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-primary-100">
                      <strong className="text-white">Health-Conscious Families</strong> looking for safe, 
                      natural products for their loved ones
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Our Community"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;