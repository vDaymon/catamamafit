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
const fadeIn2 = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.6, duration: 0.7, type: "spring" }
  })
};

const Photosection = ({
  image2 = "https://i.imgur.com/HcKtUa0.png",
  image1 = "https://i.imgur.com/9XMuIti.png",
  title = "",
  text = "Descubre cómo nuestros programas y comunidad pueden ayudarte a lograr tus objetivos de bienestar físico y mental. Únete a miles de mujeres que ya están cambiando su vida.",

}) => {
  return (
    <section className="py-16 bg-primary-dark">
      <h2 className="text-3xl  text-center  text-white uppercase font-bold">¿Qué incluye el reto?</h2>
  <div className="container mx-auto px-4 flex flex-col md:flex-row items-stretch ">
    
    {/* Imagen 1 */}
    <motion.div
      className="w-full md:w-1/2 h-full overflow-hidden  self-stretch "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
      custom={1}
    >
      <div className="w-full h-full">
        <img
          src={image1}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>

    {/* Imagen 2 */}
    <motion.div
      className="w-full md:w-1/2 h-full overflow-hidden  self-stretch px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn2}
      custom={1}
    >
      <div className="w-full h-full">
        <img
          src={image2}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>

  </div>
</section>

  );
};

export default Photosection;
