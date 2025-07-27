import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { heroImages } from '../mock/heroImages';
import { FaWhatsapp } from 'react-icons/fa';


export const customEase = [0.05, 0.95, 0.4, 1]; // inicio aún más lento, final rápido
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
  { label: 'Únete al reto de 21 días', link: '#' },
  { label: 'Ver comunidad', link: '#' },
  { label: 'Descubre tu plan', link: '#' },
];

const HomeHero = ({ title = 'Bienvenida a CatamamaFit', subtitle = 'Tu viaje hacia una vida más activa y feliz comienza aquí.' }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef(null);
  const numImages = heroImages.length;

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % numImages);
  };
  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + numImages) % numImages);
  };

  // Auto-slide every 4s
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % numImages);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, [numImages]);

  return (
    <section className="relative w-screen" style={{height: 'calc(100vh - 4rem)'}}>
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
              {heroImages.map((img, idx) => (
                <div
                  key={img.url}
                  className="w-screen flex-shrink-0 flex items-center justify-center relative"
                  style={{ width: '100vw', height: 'calc(100vh - 4rem)' }}
                >
                  {idx === current ? (
                    <motion.img
                      src={img.url}
                      alt={img.alt}
                      className="object-cover w-full h-full"
                      draggable={false}
                      initial={{ scale: 1 }}
                      animate={{ scale: 1.15 }}
                      transition={{ duration: 6, ease: customEase }}
                    />
                  ) : (
                    <img
                      src={img.url}
                      alt={img.alt}
                      className="object-cover w-full h-full"
                      draggable={false}
                    />
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center z-30 w-full">
          <AnimatePresence mode="wait" initial={false}>
            <motion.a
              key={current}
              href={heroButtons[current]?.link || '#'}
              className="mb-10 px-10 py-5 bg-white text-pink-600 text-2xl font-bold rounded-full shadow-2xl hover:bg-pink-50 hover:shadow-pink-300/40 transition-all duration-300 drop-shadow-xl"
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
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full ${current === idx ? "bg-pink-500" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default HomeHero;