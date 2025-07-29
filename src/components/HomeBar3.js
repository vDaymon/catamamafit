import { div } from "framer-motion/client";
import React from "react";

const HomeBar = ({
  text = "¡Únete hoy y comienza tu transformación con CatamamaFit!"
}) => (
  <div className="px-10 py-10">
    <section className="w-full bg-accent-blue py-8">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-800 text-lg md:text-lg font-bold tracking-wide uppercase">
        Pierde hasta 5 kilos de grasa y gana músculo trabajando con tus hormonas
      </p>
      <p className="text-center text-gray-800 text-lg md:text-lg tracking-wide ">
        sin dietas extremas, sin matarte en el gym y sin pelear con tu cuerpo.
      </p>
      </div>
    </section>
  </div>
);

export default HomeBar;
