import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Maria Santos',
      role: 'Founder & CEO',
      bio: 'With over 25 years in natural wellness, Maria founded NatureMama Heritage to bridge traditional wisdom with modern living.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'maria@naturemama.com'
      }
    },
    {
      id: 2,
      name: 'Dr. James Chen',
      role: 'Chief Wellness Officer',
      bio: 'A licensed naturopathic doctor and herbalist, Dr. Chen ensures all our products meet the highest standards of efficacy and safety.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'james@naturemama.com'
      }
    },
    {
      id: 3,
      name: 'Sarah Williams',
      role: 'Head of Sustainability',
      bio: 'Sarah leads our sustainability initiatives, ensuring our sourcing practices support both communities and the environment.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@naturemama.com'
      }
    },
    {
      id: 4,
      name: 'Michael Rodriguez',
      role: 'Master Herbalist',
      bio: 'With expertise in traditional herbal medicine, Michael oversees product formulation and quality assurance.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'michael@naturemama.com'
      }
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
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The passionate experts behind NatureMama Heritage, dedicated to bringing you 
            the finest natural wellness products with integrity and care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-center space-x-3">
                      <a
                        href={member.social.linkedin}
                        className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
                      >
                        <Linkedin className="h-4 w-4 text-white" />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
                      >
                        <Twitter className="h-4 w-4 text-white" />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
                      >
                        <Mail className="h-4 w-4 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary-50 to-earth-50 rounded-2xl p-8 lg:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Our Team Values
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our team in everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h4 className="font-display text-lg font-semibold text-gray-900 mb-2">
                Authenticity
              </h4>
              <p className="text-gray-600">
                We stay true to traditional wisdom while embracing innovation
              </p>
            </div>

            <div className="text-center">
              <div className="bg-earth-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="font-display text-lg font-semibold text-gray-900 mb-2">
                Collaboration
              </h4>
              <p className="text-gray-600">
                We work together with communities, partners, and customers
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💚</span>
              </div>
              <h4 className="font-display text-lg font-semibold text-gray-900 mb-2">
                Compassion
              </h4>
              <p className="text-gray-600">
                We care deeply about people, communities, and the planet
              </p>
            </div>
          </div>
        </motion.div>

        {/* Join Our Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-earth-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4">
              Join Our Mission
            </h3>
            <p className="text-lg text-primary-100 mb-6 max-w-2xl mx-auto">
              Are you passionate about natural wellness and sustainable living? 
              We're always looking for talented individuals to join our growing team.
            </p>
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              View Open Positions
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;