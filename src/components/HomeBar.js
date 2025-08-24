import { div } from "framer-motion/client";
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

const HomeBar = ({
  text = "NO ESTAS ESTANCADA, SOLO NECESITAS EL IMPULSO CORRECTO"
}) => (
  <div className="px-10 py-5">
    <motion.div  variants={fadeIn} custom={2} initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
    <section className="w-full bg-primary-dark py-8 shadow-xl">
      <div className="container  px-4">
        <motion.div  variants={fadeIn} custom={2} initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
        <p className="text-center text-white text-xl md:text-2xl font-bold tracking-wide">
          {text}
        </p>
        </motion.div>
         <motion.div  variants={fadeIn} custom={4} initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
        <p className="text-center text-white text-lg md:text-xl ">
          Sin pastillas, sin dietas extremas, sin complicaciones.
        </p>
        </motion.div>
         <motion.div  variants={fadeIn} custom={6} initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
        <p className="text-center text-white text-lg md:text-xl ">
          Solo cambios simples que activan tu cuerpo y tus hormonas naturalmente.
        </p>
        </motion.div>
      </div>
    </section>
    </motion.div>
  </div>
);

export default HomeBar;
