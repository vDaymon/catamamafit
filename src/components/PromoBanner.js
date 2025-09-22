import React from 'react';

const PromoBanner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] bg-pink-600 text-white py-2 overflow-hidden">
      <div className="flex animate-scroll">
        <div className="flex whitespace-nowrap">
          <span className="text-sm font-medium mx-8">
            🎯 ¡ÚNETE AL RETO AHORA! Empezamos el próximo xxx - ¡No te quedes fuera! 🎯
          </span>
          <span className="text-sm font-medium mx-8">
            💪 Transforma tu cuerpo en 21 días 💪
          </span>
          <span className="text-sm font-medium mx-8">
            🏃‍♀️ ¡ÚNETE AL RETO AHORA! Empezamos el próximo xxx - ¡Plazas limitadas! 🏃‍♀️
          </span>
          <span className="text-sm font-medium mx-8">
            ⭐ ¡Más de 1,000 mujeres ya se unieron al reto! ¡Sé la siguiente! ⭐
          </span>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
