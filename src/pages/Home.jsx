import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import FeaturedProducts from '../components/FeaturedProducts';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import NewsletterSignup from '../components/NewsletterSignup';
import YouTubeSection from '../components/YouTubeSection';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <StatsSection />
      </motion.div>

      <FeaturedProducts />
      
      <YouTubeSection />
      
      <TestimonialsCarousel />
      
      <NewsletterSignup />
    </div>
  );
};

export default Home;