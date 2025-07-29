import { div } from "framer-motion/client";
import React from "react";

const HomeBar = ({
  text = "¡Únete hoy y comienza tu transformación con CatamamaFit!"
}) => (
  <div className="px-10">
    <section className="w-full bg-accent-blue py-8">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-800 text-lg md:text-lg  tracking-wide uppercase">
        BASADO EN <span className="font-bold">3 PILARES</span> PARA RECUPERAR TU BIENESTAR FÍSICO, EMOCIONAL Y HORMONAL
      </p>
      </div>
    </section>
  </div>
);

export default HomeBar;
