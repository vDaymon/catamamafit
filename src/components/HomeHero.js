import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { heroImagesDesktop, heroImagesMobile } from '../mock/heroImages';

export const customEase = [0.05, 0.95, 0.4, 1];
export const customDuration = 1.5;

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, type: 'spring' }
  })
};

const heroButtons = [
  { label: 'Quiero unirme ahora', link: '#' },
  { label: 'Ver los programas', link: '#' },
  { label: 'ver todos los planes', link: '#' },
];

const HomeHero = ({ 
  title = 'Bienvenida a CatamamaFit', 
  subtitle = 'Tu viaje hacia una vida más activa y feliz comienza aquí.'
}) => {
  const [current, setCurrent] = useState(0);
  const [images, setImages] = useState(heroImagesDesktop); // Lista inicial
  const intervalRef = useRef(null);

  const numImages = images.length;

  // Cambiar imágenes según el ancho de pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setImages(heroImagesMobile);
      } else {
        setImages(heroImagesDesktop);
      }
    };

    handleResize(); // Ejecuta al montar
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % numImages);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + numImages) % numImages);
  };

  // Auto-slide
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % numImages);
    }, 10000);
    return () => clearInterval(intervalRef.current);
  }, [numImages]);

  return (
    <section className="relative w-screen md:h-[calc(100vh-4rem)] h-[50vh]">
      <div className="relative z-10 w-full h-full flex flex-col items-center">
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          <div className="w-full h-full overflow-hidden relative">
            <motion.div
              className="flex h-full"
              initial={false}
              animate={{ x: `-${current * 100}vw` }}
              transition={{ duration: customDuration, ease: customEase }}
              style={{ width: `${numImages * 100}vw` }}
            >
              {images.map((img, idx) => (
                <div
                  key={img.url}
                  className="w-screen flex-shrink-0 flex items-center justify-center relative md:h-[calc(100vh-4rem)] h-[50vh] bg-black"
                >
                  {idx === current ? (
                    <motion.img
                      src={img.url}
                      alt={img.alt}
                      className="w-full h-full object-fill md:object-cover"
                      draggable={false}
                      initial={{ scale: 1 }}
                      animate={{ scale: 1.15 }}
                      transition={{ duration: 6, ease: customEase }}
                    />
                  ) : (
                    <img
                      src={img.url}
                      alt={img.alt}
                      className="w-full h-full  object-fill md:object-cover"
                      draggable={false}
                    />
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Botones y navegación */}
        <div className="absolute bottom-10 md:bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center z-30 w-full">
          <AnimatePresence mode="wait" initial={false}>
            <motion.a
              key={current}
              href={heroButtons[current]?.link || '#'}
              className="mb-4 md:mb-5 px-6 md:px-10 py-3 md:py-4 bg-primary-dark text-white text-lg md:text-2xl font-bold shadow-2xl hover:bg-primary-light hover:shadow-pink-300/40 transition-all duration-300 drop-shadow-xl"
              style={{ boxShadow: '0 8px 32px 0 rgba(255, 0, 128, 0.15), 0 2px 8px 0 rgba(0,0,0,0.10)' }}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              exit="hidden"
              custom={1}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                key={heroButtons[current]?.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, type: 'spring', delay: 0.2 }}
                className="inline-block"
              >
                {heroButtons[current]?.label}
              </motion.span>
            </motion.a>
          </AnimatePresence>

          <div className="flex justify-center gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full ${current === idx ? 'bg-pink-500' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
    