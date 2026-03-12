import { motion } from 'framer-motion';
import { Play, MapPin, Award, Heart } from 'lucide-react';
import { useState } from 'react';

const ProducersSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const producers = [
    {
      id: 1,
      name: 'Ferme des Lavandes',
      location: 'Provence, France',
      specialty: 'Lavande Bio Certifiée',
      description: 'Famille Dubois cultive la lavande depuis 4 générations dans les champs de Provence.',
      image: 'https://images.unsplash.com/photo-1498579397066-22750a3cb424?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      name: 'Ruchers du Midi',
      location: 'Languedoc, France',
      specialty: 'Miel de Thym Sauvage',
      description: 'Apiculteurs passionnés produisant un miel pur dans le respect des abeilles.',
      image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      name: 'Jardins de Camomille',
      location: 'Loire Valley, France',
      specialty: 'Plantes Médicinales',
      description: 'Cultivation artisanale de camomille et autres plantes médicinales bio.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-sage-50 to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Rencontrez Nos Producteurs Locaux
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez les artisans passionnés qui cultivent avec amour les ingrédients 
            naturels qui composent nos produits NatureMama Heritage.
          </p>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            {!isVideoPlaying ? (
              <div 
                className="relative cursor-pointer"
                onClick={() => setIsVideoPlaying(true)}
              >
                <div className="aspect-video bg-gradient-to-br from-sage-100 to-earth-100 flex items-center justify-center relative">
                  {/* Background image overlay */}
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  <div className="text-center relative z-10">
                    <div className="group bg-white/90 backdrop-blur-sm rounded-full p-6 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl mb-6 cursor-pointer">
                      <Play className="h-12 w-12 text-sage-600 group-hover:text-sage-700 ml-1" fill="currentColor" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">
                      Nos Producteurs Partenaires
                    </h3>
                    <p className="text-gray-600 max-w-md mx-auto">
                      Plongez dans l'univers de nos producteurs locaux et découvrez 
                      leur savoir-faire traditionnel
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative">
                <video
                  controls
                  autoPlay
                  className="w-full aspect-video"
                  poster="/images/producers-poster.jpg"
                  onError={(e) => {
                    console.error('Erreur de chargement vidéo:', e);
                    setIsVideoPlaying(false);
                  }}
                >
                  <source src="/videos/producers.mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
                <button
                  onClick={() => setIsVideoPlaying(false)}
                  className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                >
                  ✕
                </button>
              </div>
            )}
          </div>
        </motion.div>

        {/* Producers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {producers.map((producer, index) => (
            <motion.div
              key={producer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={producer.image}
                  alt={producer.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <Award className="h-4 w-4 text-sage-600" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {producer.location}
                </div>
                
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">
                  {producer.name}
                </h3>
                
                <div className="bg-sage-100 text-sage-700 text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">
                  {producer.specialty}
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {producer.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partnership Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Nos Valeurs Partagées
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ce qui unit NatureMama Heritage et nos producteurs partenaires
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-sage-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-sage-600" />
              </div>
              <h4 className="font-display text-lg font-semibold text-gray-900 mb-2">
                Passion Authentique
              </h4>
              <p className="text-gray-600">
                Chaque producteur partage notre amour pour les traditions naturelles
              </p>
            </div>

            <div className="text-center">
              <div className="bg-earth-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h4 className="font-display text-lg font-semibold text-gray-900 mb-2">
                Agriculture Biologique
              </h4>
              <p className="text-gray-600">
                Tous nos partenaires sont certifiés bio et respectent l'environnement
              </p>
            </div>

            <div className="text-center">
              <div className="bg-sage-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="font-display text-lg font-semibold text-gray-900 mb-2">
                Commerce Équitable
              </h4>
              <p className="text-gray-600">
                Des partenariats durables qui soutiennent les communautés locales
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-sage-600 to-earth-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4">
              Découvrez Nos Produits
            </h3>
            <p className="text-lg text-sage-100 mb-6 max-w-2xl mx-auto">
              Chaque produit NatureMama Heritage porte en lui l'histoire et le savoir-faire 
              de nos producteurs partenaires.
            </p>
            <button className="bg-white text-sage-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Voir Nos Produits
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProducersSection;