import { motion } from 'framer-motion';
import CompanyTimeline from '../components/CompanyTimeline';
import MissionSection from '../components/MissionSection';
import TeamSection from '../components/TeamSection';
import LocationsMap from '../components/LocationsMap';
import ProducersSection from '../components/ProducersSection';

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-earth-600 text-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6">
              Our Heritage Story
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 mb-8">
              For over 25 years, we've been bridging ancient wisdom with modern wellness, 
              creating authentic products that honor nature's heritage.
            </p>
          </motion.div>
        </div>
      </section>

      <MissionSection />
      <CompanyTimeline />
      <ProducersSection />
      <TeamSection />
      <LocationsMap />
    </div>
  );
};

export default About;