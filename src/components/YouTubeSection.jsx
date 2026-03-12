import { motion } from 'framer-motion';
import YouTube from 'react-youtube';
import { Play } from 'lucide-react';

const YouTubeSection = () => {
  const videos = [
    {
      id: 'dQw4w9WgXcQ', // Replace with actual video IDs
      title: 'Our Heritage Story',
      description: 'Discover the roots of NatureMama Heritage and our commitment to natural wellness'
    },
    {
      id: 'dQw4w9WgXcQ', // Replace with actual video IDs
      title: 'Product Sourcing Journey',
      description: 'Follow our journey as we source the finest natural ingredients from around the world'
    },
    {
      id: 'dQw4w9WgXcQ', // Replace with actual video IDs
      title: 'Customer Success Stories',
      description: 'Real stories from customers who have transformed their wellness journey with us'
    }
  ];

  const opts = {
    height: '315',
    width: '100%',
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
    },
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Story in Motion
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch our journey unfold through these carefully crafted stories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <div className="aspect-video">
                  <YouTube
                    videoId={video.id}
                    opts={opts}
                    className="w-full h-full"
                  />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                  {video.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {video.description}
                </p>
                <button className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors">
                  <Play className="h-4 w-4" />
                  <span>Watch Now</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-earth-600 rounded-2xl p-8 lg:p-12 text-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4">
                The Complete NatureMama Experience
              </h3>
              <p className="text-lg mb-6 text-primary-100">
                Join us for an in-depth look at our philosophy, processes, and the 
                passionate people behind every product we create.
              </p>
              <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Watch Full Documentary</span>
              </button>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <YouTube
                videoId="dQw4w9WgXcQ" // Replace with actual featured video ID
                opts={{
                  ...opts,
                  height: '100%',
                }}
                className="w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default YouTubeSection;