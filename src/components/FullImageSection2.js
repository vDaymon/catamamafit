import React from 'react';
import { motion } from 'framer-motion';

const FullImageSection = ({ image = 'https://i.imgur.com/MXiFtN9.png', alt = 'Sección destacada' }) => (
  <section className="w-full h-[60vh] md:h-[80vh] flex items-center justify-center relative overflow-hidden bg-primary-dark">
    <motion.img
      src={image}
      alt={alt}
      className=" object-contain max-h-full max-w-full "
      initial={{ scale: 1.1, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, type: 'spring' }}
      viewport={{ once: true }}
    />
    {/* Puedes agregar contenido centrado aquí si lo deseas */}
  </section>
);

export default FullImageSection;
