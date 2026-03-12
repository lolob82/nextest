import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Gift, Leaf, CheckCircle } from 'lucide-react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <section className="section-padding bg-gradient-to-r from-primary-600 to-earth-600">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center text-white"
          >
            <CheckCircle className="h-16 w-16 mx-auto mb-6 text-green-300" />
            <h2 className="font-display text-3xl font-bold mb-4">
              Welcome to the NatureMama Family!
            </h2>
            <p className="text-lg text-primary-100 mb-6">
              Thank you for subscribing! Check your email for a special welcome gift 
              and start your journey to natural wellness.
            </p>
            <button
              onClick={() => setIsSubscribed(false)}
              className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Subscribe Another Email
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-sage-gradient">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-natural-50"
            >
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
                Rejoignez Notre Communauté Bien-Être
              </h2>
              <p className="text-lg text-natural-200 mb-8">
                Accédez en exclusivité à nos conseils bien-être, aux lancements de nouveaux produits 
                et aux offres spéciales. De plus, recevez 15% de réduction sur votre première commande !
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Gift className="h-6 w-6 text-earth-300" />
                  <span className="text-natural-200">15% de réduction sur votre première commande</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Leaf className="h-6 w-6 text-earth-300" />
                  <span className="text-natural-200">Conseils bien-être hebdomadaires & recettes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-earth-300" />
                  <span className="text-natural-200">Accès prioritaire aux nouveaux produits</span>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card-natural p-8 shadow-soft"
            >
              <div className="text-center mb-6">
                <h3 className="font-display text-2xl font-bold text-primary-900 mb-2">
                  Commencez Votre Voyage Bien-Être
                </h3>
                <p className="text-primary-700">
                  Rejoignez plus de 10 000 personnes qui font confiance à NatureMama Heritage
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Subscribing...</span>
                    </>
                  ) : (
                    <>
                      <Mail className="h-5 w-5" />
                      <span>Get My 15% Discount</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By subscribing, you agree to our Privacy Policy and Terms of Service. 
                  Unsubscribe at any time.
                </p>
              </form>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>No Spam</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Secure</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Unsubscribe Anytime</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;