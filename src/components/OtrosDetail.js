import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, type: "spring" }
  })
};

const OtrosDetail = ({ producto }) => {
  if (!producto) return <div className="pt-20 text-center">Infoproducto no encontrado</div>;
  return (
    <section className="min-h-screen bg-pink-50 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
        <motion.div
          className="w-full md:w-1/2 h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg flex-shrink-0"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={1}
        >
          <img src={producto.image} alt={producto.title} className="w-full h-full object-cover" />
        </motion.div>
        <div className="flex-grow text-center md:text-left">
          <motion.h1
            className="text-3xl md:text-4xl font-extrabold text-pink-600 mb-4"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={2}
          >
            {producto.title}
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 mb-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={3}
          >
            {producto.description}
          </motion.p>
          {producto.includes && producto.includes.length > 0 && (
            <motion.div
              className="mb-6 text-left"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={4}
            >
              <h2 className="text-xl font-bold text-pink-500 mb-2">Incluye:</h2>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                {producto.includes.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          )}
          <motion.div className="flex items-center mb-6 justify-center md:justify-start" initial="hidden" animate="visible" variants={fadeIn} custom={5}>
            <span className="text-2xl font-bold text-pink-700 mr-4">{producto.price}</span>
          </motion.div>
          <motion.a
            href={producto.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-pink-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-pink-700 transition-all duration-300 inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={6}
          >
            Comprar ahora
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default OtrosDetail;
