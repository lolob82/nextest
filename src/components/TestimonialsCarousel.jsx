import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'California, USA',
      rating: 5,
      text: 'NatureMama Heritage has completely transformed my wellness routine. The quality of their products is unmatched, and I love knowing that everything is sourced sustainably.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      product: 'Herbal Tea Blend'
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'New York, USA',
      rating: 5,
      text: 'As someone who values authenticity, I appreciate how NatureMama Heritage honors traditional practices while delivering modern quality. Their customer service is exceptional too.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      product: 'Essential Oils Set'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      location: 'Texas, USA',
      rating: 5,
      text: 'The skincare products have given me the most radiant skin I\'ve had in years. I love that they\'re made with natural ingredients and traditional wisdom.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      product: 'Natural Skincare Set'
    },
    {
      id: 4,
      name: 'David Thompson',
      location: 'Florida, USA',
      rating: 5,
      text: 'I\'ve been a customer for over two years now, and the consistency in quality is remarkable. Every product tells a story and delivers real results.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      product: 'Wellness Bundle'
    },
    {
      id: 5,
      name: 'Lisa Park',
      location: 'Washington, USA',
      rating: 5,
      text: 'The product quiz helped me find exactly what I needed for my wellness goals. The personalized recommendations were spot-on, and the results speak for themselves.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      product: 'Custom Wellness Plan'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-earth-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from real people who have experienced the NatureMama difference
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
          >
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover"
                />
              </div>
              
              <div className="flex-1 text-center lg:text-left">
                <Quote className="h-8 w-8 text-primary-300 mb-4 mx-auto lg:mx-0" />
                
                <p className="text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div>
                  <h4 className="font-display text-xl font-semibold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600 mb-2">
                    {testimonials[currentIndex].location}
                  </p>
                  <p className="text-sm text-primary-600 font-medium">
                    Purchased: {testimonials[currentIndex].product}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="flex flex-col items-center">
            <div className="bg-primary-100 rounded-full p-4 mb-4">
              <Star className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">
              4.9/5 Rating
            </h3>
            <p className="text-gray-600">
              Based on 1,200+ reviews
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-earth-100 rounded-full p-4 mb-4">
              <Quote className="h-8 w-8 text-earth-600" />
            </div>
            <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">
              98% Satisfaction
            </h3>
            <p className="text-gray-600">
              Customer satisfaction rate
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-primary-100 rounded-full p-4 mb-4">
              <ChevronRight className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">
              10,000+ Customers
            </h3>
            <p className="text-gray-600">
              Worldwide community
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;