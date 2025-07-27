import React from "react";
import { motion } from "framer-motion";

const product = {
  name: "Proteína CatamamaFit",
  description:
    "La proteína CatamamaFit está diseñada especialmente para mujeres que buscan mejorar su bienestar, tonificar su cuerpo y alcanzar sus metas fitness. Con ingredientes naturales, sin azúcares añadidos y un delicioso sabor a vainilla.",
  features: [
    "20g de proteína por porción",
    "Sin gluten ni lactosa",
    "Aporta energía y ayuda a la recuperación muscular",
    "Fácil de disolver y digerir",
    "Ideal para batidos, smoothies o recetas saludables"
  ],
  image:
    "https://images.unsplash.com/photo-1693996045300-521e9d08cabc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  price: "$499 ",
  cta: "Comprar ahora"
};

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, type: "spring" }
  })
};

const ProteinaPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center py-20 px-4">
      <motion.div
        className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div
          className="md:w-1/2 w-full h-64 md:h-auto flex-shrink-0 overflow-hidden"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover md:rounded-l-3xl md:rounded-tr-none rounded-t-3xl md:rounded-tl-3xl md:shadow-xl"
            style={{ minHeight: '100%', minWidth: '100%' }}
          />
        </motion.div>
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-pink-600 mb-4"
            variants={fadeIn}
            custom={1}
          >
            {product.name}
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 mb-6"
            variants={fadeIn}
            custom={2}
          >
            {product.description}
          </motion.p>
          <ul className="mb-6 space-y-2">
            {product.features.map((f, i) => (
              <motion.li
                key={f}
                className="flex items-center text-gray-800 text-base"
                variants={fadeIn}
                custom={3 + i}
              >
                <span className="inline-block w-3 h-3 bg-pink-400 rounded-full mr-3 animate-pulse"></span>
                {f}
              </motion.li>
            ))}
          </ul>
          <motion.div className="flex items-center mb-6" variants={fadeIn} custom={8}>
            <span className="text-3xl font-bold text-pink-600 mr-4">{product.price}</span>
            <span className="text-gray-500 line-through text-lg">$699</span>
          </motion.div>
          <motion.button
            className="px-8 py-4 bg-pink-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-pink-700 transition-all duration-300 mt-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeIn}
            custom={9}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, type: "spring" }}
              className="inline-block"
            >
              {product.cta}
            </motion.span>
          </motion.button>
        </div>
      </motion.div>
      {/* Botón flotante WhatsApp ahora se renderiza globalmente en App.js */}
    </section>
  );
};

export default ProteinaPage;
