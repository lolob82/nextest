import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { getCartItemsCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Produits', path: '/products' },
    { name: 'À Propos', path: '/about' },
    { name: 'Quiz', path: '/quiz' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className={`p-2 rounded-full ${scrolled ? 'bg-sage-100' : 'bg-white/20'}`}>
              <Leaf className={`h-5 w-5 ${scrolled ? 'text-sage-600' : 'text-white'}`} />
            </div>
            <div>
              <div className={`font-display font-bold text-lg ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                NatureMama
              </div>
              <div className={`font-display text-xs ${scrolled ? 'text-sage-600' : 'text-white/80'}`}>
                Heritage
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? scrolled ? 'text-sage-600' : 'text-white'
                    : scrolled ? 'text-gray-600 hover:text-sage-600' : 'text-white/80 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <Link to="/cart" className={`relative p-2 rounded-full transition-colors ${
              scrolled ? 'hover:bg-gray-100' : 'hover:bg-white/20'
            }`}>
              <ShoppingCart className={`h-5 w-5 ${scrolled ? 'text-gray-600' : 'text-white'}`} />
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-sage-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              )}
            </Link>
            
            <button className="btn-primary">
              Boutique
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-gray-900' : 'text-white'}`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 text-base font-medium ${
                    location.pathname === item.path
                      ? 'text-sage-600'
                      : 'text-gray-600 hover:text-sage-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/cart"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between py-2 text-base font-medium text-gray-600 hover:text-sage-600"
              >
                <span>Panier</span>
                <div className="flex items-center space-x-2">
                  <ShoppingCart className="h-5 w-5" />
                  {getCartItemsCount() > 0 && (
                    <span className="bg-sage-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {getCartItemsCount()}
                    </span>
                  )}
                </div>
              </Link>
              <button className="w-full btn-primary mt-4">
                Boutique
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;