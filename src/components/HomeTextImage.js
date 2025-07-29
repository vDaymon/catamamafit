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
  image = "https://i.imgur.com/KqNL6Gl.jpeg",
  title = "",
  text = "Descubre cómo nuestros programas y comunidad pueden ayudarte a lograr tus objetivos de bienestar físico y mental. Únete a miles de mujeres que ya están cambiando su vida.",

}) => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-start gap-10 md:gap-16">
        <motion.div
          className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          custom={2}
        >
          
       <p className="text-lg text-gray-700  whitespace-pre-line">
  ¿Te sientes <span className="font-bold">inflamada</span>, con <span className="font-bold">baja</span> energía, <span className="font-bold">llena de antojos</span> y <span className="font-bold">desconectada</span> de ti misma?{"\n\n"}

  Yo también pasé por ahí.{"\n\n"}

  Por eso cree <span className="font-bold">LEVEL UP</span>, para ayudarte a recuperar tu bienestar.{"\n\n"}

  Después de los 35, muchas mujeres sienten que su cuerpo <span className="font-bold">ya no responde igual</span>… y la causa suele ser un desbalance hormonal.{"\n\n"}

  <span className="font-bold">La buena noticia</span> es que tu cuerpo no está roto.{"\n"}
  Solo necesita el ambiente correcto para volver a <span className="font-bold">activarse</span>.
</p>

<p className="text-lg text-gray-700 mb-6 whitespace-pre-line">
  <span className="font-bold">LEVEL UP</span> es un reto de 21 días de transformación física, emocional y hormonal para mujeres mayores de 35 años.{"\n\n"}

  Es una guía paso a paso donde aprenderás a activar tu metabolismo, regular tus hormonas y transformar tu cuerpo <span className="font-bold">sin dietas extremas ni entrenamientos eternos</span>.{"\n\n"}

  Con acompañamiento diario, alimentación específica, rutinas de entrenamiento de 30 minutos, miniretos, motivación, y el crecimiento personal y espiritual como base… vivirás un <span className="font-bold">cambio real desde adentro hacia afuera</span>.
</p>

          
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 order-1 md:order-2 h-full  overflow-hidden shadow-xl mb-8 md:mb-0 self-stretch "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          custom={1}
        >
          <div className="w-full h-full flex">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeTextImage;
