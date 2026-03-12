import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Globe } from 'lucide-react';

const LocationsMap = () => {
  const locations = [
    {
      id: 1,
      name: 'NatureMama Heritage HQ',
      address: '123 Heritage Lane, Nature Valley, CA 90210',
      phone: '+1 (555) 123-4567',
      hours: 'Mon-Fri: 9AM-6PM PST',
      type: 'Headquarters',
      coordinates: { lat: 34.0522, lng: -118.2437 }
    },
    {
      id: 2,
      name: 'Wellness Center East',
      address: '456 Wellness Way, Harmony Hills, NY 10001',
      phone: '+1 (555) 234-5678',
      hours: 'Mon-Sat: 10AM-7PM EST',
      type: 'Retail & Wellness Center',
      coordinates: { lat: 40.7128, lng: -74.0060 }
    },
    {
      id: 3,
      name: 'Heritage Farm & Visitor Center',
      address: '789 Organic Trail, Green Valley, OR 97001',
      phone: '+1 (555) 345-6789',
      hours: 'Daily: 8AM-5PM PST',
      type: 'Farm & Tours',
      coordinates: { lat: 45.5152, lng: -122.6784 }
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Locations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visit us at one of our locations or take a virtual tour of our heritage farms and wellness centers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-100 to-earth-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              {/* Interactive Map Placeholder */}
              <div className="text-center">
                <Globe className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">
                  Interactive Map
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore our locations worldwide
                </p>
                <button className="btn-primary">
                  View Full Map
                </button>
              </div>
            </div>
            
            {/* Map would be integrated here with react-leaflet */}
            {/* 
            <MapContainer
              center={[39.8283, -98.5795]}
              zoom={4}
              className="h-96 rounded-2xl"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {locations.map((location) => (
                <Marker
                  key={location.id}
                  position={[location.coordinates.lat, location.coordinates.lng]}
                >
                  <Popup>
                    <div className="p-2">
                      <h3 className="font-semibold">{location.name}</h3>
                      <p className="text-sm">{location.address}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
            */}
          </motion.div>

          {/* Locations List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 rounded-full p-3 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-display text-xl font-semibold text-gray-900">
                        {location.name}
                      </h3>
                      <span className="bg-earth-100 text-earth-700 px-3 py-1 rounded-full text-sm font-medium">
                        {location.type}
                      </span>
                    </div>
                    
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span>{location.address}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <span>{location.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span>{location.hours}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex space-x-3">
                      <button className="btn-primary py-2 px-4 text-sm">
                        Get Directions
                      </button>
                      <button className="border border-primary-600 text-primary-600 hover:bg-primary-50 py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                        Call Now
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Visit Us CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-earth-600 rounded-2xl p-8 lg:p-12 text-white text-center"
        >
          <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4">
            Experience NatureMama Heritage in Person
          </h3>
          <p className="text-lg text-primary-100 mb-6 max-w-2xl mx-auto">
            Visit our wellness centers for personalized consultations, product demonstrations, 
            and exclusive in-store experiences. Book your visit today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Schedule a Visit
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-primary-600 px-6 py-3 rounded-lg font-medium transition-colors">
              Virtual Tour
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationsMap;