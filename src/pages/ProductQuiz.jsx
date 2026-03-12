import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, CheckCircle, Sparkles } from 'lucide-react';

const ProductQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 'wellness_goal',
      question: 'What is your primary wellness goal?',
      type: 'single',
      options: [
        { value: 'stress_relief', label: 'Stress Relief & Relaxation', icon: '🧘‍♀️' },
        { value: 'energy_boost', label: 'Natural Energy & Vitality', icon: '⚡' },
        { value: 'skin_health', label: 'Healthy Skin & Beauty', icon: '✨' },
        { value: 'digestive_health', label: 'Digestive Wellness', icon: '🌿' },
        { value: 'immune_support', label: 'Immune System Support', icon: '🛡️' },
        { value: 'sleep_quality', label: 'Better Sleep Quality', icon: '😴' }
      ]
    },
    {
      id: 'lifestyle',
      question: 'Which best describes your lifestyle?',
      type: 'single',
      options: [
        { value: 'busy_professional', label: 'Busy Professional', icon: '💼' },
        { value: 'active_fitness', label: 'Active & Fitness-Focused', icon: '🏃‍♀️' },
        { value: 'family_oriented', label: 'Family-Oriented', icon: '👨‍👩‍👧‍👦' },
        { value: 'student', label: 'Student', icon: '📚' },
        { value: 'retired', label: 'Retired & Enjoying Life', icon: '🌅' },
        { value: 'creative', label: 'Creative & Artistic', icon: '🎨' }
      ]
    },
    {
      id: 'experience_level',
      question: 'How experienced are you with natural wellness products?',
      type: 'single',
      options: [
        { value: 'beginner', label: 'Complete Beginner', icon: '🌱' },
        { value: 'some_experience', label: 'Some Experience', icon: '🌿' },
        { value: 'experienced', label: 'Very Experienced', icon: '🌳' },
        { value: 'expert', label: 'Expert/Practitioner', icon: '🧙‍♀️' }
      ]
    },
    {
      id: 'preferences',
      question: 'What product types interest you most? (Select all that apply)',
      type: 'multiple',
      options: [
        { value: 'teas', label: 'Herbal Teas & Blends', icon: '🍵' },
        { value: 'skincare', label: 'Natural Skincare', icon: '🧴' },
        { value: 'supplements', label: 'Herbal Supplements', icon: '💊' },
        { value: 'aromatherapy', label: 'Essential Oils & Aromatherapy', icon: '🌸' },
        { value: 'bath_body', label: 'Bath & Body Products', icon: '🛁' },
        { value: 'home_wellness', label: 'Home Wellness Items', icon: '🏠' }
      ]
    },
    {
      id: 'budget',
      question: 'What\'s your monthly wellness budget?',
      type: 'single',
      options: [
        { value: 'under_25', label: 'Under $25', icon: '💰' },
        { value: '25_50', label: '$25 - $50', icon: '💰💰' },
        { value: '50_100', label: '$50 - $100', icon: '💰💰💰' },
        { value: 'over_100', label: 'Over $100', icon: '💰💰💰💰' }
      ]
    }
  ];

  const handleAnswer = (questionId, value) => {
    const question = questions[currentQuestion];
    
    if (question.type === 'multiple') {
      const currentAnswers = answers[questionId] || [];
      const newAnswers = currentAnswers.includes(value)
        ? currentAnswers.filter(a => a !== value)
        : [...currentAnswers, value];
      
      setAnswers({ ...answers, [questionId]: newAnswers });
    } else {
      setAnswers({ ...answers, [questionId]: value });
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const getRecommendations = () => {
    // Simple recommendation logic based on answers
    const recommendations = [];
    
    if (answers.wellness_goal === 'stress_relief') {
      recommendations.push({
        name: 'Calm & Centered Tea Blend',
        price: '$24.99',
        image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        reason: 'Perfect for stress relief and relaxation'
      });
    }
    
    if (answers.preferences?.includes('skincare')) {
      recommendations.push({
        name: 'Radiant Glow Skincare Set',
        price: '$89.99',
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        reason: 'Natural skincare for healthy, glowing skin'
      });
    }
    
    if (answers.preferences?.includes('aromatherapy')) {
      recommendations.push({
        name: 'Essential Oils Starter Kit',
        price: '$34.99',
        image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        reason: 'Perfect introduction to aromatherapy'
      });
    }
    
    // Default recommendations if none match
    if (recommendations.length === 0) {
      recommendations.push(
        {
          name: 'Heritage Wellness Bundle',
          price: '$149.99',
          image: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          reason: 'A curated selection perfect for your wellness journey'
        },
        {
          name: 'Organic Herbal Tea Collection',
          price: '$39.99',
          image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          reason: 'Great starting point for natural wellness'
        }
      );
    }
    
    return recommendations;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    const recommendations = getRecommendations();
    
    return (
      <div className="min-h-screen pt-16 bg-gradient-to-br from-primary-50 to-earth-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <Sparkles className="h-16 w-16 text-primary-600 mx-auto mb-6" />
              <h1 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Your Personalized Recommendations
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Based on your answers, we've curated the perfect products for your wellness journey
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {recommendations.map((product, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="bg-gray-50 rounded-xl p-6 text-left"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {product.reason}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary-600">
                        {product.price}
                      </span>
                      <button className="btn-primary py-2 px-4">
                        Add to Cart
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={resetQuiz}
                  className="btn-secondary"
                >
                  Retake Quiz
                </button>
                <button className="btn-primary">
                  View All Products
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const currentAnswer = answers[question.id];
  const canProceed = question.type === 'multiple' 
    ? currentAnswer && currentAnswer.length > 0
    : currentAnswer;

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-primary-50 to-earth-50">
      <div className="container-max section-padding">
        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm font-medium text-gray-600">
                {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="bg-primary-600 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Question Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
            >
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
                {question.question}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {question.options.map((option) => {
                  const isSelected = question.type === 'multiple'
                    ? currentAnswer?.includes(option.value)
                    : currentAnswer === option.value;

                  return (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(question.id, option.value)}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                        isSelected
                          ? 'border-primary-500 bg-primary-50 text-primary-700'
                          : 'border-gray-200 hover:border-primary-300 hover:bg-primary-25'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{option.icon}</span>
                        <span className="font-medium">{option.label}</span>
                        {isSelected && (
                          <CheckCircle className="h-5 w-5 text-primary-600 ml-auto" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center">
                <button
                  onClick={prevQuestion}
                  disabled={currentQuestion === 0}
                  className="flex items-center space-x-2 px-6 py-3 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                  <span>Previous</span>
                </button>

                <button
                  onClick={nextQuestion}
                  disabled={!canProceed}
                  className="flex items-center space-x-2 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>
                    {currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'}
                  </span>
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ProductQuiz;