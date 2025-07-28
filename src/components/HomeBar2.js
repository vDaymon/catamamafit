import React from "react";

const HomeBar = ({
  text = "¡Únete hoy y comienza tu transformación con CatamamaFit!"
}) => (
  <section className="w-full bg-gray-900 py-8">
    <div className="container mx-auto px-4">
      <p className="text-center text-white text-xl md:text-2xl font-semibold tracking-wide">
        {text}
      </p>
    </div>
  </section>
);

export default HomeBar;
