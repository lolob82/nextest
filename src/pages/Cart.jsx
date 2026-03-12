import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ShoppingBag, CreditCard, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import CheckoutForm from '../components/CheckoutForm';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, getCartTotal, getCartItemsCount } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-16 bg-gray-50">
        <div className="container py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="card p-12">
              <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
              <h1 className="font-display text-3xl font-bold text-gray-900 mb-4">
                Votre Panier est Vide
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Découvrez nos produits de bien-être naturels et commencez votre voyage vers une meilleure santé.
              </p>
              <Link to="/products" className="btn-primary btn-lg">
                Découvrir nos Produits
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (showCheckout) {
    return <CheckoutForm onBack={() => setShowCheckout(false)} />;
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="container py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link to="/products" className="btn-outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Continuer mes Achats
            </Link>
          </div>
          <h1 className="font-display text-3xl font-bold text-gray-900">
            Mon Panier ({getCartItemsCount()} article{getCartItemsCount() > 1 ? 's' : ''})
          </h1>
          <div></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="card p-6"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {item.description}
                    </p>
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-sage-600">
                        {item.price}€
                      </span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {item.originalPrice}€
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Minus className="h-4 w-4 text-gray-600" />
                    </button>
                    
                    <span className="w-8 text-center font-medium">
                      {item.quantity}
                    </span>
                    
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Plus className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                  <span className="text-gray-600">
                    Sous-total: 
                  </span>
                  <span className="font-bold text-lg">
                    {(item.price * item.quantity).toFixed(2)}€
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="card p-6 sticky top-24"
            >
              <h2 className="font-display text-xl font-semibold text-gray-900 mb-6">
                Récapitulatif de Commande
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sous-total</span>
                  <span className="font-medium">{getCartTotal().toFixed(2)}€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Livraison</span>
                  <span className="font-medium text-sage-600">Gratuite</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">TVA</span>
                  <span className="font-medium">{(getCartTotal() * 0.20).toFixed(2)}€</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between">
                    <span className="font-semibold text-lg">Total</span>
                    <span className="font-bold text-xl text-sage-600">
                      {(getCartTotal() * 1.20).toFixed(2)}€
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowCheckout(true)}
                className="w-full btn-primary btn-lg flex items-center justify-center space-x-2"
              >
                <CreditCard className="h-5 w-5" />
                <span>Procéder au Paiement</span>
              </button>

              <div className="mt-4 text-center">
                <Link
                  to="/products"
                  className="text-sage-600 hover:text-sage-700 font-medium transition-colors"
                >
                  Continuer mes Achats
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-center space-y-2">
                  <p className="text-sm text-gray-600 font-medium">Paiement Sécurisé</p>
                  <div className="flex justify-center space-x-2 text-xs text-gray-500">
                    <span>🔒 SSL Crypté</span>
                    <span>•</span>
                    <span>📦 Livraison Gratuite</span>
                  </div>
                  <div className="flex justify-center space-x-2 text-xs text-gray-500">
                    <span>✅ Satisfait ou Remboursé</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;