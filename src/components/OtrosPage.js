import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { otrosProductos } from "../mock/otros";
import useBackgroundImage from "../hooks/useBackgroundImage";


// Slugify helper igual que en App.js
function slugify(text) {
  return text
    .toString()
    .normalize('NFD').replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, type: "spring" }
  })
};

const OtrosPage = () => {
  const { imageLoaded, imageError } = useBackgroundImage('./imgs/fondoguias.png');
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (imageLoaded) {
      setShowContent(true);
    }
  }, [imageLoaded]);

  return (
    <section className="py-20 bg-white min-h-screen relative" style={{
      backgroundImage: imageLoaded ? 'url(./imgs/fondoguias.png)' : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: imageError ? '#f3f4f6' : 'white'
    }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Guías de Alimentación</h2>
        {!imageLoaded && !imageError && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600"></div>
          </div>
        )}
        <div className={`flex flex-col items-center gap-12 transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          {otrosProductos.map((prod, i) => (
            <motion.div
              key={prod.id}
              className="w-full max-w-xl bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              custom={i + 1}
            >
              <div className="md:w-1/3 w-full h-48 md:h-auto flex-shrink-0 bg-gray-100 flex items-center justify-center">
                <img src={prod.image} alt={prod.title} className="object-cover w-full h-full" />
              </div>
              <div className="flex flex-col justify-center w-full md:w-2/3 h-auto p-6 min-h-[180px] md:min-h-0">
                <h3 className="text-2xl font-bold text-pink-600 mb-2">{prod.title}</h3>
                <p className="text-gray-700 text-base mb-4">{prod.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xl font-bold text-pink-700">{prod.price}</span>
                  <Link
                    to={`/guias/${slugify(prod.title)}`}
                    className="px-6 py-2 bg-pink-600 text-white font-semibold shadow hover:bg-pink-700 transition-all duration-300"
                  >
                    Ver detalles
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtrosPage;
