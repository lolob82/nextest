import { useState } from 'react';
import { Search, Grid, List, Star, Heart, ShoppingCart, Filter } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ImageGallery from '../components/ImageGallery';

const Products = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const { addToCart } = useCart();

  const categories = [
    { id: 'all', name: 'Tous les Produits' },
    { id: 'teas', name: 'Tisanes & Thés' },
    { id: 'skincare', name: 'Soins Naturels' },
    { id: 'supplements', name: 'Compléments' },
    { id: 'aromatherapy', name: 'Aromathérapie' },
    { id: 'bundles', name: 'Packs Bien-être' }
  ];

  const products = [
    {
      id: 1,
      name: 'Tisane Bio Camomille Apaisante',
      category: 'teas',
      price: 24.99,
      originalPrice: 29.99,
      rating: 4.8,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Bestseller',
      description: 'Mélange premium de camomille bio pour un sommeil paisible',
      featured: true
    },
    {
      id: 2,
      name: 'Coffret Soin Visage Éclat Naturel',
      category: 'skincare',
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.9,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Nouveau',
      description: 'Routine complète de soins naturels français',
      featured: true
    },
    {
      id: 3,
      name: 'Pack Bien-Être Héritage',
      category: 'bundles',
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.7,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Édition Limitée',
      description: 'Collection de nos produits bien-être les plus populaires',
      featured: true
    },
    {
      id: 4,
      name: 'Huile Essentielle Lavande Pure',
      category: 'aromatherapy',
      price: 34.99,
      originalPrice: 44.99,
      rating: 4.6,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Bio',
      description: 'Huile de lavande premium pour la relaxation',
      featured: false
    },
    {
      id: 5,
      name: 'Complément Immunité Naturelle',
      category: 'supplements',
      price: 39.99,
      originalPrice: 49.99,
      rating: 4.5,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Populaire',
      description: 'Soutien naturel du système immunitaire',
      featured: false
    },
    {
      id: 6,
      name: 'Tisane Énergisante du Matin',
      category: 'teas',
      price: 22.99,
      originalPrice: 27.99,
      rating: 4.4,
      reviews: 92,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Sans Caféine',
      description: 'Boost d\'énergie naturel sans caféine',
      featured: false
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return b.featured - a.featured;
    }
  });

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sage-50 to-earth-50">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Notre Collection de Produits
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Découvrez nos compléments alimentaires naturels, créés avec la sagesse traditionnelle et la qualité moderne
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher des produits..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-center gap-4">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
              >
                <option value="featured">Mis en avant</option>
                <option value="name">Nom A-Z</option>
                <option value="price-low">Prix: Croissant</option>
                <option value="price-high">Prix: Décroissant</option>
                <option value="rating">Mieux notés</option>
              </select>

              {/* View Mode */}
              <div className="flex items-center border border-gray-200 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 ${viewMode === 'grid' ? 'bg-sage-100 text-sage-600' : 'text-gray-400'}`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 ${viewMode === 'list' ? 'bg-sage-100 text-sage-600' : 'text-gray-400'}`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12">
        <div className="container">
          <div className="mb-6">
            <p className="text-gray-600">
              {sortedProducts.length} produit{sortedProducts.length > 1 ? 's' : ''} trouvé{sortedProducts.length > 1 ? 's' : ''}
            </p>
          </div>

          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {sortedProducts.map((product) => (
              <div key={product.id} className={`group card overflow-hidden hover:shadow-lg transition-all duration-300 ${
                viewMode === 'list' ? 'flex' : ''
              }`}>
                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-64 flex-shrink-0' : ''}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                      viewMode === 'list' ? 'w-full h-full' : 'w-full h-64'
                    }`}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-sage-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {product.badge}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                      <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors" />
                    </button>
                  </div>
                </div>

                <div className="p-6 flex-1">
                  <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-gray-900">
                        {product.price}€
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {product.originalPrice}€
                        </span>
                      )}
                    </div>
                    <button 
                      onClick={() => addToCart(product)}
                      className="btn-primary flex items-center space-x-2"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      <span>Ajouter</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <ImageGallery />
        </div>
      </section>
    </div>
  );
};

export default Products;