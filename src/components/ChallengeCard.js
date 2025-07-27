import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, type: 'spring' }
  })
};

const ChallengeCard = ({ challenge = {}, index = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col md:flex-row w-full max-w-xl md:h-48 bg-white rounded-xl shadow-2xl overflow-hidden cursor-pointer"
      variants={fadeIn}
      initial="hidden"
      animate={controls}
      custom={index}
      whileHover={{ scale: 1.045 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Imagen: arriba en mobile, izquierda en desktop */}
      <div className="w-full md:w-1/2 h-40 md:h-full flex-shrink-0 bg-gray-100">
        <img
          src={challenge.image || 'https://via.placeholder.com/256'}
          alt={challenge.title || 'Reto'}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Info: abajo en mobile, derecha en desktop */}
      <div className="flex flex-col justify-center w-full md:w-1/2 h-40 md:h-full p-5">
        <motion.h3
          className="text-xl font-bold text-pink-600 mb-2 truncate"
          variants={fadeIn}
          custom={index + 1}
        >
          {challenge.title || 'Nombre del Reto'}
        </motion.h3>
        <motion.p
          className="text-gray-700 text-base line-clamp-2"
          variants={fadeIn}
          custom={index + 2}
        >
          {challenge.description || 'Descripción breve del reto.'}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ChallengeCard;