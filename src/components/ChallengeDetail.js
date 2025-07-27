import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ChallengeDetail = ({ challenge = {} }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="min-h-screen bg-pink-50 py-16 px-4">
      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <motion.div
            className="flex-shrink-0 w-full md:w-80 h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            <img
              src={challenge.image || 'https://via.placeholder.com/320'}
              alt={challenge.title || 'Reto'}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="flex-grow text-center md:text-left">
            <motion.h1
              className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, type: 'spring', delay: inView ? 0.2 : 0 }}
            >
              {challenge.title || 'Título del Reto'}
            </motion.h1>
            <motion.p
              className="text-gray-700 mb-6 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, type: 'spring', delay: inView ? 0.4 : 0 }}
            >
              {challenge.description || 'Aquí va una descripción detallada del reto, sus beneficios, lo que incluye y a quién está dirigido. ¡Anímate a transformarte!'}
            </motion.p>
            <motion.div
              className="mb-8 bg-gray-900 rounded-2xl p-6 shadow-inner text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, type: 'spring', delay: inView ? 0.6 : 0 }}
            >
              <h3 className="text-2xl font-bold text-pink-300 mb-3">¿Qué incluye?</h3>
              <ul className="list-disc list-inside text-gray-100 space-y-2 text-left mx-auto md:mx-0 max-w-md">
                {challenge.includes && challenge.includes.length > 0 ? (
                  challenge.includes.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-pink-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))
                ) : (
                  <li>Plan de entrenamiento personalizado</li>
                )}
              </ul>
            </motion.div>
            <motion.p
              className="text-3xl font-extrabold text-pink-600 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, type: 'spring', delay: inView ? 0.8 : 0 }}
            >
              {challenge.price ? `$${challenge.price}` : 'Precio: Consultar'}
            </motion.p>
            <motion.a
              href="https://wa.me/5491112345678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-pink-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-pink-400 transition-all duration-300 mt-2"
              aria-label="WhatsApp"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ¡Inscríbete Ahora!
            </motion.a>
          </div>
        </div>
        {/* FAQ Section */}
        <motion.div
          className="mt-12 bg-pink-50 rounded-2xl p-6 shadow-inner"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, type: 'spring', delay: inView ? 1.2 : 0 }}
        >
          <h2 className="text-2xl font-bold text-pink-700 mb-4">Preguntas frecuentes</h2>
          <ul className="space-y-3 text-gray-700 text-base">
            {challenge.faq && challenge.faq.length > 0 ? (
              challenge.faq.map((item, idx) => (
                <li key={idx}><strong>{item.q}</strong> {item.a}</li>
              ))
            ) : (
              <li>No hay preguntas frecuentes para este reto.</li>
            )}
          </ul>
          <div className="mt-6 text-center">
            <motion.a
              href="https://wa.me/5491112345678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-pink-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-pink-700 transition-all duration-300 mt-2"
              aria-label="WhatsApp"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ¿Tienes más preguntas? Escríbenos por WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ChallengeDetail;