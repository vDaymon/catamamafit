import { div } from "framer-motion/client";
import React from "react";

const HomeBar = ({
  text = "NO ESTAS ESTANCADA, SOLO NECESITAS EL IMPULSO CORRECTO"
}) => (
  <div className="px-10">
    <section className="w-full bg-primary-dark py-8 ">
      <div className="container  px-4">
        <p className="text-center text-white text-xl md:text-2xl font-bold tracking-wide">
          {text}
        </p>
        <p className="text-center text-white text-lg md:text-xl ">
          Sin pastillas, sin dietas extremas, sin complicaciones.
        </p>
        <p className="text-center text-white text-lg md:text-xl ">
          Solo cambios simples que activan tu cuerpo y tus hormonas naturalmente.
        </p>
      </div>
    </section>
  </div>
);

export default HomeBar;
