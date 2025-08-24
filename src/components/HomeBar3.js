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
  text = "¡Únete hoy y comienza tu transformación con CatamamaFit!"
}) => (
  <div className="px-10 pb-5">
    <motion.div  variants={fadeIn} custom={2} initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}>
    <section className="w-full bg-accent-blue py-8 shadow-xl">
      <div className="container mx-auto px-4">
        <motion.div  variants={fadeIn} custom={2} initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}>
        <p className="text-center text-gray-800 text-lg md:text-lg font-bold tracking-wide uppercase">
        Pierde hasta 5 kilos de grasa y gana músculo trabajando con tus hormonas
      </p>
      </motion.div>
      <motion.div  variants={fadeIn} custom={2} initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}>
      <p className="text-center text-gray-800 text-lg md:text-lg tracking-wide ">
        sin dietas extremas, sin matarte en el gym y sin pelear con tu cuerpo.
      </p>
      </motion.div>
      </div>
    </section>
    </motion.div>
  </div>
);

export default HomeBar;
