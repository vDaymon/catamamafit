import React from 'react';

const Footer = () => (
  <footer className="bg-pink-700 text-white py-8 text-center flex flex-col items-center gap-2">
    <p>&copy; {new Date().getFullYear()} CatamamaFit. Todos los derechos reservados.</p>
    <div className="flex flex-wrap gap-4 mt-2 justify-center">
      <a href="/guias" className="underline hover:text-pink-200 transition-colors">Guías</a>
      <a href="/privacidad" className="underline hover:text-pink-200 transition-colors">Política de Privacidad</a>
      <a href="/terminos" className="underline hover:text-pink-200 transition-colors">Términos y Condiciones</a>
      <a href="/envios" className="underline hover:text-pink-200 transition-colors">Política de Envíos/Devoluciones</a>
      <a href="/pagos" className="underline hover:text-pink-200 transition-colors">Política de Pagos/Reembolsos</a>
      <a href="/responsabilidad" className="underline hover:text-pink-200 transition-colors">Aviso de Responsabilidad</a>
      <a href="/thankyou" className="underline hover:text-pink-200 transition-colors">Gracias por tu compra</a>
    </div>
  </footer>
);

export default Footer;
