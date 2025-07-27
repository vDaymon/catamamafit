import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, type: 'spring' }
  })
};

const HomeFeatures = ({ features = [] }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-900 mb-12"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          ¿Por qué CatamamaFit?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-pink-50 p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index + 1}
            >
              <div className="mb-4 text-center flex justify-center items-center min-h-[160px]">
                {feature.image && (
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-1/2 h-40 md:h-48 object-cover rounded-xl mx-auto"
                    style={{ minWidth: '160px', maxWidth: '100%' }}
                  />
                )}
                {feature.video && feature.video.includes('youtube') && (
                  <div className="w-full flex justify-center">
                    <div className="relative w-full" style={{ paddingBottom: '56.25%', maxWidth: '350px' }}>
                      <iframe
                        src={(() => {
                          // Extrae el ID del video de YouTube de diferentes formatos
                          const match = feature.video.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/);
                          return match ? `https://www.youtube.com/embed/${match[1]}` : '';
                        })()}
                        title={feature.title}
                        className="absolute top-0 left-0 w-full h-full rounded-xl"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                )}
                {feature.video && !feature.video.includes('youtube') && (
                  <video className="w-1/2 h-40 md:h-48 rounded-xl mx-auto" autoPlay loop muted playsInline style={{ minWidth: '160px', maxWidth: '100%' }}>
                    <source src={feature.video} type="video/mp4" />
                    Tu navegador no soporta el video.
                  </video>
                )}
              </div>
              <motion.h3
                className="text-2xl font-semibold text-gray-800 mb-4 text-center"
                variants={fadeIn}
                custom={index + 2}
              >
                {feature.title}
              </motion.h3>
              <motion.p
                className="text-gray-600 text-center"
                variants={fadeIn}
                custom={index + 3}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;