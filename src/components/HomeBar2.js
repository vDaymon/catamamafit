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
        <motion.div  variants={fadeIn} custom={4} initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
        <p className="text-center text-gray-800 text-lg md:text-lg  tracking-wide uppercase">
        Nuestro metodo tiene <span className="font-bold">3 PILARES</span> que transforman tu cuerpo desde la raíz
      </p>
      </motion.div>

      </div>
    </section>
    </motion.div>
  </div>
);

export default HomeBar;
