import React from 'react';
import { motion } from 'framer-motion';

const FullImageSection = ({ image = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', alt = 'Sección destacada' }) => (
  <section className="w-full h-[60vh] md:h-[80vh] flex items-center justify-center relative overflow-hidden bg-black">
    <motion.img
      src={image}
      alt={alt}
      className="w-full h-full object-cover object-center absolute top-0 left-0 z-0"
      initial={{ scale: 1.1, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, type: 'spring' }}
      viewport={{ once: true }}
    />
    {/* Puedes agregar contenido centrado aquí si lo deseas */}
  </section>
);

export default FullImageSection;
