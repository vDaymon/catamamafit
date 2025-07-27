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

const HomeTextImage = ({
  image = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  title = "Transforma tu vida con CatamamaFit",
  text = "Descubre cómo nuestros programas y comunidad pueden ayudarte a lograr tus objetivos de bienestar físico y mental. Únete a miles de mujeres que ya están cambiando su vida.",
  cta = "Conoce más",
  ctaLink = "/retos"
}) => {
  return (
    <section className="py-16 bg-pink-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <motion.div
          className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          custom={2}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-pink-700 mb-4 leading-tight">{title}</h2>
          <p className="text-lg text-gray-700 mb-6">{text}</p>
          <a
            href={ctaLink}
            className="inline-block px-8 py-3 bg-pink-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-pink-700 transition-all duration-300"
          >
            {cta}
          </a>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 order-1 md:order-2 h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl mb-8 md:mb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          custom={1}
        >
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeTextImage;
