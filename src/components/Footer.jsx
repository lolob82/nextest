import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-sage-600 rounded-full">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-lg">NatureMama</div>
                <div className="font-display text-sm text-sage-300">Heritage</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Vous connecter aux plus beaux héritages de la nature grâce à des compléments 
              alimentaires durables et authentiques, créés avec la sagesse traditionnelle française.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-sage-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-sage-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-sage-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-display text-lg font-semibold">Liens Rapides</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-sage-300 transition-colors">Accueil</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-sage-300 transition-colors">Produits</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-sage-300 transition-colors">À Propos</Link></li>
              <li><Link to="/quiz" className="text-gray-300 hover:text-sage-300 transition-colors">Quiz Produits</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-sage-300 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-6">
            <h3 className="font-display text-lg font-semibold">Service Client</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-sage-300 transition-colors">Livraison</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sage-300 transition-colors">Retours</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sage-300 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sage-300 transition-colors">Guide d'Utilisation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sage-300 transition-colors">Conseils Bien-être</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-display text-lg font-semibold">Nous Contacter</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-sage-400" />
                <span className="text-gray-300">hello@naturemama.fr</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-sage-400" />
                <span className="text-gray-300">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-sage-400" />
                <span className="text-gray-300">123 Rue de l'Héritage<br />75001 Paris, France</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2026 NatureMama Heritage. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-sage-300 text-sm transition-colors">
              Politique de Confidentialité
            </a>
            <a href="#" className="text-gray-400 hover:text-sage-300 text-sm transition-colors">
              Conditions d'Utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;